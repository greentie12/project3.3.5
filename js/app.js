// object literals
// an array of objects [{}, {}, {}]


var questions = [{
    text: "Who is the original author of the Game of Thrones book series?",
    answer: ["Stephen King", "J.R. Tolkien", "L. Ron Hubbard", "George R.R. Martin"],
    correct_answer: 3,
    explain: "George R. R. Martin is the author of the widely popular book series Game of Thrones which is also a telvision phenomenon.",
}, {
    text: "Which tile is darker gray?",
    answer: ["Top", "Bottom", "Both the same gray"],
    correct_answer: 2,
    explain: "Both tiles are actually the same shade of gray. Your brain just translates the bottom to a lighter gray due to the percieved shadow. If you place a pen or pencil between the lines that connects them you will see they are both the same exat gray.",
}, {
    text: "How many years did it take to build the Leaning Tower of Pisa?",
    answer: ["5 Years", "19 Years", "199 Years", "34 Years"],
    correct_answer: 2,
    explain: "It took 199 years to build the Leaning Tower of Pisa, beginning in August 1173. The construction was stopped twice, the first time for 100 years, the second time in 1284. Both times it was due to wars.",
}, {
    text: "What produces the most oxygen on Earth?",
    answer: ["Algae & Marine Plants", "All the Forests combined", "Mammals"],
    correct_answer: 0,
    explain: "Algae and other marine plants produce an estimated 70 percent of Earth's oxygen through the photosynthesis process that takes place in oceans.",
}, {
    text: "How many possible moves are there in chess?",
    answer: ["1,900", "Over a Trillion", "1,250,425"],
    correct_answer: 1,
    explain: "There are over 288 billion different possible positions after four moves each. The number of distinct 40-move games is far greater than the number of electrons in the observable universe.",
}, {
    text: "Who is the best selling music artists of all-time?",
    answer: ["Elvis Presley", "Michael Jackson", "Pink Floyd", "The Beatles"],
    correct_answer: 3,
    explain: "The Beatles have sold 269 million certified units, according to Soundscan, making them the best selling artists of all-time.",
}, {
    text: "The Olympic Games originated in Greece?",
    answer: ["True", "False"],
    correct_answer: 0,
    explain: "The Ancient Games were staged in Olympia, Greece, from 776 BC through 393 AD, it took 1503 years for the Olympics to return. The first modern Olympics were held in Athens, Greece, in 1896.",
}, {
    text: "According to NASA - How many stars, approximately, are there in the known universe?",
    answer: ["10 Billion", "A Zillion", "100 Trillion", "500 Quadrillion"],
    correct_answer: 1,
    explain: "We basically have no idea how many stars there are in the universe. NASA can only confidently say that there are zillions of uncountable stars. A Zillion is any uncountable amount."
}]


// question number in the array
var questionNum = 0;

var isCorrect = 0;

var isWrong = 0;
// 1 question, 5? 10? 100? 

function display(position) {
    questionNum = position;
    //alert(questions[0]);
    $('#instruct').hide();
    $('#outcome').empty();
    $('#exp').empty();
    $('#submit').show();
    // document.getElementById("theText").innerHTML = questions[0].text;
    $('#theText').text(questions[questionNum].text);
    //document.getElementById("theText").innerHTML="<ul>"
    for (var i = 0; i <= questions[questionNum].answer.length - 1; i++) {
        //document.getElementById("theText").innerHTML=questions[0].answer[i]
        $('#theText').append("<br /> <br/> <input type='radio' name='theAnswer' value='" + i + "'>" + questions[questionNum].answer[i]);
        //alert(questions[0].answer[3]);
    }


}


function verifyAnswer() {
    var userChoice = $("input[type='radio']:checked").val();
    //console.log(userChoice, 'choice');
    if (userChoice == questions[questionNum].correct_answer) {

        $('#theText').empty();
        $('#submit').hide();

        $('#outcome').append("<br /> You're Right!").css({ "font-size": "30px" });
        $('#exp').append("<br />" + questions[questionNum].explain);
        isCorrect++;
        $('#count').html(isCorrect);
        //alert(isCorrect);
        if (isCorrect == 4) {
        window.location = "won.html";
        }
        //alert(questions[questionNum].correct_answer);
        //if (this.document.theAnswer.value==3)
    } else {
        $('#theText').empty();
        $('#submit').hide();

        $('#outcome').append("<br /> Incorrect").css({ "font-size": "30px" });
        $('#pic' + questionNum).css({ "opacity": "0.3" });
        $('#pic1').css({"opacity": "1" });

        $('#exp').append("<br />" + questions[questionNum].explain);
        //alert(isCorrect);
        isWrong++;

        if (isWrong == 4) {
            window.location = "lose.html";
        }
    }
}


// hints: input; .append(); .empty();
