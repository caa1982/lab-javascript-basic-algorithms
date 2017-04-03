//print name of hacker1
var hacker1 = "juan";
console.log("The driver's name is: "+ hacker1);

//Prompt user for name
var hacker2 = prompt('Please inform the name of the navigator');

//Print name of hacker2
console.log("The navigator's name is: " + hacker2);

//Conditional print name + length
var capitalLetter = " ";
if (hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has "+ hacker1.length +" characters")
}
else if (hacker1.length < hacker2.length){
  console.log("The Navigator has the longest name, it has "+ hacker2.length +" characters")
}
else{
 console.log("wow, you both got equally long names, "+ hacker2.length +" characters!!")
}

//Loop upperCase and space
var reverse = " ";
for (var x in hacker1){
    capitalLetter += hacker1[x].toUpperCase() + " ";
}

console.log(capitalLetter)

//Loop and reverse letter of the name
for (var i = (hacker2.length -1); i>=0 ; i--){
    reverse += hacker2[i];
}

console.log(reverse)

//Compare 2 strings
if (hacker1 < hacker2){
  console.log("The driver's name go first")
}
else if (hacker1 > hacker2){
  console.log("Yo, the navigator name go first definitely")
}
else {
  console.log("What?! You both got the same name?")
}

//prompt for a new string
var str = prompt('please give us a new string');

function reverseString(str) {
  
  str = str.replace(/[\W_-]/g, '');
  
  var strArr = str.split("");
  strArr.reverse();

  var strRev = strArr.join("");
  
  if (str === strRev) {return "its a Palindrome"}
  else {return "its not a Palindrome"}
  
}

reverseString(str.toLowerCase());

//Define a string with words
var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec dapibus enim. Duis tincidunt eros sed justo facilisis, quis ornare metus venenatis. Sed eleifend odio sit amet urna euismod lacinia at vitae arcu. Nulla in tristique mauris. Vestibulum fermentum nibh dictum leo tristique, nec porttitor nibh finibus. Proin sit amet ante et diam aliquet bibendum. Curabitur facilisis pharetra lorem sed malesuada. Aliquam efficitur pretium lobortis. Nullam sagittis bibendum lorem sit amet porttitor. Quisque ex nulla, rhoncus sit amet tellus quis, lacinia aliquam diam. Fusce eleifend vehicula maximus. Ut efficitur nunc id sapien tincidunt sollicitudin. Mauris tincidunt massa id felis luctus cursus vel sit amet sem. Aliquam at tortor at ligula semper interdum nec ut nibh. Vestibulum eget fermentum mi. Duis mattis tellus non nisi tincidunt ornare. In ipsum nisi, pellentesque eget tortor eget, mattis fringilla massa. Aenean sed dolor risus. Etiam porta ac augue quis molestie. Vestibulum eget laoreet ipsum, dictum molestie augue. Aenean ultrices pretium quam id scelerisque. Proin eu hendrerit nisi. Curabitur sagittis lacinia arcu, in venenatis nulla. Vestibulum sapien orci, hendrerit ut felis at, blandit scelerisque purus. In hac habitasse platea dictumst. Nulla metus quam, porttitor vitae posuere vel, facilisis ut nibh. Quisque lacus velit, bibendum ac turpis id, porttitor rutrum urna. Aliquam a rhoncus lorem. Nunc vitae erat eu orci sagittis elementum maximus a nulla. Mauris quis mauris tortor. Maecenas porta libero imperdiet quam gravida, vel condimentum diam lacinia."

//count the number of words in str
console.log(str.split(" ").length)

//count number of time et appear in str
console.log(str.split('et').length-1)