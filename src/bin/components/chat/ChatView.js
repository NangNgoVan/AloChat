var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ChatContent = require('./ChatContent.js');

var ChatView = function (_React$Component) {
  _inherits(ChatView, _React$Component);

  function ChatView(props) {
    _classCallCheck(this, ChatView);

    var _this = _possibleConstructorReturn(this, (ChatView.__proto__ || Object.getPrototypeOf(ChatView)).call(this, props));

    _this.state = {
      contacts: [{ id: 0, name: 'Ngô Văn Năng', preview: 'Xin chào!', status: 'active', avatar: 'http://emilcarlsson.se/assets/harveyspecter.png' }, { id: 1, name: 'Nguyễn Văn A', preview: 'Ai?', status: 'busy', avatar: 'http://emilcarlsson.se/assets/mikeross.png' }],
      filters: [],
      currentContact: null,
      currentUser: props.currentUser
    };

    _this.filterContact = _this.filterContact.bind(_this);
    _this.loadChatContent = _this.loadChatContent.bind(_this);
    return _this;
  }

  _createClass(ChatView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ filters: this.state.contacts,
        currentContact: this.state.contacts[0] });
    }
  }, {
    key: 'filterContact',
    value: function filterContact(event) {
      this.setState({
        filters: this.state.contacts.filter(function (e) {
          return e.name.toLowerCase().includes(event.target.value.toLowerCase());
        })
      });
    }
  }, {
    key: 'loadChatContent',
    value: function loadChatContent(contact) {
      this.setState({ currentContact: contact });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var currentContact = this.state.currentContact;
      var currentUser = this.state.currentUser;
      return React.createElement(
        'div',
        { id: 'frame' },
        React.createElement(
          'div',
          { id: 'sidepanel' },
          React.createElement(
            'div',
            { id: 'profile' },
            React.createElement(
              'div',
              { 'class': 'wrap' },
              React.createElement('img', { id: 'profile-img', src: this.props.currentUser.avatar, 'class': 'online', alt: '' }),
              React.createElement(
                'p',
                null,
                this.props.currentUser.name
              ),
              React.createElement('i', { 'class': 'fa fa-chevron-down expand-button', 'aria-hidden': 'true' }),
              React.createElement(
                'div',
                { id: 'status-options' },
                React.createElement(
                  'ul',
                  null,
                  React.createElement(
                    'li',
                    { id: 'status-online', 'class': 'active' },
                    React.createElement('span', { 'class': 'status-circle' }),
                    ' ',
                    React.createElement(
                      'p',
                      null,
                      'Online'
                    )
                  ),
                  React.createElement(
                    'li',
                    { id: 'status-away' },
                    React.createElement('span', { 'class': 'status-circle' }),
                    ' ',
                    React.createElement(
                      'p',
                      null,
                      'Away'
                    )
                  ),
                  React.createElement(
                    'li',
                    { id: 'status-busy' },
                    React.createElement('span', { 'class': 'status-circle' }),
                    ' ',
                    React.createElement(
                      'p',
                      null,
                      'Busy'
                    )
                  ),
                  React.createElement(
                    'li',
                    { id: 'status-offline' },
                    React.createElement('span', { 'class': 'status-circle' }),
                    ' ',
                    React.createElement(
                      'p',
                      null,
                      'Offline'
                    )
                  )
                )
              ),
              React.createElement(
                'div',
                { id: 'expanded' },
                React.createElement(
                  'label',
                  { 'for': 'twitter' },
                  React.createElement('i', { 'class': 'fa fa-facebook fa-fw', 'aria-hidden': 'true' })
                ),
                React.createElement('input', { name: 'twitter', type: 'text', value: 'mikeross' }),
                React.createElement(
                  'label',
                  { 'for': 'twitter' },
                  React.createElement('i', { 'class': 'fa fa-twitter fa-fw', 'aria-hidden': 'true' })
                ),
                React.createElement('input', { name: 'twitter', type: 'text', value: 'ross81' }),
                React.createElement(
                  'label',
                  { 'for': 'twitter' },
                  React.createElement('i', { 'class': 'fa fa-instagram fa-fw', 'aria-hidden': 'true' })
                ),
                React.createElement('input', { name: 'twitter', type: 'text', value: 'mike.ross' })
              )
            )
          ),
          React.createElement(
            'div',
            { id: 'search' },
            React.createElement(
              'label',
              { 'for': '' },
              React.createElement('i', { 'class': 'fa fa-search', 'aria-hidden': 'true' })
            ),
            React.createElement('input', { type: 'text', placeholder: 'T\xECm ki\u1EBFm li\xEAn h\u1EC7...', onChange: this.filterContact })
          ),
          React.createElement(
            'div',
            { id: 'contacts' },
            React.createElement(
              'ul',
              null,
              this.state.filters.map(function (contact) {
                return React.createElement(
                  'li',
                  { 'class': contact.id == _this2.state.currentContact.id ? "contact active" : "contact",
                    key: contact.id, onClick: function onClick() {
                      return _this2.loadChatContent(contact);
                    } },
                  React.createElement(
                    'div',
                    { 'class': 'wrap' },
                    React.createElement('span', { 'class': 'contact-status busy' }),
                    React.createElement('img', { src: 'http://emilcarlsson.se/assets/harveyspecter.png', alt: '' }),
                    React.createElement(
                      'div',
                      { 'class': 'meta' },
                      React.createElement(
                        'p',
                        { 'class': 'name' },
                        contact.name
                      ),
                      React.createElement(
                        'p',
                        { 'class': 'preview' },
                        contact.preview
                      )
                    )
                  )
                );
              })
            )
          ),
          React.createElement(
            'div',
            { id: 'bottom-bar' },
            React.createElement(
              'button',
              { id: 'addcontact' },
              React.createElement('i', { 'class': 'fa fa-user-plus fa-fw', 'aria-hidden': 'true' }),
              ' ',
              React.createElement(
                'span',
                null,
                'Th\xEAm li\xEAn h\u1EC7'
              )
            ),
            React.createElement(
              'button',
              { id: 'settings' },
              React.createElement('i', { 'class': 'fa fa-cog fa-fw', 'aria-hidden': 'true' }),
              ' ',
              React.createElement(
                'span',
                null,
                'C\xE0i \u0111\u1EB7t'
              )
            )
          )
        ),
        React.createElement(ChatContent, { currentContact: this.state.currentContact })
      );
    }
  }]);

  return ChatView;
}(React.Component);

module.exports = ChatView;