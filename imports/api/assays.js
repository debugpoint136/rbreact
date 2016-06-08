import { Mongo } from 'meteor/mongo';

export const Assays = new Mongo.Collection('assays');

Meteor.methods({
  'assays.insert': function(_id, text, members) {
    Assays.insert({
      _id: _id,
      text : text,
      selected: false,
      members: members
    });
  },
  'assays.update': function(id, selected) {
    Assays.update( id, { $set: { selected }
    });
  }
});
