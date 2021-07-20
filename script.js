/* Project: when you click on an album and press the save button, the album choices will be 'saved' */
// Step 1: click on album
// Step 2: show user that they selected the album (by highlighting (outlining) the selection)
// Step 3: add clicked item to the albumArray
// Step 4: once SAVE button is clicked; confirm 'download' and number of items saved/downloaded
// Step 5: 


// elements 
albumArray = [];
tarzanEl = document.getElementById("#tarzanAlbumDiv");
ravenEl = document.getElementById("tsrAlbumDiv");
hannahEl = document.getElementById("hmAlbumDiv");
hsmEl = document.getElementById("hsmAlbumDiv");


// FUNCTIONS
  //album clicked function
function albumClicked() {
  console.log("the album has been clicked");
}
  // saved album function
function saveAlbumButton(){
  console.log("the save button was clicked");
}
  // selected album toggle function
function selectedAlbum() {
  var albumEl = document.querySelector("albumDiv");
  albumEl.classList.toggle(".selected");
}
