# node-readme
The purpose of this readme is to document how to initialize a new Node project.

Up until now, we've been coding frontend things using HTML, CSS, and JavaScript files.

As we start coding things in the backend, we start to use node, which will allow us to run things in our terminal, especially since we might not be doing things in a browser and have access to a Chrome developer console to see our print statements. 

## How to add Node to an existing project folder
1. In either terminal or the built-in VSCode terminal, navigate to inside the folder that you want to add node to. 

    *If you don't already have a folder, run `mkdir folderName` and `cd folderName`, OR clone an existing Github folder with `git clone urlOfRepository`.*
2. Run either `npm init -y` to accept all the default settings, or run `npm init` and hit enter through each setting to use npm (node package manager) to add node to your folder. This will create a package.json file. 
    You can't add // comments or your file will break. Instead, you can add a `"_comments": "Add comments here"` key to your JSON object. 
3. Create an index.js file if you don't have one already: `touch index.js`
4. Create a file for your module if you don't have one already: `touch myModule.js`
5. Within your myModule.js file, make sure to `package.exports` whatever you want to export. For example, if you would like to export a function named beBasic, you would denote it as such within your myModule.js file:

    `module.exports.beBasic = () => {
        return "That's so fetch!"
    }`

    If you wanted to export an array named myFaveFoods, you would denote it as such:

    `module.exports.myFaveFoods = ['Pad thai', 'Boba', 'Ferrero Rocher', 'Krispy Kreme glazed donuts', 'In N Out cheeseburgers with extra grilled onions, extra toasted']`

6. Next, you'll want to import your module into your index.js file. Within your index.js file, make sure the include the below line of code: 

    `const myModule = require('./myModule.js')`

    where 'myModule' is the name of the variable you would like to use, and './myModule.js' is the file path of where your module is located.

7. To run your code, type `node index.js` to run your code in the terminal.

## How to install npm packages, such as one that allows you to automatically run your backend code in your terminal whenever you save (nodemon)
1. Download the nodemon package globally if you don't have it already: `npm install -g nodemon`

    You can view a list of all your globally downloaded packages by running `npm list -g`

    To download it locally and not globally to your folder, run `npm install nodemon`

    The `-g` flag represents global download.

Whenever you download a package while in your folder, your package.json file will update with those packages, which are now listed as dependencies. This package.json file (created when we added node during `npm init`) keeps track of which dependencies anyone else would need to download if they were to download you code and wanted to successfully run it. I think that running `npm start` will make your computer go through this list and automatically install them locally?

Upon downloading your first package while in your folder, not only will your package.json file be updated with dependencies, a package-lock.json file will also be created. This file stores more detailed information about the dependencies that you've installed.

Note: If you have any existing global packages, those will not be automatically added to your package.json file unless you `npm install` it while in your folder with your package.json file.  

## How to NOT upload all your downloaded packages/dependencies to git.
// touch .gitignore To prevent certain uploads to github. Write the name of the folder we want to ignore inside it: 
// node_modules Type this inside the .gitignore file, no quotes or anything else



// 'npm init' To add node to your folder.
// 'npm init -y' To say yes to all the default options, instead of hitting enter through each line upon init.
// touch index.js To create the js file
// node index.js To run this file
// nodemon To automatically run index.js, it will look for the first file named index.js regardless of what's listed as main in package.json
// nodemon indexTwo.js To automatically run the other file using nodemon.

// npm install Goes down the list of dependencies in package.json 'dependencies' and downloads them

// npm i -g nodemon To install nodemon globally. Can also type install instead of i.

// package-lock.json is created when you (locally?) download a package and it tells you how to view that

// touch .gitignore To prevent certain uploads to github. Write the name of the folder we want to ignore inside it: 
// node_modules Type this inside the .gitignore file, no quotes or anything else


### Mastering markdown: 
https://guides.github.com/features/mastering-markdown/