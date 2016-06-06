import { Mongo } from 'meteor/mongo';

export const TissuesDB = new Mongo.Collection('tissues');

Meteor.methods({
  'tissues.insert': function(text) {
    TissuesDB.insert({
      text : text,
      completed: false
    });
  },
  'tissues.update': function(id, completed) {
    TissuesDB.update( id, { $set: { completed }
    });
  }
});
