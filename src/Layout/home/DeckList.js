import React, { useEffect, useState } from "react";
import Deck from "../components/Deck";
import CreateBtn from "./CreateBtn";
import { listDecks } from "../../utils/api";

function DeckList(){
    
    const [decks, setDecks] = useState([]);
    
    useEffect(()=>{
        async function loadDecks(){
            try{
                const data = await listDecks();
                setDecks(data);
            }
            catch(error){
                console.log("Abort error");
            }
        }
        loadDecks();
    }, []);
    const list = decks.map((deck, index)=> <li className="list-group-item border-0" key={index}>
        <Deck data={deck} />
        </li>)
    return (
        <React.Fragment>
            <CreateBtn />
            <div>
                <ul className="list-group">
                    {list}
                </ul>
            </div>
        </React.Fragment>
        
    );
}
export default DeckList;