const toggleSidebar = document.querySelector(".sidebar .sidebar-top .sidebar-right .toggle");
toggleSidebar.addEventListener("click", function() {
	document.querySelector(".sidebar .sidebar-bottom").classList.toggle("display-none");
	document.querySelector("nav.sidebar .sidebar-top .sidebar-right .toggle").classList.toggle("change");
});

const showLyricBtn = document.querySelector("#content article.card-mediaplayer .mediaplayer .show-lyric button");
showLyricBtn.addEventListener("click", function() {
	document.querySelector("#content article.card-mediaplayer .lyric").style.display = "block";
	showLyricBtn.style.display = "none";
})

const hideLyricBtn = document.querySelector("#content article.card-mediaplayer .lyric button");
hideLyricBtn.addEventListener("click", function() {
	document.querySelector("#content article.card-mediaplayer .lyric").style.display = "none";
	showLyricBtn.style.removeProperty("display");
})