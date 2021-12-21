import React from "react";
import restapi from "./api/restapi";
import MakramaList from "./MakramaList";


class App extends React.Component {
    state = {
        makramas: []
    }
    componentDidMount = async (term) => {
        const response = await restapi.get('/makrama-list',{
            params: {query: term}
        });
    this.setState({makramas: response.data});
    console.log(this.state.makramas)
    }

    render() {
        return (
            <div className='ui container'>
                <MakramaList makramas={this.state.makramas} />
            </div>
        )
    }
}

export default App;