import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import '../StyleSheet/FileUploader.css';
export default function FileUploader({ setInputFile }) {
    const [image, setImage] = useState("");

    const onChangeHandler = (e) => {
        setImage(e.target.files[0]);
        setInputFile(e.target.files[0])
    }
    return (<>


        <div className="file-uploader">
            {image != '' && <Zoom><img src='data:image/jpeg;base64,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' /></Zoom>}

            {image == '' && <input type="file" value="" name="fileup" id="fileup" onChange={onChangeHandler} />}



        </div>
        {image == '' ? <h4>Choose Your Picture</h4> : <h4>Image Selected:{image.name}</h4>}

    </>
    );
}