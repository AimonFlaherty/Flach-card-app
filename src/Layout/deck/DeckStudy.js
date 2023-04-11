import React, { useEffect, useState } from "react";
import { readDeck } from "../../utils/api";
import { useParams, useHistory, useRouteMatch } from "react-router-dom";
import Card from "../components/Card";
import BannerPath from "../components/BannerPath";

function DeckStudy(){
    const [deck, setDeck] = useState();
    const [pointer, setPointer] = useState(0);
    const params = useParams();
    const history = useHistory();
    const {url} = useRouteMatch();

    const banner = [{
        title: "Home",
        url: "/"
    },{
        title: deck?.name,
        url: url.slice(0, url.length-5)
    },{
        title: "Study",
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
    let cardLength = deck?.cards.length;
    let card = deck?.cards[pointer];
    function handleNext(){
        setPointer(pointer + 1);
        if(pointer >= cardLength -1){
            const confirm = window.confirm("Restart cards? \n\n Click 'cancle' to return home.");
            confirm ? setPointer(0): history.push("/");
        }
        
        
    }
    
    

    return(
        <React.Fragment>
            <BannerPath list ={banner} />
            <h1>{deck?.name}: Study</h1>
            {cardLength < 3 ? (
                <div>
                    <h2 >Not enough cards</h2>
                    <button className="btn btn-primary" onClick={()=>history.push(`decks/${params.deckId}/cards/new`)}>
                        Add Cards
                    </button>
                </div>
            
            ):(
                <Card prompt={card?.front} answer={card?.back} handleNext={handleNext} value ={pointer} />
                
            )}
           
        </React.Fragment>
        
    );
}
export default DeckStudy;