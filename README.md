# Testing Simplify

> development web app with consult in unsplash 

## Stack Project
- Module Bundle [Webpack](https://webpack.js.org)
- Framework JS [ReactJS](https://reactjs.org)
- Pre-processor [Sass](https://sass-lang.com)
- State Management [Redux](https://redux.js.org)

## Structure Folder
    .
    |_ src/
    |   |_ App
    |   |   |_ index.jsx
    |   |_ assets
    |   |  |_ sass
    |   |  |  |_ grid
    |   |  |  |  |_ _grid.scss
    |   |  |  |_ index.scss
    |   |_ Header
    |   |  |_ HeaderForm.jsx
    |   |  |_ action.js
    |   |  |_ index.jsx
    |   |  |_ reducer.js
    |   |  |_ style.scss
    |   |_ Photos
    |   |  |_ PhotosTags.jsx
    |   |  |_ PhotosList.jsx
    |   |  |_ index.jsx
    |   |  |_ styles.scss
    |   |_ main
    |   |  |_ reducer.js
    |   |_ services
    |   |  |_ api
    |   |  |  |_ flickr.js 
    |   |  |_ index.js
    |   |_ index.jsx
    |_ .babelrc
    |_ .gitignore
    |_ package.json
    |_ package-lock.json
    |_ README.md
    |_ webpack.config.js
    |

## Run the project locally
**1 -** Clone the project and install dependencies:
```sh
$ git clone https://github.com/laugustofrontend/starter-kit-react.git
$ cd test_simplify
$ npm install
```
**2 -** Run static server and livereload
```sh
$ npm run dev
```
