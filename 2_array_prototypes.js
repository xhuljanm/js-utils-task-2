const lastOfArrayEdited = (array) => {
    if (!Array.isArray(array)) return false; // It's not an array

   	Array.prototype.last = function() { 	 // Edit the .last() on every array.last() call
		if (this.length === 0) return -1;    // Return -1 if the array is empty
		return this[this.length - 1]; 		 // Return the last element
	};

    return array.last(); // Call the "last" method on the passed array
};


// Example 1
const nums1 = [null, {}, 3];
console.log(lastOfArrayEdited(nums1)); // Output: 3


// Example 2
const nums2 = [];
console.log(lastOfArrayEdited(nums2)); // Output: -1


// Example 3
const nums3 = [1, 2, 3, 4];
console.log(lastOfArrayEdited(nums3)); // Output: 4


// Example 4
const nums4 = ["a", "b", "c"];
console.log(lastOfArrayEdited(nums4)); // Output: c


// Example 5
const nums5 = 'test';
console.log(lastOfArrayEdited(nums5)); // Output: false