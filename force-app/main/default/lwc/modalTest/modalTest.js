import { LightningElement, track } from 'lwc';
import saveTask from '@salesforce/apex/TaskController.saveTask';

export default class CreateTaskModal extends LightningElement {
    @track isModalOpen = false;
    @track subject = '';
    @track dueDate = '';
    @track description = '';

    openModal() {
        this.isModalOpen = true;
    }

    closeModal() {
        this.isModalOpen = false;
    }

    handleSubjectChange(event) {
        this.subject = event.target.value;
    }

    handleDueDateChange(event) {
        this.dueDate = event.target.value;
    }

    handleDescriptionChange(event) {
        this.description = event.target.value;
    }

    handleSave() {
        saveTask({ 
            subject: this.subject, 
            dueDate: this.dueDate, 
            description: this.description 
        })
        .then(result => {
            // Manejar el resultado de la creación de la tarea
            console.log('Task saved successfully: ' + result);
            this.closeModal();
        })
        .catch(error => {
            // Manejar el error
            console.error('Error saving task: ' + error);
        });
    }
}
