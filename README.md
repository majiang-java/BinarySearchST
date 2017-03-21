[![Build Status](https://travis-ci.org/majiang-java/BinarySearchST.png)](https://travis-ci.org/majiang-java/BinarySearchST)
## BinarySearchST
基于二分查找的有序表，在做topK算法的给力实现
> 通过javascript实现，这个表是整个体系的一部分，所有复杂的结构都是基于这个数据结构实现.理论上要比一般顺序表做查询是无序数组的1/4

最坏查找时间为lgN ,插入为2N， 平均成本查找lgN 插入为N

## quickly to start

git clone 

npm test

直接调用
```  
var bst = new BinarySearchST();
		
for(var i = 0 ; i <1000; i++){
	bst.put(i,i);
}

console.log(bst.get(888)); //测试
console.log(bst.del(666));
console.log(bst.get(666));
console.log(bst.get(888));
```


