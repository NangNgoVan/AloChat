var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatView = require('./components/chat/ChatView.js');

var ChatApp = function (_React$Component) {
  _inherits(ChatApp, _React$Component);

  function ChatApp(props) {
    _classCallCheck(this, ChatApp);

    var _this = _possibleConstructorReturn(this, (ChatApp.__proto__ || Object.getPrototypeOf(ChatApp)).call(this, props));

    _this.state = { currentUser: { id: 0, name: 'Ngô Văn Năng', preview: 'Xin chào!', status: 'active', avatar: 'http://emilcarlsson.se/assets/harveyspecter.png' } };
    return _this;
  }

  _createClass(ChatApp, [{
    key: 'render',
    value: function render() {
      return React.createElement(ChatView, { currentUser: this.state.currentUser });
    }
  }]);

  return ChatApp;
}(React.Component);

;

ReactDOM.render(React.createElement(ChatApp, null), document.getElementById('root'));