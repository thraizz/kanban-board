import Vue from 'vue';
import Vuex from 'vuex';

import { db, setDocumentID } from './firebase';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    localBoard: {
      todo: [],
      inProgress: [],
      done: [],
    },
    elements: [],
    database: db,
  },
  mutations: {
    add(state, value) {
      const { section } = value;
      const element = value.text;
      if (section === 'todo') {
        state.localBoard.todo.push(element);
        this.state.database.set(state.localBoard);
      }
      if (section === 'inProgress') {
        state.localBoard.inProgress.push(element);
        this.state.database.set(state.localBoard);
      }
      if (section === 'done') {
        state.localBoard.done.push(element);
        this.state.database.set(state.localBoard);
      }
    },
    SET_DATABASE(state, value) {
      const database = setDocumentID(value.replaceAll(' ', ''));
      if (database) {
        this.state.database = database;
        const that = this;
        this.state.database
          .get()
          .then(
            (doc) => { that.state.localBoard = doc.data(); },
          );
      }
    },
    setTodo(state, value) {
      this.state.localBoard.todo = value;
      this.state.database.set(this.state.localBoard);
    },
    setInProgress(state, value) {
      this.state.localBoard.inProgress = value;
      this.state.database.set(this.state.localBoard);
    },
    setDone(state, value) {
      this.state.localBoard.done = value;
      this.state.database.set(this.state.localBoard);
    },
  },
  getters: {
    todo: (state) => state.localBoard.todo,
    inProgress: (state) => state.localBoard.inProgress,
    done: (state) => state.localBoard.done,
    elements: (state) => state.elements,
    documentId: (state) => state.database.id,
  },
});

export default store;
