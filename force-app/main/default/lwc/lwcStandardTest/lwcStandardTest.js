import { LightningElement, wire } from 'lwc';
import saveRecord from "@salesforce/apex/createModifyRecords.saveRecord";

export default class LwcStandardTest extends LightningElement {

    name
    email
    recordId

    handleNameChange(event){
        this.name = event.target.value;
    }

    handleEmailChange(event){
        this.email = event.target.value;
    }

        @wire(saveRecord, {name: this.name, email: this.email})
        similarBoats({ error, data }) {
            if (data) {
                this.recordId = data;
                this.error = undefined;
            } else if (error) {
                this.error = error;
            }
        }
    

}