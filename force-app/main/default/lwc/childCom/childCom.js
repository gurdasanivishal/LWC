import { LightningElement, track } from 'lwc';

export default class ChildCom extends LightningElement {

    @track message;

    handleChange(event){
        console.log('=== handleChange called ====');
        this.message = event.target.value;
        console.log('message = ',this.message);
    }

    handleSubmit(){
        console.log('=== handleSubmit called ====');
        console.log(this.message);
        const eventMessage = new CustomEvent('simpleevent',{
            detail : this.message
        });
        this.dispatchEvent(eventMessage);
    }
}