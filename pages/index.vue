<script lang="ts" setup>
const task = ref<String>()
const taskGroup = ref<Array>([])

function addTaskGroup() {
  taskGroup.value.push(task.value)
  task.value = ''
}
</script>

<template>
  <v-app>
    <v-app-bar :title="'✔️Nuxt3-TODO'"></v-app-bar>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <v-text-field v-model="task" clearable :label="'タスクを入力'"></v-text-field>
          </v-col>
          <v-col>
            <v-btn @click="addTaskGroup">追加</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <p>{{ taskGroup }}</p>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
