var $ = require("jquery");

chrome.storage.local.get("api_key", function(result) {
  if(result.api_key) {
    $("#api_key").val(result.api_key);
  }
});

$("#api_key").change(function() {
  chrome.storage.local.set({"api_key": $("#api_key").val()}, function() {});
});
