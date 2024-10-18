// Define action types
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

// Action creators
const addTodo = (title) => ({
  type: ADD_TODO,
  payload: { title },
});

const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});

const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

// Initial state
const initialState = {
  todos: [],
};

// Reducer function
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), title: action.payload.title, completed: false },
        ],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    default:
      return state;
  }
};

// Create Redux store
const store = Redux.createStore(todoReducer);

// UI rendering function
const render = () => {
  const todoList = document.getElementById("todoList");
  const state = store.getState();

  // Clear existing todos in UI
  todoList.innerHTML = "";

  // Render todos
  state.todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = todo.completed ? "completed" : "";
    li.innerHTML = `
      <span>${todo.title}</span>
      <div>
        <button onclick="toggleTask(${todo.id})">Toggle</button>
        <button onclick="deleteTask(${todo.id})">Delete</button>
      </div>
    `;
    todoList.appendChild(li);
  });
};

// Add new todo
document.getElementById("addTodoBtn").addEventListener("click", () => {
  const todoInput = document.getElementById("todoInput");
  const title = todoInput.value.trim();

  if (title !== "") {
    store.dispatch(addTodo(title));
    todoInput.value = "";
  }
});

// Toggle a todo's completed status
window.toggleTask = (id) => {
  store.dispatch(toggleTodo(id));
};

// Delete a todo
window.deleteTask = (id) => {
  store.dispatch(deleteTodo(id));
};

// Subscribe to the store to re-render UI on state changes
store.subscribe(render);

// Initial render
render();
