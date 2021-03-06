/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/rattachements              ->  index
 * POST    /api/rattachements              ->  create
 * GET     /api/rattachements/:id          ->  show
 * PUT     /api/rattachements/:id          ->  update
 * DELETE  /api/rattachements/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Rattachement from './rattachement.model';

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
    res.status(statusCode).send(err);
  };
}

// Gets a list of Rattachements
export function index(req, res) {
  //return Rattachement.find().exec()
  var query={};
  var populate=null;
  if(req.query.ecole){
      query.ecole=req.query.ecole;
      populate='instit';
  }else if (req.query.instit) {
      query.instit=req.query.instit;
      populate='ecole';
  }
  console.log("query : ", query);
  console.log("populate : ", populate);
  return Rattachement.find(query).populate(populate)
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Rattachement from the DB
export function show(req, res) {
  return Rattachement.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Rattachement in the DB
export function create(req, res) {
  return Rattachement.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Rattachement in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Rattachement.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Rattachement from the DB
export function destroy(req, res) {
  return Rattachement.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
