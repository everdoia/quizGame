jQuery(function($) {
  
  
  var questions = [
                   {question: 'How many feet in a mile?',
                      choices: ['500;', '5275;', '5280;'],
                        correct:1},
                   {question: 'What is the Capital of California?',
                      choices: ['San Jose;', 'Sacramento;', 'San Diego;', 'Other;'],
                        correct:1},
                   
                   {question: 'Which is the correct CSS syntax?',
                      choices: ['body {color: black;}', '{body:color=black;}', 'body:color=black;', '{body;color:black;}'],
                        correct:0},
                   
                   {question: 'The first man on the moon was Armstrong',
                      choices: ['True', 'False'],
                        correct:0},
                         {question: 'What came first - Chicken or egg?',
                      choices: ['Chicken', 'Egg'],
                        correct:0},
                   
                  ];
  
  var questionNum = 0;
  var questionTotal = questions.length;
  var correctTotal = 0;

  
  $('#testQuestion').hide(); //comes back once startQuizButton is clicked
  
  $('#startQuizButton').click(function(){  //start the quiz and show the first question
    $('#message').hide();
    $('#startQuiz').hide();
    $('#testQuestion').show();
    questionDisplay();
  })
  
  $('#testQuestion').on('click', '#submit', function(){
    var answer = $('input:radio[name=guess]:checked').val();
    var correctAnswer = questions[questionNum].correct;
    if (answer == null) {                                //if no answer was selected
      $('#message').html("<p>Please select an answer.</p>");
    } else if (answer == correctAnswer) {                //if correct answer was selected
      $('#message').html("<p>Great Job! That is Correct!</p><input id='continue' class='button' type='submit' value='Continue'>");
      correctTotal++;
    } else {                                             //wrong answer selected
      $('#message').html("<p>Wrong! The correct answer is:<br>" + questions[questionNum].choices[correctAnswer] + "</p><input id='continue' class='button' type='submit' value='Continue'>");
    }
    $('#message').show();
  })
  
  function questionDisplay() {                           //displays the current question
    $('#questionNum').text("Question " + (questionNum+1) + " of " + questionTotal);
    $('#question').text(questions[questionNum].question);
    $('#choices').empty();
    var choiceTotal = questions[questionNum].choices.length;
    for (var i=0; i<choiceTotal; i++) {                  //displays the answer choices
      $('#choices').append("<input type='radio' class='guess' name='guess' value=" + i + ">" + questions[questionNum].choices[i] + "<br>");
    }
  }
  
  $('#message').on('click', '#continue', function(){
    if ((questionNum+1) == questionTotal) {              //quiz is finished, show stats
      $('#message').html("You have answered " + correctTotal + " questions correctly out of " + questionTotal + " total questions.<br>Click on Start Quiz above to take the quiz again.");
      $('#testQuestion').hide();
      $('#startQuiz').show();
      questionNum = 0;                                   //reset variables to start quiz again
      correctTotal = 0;
    } else {                                             //continue to next question
      $('#message').hide();
      questionNum++;
      questionDisplay();
    }
  })


  

}); 
