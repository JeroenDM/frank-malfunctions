// https://wiki.c2.com/?DouglasAdamsQuotes
const quotes = [
    "The story so far: In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.",
    "I love deadlines. I like the whooshing sound they make as they fly by.",
    "Human beings, who are almost unique in having the ability to learn from the experience of others, are also remarkable for their apparent disinclination to do so.",
    "Life... Don't talk to me about life.",
    "It must be a Thursday. I never could get the hang of Thursdays.",
    "It hung in the air in exactly the way that bricks don't.",
    "Time is an illusion -- lunchtime doubly so.",
    "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.",
    "The Hollywood process is like trying to grill a steak by having a succession of people coming into the room and breathing on it.",
    "Here's a warm welcome to all the intelligent life forms out there. And to the rest of you... the trick is to bang the rocks together, guys."
]

module.exports.isTriggered = msg => msg.content == "Story time!";

module.exports.run = function (msg) {
    const index = Math.floor(Math.random() * quotes.length);
    msg.channel.send(quotes[index]);
};
