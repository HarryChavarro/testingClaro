/**
 * @description       : 
 * @author            : Harlinsson Chavarro (HCH)
 * @email             : Harlinsson.Chavarro.-ND@disney.com
 * @last modified on  : 06-19-2024
 * @last modified by  : Harlinsson Chavarro (HCH)
**/
public with sharing class calloutTesting {

        public static void makeCallout() {
            Http http = new Http();
            HttpRequest request = new HttpRequest();
            String leadnp = [SELECT Id FROM Lead LIMIT 1].Id;
            request.setEndpoint('/api/tenant/v1/profile-lead/create-user/'+leadnp);
            request.setMethod('POST');
    
            // Set headers if necessary
            request.setHeader('Content-Type', 'application/json');
            request.setHeader('domain', 'qa1.claro.dev.claroinsurance.com');
            try {
                HttpResponse response = http.send(request);
                if (response.getStatusCode() == 200) {
                    // Procesa la respuesta si es exitosa
                    String responseBody = response.getBody();
                    System.debug('Response: ' + responseBody);
                } else {
                    System.debug('Error: ' + response.getStatus());
                }
            } catch (Exception e) {
                System.debug('Callout failed: ' + e.getMessage());
            }
        }
    }
     
}