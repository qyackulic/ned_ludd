var today = new Date();
var hourNow = today.getHours();
var title;
console.log(hourNow)
if (hourNow > 18) {
    title = 'NED!';
} else if (hourNow > 12) {
    title = 'LUDD!';
} else if (hourNow > 0) {
    title = 'LUDDITE!';
} else {
    title = 'NED LUDD!';
}

document.write(`<h1>${title}</h1>`);

function HaveYou() {
    var text;
    var user = prompt ("Do You Know What A Luddite Is?", "Answer Here");
        switch (user) { 
            case "Yes":
                text = "The Internet is suprised.  Please enjoy the website."; 
                break;
            case "No":
                text = "That's fairly common.  Please enjoy the website!";
                break;
            default:
                text = "You're at the right place, then!"
        }
        document.getElementById("demo").innerHTML = text
        }

HaveYou();

function whichImg() {
    var item;
    var user = prompt ("Placard or Ned?", "Answer Here");
        swith (user) {
            case "Placard":
                item = "<img src="poster.jpg">";
                break;
            case "Ned":
                item = "<img src="Ned_Ludd.jpg">";
                break;
            default:
                item = "<img src="factory_workers.jpg">";
        }
        document.getElementById("image").innerHTML=item
    }