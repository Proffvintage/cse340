# W03 Team Activity: Displaying Service Projects

Course source: <https://byui-cse.github.io/cse340-ww-course-v2/week03/team-activity.html>

The project model provides `getUpcomingProjects(numberOfProjects)` and `getProjectDetails(projectId)`. Both queries join `organization` because a project stores the sponsor ID while the page also needs the readable organization name. The limit and route ID are passed through PostgreSQL placeholders rather than interpolated into SQL.

The projects controller defines `NUMBER_OF_UPCOMING_PROJECTS = 5`, asks the model for that number of future projects, and renders one project for `/project/:id`. The EJS list renders the already-limited array supplied by the controller; presentation code does not decide how many database rows to retrieve.

Detail pages use escaped `<%= ... %>` output because database values are still untrusted. Links connect projects to `/organization/:id` and `/category/:id`, allowing the browser request to follow the stored database relationships through the MVC layers.
