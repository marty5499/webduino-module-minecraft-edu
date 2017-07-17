Blockly.Blocks['weather'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_MINECRAFT_EDU_WEATHER, "控制天氣")
      .appendField(new Blockly.FieldDropdown([
        ["clear", "clear"],
        ["thunder", "thunder"],
        ["rain", "rain"]
      ]), "type")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['timesetbyname'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_MINECRAFT_EDU_TIME, "控制時間")
      .appendField(new Blockly.FieldDropdown([
        ["day", "day"],
        ["night", "night"]
      ]), "type")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};


Blockly.Blocks['agent'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_MINECRAFT_EDU_AGENT, "設定代理人")
      .appendField(new Blockly.FieldDropdown([
        ["transfer", "transfer"]
      ]), "type")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['player'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("玩家資訊")
      .appendField(new Blockly.FieldDropdown([
        ["position", "position"]
      ]), "info")
      .appendField("每");
    this.appendValueInput("every")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput()
      .appendField("豪秒");
    this.appendStatementInput("go")
      .setCheck(null);
    this.setInputsInline(true);
    this.setColour(230);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['player_get_pos'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_MINECRAFT_EDU_POSITION, "取得目前玩家的")
      .appendField(new Blockly.FieldDropdown([
        ['x', "posX"],
        ['y', "posY"],
        ['z', "posZ"]
      ]), "pos");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(35);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['move'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_MINECRAFT_EDU_AGENT, "移動代理人")
      .appendField(new Blockly.FieldDropdown([
        ["forward", "forward"],
        ["left", "left"],
        ["right", "right"],
        ["back", "back"]
      ]), "type");
    this.appendValueInput("step")
      .setCheck(null)
      .appendField("步數：");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};


Blockly.Blocks['turn'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_MINECRAFT_EDU_AGENT, "代理人左右轉")
      .appendField(new Blockly.FieldDropdown([
        ["left", "left"],
        ["right", "right"]
      ]), "type");
    this.appendValueInput("step")
      .setCheck(null)
      .appendField("轉向次數：");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};


Blockly.Blocks['destroy'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_MINECRAFT_EDU_AGENT, "代理人破壞東西")
      .appendField(new Blockly.FieldDropdown([
        ["up", "up"],
        ["down", "down"],
        ["forward", "forward"],
        ["left", "left"],
        ["right", "right"],
        ["back", "back"]
      ]), "type");
    this.appendValueInput("step")
      .setCheck(null)
      .appendField("破壞次數：");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};