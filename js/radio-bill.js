
function radioBill(){
    let theCallCost = 2.75;
    let theSMSCost = 0.75;
    let theWarningLevel = 30.00;
    let theCriticalLevel = 50.00;

    let theTotalBillCost = 0.00;

    function getCallCost(){
        return theCallCost;
    }
    function getSMSCost(){
        return theSMSCost;
    }

    function getSWarningLevel(){
        return theWarningLevel;
    }

    function getCriticalLevel(){
        return theCriticalLevel;
    }


    
    function makeCall(){
        theTotalBillCost += theCallCost;
    }
    function makeSMS(){
        theTotalBillCost += theSMSCost;
    }

    function getTotalBillCost(){
        return theTotalBillCost;
    }


    function getWarningLevel(){
        return theWarningLevel;
    }

    function getCriticalLevel(){
        return theCriticalLevel;
    }

    function criticalLevelReached(){
        return getTotalBillCost() >= getCriticalLevel();
    }
    function warningLevelReached(){
        return getTotalBillCost() >= getWarningLevel();
    }

    function totalClassName() {
        if (criticalLevelReached()) {
          return "critical";
        }
        if (getTotalBillCost() >= getWarningLevel()) {
          return "warning";
        }
        if( getTotalBillCost() < getWarningLevel() ){
            return "normal";
        }
    }


    return {
        getCallCost,
        getSMSCost,
        getSWarningLevel,
        getCriticalLevel,
        getTotalBillCost,
        totalClassName, 
        makeCall,
        makeSMS,
    }

}