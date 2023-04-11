
function calculateBill(){

    let theCallCost = 0.00;
    let theSMSCost = 0.00;
    let theWarningLevel = 20.00;
    let theCriticalLevel = 30.00;

    let theTotalBillCost = 0.00;

    // ? ######################################################### CALL & SMS Settings ###################################################  

    function setCallCost (callCost){
        theCallCost = callCost ;
    }
    
    function getCallCost(){
        return theCallCost ;
     }

     function setSMSCost (smsCost){
        theSMSCost = smsCost ;
    }
    
    function getSMSCost(){
        return theSMSCost ;
     }

    // ? ######################################################### Use Values ###################################################  

    function calculateTotal(string){
        bill = string.toLowerCase().split(",")
        for (let i = 0 ; i < bill.length ; i++){
            if(bill[i].trim() == "call"){
                theTotalBillCost += theCallCost;
            }else if (bill[i].trim() == "sms"){
                theTotalBillCost += theSMSCost;
            }
        }
    }
    function getTotalBillCost(){
        return theTotalBillCost;
    }

    // ? ######################################################### Warning & Critical Level ###################################################  
    

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
    }
    return {
        setCallCost,
        getCallCost,
        setSMSCost,
        getSMSCost,
        calculateTotal,
        getTotalBillCost,
        totalClassName,
        getCriticalLevel,
        getWarningLevel,
    }

}