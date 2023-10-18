<template>
  <TodoTabs/>
  
  <TransitionGroup name="todos" tag="ul" class="section-container relative" v-if="todoStore.tab === 'all'">
    <TodoItem v-for="todo in todoStore.todos" :key="todo.id" :id="todo.id" :title="todo.title" :is-complete="todo.isComplete"/>
  </TransitionGroup>
 
  <TransitionGroup name="todos" tag="ul" class="section-container relative" v-if="todoStore.tab === 'completed'">
    <TodoItem v-for="todo in todoStore.completedTodos" :key="todo.id" :id="todo.id" :title="todo.title" :is-complete="todo.isComplete"/>
  </TransitionGroup>

  <TransitionGroup name="todos" tag="ul" class="section-container relative" v-if="todoStore.tab === 'incomplete'">
    <TodoItem v-for="todo in todoStore.incompleteTodos" :key="todo.id" :id="todo.id" :title="todo.title" :is-complete="todo.isComplete"/>
  </TransitionGroup>

  <NoTodo/>
</template>

<script setup>
// import { watchEffect } from 'vue'
import { useTodoStore } from "../stores/todoStore"
import TodoItem from "./TodoItem.vue"
import TodoTabs from "./TodoTabs.vue";
import NoTodo from "./NoTodo.vue";

const todoStore = useTodoStore()

// ovde napisati logiku da se switchuje na all tabu kada nema todosa u complete i pending

// watchEffect(() => {
//   if (todoStore.completedTodos.length === 0 || todoStore.incompleteTodos.length === 0) {
//     todoStore.tab = 'all';
//   }
// })

</script>

<style>

.todos-enter-from {
  opacity: 0;
  translate: 100px 0 0 0;
}
.todos-enter-to {
  opacity: 1;
  translate: 0;
}
.todos-enter-active,
.todos-leave-active,
.todos-move {
  transition: all 0.2s;
}
.todos-leave-active { position: absolute; left:16px; right: 16px;}
.todos-leave-from { opacity: 1; }
.todos-leave-to { opacity: 0; }

</style>
