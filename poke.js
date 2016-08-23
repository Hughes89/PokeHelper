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

	return $('.howManyResult').html('<p>You only have to catch ' + finalGoal + ' more pokemon!</p>');
}
