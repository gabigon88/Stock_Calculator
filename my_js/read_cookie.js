function readCookie() {
  var user_info = document.cookie.split(';');
  user_info.forEach(function (items) {
    key_value = items.replace(/^\s+|\s+$/g, '').split('=');
    key = key_value[0];
    value = key_value[1];
    document.getElementById(key).value = value;
  });
}

window.onload = function () {
  readCookie();
};