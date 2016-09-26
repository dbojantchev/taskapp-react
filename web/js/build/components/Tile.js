'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NameValue = require('./NameValue');

var _NameValue2 = _interopRequireDefault(_NameValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tile = function (_React$Component) {
    _inherits(Tile, _React$Component);

    function Tile() {
        _classCallCheck(this, Tile);

        return _possibleConstructorReturn(this, (Tile.__proto__ || Object.getPrototypeOf(Tile)).apply(this, arguments));
    }

    _createClass(Tile, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var style1 = {};

            var nameValuesJSX = [];

            var data = this.props.data;

            if (this.props.data) {
                (function () {
                    var data = _this2.props.data;
                    Object.keys(_this2.props.data).forEach(function (key) {
                        nameValuesJSX.push(_react2.default.createElement(_NameValue2.default, { name: key, key: key, value: data[key] }));
                    });
                })();
            }

            return _react2.default.createElement(
                'div',
                { className: 'tile', style: style1 },
                nameValuesJSX
            );
        }
    }]);

    return Tile;
}(_react2.default.Component);

;

exports.default = Tile;