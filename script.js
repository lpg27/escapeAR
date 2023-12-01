alert("Escape in 5 minutes, or you will meet your doom. Find the 16 digit code, and type it into the box to get out. Good luck!")
function onClick() {
    // feature detect

            window.addEventListener('drag', (e) => {
							document.getElementById('mainDiv').style.transform = `translateZ(600px) rotateX(${-e.clientY}deg) rotateY(${e.clientX}deg)`;
						});
         
		document.body.removeEventListener('click', onClick, false);
	}
document.body.addEventListener('click', onClick, false);
function step2() {
	document.getElementById('codeone').play();
}
