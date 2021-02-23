"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App"));

var _router = _interopRequireDefault(require("./router"));

var _elementUi = _interopRequireDefault(require("element-ui"));

require("element-ui/lib/theme-chalk/index.css");

require("@/assets/css/reset.css");

require("@/assets/css/main.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import store from '@/package/store'
_vue["default"].use(_elementUi["default"]);

_vue["default"].config.productionTip = false;
/* eslint-disable no-new */

new _vue["default"]({
  el: '#app',
  mode: history,
  router: _router["default"],
  // store,
  components: {
    App: _App["default"]
  },
  template: '<App/>'
});