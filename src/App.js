import React, { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Todos from "./components/Todos";
import CounterContainer from "./container/CounterContainer";

const App = () => {
  // const [value, setValue] = useState(0);
  //   const onIncrease = () => increment;
  //   const onDecrease = () => decrement;

  const [id, setId] = useState(3);
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리덕스 기초 배우기",
      done: false
    },
    {
      id: 2,
      text: "리액트와 리덕스 사용하기",
      done: false
    }
  ]);
  const onChangeInput = text => {
    setInput(text);
  };
  const onInsert = text => {
    setId(id => id + 1);
    const addTodo = {
      id,
      text,
      done: false
    };
    setTodos(todos.concat(addTodo));
  };
  const onToggle = id => {
    setTodos(
      todos.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo))
    );
  };
  const onRemove = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <CounterContainer />
      <hr />
      <Todos
        input={input}
        todos={todos}
        onChangeInput={onChangeInput}
        onInsert={onInsert}
        onToggle={onToggle}
        onRemove={onRemove}
      />
    </div>
  );
};
export default App;
