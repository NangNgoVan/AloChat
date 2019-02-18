var ContactList = require('./components/contacts/ContactList.js');
var ChatContent = require('./components/chat_content/ChatContent.js');

class ChatApp extends React.Component {
  render() {
    return (
      <div id="frame">
        <ContactList />
        <ChatContent />
      </div>
    )
  }
};

ReactDOM.render(
  <ChatApp />,
  document.getElementById('root')
);