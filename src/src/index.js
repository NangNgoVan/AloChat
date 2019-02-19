var ChatView = require('./components/chat/ChatView.js');

class ChatApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {currentUser: {id: 0, name:'Ngô Văn Năng', preview:'Xin chào!', status:'active', avatar:'http://emilcarlsson.se/assets/harveyspecter.png'}}
  }
  render() {
    return (
      <ChatView currentUser={this.state.currentUser}/>
    )
  }
};

ReactDOM.render(
  <ChatApp />,
  document.getElementById('root')
);