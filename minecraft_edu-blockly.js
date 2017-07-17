+(function (window, webduino) {

  'use strict';

  window.getMinecraftEdu = function () {
    return new webduino.module.minecraft_edu();
  };

}(window, window.webduino));
