({
	onFormSubmit : function(component, event, helper) {
		let formData = event.getParam("formData");
        let boatTypeId = formData.boatTypeId;
        
        let resultCmp = component.find("resultsCmp");
        let auraMethodResult = resultCmp.search(boatTypeId);
	}
})