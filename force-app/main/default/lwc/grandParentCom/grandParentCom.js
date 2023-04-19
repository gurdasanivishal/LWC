import { LightningElement } from 'lwc';

export default class GrandParentCom extends LightningElement {

    handleEvent(event){
        alert('alert from grandparent'+ JSON.stringify(event.detail))
    }
}