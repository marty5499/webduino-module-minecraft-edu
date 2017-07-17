Blockly.JavaScript['weather'] = function (block) {
  var dropdown_type_ = block.getFieldValue('type');
  var code = 'getMinecraftEdu().command("weather","' + dropdown_type_ + '");\n';
  return code;
};

Blockly.JavaScript['timesetbyname'] = function (block) {
  var dropdown_type_ = block.getFieldValue('type');
  var code = 'getMinecraftEdu().command("timesetbyname","' + dropdown_type_ + '");\n';
  return code;
};


Blockly.JavaScript['agent'] = function (block) {
  var dropdown_type_ = block.getFieldValue('type');
  var code = 'getMinecraftEdu().command("agent","' + dropdown_type_ + '");\n';
  return code;
};

Blockly.JavaScript['player'] = function (block) {
  var dropdown_info = block.getFieldValue('info');
  var value_every = Blockly.JavaScript.valueToCode(block, 'every', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_info = block.getFieldValue('info');
  var code = 'getMinecraftEdu().command("player",{' +
    '"info":"' + dropdown_info +
    '","readTime":' + value_every + '},\n  function(x,y,z){\n  });\n';
  return code;
};


Blockly.JavaScript['move'] = function (block) {
  var dropdown_type_ = block.getFieldValue('type');
  var value = Blockly.JavaScript.valueToCode(block, 'step', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'getMinecraftEdu().command("move",{' +
    '"direction":"' + dropdown_type_ +
    '","step":' + value + '});\n';
  return code;
};

Blockly.JavaScript['turn'] = function (block) {
  var dropdown_type_ = block.getFieldValue('type');
  var value = Blockly.JavaScript.valueToCode(block, 'step', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'getMinecraftEdu().command("turn",{' +
    '"direction":"' + dropdown_type_ +
    '","step":' + value + '});\n';
  return code;
};

Blockly.JavaScript['destroy'] = function (block) {
  var dropdown_type_ = block.getFieldValue('type');
  var value = Blockly.JavaScript.valueToCode(block, 'step', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'getMinecraftEdu().command("destroy",{' +
    '"direction":"' + dropdown_type_ +
    '","step":' + value + '});\n';
  return code;
};