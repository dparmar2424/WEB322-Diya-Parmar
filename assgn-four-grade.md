# Assignment Rubric: Cleanup, Refactoring & Adding REST Endpoints to your Application

## General Information

- **Assignment Title:** Cleanup, Refactoring & Adding REST Endpoints to your Application
- **Submission Method:** Git Repository on the **main branch**

---

## Functional Requirements (100 points)

| Requirement                                           | Points |    |
| ----------------------------------------------------- | ------ |----|
| DB                                                    |        |    |
| - neondb created                                      | 10     | 10 |
| Routes                                                |        |    |
| - api CRUD endpoints added for orders                 | 10     | 10 |
| Server                                                |        |    |
| - sequelize or mongo dependencies added               | 10     | 10 |
| - successfully connect to db                          | 10     | 10 |
| Create Database Objects Definitions                   |        |    |
| - User                                                | 10     | 7  |
| - Product                                             | 10     | 7  |
| - Order                                               | 10     | 7  |
| Change your service classes use your Database objects |        |    |
| - User                                                | 10     | 9  |
| - Product                                             | 10     | 10 |
| - Order                                               | 10     | 10 |

## Total Score: 90 / 100

Overall this is very good.  I didn't check all endpoint but when I posted to users
there were a couple of things.

On create don't let the client supply the id.  You need to make sure it is unique so 
either remove it from model and let sequelize generate it or generate it in the service 
yourself using uuid().   
There was also an issue the timestsamps.  You have them maked as false in the model but
they are in the db.   By removing that the post worked.
