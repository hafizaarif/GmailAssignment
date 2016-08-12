var React=require("react");
var GmailLeft1 = React.createClass({
  render: function(){
    return(
    <tr>
    <td>
    <a href ="#">
    {this.props.labelData.name}
    </a>
    </td>
    </tr>
);
}
});
module.exports=GmailLeft1;
