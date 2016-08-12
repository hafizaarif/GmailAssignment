var React = require('react');
var ReactDOM = require('react-dom');
var GmailBox=require('./Components/GmailBox');
var NavChildComponent=require('./Components/NavChildComponent');
var {render} = require('react-dom');
var MainComponent = React.createClass({
 render: function(){
   return(
     <div>
     <NavChildComponent/>
     <div className="container-fluid">
     <div className="row">
     <div className="col-md-12">
     <GmailBox />
     </div>
     </div>
     </div>
     </div>
)
 }
})
render(<MainComponent />,document.getElementById('app'));
