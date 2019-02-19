({
    doInit: function (component, event) {
        let createRecordEvent = $A.get("e.force:createRecord");
        let isSupported = false;
        if (createRecordEvent) {
            isSupported = true;
            /*
            createRecordEvent.setParams({
                
            });
            */
        }
        component.set("v.isNewSupported", isSupported);
        
        let action = component.get("c.getAllBoatTypesNames");
        action.setCallback(this, function(response) {
            let boatTypes = response.getReturnValue();
            let listOptions = [];
            let defValue = component.get("v.defaultVal");
            listOptions.push({"label": "All Types", "value": defValue});
            for (let i = 0; i < boatTypes.length; i++) {
                listOptions.push({"label": boatTypes[i].Name, "value": boatTypes[i].Id});
            }
            //boatTypes.unshift({"label":"All Types", "value": 0});
            component.set("v.options", listOptions);
        });
        $A.enqueueAction(action);
    },
    
    handleChange: function (component, event) {
        var selectedOptionValue = event.getParam("value");
        //alert("Option selected with value: '" + selectedOptionValue + "'");
    },
    
    handleClickNew: function (component, event) {
        let createRecordEvent = $A.get("e.force:createRecord");
        if (createRecordEvent) {
            let element = component.find("combo");
            let currentOption = element.get("v.value");
            createRecordEvent.setParams({
                entityApiName: "Boat__c",
                defaultFieldValues: {
                    'BoatType__c' : currentOption
                }
            });
            createRecordEvent.fire();
        }
    },
    
    onFormSubmit: function (component, event) {
        let boatsElement = component.find("combo");
        let selectedTypeId = boatsElement.get("v.value");
        
        let e = component.getEvent("FormSubmit");
        e.setParams({
            formData: {boatTypeId: selectedTypeId}
        });
        e.fire();
    }
})