import React from "react";
import {useState, useEffect} from "react";
import {useHistory, useParams, useRouteMatch} from "react-router-dom";
import { updateCard, readDeck } from "../../utils/api";
import BannerPath from "../components/BannerPath";

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
                //setFormData((await readDeck(params.deckId)).cards[params.cardId]);
                setDeck(await readDeck(params.deckId));
                setFormData(deck);
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
            const logCard = await updateCard(formData);
        }
        logCard();
        history.push(`/decks/${params.deckId}`);
    }
    return (
        <React.Fragment>
            <BannerPath list={banner} />
            <div className="container">
                <div className="row"> <h1>Edit Card</h1> </div>
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
export default EditCard;