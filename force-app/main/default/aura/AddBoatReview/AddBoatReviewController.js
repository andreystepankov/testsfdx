({
    doInit : function(component, event, helper) {
        helper.onInit(component, event, helper);
    },
    
	onSave : function(component, event, helper) {
        let asdf = component.find("service");
        console.log(asdf);
        component.find("service").saveRecord(function(saveResult) {
            helper.showToastOrAlert(
                "Saved", 
                "Boat Review Created - " + saveResult
            );
            
            let reviewAddedEvent = component.getEvent("boatReviewAdded");
            reviewAddedEvent.setParams({
                "boat": component.get("v.boat")
            });
            reviewAddedEvent.fire();
            
            helper.onInit(component, event, helper);
        });
	},
    
    onRecordUpdated: function(component, event, helper) {
        var eventParams = event.getParams();
        if (eventParams.changeType === "CHANGED") {
            var changedFields = eventParams.changedFields;
            
            helper.showToastOrAlert("Saved", "Boat Review Savedasdf");
        }
    }
})