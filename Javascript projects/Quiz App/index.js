
const Questions = [{
    id: 0,
    q: "When was JS launched?",
    a: [{ text: "1998", isCorrect: false },
    { text: "1995", isCorrect: true },
    { text: "1993", isCorrect: false },
    { text: "2000", isCorrect: false }
    ]

},
{
    id: 1,
    q: "Which of this is not a javascript framework?",
    a: [{ text: "React", isCorrect: false },
    { text: "Angular", isCorrect: false },
    { text: "Vue", isCorrect: false },
    { text: "JAVA", isCorrect: true }
    ]

},
{
    id: 2,
    q: "Which of this is not a programming language?",
    a: [{ text: "Python", isCorrect: false },
    { text: "JavaScript", isCorrect: false },
    { text: "MC-03", isCorrect: true },
    { text: "JAVA", isCorrect: false }
    ]

},
{
    id: 3,
    q: "What is the correct file extension for Python files?",
    a: [{ text: ".pyt", isCorrect: false },
    { text: ".pt", isCorrect: false },
    { text: ".pyth", isCorrect: false },
    { text: ".py", isCorrect: true }
    ]

},
{
    id: 4,
    q: "Where in an HTML document is the correct place to refer to an external style sheet?",
     a: [{ text: "In  <body> ", isCorrect: false },
    { text: "In <head>", isCorrect: true },
    { text: "At the end ", isCorrect: false },
    { text: "In <script>", isCorrect: false }
    ]
}

]
var count=0;
var selected = "";
var start = true;
var selectiondone=false;

var result = document.getElementsByClassName("finalclass");
var QuestionPage = document.getElementsByClassName("QuestionPage");
resultdiv = document.getElementsByClassName("resultdiv")
resultdiv[0].style.display = 'none';

function quiz(id) {

    const op1 = document.getElementById('op1');
    op1.style.backgroundColor="bisque";
    const op2 = document.getElementById('op2');
    op2.style.backgroundColor="bisque";
    const op3 = document.getElementById('op3');
    op3.style.backgroundColor="bisque";
    const op4 = document.getElementById('op4');
    op4.style.backgroundColor="bisque";

    
    result[0].innerText = "QUESTION NO: "+ (id + 1);
    const question = document.getElementById("question");
    question.innerText =  Questions[id].q;

    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;


    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;

    op1.addEventListener("click", () => {
        op1.style.backgroundColor="lightblue";
        op2.style.backgroundColor="bisque";
        op3.style.backgroundColor="bisque";
        op4.style.backgroundColor="bisque";
        selectiondone=true;
        selected = op1.value;
        
        
    })


    op2.addEventListener("click", () => {
        op1.style.backgroundColor="bisque";
        op2.style.backgroundColor="lightblue";
        op3.style.backgroundColor="bisque";
        op4.style.backgroundColor="bisque";
        selectiondone=true;
        selected = op2.value;
        
    })


    op3.addEventListener("click", () => {
        op1.style.backgroundColor="bisque";
        op2.style.backgroundColor="bisque";
        op3.style.backgroundColor="lightblue";
        op4.style.backgroundColor="bisque";
        selectiondone=true;
        selected = op3.value;
        
        
    })


    op4.addEventListener("click", () => {
        op1.style.backgroundColor="bisque";
        op2.style.backgroundColor="bisque";
        op3.style.backgroundColor="bisque";
        op4.style.backgroundColor="lightblue";
        selectiondone=true;
        selected = op4.value;
        
        
    })
}
if (start) 
    quiz(0);


const next = document.getElementsByClassName('next')[0];
var id = 0;
var QuestionPage;
var resultdiv;
next.addEventListener("click", () => {
    if(!selectiondone)
    {
    
    alert("YOU HAVE MISSED TO SELECT AN OPTION.");
        
    }

    if (selected == "true") 
    {

    count=count+1;
       
     }
    
       start = false;
    
        if (id < 4) {
        selectiondone=false;
        id++;
        quiz(id);
        
        
    }
    else if(id>=4)

    {
         var QuestionPage = document.getElementsByClassName("QuestionPage")
         QuestionPage[0].style.display = 'none';
         resultdiv[0].style.display = 'block';
         
         document.querySelector('.resultdiv p').innerText=(" RESULTS: YOU ANSWERED "+ count +" OUT OF 5 QUESTIONS CORRECTLY");
        
    }

});


