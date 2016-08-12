var React=require("react");
var SentRowComponent =require('./SentRowComponent');
var SentComponent = React.createClass({
 render: function() {
     that=this;
     var rows=[];
     console.log(this.props.sentMessages);
     this.props.sentMessages.forEach(function(msg) {
     var msgSubject,msgFrom,mgsDate;

     for(var headerIndex=0; headerIndex <msg.payload.headers.length;headerIndex++)
     {
       console.log("ghgjhsggxjhgsxhjsgxhjgsxhjgshjxgshgxjhghs");
       if(msg.payload.headers[headerIndex].name=='Subject'){
         msgSubject=msg.payload.headers[headerIndex].value;
       }
       if(msg.payload.headers[headerIndex].name=='To'){
         msgFrom=msg.payload.headers[headerIndex].value;
         var fields= msgFrom.split(/</);
         msgFrom=fields[0];
       }
       if(msg.payload.headers[headerIndex].name=='Date'){
        mgsDate =msg.payload.headers[headerIndex].value;
       }

     }


    rows.push(   <SentRowComponent msgSubject={msgSubject}  msgFrom={msgFrom}   mgsDate={mgsDate} key= {msg.id} />);


   });
    return (

    <table className="table table-inbox table-hover">
      <thead>
        <tr>
          
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>

    );
 }

});
module.exports=SentComponent;
