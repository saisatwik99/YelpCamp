var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");
var Comment=require("./models/comment");
data=[
    {
        name:"Night Campground",
        image:"https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tincidunt urna, eu efficitur ante pretium ac. Sed ac ullamcorper ipsum. Nullam quis erat in magna tristique finibus. Curabitur vehicula non neque sed vehicula. Aliquam sodales leo eu ex accumsan, a hendrerit eros interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas at tempor lorem. Nullam elementum libero sed tincidunt fringilla. Nunc euismod vitae mi sit amet rhoncus. Sed luctus tempus elit, et dictum eros convallis quis."
    },
    {
        name:"Fire on Campground",
        image:"https://images.unsplash.com/photo-1574105760686-1399492ce94b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tincidunt urna, eu efficitur ante pretium ac. Sed ac ullamcorper ipsum. Nullam quis erat in magna tristique finibus. Curabitur vehicula non neque sed vehicula. Aliquam sodales leo eu ex accumsan, a hendrerit eros interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas at tempor lorem. Nullam elementum libero sed tincidunt fringilla. Nunc euismod vitae mi sit amet rhoncus. Sed luctus tempus elit, et dictum eros convallis quis."
    },
    {
        name:"Morning  Campground",
        image:"https://images.unsplash.com/photo-1477581265664-b1e27c6731a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tincidunt urna, eu efficitur ante pretium ac. Sed ac ullamcorper ipsum. Nullam quis erat in magna tristique finibus. Curabitur vehicula non neque sed vehicula. Aliquam sodales leo eu ex accumsan, a hendrerit eros interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas at tempor lorem. Nullam elementum libero sed tincidunt fringilla. Nunc euismod vitae mi sit amet rhoncus. Sed luctus tempus elit, et dictum eros convallis quis."
    },
    {
        name:"Morning Clouds",
        image:"https://images.unsplash.com/photo-1528433556524-74e7e3bfa599?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tincidunt urna, eu efficitur ante pretium ac. Sed ac ullamcorper ipsum. Nullam quis erat in magna tristique finibus. Curabitur vehicula non neque sed vehicula. Aliquam sodales leo eu ex accumsan, a hendrerit eros interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas at tempor lorem. Nullam elementum libero sed tincidunt fringilla. Nunc euismod vitae mi sit amet rhoncus. Sed luctus tempus elit, et dictum eros convallis quis."
    },
    {
        name:"Mountains",
        image:"https://images.unsplash.com/photo-1503265192943-9d7eea6fc77a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tincidunt urna, eu efficitur ante pretium ac. Sed ac ullamcorper ipsum. Nullam quis erat in magna tristique finibus. Curabitur vehicula non neque sed vehicula. Aliquam sodales leo eu ex accumsan, a hendrerit eros interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas at tempor lorem. Nullam elementum libero sed tincidunt fringilla. Nunc euismod vitae mi sit amet rhoncus. Sed luctus tempus elit, et dictum eros convallis quis."
    },
    {
        name:"Three Dome tents",
        image:"https://images.unsplash.com/photo-1503265192943-9d7eea6fc77a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tincidunt urna, eu efficitur ante pretium ac. Sed ac ullamcorper ipsum. Nullam quis erat in magna tristique finibus. Curabitur vehicula non neque sed vehicula. Aliquam sodales leo eu ex accumsan, a hendrerit eros interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas at tempor lorem. Nullam elementum libero sed tincidunt fringilla. Nunc euismod vitae mi sit amet rhoncus. Sed luctus tempus elit, et dictum eros convallis quis."
    },
    {
        name:"Scenary",
        image:"https://images.unsplash.com/photo-1525209149972-1d3faa797c3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tincidunt urna, eu efficitur ante pretium ac. Sed ac ullamcorper ipsum. Nullam quis erat in magna tristique finibus. Curabitur vehicula non neque sed vehicula. Aliquam sodales leo eu ex accumsan, a hendrerit eros interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas at tempor lorem. Nullam elementum libero sed tincidunt fringilla. Nunc euismod vitae mi sit amet rhoncus. Sed luctus tempus elit, et dictum eros convallis quis."
    },
    {
        name:"Birds Preaching",
        image:"https://images.unsplash.com/photo-1534700281814-9cfdb80f6d0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tincidunt urna, eu efficitur ante pretium ac. Sed ac ullamcorper ipsum. Nullam quis erat in magna tristique finibus. Curabitur vehicula non neque sed vehicula. Aliquam sodales leo eu ex accumsan, a hendrerit eros interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas at tempor lorem. Nullam elementum libero sed tincidunt fringilla. Nunc euismod vitae mi sit amet rhoncus. Sed luctus tempus elit, et dictum eros convallis quis."
    },
    {
        name:"River Daytime",
        image:"https://images.unsplash.com/photo-1500332988905-1bf2a5733f63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tincidunt urna, eu efficitur ante pretium ac. Sed ac ullamcorper ipsum. Nullam quis erat in magna tristique finibus. Curabitur vehicula non neque sed vehicula. Aliquam sodales leo eu ex accumsan, a hendrerit eros interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas at tempor lorem. Nullam elementum libero sed tincidunt fringilla. Nunc euismod vitae mi sit amet rhoncus. Sed luctus tempus elit, et dictum eros convallis quis."
    },
    {
        name:"Water and Rocks",
        image:"https://images.unsplash.com/photo-1470805453991-a1b8c719cc70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tincidunt urna, eu efficitur ante pretium ac. Sed ac ullamcorper ipsum. Nullam quis erat in magna tristique finibus. Curabitur vehicula non neque sed vehicula. Aliquam sodales leo eu ex accumsan, a hendrerit eros interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas at tempor lorem. Nullam elementum libero sed tincidunt fringilla. Nunc euismod vitae mi sit amet rhoncus. Sed luctus tempus elit, et dictum eros convallis quis."
    },
    {
        name:"Mirror Image",
        image:"https://images.unsplash.com/photo-1537532244339-0a3e63bb818b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tincidunt urna, eu efficitur ante pretium ac. Sed ac ullamcorper ipsum. Nullam quis erat in magna tristique finibus. Curabitur vehicula non neque sed vehicula. Aliquam sodales leo eu ex accumsan, a hendrerit eros interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas at tempor lorem. Nullam elementum libero sed tincidunt fringilla. Nunc euismod vitae mi sit amet rhoncus. Sed luctus tempus elit, et dictum eros convallis quis."
    },
    {
        name:"MilkyWay Night",
        image:"https://images.unsplash.com/photo-1536650135175-9b3cd4f36cff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tincidunt urna, eu efficitur ante pretium ac. Sed ac ullamcorper ipsum. Nullam quis erat in magna tristique finibus. Curabitur vehicula non neque sed vehicula. Aliquam sodales leo eu ex accumsan, a hendrerit eros interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas at tempor lorem. Nullam elementum libero sed tincidunt fringilla. Nunc euismod vitae mi sit amet rhoncus. Sed luctus tempus elit, et dictum eros convallis quis."
    }
]

function seedDB(){
    Campground.remove({},function(err){
        if(err){
            console.log(err);
        }
        console.log("Removed Campgrounds");
        data.forEach(function(seed){
            Campground.create(seed,function(err,campground){
                if(err){
                    console.log(err);
                }else{
                    console.log("Added a campground");
                    Comment.create({
                        text:"This is a nice place. I wish I need an internet",
                        author:"Satwik"
                    },function(err,comment){
                        if(err){
                            console.log(err);
                        }else{
                           campground.comments.push(comment);
                           campground.save();
                           console.log("Created a new Comment");
                        }
                    });
                }
    
            });
        });
    });
    
}

module.exports=seedDB;