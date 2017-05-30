# slate-irc-message-stream

[![Greenkeeper badge](https://badges.greenkeeper.io/tyscorp/slate-irc-message-stream.svg)](https://greenkeeper.io/)
> A tiny Stream interface for [irc-message](https://github.com/expr/irc-message) that converts it to work with [slate-irc](https://github.com/slate/slate-irc).

## Installation

`npm install slate-irc-message-stream`

## Usage

```JavaScript
var irc = require('slate-irc');
var SlateMessageStream = require('slate-irc-message-stream');
var net = require('net');

var stream = net.connect({
  port: 6667,
  host: 'irc.freenode.org'
});

var messageStream = new SlateMessageStream();

var client = irc(stream, messageStream);
```