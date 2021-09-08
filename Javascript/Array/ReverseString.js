function reverse(str) {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'hmm that not good';
  }
  //   let newString = '';

  //   for (let i = str.length - 1; i > 0; i--) {
  //     newString = newString + str[i];
  //   }
  //   return newString;

//   const backWard = [];
//   const totalItem = str.length - 1;
//   for (let i = totalItem; i >= 0; i--) {
//     backWard.push(str[i]);
//   }

  return str.split('').reverse().join('');
}

console.log(reverse('Nguyen'));
