require('dotenv').config();
//#region Variables
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const methodOverride = require('method-override');
const Film = require('./models/film-schema');
//#endregion

//#region Setting up middleware
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'))
app.use((req, res, next)=>{
    console.log('I run for all routes');
    next();
});
app.use(express.urlencoded({extended:false}));
//View engine set up
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
mongoose.set("strictQuery",true);
//#endregion

//#region setting up mongoose
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true, useUnifiedTopology: true});
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo');
});
mongoose.set('strictQuery',true);
//#endregion

//#region root route
app.get('/', (req, res)=>{
    res.render('Root');
   
});
//#endregion

//#region Index route
app.get('/films', (req,res)=>{
    Film.find({}, (error, allItems) =>{
        res.render('Index', {
            films: allItems//getting the items form the db to pass as props
        });
    });
});
//#endregion

//#region New route
app.get('/films/new', (req, res)=>{
    res.render('New');
});
//#endregion

//#region Delete
app.delete('/films/:id', (req,res) =>{
    Film.findByIdAndDelete(req.params.id, (err, data)=>{
        res.redirect('/films/');
    });
});
//#endregion

//#region Update
app.put('/films/:id', (req,res)=>{
    console.log(req.body);
    if(req.body.quantity==='BUY'){
        console.log('test');
       Film.findByIdAndUpdate(req.params.id, {$inc:{'quantity':-1}}, (err, updatedItem)=>{
        res.redirect(`/films/${req.params.id}`)
       })
    }
    else{ 
        Film.findByIdAndUpdate(req.params.id, req.body, (err,updatedItem)=>{
        res.redirect(`/films/${req.params.id}`);
        });
    }
    
});


//#endregion

//#region Create 
app.post('/films', (req, res)=>{
    Film.create(req.body, (error, addedItem)=>{
        res.redirect('/films');
    });
});
//#endregion

//#region Edit route
 app.get('/films/:id/edit', (req,res)=>{
    Film.findById(req.params.id, (err, foundItem)=>{
        if(!err){
            res.render('Edit', {item: foundItem});
        }
        else{
            res.send({msg:err.message});
        }
    });
 });


//#endregion

//#region Show route
app.get('/films/:id', (req,res)=>{
    Film.findById(req.params.id, (err, foundItem)=>{
        res.render('Show',{ films:foundItem}
        );
    });
});
//#endregion

//app listening on port
app.listen(port, ()=>{
    console.log("listeting on port "+port);
});