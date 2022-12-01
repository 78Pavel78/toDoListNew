let todosContainer = document.querySelector('.todos');
let addButton = document.querySelector('#addTodo');
let todoInput = document.querySelector('#todoInput');

let todoList = {
  items: [],
  printAll: function() {
    todosContainer.innerText = '';
    for (let i of this.items) {
      let todoContainer = document.createElement('div');
      let todoText = document.createElement('div');
      let deleteBtn = document.createElement('img');
      let completedBtn = document.createElement('img');
      let dataStamp = document.createElement('p'); //data

      dataStamp.innerText = i.id.toLocaleString(); //data
      todoText.innerText = i.name;
      deleteBtn.src = './pictures/delete.png';
      completedBtn.src = './pictures/non-marked.png';
      

      completedBtn.addEventListener('click', () => this.completed(i.id));
      deleteBtn.addEventListener('click', () => this.delete(i.id));

      todoContainer.append(dataStamp); //data
      todoContainer.append(todoText);
      todoContainer.append(deleteBtn);
      todoContainer.append(completedBtn);

      todoContainer.classList.add('todo');
      todoText.classList.add('todoText');
      completedBtn.classList.add('iconComplete');
      deleteBtn.classList.add('iconDelete');

      if (i.completed) {
        todoContainer.classList.add('completed');
        completedBtn.src = './pictures/marked.png'
      }
  
      todosContainer.append(todoContainer);
    }
  },

addTodo: function() {
    let todo = todoInput.value;
    if (todo !== ''){
    todoList.items.unshift({
      id: new Date(),
      name: todo,
      completed: false
    })
    todoList.printAll();
    }
    todoInput.value = '';
  },

completed: function(id) {
  for (let i of this.items) {
    if (i.id === id) {
      i.completed = !i.completed;
    }
}
this.printAll();
},

delete: function(id) {
  for (let i of this.items) {
    if (i.id === id) { 
    this.items.splice(this.items.indexOf(this.items.find(item => item.id === id), 0), 1); // по ID определяем индекс в массиве items и вырезаем из массива
    }
}
this.printAll();
},

}

addButton.addEventListener('click', todoList.addTodo);

todoList.printAll();