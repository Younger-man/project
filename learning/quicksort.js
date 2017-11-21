
/**
 * Created by Administrator on 2017/11/21.
 */
"use strict";
/*
 * @param  a arary
 * @param  b arary a 的起始下标
 * @param  c arary a 的结束下标
 *
 *
 */
var exchange = function(a,b,c){
    //todo 交换 a[b] 与 a[c] 的位置
    var num = a[b];
    a[b] = a[c];
    a[c] = num;
}


/*
* @param  a arary
* @param  p arary a 的起始下标
* @param  p arary a 的结束下标
*/
var getPartion = function(a,p,r){
    //todo 单次排序结果
    var x = a[r]; // 数组的最后一个元素为主元素
    var q = p -1 ;    //q 指向比主元素小的元素位置

    for(var i=p;i<r;i++){
        if(a[i]<a[r]||a[i]==a[r]){
            q++;
            exchange(a,i,q);
        }
    }
    exchange(a,r,q+1);

    return q+1;

}
/*
* @prama a : 需要排序的数组
* @prama p :数组的起始下标
* @prama r :数组的结束下标
*/
var quicksort = function (a,p,r){
    //todo 快速排序
    if(p<r){
        var q=getPartion(a,p,r);
        quicksort(a,p,q-1);
        quicksort(a,q+1,r);
    }

}


var array = [ 7,3 ,2,4,1,5, 8,0,11,9];

var arraylength = array.length;
quicksort(array,0,arraylength-1);
console.log(array);
