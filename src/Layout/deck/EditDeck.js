import React from "react";
import {useState, useEffect} from "react";
import {useHistory, useParams, useRouteMatch} from "react-router-dom";
import { updateDeck, readDeck } from "../../utils/api";
import BannerPath from "../components/BannerPath";


 
function EditDeck(){
    const history = useHistory();
    const params = useParams();
    const {url} = useRouteMatch();
    //const [initialDeck, setInitialDeck] = useState({...deck});
    
    //const [deck, setDeck] = useState({});
    const [formData, setFormData] = useState();
    //console.log(params.deckId);

    const banner = [{
        title: "Home",
        url: "/"
    },{
        title: formData?.name,
        url: url.slice(0, url.length-4)
    },{
        title: "Edit",
        url: url
    }];

    useEffect(()=>{
        async function loadDeck(){
            try{
                /*
                const data = await readDeck(params.deckId);
                console.log(data);  
                setDeck(data);
                console.log(deck);
                setFormData({...deck});
                console.log(formData);*/
                setFormData(await readDeck(params.deckId));
                
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
        
        
        async function logDeck(){
            //console.log(formData);
            const logDeck = await updateDeck(formData);
            //console.log(logDeck);
            
        }
        logDeck();
        history.push(`/decks/${formData.id}`);
    }
    return (
        <React.Fragment>
            <BannerPath list ={banner} />
            <div className="container">
                <div className="row"> <h1>Edit Deck</h1> </div>
                <div className="row">
                    <form className="w-100" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>
                                Name
                            </label>
                            <input 
                                className="form-control"
                                name="name"
                                type="text"
                                onChange={handleChange}
                                value={formData?.name}
                                //value="testing shit"
                                
                            />
                        </div>
                        
                        <div className="form-group">
                            <label>
                                Description
                            </label>
                            <textarea
                                className="form-control"
                                name="description"
                                rows="3"
                                onChange={handleChange}
                                value={formData?.description}
                                
                            ></textarea>
                        </div>
                        
                        <button 
                            type="button" 
                            className="btn btn-secondary"
                            onClick={()=> history.push(`/decks/${formData.id}`)}
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
export default EditDeck;