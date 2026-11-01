const assert = require("node:assert/strict")
const path = require("node:path")
require("dotenv").config({ path: path.join(__dirname, "..", ".env") })

const base = new URL(process.argv.slice(2).find((argument) => argument !== "--") || "http://localhost:5500")
const studentName = process.env.STUDENT_NAME || "Hate-Uchiha"
const escapeHtml = (value) => value.replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&#34;", "'": "&#39;",
})[character])

async function check(resource, status, contentType) {
  const response = await fetch(new URL(resource, base), {
    signal: AbortSignal.timeout(60000),
  })
  assert.equal(response.status, status, `${resource}: HTTP status`)
  if (contentType) {
    assert.match(response.headers.get("content-type") || "", contentType)
  }
  return response
}

async function main() {
  const home = await check("/", 200, /text\/html/)
  const html = await home.text()
  assert.ok(html.includes("<title>Home | CSE Motors</title>"), "Rendered title")
  assert.ok(html.includes(`<h1>${escapeHtml(studentName)}</h1>`), "Student heading")
  assert.ok(html.includes('id="top-header"'), "Header partial")
  assert.ok(html.includes('<nav aria-label="Main navigation">'), "Navigation partial")
  assert.ok(html.includes(`${new Date().getFullYear()}, CSE 340 App`), "Footer year")
  assert.ok(!html.includes("<%"), "EJS tags must be rendered")
  console.log("PASS home: rendered title, heading, layout, partials, and year")

  const stylesheet = await check("/css/styles.css", 200, /text\/css/)
  assert.ok((await stylesheet.text()).trim().length > 0, "Stylesheet has content")
  console.log("PASS stylesheet")
  await check("/js/script.js", 200, /javascript/)
  console.log("PASS static JavaScript")
  const favicon = await check("/images/site/favicon-32x32.png", 200, /image\/png/)
  assert.ok((await favicon.arrayBuffer()).byteLength > 0, "Favicon has content")
  console.log("PASS favicon")
  for (const resource of ["/missing-w01-page", "/.env", "/server.js"]) {
    await check(resource, 404)
    console.log(`PASS ${resource}: 404`)
  }
  console.log(`All 7 HTTP checks passed for ${base.origin}`)
}

main().catch((error) => {
  console.error(`Verification failed: ${error.message}`)
  process.exitCode = 1
})
