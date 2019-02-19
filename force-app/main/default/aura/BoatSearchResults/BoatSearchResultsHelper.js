({
	onSearch : function(component, event) {
		let params = event.getParam("arguments");
        if (params) {
            let action = component.get("c.getBoats")
            action.setParams({
                boatTypeId: params.boatTypeId
            });
            action.setCallback(this, function(response) {
                let boats = response.getReturnValue();
                component.set("v.boats", boats);
            });
            $A.enqueueAction(action);
        }
	}
})