import { LightningElement, track } from 'lwc';

export default class ChildCom extends LightningElement {

    @track message;

    handleChange(event){
        this.message = event.target.valuel
    }

    handleSubmit(){
        const eventMessage = new CustomEvent('simpleevent',{
            detail:this.message
        });
        this.dispatchEvent(eventMessage);
    }
}