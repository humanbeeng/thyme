if(process.env.NODE_ENV === 'production'){
    // in production environment - export prod set of keys
    module.exports = require('./prod');
}
else{
    // in development so export the dev keys
    module.exports = require('./dev');
    /* this line means that import the dev keys and 
    export it to those who are requiring elsewhere
    */
}