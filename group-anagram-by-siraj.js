 function sortText(text) {
   return text.replace(/ /g, '').split('').sort().join('');
 }

 (function groupAnagrams(array) {
   const result = [];
   const sortedArray = [];
   const getOnlyUnique = [];

   for (val of array) {
     sortedArray.push(sortText(val));
   }
   for (val of sortedArray) {
     if (!getOnlyUnique.includes(val)) {
       getOnlyUnique.push(val);
     }
   }

   getOnlyUnique.forEach(unique => {
     let temp = array.filter(val => unique === sortText(val));
     result.push(temp);
   });

   console.log('grouped anagrams', result);
 })(
   ['rope', 'red rum', 'silent', 'murder', 'pore', 'endeavour', 'listen', 'jaris', 'repo', 'siraj']
 );
