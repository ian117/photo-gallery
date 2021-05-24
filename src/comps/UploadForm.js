import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const imageRegex = /image\/(png)?(jpeg)?/;
    // const types = ['image/png', 'image/jpeg']

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        // types.includes(selected.type)
        if (selected && imageRegex.test(selected.type)) {
            setFile(selected)
            setError(null)
        } else {
            setFile(null)
            setError("File must be jpeg | png")
        }
    }
    
    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler} />
                <span>+</span>
            </label>
            <div className="output">
                { error && <div className="error">{error}</div>}
                { file && <div className="fileName">{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
    )
}

export default UploadForm;