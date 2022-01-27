var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100
//var sum1=0
for (var i = 0; i <numsArr.length; i++) {
 if(numsArr[i]%2==0)
 {
 sum += numsArr[i]
//console.log(sum)
 }
 else
 {
 sum -= numsArr[i]
 //console.log(sum)
 }
}
console.log(sum);
//console.log(sum1)