var numsArr = [[1,2,3,4,5],[ 6,7,8,9,10,11]];
var str_all="";
for (var i = 0; i < numsArr.length; i++) {
 //var inner_array = numsArr[i];
 //console.log(numsArr[i])
 for(var j = 0 ; j <numsArr[i].length;j++ )
     str_all=str_all+numsArr[i][j]
}
console.log(str_all);