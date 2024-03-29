var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var ContactSearchForm = function (_React$Component) {
	_inherits(ContactSearchForm, _React$Component);

	function ContactSearchForm() {
		_classCallCheck(this, ContactSearchForm);

		return _possibleConstructorReturn(this, (ContactSearchForm.__proto__ || Object.getPrototypeOf(ContactSearchForm)).apply(this, arguments));
	}

	_createClass(ContactSearchForm, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ id: "search" },
				React.createElement(
					"label",
					{ "for": "" },
					React.createElement("i", { "class": "fa fa-search", "aria-hidden": "true" })
				),
				React.createElement("input", { type: "text", placeholder: "T\xECm ki\u1EBFm li\xEAn h\u1EC7..." })
			);
		}
	}]);

	return ContactSearchForm;
}(React.Component);

module.exports = ContactSearchForm;