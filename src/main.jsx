// This is the main entry point for the application
// Here we'll call for other components

var React = require('react');
var ReactDOM = require('react-dom');

var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(
  <div>
    <ListManager title="Ingredients"/>
    <ListManager title="Sport"/>
    <ListManager title="Groceries"/>
    <ListManager title="Hobbies"/>
  </div>,
  document.getElementById('gallery')
);
