// make the .env file with secrets work locally
require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN);

client.on('ready', wreckHavoc);
client.on('message', msg => doNotSpam(msg, iToldYouSo));

function wreckHavoc() {
    console.log('It\'s ready!');
}

// Frank only wants to talk in a single channel because of his social anxiety 
function doNotSpam(msg, spamming) {
    if (msg.channel.id == process.env.CHANNELID) {
        spamming(msg);
    }
}

function iToldYouSo(msg) {
    // You can never log enough
    let str = msg.content;
    console.log(str);

    // Look how Frank keeps the conversation going
    if (str in thoughtfulReplies) {
        msg.channel.send(thoughtfulReplies[str]);
    }

    // or inserts obnoxious quotes from old books
    else if (str == "story time!") {
        const index = Math.floor(Math.random() * quotes.length);
        msg.channel.send(quotes[index]);
    }

    // call secret message server
}

// TODO: find some nice APIs to call for random data
const thoughtfulReplies = {
    'How is Frank?': 'Good enough.',
    'ping': 'pong',
}

// https://wiki.c2.com/?DouglasAdamsQuotes
const quotes = [
    "The story so far: In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.",
    "I love deadlines. I like the whooshing sound they make as they fly by.",
    "Human beings, who are almost unique in having the ability to learn from the experience of others, are also remarkable for their apparent disinclination to do so.",
    "Life... Don't talk to me about life.",
    "It must be a Thursday. I never could get the hang of Thursdays.",
    "It hung in the air in exactly the way that bricks don't."
]
