# Assignment Rubric: Cleanup, Refactoring & Adding REST Endpoints to your Application

## General Information

- **Assignment Title:** Cleanup, Refactoring & Adding REST Endpoints to your Application
- **Submission Method:** Git Repository on the **main branch**

---

## Functional Requirements (70 points)

| Requirement                                                 | Points |     |
| ----------------------------------------------------------- | ------ | --- |
| Github                                                      |        |     |
| - code is on the main branch                                | 5      | 0   |
| - node_modules is not in the repository                     | 5      | 0   |
| Routes                                                      |        |     |
| - api CRUD endpoints added for users                        | 10     | 8   |
| - api CRUD endpoints added for products                     | 10     | 8   |
| - api login endpount added                                  | 10     | 8   |
| - routes are refactored router modules                      | 15     | 15  |
| Data                                                        |        |     |
| - user data is moved under data folder                      | 5      | 0   |
| - product data is moved under data folder                   | 5      | 0   |
| Service Classes                                             |        |     |
| - create a User Service for CRUD operations                 | 10     | 8   |
| - create a Product Service for CRUD operations              | 10     | 8   |
| - create an AuthenticationService for simple authentication | 15     | 15  |

## Total Score: 77 / 100

### Comments:

This looks pretty good but I am seeing a lot of you with an oddly similar problem. The code works but you should be handling responses in the routes and not the services.

For example:
`apiRouter.get('/users', userService.getAllUsers);`

should be:

````apiRouter.get('/users', (req,res)=>{
res.json(userService.getAllUsers())
});```

Making that change will enable to reuse the Service for the page routes as well.

You also missed some of the clean up work:
1. code should be on main branch
2. data should be under data folder
3. please don't submit as a zip.  for the last assignment when we
deploy to the cloud this won't work.
````
