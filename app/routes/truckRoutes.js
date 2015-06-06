
var express = require('express');

var Truck = require('../models/truckModel');

var router = express.Router();

router.route('/')

    .get(function(request, response) {
        
        Truck.find(function(error, trucks) {
        	if (error) {
        		response.status(500).send(error);
        	} else {
        		response.json(trucks);
        	}
        });

    })

    .post(function(request, response){
        var newTruck = new Truck(request.body);  

        newTruck.save(function (error, truck) {
            if (error) {
                response.status(500).send(error);
            } else {
                response.status(201).send(truck);
            }
        });
    });

router.route('/:id')
    .all(function (request, response, next) {
        
        Truck.findById(request.params.id, function (error, truck) {
            
        });
        next();
    })
    .get(function (request, response) {         
        Truck.findById(request.params.id, function (error, truck) {
            if (error) {
        		response.status(500).send(error);
        	} else {
        		response.json(truck);
        	}
        });   
    })

    .delete(function(request, response) {

        Truck.findById(request.params.id, function (error, truck) {
            if (error) {
                response.status(500).send(error);
            } else {
                if (truck) {
                    truck.remove(function (error) {
                        if (error) {
                            response.status(500).send(error);
                        } else {
                            response.sendStatus(200);
                        }
                    });
                } 
            }
        });
    })

    .put(function(request, response) {

    // like the GET route, use the findById method on the mongoose model     
        Truck.findById(request.params.id, function (error, truck) {         
            if (error) {            
                 response.status(500).send(error);         
            } else {             
                Truck.name = request.body.name;             
                Truck.foodType = request.body.type;            
                Truck.schedule = request.body.schedule;             
                Truck.payment = request.body.payment;
                Truck.description = request.body.description;             
                Truck.website = request.body.website;            
                Truck.Facebook = request.body.Facebook;             
                Truck.Twitter = request.body.Twitter;

                Truck.save(function (error) {                
                    if (error) {                     
                        response.status(500).send(error);                
                    } else {                     
                        response.send(Truck);                 
                    }            
                });         
            }    
    }); 

});

module.exports = router;