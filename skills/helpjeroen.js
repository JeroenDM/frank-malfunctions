function shouldHeBeWorking(data) {
    let hour = data.getHours();  // 0-24
    let weekday = data.getUTCDay(); // 0-6, usa style
    return (hour > 9 && hour < 17 && weekday != 0 && weekday != 6)
}

function shoutAtJeroen(msg) {
    if (shouldHeBeWorking(msg.createdAt)) {
        msg.reply("moet gij niet aan het werken zijn? Hup hup!");
    }
}

module.exports.isTriggered = msg => msg.author.username == "jeroendm";
module.exports.run = shoutAtJeroen;

