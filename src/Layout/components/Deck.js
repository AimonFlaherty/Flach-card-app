import React from "react";
import {useHistory} from "react-router-dom";
import { deleteDeck } from "../../utils/api";

function Deck({data}){
    const history = useHistory();
    const handleDelete =()=>{
        
        const confirm = window.confirm("Delete this deck?\n\nYou will not be able to recover it.");
        if(confirm) {
            history.go(0);
            deleteDeck(data.id);
        }
        
    }
    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">
                    {data.name}
                    
                </h5> 
                <p>{data.description}</p>
                <div className="container">
                    <button className="btn btn-secondary" onClick={()=>history.push(`/decks/${data.id}`)}>
                        View
                    </button>
                    <button className="btn btn-primary" onClick={()=>history.push(`/decks/${data.id}/study`)}>
                        Study
                    </button>
                    <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    );
}
export default Deck;