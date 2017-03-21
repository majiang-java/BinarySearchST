/*
Copyright [2017] [majiang <361130927@qq.com>]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

var expect = require('chai').expect,
	BinarySearchST = require('../binarySearchST.js').BinarySearchST,
	bst;

describe('bst',function(){
	  beforeEach(function() {
		 bst = new BinarySearchST();
	  });

	  describe('bst.del()',function(){

	
		   it('should del', function() {
				bst.put(1, 1);
				bst.del(1);
				expect(bst.get(1)).to.be.null;
			});

	   });
	    describe('bst.get()',function(){

	
		   it('should detect types accurately', function() {

				bst.put(1, 1);
				console.log(bst.get(1))
				//expect(bst.get(1)).to.be.1;
			});

	   });

	   describe('bst.clear()', function() {
			it('should do nothing when empty', function() {
				bst.put(1,1);
				bst.clear();
				expect(bst.size()).to.equal(0);
			});
	   });
	 
});
