import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SocialCard from './components/SocialCard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SocialCard />, document.getElementById('root'));
registerServiceWorker();
