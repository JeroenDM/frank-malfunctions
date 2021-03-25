# Frank, your friendly neighbourhood discord bot

## Contributing

Add new skills to the skills directory. All files in this directory are automatically added as skills in the main file `frank.js`. The skill file should export two methods:

- `bool isTriggered(message)`: this function is called for all [messages](https://discord.js.org/#/docs/main/stable/class/Message) that are send in the channel where the bot is active. Based on the message you decide whether the `run` function of this skill should be called.
- `void run(message)`: If the previous one returned true, this function will be called and you can do stuff with the message.

As far as I can tell, there is not really a good reason to split this interface into two methods, but I did it anyway. As a simple example, the skill below, `skills/smalltalk.js` responds with hard coded replies to specific messages.
```js
// TODO: find some nice APIs to call for random data
const thoughtfulReplies = {
    'How is Frank?': 'Good enough.',
    'ping': 'pong',
    'legen': 'dary'
}

module.exports.isTriggered = msg => msg.content in thoughtfulReplies;
module.exports.run = msg => msg.channel.send(thoughtfulReplies[msg.content]);
```
