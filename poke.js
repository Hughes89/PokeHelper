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


function pokeCalc(pokemon, candies, evolveBy, transfer, luckyEgg) {
    var transferCount = 0;
    var evolveTrans = 0;
    var evolveCount = 0;
    var evolving = true;
    if (transfer) {
        while (pokemon > evolveBy + 1) {
            pokemon--;
            transferCount++;
        }
        candies = candies + transferCount;
        while (candies >= evolveBy) {
            candies = candies - evolveBy;
            pokemon--;
            evolveCount++;
            candies = candies + 2;
            if (pokemon < 0) {
                candies--;
                pokemon++;
                transferCount--;
                if (transferCount < 0) {
                    pokemon++;
                    candies--;
                    evolveCount--;
                    transferCount++;
                }
            }
            while (pokemon > 1 && candies < evolveBy) {
                pokemon--;
                candies++;
            }
            console.log(pokemon, candies);
        }
    }

    console.log(pokemon, candies, evolveCount, transferCount);
    if (luckyEgg) {
        return $('.calcResults').html('<p>You will get ' + evolveCount * 500 * 2 + ' XP.</p><hr>');
    }
    return $('.calcResults').html('<p>You will get ' + evolveCount * 500 + ' XP.</p><hr>');
}
