({
	onInit : function(component, event, helper) {
		let action = component.get("c.getAll");
        action.setParams({
            "boatId": component.get("v.boat").Id
        });
        action.setCallback(this, function(response) {
            component.set("v.boatReviews", response.getReturnValue());
        });
        $A.enqueueAction(action);
	}
})