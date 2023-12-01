alert("Escape in 5 minutes, or you will meet your doom. Find the 16 digit code, and type it into the box to get out. Good luck!")
var code = "";
for(let i = 0; i < 16; i++){
	code += (Math.floor(Math.random()*10)).toString();
}
function onClick() {
    // feature detect

    
         
		document.body.removeEventListener('click', onClick, false);
	}
        window.addEventListener('drag', (e) => {
							document.getElementById('mainDiv').style.transform = `translateZ(600px) rotateX(${-e.clientY}deg) rotateY(${e.clientX}deg)`;
						});
document.body.addEventListener('click', onClick, false);
function step2() {
	window.speechSynthesis.speak(new SpeechSynthesisUtterance("Part 1 is: " + code.substring(1,4)));
}
document.getElementById("desk").onclick = ()=>{
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Part 2 is: " + code.substring(5,8)));

}
document.getElementById("answer").onclick = ()=>{
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Part 3 is: " + code.substring(9,12)))

}
document.getElementById("note").onclick = ()=>{
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Part 4 is: " + code.substring(13,16)))

}
function check(e){
	if(e.key == "Enter"){
		if(this.innerHTML = code){
			alert("Great Job!");
			window.open("", "_self").close();
		}
		else{
			alert("Nice try. Better luck next time...");
			location.reload();
		}
	}
}
setTimeout(()=> {
	alert("Time's up! Nice try.");
	location.reload();
}, 300000)
