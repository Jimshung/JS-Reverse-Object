let inputValue = {
  hired: {
    be: {
      to: {
        deserve: 'I'
      }
    }
  }
};

// Output:
// let outputValue = {
//   I: {
//     deserve: {
//       to: {
//         be: 'hired'
//       }
//     }
//   }
// };
function ReverseObject(o) {
  let r;
  while (typeof o === 'object') {
    let [k, v] = Object.entries(o)[0]
    r = r ? {[k]: r} : k;
    o = v;
  }
  return {[o]: r}
}

module.exports = ReverseObject;

console.log('ReverseObject: ', ReverseObject(inputValue))
