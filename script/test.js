// module pattern // iife
(() => {
  // put variables (connections to the web page/DOM) at the top
  const puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
        dropZoneContainer = document.querySelector(".puzzle-board");
  // functions go in the middle // this function runs when the bottom nav button are clicked // it changes the bg image of the drop zone div using style property
  function changeBGImage() { debugger; }

  // event handling at the bottom
  puzzleSelectors.forEach(button => button.addEventListener("click", changeBGImage));
})(); 
