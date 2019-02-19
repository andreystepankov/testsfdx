({
	onBoatSelected : function(component, event, helper) {
		let boat = event.getParam("boat");
        component.set("v.id", boat.Id);
        let service = component.find("service");
        service.reloadRecord();
	},
    
    onRecordUpdated: function(component, event) {
        
    },
    
    onBoatReviewAdded: function(component, event) {
       	//let be = event.getParam("v.boat");
        //component.set("v.boat", be);
        component.find("tabs").set("v.selectedTabId", "boatreview");
        component.find("reviews").refresh(component);
    }
})