(function () {
    'use strict';

    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function () {
                expect(window.hasOwnProperty('qc')).toBe(true);
            });
            it('should run forAll', function () {
                expect(function(i) { 
                    expect(i + i).toBe(2 * i);
                  }).forAll(qc.int);
            });
        });
    });
})();
