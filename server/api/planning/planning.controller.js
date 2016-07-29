/**
* Using Rails-like standard naming convention for endpoints.
* GET     /api/plannings              ->  index
* POST    /api/plannings              ->  create
* GET     /api/plannings/:id          ->  show
* PUT     /api/plannings/:id          ->  update
* DELETE  /api/plannings/:id          ->  destroy
*/

'use strict';

import _ from 'lodash';
import Planning from './planning.model';

function respondWithResult(res, statusCode) {
    statusCode = statusCode || 200;
    return function(entity) {
        if (entity) {
            res.status(statusCode).json(entity);
        }
    };
}

function saveUpdates(updates) {
    return function(entity) {
        var updated = _.merge(entity, updates);
        return updated.save()
        .then(updated => {
            return updated;
        });
    };
}

function removeEntity(res) {
    return function(entity) {
        if (entity) {
            return entity.remove()
            .then(() => {
                res.status(204).end();
            });
        }
    };
}

function handleEntityNotFound(res) {
    return function(entity) {
        if (!entity) {
            res.status(404).end();
            return null;
        }
        return entity;
    };
}

function handleError(res, statusCode) {
    statusCode = statusCode || 500;
    return function(err) {
        console.log("err : ", err);
        res.status(statusCode).send(err);
    };
}

// Gets a list of Plannings
export function index(req, res) {
    var query={};
    var populate=null;
    if(req.query.ecole){
        query.ecole=req.query.ecole;
        populate='instit';
    }
    return Planning.find(query).exec()
    //return Planning.find(query).exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Planning from the DB
export function show(req, res) {
    return Planning.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Planning in the DB
export function create(req, res) {
    return Planning.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Planning in the DB
export function update(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    return Planning.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Planning from the DB
export function destroy(req, res) {
    return Planning.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
