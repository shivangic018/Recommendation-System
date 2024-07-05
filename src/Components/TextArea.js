import React from 'react';
import '@spectrum-web-components/textfield/sp-textfield.js';
import '@spectrum-web-components/field-label/sp-field-label.js';
import '../css/TextArea.css'; // Import custom CSS

function TextArea() {
  return (
    <div className="custom-textfield">
      <sp-field-label for="story-0-m">Write your Prompt:</sp-field-label>
      <sp-textfield
        id="story-0-m"
        multiline
        placeholder="Enter your life story"
        style={{ width: '900px', minHeight: '170px' }} // Adjust size as needed
      ></sp-textfield>
    </div>
  );
}

export default TextArea;
