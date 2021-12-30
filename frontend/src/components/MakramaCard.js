import './App.css';
import React from 'react';
import Available from './Available';


class MakramaCard extends React.Component {
    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
    }

    render() {

        const {description, photo, price, title, available} = this.props.image
        return (
                    <div className="card">
                        <div className="blurring dimmable image">
                            <div className="ui dimmer">
                                <div className="content">
                                    <div className="center">
                                        <div className="ui inverted button">Szczegóły</div>
                                    </div>
                                </div>
                            </div>
                            <img ref={this.imageRef} src={photo} alt={title}/>
                        </div>
                        <div className="content">
                            <a className="header" href='#' style={{textAlign: 'center', marginBottom: '2px'}}>{title}</a>
                            <div className="meta">
                                <span className="date" style={{color: '#343a40'}}>{description}</span>
                            </div>
                        </div>
                        <div className="extra content" style={{display: 'flex', justifyContent: 'space-around'}}>
                            <a>
                                <i className="money icon"></i>
                                {price} zł
                            </a>
                            <Available instock={available}/>
                        </div>
                    </div>
        );
    }
}

export default MakramaCard;
