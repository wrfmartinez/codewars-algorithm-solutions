function disemvowel(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      const lowercasedStr = str[i].toLowerCase();
        if (lowercasedStr !== "a" && 
          lowercasedStr !== "e" && 
          lowercasedStr !== "i" && 
          lowercasedStr !== "o" && 
          lowercasedStr !== "u") {
           newStr += str[i];
        }
    }
    return newStr;
}