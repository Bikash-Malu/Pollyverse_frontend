import React, { useState } from 'react';
import './drag.css';
import Layout from './Layout';
import Manager from './Manger';

function Drag() {
  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState([]);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const droppedFiles = [...e.dataTransfer.files];
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
  };

  const handleFileInputChange = (e) => {
    const selectedFiles = [...e.target.files];
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  return (
    <Layout className="App">
      <Manager>
     <div className="md:w-[75vw] items-center px-5 py-24 -mt-48 w-[65vw]  "></div>
      <div 
      
        className={`drop-zone ${dragging ? 'dragging' : ''} drag`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <p>Drag & drop files here</p>
        <input
          type="file"
          id="fileInput"
          multiple
          onChange={handleFileInputChange}
        />
        <label htmlFor="fileInput" className=''>or click to browse</label>
      </div>
      {files.length > 0 && (
        <div className="file-list">
          <h2 className='md:text-2xl'>Uploaded Files:</h2>
          <ul>
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
      <div>
        
<form class=" md:mx-[9%] md:w-[90%] sm:w-[80%] bg-transparent lg:w-[85%] w-[80%]  p-4 rounded-xl  hover:shadow-lg transition duration-300 mt-8 " >
    <h1 className='mx-auto text-2xl text-center mb-2'>ADD ASSTES</h1>
  <div class="relative z-0 w-full mb-5 group">
      <input   type="text" name="username" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Model Title</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <textarea  name="email" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required rows={10} style={{resize:'none'}}/>
      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Description</label>
  </div>
  
  <button type="submit" class="  text-white bg-[#8113f0] hover:bg-[#a989c9] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>

</form>
      </div>
      </Manager>
    </Layout>
  );
}

export default Drag;
