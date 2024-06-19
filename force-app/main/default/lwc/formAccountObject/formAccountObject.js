import { LightningElement, api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';

export default class FormAccountObject extends LightningElement {
    // Expose a field to make it available in the template
    nameField = NAME_FIELD;

    // Flexipage provides recordId and objectApiName
    @api recordId;
    @api objectApiName = 'Account';
    accountId;
    
    handleSuccess(event) {
        console.log('event.detail: '+JSON.stringify(event.detail));
        this.accountId = event.detail.id;
    }

    handleError(event) {
        console.log('event error: '+JSON.stringify(event.detail.detail));
        //do some stuff with message to make it more readable
     
    }

}