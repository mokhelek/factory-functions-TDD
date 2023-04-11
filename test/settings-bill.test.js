describe("Testing Factory-Functions on Settings-Bill Widget", function () {
    it("should be able to set the call cost", function () {
        let settingsBill = billSettings();


        settingsBill.setCallCosts(2.85);
        settingsBill.setWarningLevel(10);
        settingsBill.setCriticalLevel(20);


        assert.equal(2.85, settingsBill.getCallCosts());


        settingsBill.setCallCosts(3.75);


        assert.equal(3.75, settingsBill.getCallCosts());
    });

    it("should be able to set the sms cost", function () {
        let settingsBill = billSettings();


        settingsBill.setWarningLevel(10);
        settingsBill.setCriticalLevel(20);
        settingsBill.setSmsCosts(0.85);


        assert.equal(0.85, settingsBill.getSmsCosts());

     
        settingsBill.setSmsCosts(0.75);


        assert.equal(0.75, settingsBill.getSmsCosts());
    });

    it("should be able to set both the sms and the call cost", function () {
        let settingsBill = billSettings();


        settingsBill.setWarningLevel(10);
        settingsBill.setCriticalLevel(20);
        settingsBill.setSmsCosts(0.75);
        settingsBill.setCallCosts(2.85);


        assert.equal(0.75, settingsBill.getSmsCosts());
        assert.equal(2.85, settingsBill.getCallCosts());

      
        settingsBill.setSmsCosts(0.55);
        settingsBill.setCallCosts(3.85);


        assert.equal(0.55, settingsBill.getSmsCosts());
        assert.equal(3.85, settingsBill.getCallCosts());
    });

    it("should be able to set warning level", function () {
        let settingsBill = billSettings();


        settingsBill.setWarningLevel(20);


        assert.equal(20, settingsBill.getWarningLevel());
    });

    it("should be able to set critical level", function () {
        let settingsBill = billSettings();


        settingsBill.setCriticalLevel(45);


        assert.equal(45, settingsBill.getCriticalLevel());
    });

    it("should be able to set critical and warning level", function () {
        let settingsBill = billSettings();


        settingsBill.setWarningLevel(40);
        settingsBill.setCriticalLevel(60);


        assert.equal(40, settingsBill.getWarningLevel());
        assert.equal(60, settingsBill.getCriticalLevel());
    });

    it("should be able to set critical and warning level (2) ", function () {
        let settingsBill = billSettings();


        settingsBill.setWarningLevel(20);
        settingsBill.setCriticalLevel(40);


        assert.equal(20, settingsBill.getWarningLevel());
        assert.equal(40, settingsBill.getCriticalLevel());
    });
});

describe("Using Set Values For Settings-Bill Widget", function () {
    it("should be able to make 4 calls at R2.25 each", function () {
        let settingsBill = billSettings();


        settingsBill.setCriticalLevel(20);
        settingsBill.setCallCosts(2.25);
        settingsBill.setSmsCosts(0.85);


        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();


        assert.equal(9, settingsBill.getTotalCost());
        assert.equal(9, settingsBill.getTotalCallCost());
        assert.equal(0, settingsBill.getTotalSmsCost());
    });

    it("should be able to make 2 calls at R1.35 each", function () {
        let settingsBill = billSettings();


        settingsBill.setCallCosts(1.35);
        settingsBill.setSmsCosts(0.85);
        settingsBill.setCriticalLevel(10);


        settingsBill.makeCall();
        settingsBill.makeCall();


        assert.equal(2.7, settingsBill.getTotalCost());
        assert.equal(2.7, settingsBill.getTotalCallCost());
        assert.equal(0, settingsBill.getTotalSmsCost());
    });

    it("should be able to make 3 sms at R0.75 each", function () {
        let settingsBill = billSettings();


        settingsBill.setCallCosts(0);
        settingsBill.setSmsCosts(0.75);
        settingsBill.setCriticalLevel(20);


        settingsBill.makeSms();
        settingsBill.makeSms();
        settingsBill.makeSms();


        assert.equal(2.25, settingsBill.getTotalSmsCost());
        assert.equal(2.25, settingsBill.getTotalCost());
        assert.equal(0.0, settingsBill.getTotalCallCost());
    });

    it("should be able to make 2 sms at R0.85 each & call at R1.35 each", function () {
        let settingsBill = billSettings();


        settingsBill.setCallCosts(1.15);
        settingsBill.setSmsCosts(0.75);
        settingsBill.setCriticalLevel(20);


        settingsBill.makeSms();
        settingsBill.makeSms();
        settingsBill.makeCall();


        assert.equal(2.65, settingsBill.getTotalCost());
        assert.equal(1.15, settingsBill.getTotalCallCost());
        assert.equal(1.5, settingsBill.getTotalSmsCost());
    });
});

describe("Setting Warning & Critical Level For Settings-Bill Widget", function () {
    it("It should return a class name of warning if warning level has been reached", function () {
        let settingsBill = billSettings();


        settingsBill.setCallCosts(1.35);
        settingsBill.setSmsCosts(0.85);


        settingsBill.setWarningLevel(5);
        settingsBill.setCriticalLevel(10);


        settingsBill.makeSms();
        settingsBill.makeSms();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();


        assert.equal(7.10, settingsBill.getTotalCost() );
        assert.equal("warning", settingsBill.totalClassName());
    });

    it("It should return a class name of critical if critical level has been reached", function () {
        let settingsBill = billSettings();


        settingsBill.setCallCosts(2.5);
        settingsBill.setSmsCosts(0.85);


        settingsBill.setWarningLevel(5);
        settingsBill.setCriticalLevel(10);


        settingsBill.makeSms();
        settingsBill.makeSms();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeSms();
        settingsBill.makeSms();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();


        assert.equal(10.05, settingsBill.getTotalCost());
        assert.equal("critical", settingsBill.totalClassName());
    });

    it("It should stop total cost when critical value has been reached", function () {
        let settingsBill = billSettings();


        settingsBill.setCallCosts(2.5);
        settingsBill.setSmsCosts(0.85);


        settingsBill.setWarningLevel(5);
        settingsBill.setCriticalLevel(10);


        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();


        assert.equal("critical", settingsBill.totalClassName());
        assert.equal(10, settingsBill.getTotalCallCost());
    });

    it("It should allow the total to increase after reaching the critical level and then the level os increasing ", function () {
        let settingsBill = billSettings();


        settingsBill.setCallCosts(2.5);
        settingsBill.setSmsCosts(0.85);
        settingsBill.setWarningLevel(5);
        settingsBill.setCriticalLevel(10);


        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();


        assert.equal("critical", settingsBill.totalClassName());
        assert.equal(10, settingsBill.getTotalCallCost());

        
        settingsBill.setCriticalLevel(20);


        assert.equal("warning", settingsBill.totalClassName());


        settingsBill.makeCall();
        settingsBill.makeCall();


        assert.equal(15, settingsBill.getTotalCallCost());
        assert.equal("warning", settingsBill.totalClassName());
        });
});
