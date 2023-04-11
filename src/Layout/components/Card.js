import React, {useState} from "react";

function Card({prompt, answer, handleNext, value}){
    const [flipped, setFlipped] = useState(false);
    function flip(){
        setFlipped(!flipped);
    }
    return(
        <div className="card">
            <div className="card-body">
                {flipped ? (
                    <React.Fragment>
                        <p>{answer}</p>
                        <button className="btn btn-secondary" onClick={flip}>
                            Flip
                        </button>
                        <button className="btn btn-primary" onClick={()=>{
                            handleNext();
                            flip();
                        }}>
                            Next
                        </button>
                    </React.Fragment>
                    
                    
                ):(
                    <React.Fragment>
                        <p>{prompt}</p>
                        <button className="btn btn-secondary" onClick={flip}>
                            Flip
                        </button>
                    </React.Fragment>
                )}
            </div>
        </div>
    )
}
export default Card;