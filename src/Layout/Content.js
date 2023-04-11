
import React from "react";
import NotFound from "./components/NotFound";
import CreateDeck from "./createDeck/CreateDeck";
import { Route, Switch } from "react-router-dom";
import DeckList from "./home/DeckList";
import DeckView from "./deck/DeckView";
import DeckStudy from "./deck/DeckStudy";
import EditDeck from "./deck/EditDeck";
import CreateCard from "./cards/CreateCard";
import EditCard from "./cards/EditCard";

function Content(){
    
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