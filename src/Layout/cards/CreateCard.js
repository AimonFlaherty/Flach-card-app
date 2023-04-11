import React from "react";
import {useState, useEffect} from "react";
import {useHistory, useParams, useRouteMatch} from "react-router-dom";
import { createCard, readDeck } from "../../utils/api";
import BannerPath from "../components/BannerPath";

function CreateCard(){
    const history = useHistory();
    const params = useParams();
    const {url} = useRouteMatch();
    const initialState ={
        front: "",
        back: "",
        deckId: params.deckId
    }
    const [formData, setFormData] = useState(initialState);
    const [deck, setDeck] = useState();

    const banner = [{
        title: "Home",
        url: "/"
    },{
        title: deck?.name,
        url: url.slice(0, url.length-10)
    },{
        title: "Add Card",
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
    
    const handleChange = ({ target }) => {
        setFormData({
          ...formData,
          [target.name]: target.value,
        });
    };
    
    const handleSubmit = (event)=>{
        event.preventDefault();
        
        async function logCard(){
            const logCard = await createCard(params.deckId, formData);
            deck.cards.push(logCard);
            history.push(`/decks/${params.deckId}`);
        }
        logCard();
    }
    return (
        <React.Fragment>
            <BannerPath list={banner}/>
            <div className="container">
                <div className="row"> <h1>Add Card</h1> </div>
                <div className="row">
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
                                placeholder="front side of card"
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
                                placeholder="back side of card"
                            ></textarea>
                        </div>
                        
                        <button 
                            type="button" 
                            className="btn btn-secondary"
                            onClick={()=> history.push(`/decks/${params.deckId}`)}
                        >
                            Done
                        </button>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}
export default CreateCard;