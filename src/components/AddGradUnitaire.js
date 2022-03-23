import React from "react";
function AddGradUnitaire(){   
//Events
const AddHandler = () =>{
//    setTodos(todos.filter((el) => el.id !== todo.id));
}
const styles = {
    test: {
        background: "linear-gradient(#e66465, #9198e5)",

    },
}
    return(
        <div className="bg-light col-4 hover-shadow" style={{width: "18rem"}}>
            <div className="row">
                <div class="col-sm-12 ">
                    
                    <button type="button" className="btn btn-success center">+</button>
                </div>
                
            </div>
        </div>
    );
}

export default AddGradUnitaire;