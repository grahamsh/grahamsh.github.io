
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
        document.getElementById("pictures").src = "Image/BlackJack2";
        counter=0;
    }
}

<script>
	setTimeout(function(){ 
		window.location.href="index.html";
		}, 5000);
</script>