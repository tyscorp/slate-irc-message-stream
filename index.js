var parseMessage = require("irc-message").parseMessage;
var through = require("through");
var lstream = require("lstream");

module.exports = function slateMessageStream () {
    var lineStream = new lstream();

    var stream = through(function (data) {
        lineStream.write(data);
    }, function () {
        lineStream = null;
    });

    lineStream.on("data", function (line) {
        var message = parseMessage(line);

        if (message === null) {
            var error = new Error("Invalid line read: " + line);
            return stream.emit("error", error);
        }

        // convert to slate-irc's parser format
        message.string = message.toString();
        message.trailing = message.params.pop();
        message.params = message.params.join(' ');

        stream.emit("message", message);
    });

    return stream;
};
