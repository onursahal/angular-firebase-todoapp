import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

import { Observable, Subject } from 'rxjs';
import { TodoList, User, Todo } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersCollection: AngularFirestoreCollection<any>;
  private uid: string;
  user: Observable<any>;
  todos: TodoList;
  xuser: User;
  listIndex: number;
  listIndexSbj: Subject<number> = new Subject<number>();
  todoIndex: number;
  todoIndexSbj: Subject<number> = new Subject<number>();

  constructor(public firestore: AngularFirestore) {
    this.uid = localStorage.getItem('userID');
    this.usersCollection = firestore.collection('users');
    this.user = this.usersCollection.doc(this.uid).valueChanges();
    this.user.subscribe((data) => {
      this.todos = data.todoList;
      this.xuser = data;
      console.log(data);
    });
    this.listIndexSbj.subscribe((index) => {
      this.listIndex = index;
    });
    this.todoIndexSbj.subscribe((index) => {
      this.todoIndex = index;
      console.log(this.todoIndex);
    });
  }

  updateListName(newListName: string) {
    this.xuser.todoList[this.listIndex].name = newListName;
    this.upadateCollection();
  }

  updateTodo(newTodo: string) {
    this.xuser.todoList[this.listIndex].todos[this.todoIndex].todo = newTodo;
    this.upadateCollection();
  }

  addNewList(newList: TodoList) {
    this.xuser.todoList.push(newList);
    this.upadateCollection();
  }
  addNewTodo(newTodo: Todo) {
    this.xuser.todoList[this.listIndex].todos.push(newTodo);
    this.upadateCollection();
  }

  updateIsFinished() {
    this.xuser.todoList[this.listIndex].todos[this.todoIndex].isFinished = !this
      .xuser.todoList[this.listIndex].todos[this.todoIndex].isFinished;
    this.upadateCollection();
  }

  upadateCollection() {
    this.usersCollection.doc(this.uid).update(this.xuser);
  }
}
