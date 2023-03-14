require('dotenv').config();
var config = {}

// Update to have your correct username and password
//UAT
// config.mongoURI = {
//     production: `mongodb+srv://${process.env.username}:${process.env.password}@nodeepressproject.lhdzplz.mongodb.net/darkroom?retryWrites=true&w=majority`,
//     development: `mongodb+srv://${process.env.username}:${process.env.password}@nodeepressproject.lhdzplz.mongodb.net/darkroom-dev?retryWrites=true&w=majority`,
//     test: `mongodb+srv://${process.env.username}:${process.env.password}@nodeepressproject.lhdzplz.mongodb.net/darkroom-test?retryWrites=true&w=majority`,
// }
//prod
config.mongoURI = {
    production: `mongodb+srv://${username}:${password}@nodeepressproject.lhdzplz.mongodb.net/darkroom?retryWrites=true&w=majority`,
    development: `mongodb+srv://${username}:${password}@nodeepressproject.lhdzplz.mongodb.net/darkroom-dev?retryWrites=true&w=majority`,
    test: `mongodb+srv://${username}:${password}@nodeepressproject.lhdzplz.mongodb.net/darkroom-test?retryWrites=true&w=majority`,
}
module.exports = config;


// for prod use ${{ secrets.MONGO_USERNAME }}:${{ secrets.MONGO_PASSWORD }} 
// for UAT use ${process.env.username}:${process.env.password}


