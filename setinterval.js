
// no : 1

/* console.log('first');
setInterval(() => {
    console.log('mofu');
}, 2000)
console.log('second');
 */

// no : 2

console.log('first');
/* setInterval(() => {
    console.log('mofu');
}, 2000) */

let seconds = 0;

const timeId = setInterval(() => {
    // seconds ++;
    // console.log(seconds);
    // console.log(seconds++);
    console.log(++seconds);
    if( seconds > 5){
        clearInterval(timeId);
    }
},1000)

console.log('second');

