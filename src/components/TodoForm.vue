<template>
  <div class="max-w-md mx-auto px-4 mb-8">
    <form @submit.prevent="addNewTodo" class="bg-slate-900 flex p-3 border rounded-lg" :class="errMsg ? 'border-red-500' : 'border-slate-900'">
      <input
        class="bg-transparent flex-1 px-4 py-2 outline-none"
        type="text"
        v-model="todoInput"
        placeholder="Add new todo..."
      />
      <TodoBtn  colour="bg-teal-600"
        ><Icon icon="uil:plus" width="16" height="16"
      /></TodoBtn>
    </form>
    <div class="h-[20px]">
      <span v-show="errMsg" class="text-red-500 text-sm">Please enter a todo.</span>
    </div>
  </div>
</template>

<script setup>

import TodoBtn from "../components/TodoBtn.vue";
import { ref } from "vue"
import { Icon } from "@iconify/vue"
import { useTodoStore } from "../stores/todoStore"
import { v4 as uuidv4 } from "uuid"

const todoInput = ref("");
const errMsg = ref(false);

const todoStore = useTodoStore();

const addNewTodo = () => {
  const todo = {
    id: uuidv4(),
    title: todoInput.value,
    isComplete: false,
  }

  if (todoInput.value.length) {
    todoStore.addTodo(todo);
    todoInput.value = "";
    errMsg.value = false;
  } else {
    errMsg.value = true;
  }
};
</script>
