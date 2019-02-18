var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var ContactList = function (_React$Component2) {
  _inherits(ContactList, _React$Component2);

  function ContactList() {
    _classCallCheck(this, ContactList);

    return _possibleConstructorReturn(this, (ContactList.__proto__ || Object.getPrototypeOf(ContactList)).apply(this, arguments));
  }

  _createClass(ContactList, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "sidepanel" },
        React.createElement(
          "div",
          { id: "profile" },
          React.createElement(
            "div",
            { "class": "wrap" },
            React.createElement("img", { id: "profile-img", src: "http://emilcarlsson.se/assets/mikeross.png", "class": "online", alt: "" }),
            React.createElement(
              "p",
              null,
              "Mike Ross"
            ),
            React.createElement("i", { "class": "fa fa-chevron-down expand-button", "aria-hidden": "true" }),
            React.createElement(
              "div",
              { id: "status-options" },
              React.createElement(
                "ul",
                null,
                React.createElement(
                  "li",
                  { id: "status-online", "class": "active" },
                  React.createElement("span", { "class": "status-circle" }),
                  " ",
                  React.createElement(
                    "p",
                    null,
                    "Online"
                  )
                ),
                React.createElement(
                  "li",
                  { id: "status-away" },
                  React.createElement("span", { "class": "status-circle" }),
                  " ",
                  React.createElement(
                    "p",
                    null,
                    "Away"
                  )
                ),
                React.createElement(
                  "li",
                  { id: "status-busy" },
                  React.createElement("span", { "class": "status-circle" }),
                  " ",
                  React.createElement(
                    "p",
                    null,
                    "Busy"
                  )
                ),
                React.createElement(
                  "li",
                  { id: "status-offline" },
                  React.createElement("span", { "class": "status-circle" }),
                  " ",
                  React.createElement(
                    "p",
                    null,
                    "Offline"
                  )
                )
              )
            ),
            React.createElement(
              "div",
              { id: "expanded" },
              React.createElement(
                "label",
                { "for": "twitter" },
                React.createElement("i", { "class": "fa fa-facebook fa-fw", "aria-hidden": "true" })
              ),
              React.createElement("input", { name: "twitter", type: "text", value: "mikeross" }),
              React.createElement(
                "label",
                { "for": "twitter" },
                React.createElement("i", { "class": "fa fa-twitter fa-fw", "aria-hidden": "true" })
              ),
              React.createElement("input", { name: "twitter", type: "text", value: "ross81" }),
              React.createElement(
                "label",
                { "for": "twitter" },
                React.createElement("i", { "class": "fa fa-instagram fa-fw", "aria-hidden": "true" })
              ),
              React.createElement("input", { name: "twitter", type: "text", value: "mike.ross" })
            )
          )
        ),
        React.createElement(
          "div",
          { id: "search" },
          React.createElement(
            "label",
            { "for": "" },
            React.createElement("i", { "class": "fa fa-search", "aria-hidden": "true" })
          ),
          React.createElement("input", { type: "text", placeholder: "Search contacts..." })
        ),
        React.createElement(
          "div",
          { id: "contacts" },
          React.createElement(
            "ul",
            null,
            React.createElement(
              "li",
              { "class": "contact" },
              React.createElement(
                "div",
                { "class": "wrap" },
                React.createElement("span", { "class": "contact-status online" }),
                React.createElement("img", { src: "http://emilcarlsson.se/assets/louislitt.png", alt: "" }),
                React.createElement(
                  "div",
                  { "class": "meta" },
                  React.createElement(
                    "p",
                    { "class": "name" },
                    "Louis Litt"
                  ),
                  React.createElement(
                    "p",
                    { "class": "preview" },
                    "You just got LITT up, Mike."
                  )
                )
              )
            ),
            React.createElement(
              "li",
              { "class": "contact active" },
              React.createElement(
                "div",
                { "class": "wrap" },
                React.createElement("span", { "class": "contact-status busy" }),
                React.createElement("img", { src: "http://emilcarlsson.se/assets/harveyspecter.png", alt: "" }),
                React.createElement(
                  "div",
                  { "class": "meta" },
                  React.createElement(
                    "p",
                    { "class": "name" },
                    "Harvey Specter"
                  ),
                  React.createElement(
                    "p",
                    { "class": "preview" },
                    "Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things."
                  )
                )
              )
            ),
            React.createElement(
              "li",
              { "class": "contact" },
              React.createElement(
                "div",
                { "class": "wrap" },
                React.createElement("span", { "class": "contact-status away" }),
                React.createElement("img", { src: "http://emilcarlsson.se/assets/rachelzane.png", alt: "" }),
                React.createElement(
                  "div",
                  { "class": "meta" },
                  React.createElement(
                    "p",
                    { "class": "name" },
                    "Rachel Zane"
                  ),
                  React.createElement(
                    "p",
                    { "class": "preview" },
                    "I was thinking that we could have chicken tonight, sounds good?"
                  )
                )
              )
            ),
            React.createElement(
              "li",
              { "class": "contact" },
              React.createElement(
                "div",
                { "class": "wrap" },
                React.createElement("span", { "class": "contact-status online" }),
                React.createElement("img", { src: "http://emilcarlsson.se/assets/donnapaulsen.png", alt: "" }),
                React.createElement(
                  "div",
                  { "class": "meta" },
                  React.createElement(
                    "p",
                    { "class": "name" },
                    "Donna Paulsen"
                  ),
                  React.createElement(
                    "p",
                    { "class": "preview" },
                    "Mike, I know everything! I'm Donna.."
                  )
                )
              )
            ),
            React.createElement(
              "li",
              { "class": "contact" },
              React.createElement(
                "div",
                { "class": "wrap" },
                React.createElement("span", { "class": "contact-status busy" }),
                React.createElement("img", { src: "http://emilcarlsson.se/assets/jessicapearson.png", alt: "" }),
                React.createElement(
                  "div",
                  { "class": "meta" },
                  React.createElement(
                    "p",
                    { "class": "name" },
                    "Jessica Pearson"
                  ),
                  React.createElement(
                    "p",
                    { "class": "preview" },
                    "Have you finished the draft on the Hinsenburg deal?"
                  )
                )
              )
            ),
            React.createElement(
              "li",
              { "class": "contact" },
              React.createElement(
                "div",
                { "class": "wrap" },
                React.createElement("span", { "class": "contact-status" }),
                React.createElement("img", { src: "http://emilcarlsson.se/assets/haroldgunderson.png", alt: "" }),
                React.createElement(
                  "div",
                  { "class": "meta" },
                  React.createElement(
                    "p",
                    { "class": "name" },
                    "Harold Gunderson"
                  ),
                  React.createElement(
                    "p",
                    { "class": "preview" },
                    "Thanks Mike! :)"
                  )
                )
              )
            ),
            React.createElement(
              "li",
              { "class": "contact" },
              React.createElement(
                "div",
                { "class": "wrap" },
                React.createElement("span", { "class": "contact-status" }),
                React.createElement("img", { src: "http://emilcarlsson.se/assets/danielhardman.png", alt: "" }),
                React.createElement(
                  "div",
                  { "class": "meta" },
                  React.createElement(
                    "p",
                    { "class": "name" },
                    "Daniel Hardman"
                  ),
                  React.createElement(
                    "p",
                    { "class": "preview" },
                    "We'll meet again, Mike. Tell Jessica I said 'Hi'."
                  )
                )
              )
            ),
            React.createElement(
              "li",
              { "class": "contact" },
              React.createElement(
                "div",
                { "class": "wrap" },
                React.createElement("span", { "class": "contact-status busy" }),
                React.createElement("img", { src: "http://emilcarlsson.se/assets/katrinabennett.png", alt: "" }),
                React.createElement(
                  "div",
                  { "class": "meta" },
                  React.createElement(
                    "p",
                    { "class": "name" },
                    "Katrina Bennett"
                  ),
                  React.createElement(
                    "p",
                    { "class": "preview" },
                    "I've sent you the files for the Garrett trial."
                  )
                )
              )
            ),
            React.createElement(
              "li",
              { "class": "contact" },
              React.createElement(
                "div",
                { "class": "wrap" },
                React.createElement("span", { "class": "contact-status" }),
                React.createElement("img", { src: "http://emilcarlsson.se/assets/charlesforstman.png", alt: "" }),
                React.createElement(
                  "div",
                  { "class": "meta" },
                  React.createElement(
                    "p",
                    { "class": "name" },
                    "Charles Forstman"
                  ),
                  React.createElement(
                    "p",
                    { "class": "preview" },
                    "Mike, this isn't over."
                  )
                )
              )
            ),
            React.createElement(
              "li",
              { "class": "contact" },
              React.createElement(
                "div",
                { "class": "wrap" },
                React.createElement("span", { "class": "contact-status" }),
                React.createElement("img", { src: "http://emilcarlsson.se/assets/jonathansidwell.png", alt: "" }),
                React.createElement(
                  "div",
                  { "class": "meta" },
                  React.createElement(
                    "p",
                    { "class": "name" },
                    "Jonathan Sidwell"
                  ),
                  React.createElement(
                    "p",
                    { "class": "preview" },
                    React.createElement(
                      "span",
                      null,
                      "You:"
                    ),
                    " That's bullshit. This deal is solid."
                  )
                )
              )
            )
          )
        ),
        React.createElement(
          "div",
          { id: "bottom-bar" },
          React.createElement(
            "button",
            { id: "addcontact" },
            React.createElement("i", { "class": "fa fa-user-plus fa-fw", "aria-hidden": "true" }),
            " ",
            React.createElement(
              "span",
              null,
              "Add contact"
            )
          ),
          React.createElement(
            "button",
            { id: "settings" },
            React.createElement("i", { "class": "fa fa-cog fa-fw", "aria-hidden": "true" }),
            " ",
            React.createElement(
              "span",
              null,
              "Settings"
            )
          )
        )
      );
    }
  }]);

  return ContactList;
}(React.Component);

var ChatApp = function (_React$Component3) {
  _inherits(ChatApp, _React$Component3);

  function ChatApp() {
    _classCallCheck(this, ChatApp);

    return _possibleConstructorReturn(this, (ChatApp.__proto__ || Object.getPrototypeOf(ChatApp)).apply(this, arguments));
  }

  _createClass(ChatApp, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "frame" },
        React.createElement(ContactList, null),
        React.createElement(ChatContent, null)
      );
    }
  }]);

  return ChatApp;
}(React.Component);

;

ReactDOM.render(React.createElement(ChatApp, null), document.getElementById('root'));