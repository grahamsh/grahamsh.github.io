var amBig = false;
//$("box2").css("visibility", "hidden");
function getBig(){
	//$(".box").css({"height": "100vh", "width": "100vw"});
	if (amBig){
		return
	}
	amBig = true
	$(".box").toggleClass("mybox");

	console.log("here")
	setTimeout(function(){
		console.log("here2");
		$(".box").hide();
		//$(".mybox2").fadeIn(500);
		$(".box2").show();
	}, 2000)
}
/* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
/* Open the sidenav */
function openNav2() {
    document.getElementById("mySidenav2").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav2() {
    document.getElementById("mySidenav2").style.width = "0";
}

/* Open the sidenav */
function openBottom() {
    document.getElementById("myBottomNav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeBottom() {
    document.getElementById("myBottomNav").style.width = "0";
}
/* Open the sidenav */
function openFeedback() {
    document.getElementById("feedback").style.width = "50%";
}

/* Close/hide the sidenav */
function closeFeedback() {
    document.getElementById("feedback").style.width = "0";
}
/* Open the sidenav */
function openWork() {
    var x = document.getElementById("work");
    if (x.style.display === "none"){
    	x.style.display = "block";
    }else{
    	x.style.display = "none";
    }
}
/* Open the sidenav */
function openProjects() {
    var x = document.getElementById("projects");
    if (x.style.display === "none"){
    	x.style.display = "block";
    }else{
    	x.style.display = "none";
    }
}
/* Open the sidenav */
function openProject() {
    var x = document.getElementById("projectDescription");
    if (x.style.display === "none"){
    	x.style.display = "block";
    }else{
    	x.style.display = "none";
    }
}
/* Open the sidenav */
function openProjectWork() {
    var x = document.getElementById("workDescription");
    if (x.style.display === "none"){
    	x.style.display = "block";
    }else{
    	x.style.display = "none";
    }
}
function openLinks() {
    var x = document.getElementById("links");
    if (x.style.display === "none"){
    	x.style.display = "block";
    }else{
    	x.style.display = "none";
    }
}
function openLink() {
	window.location.href='https://github.com/grahamsh/BlackJackGame','_blank';
}

function openPictures() {
    var x = document.getElementById("pictures");
    if (x.style.display === "none"){
    	x.style.display = "block";
    }else{
    	x.style.display = "none";
    }
}


function openTab(evt, tab){
	var i, tabcontent, tablinks;

	tabcontent = document.getElementsByClassName("tabcontent");
	for (i=0; i<tabcontent.length; i++){
		tabcontent[i].style.display = "none";
	}

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function changeImage(){
	var counter = 1
	if(counter == 0){
        document.getElementById("pictures").src = "Image/BlackJack1.png";
        counter=1;
    }
    else if(counter == 1){
        document.getElementById("pictures").src = "Image/BlackJack2.png";
        counter=0;
    }
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}


var slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot2");
  if (n > slides.length) {slideIndex2 = 1} 
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "block"; 
  dots[slideIndex2-1].className += " active";
}
