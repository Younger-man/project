
/**
 * Created by Administrator on 2017/11/21.
 */
"use strict";
/*
 * @param  a arary
 * @param  b arary a ����ʼ�±�
 * @param  c arary a �Ľ����±�
 *
 * */
var exchange = function(a,b,c){
    //todo ���� a[b] �� a[c] ��λ��
    var num = a[b];
    a[b] = a[c];
    a[c] = num;
}


/*
* @param  a arary
* @param  p arary a ����ʼ�±�
* @param  p arary a �Ľ����±�
* */
var partion = function(a,p,r){
    //todo ����������
    var x = a[r]; // ��������һ��Ԫ��Ϊ��Ԫ��
    var q = p -1 ;    //q ָ�����Ԫ��С��Ԫ��λ��

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
* @prama a : ��Ҫ���������
* @prama p :�������ʼ�±�
* @prama r :����Ľ����±�
* */
var quicksort = function (a,p,r){
    //todo ��������
    if(p<r){
        var q=partion(a,p,r);
        quicksort(a,p,q-1);
        quicksort(a,q+1,r);
    }

}


var array = [ 7,3 ,2,4,1,5, 8,0,11,9];

var arraylength = array.length;
quicksort(array,0,arraylength-1);
console.log(array);