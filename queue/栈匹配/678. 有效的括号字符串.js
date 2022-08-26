/**
 * @param {string} s
 * @return {boolean}
 */
const checkValidString = function (s) {
  const length = s.length
  let stack = []
  let stars = []
  for (let i = 0; i < length; i++) {
    if (s[i] === '(') {
      stack.push(i)
    } else if (s[i] === '*') {
      stars.push(i)
    } else {
      if (stack.length) {
        stack.pop()
      } else if (stars) {
          stars.pop()
        }else {
          return false
        }

    }
  }

  while (stack && stars) {
    if (stack.pop() > stars.pop()) {
      return false
    }
  }

  return !!stars.length

};

let aaa = '((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()'
let s = "(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())"
console.log(checkValidString(s))
let s2 = "(((((()*)(*)*))())())(()())())))((**)))))(()())()"
let s3 = "(((((()*)(*)*))())())(()())())))((**)))))(()())()"
console.log(checkValidString(s2))

/*
* var checkValidString = function(s) {
    const leftStack = [];
    const asteriskStack = [];
    const n = s.length;
    for (let i = 0; i < n; i++) {
        const c = s[i];
        if (c === '(') {
            leftStack.push(i);
        } else if (c === '*') {
            asteriskStack.push(i);
        } else {
            if (leftStack.length) {
                leftStack.pop();
            } else if (asteriskStack.length) {
                asteriskStack.pop();
            } else {
                return false;
            }
        }
    }
    while (leftStack.length && asteriskStack.length) {
        const leftIndex = leftStack.pop();
        const asteriskIndex = asteriskStack.pop();
        if (leftIndex > asteriskIndex) {
            return false;
        }
    }
    return leftStack.length === 0;
};

*/
