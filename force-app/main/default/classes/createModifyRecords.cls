/**
 * @description       : 
 * @author            : Harlinsson Chavarro (HCH)
 * @email             : Harlinsson.Chavarro.-ND@disney.com
 * @last modified on  : 06-19-2024
 * @last modified by  : Harlinsson Chavarro (HCH)
**/
public with sharing class createModifyRecords {

    @AuraEnabled
    public static string saveRecord(String name, String email){
        try {

            if (String.isNotBlank(name) && String.isNotBlank(email)) {
                Account acc = new Account(

                    Name = name,
                    Description = email //just for testing
                );

                upsert acc;
                return acc.Id;

            }

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return '';
    }

}