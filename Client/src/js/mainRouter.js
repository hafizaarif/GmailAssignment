var React = require('react');
var {render} = require('react-dom');
var{Router,Route,hashHistory}=require('react-router');
var ComposeComponent = require('./Components/ComposeComponent');
var GmailBox = require('./Components/GmailBox');



render((<Router history = {hashHistory}>
  <Route path = "/" component = {GmailBox} >
  <Route path = "/ComposeComponent" component = {ComposeComponent}/>
  </Route>
  </Router>), document.getElementById('app'));
