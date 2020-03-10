<!DOCTYPE html>
<html>
  <head>
    <title><%- name %> Configuration</title>
    <!-- TODO: Make stylesheets local to the extension. //-->
    <link href="https://getbootstrap.com/docs/4.0/dist/css/bootstrap.min.css"
          rel="stylesheet">
    <link href="https://getbootstrap.com/docs/4.0/examples/floating-labels/floating-labels.css"
          rel="stylesheet">
  </head>
  <body>
    <div class="container">
      <div class="row">
        <form class="form-signin">
          <div class="text-center mb-4">
            <h1 class="h3 mb-3 font-weight-normal"><%- name %> Configuration</h1>
            <p>
              To use <%- name %>, you need to obtain an API key from
              <a target="_blank" href="http://www.omdbapi.com/">OMDb</a>
              and enter it below.
            </p>
          </div>
          <div class="form-label-group">
            <input type="text" id="api_key" class="form-control"
                   placeholder="API Key" required autofocus>
            <label for="api_key">OMDb API Key</label>
          </div>
        </form>
      </div>
      <div class="row">
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" class="form-signin">
          <div class="text-center mb-4">
            <input type="hidden" name="cmd" value="_donations" />
            <input type="hidden" name="business" value="parsiad.azimzadeh@gmail.com" />
            <input type="hidden" name="currency_code" value="USD" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </div>
        </form>
      </div>
    </div>
  </body>
  <script src="options.min.js"></script>
</html>
