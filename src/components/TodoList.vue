<template>
  <h2 v-if="todoStore.todos.length === 0" class="mx-auto max-w-xl px-4 text-center text-lg">You're all caught up – no more todos! 😊</h2>
  <TodoFilter v-else/>
  <ul class="mx-auto max-w-xl px-4" v-if="todoStore.filter === 'all'">
    <TodoItem v-for="todo in todoStore.todos" :key="todo.id" :id="todo.id" :title="todo.title" :is-complete="todo.isComplete" @complete="todoStore.completeTodo(todo.id)" @delete="todoStore.deleteTodo(todo.id)"/>
  </ul>
  <ul class="mx-auto max-w-xl px-4" v-if="todoStore.filter === 'completed'">
    <TodoItem v-for="todo in todoStore.completedTodos" :key="todo.id" :id="todo.id" :title="todo.title" :is-complete="todo.isComplete" @complete="todoStore.completeTodo(todo.id)" @delete="todoStore.deleteTodo(todo.id)"/>
  </ul>
  <ul class="mx-auto max-w-xl px-4" v-if="todoStore.filter === 'incomplete'">
    <TodoItem v-for="todo in todoStore.incompleteTodos" :key="todo.id" :id="todo.id" :title="todo.title" :is-complete="todo.isComplete" @complete="todoStore.completeTodo(todo.id)" @delete="todoStore.deleteTodo(todo.id)"/>
  </ul>
</template>

<script setup>

import { useTodoStore } from "../stores/todoStore"
import TodoItem from "./TodoItem.vue"
import TodoFilter from './TodoFilter.vue';

const todoStore = useTodoStore()

</script>
