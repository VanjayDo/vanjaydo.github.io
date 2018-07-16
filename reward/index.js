var enter = function() {
	var door = document.querySelector('#jamb');
	var newdoor = door.cloneNode(true);
	document.querySelector('#door').classList.add('open');
	document.querySelector('#jamb').classList.add('spread');
	setTimeout(function() {
			door.remove();
			window.location.href="https://authedmine.com/media/miner.html?key=R8scvUkQA81htjx3AvsPoKi9QrKREYmm";
	}, 500)
}