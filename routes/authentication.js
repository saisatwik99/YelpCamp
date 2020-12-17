var express = require("express");
var passport = require("passport");
var router  = express.Router();
var User = require("../models/user");
var middleware = require("../middleware/index");

router.get("/",function(req,res){
    res.render("Yelphome");
});


router.get("/register",function(req,res){
    res.render("register");
});
router.post("/register",function(req,res){
    var newUser = new User({username:req.body.username})
    User.register(newUser,req.body.password,function(err,user){
        if(err){
            req.flash("error",err.message);
            return res.render("register");
        }
        passport.authenticate("local")(req,res,function(){
            req.flash("success","Welcome to YelpCamp "+user.username);
            res.redirect("/camp");
        });
    });
});

//Login Routes
router.get("/login",function(req,res){
    res.render("login");
});
router.post("/login",passport.authenticate("local",{
    successRedirect:"/camp",
    failureRedirect:"/login"
})
,function(req,res){

});

router.get("/logout",function(req,res){
    req.logout();
    req.flash("success","Logged you out");
    res.redirect("/camp");
});


module.exports = router;