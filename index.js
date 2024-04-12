const startServer = require('./app');


const start = async() => {
    try {
        await startServer(3000);
        console.log("Started");
    } catch(err){
        console.log(err);
    }
}

start().catch((err) =>{
    console.log(err);
})