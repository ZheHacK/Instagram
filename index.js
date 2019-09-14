'use strict'

// Recode by @zhe_pengumbara
// Last modified by ZheAlHaqy (@zhe_pengumbara) on September 14, 2019
// ig : @zhe_pengumbara

const Client = require('instagram-private-api').V1; 
const delay = require('delay');
const chalk = require('chalk');
const inquirer = require('inquirer');
var moment = require("moment"); //DETECT CALENDER
var colors = require('colors'); //DETECT COLORS
var userHome = require('user-home'); //DETECT USER PC/HOME

//DETECT IP *START!
var os = require('os');
var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}
//DETECT IP *END!

const questionTools = [
{
  type:"list",
  name:"Tools",
  message:"Select tools:\n ",
  choices:
  [
  "► Bom Like Target              [USING ITTYW/DELAY]",
  "► Mass Delete Post/Photo       [USING ITTYW/DELAY]",
  "► Unfollow All Following       [USING ITTYW/DELAY]",
  "► Unfollow Not Followback      [USING ITTYW/DELAY]",
  "► Follow Followers Target      [USING ITTYW/DELAY]",
  "\n"
  ] 
}
]
const main = async () => {
  //Last modified by ZheAlhaqy (@zhe_pengumbara) on September 14, 2019
  try{
    var toolChoise = await inquirer.prompt(questionTools);
    toolChoise = toolChoise.Tools;
    switch(toolChoise){

      case "► Bom Like Target              [USING ITTYW/DELAY]":
      const bomliketarget = require('./tools/bomliketarget.js');
      await bomliketarget();
      break;

      case "► Mass Delete Post/Photo       [USING ITTYW/DELAY]":
      const dellallphoto = require('./tools/dellallphoto.js');
      await dellallphoto();
      break;

      case "► Unfollow All Following       [USING ITTYW/DELAY]":
      const unfollall = require('./tools/unfollall.js');
      await unfollall();
      break;

      case "► Unfollow Not Followback      [USING ITTYW/DELAY]":
      const unfollnotfollback = require('./tools/unfollnotfollback.js');
      await unfollnotfollback();
      break;

      case "► Follow Followers Target      [USING ITTYW/DELAY]":
      const fftauto = require('./tools/fftauto.js');
      await fftauto();
      break;

      default:
      console.log("\n ERROR:".red.bold,"Aw, Snap! Something went wrong while displaying this tool!\n".green.bold,"NOT FOUND! Please try again!".yellow.bold);
    }
  } catch(e) {
    }
  }
  //Last modified by Zhe AlHaqy (@zhe_pengumbara) on September 14, 2019

  console.log(chalk`{bold.green
  Ξ TITLE  : INSTAGRAM PRIVATE TOOLS
  Ξ UPLOAD : 29/08/2019 [16.28 WIB]
  Ξ CODEBY : Zhe AlHaqy [Ccocot Ccocot]
  Ξ UPDATE : zhe_pengumbara [@zhe_pengumbara]
  }`);
  console.log(chalk`{bold.red   •••••••••••••••••••••••••••••••••••••••••}`);
  console.log("  Ξ START  : ".bold.red + moment().format('D MMMM YYYY, h:mm:ss a'));
  console.log("  Ξ YPATH  : ".bold.red +userHome);
  console.log("  Ξ YOUIP  : ".bold.red +addresses);
  console.log(chalk`{bold.red   •••••••••••••••••••••••••••••••••••••••••}`);
  console.log(chalk`{bold.yellow
  Ξ THANKS : Instagram Private Tools [Original Source File]
           : Zhe AlHaqy | zhe_pengumbara
           : Muslim Cyber Army}`);
  console.log('\n')
  main();
