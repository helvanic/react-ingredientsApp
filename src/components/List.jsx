var React = require('react');
var ListItem = require('./ListItem.jsx');

var List = React.createClass({
  render : function(){
    var createItem = function(name, index){
      return <ListItem key={index+name} name={name}/>
    };
    return (<ul>{this.props.items.map(createItem)}</ul>);
  }
});

module.exports = List;
