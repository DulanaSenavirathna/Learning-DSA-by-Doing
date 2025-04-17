// utils/testRunner.js

import findMax from './1-findMax.js'

console.log('🧪 Testing Day 01');

function testFindMax() {
  console.log('✅ findMax Tests:');

  console.log(findMax([3, 7, 2, 9, 5]) === 9 ? '✔ Pass' : '❌ Fail');
  console.log(findMax([]) === null ? '✔ Pass' : '❌ Fail');
  console.log(findMax([-5, -1, -8]) === -1 ? '✔ Pass' : '❌ Fail');
  console.log(findMax([10]) === 10 ? '✔ Pass' : '❌ Fail');
}

testFindMax();
