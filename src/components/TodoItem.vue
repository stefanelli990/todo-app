<template>
  <li v-for="todo in todoStore.todos" :key="todo.id" class="mb-4 p-3 bg-slate-700 rounded-md flex">
    <div class="flex items-center flex-1 space-x-2">
      <button @click="todoStore.completeTodo(todo.id)">
        <Icon v-if="todo.isComplete" icon="carbon:checkmark-filled" width="20" height="20" />
        <Icon v-else  icon="material-symbols:circle" width="20" height="20" />
      </button>
      <input
        class="bg-transparent  outline-none"
        type="text"
        disabled
        :class="{ 'line-through	': todo.isComplete	}"
        :value="todo.title"
      />
    </div>
    <div class="flex space-x-2">
      <TodoBtn color="bg-teal-600"
        ><Icon icon="bx:edit" width="20" height="20"
      /></TodoBtn>
      <TodoBtn @click="todoStore.deleteTodo(todo.id)" color="bg-red-500"
        ><Icon icon="material-symbols:delete-outline" width="20" height="20"
      /></TodoBtn>
    </div>
  </li>
</template>

<script setup>

import { useTodoStore } from '../stores/todoStore'
import { Icon } from "@iconify/vue";
import TodoBtn from "./TodoBtn.vue";

const todoStore = useTodoStore()

</script>
