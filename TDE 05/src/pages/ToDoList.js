import { useState } from "react";

import "./ToDoList.css";

const ListItem = ({ toDoItem, onDelete, onToggle}) => {
    const handleToogle = () =>{
      onToggle(toDoItem.id)
    }

    const handleDelete = (event) =>{
      event.stopPropagation();
      onDelete(toDoItem.id)
    }

  return (
    <div
      className="listItem"
      style={toDoItem.done ? { backgroundColor: "#065900" } : null}
      onClick={handleToogle}
    >
     <span>{toDoItem.name}</span>
     <button className="deleteButton" onClick={handleDelete}>
          -
      </button>
     
    </div>
  );
}


const ToDoList = ({ pageTitle }) => {
  const [toDoList, setToDoList] = useState([]);
  const [inputValue, setInputValue] = useState();
  const [nextId,setNextId] = useState(1);



  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onClickAddTask = () => {
    if (!inputValue) return;
    const newToDo = {id:nextId,name:inputValue, done:false};
    setToDoList([...toDoList,newToDo]);
    setNextId(nextId+1);
    setInputValue("");
  };

  const onDeleteTask = (id) =>{
    const updateList = toDoList.filter((item)=>item.id !==id);
    setToDoList(updateList)
  }


  const onToggleTask = (id) =>{
    const updateList = toDoList.map((item) =>
    item.id ===id?{...item,done:!item.done} :item)
    setToDoList(updateList)
  }

  return (
    <div>
      <div className="header">
        <h1>{pageTitle}</h1>
      </div>
      <div className="inputContainer">
        <label htmlFor="taskText" className="inputLabel">
          Digite a sua tarefa
        </label>
        <input
          id="taskText"
          name="taskText"
          className="input"
          value={inputValue}
          onChange={onInputChange}
        />
        <button className="addButton" onClick={onClickAddTask}>
          +
        </button>
      
      </div>
      <div className="list">
        {toDoList.map((toDoItem) => (
          <ListItem 
            key={toDoItem.id} 
            toDoItem={toDoItem}
            onDelete={onDeleteTask}
            onToggle={onToggleTask}/>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
