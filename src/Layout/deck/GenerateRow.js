import React from "react";
import { useHistory } from "react-router-dom";
import { deleteCard } from "../../utils/api";

function GenerateRow({id, front, back, index, url}){
    const history = useHistory();
    const handleDelete =()=>{
        const confirm = window.confirm("Delete this Card?\n\nYou will not be able to recover it.");
        if(confirm) {
            deleteCard(id);
            history.go(0);
        }
    }
    return (
        <tr>
            <td>{front}</td>
            <td>
                <div className="container">
                    <p className="col-12">{back}</p>
                    <div>
                        <button className="btn btn-secondary" onClick={()=> history.push(`${url}/cards/${id}/edit`)}>edit</button>
                        <button className="btn btn-danger"onClick={handleDelete}>delete</button>
                    </div>
                </div>
            </td>
        </tr>
    )
}
export default GenerateRow;