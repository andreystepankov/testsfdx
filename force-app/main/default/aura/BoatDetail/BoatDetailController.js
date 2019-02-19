({
	onFullDetails : function(component, event, helper) {
        let detailsEvent = $A.get("e.force:navigateTosObject");
        detailsEvent.setParams({
            "recordId": component.get("v.boat.Id")
        });
        detailsEvent.fire();
	}
})