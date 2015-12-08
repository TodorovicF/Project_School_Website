/*Scale the element, based on id, of a webpage when the browser is resized*/
function scaleElements(id, style, percent, orient) {
	var scale = 0;
	var dec = percent/100;
	
	if (orient == "height") {
		var ht = window.innerHeight 
			 || document.documentElement.clientHeight 
			 || document.body.clientHeight;
		scale = ht * dec;  /*Calculate a percentage of the screen's height*/
	}
	if (orient == "width") {
		var wd = window.innerWidth 
			 || document.documentElement.clientWidth
			 || document.body.clientWidth;
		scale = wd * dec;  /*Calculate a percentage of the screen's width*/
	}
	
	document.getElementById(id).style[style] = scale;  /*Set the element's height to the new size*/
}

function resizeTop() {
    var buttonHeight = 4;
    var radiusScale = 3.5;

    scaleElements("backButton", "height", buttonHeight, "height");
    scaleElements("loadButton", "height", buttonHeight, "height");
    scaleElements("showmeButton", "height", buttonHeight, "height");
    scaleElements("browserImg", "height", buttonHeight, "height");
    scaleElements("saveButton", "height", buttonHeight, "height");

    scaleElements("backButton", "width", buttonHeight, "height");
    scaleElements("loadButton", "width", buttonHeight, "height");
    scaleElements("showmeButton", "width", buttonHeight, "height");
    scaleElements("browserImg", "width", buttonHeight, "height");
    scaleElements("saveButton", "width", buttonHeight, "height");

    scaleElements("backText", "height", buttonHeight, "height");
    scaleElements("loadText", "height", buttonHeight, "height");
    scaleElements("showmeText", "height", buttonHeight, "height");
    scaleElements("browserText", "height", buttonHeight, "height");
    scaleElements("saveText", "height", buttonHeight, "height");
	
    scaleElements("logoImg", "width", 18, "height");
    scaleElements("logoImg", "border-radius", radiusScale, "height");
}

function resizeBottom() {
	scaleElements("codeContainer", "height", 75, "height");
	scaleElements("outputContainer", "height", 75, "height");
	scaleElements("codeContainer", "width", 45, "width");
	scaleElements("outputContainer", "width", 45, "width");
}

function resizeAll() {
	resizeTop();
	resizeBottom();
}

window.onload = resizeAll();

function openLogin() {
    if (document.getElementById("loginForm").style["visibility"] == "hidden") {
        document.getElementById("loginForm").style["visibility"] = "visible";
    }
    else document.getElementById("loginForm").style["visibility"] = "hidden";
}

function openInNewWindow() {
    var newWindow = window.open('', '_blank');
    var editorHTML = editor.getValue();
    newWindow.document.write(editorHTML);
}

function openIframe() {
    var editorHTML = editor.getValue();
    var iframe = document.getElementById('outputIframe');
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(editorHTML);
    iframe.contentWindow.document.close();
}
