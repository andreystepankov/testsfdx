({
	doInit : function(component, event, helper) {
		alert(component.get("v.boat"));
	},
    
    onBoatClick: function(component) {
        let boat = component.get("v.boat");
        //alert(JSON.stringify(boat));
        let e = component.getEvent("boatSelect");
        e.setParams({
            boatId: component.get('v.boat.Id')
        });
        e.fire();
        
        let e2 = $A.get("e.c:BoatSelected");
        e2.setParams({
            boat: component.get('v.boat')
        });
        e2.fire();
        
        console.log(boat.Id);
        let e3 = $A.get("e.c:PlotMapMarker");
        e3.setParams({
            sObjectId: boat.Id,
            lat: boat.Geolocation__Latitude__s,
            long: boat.Geolocation__Longitude__s,
            label: boat.Name
        });
        e3.fire();
    }
})