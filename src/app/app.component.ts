import { Component } from '@angular/core';
import { iTodo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedTodo: iTodo | undefined;

  title = 'todo';

  todoList = [
    {
      todoTitle: 'Do something',
      completed: false,
    },
    {
      todoTitle: 'Do nothing',
      completed: false,
    },
  ];
  //   this.todoList.push({ title: this.inputData, completed: false });

  addItem(newItem: string) {
    this.todoList.push({ todoTitle: newItem, completed: false });
    console.log('From AppComponent!newItem added', newItem);
  }
  deleteItem(index: number) {
    this.todoList.splice(index, 1);
  }
  selectTodo(selectedTodo: iTodo) {
    selectedTodo.completed = !selectedTodo.completed;
    this.selectedTodo = selectedTodo;
    console.log(
      'From selectTodo:',
      selectedTodo.todoTitle,
      selectedTodo.completed
    );
  }
}
