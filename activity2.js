
function back() {
window.location = "activity_1.html";
}

function getScore()
{
	score = localStorage.getItem("Pontuação");	
	document.getElementById("update").innerHTML = "<h1>Pontuação: " + score +"</h1>";
}
