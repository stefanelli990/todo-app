<template>
  <form
  @submit.prevent="addNewTodo"
    class="section-container bg-slate-900 mb-4 flex p-3 rounded-lg"
  >
    <input
      class="bg-transparent flex-1 px-4 py-2 outline-none"
      type="text"
      v-model="todoInput"
      placeholder="Add new todo..."
    />
    <TodoBtn color="bg-teal-600"
      ><Icon icon="uil:plus" width="20" height="20"
    /></TodoBtn>
  </form>
</template>

<script setup>
import { ref } from "vue"
import { Icon } from "@iconify/vue"
import { useTodoStore } from "../stores/todoStore"
import { v4 as uuidv4 } from "uuid"
import TodoBtn from "./TodoBtn.vue"

const todoInput = ref('');

const todoStore = useTodoStore();

const addNewTodo = () => {
  
  const todo = {
    id: uuidv4(),
    title: todoInput.value,
    isComplete: false,
  }
  
  if (todoInput.value.length) {
    todoStore.addTodo(todo);
    todoInput.value = ''
  } else {
    alert('Please enter a valid todo');
  }
};

</script>
