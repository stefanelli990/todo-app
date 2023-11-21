import { defineStore } from "pinia";
import { useToast } from 'vue-toastification'

const toast = useToast()

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
      this.todos.unshift(todo)
      toast.success('Todo added successfully!')
      this.updateLocalStorage() // Update local storage when updating a todo
    },
    deleteTodo(todoId) {
      // Find the index of the todo item with the given ID
      const index = this.todos.findIndex((todo) => todo.id === todoId);

      // If found, remove it from the array
      if (index !== -1) {
        this.todos.splice(index, 1);
        toast.success('Todo deleted successfully!')
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
        if(todo.isComplete) {
          toast.success('Well done! Todo marked as completed!')
        } else {
          toast.info('Todo remains incomplete.')
        }
      }
    },
    updateTodo(todoId, inputTodo) {
      // Find the index of the todo item with the given ID
      const todo = this.todos.find((todo) => todo.id === todoId);
      if (todo) {
        todo.title = inputTodo
        toast.info('Todo has been updated.')
        this.updateLocalStorage() // Update local storage when updating a todo
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
