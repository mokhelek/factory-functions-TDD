
describe(" Testing The Text-Bill Widget Factory Functions", function (){
    it( "Checking the set call amount", function (){
        let textBillFunction = textBill();
        
        assert.equal(2.75,textBillFunction.getCallCost())
    })
    it( "Checking the set SMS amount", function (){
        let textBillFunction = textBill();
        
        assert.equal(0.75,textBillFunction.getSMSCost())
    })
    it( "Checking the set warning level amount", function (){
        let textBillFunction = textBill();
        
        assert.equal(30.00,textBillFunction.getSWarningLevel())
    })
    it( "Checking the set critical level amount", function (){
        let textBillFunction = textBill();
        
        assert.equal(50.00,textBillFunction.getCriticalLevel())
    })
})

describe("Using The Set Values To Calculate The Text-Bill", function (){
    it("Calculate the total amount from 1 call", function (){
        let textBillFunction = textBill();
        textBillFunction.billType("call")

        assert.equal(2.75, textBillFunction.getTotalBillCost())
    })

    it("Calculate the total amount from 3 calls", function (){
        let textBillFunction = textBill();

        textBillFunction.billType("call")
        textBillFunction.billType("call")
        textBillFunction.billType("call")

        assert.equal(8.25, textBillFunction.getTotalBillCost())
    })

    it("Calculate the total amount from 1 sms", function (){
        let textBillFunction = textBill();
        
        textBillFunction.billType("sms")

        assert.equal(0.75, textBillFunction.getTotalBillCost())
    })

    it("Calculate the total amount from 3 sms", function (){
        let textBillFunction = textBill();
        
        textBillFunction.billType("sms");
        textBillFunction.billType("sms");
        textBillFunction.billType("sms");

        assert.equal(2.25, textBillFunction.getTotalBillCost())
    })

    it("Calculate the total amount for 3 sms and 2 calls", function (){
        let textBillFunction = textBill();
        
        textBillFunction.billType("sms");
        textBillFunction.billType("sms");
        textBillFunction.billType("call");
        textBillFunction.billType("sms");
        textBillFunction.billType("call");

        assert.equal(7.75, textBillFunction.getTotalBillCost())
    })

    it("Calculate the total amount for different casing and spacing of letters", function (){
        let textBillFunction = textBill();
        
        textBillFunction.billType("SMS");
        textBillFunction.billType("sms");
        textBillFunction.billType("cAll");
        textBillFunction.billType("sms ");
        textBillFunction.billType("call");

        assert.equal(7.75, textBillFunction.getTotalBillCost());
    })
})

describe("Testing The Warning & Critical Level For Calculate Text Widget", function (){
    it("It should return a class name of warning if warning level has been reached", function (){
        let textBillFunction = textBill();
        textBillFunction.billType("call");
        textBillFunction.billType("call");
        textBillFunction.billType("call");
        textBillFunction.billType("sms");
        textBillFunction.billType("call");
        textBillFunction.billType("call");
        textBillFunction.billType("sms");
        textBillFunction.billType("sms");
        textBillFunction.billType("call");
        textBillFunction.billType("sms");
        textBillFunction.billType("call");
        textBillFunction.billType("call");
        textBillFunction.billType("sms");
        textBillFunction.billType("call");
        textBillFunction.billType("sms");
        textBillFunction.billType("call");
        textBillFunction.billType("call");
        
        assert.equal("warning",textBillFunction.totalClassName());
    })

    it("It should return a class name of critical if critical level has been reached", function (){
        let textBillFunction = textBill();
      
        textBillFunction.billType("call");
        textBillFunction.billType("call");
        textBillFunction.billType("call");
        textBillFunction.billType("sms");
        textBillFunction.billType("call");
        textBillFunction.billType("call");
        textBillFunction.billType("sms");
        textBillFunction.billType("sms");
        textBillFunction.billType("call");
        textBillFunction.billType("sms");
        textBillFunction.billType("call");
        textBillFunction.billType("call");
        textBillFunction.billType("sms");
        textBillFunction.billType("call");
        textBillFunction.billType("sms");
        textBillFunction.billType("call");
        textBillFunction.billType("call");
        textBillFunction.billType("sms");
        textBillFunction.billType("call");
        textBillFunction.billType("call");
        textBillFunction.billType("sms");
        textBillFunction.billType("call");
        textBillFunction.billType("sms");
        textBillFunction.billType("call");
        textBillFunction.billType("call");
        
        assert.equal("critical",textBillFunction.totalClassName());
    })
})