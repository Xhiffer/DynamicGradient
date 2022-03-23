import React from "react";
import {RangeStepInput} from 'react-range-step-input';
function GradUnitaire(){   
//Events
const deleteHandler = () =>{
//    setTodos(todos.filter((el) => el.id !== todo.id));
}
const styles = {
    test: {
        height: "200px",
        width: "80%",
        background: "linear-gradient(#e66465, #9198e5)",
        marginLeft: "auto",
        marginRight: "auto"

    },
}
    return(
        <div className="card col-4" style={{width: "18rem"}}>
            <div style={styles.test}></div>
            <div class="card-body">
            <h5 className="card-title">Grad n°{}</h5>
                <RangeStepInput />
                
                <RangeStepInput />
                <RangeStepInput />
                <RangeStepInput />
                <br/>
                <button onClick={deleteHandler}type="button"className="btn btn-danger">X</button>
            </div>

        </div>
    );
}

export default GradUnitaire;