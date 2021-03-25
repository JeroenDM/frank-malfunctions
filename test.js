const fs = require('fs');


function seeWhatFrankCanDo() {
    const SKILLS_DIR = './skills/';

    let skills = {};

    fs.readdirSync(SKILLS_DIR).forEach(file => {
        console.log(SKILLS_DIR + file);
        skills[file.replace(".js", "")] = require(SKILLS_DIR + file)
    });
    return skills;
}

const skills = seeWhatFrankCanDo();

["story time!", "ping", "bla"].forEach(input => {
    for (const key in skills) {
        if (skills[key].isTriggered({ content: input })) {
            skills[key].run({ content: input, channel: { send: str => console.log(str) } });
        }
    }
});
