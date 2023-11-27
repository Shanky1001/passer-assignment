## Fake Company, don't bother to apply and work in this company


## Passer Frontend Assignment

### Need to create a user management dashboard

#### Requirements

- Node v>18

#### Setup

- Download or clone the repo
- Change directory to passer-assignment
- Run
  `npm install`
- Run
  `npm start`

### Task Instructions

Please implement the following user dashboard application:

1. Scenario:
   Imagine you&#39;re working for a company that needs a user management dashboard for its
   admin panel. The dashboard should allow administrators to view, create, update, and
   delete user accounts.
   Users have the following properties: ID, username, email, and role (admin or user).
2. Requirements:

   a. User List: Create a page that displays a list of users. Each user should be listed with their ID, username, email, and role. Include pagination for the user list (e.g. 10 users per page).

   b. User Details: When a user is clicked from within the list, a detailed view of the user&#39;s information should be displayed on a separate page. Include an &quot;Edit&quot; button on the user detail page to allow administrators to edit the user&#39;s information.

   c. Edit User: When clicking the &quot;Edit&quot; button, it should open a modal or separate page with a form to edit the user&#39;s information. Allow editing of the username, email, and role. Implement validation for email format.

   d. Create User: Create a form that allows administrators to add new users. Include fields for username, email, and role. Implement validation for email format.

   e. Delete User: Implement a feature to delete a user from the user list. Include a confirmation dialog before deleting.


### Implementaion 

1. Created routes using react-router-dom
2. Used Redux Tool Kit for state management
3. Used Material UI for components and layouts
4. Have used mocked json data for plotting view
