// put your test data in arr1 and arr2 below
// check the result in median.html
// unsorted arrays are also accepted !!!

let arr1 = [-1, 0, 1];
let arr2 = [-3, -2];

document.getElementById('median').innerHTML = calculateMedian(arr1, arr2);

function calculateMedian(firstArray, secondArray) {
	firstArray.sort((a, b) => a - b);
	secondArray.sort((a, b) => a - b);
	let len1 = firstArray.length;
	let len2 = secondArray.length;

	let i = 0;
	let j = 0;
	let count;
	let med1 = -1, med2 = -1;

	if ((len1 + len2) % 2 == 1) {
		// total number of items is an odd number
		for (count = 0; count <= (len1 + len2) / 2; count++) {
			if (i != len1 && j != len2) {
				med1 = (firstArray[i] > secondArray[j]) ?
					secondArray[j++] : firstArray[i++];
			} else if (i < len1) {
				med1 = firstArray[i++];
			} else {
				med1 = secondArray[j++];
			}
		}
		return med1;
	} else {
		// total number of items is an even number
		for (count = 0; count <= (len1 + len2) / 2; count++) {
			med2 = med1;
			if (i != len1 && j != len2) {
				med1 = (firstArray[i] > secondArray[j]) ?
					secondArray[j++] : firstArray[i++];
			} else if (i < len1) {
				med1 = firstArray[i++];
			} else {
				med1 = secondArray[j++];
			}
		}
		return (med1 + med2) / 2;
	}
}
