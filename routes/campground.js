var express = require("express");
var router  = express.Router();
var Campground = require("../models/campgrounds");
var middleware = require("../middleware/index");

router.get("/",function(req,res){
    Campground.find({},function(err,allCampgrounds){
        if(err){
            console.log(err);
        }else{
            res.render("index",{camp:allCampgrounds,currentUser:req.user});
        }
    });
});

router.post("/",middleware.isLoggedIn,function(req,res){
    var name=req.body.name;
    var image=req.body.image;
    var des=req.body.description;
    var author = {
        id:req.user._id,
        username:req.user.username
    }
    var newCamp={name:name,image:image,description:des,author:author};
    
    Campground.create(newCamp,function(err,newlyadded){
        if(err){
            console.log(err);
        }else{
            res.redirect("/camp");        
        }
    });
});

router.get("/new",middleware.isLoggedIn,function(req,res){
    res.render("new");
});
router.get("/:id",function(req,res){
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        }else{
            res.render("show",{campground:foundCampground});
        };
    });
});
//Edit Route

router.get("/:id/edit",middleware.checkCampgroundOwnership,function(req,res){
    Campground.findById(req.params.id,function(err, foundCampground){
        res.render("campedit",{campground:foundCampground});
    });
});
//Update Route
router.put("/:id",middleware.checkCampgroundOwnership,function(req,res){
    
    Campground.findByIdAndUpdate(req.params.id,req.body.camp,function(err, updatedcamp){
        if(err){
            res.redirect("/camp");
        }else{
            res.redirect("/camp/"+req.params.id);
        }
    });
});
//DELETE ROUTE
router.delete("/:id",middleware.checkCampgroundOwnership,function(req,res){
    Campground.findByIdAndDelete(req.params.id,function(err){
        if(err){
            res.redirect("/camp");
        }else{
            res.redirect("/camp");
        }
    });
});




module.exports = router;