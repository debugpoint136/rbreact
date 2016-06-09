import { Mongo } from 'meteor/mongo';

export const Tissues = new Mongo.Collection('tissues');

Meteor.methods({
  'tissues.insert': function(id, text, type, members) {
    Tissues.insert({
      _id: id,
      text : text,
      selected: false,
      type: type,
      members: members
    });
  },
  'tissues.update': function(id, selected) {
    Tissues.update( id, { $set: { selected }
    });
  },
  'tissues.getAll': function () {
    return Tissues.find({}).fetch();
  },
  'tissues.getSelected': function () {
    return Tissues.find({ selected: true }).fetch();
  }
});
