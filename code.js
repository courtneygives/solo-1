
// Iterate through the stringList and produce the following output: "Months listed are March, April, May".
var stringList = ["March", "April", "May"];

var str1 = "Months listed are ";

for (var i = 0; i < stringList.length; i++){
  var str2 = stringList.join(", ");

};
console.log(str1 + str2 + ".");

// Console log the last element in numList using .length to get the index.
// Iterate through numList, output all numbers as single String
// Iterate through numList and add all of the elements together and console log the total.
var numList = [13, 78, 34];
var eString = "";
var eNumber = 0;
console.log(numList[numList.length - 1]);
for (var j = 0; j < numList.length; j++){
  eString += numList[j];
  eNumber += numList[j];
}
console.log(eString);
console.log(eNumber);

// If the second element in boolList is true, add the first and last elements in numList. Otherwise multiply the second element in numList by itself. Console log the output.
// Iterate through boolList, if the value is true console log the equivelent index in numList.
var boolList = [false, true, false];

if (boolList[1] == true) {
  console.log(numList[numList.length - 1] + numList[0]);
} else {
  console(numList[1] * numList[1]);
}

for (var k = 0; k < boolList.length; k++){

if (boolList[k] == true){
  console.log(numList[k]);
}

}
