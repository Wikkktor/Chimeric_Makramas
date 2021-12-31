import React from "react";
import restapi from "./api/restapi";
import MakramaListAvailable from "./components/MakramaListAvailable";
import MakramaList from "./components/MakramaList";

class App extends React.Component {
    state = {
        makramas: []
    }
    componentDidMount = async (term) => {
        const response = await restapi.get('/makrama-list',{
            params: {query: term}
        });
    this.setState({makramas: response.data});
    }

    render() {
        switch (window.location.pathname){
            case '/':
                return (
                    <div>
                        <div className='ui container'>
                            <MakramaListAvailable makramas={this.state.makramas} />
                        </div>
                    </div>
                )
            case '/portfolio/':
                return (
                    <div>
                        <div className='ui container'>
                            <MakramaList makramas={this.state.makramas} />
                        </div>
                    </div>
                )
        }
    }
}

export default App;