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
  </body>
  <script src="options.min.js"></script>
</html>
