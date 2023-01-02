module.exports = function check(str, bracketsConfig) {
  // your solution

  const OPEN_BRACKETS = bracketsConfig.map(item => item[0]);
  const CLOSE_BRACKETS = bracketsConfig.map(item => item[1]);

  console.log(OPEN_BRACKETS);
  console.log(CLOSE_BRACKETS);


  const stack = [];

  for (let i = 0; i < str.length; i++) {
    let current = str[i];

    if(OPEN_BRACKETS.includes(current)) {
      stack.push(current);
    } else {
      if(stack.length === 0) {
        return false;
      } else {
        let index = CLOSE_BRACKETS.indexOf(current);
        if(stack[stack.length -1] === OPEN_BRACKETS[index]) {
          stack.pop();
        } else {
          return false;
        }
      }

    }



  }



  return stack.length === 0;


}


