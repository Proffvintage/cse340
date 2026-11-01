const express = require("express")
const path = require("node:path")
const router = express.Router()

// Static Routes
// Set up "public" folder / subfolders for static files
// Mount public at the URL root, using a path independent of the launch folder.
router.use(express.static(path.join(__dirname, "..", "public")))

module.exports = router
