import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import { setup } from 'twind'

setup({
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans'],
      cursive: ['La Belle Aurore', 'cursive'],
    },
  },
});

ReactDOM.render(
 <React.StrictMode>
   <App />
 </React.StrictMode>,
 document.getElementById('root'),
);

if (import.meta.hot) {
  import.meta.hot.accept();
}