  function onClick() {
    // feature detect
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
      DeviceOrientationEvent.requestPermission()
        .then(permissionState => {
          if (permissionState === 'granted') {
            window.addEventListener('deviceorientation', (e) => {
							document.getElementById('mainDiv').style.transform = `translateZ(600px) rotateX(${e.beta}deg) rotateY(${e.gamma}deg) rotateZ(${e.alpha}deg)`;
						});
          }
        });
		}
		document.body.removeEventListener('click', onClick, false);
	}
document.body.addEventListener('click', onClick, false);
function step2() {
	document.getElementById('codeone').play();
	document.getElementById("retro").style.display = "none";
}
