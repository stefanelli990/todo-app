<template>
  <TodoTabs/>
  
  <div class="relative">
    <Transition name="all-animation">
    <TransitionGroup name="todos" tag="ul" class="section-container relative" v-if="todoStore.tab === 'all'">
    <TodoItem v-for="todo in todoStore.todos" :key="todo.id" :id="todo.id" :title="todo.title" :is-complete="todo.isComplete"/>
  </TransitionGroup>
  </Transition>
 
  <Transition name="completed-animation">
    <TransitionGroup name="todos" tag="ul" class="section-container relative" v-if="todoStore.tab === 'completed'">
    <TodoItem v-for="todo in todoStore.completedTodos" :key="todo.id" :id="todo.id" :title="todo.title" :is-complete="todo.isComplete"/>
  </TransitionGroup>
  </Transition>

  <Transition name="incomplete-animation">
    <TransitionGroup name="todos" tag="ul" class="section-container relative" v-if="todoStore.tab === 'incomplete'">
    <TodoItem v-for="todo in todoStore.incompleteTodos" :key="todo.id" :id="todo.id" :title="todo.title" :is-complete="todo.isComplete"/>
  </TransitionGroup>
  </Transition>
  </div>

  <Transition name="no-todos-animation">
    <NoTodo/>
  </Transition>
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

/* adding todos */
.todos-enter-from {
  opacity: 0;
  transform: scale(0.7);
}
.todos-enter-to {
  opacity: 1;
  transform: scale(1);
}
.todos-enter-active,
.todos-leave-active,
.todos-move {
  transition: all 0.2s;
}
.todos-leave-active { position: absolute; left:16px; right: 16px;}
.todos-leave-from { opacity: 1; transform: scale(1); }
.todos-leave-to { opacity: 0; transform: scale(0.7); }

/* switching tabs animation */

.all-animation-enter-from,
.completed-animation-enter-from,
.incomplete-animation-enter-from,
.no-todos-animation-enter-from {
  opacity: 0;
  transform: scale(0.7);
}

.all-animation-enter-to,
.completed-animation-enter-to,
.incomplete-animation-enter-to,
.no-todos-animation-enter-to {
  opacity: 1;
  transform: scale(1);
}

.all-animation-leave-from,
.completed-animation-leave-from,
.incomplete-animation-leave-from,
.no-todos-animation-leave-from  {
  opacity: 1;
  transform: scale(1);
}

.all-animation-leave-to,
.completed-animation-leave-to,
.incomplete-animation-leave-to,
.no-todos-animation-leave-to {
  opacity: 0;
  transform: scale(0.7);
}

.all-animation-enter-active,
.all-animation-leave-active,
.completed-animation-enter-active,
.completed-animation-leave-active,
.incomplete-animation-enter-active,
.incomplete-animation-leave-active,
.no-todos-animation-enter-active,
.no-todos-animation-leave-active {
  transition: all 0.3s;
}
.all-animation-leave-active,
.completed-animation-leave-active,
.incomplete-animation-leave-active,
.no-todos-animation-leave-active {
  position: absolute;
  left:16px; 
  right: 16px;
  top: 0;
}

</style>
