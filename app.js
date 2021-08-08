//get form id /////
var form = document.getElementById("form")

///GET USER NAMES///
var player1 = document.getElementById("player1")
var player2 = document.getElementById("player2")


/////TOss boxx get start ///
var tossBox = document.getElementsByClassName("tossBox")



////appBOX tic tac Box//////
var appBox = document.getElementsByClassName("appBox")
// console.log(appBox[0])

///GET ALL THE TD ELEMNTS////
var td = document.getElementsByTagName("td")

// console.log(td)

////GET X USER BUTTON///
var xUserBtn = document.getElementById("xUserBtn")

///GET Y USER BUTTON////
var OUserBtn = document.getElementById("OUserBtn")


//////GET RESULT OPTION IN JS////

///Result box
var resultBox = document.getElementsByClassName("resultBox")

////WInner Name////
var winChange = document.getElementById("winChange");
///winningHEading//
var winningHeading = document.getElementById("winningHeading")






function xUSer(e) {

    e.style.backgroundImage = "linear-gradient(to right , #871dff ,#0498a6)"
	e.style.color = "white"
    OUserBtn.style.background = "grey"

    for (var i = 0; i < td.length; i++) {
        td[i].setAttribute("onclick", "tickX(this)")
    }
    for (var i = 0; i < td.length; i++) {
        td[i].style.pointerEvents = "visible";

    }
}

// xUSer(xUserBtn)


function OUSer(e) {

    e.style.backgroundImage = "linear-gradient(to right , #871dff ,#0498a6)"
	e.style.color = "white"
	xUserBtn.style.background = "grey"


    for (var i = 0; i < td.length; i++) {
        td[i].setAttribute("onclick", "tickO(this)")
    }

    for (var i = 0; i < td.length; i++) {
        td[i].style.pointerEvents = "visible";

    }

}



////by default function call  AND Toss start///

function matchToss() {
    // alert("hello ")
    var tossHeading = document.getElementById("tossHeading");
    var toss = Math.floor(Math.random() * 2 + 1)
    console.log(Math.floor(toss))
    if (toss === 1) {
        tossHeading.innerHTML = "Player 'X' Wins the Toss..."
        xUSer(xUserBtn);

    }
    else if (toss === 2) {
        tossHeading.innerHTML = "Player 'O' Wins the Toss..."
        // alert("OHK so 1st Turn is Player 'O' ")
        OUSer(OUserBtn)
    }

}

function tossHide() {
    appBox[0].classList.remove("hide")
    tossHeading.classList.add("hide")

    // change game button name
    xUserBtn.innerHTML = player1.value + `<p></p> X users`
    OUserBtn.innerHTML = player2.value + `<p></p> O users`

}

function tossStart() {
    form.classList.add("hide")
    tossBox[0].classList.remove("hide")
    setTimeout(tossHide, 5000)
    setTimeout(matchToss, 3000)
}




////by default function call  AND Toss end///

