console.log('hello world');
console.log('hello world');
console.log('hello world');
console.log('hello world');
console.log('hello world');
console.clear();

const string = '김건호';
const string2 = '김지섭';
// console.log(typeof(string + string2));

const a = Math.max(1,2,3);
const b = [1,2,3].filter(v => v % 2);

const numberMax = [1,5,10,9,7,12];
const maxNum = Math.max(...numberMax);
const sortNum = numberMax.sort((a, b) => {
    return a - b;
})

console.log(sortNum);