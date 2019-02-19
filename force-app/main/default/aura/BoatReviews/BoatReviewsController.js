({
	doInit : function(component, event, helper) {
        helper.onInit(component, event, helper);
	},
    
    onUserInfoClick : function(component, event) {
        let userId = event.currentTarget.getAttribute("data-userid");
        let navEvent = $A.get("e.force:navigateToSObject");
        navEvent.setParams({
            recordId: userId
        });
        navEvent.fire();
    }
})