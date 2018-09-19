'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./ResponsiveNav.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ({ navItems, onClick, toggleMenu, menuOpen }) => _react2.default.createElement(
  'div',
  { className: 'nav-container' },
  _react2.default.createElement(
    'div',
    { className: 'desktop-nav' },
    _react2.default.createElement(
      'div',
      { className: 'home-icon' },
      navItems[0]
    ),
    _react2.default.createElement(
      'ul',
      null,
      navItems.slice(1).map(item => _react2.default.createElement(
        'li',
        { onClick: () => onClick(item), key: item },
        item
      ))
    )
  ),
  _react2.default.createElement(
    'div',
    { className: 'mobile-nav' },
    _react2.default.createElement(
      'div',
      { className: 'home-icon' },
      navItems[0]
    ),
    _react2.default.createElement(
      'button',
      { onClick: toggleMenu },
      'Burger'
    ),
    menuOpen ? _react2.default.createElement(
      'ul',
      null,
      navItems.slice(1).map(item => _react2.default.createElement(
        'li',
        { onClick: () => onClick(item), key: item },
        item
      ))
    ) : null
  )
);