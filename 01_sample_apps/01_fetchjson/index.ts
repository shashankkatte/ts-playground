//  This is a tiny app that is going to make an external
// API request and print out some JSON to console

// ///////////////////////////////////////

import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

//  Intefaces help define structure of objects in TypeScript
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  //   const todo = response.data;

  //  Type script way of doing
  const todo = response.data as Todo;

  // This 3 lines print out undefined only after execution if we use plain JS. But with TS these line shout at you saying something is wrong as we are using interfaces.
  //   const ID = todo.ID;
  //   const title = todo.Title;
  //   const finished = todo.finished;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID : ${id}
     Has a title of: ${title}
     Is it finished? ${completed}
    `);
};
