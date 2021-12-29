import React from "react";
import MakramaCard from "./MakramaCard";

const MakramaListAvailable = (props) => {

    const makramas = props.makramas.map((makrama) => {
        if (makrama.available) {
            return <MakramaCard key={makrama.id} image={makrama}/>
        }
    })
    return <div className='ui grid' style={{justifyContent: "center"}}>{makramas}</div>
}

export default MakramaListAvailable;