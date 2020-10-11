<template>
  <div id="app">
    <h1>Kanban Board</h1>
    <v-row>
      <v-col>
        <h2>Todo</h2>
        <v-card>
          test
        </v-card>
        <v-card
          v-for="(element, i) in todo"
          :key="i"
          elevation="0"
          class="pa-2"
        >
          {{ element }}
        </v-card>
      </v-col>
      <v-col>
        <h2>In Progress</h2>
        <v-card
          v-for="(element, i) in inProgress"
          :key="i"
          class="column"
        >
          {{ element }}
        </v-card>
      </v-col>
      <v-col>
        <h2>Done</h2>
        <v-card
          v-for="(element, i) in done"
          :key="i"
          class="column"
        >
          {{ element }}
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      todo: ['Test 1', 'Test 2', 'Test 3'],
      inProgress: ['Test 1', 'Test 2', 'Test 3'],
      done: ['Test 1', 'Test 2', 'Test 3'],
    };
  },

};
</script>

<style>
.grid {
  display: flex;
 }

.row {
  flex-direction: row;
}

.column {
  flex-direction: column;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
