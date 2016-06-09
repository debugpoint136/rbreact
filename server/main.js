import { Meteor } from 'meteor/meteor';
import '../imports/api/tasks.js';
import { Assays } from '../imports/api/assays.js';
import { Tissues } from '../imports/api/tissues.js';
import { assayDict } from '../imports/dictionary/assays';
import { tissueDict } from '../imports/dictionary/tissues';

Meteor.startup(() => {
  // code to run on server at startup
  if ( Assays.find({}).fetch().length === 0) {
    assayDict.map((assay) => {
      Meteor.call('assays.insert', assay._id, assay.text, assay.members );
    });
  };

  if ( Tissues.find({}).fetch().length === 0) {
    tissueDict.map((tissue) => {
      Meteor.call('tissues.insert', tissue._id, tissue.text, tissue.type, tissue.members );
    });
  };
});
