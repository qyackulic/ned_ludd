var today = new Date();
var hourNow = today.getHours();
var title;

if (hourNow > 18) {
    title = 'NED!';
} else if (hourNow > 12) {
    title = 'LUDD!';
} else if (hourNow > 0) {
    title = 'LUDDITE!';
} else {
    title = 'NED LUDD!';
}

document.write(`<h3>${title}</h3>`);