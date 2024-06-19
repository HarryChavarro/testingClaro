/**
 * @description       : 
 * @author            : Harlinsson Chavarro (HCH)
 * @email             : Harlinsson.Chavarro.-ND@disney.com
 * @last modified on  : 06-19-2024
 * @last modified by  : Harlinsson Chavarro (HCH)
**/
public with sharing class TaskController {
    @AuraEnabled
    public static string saveTask(String subject, Date dueDate, String description){
        try {
            Task newTask = new Task(
                Subject = subject,
                ActivityDate = dueDate,
                Description = description
            );
            insert newTask;
            return newTask.Id;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

}