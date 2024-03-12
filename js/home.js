let dialog = document.querySelector('dialog');
let video = document.querySelector('.m-dialog__video');

document
	.querySelector('.m-infoVideo__thumbnailContainer')
	.addEventListener('click', () => {
		dialog.showModal();
		video.play();
	});

document
	.querySelector('.m-dialog__closeButton')
	.addEventListener('click', () => {
		video.pause();
		dialog.close();
	});
