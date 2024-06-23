
// Array of object 
var questions = [
    {
        id: 1,
        question: "HTML stand for",
        options: {
            a: "Hyper text markup Language",
            b: "Hyper text programming Language",
            c: "Hyper text styling Language",
            d: "Hyper text scripting Language",

        },
        answer: "Hyper text markup Language"
    },
    {
        id: 2,
        question: "Which type of JavaScript Languages is",
        options: {
            a: "Object-Oriented ",
            b: "Object-Base",
            c: "Assembly Languages",
            d: "high Level",

        },
        answer: "Object-Base"
    },
    {
        id: 3,
        question: "The 'function' and  'var' are known as:",
        options: {
            a: "Keywords",
            b: "Data types",
            c: "Declaration statements",
            d: "Prototypes",

        },
        answer: "Declaration statements"
    }
    ,
    {
        id: 4,
        question: "who is the present president of pakistan",
        options: {
            a: "Arif Alvi",
            b: "Imran Khan",
            c: "Nawaz Sharif",
            d: "Zardari",

        },
        answer: "Arif Alvi"
    }
    ,
    {
        id: 5,
        question: "How many prayers in a day:",
        options: {
            a: "6",
            b: "5",
            c: "3",
            d: "none",

        },
        answer: "5"
    },
    {
        id: 6,
        question: "How many total surah in quran",
        options: {
            a: "113",
            b: "114",
            c: "112",
            d: "111",

        },
        answer: "114"
    },
    {
        id: 7,
        question: "The correct sequence of HTML tags for starting a webpage is",
        options: {
            a: "Head, Title, HTML, body",
            b: "HTML, Body, Title, Head",
            c: "HTML, Head, Title, Body",
            d: "HTML, Title , Head,  Body",

        },
        answer: "HTML, Head, Title, Body"
    }
]

var userName = document.getElementById("userName")
var userEmail = document.getElementById("userEmail")
userName.innerHTML = localStorage.getItem("userName")
userEmail.innerHTML = localStorage.getItem("userEmail")
//For Ques and Opt
var htmlQA = document.getElementById("htmlQA")
var htmlOptions = document.getElementById("htmlOptions")
var indexNum = 0
var nextQuesbtn = document.getElementById("nxtQbtn")
//For Result
var resultCont = document.getElementById("resultCont")
var corrCount = document.getElementById("corrCount")
var wrongCount = document.getElementById("wrongCount")
var corrAnsCount = 0
var wrongAnsCount = 0

//Counter
var currCount = document.getElementById("currCount")
var totalCount = document.getElementById("totalCount")
totalCount.innerHTML = questions.length

function quizStart() {
    startTime()
    // console.log("startquiz" , questions[indexNum].options)
    htmlQA.innerHTML = questions[indexNum].question

    htmlOptions.innerHTML = ""
    for (var key in questions[indexNum].options) {
        // console.log(key, questions[indexNum].options[key])
        var option = questions[indexNum].options[key]
        htmlOptions.innerHTML += ` <li onclick="chkAns(this)" >${option}</li> `
    }

}
//Quiz Cont                 
var quizCont = document.getElementById("quizContainer")
var msec = 0
var mint = 10
var sec = 59
var forMint = document.getElementById("mintCount")
var forSec = document.getElementById("secCount")
var interval;
function startTime() {
    interval = setInterval(start, 10)
    // console.log(startTime)
}
function start() {
    forMint.innerHTML = mint
    msec++
    if (msec === 100) {
        sec--
        forSec.innerHTML = sec
        msec = 0
    } else if (sec < 1) {
        mint--
        sec = 59
    }else if (mint < 0) {
        quizCont.style.display = "none"
        resultCont.className = "show"
        corrCount.innerHTML = corrAnsCount
        wrongCount.innerHTML = wrongAnsCount
        finalResult()
    }
}
function nextQues() {
    if (indexNum < questions.length - 1) {
        indexNum++
        currCount.innerHTML++
        nextQuesbtn.className = "hide"
        quizStart()
        // console.log(nextQues , indexNum)
    } else {
        quizCont.style.display = "none"
        resultCont.className = "show"
        corrCount.innerHTML = corrAnsCount
        wrongCount.innerHTML = wrongAnsCount
        finalResult()
        // console.log(corrAnsCount)    
    }
    if (indexNum === questions.length - 1) {
        nextQuesbtn.innerHTML = "Result"

    }

}
function chkAns(ele) {
    //First strategy
    var liOptions = htmlOptions.getElementsByTagName("li")
    var isCheck = ele.innerHTML === questions[indexNum].answer
    // console.log(ele.innerHTML === questions[indexNum].answer)
    if (isCheck) {
        // console.log(isCheck)
        ele.className = "corrAns"
        corrAnsCount++
        // console.log("correct" )
    } else {
        ele.className = "wrngAns"
        wrongAnsCount++
        // console.log("incorrect")
        for (var li of liOptions) {
            if (li.innerHTML === questions[indexNum].answer) {
                li.className = "corrAns"
            }
        }

    }

    // console.log(htmlOptions.getElementsByTagName("li"))
    for (var li of liOptions) {
        // console.log(li)
        li.style.pointerEvents = "none"
        // li.style.cursor = "no-drop !important"
    }

    nextQuesbtn.className = "show"

}




function finalResult() {
    var showRes = document.getElementById("showResult")
    var showPercent = document.getElementById("showPercent")
    var corrAnswer = corrAnsCount * 10
    var totalQuestions = questions.length
    var totalMArks = totalQuestions * 10
    var passMarks = (corrAnswer / totalMArks) * 100
    var aprCong = document.getElementById("cong")
    var aprLater = document.getElementById("oops")
    console.log(totalMArks)
    if (corrAnswer > 39) {  
        aprCong.className = "showApr"
        showRes.innerHTML = "Passed"
        console.log( )
    }
     else {
        aprLater.className = "showApr"
        showRes.innerHTML = "Failed"
    } 
    showPercent.innerHTML = passMarks.toFixed(2)

}
