
$(document).ready(function(){
  var random=Math.floor(Math.random()*101+19);
  // Selects a random number to be shown at the start of the game
  // Number should be should be between 19 - 120
  //
  $("#random").text("Your goal is: " + random);
  // Appending random number to the randomNumber id in the html doc
  //
  var blue= Math.floor(Math.random()*11+1);
  var green= Math.floor(Math.random()*11+1);
  var red= Math.floor(Math.random()*11+1);
  var yellow= Math.floor(Math.random()*11+1);
  // Setting up random numbers for each jewel
  // Random number has to be between 1 - 12
  // 
  var totalScore= 0; 
  var wins= 0;
  var losses = 0;


$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);

//function to reset the game
function reset(){
      random= Math.floor(Math.random()*101+19);
      blue= Math.floor(Math.random()*11+1);
      green= Math.floor(Math.random()*11+1);
      red= Math.floor(Math.random()*11+1);
      yellow= Math.floor(Math.random()*11+1);
      totalScore= 0;
      $("#random").text("Your goal is: " + random);
      $("#totalScore").text("Your total score is: " + totalScore);
} 
//adds the wins to the totalScore
function winner(){
  wins++; 
  $("#wins").text("Wins: " + wins);
  reset();
}
//adds the losses to the totalScore
function loser(){
  losses++;
  $("#losses").text("Losses: " + losses);
  reset();
}
//sets up click for jewels
  $("#blue").on('click', function(){
    totalScore = totalScore + blue;
    $("#totalScore").text("Your total score is: " + totalScore); 
        if (totalScore === random){
          winner();
        }
        else if (totalScore > random){
          loser();
        }   
  })  
  $("#green").on('click', function(){
    totalScore = totalScore + green;
    $("#totalScore").text("Your total score is: " + totalScore);
        if (totalScore === random){
          winner();
        }
        else if (totalScore > random){
          loser();
        } 
  })  
  $("#red").on('click', function(){
    totalScore = totalScore + red;
    $("#totalScore").text("Your total score is: " + totalScore);
          if (totalScore == random){
          winner();
        }
        else if (totalScore > random){
          loser();
        } 
  })  
  $("#yellow").on('click', function(){
    totalScore = totalScore + yellow;
    $("#totalScore").text("Your total score is: " + totalScore);
          if (totalScore == random){
          winner();
        }
        else if (totalScore > random){
          loser();
        }
  });   
}); 