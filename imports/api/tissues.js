import { Mongo } from 'meteor/mongo';

export const Tissues = new Mongo.Collection('tissues');

Meteor.methods({
  'tissues.insert': function(id, text, type) {
    Tissues.insert({
      _id: id,
      text : text,
      selected: false,
      type: type
    });
  },
  'tissues.update': function(id, selected) {
    Tissues.update( id, { $set: { selected }
    });
  }
});
