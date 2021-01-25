const db = require('./models')


// CRUD: CREATE.
// db.user.create({ // Creates a new entry each time. No longer have to migrate unless we add a new model.
//     firstName: 'Weston',
//     lastName: 'Bailey',
//     age: 27,
//     email: 'weston@email.com'
// }).then(createdUser => {
//     console.log(createdUser)
//     process.exit() // Instead of waiting to time out, just tell it it can close out after it's done.
// })


// CRUD: READ.
// db.user.findOne({
//     where: {firstName: 'Nick'}
// }).then(foundUser => {
//     console.log(foundUser.dataValues)
//     process.exit()
// })

// db.user.findOrCreate({
//     where: {
//         firstName: 'Blake',
//         lastName: 'DeGraw'
//     },
//     defaults: {age: 28, email: 'blake@email.com'}
// }).then(([user, wasCreated]) => { // Returns user object and boolean true or false.
//     console.log(`user: ${user} \n wasCreated: ${wasCreated}`)
//     process.exit()
// }) 

// How to view all values in a model table.
// db.user.findAll().then(users => {
//     console.log(users)
//     process.exit()
// })

// CRUD: UPDATE.
// db.user.update({ // Returns the number of rows changed.
//     email: 'twenty@seven.com' // What I want to update to.
// }, {
//     where: {
//         age: '27'
//     }
// }).then(rowsChanged => {
//     console.log(rowsChanged)
//     process.exit()
// })

// // CRUD: DESTROY.
// db.user.destroy({ // Returns number of rows deleted.
//     where: {
//         firstName: 'Nick'
//     }
// }).then(rowsDeleted => {
//     console.log(rowsDeleted)
//     process.exit()
// })

// The below built-in methods require an association
// create{ModelName}, getModels, setModel, addModel
// createPet, getPets, setPet, addPet


// Find a user and create a pet for that user.

// db.user.findOne({where: {firstName: 'Weston'}})
// .then(user => {
//     console.log("Adding a pet to this user: ", user.firstName)
//     user.createPet({
//         name: 'Porkroll',
//         species: 'Cat'

//     }).then(pet => {
//         console.log(pet)
//         process.exit()
//     })
// })


// View a user and all of their pets. 

// db.user.findOne({
//     where: {firstName: 'Weston'}
// }).then(user => {
//     user.getPets().then(pets => {
//         console.log(`${user.firstName}'s pets: `)
//         console.log(pets)
//         process.exit()
//     })
// })


// Create a pet and THEN add it to a user.

// db.pet.findOrCreate({
//     where: {
//         name: 'Oscar',
//         species: 'Cat'
//     },
//     defaults: {
//         description: 'Old oreo-colored cat, likes food and not much else.'
//     }
// }).then( ([pet, wasCreated]) => {
//     db.user.findOne({where: {firstName: 'Weston'}})
//     .then(coolDude => {
//         coolDude.addPet(pet)
//         console.log(`User ${coolDude.firstName} is the owner of ${pet.name}`)
//     })
// })

// db.user.findAll({
//     include: [db.pet] // Include has to take an array.
// }).then(users => {
//     users.forEach(user => {
//         console.log(`${user.firstName}'s pets: `)
//         user.pets.forEach(pet => { // We have access to user.pets because we included it as [db.pet]
//             console.log(pet.name)
//         })
//     })
//     process.exit()
// })


////// Learning about join tables in Sequelize. 

// db.pet.findOrCreate({
//     where: {
//         name: 'Silly May', 
//         species: 'Mini Aussie',
//         userId: 1
//     }
// }).then( ([pet, wasCreated]) => {
//     db.toy.findOrCreate({
//         where: {
//             type: 'stinky bear',
//             color: 'brown'
//         }
//     }).then(([toy, wasCreated]) => {
//         pet.addToy(toy).then(relationInfo => {
//             console.log(`🐶 ${toy.type} added to ${pet.name}`)
//             console.log('🐶 relation info:', relationInfo)
//             process.exit()
//         })
//     })
// })

// db.toy.findOne({
//     where: {type: "stinky bear"}
// }).then(toy => {
//     toy.getPets().then(pets => {
//         console.log(`🙉${pets.length} pet(s) love(s) the ${toy.color, toy.type}.🙉`)
//         process.exit()
//     })
// })


// db.toy.findOrCreate({
//     where: {type: 'ball', color: 'green'}
// }).then(([toy, wasCreated]) => {
//     toy.getPets().then(pets => {
//         if(pets.length > 0){
//             pets.forEach(pet => {
//                 console.log(`🦁${pet.name} loves the ${toy.color, toy.type}.🐴`)
//             })
//         } else {
//             db.pet.findOrCreate({
//                 where: {
//                     name: 'Ruby Tuesday',
//                     species: 'Toy Aussie'
//                 }
//             }).then(([pet, wasCreated]) => {
//                 toy.addPet(pet).then(relationInfo => {
//                     console.log(`${pet.name} has faved the ${toy.color, toy.type} toy.`)
//                     process.exit()
//                 })
//             })
//         }
//     })
// })


// db.pet.findOne({
//     where: {name: 'Ruby Tuesday'}
// }).then(pet => {
//     console.log(pet)
//     pet.getToys().then(toys => {
//         toys.forEach(toy => {
//             console.log(`🦄${pet.name} loves their ${toy.color, toy.type}.`)
//             process.exit()
//         })
//     })
// })

// db.pet.findOne({
//     where: {
//         name: 'Silly May'
//     },
//     include: [db.user, db.toy]
// }).then(pet => {
//     console.log(pet)
//     pet.toys.forEach(toy => {
//         console.log(`🐼${pet.user.firstName}'s pet ${pet.name} loves their ${toy.color, toy.type}🐼`)
//     })
//     process.exit()
// })

db.user.findByPk(1, { include: [db.pet]}) // Pk = primary key, which refers to id.
.then(user => {
    user.pets.forEach(pet => {
        pet.getToys().then(toys => {
            toys.forEach(toy => {
                console.log(`🐺${user.firstName}'s pet ${pet.name} loves their ${toy.color, toy.type}🦉`)
            })
        })
    })
    // process.exit()
})