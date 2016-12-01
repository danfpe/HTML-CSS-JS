
var imageArray=["https://res.klook.com/image/upload/themes/647245ef-banner_web_1.jpg",
                "https://res.klook.com/image/upload/themes/ebda1d7d-banner_web_2.jpg",
                "https://res.klook.com/image/upload/themes/0d4eb2da-banner_web_3.jpg"];

var imageIndex=0;

function changeImage () {
	document.slide.src=imageArray[imageIndex];
	imageIndex=imageIndex+1;
	if (imageIndex>=imageArray.length){
		imageIndex=0;
	}
	setTimeout("changeImage()",2000);
	}
window.onload=changeImage; 
