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
