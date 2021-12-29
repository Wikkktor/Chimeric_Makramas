import React from 'react';

const Available = props => {

    if (props.instock){
        return (
            <span style={{color: 'green'}}>Dostępne</span>
        )
    }else{
        return (
            <span style={{color: 'red'}}>Niedostępne</span>
        )
    }

}


export default Available;