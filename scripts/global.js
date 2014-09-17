(function (safari) {
  var CLIENT_ID;
  $.ajax({
    async: false, // To ensure CLIENT_ID
    url: safari.extension.baseURI + 'clientid',
    method: 'GET',
    dataType: 'text',
    success: function (id) {
      CLIENT_ID = id.trim();
    }
  });

  var validateHandler = function (e) {
    if (e.userInfo.name !== 'IMG' && e.target.identifier === 'upload-to-imgur') {
      e.target.disabled = true;
    }
  };
  safari.application.addEventListener('validate', validateHandler, false);

  var commandHandler = function (e) {
    if (e.command === 'upload-to-imgur') {
      $.ajax({
        url: 'https://api.imgur.com/3/image',
        method: 'POST',
        headers: {
          Authorization: 'Client-ID ' + CLIENT_ID,
          Accept: 'application/json'
        },
        data: {
          image: e.userInfo.url,
          type: 'URL'
        },
        success: function (result) {
          var newTab = safari.application.activeBrowserWindow.openTab();
          newTab.url = 'http://i.imgur.com/' + result.data.id + '.png';
        }
      });
    }
  };
  safari.application.addEventListener('command', commandHandler, false);
})(safari);
