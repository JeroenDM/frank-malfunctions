
function pocketCalculator(str) {
    return eval(str)
}

function doesItLookOk(str) {
    return /^[\d\+\-\.\*\/\s%()]+$/.test(str);
}

module.exports.isTriggered = msg => doesItLookOk(msg.content);
module.exports.run = msg => msg.channel.send(pocketCalculator(msg.content));
