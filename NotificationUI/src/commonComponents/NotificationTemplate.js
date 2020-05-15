import React from 'react';
import Zoom from 'react-reveal/Zoom';
import '../StyleSheet/Card.css';

export default function Template({ src, title, onClick, id }) {


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