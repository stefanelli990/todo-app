<template>
  <div class="flex justify-between items-center mx-auto mb-6 max-w-xl px-4">
    <h2 class="">You've completed 5 out of 10 todos.</h2>
    <div class="flex space-x-4 text-sm">
      <span class="text-teal-600 cursor-pointer underline hover:underline">All</span>
      <span class="cursor-pointer hover:underline">Complete</span>
      <span class="cursor-pointer hover:underline">Incomplete</span>
    </div>
  </div>
  <ul class="mx-auto max-w-xl px-4">
    <TodoItem v-for="todo in todoStore.todos" :key="todo.id" :title="todo.title" :is-complete="todo.isComplete" @complete="todoStore.completeTodo(todo.id)" @delete="todoStore.deleteTodo(todo.id)"/>
  </ul>
  <!-- <div class="mx-auto max-w-xl px-4 flex justify-center">
    <img class="max-w-[300px] w-full" src="../assets/todo-illustration.svg" alt="">
  </div> -->
</template>

<script setup>
import TodoItem from "./TodoItem.vue"
import { useTodoStore } from "../stores/todoStore"

const todoStore = useTodoStore()

</script>
