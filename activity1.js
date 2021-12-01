
Pontuação = 0;

function updateScore()
{
	Pontuação = Pontuação + 1;
	document.getElementById("Pontuação").innerHTML = "Pontuação : " + score;
}

function saveScore()
{
    localStorage.setItem("Pontuação", score);
}


function nextPage() {
window.location = "activity_2.html";
}
