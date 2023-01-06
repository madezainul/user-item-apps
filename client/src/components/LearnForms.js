import React, {useState} from "react";
import { addUser } from "../fetchs/userFetch";

const LearnForms = () => {

    const [name, setName] = useState("");
    const [hobby, setHobby] = useState("");

    const submitHandler = () => {
        const tempObj = {
            name, hobby
        }
        addUser(tempObj);
        // console.log(tempObj);
    }

    return (
        <div className="col-6">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3>Add Form User</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mx-auto my-3">
                    <form>
                        <div className="mb-3">
                            <label>Name</label>
                            <input 
                            onChange={(e) => setName(e.target.value)} 
                            type="text" className="form-control" placeholder="Name" />
                        </div>

                        <div className="mb-3">
                            <label>Hobby</label>
                            <input
                            onChange={(e) => setHobby(e.target.value)}
                            type="text" className="form-control" placeholder="Hobby" />
                        </div>

                        <div className="mb-3">
                            <button 
                            onClick={() => submitHandler()}
                            type="button" className="btn btn-primary btn-submit">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LearnForms;