function howMany(current, goal, transfer) {
    // if (typeof current === 'string' || typeof goal === 'string') {
    //   return $('howManyResult').html('<p>Please enter a number.</p>');
    // }
    var transferCount;
    var finalGoal;
    if (transfer) {
        transferCount = Math.round((goal - current) / 3);
        finalGoal = Math.round((goal - transferCount) / 3);
        transfer = false;
    } else {
        finalGoal = Math.floor((goal - current) / 3);
    }

    if (goal > ((finalGoal * 3) + transferCount)) {
        finalGoal++;
    }

    return $('.howManyResult').html('<p>You only have to catch ' + finalGoal + ' more pokemon!</p><hr>');
}

function pidgeyCalc(poke, candy, evolveNum, luckyEgg) {
  var evolve = 0;
  var transfer = 0;
  var transferCandy = 0;
  while (candy > evolveNum) {
    candy = candy - 12;
    poke--;
    evolve++;
    candy = candy + 2;
  }
  if (poke + candy > evolveNum) {
    while (candy < 13) {
      poke--;
      candy++;
      transfer++;
      if(poke + candy < 13) {
      transfer--;
      poke++;
      if(luckyEgg) {
      	return $('.calcResults').html('<p>Transfer ' + transfer + ' before using your egg.</p><p>You will get ' + evolve * 500 * 2 + ' XP.</p><hr>');
      } else {
      	return $('.calcResults').html('<p>You will get ' + evolve * 500 + ' XP.</p><hr>');
      }
      }
      if (candy === 12 && poke >= 1) {
        poke--;
        evolve++;
        candy = 0;
        candy = candy + 2;
      }
    }
  }
}
