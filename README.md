# node-readme
The purpose of this readme is to document how to initialize a new Node project.

Up until now, we've been coding frontend things using HTML, CSS, and JavaScript files.

As we start coding things in the backend, we start to use node, which will allow us to run things in our terminal, especially since we might not be doing things in a browser and have access to a Chrome developer console to see our print statements. 

This readme will have a summary of commands, and then at the bottom have an explanation for the commands in each section.

# Create a project
`mkdir [folderName]` to create a folder.


`echo "node_modules \n .env" >> .gitignore` to not upload node_modules and .env to git.

`touch .env` to create an .env file.

`git init` to add git tracking.


`npm init -y`

`"_comments": "Add comments here"` to your package.json to add comments.

`npm i express` to be able to create an app.

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
\d or \dt to display all tables
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

ejs (npm i ejs) allows us to inject javascript into our 
app.set('view engine', 'ejs) (Middleware)
Create a Views folder

code-alongs/love-it-or-leave-it 
We can use controllers with esj to route our page paths. And instead of app.get we use router.get

`const express = require('express')`

`const router = express.Router()`

`const db = require('./models')` if we'll be using our sequelize models

`const fs = require('fs')` if we'll be editing any files

router.get('/', (req, res) => {
    // res.send("Dinosaurs page")
    res.render('dinosaurs/index.ejs') // Automatically goes inside views folder.
})

`module.exports = router` at bottom of the page


in our index.js, type app.use('/dinosaurs, require('./controllers/dinosaurs.js'))



npm i express-esj-layouts allows us to use a file in our Views folder named 'layout.esj' as a template.
const layouts = require('express-ejs-layouts')

app.use(layouts) 

For my other views, route to my .ejs with app.get

unit-2/labs/learn_axios
installing axios (npm i axios) replaces fetch, it's basically an easier/alternative way to fetch.

// Import axios after we've installed it with npm.
// Axios replaces fetch. 
Axios only requires one .then and one .catch, whereas fetch requires two .then. 
Axios automatically gives us a JSON object, and to access the data in that JSON object, we invoke the key specifically named 'data'. 
the result we get with axios we need to grab the key 'data' to get our json search results. 

// Using files as our source of data.
If we have a .json file we're using, we'll have to read and write to that file but also convert from JSON to JavaScript to modify it, and then JS JSON to write to it.
let dinosaurs = fs.ReadFileSync('dinosaurs.json')
let dinoData = JSON.parse(dinosaurs) to convert from JSON to JavaScript.
 fs.writeFileSync('dinosaurs.json', JSON.stringify(dinoData)) to convert from JS to JSON and overwrite the file contents of dinosaurs.json.



// Fetch is frontend and axios is backend, so we use it for security and so no one else can see our API key.
// To hide our API keys from Github, we'll create a hidden file to store our keys called .env for environment.

npm i dotenv allows us to hide values in .env (environment)

Need to import and configure dotenv in our index.js or server.js.
`require('dotenv').config()`


GET retrieves data, POST sends new data, PUT edits data in place.
If I have a form on a view, below is what the code might look like:

```<form action="/dinosaurs" method="POST">
    <label for="dinosaurType">Name</label>
    <input id="dinosaurType" type="text" name="name">

    <label for="dinosaurName">Type</label>
    <input id="dinosaurName" type="text" name="type"> 
<!-- name= "" is for the body or JSON object key name. -->

    <input type="submit"> 
</form>
```

action= refers to my path/route/URL pattern and method= refers to my HTML method. The name= refers to the JSON object key name I will use with 'body', such as 'body.name' to access it in the backend.

https://gawdiseattle.gitbook.io/wdi/05-node-express/00readme-1/00readme/01get-post

PUT and POST and DELETE
request can only come from a form, can't come from a URL.
In order to parse the information we're receiving from a form, we have to import body-parser:

// Sets up body-parser for parsing form data (req.body, req.body.${name='title'})
app.use(express.urlencoded({ extended: false }))
(Middleware)

need methodoverride if we want to put or delete anything.
const methodOverride = require('method-override') 

app.use(methodOverride('_method')) // Needs to be placed above anything related to HTTP request objects, including body-parser middleware. 



SEQUELIZE
ORM = Object-Relational Mapping
Allows us to manipulate JavaScript objects instead of directly with the database

model = template for our data objects.

pg = postgres

sequelize-cli allows us to write sequelize commands in our command line. We installed this globally

Once we're in our folder:
npm init 

npm install sequelize pg in our folder
// Sequelize allows us to interface with SQL using JavaScript. PG is the 'dialect' of SQL that we're using, we used presql earlier but now we're using pg.

sequelize init (this creates a config.json file)

code . (while in folder)
config.json file: 
- Delete username and password underneath 'development'
- Change development: dialect to 'postgres'
- Change development: database to 'userapp_development' (name of your database)
- We deleted test and production and only have development since that's all we need right now.

createdb userapp_development
or even sequelize db:create (sequelize db is a sequelize command, create is a postgres command) and this will create a database named with the same name in our config.json file

psql to enter presql

\list to list all databases

`sequelize model:create --name user --attributes firstName:string,lastName:string,age:integer,email:string`
^ Spacing is super important. Name our models as singular and our table names can be plural. 'String' has a char limit of 255 and 'text' doesn't.
https://gawdiseattle.gitbook.io/wdi/05-node-express/express-sequelize/03setup

Creates a new file in migrations folder (for migrating to SQL) and another in models folder (to see our model format)

`sequelize db:migrate` // Automatically creates a table with the same name as the model but with an s at the end
If you mess up with your migration, you can undo the migration (unmigrate), edit the names of your columns in your models file, and re-migrate. Sequelize tracks what files have or haven't already been migrated, so if a model schema has already been migrated, any changes you make to it won't reflect. [How to undo a migration](https://gawdiseattle.gitbook.io/wdi/05-node-express/express-sequelize/05validationsmigrations): `sequelize db:migrate:undo`


In index.js: const db = require('./models')

`node index.js` everytime we want to run our code/make modifications to our model/table.

// Adding 1:many relationships:
Update models > .js files > associate for both directions. 

`models.user.hasMany(models.pet)
models.pet.belongsTo(models.user)`

// Adding many:many relationships:
`sequelize model:create --name petToy --attributes petId:integer,toyId:integer`

Update models > .js files > associations for both directions (pet, toy), but DON'T need to for the join model (petToy) as well.

`models.toy.belongsToMany(models.pet, {through: 'petToy'})`

`models.pet.belongsToMany(models.toy, {through: 'petToy'})`


Using and then running a test file to test that you have your association: 

```const db = require('./models')

db.comment.create({
  name: 'Paul Allen',
  content: 'This is really neat! Thanks for posting.',
  articleId: 1
})
.then(comment => {
  console.log(comment.get())
})
```

Using and then running a test file to check that we can query comments off of an article:
```const db = require('./models')

db.article.findOne({
  where: { id: 1 },
  include: [db.comment]
}).then(foundArticle => {
  // by using eager loading, the article model should have a comments key
  console.log(article.comments)
  ```





# Authentication
npm i session so we can view our session information
npm i bcrypt so we can hash passwords
npm i passport so we can authenticate user logins
npm i passport-local as our strategy so we can authenticate using local username and password, vs. instead of Google or Facebook, etc.




## Getting Started When Downloading Another Project From Github:
Instructions taken from the [project organizer project](https://github.com/WDI-SEA/express-project-organizer).

Fork and clone this repository
Run npm install to install dependencies from the existing package.json file
Use nodemon to start your application
Setup your database (this app already has one existing model)
Run createdb project_organizer_development to create the database
Run sequelize db:migrate to run migrations
Run sequelize db:seed:all to populate the database with 4 projects from previous Seattle cohorts.


postgres needs escaping for capitols \d+ "PetToys"