class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  static sanitize(string){
    let alphabet ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\'- "
    let splitWord = string.split("")
    let cleanword = []
    for(let letter of splitWord){
      if(alphabet.includes(letter)){
        cleanword.push(letter)
      }else{
        console.log('nope')
      }
    }
    return cleanword.join("")
  }

  static titleize(string){

    function capitalize(string){
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    let singleWords = string.split(" ")
    let arrayOfWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "and", "from"]
    let finalSentence = []
  
    for(let word in singleWords){
     if(parseInt(word)===0){
      finalSentence.push(capitalize(singleWords[word]))
     }
     else if(arrayOfWords.includes(singleWords[word])){
     finalSentence.push(singleWords[word])
      }
      else{
        finalSentence.push(capitalize(singleWords[word]))
      }
    
  }
  return finalSentence.join(" ")
  }
  
}

// let test1 = "apple"
// let test2 = "the cat walks home a an of alone"
// function capitalize(string){
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

// function sanitize(string){
//   let alphabet ="abcdefghijklmnopqrstuvwxyz\"\'- "
//   let splitWord = string.split("")
//   let cleanword = []
//   for(let letter of splitWord){
//     if(alphabet.includes(letter)){
//       cleanword.push(letter)
//     }else{
//       console.log('nope')
//     }
//   }
//   return cleanword.join("")
// }

// function titleize(string){
//   let singleWords = string.split(" ")
//   let arrayOfWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "and", "from"]
//   let finalSentence = []

//   for(let word in singleWords){
//    if(parseInt(word)===0){
//     finalSentence.push(capitalize(singleWords[word]))
//    }
//    else if(arrayOfWords.includes(singleWords[word])){
//    finalSentence.push(singleWords[word])
//     }
//     else{
//       finalSentence.push(capitalize(singleWords[word]))
//     }
  
// }
// return finalSentence.join(" ")
// }



// console.log(titleize(test2))