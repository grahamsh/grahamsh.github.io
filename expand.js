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


// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
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
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// Open the Modal
function openModal2() {
  document.getElementById("myModal2").style.display = "block";
}

// Close the Modal
function closeModal2() {
  document.getElementById("myModal2").style.display = "none";
}

// Open the Modal
function openModal3() {
  document.getElementById("myModal3").style.display = "block";
}

// Close the Modal
function closeModal3() {
  document.getElementById("myModal3").style.display = "none";
}
