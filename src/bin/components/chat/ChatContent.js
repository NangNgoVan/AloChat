var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var ChatContent = function (_React$Component) {
	_inherits(ChatContent, _React$Component);

	function ChatContent(props) {
		_classCallCheck(this, ChatContent);

		var _this = _possibleConstructorReturn(this, (ChatContent.__proto__ || Object.getPrototypeOf(ChatContent)).call(this, props));

		_this.state = { message: '', messages: [{ text: 'xin chào', id: 0, type: 'sent' }, { text: 'Hi!', id: 1, type: 'replies' }] };

		_this.textingMessage = _this.textingMessage.bind(_this);
		_this.handleMessage = _this.handleMessage.bind(_this);
		return _this;
	}

	_createClass(ChatContent, [{
		key: 'textingMessage',
		value: function textingMessage(event) {
			this.setState({ message: event.target.value });
		}
	}, {
		key: 'handleMessage',
		value: function handleMessage(event) {
			switch (event.key) {
				case 'Enter':
					var messages = this.state.messages.slice(0);
					if (this.state.message == '') return;
					// send event.
					messages.push({ text: this.state.message, type: 'replies' });

					this.setState({ message: '',
						messages: messages });
					break;
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ 'class': 'content' },
				React.createElement(
					'div',
					{ 'class': 'contact-profile' },
					React.createElement('img', { src: this.props.currentContact != null ? this.props.currentContact.avatar : '', alt: '' }),
					React.createElement(
						'p',
						null,
						this.props.currentContact != null ? this.props.currentContact.name : ''
					),
					React.createElement(
						'div',
						{ 'class': 'social-media' },
						React.createElement('i', { 'class': 'fa fa-phone', 'aria-hidden': 'true' }),
						React.createElement('i', { 'class': 'fa fa-video-camera', 'aria-hidden': 'true' })
					)
				),
				React.createElement(
					'div',
					{ 'class': 'messages' },
					React.createElement(
						'ul',
						null,
						this.state.messages.map(function (m) {
							return React.createElement(
								'li',
								{ 'class': m.type, key: m.id },
								React.createElement('img', { src: 'http://emilcarlsson.se/assets/mikeross.png', alt: '' }),
								React.createElement(
									'p',
									null,
									m.text
								)
							);
						})
					)
				),
				React.createElement(
					'div',
					{ 'class': 'message-input' },
					React.createElement(
						'div',
						{ 'class': 'wrap' },
						React.createElement('input', { type: 'text', placeholder: 'Nh\u1EADp tin nh\u1EAFn ...',
							value: this.state.message,
							onChange: this.textingMessage,
							onKeyDown: this.handleMessage }),
						React.createElement('i', { 'class': 'fa fa-paperclip attachment', 'aria-hidden': 'true' })
					)
				)
			);
		}
	}]);

	return ChatContent;
}(React.Component);

module.exports = ChatContent;