// TODO: find some nice APIs to call for random data
const thoughtfulReplies = {
    'How is Frank?': 'Good enough.',
    'ping': 'pong',
    'legen': 'dary',
    'How is Jef?': 'Most likely dead.'
}

module.exports.isTriggered = msg => msg.content in thoughtfulReplies;
module.exports.run = msg => msg.channel.send(thoughtfulReplies[msg.content]);
