<template>
  
  <TodoFilter v-if="todoStore.countTotal !== 0"/>
  <ul class="mx-auto max-w-xl px-4" v-if="todoStore.filter === 'all'">
    <TodoItem v-for="todo in todoStore.todos" :key="todo.id" :id="todo.id" :title="todo.title" :is-complete="todo.isComplete" @complete="todoStore.completeTodo(todo.id)" @delete="todoStore.deleteTodo(todo.id)"/>
    
  </ul>
  <ul class="mx-auto max-w-xl px-4" v-if="todoStore.filter === 'completed'">
    <TodoItem v-for="todo in todoStore.completedTodos" :key="todo.id" :id="todo.id" :title="todo.title" :is-complete="todo.isComplete" @complete="todoStore.completeTodo(todo.id)" @delete="todoStore.deleteTodo(todo.id)"/>
  </ul>
  <ul class="mx-auto max-w-xl px-4" v-if="todoStore.filter === 'incomplete'">
    <TodoItem v-for="todo in todoStore.incompleteTodos" :key="todo.id" :id="todo.id" :title="todo.title" :is-complete="todo.isComplete" @complete="todoStore.completeTodo(todo.id)" @delete="todoStore.deleteTodo(todo.id)"/>
  </ul>
  <NoTodo/>
</template>

<script setup>

import { useTodoStore } from "../stores/todoStore"
import TodoItem from "./TodoItem.vue"
import TodoFilter from './TodoFilter.vue'
import NoTodo from "./NoTodo.vue";

const todoStore = useTodoStore()

</script>
