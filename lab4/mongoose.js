const mongoose=require('mongoose');
const connStr= "mongodb+srv://Admin:Admin123@cluster0.a0osx.mongodb.net/mydb";
const options={
     useNewUrlParser: true,
     useUnifiedTopology: true,
     createIndexes: true
}
mongoose.Promise = global.Promise;
mongoose.connect(connStr, options).then(()=>{

});console.log("mongodb connect...")

module.exports=mongoose;