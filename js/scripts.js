$(document).ready(function () {

	// On quiz submit
	$("form#palindrome-quiz").submit(function (e) { 
		e.preventDefault();
		console.log("Submitted!");

		let correctAnswers = 0;

		$("input:checkbox[name=palindrome]:checked").each(function () {
			const answer = $(this).val();

			if (answer === "Racecar" || answer === "Red rum, sir, is murder" || answer === "Was it a cat I saw?") {
				correctAnswers++;
			}
			else if (answer === "CHEESE" || answer === "Goober") {
				OutputResult("You answered incorrectly :(");
				return;
			}

			if (correctAnswers >= 3) {
				OutputResult("You answered correctly! Hoorah!");
				return;
			}
		});

		function OutputResult(result) {
			$("#output").show();
			$("#output h3").text(result);
			$("#palindrome-quiz").hide();
		}
	});

});