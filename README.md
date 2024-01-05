
# Oasis Dental

Service Review Based MERN Project


## Live Site URL

https://oasis-dental.vercel.app/

## Project youtube video

https://www.youtube.com/watch?v=ltGjZiIPjDo


## Features

- Firebase Authentication with email password and Google account. Users have to be registered to be able to add an Appoinment to a particular service which would be saved in the MongoDB uses node.js and express.js in the back end.

- Users Details are saved during registration in mongoDB database with node.js.Buyers/Users can reset password with email.

- Users can add a service and Add Review if they are logged in. Their service would be shown in the service section on the home page and all services page. Services are sorted by the most recent added to oldest which is done in the backend using node.js.

- User email is secured using a JWT token. When a user is logged in his email is made
secret and saved in the local storage. When the user reviews/comments are fetched user
secrets are used.



## Tech Stack

**Client:** HTML5, HTML, React.js, Git, JavaScript, Web Development, React.js, TailwindCSS, daisyui

**Server:** MongoDB, Node, Express.js
