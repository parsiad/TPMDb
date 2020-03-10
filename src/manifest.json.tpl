{
  "name": "<%- name %>",
  "version": "<%- version %>",
  "description": "<%- description %>",
  "manifest_version": 2,
  "options_page": "options.html",
  "web_accessible_resources": ["options.html"],
  "permissions": ["storage"],
  "content_scripts": [{
    "matches": ["https://*/*"],
    "run_at": "document_idle",
    "js": ["content.js"],
    "css": ["content.min.css"]
  }]
}
