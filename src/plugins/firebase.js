import {
  initializeApp, firestore,
} from 'firebase';

import { config } from './config';

initializeApp(config);

const db = firestore().collection('boards').doc();

const setDocumentID = function (id) {
  return firestore().collection('boards').doc(id);
};

export {
  // eslint-disable-next-line import/prefer-default-export
  db,
  setDocumentID,
};
