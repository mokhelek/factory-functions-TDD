

describe("Testing The Calculate-Bill Widget Factory Functions", function () {

    it("It should set the CALL cost", function () {
        let calculateBillFunction = calculateBill()  ;
       
        calculateBillFunction.setCallCost(2.00);
       
        assert.equal(2, calculateBillFunction.getCallCost(2.00) );
    });

    it("It should set the SMS cost", function () {
        let calculateBillFunction = calculateBill()  ;
       
        calculateBillFunction.setSMSCost(0.80);
       
        assert.equal(0.80, calculateBillFunction.getSMSCost(0.80) );
    });

    it("It should set Both SMS & Call cost", function () {
        let calculateBillFunction = calculateBill()  ;
       
        calculateBillFunction.setCallCost(1.80);
        calculateBillFunction.setSMSCost(0.80);
       
        assert.equal(0.80, calculateBillFunction.getSMSCost() );
        assert.equal(1.80, calculateBillFunction.getCallCost() );
    });

});

describe("Using Set Values For The Calculate-Bill Widget", function () {

    it("It should return the correct total bill amount for 2 CALLS & 0 SMS ", function () {
        let calculateBillFunction = calculateBill()  ;
       
        calculateBillFunction.setCallCost(2.00);
        calculateBillFunction.calculateTotal("call,call")
       
        assert.equal(4, calculateBillFunction.getTotalBillCost() );
    });

    it("It should return the correct total bill amount for 2 CALLS & 3 SMS ", function () {
        let calculateBillFunction = calculateBill()  ;
       
        calculateBillFunction.setCallCost(2.00);
        calculateBillFunction.setSMSCost(1.00);
        calculateBillFunction.calculateTotal("call,call,sms,sms,sms")
       
        assert.equal(7, calculateBillFunction.getTotalBillCost() );
    });
    it("It should return the correct total bill amount for 2 CALLS & 2 SMS with different casing ", function () {
        let calculateBillFunction = calculateBill()  ;
       
        calculateBillFunction.setCallCost(2.00);
        calculateBillFunction.setSMSCost(1.00);
        calculateBillFunction.calculateTotal("CALL,call,smS,sms,")
       
        assert.equal(6, calculateBillFunction.getTotalBillCost() );
    });

});

describe("Testing The Warning & Critical Level for Calculate Bill Widget", function () {
    
    it("It should return the amount of the warning level", function () {
        let calculateBillFunction = calculateBill()  ;
        assert.equal(20.00, calculateBillFunction.getWarningLevel());
    });

    it("It should return the amount of the critical level", function () {
        let calculateBillFunction = calculateBill()  ;
       
        assert.equal(30.00, calculateBillFunction.getCriticalLevel());
    });

    it("It should return a class name of warning if warning level has been reached", function () {
        let calculateBillFunction = calculateBill()  ;
        calculateBillFunction.setCallCost(5);
        calculateBillFunction.setSMSCost(3);
        calculateBillFunction.calculateTotal("call,call,call,call,sms")

        assert.equal(20.00, calculateBillFunction.getWarningLevel());
        assert.equal("warning", calculateBillFunction.totalClassName());

    });
    it("It should return a class name of critical if critical level has been reached", function () {
        let calculateBillFunction = calculateBill()  ;
        calculateBillFunction.setCallCost(5);
        calculateBillFunction.setSMSCost(3);
        calculateBillFunction.calculateTotal("call,call,call,call,sms,sms,sms,call,call")

        assert.equal(30.00, calculateBillFunction.getCriticalLevel());
        assert.equal("critical", calculateBillFunction.totalClassName());

    });



});
