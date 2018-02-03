// howdy
function howdy() {
  return "Hello. This is my greeting."
};
howdy();
console.log(howdy())


// numba
var numba = function wordLength(string) {
  if (string.length < 7) {
      return "What a short little word!"
    }
    else if (string.length > 7) {
      return "I'm sorry, but that's too many to count."
    }
    else {
      return "7, what a perfect choice!"
    }
}
var string = '7';
numba(string);
console.log(numba(string));
var string = 'seventy';
numba(string);
console.log(numba(string));
var string = 'university';
numba(string);
console.log(numba(string))


//inception
function inception(display, favMovie) {
  display(favMovie);
}
function display(favMovie) {
  return favMovie + " is a fantastic movie."
}
var favMovie = "The Princess Bride";
display(favMovie);
inception(display, favMovie);
console.log(display(favMovie))
