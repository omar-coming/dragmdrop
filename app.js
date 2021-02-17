// module pattern
// iife

(() => {
	// put variables (connections to the web page / DOM) at the top
	// constant -> something that will never change / can't be redefined
	const puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
				dropZoneContainer = document.querySelector(".puzzle-board"),
				dragImages = document.querySelectorAll(".puzzle-image"),
				dropZones = document.querySelectorAll(".drop-zone");

	// functions go in the middle
	function dragStart() {
		console.log('started draggin');
		// be able to drag an item and log when its dragged
		event.dataTransfer.setData("savedID", this.id);
		// refer to event,
	}

	function draggedOver(event) {
		event.preventDefault();
		console.log('dragged over me');
		// prevent default behaviour to allow an element to be dragged over
	}

	function dropped(event) {
		event.preventDefault();
		console.log('dropped somethin on me');

		//check to see if there's an elemnt here already (if an image has been dropped in this zone)

		if(this.childElementCount > 0) {
			alert("Invalid Placement Fuckface");	
			return;
		} // this is how you "exit" the if statement 
		let targetID = event.dataTransfer.getData("savedID");
		console.log("I dragged this image: ", targetID);
		// prevent default to drag image into this container

		event.target.appendChild(document.querySelector(`#${targetID}`));
	}

	// this function runs when the bottom nav buttons are clicked
	// it changes the bg image of the drop zone div using the style property
	function changeBGImage() {
		// get the custom data attribute from the clicked button
		let currentImage = this.dataset.imageref;

		// `` is NOT a quote. it's a JavaScript template string
		dropZoneContainer.style.backgroundImage = `url(images/backGround${currentImage}.jpg)`;


		// this is an intermediate way to do the same something
		// dropZoneContainer.style.backgroundImage = `url(images/backGround${this.dataset.imageref}.jpg)`;
		// debugger;
	}

	// event handling at the bottom
	puzzleSelectors.forEach(button => button.addEventListener("click", changeBGImage));
	dragImages.forEach(piece => piece.addEventListener("dragstart", dragStart));
	
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", draggedOver);
		zone.addEventListener("drop", dropped);
	})

	// emulate a click on the first bottom button and run the bg image function
	changeBGImage.call(puzzleSelectors[0]);

	debugger;
})();
