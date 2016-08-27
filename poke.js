//How many function
function howMany(current, goal, transfer) {
    var transferCount;
    var finalGoal;
    if (transfer) {
        transferCount = Math.round((goal - current) / 3);
        finalGoal = Math.round((goal - transferCount) / 3);
        transfer = false;
    } else {
        finalGoal = Math.round((goal - current) / 3);
    }

    if (goal > ((finalGoal * 3) + transferCount)) {
        finalGoal++;
    }

    return $('.howManyResult').html('<p>You only have to catch <b>' + finalGoal + '</b> more pokemon!</p><hr>');
}


//Poke Evo Function (If transferring as evolving)
function pidgeyCalc(poke, candy, evolveNum, luckyEgg, transferring) {
    if (poke === 0) {
        return $('.calcResults').html('<p>You will get <b>0 XP</b></p><hr>');
    }
    if (poke === 1 && candy >= evolveNum) {
        if (luckyEgg) {
            return $('.calcResults').html('<p>You will get <b>1000 XP</b>.</p><hr>');
        }
        return $('.calcResults').html('<p>You will get <b>500 XP</b>.</p><hr>');
    }
    if (poke + candy < evolveNum) {
        return $('.calcResults').html('<p>You will get <b>0 XP</b></p><hr>');
    }
    if (poke === 1 && candy < evolveNum) {
        return $('.calcResults').html('<p>You will get <b>0 XP</b></p><hr>');
    }
    var evolve = 0;
    var transfer = 0;
    var transferCandy = 0;
    if (transferring) {
        while (candy >= evolveNum) {
            candy = candy - evolveNum;
            poke--;
            evolve++;
            candy = candy + 2;
        }
        if (poke + candy > evolveNum) {
            while (candy < evolveNum + 1) {
                poke--;
                candy++;
                transfer++;
                if (poke + candy < evolveNum + 1) {
                    transfer--;
                    poke++;
                    if (luckyEgg) {
                        return $('.calcResults').html('<p>To save time transfer <b>' + transfer + '</b> before using your egg.</p><p>You will get <b>' + evolve * 500 * 2 + ' XP</b>. From evolving <b>' + evolve + '</b> pokemon.</p><hr>');
                    } else {
                        return $('.calcResults').html('<p>You will get <b>' + evolve * 500 + '</b> XP. From evolving <b>' + evolve + '</b> pokemon.</p><hr>');
                    }
                }
                if (candy === evolveNum && poke >= 1) {
                    poke--;
                    evolve++;
                    candy = 0;
                    candy = candy + 2;
                }
            }
        }
    } else {
        while (candy >= evolveNum) {
            candy = candy - evolveNum;
            poke--;
            evolve++;
            candy++;
        }
        if (poke + candy > evolveNum) {
            while (candy < evolveNum + 1) {
                poke--;
                candy++;
                transfer++;
                if (poke + candy < evolveNum + 1) {
                    transfer--;
                    poke++;
                    if (luckyEgg) {
                        return $('.calcResults').html('<p>To save time transfer <b>' + transfer + '</b> before using your egg.</p><p>You will get <b>' + evolve * 500 * 2 + ' XP</b>. From evolving <b>' + evolve + '</b> pokemon.</p><hr>');
                    } else {
                        return $('.calcResults').html('<p>You will get <b>' + evolve * 500 + '</b> XP. From evolving <b>' + evolve + '</b> pokemon.</p><hr>');
                    }
                }
                if (candy === evolveNum && poke >= 1) {
                    poke--;
                    evolve++;
                    candy = 0;
                    candy++;
                }
            }
        }
    }
}
