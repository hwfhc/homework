var expect = require('chai').expect;

const selectSort = require('../src/selectSort');

describe('selectSort',function(){

    it('test 1',function(){
        var result = selectSort([
            1,2,1,6,7,-1
        ]);

        expect(result.length).to.be.equal(6);
        expect(result).to.be.a('array');

        expect(result[0]).to.be.equal(-1);
        expect(result[1]).to.be.equal(1);
        expect(result[2]).to.be.equal(1);
        expect(result[3]).to.be.equal(2);
        expect(result[4]).to.be.equal(6);
        expect(result[5]).to.be.equal(7);
    });

});
