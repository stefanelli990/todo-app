<template>
  <TodoTabs v-if="todoStore.todos.length !== 0"/>
  <h1 v-else class="section-container text-center max-w-sm text-lg font-medium">Your todo list is empty. Add new todos to fill it up and keep things organized! 📋</h1>

  <ul class="section-container" v-if="todoStore.tab === 'all'">
    <TodoItem v-for="todo in todoStore.todos" :key="todo.id" :id="todo.id" :title="todo.title" :is-complete="todo.isComplete"/>
  </ul>
  <ul class="section-container" v-if="todoStore.tab === 'completed'">
    <TodoItem v-for="todo in todoStore.completedTodos" :key="todo.id" :id="todo.id" :title="todo.title" :is-complete="todo.isComplete"/>
  </ul>
  <ul class="section-container" v-if="todoStore.tab === 'incomplete'">
    <TodoItem v-for="todo in todoStore.incompleteTodos" :key="todo.id" :id="todo.id" :title="todo.title" :is-complete="todo.isComplete"/>
  </ul>
  
</template>

<script setup>
import { watchEffect } from 'vue'
import { useTodoStore } from "../stores/todoStore"
import TodoItem from "./TodoItem.vue"
import TodoTabs from "./TodoTabs.vue";

const todoStore = useTodoStore()

// ovde napisati logiku da se switchuje na all tabu kada nema todosa u complete i pending

watchEffect(() => {
  if (todoStore.completedTodos.length === 0 || todoStore.incompleteTodos.length === 0) {
    todoStore.tab = 'all';
  }
})

</script>
