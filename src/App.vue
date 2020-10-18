<template>
  <v-app>
    <create-dialog v-model="showAddDialog" />
    <edit-dialog
      v-model="showEditDialog"
      :edit-value="editValue"
    />

    <v-card
      class="ma-4"
      elevation="8"
    >
      <v-card-title>
        <v-row class="ma-2">
          <h1>Kanban Board</h1>
          <v-spacer />
          <h4>Aktuelle ID: {{ id }}</h4>
          <v-spacer />
          <h4>ID eingeben:</h4>
          <v-text-field
            v-model="documentId"
            :append-icon="mdiCheck"
            @click:append="setId"
          />
        </v-row>
      </v-card-title>
      <v-row>
        <v-col style="background-color: #82a491; margin-left: 10px;">
          <h2>
            Todo
          </h2>
          <draggable
            v-model="todoElements"
            style="background-color: rgba(255,255,255, 0.2); min-height: 60vh;"
            group="elements"
            class="pa-2"
            @start="drag=true"
            @end="drag=false"
          >
            <card
              v-for="(todoCard, i) in $store.getters.todo"
              :key="i"
              :text="todoCard"
              @open-editor="openEditor(todoCard, i, 'todo')"
            />
          </draggable>
        </v-col>
        <v-col style="background-color: #b4a28b">
          <h2>In Progress</h2>
          <draggable
            v-model="inProgressElements"
            style="background-color: rgba(255,255,255, 0.2); min-height: 60vh;"
            group="elements"
            class="pa-2"
            @start="drag=true"
            @end="drag=false"
          >
            <card
              v-for="(inProgressCard, i) in $store.getters.inProgress"
              :key="i"
              :text="inProgressCard"
              @open-editor="openEditor(todoCard, i, 'inProgress')"
            />
          </draggable>
        </v-col>
        <v-col style="background-color: #8a5f5e; margin-right: 10px;">
          <h2>Done</h2>
          <draggable
            v-model="doneElements"
            style="background-color: rgba(255,255,255, 0.2); min-height: 60vh;"
            group="elements"
            @start="drag=true"
            @end="drag=false"
          >
            <card
              v-for="(doneCard, i) in $store.getters.done"
              :key="i"
              :text="doneCard"
              @open-editor="openEditor(todoCard, i, 'done')"
            />
          </draggable>
        </v-col>
      </v-row>
    </v-card>
    <v-btn
      style="bottom: 25px; right: 25px;"
      large
      absolute
      fab
      @click="showAddDialog = true"
    >
      <v-icon>
        {{ mdiCardPlusOutline }}
      </v-icon>
    </v-btn>
  </v-app>
</template>

<script>
import draggable from 'vuedraggable';

import { mdiCardPlusOutline, mdiCheck } from '@mdi/js';
import Card from './components/Card.vue';
import CreateDialog from './components/CreateDialog.vue';
import EditDialog from './components/EditDialog.vue';

export default {
  name: 'App',
  components: {
    draggable,
    Card,
    CreateDialog,
    EditDialog,
  },
  data() {
    return {
      editValue: { text: '', key: 0, show: false },
      showAddDialog: false,
      showEditDialog: false,
      mdiCardPlusOutline,
      mdiCheck,
      documentId: '',
      elements: [],
    };
  },
  computed: {
    id() {
      return this.$store.getters.documentId;
    },
    todoElements: {
      get() {
        return this.$store.getters.todo;
      },
      set(value) {
        this.$store.commit('setTodo', value);
      },
    },
    inProgressElements: {
      get() {
        return this.$store.getters.inProgress;
      },
      set(value) {
        this.$store.commit('setInProgress', value);
      },
    },
    doneElements: {
      get() {
        return this.$store.getters.done;
      },
      set(value) {
        this.$store.commit('setDone', value);
      },
    },
  },
  methods: {
    openEditor(text, key, section) {
      this.editValue.text = text;
      this.editValue.key = key;
      this.editValue.section = section;
      this.showEditDialog = true;
      // console.log(event, i);
    },
    setId() {
      this.$store.commit('SET_DATABASE', this.documentId);
    },
  },
};
</script>
