$(document).ready(function() {
	var xScore = 0;
	var oScore = 0;


	var game = {

		begin: function() {

			$("td").removeClass("x");
			$("td").removeClass("o");
			$("td").text("");
			var xTurn = Math.floor(Math.random() * 2);
			var count = 0;

			$("td").on("click", function() {
				var self = $(this);
				if (xTurn) {
					self.text("X");
					self.addClass("x");
				}
				else {
					$(this).text("O");
					self.addClass("o");
				}
				var audio1 = $("#shortSound1")[0];
				var audio2 = $("#shortSound2")[0];
				var audio3 = $("#shortSound3")[0];
				var randAudio = 1 + Math.floor(Math.random() * 3)
				if (randAudio === 1) {
					audio1.play();
				}
				else if (randAudio === 2) {
					audio2.play();
				}
				else {
					audio3.play();
				}
				xTurn = !xTurn;
				count ++;
				var game_over = false;
				$(this).off("click");
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
						$(".gif").fadeIn(3000, function() { $(".gif").fadeOut(3000); });
						alert("Player X has won the game!");
						var game_over = true;
						xScore ++;
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
						$(".gif").fadeIn(3000, function() { $(".gif").fadeOut(3000); });
						alert("Player O has won the game!");
						var game_over = true;
						oScore ++;
				}
				else if (count === 9) {
						alert("Draw!");
						var game_over = true;
				}
				if (game_over) {
					$('td').off('click');
					setTimeout(function() {
						$('body').click(game.begin());
					}, 1);
					render();
				}
			});
		}
	};

	game.begin();
	render();

	function render() {
		$("#xScore").text("'X' Score - " + xScore);
		$("#oScore").text("'O' Score - " + oScore);
	}

	$("#reset").on("click", function() {
		$('td').off('click');
		setTimeout(function() {	
			$('body').click(game.begin());
		}, 1);
	});

	$("#newGame").on("click", function() {
		$('td').off('click');
		xScore = 0;
		oScore = 0;
		setTimeout(function() {	
			$('body').click(game.begin());
		}, 1);
		render();
	});

});







