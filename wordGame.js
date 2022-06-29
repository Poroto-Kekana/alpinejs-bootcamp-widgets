function longestWord (sentence) {
    var arr = sentence.split(' ');
    var sum = 0;
    var storelong = ''
    for ( var i = 0; i < arr.length; i++) {
      let word = arr[i];
      if (word.length >= sum) {
        sum = word.length
        storelong = word
      }
    }
    return storelong
}

function shortestWord (sentence) {
  var arr = sentence.split(' ');
  var sum = 10;
  var storeShort = ''
  for ( var i = 0; i < arr.length; i++) {
    let word = arr[i];
    if (word.length <= sum) {
      sum = word.length
      storeShort = word
    }
  }
  return storeShort
}

function wordLengths(sentence) {
  var arr = sentence.split(' ');
  var sum = 0;
  //var storeShort = ''
  var myarr = arr.map(w => w.length)
  for ( var i = 0; i < myarr.length; i++) {
    //let word = arr[i];
    //if (word.length = sum) {
      //sum = word.length
      //storeShort = word
      sum = sum + myarr[i]
    }
  return sum
  }
  //console.log(word.split(' ').map(e => e.length))
  