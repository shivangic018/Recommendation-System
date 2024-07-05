import React from 'react';
import '@spectrum-web-components/button/sp-button.js';
import '../css/Button.css'; // Import custom CSS for button styling

function Button() {
  return (
    <sp-button
      href="https://github.com/adobe/spectrum-web-components"
      target="_blank"
      variant="cta" // Use Spectrum variant for styling
    >
      Generate
    </sp-button>
  );
}

export default Button;
