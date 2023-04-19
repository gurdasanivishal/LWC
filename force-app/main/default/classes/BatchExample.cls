global class BatchExample implements Database.Batchable<sObject>{

    global Database.QueryLocator start(Database.BatchableContext BC){

        String query = 'Select Id from Account limit 50';
        return Database.getQueryLocator(query);
    }

    global void execute(Database.BatchableContext BC, List<sObject> data){

    }

    global void finish(Database.BatchableContext BC){

    }
}