({
	search: function(component, event, helper) {
		helper.onSearch(component, event);
	},
    
    onBoatSelect: function(component, event, helper) {
        let boatId = event.getParam('boatId');
        component.set('v.selectedBoatId', boatId);
    }
})