import React, { useEffect, useState } from "react";
import { readDeck } from "../../utils/api";
import { useParams, useHistory, useRouteMatch } from "react-router-dom";
import GenerateRow from "./GenerateRow";
import { deleteDeck } from "../../utils/api";
import BannerPath from "../components/BannerPath";

function DeckView(){
    const params = useParams();
    const {url} = useRouteMatch();
    const history = useHistory();
    const [deck, setDeck] = useState();
    const banner = [{
        title: "Home",
        url: "/"
    },{
        title: deck?.name,
        url: url
    }];
    
    useEffect(()=>{
        async function loadDeck(){
            try{
                const data = await readDeck(params.deckId);
                setDeck(data);
                
            }
            catch(error){
                console.log("Abort error");
            }
        }
        loadDeck();
    }, []);
    const handleDelete =()=>{
        const confirm = window.confirm("Delete this deck?\n\nYou will not be able to recover it.");
        if(confirm){
            deleteDeck(deck?.id);
            history.push("/");
        } 
    }
    let list =[];
    if(deck?.cards){
        list = deck.cards.map((card, index)=>(
            <GenerateRow key={index} id = {card.id} front = {card.front} back={card.back} index={index} url = {url}/>
        ))
    }

    return (
        <React.Fragment>
            <BannerPath list = {banner}/>
            <div className="container">
                <div className="row"> <h1>{deck?.name}</h1> </div>

                <div className="row"> <p>{deck?.description}</p> </div>
                    
                <div className="row">
                    <button className="btn btn-secondary" onClick={()=>history.push(`${url}/edit`)}>edit </button>
                    <button className="btn btn-primary" onClick={()=>history.push(`${url}/study`)}>study </button>
                    <button className="btn btn-primary" onClick={()=>history.push(`${url}/cards/new`)}>add cards </button>
                    <button className="btn btn-danger" onClick={handleDelete}>delete </button>
                </div>
                
                <div className="row"> <h1>Cards</h1> </div>
                
                <div className="row">
                    <table className=" table table-hover border">
                        <tbody>{list}</tbody>
                    </table>
                </div>

            </div>
        </React.Fragment>
    );
}
export default DeckView;