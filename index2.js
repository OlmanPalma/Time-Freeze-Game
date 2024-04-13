//player 1

let count = 0

document.getElementById("btn1").onclick = function () {
    count++;
    document.getElementById("score1").innerHTML = count;
}

document.getElementById("btn5").onclick = function () {
    count = count + 5;
    document.getElementById("score1").innerHTML = count;
}

document.getElementById("erase1").onclick = function () {
    count = 0;
    document.getElementById("score1").innerHTML = count;
}

//player2
let count2 = 0

document.getElementById("btn2-1").onclick = function () {
    count2++;
    document.getElementById("score2").innerHTML = count2;
}

document.getElementById("btn2-5").onclick = function () {
    count2 = count2 + 5;
    document.getElementById("score2").innerHTML = count2;
}

document.getElementById("erase2").onclick = function () {
    count2 = 0;
    document.getElementById("score2").innerHTML = count2;
}