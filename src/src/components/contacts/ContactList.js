var React = require('react');

class ContactList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [
        {name:'Ngô Văn Năng', preview:'Xin chào!', status:'active', avatar:''},
        {name: 'Nguyễn Văn A', preview: 'Ai?', status: 'busy', avtar:''}
      ]
    };

    this.filterContact = this.filterContact.bind(this);
  }
  filterContact(event) {
    this.setState({
      contacts: this.state.contacts.filter(e => e.name.includes(event.target.value))
    })
  }
  render() {
    return(
      <div id="sidepanel">
          <div id="profile">
            <div class="wrap">
              <img id="profile-img" src="http://emilcarlsson.se/assets/mikeross.png" class="online" alt="" />
              <p>Mike Ross</p>
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
                this.state.contacts.map((contact, i) =>
                  <li class="contact active" key={i}>
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
            <button id="addcontact"><i class="fa fa-user-plus fa-fw" aria-hidden="true"></i> <span>Add contact</span></button>
            <button id="settings"><i class="fa fa-cog fa-fw" aria-hidden="true"></i> <span>Settings</span></button>
          </div>
      </div>
    )
  }
}


module.exports = ContactList;
