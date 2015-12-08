
function selectCourseScaling() {
	var logoScale = 0.3;
	var margin = 0.02;
	var radiusScale = 0.035;
	var courseScale = 0.13;

	scaleElements("archimedesLogo", "height", logoScale);
	scaleElements("archimedesLogo", "margin-top", margin);
	scaleElements("archimedesLogo", "border-radius", radiusScale);
	scaleElements("c1", "height", courseScale);
	scaleElements("c1", "margin-top", margin);
	scaleElements("c2", "height", courseScale);
	scaleElements("c2", "margin-top", margin);
	scaleElements("c3", "height", courseScale);
	scaleElements("c3", "margin-top", margin);
	scaleElements("c4", "height", courseScale);
	scaleElements("c4", "margin-top", margin);
}

/*Scale the element, based on id, of a webpage when the browser is resized*/
function scaleElements(id, style, percent) {
	var ht = window.innerHeight 
			 || document.documentElement.clientHeight 
			 || document.body.clientHeight;
			 
	var scale = ht * percent;  /*Calculate a percentage of the screen's height*/
	document.getElementById(id).style[style] = scale;  /*Set the element's height to the new size*/
}

window.onload = selectCourseScaling;
window.onresize = selectCourseScaling;
