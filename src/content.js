let $ = require("jquery");
let https = require("https");
let ptn = require("parse-torrent-name");

function get_rating_item(result, key, maximum, name) {
  if(result.hasOwnProperty(key)) {
    let rating_string = result[key];
    if(rating_string == "N/A") {
      return "";
    }
    let rating_normalized = parseFloat(rating_string) / maximum;
    let red = parseInt(200. * (1. - rating_normalized));
    let green = parseInt(200. * rating_normalized);
    return "<dt>" + name +
        "</dt><dd class=\"score\" style=\"color: rgb(" + red + ", " + green +
        ", 0)\">" + rating_string + "</dd>";
  }
  return "";
}

function get_list(api_key, obj) {
  let torrent_name = obj.text;
  let parsed = ptn(torrent_name);
  let sanitized_title = encodeURIComponent(parsed.title);
  let omdb_url = "https://www.omdbapi.com/?t=" +
      sanitized_title + "&y=" + parsed.year + "&apikey=" + api_key;
  https.get(omdb_url, function(resp) {
    let data = "";
    resp.on("data", function(chunk) {
      data += chunk;
    });
    resp.on("end", function() {
      result = JSON.parse(data);
      if(result.hasOwnProperty("Error")) {
        return;
      }
      let list = "<dl>";
      // Title, Year, etc.
      ["Title", "Year", "Rated", "Released", "Runtime", "Genre", "Director",
       "Writer", "Actors", "Plot", "Country", "Awards"].forEach(function(key) {
        if(!result.hasOwnProperty(key)) {
          return;
        }
        value = result[key];
        list += "<dt>" + key + "</dt><dd>" + value + "</dd>";
      });
      // Ratings
      list += get_rating_item(result, "imdbRating", 10., "IMDb Rating");
      list += get_rating_item(result, "Metascore", 100., "Metascore");
      // YouTube Trailer
      list += "<dt>Trailer</dt>" +
          "<dd><a target=\"_blank\" href=\"http://www.google.com/search?q=" +
          sanitized_title + "%s+site%3Ayoutube.com&btnI=\">YouTube</a>";
      list += "</dl>";
      $(obj).parent().append(list);
    });
  }).on("error", function(err) {
    console.log("error: " + err.message);
  });
}

chrome.storage.local.get("api_key", function(result) {
  if(result.api_key) {
    // API key found.
    $(".detName a").each(function(index, obj) {
      get_list(result.api_key, obj);
    });
  } else {
    // API key not found.
    let options_url = chrome.extension.getURL("options.html");
    $("body").prepend("<p id=\"omdb_missing\">Oops! I was unable to fetch " +
        "movie information. Have you <a target=\"_blank\" href=\"" +
        options_url + "\">visited the configuration page</a> yet?</p>");
  }
});
