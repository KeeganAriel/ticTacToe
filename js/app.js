// var whosTurn = "X";

$(document).ready(function(){
	var whosTurn = "X";

	function startGame () {
		setMessage(whosTurn + " gets to go first!");
	}

	function setMessage (msg) {
		$(".message").html(msg);

	}

	$( ".square" ).click(function() {
		// if ($('.square').html() !== "") {
		$(this).html(whosTurn);
		changeTurn();
		setMessage(whosTurn + " gets to go now...");
		whoWon();
	// } else if ($('.square').html() === "X") {
	// 	console.log('test');
	// 	return false;
	
	});

	function changeTurn() {
		if (whosTurn === "X") {
			whosTurn = "O";
		} else {
			whosTurn = "X";
		}
	}

	function whoWon() {
		var firstRow = $('.row:first-child .square').text();
		if (firstRow === "XXX") {
			setMessage("X won!");
			$(".row:first-child").addClass('strikeout');
			return false;
		} 
		else if (firstRow === "OOO") {
			setMessage("O WON!");
			$(".row:first-child").addClass('strikeout');
		}

		var middleRow = $('.row:nth-child(2) .square').text();
		if (middleRow === "XXX") {
			setMessage("X won!");
			$('.row:nth-child(2)').addClass('strikeout');
		} else if (middleRow === "OOO") {
			setMessage("O WON!");
			$('.row:nth-child(2)').addClass('strikeout');
		}

		var lastRow = $('.row:last-child .square').text();
		if (lastRow === "XXX") {
			setMessage("X won!");
			$('.row:last-child').addClass('strikeout');
		} else if (lastRow === "OOO") {
			setMessage("O WON!");
			$('.row:last-child').addClass('strikeout');
		}


		var firstCol = $('td:nth-child(1)').text();
		if (firstCol === "XXX") {
			setMessage("X won!");
			$('td:nth-child(1)').addClass('strikeout1');
		} else if (firstCol ==="OOO") {
			setMessage("O WON!!!");
			$('td:nth-child(1)').addClass('strikeout1');
		}

		var middleCol = $('td:nth-child(2)').text();
		if (middleCol === "XXX") {
			setMessage("X won!");
			$('td:nth-child(2)').addClass('strikeout1');
		} else if (middleCol === "OOO") {
			setMessage("O WON!");
			$('td:nth-child(2)').addClass('strikeout1');
		}

		var lastCol = $('td:nth-child(3)').text();
		if (lastCol === "XXX") {
			setMessage("X won!");
			$('td:nth-child(3)').addClass('strikeout1');
		} else if (lastCol === "OOO") {
			setMessage("O WON!");
			$('td:nth-child(3)').addClass('strikeout1');
		}

		var diagonal1 = $('.diag1').text();
		if (diagonal1 === "XXX") {
			setMessage("X won!");
			$('.diag1').addClass('diag1Strikeout');
		} else if (diagonal1 === "OOO") {
			setMessage("O WON!");
			$('.diag1').addClass('diag1Strikeout');

		}

		var diagonal2 = $('.diag2').text();
		if (diagonal2 === "XXX") {
			setMessage("X won!");
			$('.diag2').addClass('diag2Strikeout');
		} else if (diagonal2 === "OOO") {
			setMessage("O WON!");
			$('.diag2').addClass('diag2Strikeout');
		}

	}	


	startGame();

});



