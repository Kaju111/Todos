import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer"
import AddTodo from "./components/AddTodo";

function App() { 

  let initTodo ;

  if(localStorage.getItem("todos")===null){
    initTodo = []

  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"))

  }
    const onDelete = ((todo)=>{
    setTodos(todos.filter((e)=>{
      return e!==todo;
        }))
        localStorage.setItem("todos", JSON.stringify(todos))
  })

    const addTodo = (title, desc) =>{
      let sno;
      if(todos.length===0){
        sno = 0;
      }
      else{

         sno = todos [todos.length-1].sno +1;
      }
      const myTodo ={
        sno: sno,
        title: title,
        desc: desc,

      } 

      setTodos([...todos,myTodo])


    }


  const [todos , setTodos] = useState ([ initTodo ])

    useEffect(() => {

      localStorage.setItem("todos", JSON.stringify(todos))
    },[todos])



  return (
    <div>
      <Header title="MyTodoList" searchBer={false}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </div>
  );
}

export default App;
