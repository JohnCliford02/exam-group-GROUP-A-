# exam-group-GROUP-A-
# TANGLAO - ADD GET/exams
# ADOLFO - ADD POST/exams
# MAHINAY - ADD UPDATE/exams

# API DOCUMENTATION
# URL: http://localhost:3000/

### 1. [Get All Exams](http://localhost:3000/exams)
- **Endpoint:** `GET /exams`
- **Response:**
  ```json
    {
        "id": 1,
        "name": "Midterm Exam",
        "subject": "Mathematics"
    },
    {
        "id": 2,
        "name": "Final Exam",
        "subject": "History"
    },
    {
        "id": 3,
        "name": "Midterm Exam",
        "subject": "IntProg"
    },
    {
        "id": 4,
        "name": "Final Exam",
        "subject": "IntProg102"
    },
    {
        "id": 5,
        "name": "Final Exam",
        "subject": "InfoSec"
    }

# [POST/exams](http://localhost:3000/exams)
{
    "name":"Final Exam",
   "subject": "Database"
}

# RESPONSE 
{
    "id": 6,
    "name": "Final Exam",
    "subject": "Science"
}

# [PUT/exams] (http://localhost:3000/exams/1)


{
  "name": "Updated Midterm Exam",
  "subject": "Physics"
}

#
