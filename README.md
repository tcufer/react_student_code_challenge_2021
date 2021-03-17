# Mediately Code Challenge -- Backend

### Requirements

You need to have working environment on your machine:

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/) - or npm if you are more used to it

### Setting up backend

Follow Readme in backend subfolder.

### Challenge

- In subfolder frontend create SPA app using [Create React App](https://create-react-app.dev/docs/getting-started/)

- Create next routes:
  - Home (Route: /)
  - Login (Route: /login)
  - Account (Route: /account)

Credentials for user are:
username = developer@mediately.co
password = devmediately

#### Home

Simple layout with a list of available routes.

#### Login

Login form which on submit access to local API and redirects to Account if credentials are ok, otherwise shows error.
(bonus points: validation of the form)

#### Account

This route shows data of user only if user is loggedin, otherwise it needs to redirect to Login.

##### What you need to cover/use in code

Libraries:

- [React Bootstrap](https://react-bootstrap.github.io/) for layout
- fetch or [axios](https://github.com/axios/axios) to fetch data from API
- [React Router Dom](https://reactrouter.com/web/guides/quick-start) for route handling

Hooks:

- useContext (to share login state between routes)
- useState
- useEffect

#### What else?
