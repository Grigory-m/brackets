module.exports = function check(str, bracketsConfig) {
    if (str.length % 2) return false;
    let open = new Map();
    let close = new Map();
  
    for (let i = 0; i < bracketsConfig.length; i++) {
    open.set(bracketsConfig[i][0], i);
    close.set(bracketsConfig[i][1], i);
    }    
  
    let newS = '';
  
    for (let i = 0; i < str.length; i++) {
      newS = newS + str[i];
          
      for (let i = 1; i <= newS.length / 2; i++) {
  
        if ( open.has(newS[newS.length-2])) {
        
          if (open.get(newS[newS.length-2]) == close.get(newS[newS.length-1])) {
          newS = newS.slice(0, newS.length - 2);
          } 
        }
      }
    }
    return newS.length == 0 ? true : false;
}
