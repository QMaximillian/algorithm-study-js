//BINARY SEARCH -
// If the targetValue is in the array it will return
// If it is not in the array, the function will return -1

let binarySearch(array, targetValue) {
	let min = 0;
	let max = array.length - 1;
    let guess = Math.floor((min + max) / 2)



   	 	while (array[guess] !== targetValue && min < max) {
        	if (targetValue < array[guess]) {
         	   max = guess - 1
        	} else {
        	    min = guess + 1
       	 	}
          guess = Math.floor((min + max) / 2)
      }

	return (array[guess] !== targetValue) ? -1 : array[guess]
}
