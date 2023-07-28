//Import Modules
const express = require('express');
const app = express();
const cors = require('cors');
const config = require('./config');
const Attraction = require('./models/attraction');
const Place = require('./models/place');
const Weather = require('./models/weather');
const TechIdea = require('./models/tech_idea');

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded(({ extended: false })));

//Test DB connection
config.authenticate().then(() => {
    console.log('Database is connected!');
}).catch((err) => {
    res.status(500).send((err));
});

//Model Associations
Attraction.belongsTo(Place, {
    foreignKey: 'city_id',
});

Place.hasMany(Attraction, {
    foreignKey: 'city_id'
});

Weather.belongsTo(Place, {
    foreignKey: 'id'
});

//ROUTES
///Get All Cities
app.get('/cities', (req, res) => {
    let data = {
        include: [Attraction]
    }
    Place.findAll(data).then((results) => {
        res.status(200).send(results);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

///Find By City Name
app.get('/cities/:name', (req, res) => {
    let name = req.params.name;

    Place.findByPk(name).then((results) => {
        if (results) {
            res.status(200).send(results);
        } else {
            res.status(404).send('City not found');
        }
    }).catch((err) => {
        res.status(500).send(err);
    });
})


///Find Attractions
app.get('/attractions', (req, res) => {
    let data = {
    }

    Attraction.findAll(data).then((results) => {
        res.status(200).send(results);
    }).catch((err) => {
        res.status(500).send(err);
    });
})

//Find Weather
app.get('/weather', (req, res) => {
    let data = {};

    Weather.findAll(data).then((results) => {
        res.status(200).send(results);
    }).catch((err) => {
        res.status(500).send(err);
    });

});

//Find Weather for one city
app.get('/weather/:id', (req, res)=>{
//    let id = parseInt(req.params.id);
    let id = parseInt(req.params.id);
    Weather.findByPk(id).then((result) => {
        if(result){
            res.status(200).send(result);
        } else {
            res.status(404).send("City's weather data not found.")
        }
    })
    .catch((err)=>{
        res.status(500).send(err);
    })
});


//Find Tech Idea
app.get('/tech', (req, res)=>{
    let data = {};

    TechIdea.findAll(data).then((results)=>{
        res.status(200).send(results);
    }).catch((err)=>{
        res.status(500).send(err);
    });
})

//Submit a new tech idea
app.post('/tech', (req, res) => {
    let formData = req.body;

    TechIdea.create(formData).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);
    })
});

//Web Server
app.listen(4001, function () {
    console.log('Server running on port 4001.')
});