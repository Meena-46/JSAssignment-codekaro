//Write a JavaScript function that takes two numbers as parameters and returns the larger one.

function largest(a, b) {
	if (a > b) {
		return a;
    }
	else if(a === b) {
        return 0;
    }
	else {
        return b;
    }
}

let largestNumber = largest(10, 50);

console.log("The largest Number is : " +largestNumber);