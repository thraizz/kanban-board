<template>
  <v-card
    class="ma-2 mt-3"
    ripple
  >
    <v-row class="ml-2">
      <v-col>
        <p class="pa-2">
          {{ text }}
        </p>
      </v-col>
      <v-col>
        <v-btn
          icon
          color="primary"
          @click="$emit('open-editor', true)"
        >
          <v-icon>
            {{ mdiPencil }}
          </v-icon>
        </v-btn>

        <v-btn
          icon
          color="error"
        >
          <v-icon>
            {{ mdiDelete }}
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import { mdiPencil, mdiDelete } from '@mdi/js';

export default ({
  props: {
    text: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      showEditDialog: false,
      mdiPencil,
      mdiDelete,
      t: Boolean,
    };
  },
});
</script>
