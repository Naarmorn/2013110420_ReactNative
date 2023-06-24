const SITE_NAME = "Information Technology";
const BASEE_URL = "http://it.tni.ac.th";
const COLOR_THEME = "blue";
const ALLOW_SIGNUP = true;

console.log("welcome to " + SITE_NAME);

let languages = ["JavaScript", "Python", "Ruby", "Java", "PHP"];
for(let i in languages){
    let url = BASEE_URL + "lang/" + languages[i].toLowerCase();
    console.log(`-${languages[i]} programming (${url})`);
}

console.log("Footer");

let footer = ["About", "Privacy"];
for(let i in footer){
    let url = BASEE_URL + ' ' + footer[i].toLowerCase();
    console.log(`-${footer[i]} programming (${url})`);
}

if (ALLOW_SIGNUP){
    console.log("[Sign up  for new settle]");
}

console.log(`© ${new Date().getFullYear()} ${SITE_NAME}`);