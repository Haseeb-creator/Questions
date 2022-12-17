// array method start //

const array = [1, 2, 3];

const array2 = [4, 5, 6, ...array];
console.log(array2);

const mapArray = array.map((n) => n * 2);
console.log(mapArray);

const filterArray = array.filter((n) => n % 3);
console.log(filterArray);

// array method end //






// swap method start //

function ABC(obj) {
  let tmp = obj.a;
  obj.a = obj.b;
  obj.b = tmp;
}

let obj = {
  a: 10,
  b: 20,
};

console.log(` a = ${obj.a} b = ${obj.b}`);

ABC(obj);

console.log(` a = ${obj.a} b = ${obj.b}`);

// swap method end //







// array contain common number start //

function getCommon(arr1, arr2) {
  var common = []; // Array to contain common elements
  for (var i = 0; i < arr1.length; ++i) {
    for (var j = 0; j < arr2.length; ++j) {
      if (arr1[i] == arr2[j]) {
        // If element is in both the arrays
        common.push(arr1[i]); // Push to common array
      }
    }
  }

  return common; // Return the common elements
}

var arr1 = [1, 3, 5, 11, 10];
var arr2 = [3, 10, 15, 20];
// Get common elements of arr1, arr2
var commonElements = getCommon(arr1, arr2);
console.log(commonElements);

// array contain common number end //











// Linked List start //

const n1 = {
  data: 100,
};

const n2 = {
  data: 200,
};

n1.next = n2;

console.log(n2);

// Linked List end //








//anagram in javascript start //

function isAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return "Not A Anagram Because Length Is Not Same ";
  }

  let counter = {};
  for (let letter of string1) {
    counter[letter] = (counter[letter] || 0) + 1;
  }
  console.log(counter);

  for (let items of string2) {
    if (!counter[items]) {
      return "Not A Anagram because String2 Not Contain Same as String1 ";
    }
    counter[items] -= 1;
  }
  // console.log(counter[items])
  return "Is a Anagram";
}

const check = isAnagram("hello", "llheo");
console.log(check);

//anagram in javascript end //







// palindrome checker start //

function checkPalindrome(string) {
  let len = string.length;

  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return "Not A Palindrome";
    }
  }
  return "Is a Palindrome";
}

const check2 = checkPalindrome("121111");
console.log(check2);

// palindrome checker end //










//binary search start //

function searchAlog(array, num) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let midIndex = Math.floor((min + max) / 2);

    if (array[midIndex] < num) {
      min = midIndex + 1;
    } else if (array[midIndex] > num) {
      max = midIndex - 1;
    } else {
      return midIndex;
    }
  }
  return -1;
}

const check3 = searchAlog([1, 2, 3, 4, 5, 6, 7, 8], 1);
console.log(check3);

//binary search end //









// sum zero  start //

function findSumZero(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    sum = array[left] + array[right];
    if (sum == 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

const result = findSumZero([-5, -4, -3, -1, 0, 1, 3, 4, 8]);
console.log(result);

// sum zero  end //











//Unique Number start //

function countUnique(array) {
  if (array.length) {
    let i = 0;
    for (let j = 1; j < array.length; j++) {
      if (array[i] !== array[j]) {
        i++;
        array[i] = array[j];
      }
    }
    return i + 1;
  } else {
    throw new Error("Array is Empty");
  }
}

const result5 = countUnique([1, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8, 9, 9, 9]);
console.log(result5);

//Unique Number end //










//linear search start //

const users = [
  { username: "abc", email: "abc@gmail.com" },
  { username: "abc1", email: "abc1@gmail.com" },
  { username: "abc22", email: "abc22@gmail.com" },
];

function isUserExit(array, val) {
  for (let item of array) {
    if (item["username"] === val) {
      return true;
    }
  }
  return false;
}

const checker = isUserExit(users, "abc");
console.log(checker);

// linear search end //









// bubbleSort start //

function bubbleSort(array) {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

const res = bubbleSort([2, 3, 5, 6, 8, 1, 10, 9, 4]);
console.log(res);

// bubbleSort end  //







const point = [40, 50, 1, 5, 100, 15, 23]

const hello = point.sort((a, b) => a - b);

console.log(hello);


const arry = [2, 4, 3, 7]

const find = arry.length

console.log(find)