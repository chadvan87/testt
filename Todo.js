import React from "react";

const Todo = ({text, todo, todos, setTodos}) => {
    //render out the text
    //Events
    //Function for delete button
    const deleteHandler =()=> {
        setTodos(todos.filter((el)=> el.id !== todo.id)); //compare element that user click on that match the element of state
        //console.log(todo);
    };
    //Function for checkbox button
    const completeHandler = () =>{
        setTodos(todos.map(item =>{ //Tim item id trung vs id user click va doi item complete tu true sang false hoac nguoc lai
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li> 
            <button onClick={completeHandler} className="btn">
                <i className="fas fa-check-square"></i>
            </button>
            
            
            <button onClick={deleteHandler} className="btn" >
                <i className="fas fa-trash"></i>
            </button>
           

            <button className="btn">
            <i className="fas fa-edit"></i>
            </button>

            <button className="btn">
            <i className="fas fa-palette"></i>
            </button>
        </div>
    );
}
export default Todo;