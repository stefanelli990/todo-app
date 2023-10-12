<template>
  <div class="flex justify-between items-center mx-auto mb-6 max-w-xl px-4">
    <h2 class="">You've completed {{ todoStore.countCompleted }} out of {{ todoStore.countTotal }} todos.</h2>
    <div class="flex space-x-4 text-sm">
      <span class="cursor-pointer hover:underline" :class="{'text-teal-600 underline': filter === 'all'}" @click="filter = 'all'">All</span>
      <span class="cursor-pointer hover:underline" :class="{'text-teal-600 underline': filter === 'completed'}" @click="filter = 'completed'">Complete</span>
      <span class="cursor-pointer hover:underline" :class="{'text-teal-600 underline': filter === 'incomplete'}" @click="filter = 'incomplete'">Incomplete</span>
    </div>
  </div>
  <ul class="mx-auto max-w-xl px-4" v-if="filter === 'all'">
    <TodoItem v-for="todo in todoStore.todos" :key="todo.id" :id="todo.id" :title="todo.title" :is-complete="todo.isComplete" @complete="todoStore.completeTodo(todo.id)" @delete="todoStore.deleteTodo(todo.id)"/>
  </ul>
  <ul class="mx-auto max-w-xl px-4" v-if="filter === 'completed'">
    <TodoItem v-for="todo in todoStore.completedTodos" :key="todo.id" :id="todo.id" :title="todo.title" :is-complete="todo.isComplete" @complete="todoStore.completeTodo(todo.id)" @delete="todoStore.deleteTodo(todo.id)"/>
  </ul>
  <ul class="mx-auto max-w-xl px-4" v-if="filter === 'incomplete'">
    <TodoItem v-for="todo in todoStore.incompleteTodos" :key="todo.id" :id="todo.id" :title="todo.title" :is-complete="todo.isComplete" @complete="todoStore.completeTodo(todo.id)" @delete="todoStore.deleteTodo(todo.id)"/>
  </ul>
</template>

<script setup>
import {ref} from 'vue'
import TodoItem from "./TodoItem.vue"
import { useTodoStore } from "../stores/todoStore"
const filter = ref('all')

const todoStore = useTodoStore()



</script>
