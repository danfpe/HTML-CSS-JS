
var imageArray=["http://img1.qunarzz.com/travel/poi/1508/ec/d88e56d56fac74.jpg_r_720x400x95_73d8f5cf.jpg",
                "http://img1.qunarzz.com/travel/poi/1508/ca/ad2128633259d5.jpg_r_720x400x95_1171f00e.jpg",
                "http://img1.qunarzz.com/travel/poi/1508/7d/9ba6ef4219e903.jpg_r_720x400x95_d97578bf.jpg",
                "http://img1.qunarzz.com/travel/poi/1508/1f/c901aab331a862.jpg_r_720x400x95_e28a1c5c.jpg"];

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

