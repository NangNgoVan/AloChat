var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var ChatContent = function (_React$Component) {
  _inherits(ChatContent, _React$Component);

  function ChatContent() {
    _classCallCheck(this, ChatContent);

    return _possibleConstructorReturn(this, (ChatContent.__proto__ || Object.getPrototypeOf(ChatContent)).apply(this, arguments));
  }

  _createClass(ChatContent, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { "class": "content" },
        React.createElement(
          "div",
          { "class": "contact-profile" },
          React.createElement("img", { src: "http://emilcarlsson.se/assets/harveyspecter.png", alt: "" }),
          React.createElement(
            "p",
            null,
            "Harvey Specter"
          ),
          React.createElement(
            "div",
            { "class": "social-media" },
            React.createElement("i", { "class": "fa fa-facebook", "aria-hidden": "true" }),
            React.createElement("i", { "class": "fa fa-twitter", "aria-hidden": "true" }),
            React.createElement("i", { "class": "fa fa-instagram", "aria-hidden": "true" })
          )
        ),
        React.createElement(
          "div",
          { "class": "messages" },
          React.createElement(
            "ul",
            null,
            React.createElement(
              "li",
              { "class": "sent" },
              React.createElement("img", { src: "http://emilcarlsson.se/assets/mikeross.png", alt: "" }),
              React.createElement(
                "p",
                null,
                "How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!"
              )
            ),
            React.createElement(
              "li",
              { "class": "replies" },
              React.createElement("img", { src: "http://emilcarlsson.se/assets/harveyspecter.png", alt: "" }),
              React.createElement(
                "p",
                null,
                "When you're backed against the wall, break the god damn thing down."
              )
            ),
            React.createElement(
              "li",
              { "class": "replies" },
              React.createElement("img", { src: "http://emilcarlsson.se/assets/harveyspecter.png", alt: "" }),
              React.createElement(
                "p",
                null,
                "Excuses don't win championships."
              )
            ),
            React.createElement(
              "li",
              { "class": "sent" },
              React.createElement("img", { src: "http://emilcarlsson.se/assets/mikeross.png", alt: "" }),
              React.createElement(
                "p",
                null,
                "Oh yeah, did Michael Jordan tell you that?"
              )
            ),
            React.createElement(
              "li",
              { "class": "replies" },
              React.createElement("img", { src: "http://emilcarlsson.se/assets/harveyspecter.png", alt: "" }),
              React.createElement(
                "p",
                null,
                "No, I told him that."
              )
            ),
            React.createElement(
              "li",
              { "class": "replies" },
              React.createElement("img", { src: "http://emilcarlsson.se/assets/harveyspecter.png", alt: "" }),
              React.createElement(
                "p",
                null,
                "What are your choices when someone puts a gun to your head?"
              )
            ),
            React.createElement(
              "li",
              { "class": "sent" },
              React.createElement("img", { src: "http://emilcarlsson.se/assets/mikeross.png", alt: "" }),
              React.createElement(
                "p",
                null,
                "What are you talking about? You do what they say or they shoot you."
              )
            ),
            React.createElement(
              "li",
              { "class": "replies" },
              React.createElement("img", { src: "http://emilcarlsson.se/assets/harveyspecter.png", alt: "" }),
              React.createElement(
                "p",
                null,
                "Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things."
              )
            )
          )
        ),
        React.createElement(
          "div",
          { "class": "message-input" },
          React.createElement(
            "div",
            { "class": "wrap" },
            React.createElement("input", { type: "text", placeholder: "Write your message..." }),
            React.createElement("i", { "class": "fa fa-paperclip attachment", "aria-hidden": "true" }),
            React.createElement(
              "button",
              { "class": "submit" },
              React.createElement("i", { "class": "fa fa-paper-plane", "aria-hidden": "true" })
            )
          )
        )
      );
    }
  }]);

  return ChatContent;
}(React.Component);

module.exports = ChatContent;