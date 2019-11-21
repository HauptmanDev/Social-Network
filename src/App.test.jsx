import React from 'react';
import ReactDOM from 'react-dom';
import SocJSApp from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SocJSApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
