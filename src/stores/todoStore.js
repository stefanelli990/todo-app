import { defineStore } from "pinia";

export const useTodoStore = defineStore("todoStore", {
  state: () => ({
    // todos: [{id:1, title: 'Buy Milk', isComplete: false},{id:2, title: 'Read a book', isComplete: false}],
    todos: [],
    tab: "all",
  }),
  getters: {
    completedTodos() {
      return this.todos.filter((todo) => todo.isComplete);
    },
    incompleteTodos() {
      return this.todos.filter((todo) => !todo.isComplete);
    },
    countTotal() {
      return this.todos.length;
    },
  },
  actions: {
    addTodo(todo) {
      this.todos.unshift(todo);
      this.updateLocalStorage(); // Update local storage when updating a todo
    },
    deleteTodo(todoId) {
      // Find the index of the todo item with the given ID
      const index = this.todos.findIndex((todo) => todo.id === todoId);

      // If found, remove it from the array
      if (index !== -1) {
        this.todos.splice(index, 1);
        this.updateLocalStorage(); // Update local storage when updating a todo
      }
    },
    completeTodo(todoId) {
      // Find the index of the todo item with the given ID
      const todo = this.todos.find((todo) => todo.id === todoId);

      // If found, toggle complete
      if (todo) {
        todo.isComplete = !todo.isComplete;
        this.updateLocalStorage(); // Update local storage when updating a todo
      }
    },
    updateTodo(todoId, inputTodo) {
      // Find the index of the todo item with the given ID
      const todo = this.todos.find((todo) => todo.id === todoId);
      if (todo) {
        todo.title = inputTodo;
        this.updateLocalStorage(); // Update local storage when updating a todo
      }
    },
    // Function to update local storage
    updateLocalStorage() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    // Function to load todos from local storage
    loadFromLocalStorage() {
      const storedTodos = localStorage.getItem("todos");
      if (storedTodos) {
        this.todos = JSON.parse(storedTodos);
      }
    },
  },
});
