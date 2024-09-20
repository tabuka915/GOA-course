function gimme (triplet) {
    const minNumber = Math.min(...triplet);
    const maxNumber = Math.max(...triplet);
    
    for(let i = 0; i < 3; i++){
      if(triplet[i] != minNumber && triplet[i] != maxNumber){
        return i
      }
    }
  }






  function solve(s){
    let uCount = 0;
    let lCount = 0;
    
    for(let i = 0; i < s.length; i++){
      if(s[i] === s[i].toUpperCase()){
        uCount++;
      } else {
        lCount++;
      }
    }
    
    if(lCount >= uCount) {
      return s.toLowerCase();
    } else {
      return s.toUpperCase();
    }
  }





  function removeDuplicateWords (s) {
    const words = s.split(" ");
    const result = [];
    
    for(let i = 0; i < words.length; i++){
      if(result.indexOf(words[i]) === -1){
        result.push(words[i]);
      }
    }
    
    return result.join(" ")
  }






