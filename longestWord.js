function longestWord(string) {
  string = string.replace(/[^a-zA-Z0-9 ]/g, '');
  
  var str = string.split(" ");
  var longest = 0;
  var word = "";
  var res = "The quick brown&&!! fox";


  for (var i = 0; i < str.length; i++) {
      if (longest < str[i].length) {
          longest = str[i].length;
          word = str[i];
      }
  }
  return word;
}
// console.log(string.match(/[a-zA-Z0-9]/g, ''));


module.exports = longestWord;



