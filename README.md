# Optimize App

![Optimize App](https://github.com/jatanski/Optimize/blob/master/client/public/example.JPG)

App is used to give and receive feedback in project team.

Optimize App won 2nd place at Heckaton CodersCamp with Divante and Divinite.

## Features
* create account and connect with slack
* create project team in app and connect it with new slack channel
* add thread, choose it category and target role 
* when you create a thread, app will send notiffication to slack channel and show web notiffication on your project member computers.
* Your associate can give you feeadback, try resolve your problem else vote in short poll about your concept.
* Others associate if their want can give a star to your comment

## What's in the package?

**SRC:**
* **components** - all no-view React.js components in folders with styles in SASS,
* **redux** - all redux files used in projects,
* **scss** - global.scss file with global styles, mixins & variables in SaSS,
* **pages** - all view React .js components in folders with styles

**SERVER**
* **middleware** - all middleware connections,
* **models** - models for data validation,
* **routes** - all routes for react-router,
* **startup** - all files necessary to start app

## NPM Packages
* expressJS,
* mdboostrap,
* axios,
* node-notifier
* mongodb,
* mongoose,
* react,
* react-router

## What's in the next version?

**FEATURES**
* create more than one project in one team
* create short poll in your team
* possibility of add and delete team members after start a project
* possibility of filter thread on dashboard page
* create individual channel of slack to different parts of team (for example, frontend, backend, UX/UI)

## Available Scripts

In the project directory, you can run:

## In client folder:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


## In server folder:

### `set token=your-slack-token`

You must set your slack token, becuase without this people can't create a account connected with slack

### `yarn start`

Runs the server with Database.



