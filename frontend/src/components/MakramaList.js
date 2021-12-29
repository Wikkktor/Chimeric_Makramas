import React from "react";
import MakramaCard from "./MakramaCard";

const MakramaList = (props) => {

    const makramas = props.makramas.map((makrama) => {
        return <MakramaCard key={makrama.id} image={makrama} />
    })
    return <div className='ui grid' style={{justifyContent: "center"}}>{makramas}</div>
}

export default MakramaList;