
$(document).ready(function() {





        //dice roll

        $('#roll').click(function() {
            var diceRoll = (randomNumber(1, 11));

            function randomNumber(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
            }

            $('#roll-result').text(diceRoll.toFixed());

        }); //end #roll

        //two dice roll
        $('#game').click(function() {
            var twoDiceRoll = (randomNumber(1, 13));

            function randomNumber(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
            }

            $('#game-result').text(twoDiceRoll.toFixed());

        }); //end #game

        //two dice roll
        $('#game-type').click(function() {
            var oneTwo = (randomNumber(1, 3));

            function randomNumber(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
            }

            $('#type-result').text(oneTwo.toFixed());

        }); //end #game



//team select
        $('#team-select').click(function() {
            var threeRoll = (randomNumber(1, 4));

            function randomNumber(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
            }

            $('#team-result').text(threeRoll.toFixed());

          }); ///end team select

          //green roll

          $('#green-result').click(function() {
              var greenRoll = (randomNumber(1, 7));

              function randomNumber(min, max) {
                  return Math.floor(Math.random() * (max - min) + min);
              }

              $('#green-result').text(greenRoll.toFixed());
            });//end green roll

            //battle ante
            $('#ante').click(function() {

              var anteRoll = (randomNumber(1, 5));

              function randomNumber(min, max) {
                  return Math.floor(Math.random() * (max - min) + min);
              }

                $('#ante-result').text(anteRoll.toFixed());
              });//end battle ante

//single out random free-for-all
$('#select-ffa').click(function() {
$('table.free tr').hide();
for (var i = 0; i < 1; i++) {
  $('table.free tr').filter(':hidden')
               .eq(Math.floor(Math.random() * (12 - i)))
               .show();
               $('table.free td').css('background-color', 'yellow');
}
});

//single out random 2v2
$('#select-twov').click(function() {
$('table.twov tr').hide();
for (var i = 0; i < 1; i++) {
  $('table.twov tr').filter(':hidden')
               .eq(Math.floor(Math.random() * (12 - i)))
               .show();
               $('table.twov td').css('background-color', 'yellow');
}
});

//single out random team
$('#select-team').click(function() {
$('table.teams tr').hide();
for (var i = 0; i < 1; i++) {
  $('table.teams tr').filter(':hidden')
               .eq(Math.floor(Math.random() * (3 - i)))
               .show();
               $('table.teams td').css('background-color', 'yellow');
}
});

//single out random game type
$('#select-type').click(function() {
$('table.game-type tr').hide();
for (var i = 0; i < 1; i++) {
  $('table.game-type tr').filter(':hidden')
               .eq(Math.floor(Math.random() * (2 - i)))
               .show();
               $('table.game-type td').css('background-color', 'yellow');

}
});

//single out 3 candies
$('#choose-candy').click(function() {
$('table.candies tr').hide();
for (var i = 0; i < 3; i++) {
  $('table.candies tr').filter(':hidden')
               .eq(Math.floor(Math.random() * (6 - i)))
               .show();
}
});



// CASINO IMAGE TRIAL
  var playCount = 0;
  var jackpot = 3;
  var payout = 0;
  var totalPlays = 0;
  var regWin = 2;
  var timesRun = 0;
  var lowWin = 1;


//insert coin (reset)
$('#reset').click(function() {
  if (playCount >= 1) {
    alert("You've still got spins!");
    // jackpot--;
    payout++;
    playCount -=3;
    totalPlays--;
  } else if (playCount == 0) {
  jackpot++;
  payout--;
  totalPlays++;
  playCount += 3;

  $('#jackpot').text(jackpot);
  $('#payout').text(payout);
  $('#total-plays').text(totalPlays);
  $('#yahtzeeWin').text('');
  $('#slot-count').text(playCount);
  $("#casino-page").css('background-image', 'none');
}
})

///spin
$('#spin').click(function() {
    if (playCount == 0) {
      alert('Insert coin to play!');


    } else if (playCount >= 1){
    playCount--;
    $('#yahtzeeWin').text('');
    $('#slot-count').text(playCount);
    $('.spin').empty();



    var yahtzeeSpinOne = (randomNumber(1, 4));
    var yahtzeeSpinTwo = (randomNumber(1, 4));
    var yahtzeeSpinThree = (randomNumber(1, 4));


    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }




    ///spinOne
    if (yahtzeeSpinOne == 2) {
      $('#spin-result-one').append('<img src="images/yoshiegg.png" height="90px">');
    } else if (yahtzeeSpinOne == 1) {
      $('#spin-result-one').append('<img src="images/block3.png" height="90px">');
    } else {
      $('#spin-result-one').append('<img src="images/star.png" height="90px">');
    };

    ///spinTwo
    if (yahtzeeSpinTwo == 2) {
      $('#spin-result-two').append('<img src="images/yoshiegg.png" height="90px">');
    } else if (yahtzeeSpinTwo == 1) {
      $('#spin-result-two').append('<img src="images/block3.png" height="90px">');
    } else {
      $('#spin-result-two').append('<img src="images/star.png" height="90px">');
    };

    ///spinThree
    if (yahtzeeSpinThree == 2) {
      $('#spin-result-three').append('<img src="images/yoshiegg.png" height="90px">');
    } else if (yahtzeeSpinThree == 1) {
      $('#spin-result-three').append('<img src="images/block3.png" height="90px">');
    } else {
      $('#spin-result-three').append('<img src="images/star.png" height="90px">');

    };





    // $('#spin-result-one').text(yahtzeeSpinOne.toFixed());
    // $('#spin-result-two').text(yahtzeeSpinTwo.toFixed());
    // $('#spin-result-three').text(yahtzeeSpinThree.toFixed());
    if ((yahtzeeSpinOne == yahtzeeSpinTwo && yahtzeeSpinOne == yahtzeeSpinThree) && ((yahtzeeSpinOne + yahtzeeSpinTwo + yahtzeeSpinThree) == 3)) {

      // $('#yahtzeeWin').text('Winner!');
      $('#yahtzeeWin').append('<audio src="audio/airhorn.mp3" autoplay></audio>')
      playCount = 0;
      $('#slot-count').text(playCount);
      payout = payout + lowWin;
      $('#payout').text(payout);
      // jackpot = 5;
      $('#slot-count').text('+' + lowWin);
      // $('.siren').fadeTo(fast, 0.5).;

    } else if ((yahtzeeSpinOne == yahtzeeSpinTwo && yahtzeeSpinOne == yahtzeeSpinThree) && ((yahtzeeSpinOne + yahtzeeSpinTwo + yahtzeeSpinThree) == 6)) {

        // $('#yahtzeeWin').text('Winner!');
        $('#yahtzeeWin').append('<audio src="audio/airhorn.mp3" autoplay></audio>')
        playCount = 0;
        $('#slot-count').text(playCount);
        payout = payout + regWin;
        $('#payout').text(payout);
        // jackpot = 5;
        $('#slot-count').text('+' + regWin);
        // $('.siren').fadeTo(fast, 0.5).;

    } else if ((yahtzeeSpinOne + yahtzeeSpinTwo + yahtzeeSpinThree) == 9) {
      $('#yahtzeeWin').append('<audio src="audio/airhorn.mp3" autoplay></audio>')
      playCount = 0;
      $('#slot-count').text(playCount);
      payout = payout + jackpot;
      $('#payout').text(payout);
      jackpot = 3;
      $('#jackpot').text(jackpot);
      $('#slot-count').text('Jackpot!');
      $("#casino-page").css('background-image', 'url("images/confetti.gif")');
      // $('#yahzteeWin').append('<img src="carlton.gif">');


    } else if (playCount == 0){
      playCount = 0;
      $('#slot-count').text(playCount);
      $('#slot-count').text('Game Over');
    }
}//end insert coin if/else

});


/// end CASINO




    }) //end doc ready
