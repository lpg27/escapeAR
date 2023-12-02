alert("Escape in 5 minutes, or you will meet your doom. Find the 16 digit code, and type it into the box to get out. Click to allow VR. Good luck!")
var code = "";
for(let i = 0; i < 16; i++){
	code += (Math.floor(Math.random()*10)).toString();
}
    // feature detect

    function onclick() {
					if (typeof DeviceOrientationEvent.requestPermission === 'function') {
						DeviceOrientationEvent.requestPermission().then(function (permissionState) {
							if (permissionState === 'granted') {
								window.addEventListener('deviceorientation', function (e) {
									document.getElementById("mainDiv").style.transform = `translateZ(600px) rotateZ(${e.alpha}deg) rotateX(${e.beta}deg) rotateY(${e.gamma}deg)`;
								});
							}
						})
							.catch(console.error);
					}
	    document.getElementById("mainDiv").removeEventListener('click', onclick);

				}
document.getElementById("mainDiv").addEventListener('click', onclick, false);
function step2() {
	speechSynthesis.speak(new SpeechSynthesisUtterance("Part 1 is: " + code.substring(0,4)));
}
document.getElementById("desk").onclick = ()=>{
		speechSynthesis.speak(new SpeechSynthesisUtterance("Part 2 is: " + code.substring(4,8)));

}
document.getElementById("answer").onclick = ()=>{
		speechSynthesis.speak(new SpeechSynthesisUtterance("Part 3 is: " + code.substring(8,12)));

}
document.getElementById("note").onclick = ()=>{
		speechSynthesis.speak(new SpeechSynthesisUtterance("Part 4 is: " + code.substring(12,16)));

}
document.getElementById("escape").onkeydown = (e)=>{
	if(e.key == "Enter"){
		if(this.value === code){
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
