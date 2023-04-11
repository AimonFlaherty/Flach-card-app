import React from "react";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import { createDeck } from "../../utils/api";
import BannerPath from "../components/BannerPath";
 
function CreateDeck(){
    const history = useHistory();
    const [dname, setDname] = useState("");
    const [desc, setDesc] = useState("");
    const banner = [{
        title: "Home",
        url: "/"
    },{
        title: "Create deck",
    }];
    
    const handleNameChange = (event)=> setDname(event.target.value);
    const handleDescChange = (event) => setDesc(event.target.value);
    const handleSubmit = (event)=>{
        event.preventDefault();
        const deck = {
            name: dname,
            description: desc
        };
        async function logDeck(){
            const logDeck = await createDeck(deck);
            history.push(`/decks/${logDeck.id}`);
        }
        logDeck();
    }
    return (
    <React.Fragment>
        <BannerPath list={banner} />
        <div className="container">
            <div className="row"> <h1>Create Deck</h1> </div>
            <div className="row">
                <form className="w-100" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>
                            Name
                        </label>
                        <input 
                            className="form-control"
                            type="text"
                            onChange={handleNameChange}
                            value={dname}
                            placeholder="Deck Name"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>
                            Description
                        </label>
                        <textarea
                            className="form-control"
                            rows="3"
                            onChange={handleDescChange}
                            value={desc}
                            placeholder="Brief description of the deck"
                        ></textarea>
                    </div>
                    
                    <button 
                        type="button" 
                        className="btn btn-secondary"
                        onClick={()=> history.push("/")}
                    >
                        Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            
        </div>
    </React.Fragment>    
        
        
        

      
    );
}
export default CreateDeck;