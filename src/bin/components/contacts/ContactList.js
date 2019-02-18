var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var ContactList = function (_React$Component) {
  _inherits(ContactList, _React$Component);

  function ContactList(props) {
    _classCallCheck(this, ContactList);

    var _this = _possibleConstructorReturn(this, (ContactList.__proto__ || Object.getPrototypeOf(ContactList)).call(this, props));

    _this.state = {
      contacts: [{ name: 'Ngô Văn Năng', preview: 'Xin chào!', status: 'active', avatar: '' }, { name: 'Nguyễn Văn A', preview: 'Ai?', status: 'busy', avtar: '' }]
    };

    _this.filterContact = _this.filterContact.bind(_this);
    return _this;
  }

  _createClass(ContactList, [{
    key: 'filterContact',
    value: function filterContact(event) {
      this.setState({
        contacts: this.state.contacts.filter(function (e) {
          return e.name.includes(event.target.value);
        })
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { id: 'sidepanel' },
        React.createElement(
          'div',
          { id: 'profile' },
          React.createElement(
            'div',
            { 'class': 'wrap' },
            React.createElement('img', { id: 'profile-img', src: 'http://emilcarlsson.se/assets/mikeross.png', 'class': 'online', alt: '' }),
            React.createElement(
              'p',
              null,
              'Mike Ross'
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
            this.state.contacts.map(function (contact, i) {
              return React.createElement(
                'li',
                { 'class': 'contact active', key: i },
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
              'Add contact'
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
              'Settings'
            )
          )
        )
      );
    }
  }]);

  return ContactList;
}(React.Component);

module.exports = ContactList;