# Todo app using Redux 
## Description
a simple app to track your tasks with user authentication and authorization using Mongoo, Express, React, node js and Redux.
---
---
## User Stories
* Register: fot this app I need to register a new account to use task tracker
* Log in: to see my progress, I ca log in to the app using email and password
* Log out to keep my tasks privet, I can log out the app while saving my tasks
* Add a task: as a user I can add a new task to my account
* Show tasks: as a can show my previous task
* Update a task: as a user I can update any task I have
* Delete a task: as a user I can delete any of my tasks
* Admin can delete any user
* Admin can show all users
---
# Client / Frontend
## React Router Routes (React App)
| Path | Component | Behavior |
| :---         |     :---:      |          ---: |
| /  | Home     | Home page    |
| /register     | Register      |Signup input, link to login, navigate to homepage after signup      |
| /login   | Login     | Login input, link to signup, navigate to homepage after login    |
| /admin     | Admin       | Admin page can show all users, delete any user, delete any task    |
## Components
* Register
* Login
* Home
* Admin
---
# UML Diagram
![alt text](https://github.com/Ghadier-Alenezi/W09D03/blob/main/Untitled%20Diagram.drawio.png)

---
# Server / Backend 
## Models
### user model
```
const mongoose = require("mongoose");

const user = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: [{ type: mongoose.Schema.Types.ObjectId, ref: "Role" }],
});

module.exports = mongoose.model("User", user);
```

### role model
```
const mongoose = require("mongoose");

const role = new mongoose.Schema({
  role: { type: String, required: true },
  Permissions: { type: Array, required: true },
});

module.exports = mongoose.model("Role", role);
```
### task model
```
const mongoose = require("mongoose");

const task = new mongoose.Schema({
    name: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

  module.exports = mongoose.model("Task", task);
```
## Backend routes
| HTTP Method | URL | Request Body | Success status | Error Status | Description |
| :---         |     :---:      |          ---: |          ---: |          ---: |          ---: | 
| post  | /register    | {email, password, role }    | 201 | 400 | create user with encrypted password, and store user in session
| post  | /login    | {email, password }    | 200 | 400 | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session
get  | /users    | {empty}    | 200 | 400 | Make admin check all users in the app
delete  | /user/:id    | {empty}    | 200 | 400 | Make admin delete any user in the app
post  | /newTask    | {name, user}    | 201 | 400 | Make user add new task
get  | /tasks    | {empty}    | 200 | 400 | Make user show  all of the tasks
put  | /updateTask/:id   | { name }    | 200 | 400 | Make user update any task
delete  | /deleteTask/:id   | { empty }    | 200 | 400 | Make user delete any task
get  | /task/:id   | { empty }    | 200 | 400 | Make Admin show any task
put  | /deleteByAdmin/:id  | { empty }    | 200 | 400 | Make Admin soft delete to any task fot any user

## Links
[backend-repo](https://github.com/Ghadier-Alenezi/W08D03)