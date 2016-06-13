'use strict';

describe('Service: DataHouse', function () {

  // load the service's module
  beforeEach(module('machineAppApp'));

  // instantiate service
  var DataHouse;
  beforeEach(inject(function (_DataHouse_) {
    DataHouse = _DataHouse_;
  }));

  it('should do something', function () {
    expect(!!DataHouse).toBe(true);
  });

});
