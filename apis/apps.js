const {existsSync, readdirSync} = require("fs");

module.exports = function(__rootdir) {
  this.apps = [];

  this.reloadApps = function() {
    readdirSync(`${__rootdir}/apps`).forEach(name => {
      let path = `${__rootdir}/apps/${name}`;

      if(!existsSync(`${path}/properties.json`)) return;
      
      let app = require(`${path}/properties.json`);

      if(!app.main) app.main = "index.html";
			if(!app.name) app.name = "Unknown App";
      if(!app.author) app.author = "Unknown Author";
      if(!app.icon) app.icon = undefined;
      else app.icon = `${__rootdir}/${app.icon}`;

      app.path = path;

      this.apps.push(app);
    });
  };
  reloadApps();

  return this;
}