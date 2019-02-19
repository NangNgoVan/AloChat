var React = require('react');
var ChatContent = require('./ChatContent.js');

class ChatView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [
        {id: 0, name:'Ngô Văn Năng', preview:'Xin chào!', status:'active', avatar:'http://emilcarlsson.se/assets/harveyspecter.png'},
        {id: 1, name: 'Nguyễn Văn A', preview: 'Ai?', status: 'busy', avatar:'http://emilcarlsson.se/assets/mikeross.png'}
      ],
      filters: [],
      currentContact:null,
      currentUser:props.currentUser
    };

    this.filterContact = this.filterContact.bind(this);
    this.loadChatContent = this.loadChatContent.bind(this);
  }

  componentDidMount() {
    this.setState({filters: this.state.contacts,
      currentContact: this.state.contacts[0]});
  }

  filterContact(event) {
    this.setState({
      filters: this.state.contacts.filter(e => 
        e.name.toLowerCase().includes(event.target.value.toLowerCase()))
    })
  }

  loadChatContent(contact) {
    this.setState({currentContact: contact});
  }

  render() {
    var currentContact = this.state.currentContact;
    var currentUser = this.state.currentUser;
    return(
      <div id="frame">
        <div id="sidepanel">
          <div id="profile">
            <div class="wrap">
              <img id="profile-img" src={this.props.currentUser.avatar} class="online" alt="" />
              <p>{this.props.currentUser.name}</p>
              <i class="fa fa-chevron-down expand-button" aria-hidden="true"></i>
              <div id="status-options">
                <ul>
                  <li id="status-online" class="active"><span class="status-circle"></span> <p>Online</p></li>
                  <li id="status-away"><span class="status-circle"></span> <p>Away</p></li>
                  <li id="status-busy"><span class="status-circle"></span> <p>Busy</p></li>
                  <li id="status-offline"><span class="status-circle"></span> <p>Offline</p></li>
                </ul>
              </div>
              <div id="expanded">
                <label for="twitter"><i class="fa fa-facebook fa-fw" aria-hidden="true"></i></label>
                <input name="twitter" type="text" value="mikeross" />
                <label for="twitter"><i class="fa fa-twitter fa-fw" aria-hidden="true"></i></label>
                <input name="twitter" type="text" value="ross81" />
                <label for="twitter"><i class="fa fa-instagram fa-fw" aria-hidden="true"></i></label>
                <input name="twitter" type="text" value="mike.ross" />
              </div>
            </div>
          </div>
          <div id="search">
            <label for=""><i class="fa fa-search" aria-hidden="true"></i></label>
            <input type="text" placeholder="Tìm kiếm liên hệ..." onChange={this.filterContact}/>
          </div>
          <div id="contacts">
            <ul>
              {
                this.state.filters.map((contact) =>
                  <li class={(contact.id == this.state.currentContact.id)?"contact active" : "contact"}
                    key={contact.id} onClick={() => this.loadChatContent(contact)}>
                    <div class="wrap">
                      <span class="contact-status busy"></span>
                      <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                      <div class="meta">
                        <p class="name">{contact.name}</p>
                        <p class="preview">{contact.preview}</p>
                      </div>
                    </div>
                  </li>
                )
              }
            </ul>
          </div>
          <div id="bottom-bar">
            <button id="addcontact"><i class="fa fa-user-plus fa-fw" aria-hidden="true"></i> <span>Thêm liên hệ</span></button>
            <button id="settings"><i class="fa fa-cog fa-fw" aria-hidden="true"></i> <span>Cài đặt</span></button>
          </div>
        </div>
        <ChatContent currentContact={this.state.currentContact}/>
      </div>
    )
  }
}


module.exports = ChatView;
