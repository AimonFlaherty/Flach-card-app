
import React, { useEffect, useState } from "react";
import NotFound from "./components/NotFound";
import CreateDeck from "./createDeck/CreateDeck";
import { Route, Switch } from "react-router-dom";
import DeckList from "./home/DeckList";
import DeckView from "./deck/DeckView";
import { listDecks } from "../utils/api";
import DeckStudy from "./deck/DeckStudy";
import EditDeck from "./deck/EditDeck";
import CreateCard from "./cards/CreateCard";
import EditCard from "./cards/EditCard";

function Content(){
    /*
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
    }, []);*/
    return(
        <React.Fragment>
            <Switch>
                <Route exact={true} path="/">
                    <DeckList />
                </Route>
                <Route path="/decks/new">
                    <CreateDeck />
                </Route>
                <Route exact={true} path="/decks/:deckId">
                    <DeckView />
                </Route>
                <Route path="/decks/:deckId/study">
                    <DeckStudy />
                </Route>
                <Route exact={true} path="/decks/:deckId/edit">
                    <EditDeck />
                </Route>
                <Route exact={true} path="/decks/:deckId/cards/new">
                    <CreateCard />
                </Route>
                <Route exact={true} path="/decks/:deckId/cards/:cardId/edit">
                    <EditCard />
                </Route>
                <Route>
                    <NotFound />
                </Route>
                
            </Switch>
        </React.Fragment>
    );
}
export default Content;