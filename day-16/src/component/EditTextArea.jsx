import React from 'react';
import { useState } from 'react';

function EditTextArea(props) {
  const handleChange = (event) => {
    setMessage(event.target.value)
  }
  const capitalizeText = () => {
    setMessage(message.toUpperCase())
  }
  const minimizeText = () => {
    setMessage(message.toLowerCase())
  }

  const [message, setMessage] = useState('Write your Message');
  return (
    <div>
      <label htmlFor="message" className="block m-1 text-7xl font-medium text-white ">
        {props.title}
      </label>
      <textarea
        id="message"
        rows="15"
        className="block my-5 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " onChange={handleChange}
        value={message}
      ></textarea>
      <div className="flex flex-wrap space-x-6">
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={capitalizeText}>Capitalize</button>
        <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={minimizeText}>Smallcase</button>
      </div>
    </div>
  );
}

export default EditTextArea;
