// Get DOM elements
const todoInput = document.querySelector('#todo-input');
const addBtn = document.querySelector('#add-btn');
const todoList = document.querySelector('#todo-list');

// Load todos from localStorage
let todos = [];

// Function to render todos
function renderTodos() {
    if (todos.length === 0) {
        todoList.innerHTML = '<li class="empty-message">No todos yet. Add one above!</li>';
        return;
    }

    todoList.innerHTML = todos.map((todo, index) => `
        <li>
            <span class="todo-text">${todo}</span>
            <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
            <button class="update-btn" onclick="updateTodo(${index})">Update</button>
        </li>
    `).join('');
}

// Function to add a new todo
function addTodo() {
    const todoText = todoInput.value.trim();

    if (todoText === '') {
        alert('Please enter a todo item!');
        return;
    }

    todos.push(todoText);
    todoInput.value = '';
    renderTodos();
}

// Function to delete a todo
function deleteTodo(index) {
    if (confirm('Are you sure you want to delete this todo?')) {
        todos.splice(index, 1);
        renderTodos();
    }
}

function updateTodo(index) {
    todoInput.value = todos[index];
    todoInput.focus();
    todos.splice(index, 1);
    renderTodos();
}

// Event listeners
addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});

// Initial render
renderTodos();