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

function NedLudd(ned, ludd){
    var total = ned + ludd;
    console.log(total);
    return total;
}

var Luddite = NedLudd('ned','ludd');

console.log(Luddite);


// function whichImg() {
//     var oneofthree = [
//     '<img src="Ned.jpg">',
//     '<img src="Sign.jpg">',
//     '<img src="worker.jpg">',
//     ];
//     var displayImg = '';
//     var imagenum = 0;
//     do {
//         imagenum = prompt("Enter a number 1 to 3 for a different image");
//     } while (imagenum>0|| imagenum<4|| !Number.isIntiger(+imagenum));
//     for (i=0; i<imagenum;i++){
//         displayImg += (i+1)+'...'+ oneofthree[i]+"<br>";
//         }
//         document.getElementById("whichimage").innerHTML=displayImg;
//         document.getElementById("imagenum").innerHTML=imageNum ;
//     }
