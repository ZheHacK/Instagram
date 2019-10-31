'use strict'

// Recode by ZheHacK
// Last modified by ZheHacK (@zhe_pengumbara) on September 14, 2019
// ig : @zhe_pengumbara

const Client = require('instagram-private-api').V1;
const delay = require('delay');
const chalk = require('chalk');
const _ = require('lodash');
const inquirer = require('inquirer');

const User = [
{
  type:'input',
  name:'username',
  message:'Insert Username:',
  validate: function(value){
    if(!value) return 'Can\'t Empty';
    return true;
  }
},
{
  type:'password',
  name:'password',
  message:'Insert Password:',
  mask:'*',
  validate: function(value){
    if(!value) return 'Can\'t Empty';
    return true;
  }
},
{
  type:'input',
  name:'ittyw',
  message:'Masukkan Total Target yang Anda Inginkan (ITTYW):',
  validate: function(value){
    value = value.match(/[0-9]/);
    if (value) return true;
    return 'Use Number Only!';
  }
},
{
  type:'input',
  name:'sleep',
  message:'Masukkan Istirahat (Dalam milidetik):',
  validate: function(value){
    value = value.match(/[0-9]/);
    if (value) return true;
    return 'Delay is number';
  }
}
]

const Login = async function(User){

  const Device = new Client.Device(User.username);
  const Storage = new Client.CookieMemoryStorage();
  const session = new Client.Session(Device, Storage);

  try {
    await Client.Session.create(Device, Storage, User.username, User.password)
    const account = await session.getAccount();
    return Promise.resolve({session,account});
  } catch (err) {
    return Promise.reject(err);
  }

}

const Unfollow = async function(session, accountId){
  try {
    await Client.Relationship.destroy(session, accountId);
    return chalk`{bold.green Success}`;
  } catch (err){
    return chalk`{bold.red Failed}`;
  }
}

const Excute = async function(User,sleep,ittyw){

  try {
    console.log(chalk`{yellow \n? Mencoba Masuk . . .}`);
    const doLogin = await Login(User);
    console.log(chalk`{green ✓ Login Succsess. }{yellow ? Mencoba Mendapatkan Data Mengikuti . . .}`);
    const feed = new Client.Feed.AccountFollowing(doLogin.session, doLogin.account.id);
	console.log(chalk`{green ✓ Succsess. }{yellow ? Mencoba untuk Berhenti Mengikuti Semua Mengikuti . . .\n}`);
    var cursor;
	console.log(chalk`{yellow ≡ SIAP UNTUK MULAI UNFOLLALL DILAKUKAN DENGAN RASIO ${ittyw} TARGET/${sleep} MiliSeconds\n}`);
    do{
      if (cursor) feed.setCursor(cursor);
      var getPollowers = await feed.get();
      getPollowers = _.chunk(getPollowers, ittyw);
      for (let i = 0; i < getPollowers.length; i++) {
        var timeNow = new Date();
        timeNow = `${timeNow.getHours()}:${timeNow.getMinutes()}:${timeNow.getSeconds()}`
        await Promise.all(getPollowers[i].map(async(account) => {
          const doUnfollow = await Unfollow(doLogin.session, account.id);
          console.log(chalk`{magenta ⌭ ${timeNow}}: @${account.params.username} ➾ Unfollow: ${doUnfollow}`);
        }));
		console.log(chalk`{yellow \nϟ Current Account: {bold.green ${User.username}} » Delay: ${ittyw}/${sleep}ms\n}`);
        await delay(sleep);
      }
      cursor = await feed.getCursor();
    } while(feed.isMoreAvailable())
    console.log(chalk`{yellow ✓ Unfollow All Following Succeeded » Status: All Done » Time: ${timeNow} \n}`);
  } catch(e) {
    console.log(e)
  }
}
console.log(chalk`{bold.cyan
  Ξ TITLE  : MASS UNFOLLALL IG [Set Sleep]
  Ξ CODE   : ZheHacK (Zhealhaqy)
  Ξ STATUS : {bold.green [+ITTWY]} & {bold.yellow [TESTED]}}
      `);
inquirer.prompt(User)
.then(answers => {
  Excute({
    username:answers.username,
    password:answers.password
  },answers.sleep,answers.ittyw);
});
