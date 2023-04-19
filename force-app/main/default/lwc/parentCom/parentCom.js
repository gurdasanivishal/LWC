import { LightningElement, api, track, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name'

export default class ParentCom extends LightningElement {

    @api id = '0015g00000MFjz2AAD';
    handleEvent(event){
        alert(JSON.stringify(event.detail));
        const neweve = new CustomEvent('smeve',{
            detail: 'parent event'
        });
        this.dispatchEvent(neweve);
    }

    @wire(getRecord, {recordId: '0015g00000MFjz2AAD' , fields: [NAME_FIELD]}) 
    account;

    get name(){
        return getFieldValue(this.account.data, NAME_FIELD);
    }
}