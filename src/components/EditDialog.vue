<template>
  <v-dialog
    v-model="show"
    max-width="600px"
  >
    <v-card>
      <v-card-title>
        Element bearbeiten
      </v-card-title>
      <v-card-text>
        <v-textarea
          v-model="text"
          class="ma-2"
          label="Inhalt der Karte"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="success"
          @click="saveItem"
        >
          Speichern
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
export default ({
  props: {
    editValue: {
      type: Object,
      required: true,
    },
    value: Boolean,
  },
  data() {
    return {
      currentText: '',
    };
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set() {
        this.$emit('input', false);
      },
    },
    text: {
      get() {
        return this.editValue.text;
      },
      set(value) {
        this.currentText = value;
      },

    },
  },
  methods: {
    saveItem() {
      const currentItems = this.$store.getters[this.editValue.section];
      currentItems[this.editValue.key] = this.currentText;
      let action = this.editValue.section;
      action = `set${action[0].toUpperCase() + action.replace(/^./, '')}`;
      this.$store.commit(action, currentItems);
      this.$emit('input', false);
    },
  },
});
</script>
