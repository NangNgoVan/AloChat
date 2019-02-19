var React = require('react');

class ChatContent extends React.Component {
	constructor(props){
		super(props);
		this.state = {message:'', messages:[
			{text:'xin chào', id:0, type:'sent'},
			{text:'Hi!',id:1, type:'replies'}
		]}

		this.textingMessage = this.textingMessage.bind(this);
		this.handleMessage = this.handleMessage.bind(this);
	}

	textingMessage(event) {
		this.setState({message: event.target.value});
	}

	handleMessage(event) {
		switch(event.key){
			case 'Enter':
				var messages = this.state.messages.slice(0);
				if (this.state.message == '') return;
				// send event.
				messages.push({text:this.state.message, type:'replies'});

				this.setState({message: '', 
					messages: messages});
				break;
		}
	}

	render() {
	  return(
	  	<div class="content">
          <div class="contact-profile">
            <img src={this.props.currentContact != null ? this.props.currentContact.avatar : ''} alt="" />
            <p>{this.props.currentContact != null ? this.props.currentContact.name : ''}</p>
            <div class="social-media">
              <i class="fa fa-facebook" aria-hidden="true"></i>
              <i class="fa fa-twitter" aria-hidden="true"></i>
               <i class="fa fa-instagram" aria-hidden="true"></i>
            </div>
          </div>
          <div class="messages">
            <ul>
              {
          		this.state.messages.map(m => 
          		  <li class={m.type} key={m.id}>
	                <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
	                <p>{m.text}</p>
	              </li>
          		)
          	  }
            </ul>
          </div>
          <div class="message-input">
            <div class="wrap">
            <input type="text" placeholder="Nhập tin nhắn ..." 
            	value={this.state.message}
            	onChange={this.textingMessage} 
            	onKeyDown={this.handleMessage}/>
            <i class="fa fa-paperclip attachment" aria-hidden="true"></i>
            <button class="submit"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
	)
	}
}

module.exports = ChatContent;