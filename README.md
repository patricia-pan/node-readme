# node-readme
The purpose of this readme is to document how to initialize a new Node project.

Up until now, we've been coding frontend things using HTML, CSS, and JavaScript files.

As we start coding things in the backend, we start to use node, which will allow us to run things in our terminal, especially since we might not be doing things in a browser and have access to a Chrome developer console to see our print statements. 

This readme will have a summary of commands, and then at the bottom have an explanation for the commands in each section.

# Summaries 
### Add node to an existing project folder
Make sure you are within the correct folder in the terminal or the build-in VSCode terminal
1. `npm init -y`
2. In package.json, you can add: `"_comments": "Add comments here"`

### Run index.js in terminal with node
1. `node index.js`

### Import your own module
1. In your myModule.js file, add `package.exports` in front of any data objects you would like to be able to export.
2. In your index.js file, import your myModule.js file by typing `const myModule = require('./myModule.js')`

### Import Express
1. `npm install express`
2. In index.js, type:

    `const express = require('express')`

    `const app = express()`

    Where 'express' and 'app' are arbitrary (but semantic!) names for constants.

    `// http://localhost:3000/`

    `app.listen(3000, () => console.log("Listening on port 3000!"))`

3. Check out the 'sampleExpressApp' for sample code for an app. 

# Explanations
### How to add Node to an existing project folder
1. In either terminal or the built-in VSCode terminal, navigate to inside the folder that you want to add node to. 

    *If you don't already have a folder, run `mkdir folderName` and `cd folderName`, OR clone an existing Github folder with `git clone urlOfRepository`.*
2. Run either `npm init -y` to accept all the default settings, or run `npm init` and hit enter through each setting to use npm (node package manager) to add node to your folder. This will create a package.json file. 
    You can't add // comments or your file will break. Instead, you can add a `"_comments": "Add comments here"` key to your JSON object. 
3. Create an index.js file if you don't have one already: `touch index.js`

4. To run your code, type `node index.js` to run your code in the terminal.

### How to import your own modules that you create 
1. Create a file for your module if you don't have one already: `touch myModule.js`
2. Within your myModule.js file, make sure to `package.exports` whatever you want to export. For example, if you would like to export a function named beBasic, you would denote it as such within your myModule.js file:

    `module.exports.beBasic = () => {
        return "That's so fetch!"
    }`

    If you wanted to export an array named myFaveFoods, you would denote it as such:

    `module.exports.myFaveFoods = ['Pad thai', 'Boba', 'Ferrero Rocher', 'Krispy Kreme glazed donuts', 'In N Out cheeseburgers with extra grilled onions, extra toasted']`

3. Next, you'll want to import your module into your index.js file. Within your index.js file, make sure the include the below line of code: 

    `const myModule = require('./myModule.js')`

    where 'myModule' is the name of the variable you would like to use, and './myModule.js' is the file path of where your module is located.



### How to install npm packages, such as one that allows you to automatically run your backend code in your terminal whenever you save (nodemon)
1. Download the nodemon package globally if you don't have it already: `npm install -g nodemon`

    You can view a list of all your globally downloaded packages by running `npm list -g`

    To download it locally and not globally to your folder, run `npm install nodemon`

    The `-g` flag represents global download.

Whenever you download a package while in your folder, your package.json file will update with those packages, which are now listed as dependencies. This package.json file (created when we added node during `npm init`) keeps track of which dependencies anyone else would need to download if they were to download you code and wanted to successfully run it. I think that running `npm start` will make your computer go through this list and automatically install them locally?

Upon downloading your first package while in your folder, not only will your package.json file be updated with dependencies, a package-lock.json file will also be created. This file stores more detailed information about the dependencies that you've installed.

Note: If you have any existing global packages, those will not be automatically added to your package.json file unless you `npm install` it while in your folder with your package.json file.  

### How to NOT upload all your downloaded packages / dependencies to git.
When we download 3rd party apps (typically via npm install), we don't want to upload those to Github. So we can tell git what to ignore when making commits.  
`touch .gitignore` To prevent certain uploads to github. Write the name of the folder we want to ignore inside it:  `node_modules`
No need to type anything else in that file save for node_modules (the name of the folder with your npm installs)

We can also add .env (environment) which helps us store our API keys and other hidden credentials when we download the dotenv npm package. 
`require('dotenv').config()`
// Process is a specific method that came with the dotenv module.
`const omdb_API_key = process.env.omdb_API_key`

### Mastering markdown: 
https://guides.github.com/features/mastering-markdown/

### SQL
Have PSQL downloaded
In terminal, type psql
\list to display all databases
\connect [name of database]
\d to display all tables
\d [TABLE NAME]

SELECT * FROM [TABLE]

A callback function is a function that is passed to another function as an argument


We're using a template called EJS
EJS = embedded JavaScript, allows us to inject HTML into it

EJS is good for safety because it can grab stuff from secure databases and inject it into our frontend JavaScript files, where variables are shown but not their values.

Templates are kind of like DOM manipulation but with when we want the page to display different information depending on who's viewing it/who's logged in.

Partial = a chunk of EJS code that can be reused.

`npm install` to download package dependencies if you're downloading someone else's code. 

unit-2/labs/express-personal-website
`npm i express`
express allows us to create an app that accepts backend objects

esj (npm i esj) allows us to inject javascript into our 

code-alongs/love-it-or-leave-it 
We can use controllers with esj to route our page paths. And instead of app.get we use router.get

npm i express-esj-layouts allows us to use a file in our Views folder named 'layout.esj' as a template. Route to that template with app.get

unit-2/labs/learn_axios
installing axios (npm i axios) replaces fetch so we can update info in the backend and in our app, instead of in the frontend. 

// Import axios after we've installed it with npm.
// Axios replaces fetch. Fetch only works when we're using the browser, axios allows us to fetch when we're in the backend/using an app.
// Fetch is frontend and axios is backend, so we use it for security and so no one else can see our API key.
// To hide our API keys from Github, we'll create a hidden file to store our keys called .env for environment.

npm i dotenv allows us to hide values in .env (environment)