import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
// import Dropdown from 'react-bootstrap/Dropdown';

function TodoList() {
  const [todos, setTodos] = useState([]);
//   const [value, setValue] = useState([]);
//   const [home] = useState([]);
//   const [work] = useState([]);
//   const [school] = useState([]);
  const addTodo = todo => {
    if (!todo.text ) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

//   const addHomeTodo = todo => {
//     if (!todo.text ) {
//       return;
//     }

//     const newTodos = [todo, ...home];

//     setTodos(newTodos);
//     console.log(...todos);
//   };

//   const addWorkTodo = todo => {
//     if (!todo.text ) {
//       return;
//     }

//     const newTodos = [todo, ...work];

//     setTodos(newTodos);
//     console.log(...todos);
//   };
//   const addSchoolTodo = todo => {
//     if (!todo.text ) {
//       return;
//     }

//     const newTodos = [todo, ...school];

//     setTodos(newTodos);
//     console.log(...todos);
//   };
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

//   const handleSelect=(e)=>{
//     console.log(e);
//     setValue(e)
    
//   };
  
//   function Home(props) {
//     return (
//         <TodoForm onSubmit={addHomeTodo} />,
//         <Todo
//         todos={home}
//         completeTodo={completeTodo}
//         removeTodo={removeTodo}
//         updateTodo={updateTodo}
//       />
//     );
//   };
//    function Work(props) {
//         return (
//             <Todo
//             todos={work}
//             completeTodo={completeTodo}
//             removeTodo={removeTodo}
//             updateTodo={updateTodo}
//           />
//         );
//    };
//     function School(props) {
//             return (
//                 <Todo
//                 todos={school}
//                 completeTodo={completeTodo}
//                 removeTodo={removeTodo}
//                 updateTodo={updateTodo}
//               />
//             );
//          };

    // function Choice(props) {
        
    //         if (value === 1) {
    //           return <Home />;
    //         }
    //         if (value === 2) {
    //             return <Work />;
    //           }
    //         if (value === 3) {
    //             return <School />;
    //           }else{
    //         return <Todo
    //         todos={todos}
    //         completeTodo={completeTodo}
    //         removeTodo={removeTodo}
    //         updateTodo={updateTodo}
    //       />;
    //           }
    //       }
  return (
    <>
      <h1> To-Do List </h1>
      {/* <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Lists
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onSelect={handleSelect}>Home List</Dropdown.Item>
                <Dropdown.Item onSelect={handleSelect}>Work List</Dropdown.Item>
                <Dropdown.Item onSelect={handleSelect}>School List</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown> */}
      <TodoForm onSubmit={addTodo} />
      <Todo
         todos={todos}
         completeTodo={completeTodo}
         removeTodo={removeTodo}
         updateTodo={updateTodo}
       />
      {/* <Choice/> */}
    </>
  );
}
export default TodoList;