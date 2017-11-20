/**
 * Created by gulzaman.khan on 20/11/2017.
 */
var assert = require('assert');
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-2, [1,2,3].indexOf(4));
        });
    });
});
