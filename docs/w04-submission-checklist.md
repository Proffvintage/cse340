# W04 Submission and Deployment Checklist

Student: Markson

Course source: <https://byui-cse.github.io/cse340-ww-course-v2/week04/index.html>

## Finished locally

- All six learning-activity features, the service-project update team activity, and category creation/update assignment features are implemented.
- The W04 integration suite passed, including 349 invalid submissions, boundary values, persistence, session isolation, escaped output, concurrent updates, rollback, and error recovery.
- W03 MVC regression checks passed.
- The additive project-title migration is prepared and tested.
- Rubric evidence, technical team responses, a reflection draft, the unchanged coaching prompt, and a clearly labeled coaching rehearsal are saved in this repository.

## Publication status

Week 4 is deployed and verified:

- Repository: <https://github.com/Proffvintage/cse340>
- Hosted application: <https://hate-uchiha-cse340.onrender.com>
- Render deployment: `dep-dbtemdh42hec73b92sj0`, Live on November 16, 2026
- Deployment bundle: <https://github.com/Proffvintage/cse340/releases/tag/deploy-w04-20261115>
- Evidence: `docs/evidence/w04/deployment.json`

The active GitHub and Render accounts, service repository, and production database were verified as Markson's. A private generated `SESSION_SECRET` was configured, and the hosted project-title column was migrated from 150 to 200 characters without changing seeded rows. The verified Week 4 source is committed and pushed to `main`; `docs/evidence/w04/deployment.json` records the commit.

Hosted verification covered all create/edit forms, browser/server validation, sticky values, one-time feedback, organization and project creation/update, partner selection, category creation/update, both category-assignment routes, missing records, the production 500 page, and static assets. Temporary verification records were removed transactionally; production returned to 3 organizations, 15 projects, 4 categories, and 24 links.

## Deployment maintenance

The prerelease archive records the initial no-commit deployment. After the authorized source commit and push, the Render build command was restored to ordinary `npm install` and the service was redeployed from `main`. The archive can remain as historical evidence but is no longer required by the active build. Do not rerun database seed setup on the initialized database.

## Course actions that require real student participation

- Complete the learning-activity and team quizzes in Canvas. Their questions were not supplied here, and no attempt is claimed.
- Attend the required one-hour Teams meeting or complete the official absence checklist and actual channel post. The prepared discussion text is not attendance evidence.
- Have a real coaching conversation of at least 30 minutes, covering all four topics with project-specific snippets, and save the entire actual exchange. The rehearsal must not be submitted as if it records real learner responses.
- Review the reflection draft so it describes the learner's actual experience.
- Submit the repository and verified hosted URLs for the application assignment, the actual coaching transcript, and the status update separately in Canvas.
