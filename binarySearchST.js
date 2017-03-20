/**
 * Author: vincent
 * license: GBL-3.0
 * 基于二分查找的有序符号表
 */

	'use strict'
	 function BinarySearchST(compare,capactity) {

		
	   this.keys = capactity?new Array(capactity) :[],
	   this.values = capactity?new Array(capactity): [],
	   this.N = 0,

		
		this.compare = compare || function(key1,key2){
			if(key1 == key2)      return 0;
			else if (key1 < key2) return -1;
			else                  return 1;
		}
		
		
		this.size = function (){
			return this.N;
		},

		this.get = function(key){
			if(this.isEmpty())                                     return null;
			var i = this.rank(key);
			if(i < this.N && this.compare(this.keys[i], key) == 0) return this.values[i];
			else                                                   return null;
		},

		this.isEmpty = function(){
			return this.N ===0;
		},
		
		this.rank = function(key){
			var lo = 0,hi = this.N-1;
			while(lo <= hi){
				var mid = parseInt(lo + (hi - lo ) /2);
				var cmp = this.compare(key, this.keys[mid]);
				if(cmp < 0) hi = mid - 1;
				else if(cmp > 0) lo = mid + 1;
				else return parseInt(mid);
			}
			return parseInt(lo);
		},

		this.put = function(key, value){
			//查找键，找到则更新键，否则创建新元素
			var i = this.rank(key);
			if(i < this.N && this.compare(this.keys[i], key) == 0){
				this.values[i] = value; return;
			}
			for(var j = this.N; j > i ; j--){
				this.keys[j] = this.keys[j - 1]; this.values[j] = this.values[j - 1];
			}
			this.keys[i] = key; this.values[i] = value;
			this.N++;
		},
		this.min = function(){
			return keys[0];
		},
		this.max = function(){
			return keys[N-1]
		},

		this.select = function(k){
			return this.keys[k];
		},

		this.ceiling = function(key){
			var i = rank(key);
			return this.keys[i];
		},

		this.delete = function(key){
			var i = rank(key);
			for(var j = this.N; j > i ; j --){
				this.keys[j-1] = this.keys[j]; this.values[j-1] = this.values[j];
			}
			this.keys[i] = null; this.values[i] = null;
			N--;
		},

		this.floor = function(key){
			var i = rank(key);
			return this.keys[i-1];
		}

	}