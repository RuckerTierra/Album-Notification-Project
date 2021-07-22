/* PROJECT: when you click on an album and press the save button, the album choices will be 'saved' 
// Step 1: click on album
// Step 2: show user that they selected the album (by highlighting/outlining) the selection
// Step 3: add clicked item(s) to the albumArray
// Step 4: once SAVE button is clicked; confirm 'download' and number of items saved/downloaded
*/


/* ELEMENTS */
var notify = document.querySelector('.notify');
var albums = document.querySelectorAll('.album');
var itemTotal = document.querySelector('#itemTotal');
var saveBtn = document.querySelector('#saveBtn');
var albumSelected = [];


/* FUNCTIONS
// selected album function */
var i = 0;
// while (i < albums.length){
//   albums[i].onclick = function(event){
//   console.log("album clicked");
//   }
// }

while (i < albums.length){
  albums[i].onclick = function(event){
    // console.log("clicked on the " + albumTitle + " album");
    console.log(albumSelected);
    var albumTitle = this.querySelector(".albumTitle").textContent;
    if (this.classList.contains('selected') !== true){
      this.classList.add("selected");
      albumSelected.push(albumTitle);
    } else {
      this.classList.remove('selected');
      albumSelected = albumSelected.filter(function(item){
        return item !== albumTitle;
      })
    }
  }
  // console.log(i)
  console.log(albumSelected);
  i++
}

// for (i = 0; i < albums.length; i++){
//   albums[i].onclick = function(event){
//     var albumTitle = this.querySelector(".albumTitle").textContent;
//     // console.log("clicked on the " + albumTitle + " album");
//     albumSelected.push(albumTitle);
//     console.log(albumSelected);
//   }
// }

/* saved album(s) function */
// saveBtn.onclick = function(){
//   itemTotal.textContent = albumSelected.length + 1;
//   notify.classList.add('notify');
//   console.log('save button clicked');
// }

function myFunction() {
  var x = document.getElementById("notificationModalDiv");
  itemTotal.textContent = (albumSelected.length) + " total item saved";
  x.style.display = "block";
  
  
  setTimeout(function(){
    x.style.display = "none";
  }, 2000);
}
