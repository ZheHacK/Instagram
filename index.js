﻿'use strict'

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
  //Last modified by ZheHacK (@zhe_pengumbara) on September 14, 2019
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
  //Last modified by ZheHacK(@zhe_pengumbara) on September 14, 2019

  console.log(chalk`{bold.green
  Ξ TITLE  : INSTAGRAM PRIVATE TOOLS
  Ξ UPLOAD : 29/08/2019 [16.28 WIB]
  Ξ CODEBY : ZheHacK [Zhe1007]
  Ξ Instagram : @zhe_pengumbara
  }`);
  console.log(chalk`{bold.blue   •••••••••••••••••••••••••••••••••••••••••}`);
  console.log("  Ξ START  : ".bold.blue + moment().format('D MMMM YYYY, h:mm:ss a').bold.red);
  console.log("  Ξ YPATH  : ".bold.blue +userHome .bold.red);
  console.log("  Ξ YOUIP  : ".bold.blue +addresses);
  console.log(chalk`{bold.blue   •••••••••••••••••••••••••••••••••••••••••}`);
  console.log(chalk`{bold.yellow
  Ξ THANKS : Instagram Private Tools [Original Source File]
           : Muslim Cyber Army}`);
console.log(chalk`
  {bold.cyan
 _____           _       ___           _
|_   _|__   ___ | |___  |_ _|_ __  ___| |_ __ _
  | |/ _ \ / _ \| / __|  | || '_ \/ __| __/ _` |
  | | (_) | (_) | \__ \  | || | | \__ \ || (_| |
  |_|\___/ \___/|_|___/ |___|_| |_|___/\__\__,_|

  main();
  
