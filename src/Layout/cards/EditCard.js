import React from "react";
import {useState, useEffect} from "react";
import {useHistory, useParams, useRouteMatch} from "react-router-dom";
import { updateCard, readDeck } from "../../utils/api";
import BannerPath from "../components/BannerPath";
import Form from "../components/Form";

function EditCard(){
    const history = useHistory();
    const params = useParams();
    const {url} = useRouteMatch();
    
    const [formData, setFormData] = useState({});
    const [deck, setDeck] = useState({});

    const banner = [{
        title: "Home",
        url: "/"
    },{
        title: deck?.name,
        url: `/decks/${params.deckId}`
    },{
        title: "Edit Card",
        url: url
    }];
    
    useEffect(()=>{
        async function loadDeck(){
            try{
                setFormData((await readDeck(params.deckId)).cards[params.cardId]);
                setDeck(await readDeck(params.deckId));
                //setFormData(deck.cards[params.cardId]);
            }
            catch(error){
                console.log("Abort error");
            }
        }
        loadDeck();
    }, []);
    
    
    
    const handleSubmit = (event)=>{
        event.preventDefault();
        
        async function logCard(){
            const logCard = await updateCard(formData);
        }
        logCard();
        history.push(`/decks/${params.deckId}`);
    }

    const handleChange = ({ target }) => {
        setFormData({
          ...formData,
          [target.name]: target.value,
        });
    };

    return (
        <React.Fragment>
            <BannerPath list={banner} />
            <div className="container">
                <div className="row"> <h1>Edit Card</h1> </div>
                <div className="row">
                    <Form handleSubmit={handleSubmit} formData={formData} handleChange={handleChange} id={params.deckId} />
                </div>
            </div>

        </React.Fragment>
        
    );
}
export default EditCard;