import React from 'react';
import Zoom from 'react-reveal/Zoom';
import '../StyleSheet/Card.css';

export default function Template({ src, title, onClick, id, description, isNotification }) {

    if (isNotification) {
        return (
            <Zoom>

                <div className="templateContainer" onClick={e => onClick(id)}>
                    <img src={src} height="600px" width='325px' />
                    <div className="templateFooter">
                        <h4>{title}</h4>

                    </div>
                    <div className="template-description">

                        <h6>{description}</h6>

                    </div>
                </div>

            </Zoom >
        );
    }
    else {
        return (
            <Zoom>

                <div className="templateContainer" onClick={e => onClick(id)}>
                    <img src={src} />
                    <div className="templateFooter">
                        <h4>{title}</h4>

                    </div>
                </div>

            </Zoom >
        );
    }
}