function tickX(e) {

    e.innerHTML = "X"
    e.style.color = "white"
    e.className += " tdDisable"

    var xWin = false



    ///DISABLED ALL TD ONE TIME SELECT START////
    for (var i = 0; i < td.length; i++) {
        td[i].style.pointerEvents = "none";

    }

    ///DISABLED ALL TD ONE TIME SELECT END////


    ////////MATCH WIN OR MATCH DRAW CONDITION START////////

    if (td[0].innerHTML == "X" && td[1].innerHTML == "X" && td[2].innerHTML == "X") {
        alert("x wins")
        xWin = true
    }
    else if (td[3].innerHTML == "X" && td[4].innerHTML == "X" && td[5].innerHTML == "X") {
        alert("x wins")
        xWin = true
    }
    else if (td[6].innerHTML == "X" && td[7].innerHTML == "X" && td[8].innerHTML == "X") {
        alert("x wins")
        xWin = true
    }
    else if (td[0].innerHTML == "X" && td[3].innerHTML == "X" && td[6].innerHTML == "X") {
        alert("x wins")
        xWin = true
    }
    else if (td[1].innerHTML == "X" && td[4].innerHTML == "X" && td[7].innerHTML == "X") {
        alert("x wins")
        xWin = true
    }
    else if (td[2].innerHTML == "X" && td[5].innerHTML == "X" && td[8].innerHTML == "X") {
        alert("x wins")
        xWin = true
    }
    else if (td[0].innerHTML == "X" && td[4].innerHTML == "X" && td[8].innerHTML == "X") {
        alert("x wins")
        xWin = true
    }
    else if (td[2].innerHTML == "X" && td[4].innerHTML == "X" && td[6].innerHTML == "X") {
        alert("x wins")
        xWin = true
    }

    if ((td[0].innerHTML != "" && td[1].innerHTML != "" && td[2].innerHTML != "") && (td[3].innerHTML != "" && td[4].innerHTML != "" && td[5].innerHTML != "") && (td[6].innerHTML != "" && td[7].innerHTML != "" && td[8].innerHTML != "")) {
        appBox[0].classList.add("hide")
        resultBox[0].classList.remove("hide")
        winChange.innerHTML = "X O"
        winningHeading.innerHTML = "MATCH DRAW!"

    }
    ////////MATCH WIN OR MATCH DRAW CONDITION END////////



    ///Function OUser() call START////
    OUSer(OUserBtn);
    ///Function OUser() call END////

    ///SHOW RESULT BOX////
    if (xWin == true) {
        appBox[0].classList.add("hide")
        resultBox[0].classList.remove("hide")
        winChange.innerHTML = "X"
    }


}

function tickO(e) {
    e.innerHTML = "O"
    e.style.color = "red"
    e.className += " tdDisable"

    var oWin = false
    ////ONE TIME SELECT OTHERWISE OR TD DISABLED START////
    for (var i = 0; i < td.length; i++) {
        td[i].style.pointerEvents = "none";

    }
    ////ONE TIME SELECT OTHERWISE OR TD DISABLED END////


    ////////MATCH WIN OR MATCH DRAW CONDITION START////////

    if (td[0].innerHTML == "O" && td[1].innerHTML == "O" && td[2].innerHTML == "O") {
        alert("O wins")
        oWin = true
    }
    else if (td[3].innerHTML == "O" && td[4].innerHTML == "O" && td[5].innerHTML == "O") {
        alert("O wins")
        oWin = true
    }
    else if (td[6].innerHTML == "O" && td[7].innerHTML == "O" && td[8].innerHTML == "O") {
        alert("O wins")
        oWin = true
    }
    else if (td[0].innerHTML == "O" && td[3].innerHTML == "O" && td[6].innerHTML == "O") {
        alert("O wins")
        oWin = true
    }
    else if (td[1].innerHTML == "O" && td[4].innerHTML == "O" && td[7].innerHTML == "O") {
        alert("O wins")
        oWin = true
    }
    else if (td[2].innerHTML == "O" && td[5].innerHTML == "O" && td[8].innerHTML == "O") {
        alert("O wins")
        oWin = true
    }
    else if (td[0].innerHTML == "O" && td[4].innerHTML == "O" && td[8].innerHTML == "O") {
        alert("O wins")
        oWin = true
    }
    else if (td[2].innerHTML == "O" && td[4].innerHTML == "O" && td[6].innerHTML == "O") {
        alert("O wins")
        oWin = true
    }


    if ((td[0].innerHTML != "" && td[1].innerHTML != "" && td[2].innerHTML != "") && (td[3].innerHTML != "" && td[4].innerHTML != "" && td[5].innerHTML != "") && (td[6].innerHTML != "" && td[7].innerHTML != "" && td[8].innerHTML != "")) {
        appBox[0].classList.add("hide")
        resultBox[0].classList.remove("hide")
        winChange.innerHTML = "X O"
        winningHeading.innerHTML = "MATCH DRAW!"
    }
    ////////MATCH WIN OR MATCH DRAW CONDITION END////////




    ///function XUser call //
    xUSer(xUserBtn)
    ///////////

    
    ///SHOW RESULT BOX////
    if (oWin == true) {
        appBox[0].classList.add("hide")
        resultBox[0].classList.remove("hide")
        winChange.innerHTML = "O"
    }
    ////////
}

