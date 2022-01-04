import { useState, useEffect } from "react";
export const Todo = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  useEffect(()=>{
    getTodo()
  },[])

  

  //get Todo

  const getTodo = ()=>{
    
    fetch("http://localhost:3001/todos")
    .then(d => d.json())
    .then((res) =>{

      setTodo(res)
      console.log(todo);
    })
  }

  //addTodo
    const addTodo = ()=>{
        const payload = {
          title:text,
          status:false
        };
        fetch("http://localhost:3001/todos",{
          method:"POST",
        body:JSON.stringify(payload),
      headers:{
        "content-type":"application/json"
    },
  }).then(()=>{
    getTodo();
    setText("")
  })
}

//remove todo 
const handleToggle = (id) => {
  const getfil =  todo.filter((curelem) => {
       return curelem.id
   })

   setTodo(getfil)
}
  //const [todos, setTodos] = useState([]);
  return (
    <div>
      <input
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Todo"
      />
      <button
        onClick={addTodo}
      >
        add todo
      </button>
      {todo.map((e) => (
          <>
          <div style={{display:"flex",marginLeft:"35%"}}>
        <div style={{color: "E9A6A6",backgroundColor:"#1F1D36",height:"30px",color:"#E9A6A6", width:"40%",marginTop:"5px",marginBottom:"5px"}}>
          {e.title}</div>
          <button style={{backgroundColor:"#3F3351",color:"#864879"}} onClick={handleToggle}>Delete</button>
        </div>
        </>
      ))}


    </div>
  );
};
