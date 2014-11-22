$(document).ready(function() {
	var xTurn = true;
	var xScore = 0;
	var oScore = 0;

	render();

	function render() {
		$("#xScore").text("x Score: " + xScore);
		$("#oScore").text("o Score: " + oScore);
	}

	$("td").on("click", function () {
		var self = $(this);
		if (xTurn) {
			self.text("X");
			self.addClass("x");
		}
		else {
			$(this).text("O");
			self.addClass("o");
		}
		xTurn = !xTurn;
		$(this).off("click");
		gameEval();
	});
function gameEval() {
	if  (
		$("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') ||
		$("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') ||
		$("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') ||
		$("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') ||
		$("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') ||
		$("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') ||
		$("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') ||
		$("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x')
		) {
		xScore += 1;
		render();
		alert("Player X has won the game!");
		reset();
	}
	else if (
		$("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') ||
		$("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') ||
		$("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o') ||
		$("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') ||
		$("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') ||
		$("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') ||
		$("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') ||
		$("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o')
		) {
		oScore += 1;
		render();
		alert("Player O has won the game!");
		reset();
		}
	}

	function reset() {
		$("td").removeClass("x o");
		$("td").empty();
	}

});




