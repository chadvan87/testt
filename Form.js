//Tao form va filter
import React from "react"; //import react vao

const Form = ({setInputText, todos, setTodos, inputText}) => { //tao props setInputText
    //
    const inputTextHandler = (e) =>{ //e short for event
        console.log(e.target.value); // lay ra value cua cai input user
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) =>{ //su dung nut Add Task 
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random()*1000}
        ]);
        setInputText(""); // Empty the input after click "Add Task" (Set state to empty but rmb to change value so that UI update with state)
    };
    return(
      <form>
      <input value={inputText} onChange={inputTextHandler} type="text" placeholder="New Task"/>
      <button onClick={submitTodoHandler} type="submit">
        Add
      </button>
      <div className="select">
       <button>All</button>
       <button>Completed</button>
       <button>Uncompleted</button>
      </div>
    </form>
    );
    
};
export default Form;