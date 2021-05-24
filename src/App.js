import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import Modal from './comps/Modal'

function App() {

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadForm></UploadForm>
      <ImageGrid setSelectedImg={setSelectedImg}/>
      { selectedImg && <Modal setSelectedImg={setSelectedImg} selectedImg={selectedImg}/>}
    </div>
  );
}

export default App;
