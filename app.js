var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var mongoose=require("mongoose");
var methodOverride =require("method-override");
var User = require("./models/user");
var flash = require("connect-flash");
var passport = require("passport");
var bodyParser=require("body-parser");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
var Campground=require("./models/campgrounds");
var seedDB = require("./seeds");
var Comment=require("./models/comment");

var commentRoutes = require("./routes/comment");
var campgroundRoutes =require("./routes/campground");
var authRoutes =require("./routes/authentication");


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://saisatwik:<password>@first-fitvi.mongodb.net/test?retryWrites=true&w=majority";
// const connectDB = async()=>{
//     await mongoose.connect(uri);
// }
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });



app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect("mongodb+srv://saisatwik:banti2002@first-fitvi.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true,useUnifiedTopology: true });
app.set("view engine","ejs"); 
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(flash());
//seedDB();  //This Seed DataBase 

app.use(require("express-session")({
    secret:"Satwik is a good programmer",
    resave:false,
    saveUninitialized:false

}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use(authRoutes);
app.use("/camp",campgroundRoutes);
app.use("/camp/:id/comments",commentRoutes);

app.listen(process.env.PORT,process.env.IP);
//app.listen(3000);