(function (document) {
  var handler = function (e) {
    var userInfo = {
      name: e.target.nodeName,
      url: e.target.src
    };
    safari.self.tab.setContextMenuEventUserInfo(event, userInfo)
  };
  window.addEventListener('contextmenu', handler, false);
})(window);
