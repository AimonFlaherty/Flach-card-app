import React from "react";
import { useHistory } from "react-router-dom";


function Form({handleSubmit, handleChange, formData, id}){

    const history = useHistory();

    return (
        <form className="w-100" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>
                    Front
                </label>
                <textarea 
                    className="form-control"
                    name="front"
                    rows="2"
                    onChange={handleChange}
                    value={formData.front}
                ></textarea>
            </div>
            
            <div className="form-group">
                <label>
                    Back
                </label>
                <textarea
                    className="form-control"
                    name="back"
                    rows="2"
                    onChange={handleChange}
                    value={formData.back}
                ></textarea>
            </div>
            
            <button 
                type="button" 
                className="btn btn-secondary"
                onClick={()=> history.push(`/decks/${id}`)}
            >
                Done
            </button>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
    );
}
export default Form;