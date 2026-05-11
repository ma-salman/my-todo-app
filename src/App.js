
import { useState } from "react";
import "./App.css";

function App() {
  const [todolist, setTodoList] = useState([])
  const saveToDoList = (event) => {


    const toname = event.target.toname.value; // get input value
    if (!todolist.includes(toname)) {
      const finalDoList = [...todolist, toname];
      setTodoList(finalDoList);


    }
    else {
      alert("This Todo is already exist in the lsit");
    }


    // optional: clear input after saving
    event.preventDefault();

  };
  const list = todolist.map((value, index) => {
    return (
      <ToDoListitems value={value} key={index} indexNumber={index}
        todolist={todolist}
        setTodoList={setTodoList}

      />
    )
  })

  return (
    <div className="App">
      <div>Header </div>
      <div>Main</div>
      <div>Footer</div>
      {/* <h1><b>ToDo-List</b></h1>

      <form onSubmit={saveToDoList}>
        <input type="text" name="toname" />
        <button>save</button>
      </form>
      <div className="outerDiv">

        <ul>
          {list}
        </ul>
      </div> */}
    </div>
  );
}

export default App;

function ToDoListitems({ value, indexNumber, todolist, setTodoList }) {

  const deleteRow = () => {
    const finalData = todolist.filter((v, i) => i !== indexNumber)
    setTodoList(finalData);
  }


  return (
    <li>
      {indexNumber + 1}. {value} <span onClick={deleteRow}>&times;</span>
    </li>

  )
}
