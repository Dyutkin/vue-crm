export default {
  install(Vue, options) {
    console.log(options);
    Vue.prototype.$message = function (text) {
      window.M.toast({ html: text });
    };

    Vue.prototype.$error = function (err) {
      window.M.toast({ html: `Error! - ${err}` });
    };
  },
};
