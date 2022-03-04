import React, { useState } from "react";

const Readmore = (props) => {
    
    const [hiddenText, setHiddenText] = useState(true);

    const reduceText = () => {
        hiddenText ? setHiddenText(false) : setHiddenText(true)
    }

    return (
        <>
        <p>
            { hiddenText ? props.text.substr(0, props.maxLength).trim().concat("..."): props.text }
       </p>
       <button onClick={ reduceText }>
           { hiddenText ? `Read more` : `Read less` }
       </button>
       
       </>
    ) 
    
}

export default Readmore;