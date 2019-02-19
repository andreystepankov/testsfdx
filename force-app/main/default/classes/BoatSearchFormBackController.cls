public class BoatSearchFormBackController {
	@AuraEnabled
    public static List<BoatType__c> getAllBoatTypesNames() {
        List<BoatType__c> types = [
            SELECT Id, Name 
            FROM BoatType__c
        ];
        return types;
    }
}