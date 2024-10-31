const merge = (nums1, m, nums2, n) => {
    let i = m - 1; // last element index in nums1
    let j = n - 1; // last element index in nums2
    let k = m + n - 1; // last index in nums1 (after merging)

    while (i >= 0 && j >= 0) { // merge the arrays from the back
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

	while (j >= 0) {
		nums1[k] = nums2[j];
		j--;
		k--;
	}
};

// Example
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 1;
let nums2 = [2, 5, 6];
let n = 0;

merge(nums1, m, nums2, n);
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]