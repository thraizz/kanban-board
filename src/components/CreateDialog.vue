<template>
  <v-dialog
    v-model="showAddDialog"
    max-width="600px"
  >
    <v-card>
      <v-card-title>
        Element hinzufügen
      </v-card-title>
      <v-card-text>
        <v-textarea
          v-model="newElementValue"
          class="ma-2"
          label="Inhalt der Karte"
        />
        <v-select
          v-model="selected"
          autofocus
          class="ma-2"
          :items="items"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="success"
          @click="addItem"
        >
          Hinzufügen
        </v-btn>
        <v-btn
          color="error"
          @click="$emit('input', false)"
        >
          Abbrechen
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  props: {
    value: Boolean,
  },
  data() {
    return {
      selected: 'todo',
      newElementValue: '',
      items: [
        { text: 'Todo', value: 'todo' },
        { text: 'In Progress', value: 'inProgress' },
        { text: 'Done', value: 'done' },
      ],
    };
  },
  computed: {
    showAddDialog: {
      get() {
        return this.value;
      },
      set() {
        this.$emit('input', false);
      },
    },
  },
  methods: {
    addItem() {
      this.$store.commit('add', { section: this.selected, text: this.newElementValue });
      this.selected = 'todo';
      this.newElementValue = '';
      this.$emit('input', false);
    },
  },
};
</script>
