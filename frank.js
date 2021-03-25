// make the .env file with secrets work locally
require('dotenv').config()

/*******************************************
 * Some casual IO action
 * *****************************************/
const fs = require('fs');

// a global variable to pretend I can't write clean code
const skills = seeWhatFrankCanDo();

/*******************************************
 * Setup discord bot
 * *****************************************/
const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN);
client.on('ready', wreckHavoc);
client.on('message', msg => doNotSpam(msg, nudgeFrank));

/*******************************************
 * Definition after usage, because we can.
 * *****************************************/
function seeWhatFrankCanDo() {
    const SKILLS_DIR = './skills/';

    let skills = {};

    fs.readdirSync(SKILLS_DIR).forEach(file => {
        skills[file.replace(".js", "")] = require(SKILLS_DIR + file)
    });
    return skills;
}

function wreckHavoc() {
    console.log('It\'s ready!');
}

// Frank only wants to talk in a single channel because of his social anxiety 
function doNotSpam(msg, spamming) {
    if (msg.channel.id == process.env.CHANNELID) {
        spamming(msg);
    }
}

function nudgeFrank(msg) {
    for (const key in skills) {
        if (skills[key].isTriggered(msg)) {
            skills[key].run(msg);
        }
    }
}
