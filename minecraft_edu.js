+(function (factory) {
  if (typeof exports === 'undefined') {
    factory(webduino || {});
  } else {
    module.exports = factory;
  }
}(function (scope) {
  'use strict';

  var Module = scope.Module,
    BoardEvent = scope.BoardEvent,
    proto;
  var agentServer = 'http://127.0.0.1:8080/';


  function minecraft_edu() {
    Module.call(this);
    this._type = 'minecraft_edu';
  }

  minecraft_edu.prototype = proto = Object.create(Module.prototype, {
    constructor: {
      value: minecraft_edu
    }
  });


  proto.ajax = function (cmd, callback) {
    console.log("ajax:", cmd);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        if (callback != null) {
          callback(xmlHttp.responseText);
        }
      }
    }
    xmlHttp.open("GET", cmd, true); // true for asynchronous 
    xmlHttp.send(null);
  }

  proto.move = function (data, callback) {
    this.moveStep(agentServer + 'move?direction=' + data.direction, data.step);
  }

  proto.turn = function (data, callback) {
    this.moveStep(agentServer + 'turn?direction=' + data.direction, data.step);
  }

  proto.destroy = function (data, callback) {
    this.moveStep(agentServer + 'destroy?direction=' + data.direction, data.step);
  }

  proto.moveStep = function (cmd, step) {
    if (step-- == 0) return;
    var it = this;
    this.ajax(cmd, function () {
      it.moveStep(cmd, step);
    });
  }

  proto.agent = function (action, callback) {
    var cmd = agentServer;
    if (action == 'transfer') {
      cmd = cmd + 'tptoplayer';
    }
    console.log("agent cmd:", cmd);
    this.ajax(cmd);
  }

  proto.weather = function (action, callback) {
    this.ajax(agentServer + 'weather?type=' + action);
  }

  proto.timesetbyname = function (action, callback) {
    this.ajax(agentServer + 'timesetbyname?time=' + action);
  }

  proto.player = function (data, callback) {
    var self = this;
    if (data.info == "position") {
      setInterval(function () {
        self.ajax(agentServer + 'callback', function (pos) {
          pos = JSON.parse(pos);
          if (Object.keys(pos).length === 0) return;
          var p = pos.PlayerTravelled.measurements;
          self.posX = PosAvgX;
          self.posY = PosAvgY;
          self.posZ = PosAvgZ;
          console.log("playPos:", p.PosAvgX, p.PosAvgY, p.PosAvgZ);
          callback(self.posX, self.posY, self.posZ);
        });
      }, data.readTime);
    }
  };

  proto.command = function (cmd, data, callback) {
    var self = this;
    console.log("minecraft action:", cmd, data);
    self[cmd](data, callback);
  };

  scope.module.minecraft_edu = minecraft_edu;
}));