const socket = io();

/* loads an api */
function load(name, callback) {
  socket.emit("load", name);
  socket.on("load", done => callback(done));
}

/* uses an api */
function use(name, tasks, callback) {
  socket.emit("use", {name, tasks});
  socket.on("use", data => callback(data));
}

/* unloads an api */
function unload(name, callback) {
  socket.emit("unload", name);
  socket.on("unload", done => callback(done));
}