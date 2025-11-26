var mongoose = require('mongoose');
var dbURI = 'mongodb+srv://sinemhavan:sinem1234@cluster0.0naxb2p.mongodb.net/?appName=Cluster0'; 
mongoose.connect(dbURI);

mongoose.connection.on("connected",function(){
    console.log("Mongoose"+dbURI+"adresindeki veritabanına baglandı\n");
});
mongoose.connection.on("error",function(){
    console.log("bağlantı hatası\n");
});
mongoose.connection.on("disconnected",function(){
    console.log("bağlantı kesildi\n");
});
process.on("SIGNINT",function(){
    mongoose.connection.close();
    process.exit(0);
});
require("./venue"); 