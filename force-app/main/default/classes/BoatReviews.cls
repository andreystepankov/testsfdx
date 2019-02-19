public class BoatReviews {
    @AuraEnabled
    public static List<BoatReview__c> getAll(Id boatId) {
        System.debug(boatId);
        try {
            List<BoatReview__c> result = [
                SELECT 
                    Id,
                    Name,
                    Comment__c,
                    Rating__c,
                    LastModifiedDate,
                    CreatedDate,
                    CreatedBy.Name,
                    CreatedBy.SmallPhotoUrl,
                    CreatedBy.CompanyName
                FROM BoatReview__c
                WHERE Boat__c = :boatId
                ORDER BY CreatedDate DESC
            ];
            System.debug(result);
            return result;
        } catch (Exception e) {
            System.debug('error while getting BoatReviews: ' + e.getMessage());
            return null;
        }
        
        
    }
}