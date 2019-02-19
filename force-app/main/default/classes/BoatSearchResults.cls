public class BoatSearchResults {
	@AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId) {
        Id btId = (Id) boatTypeId;
        List<Boat__c> result = (
            btId == null? 
            [
                SELECT Id, Name, Contact__r.Name, Picture__c, Geolocation__Latitude__s, Geolocation__Longitude__s
                FROM Boat__c
            ]:
            [
                SELECT Id, Name, Contact__r.Name, Picture__c, Geolocation__Latitude__s, Geolocation__Longitude__s
                FROM Boat__c 
                WHERE BoatType__c = :btId
            ]
        );
        return result;
    }
}