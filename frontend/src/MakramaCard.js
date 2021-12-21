import './App.css';
import React from 'react';


class MakramaCard extends React.Component {
    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
    }

    render() {

        const {description, photo, price, title} = this.props.image
        return (
                <div className="ui special cards">
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
                            <a className="header">{title}</a>
                            <div className="meta">
                                <span className="date">{description}</span>
                            </div>
                        </div>
                        <div className="extra content">
                            <a>
                                <i className="money icon"></i>
                                {price} zł
                            </a>
                        </div>
                    </div>
                </div>
        );
    }
}

export default MakramaCard;
