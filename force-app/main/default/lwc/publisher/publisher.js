import { LightningElement, track } from 'lwc';
import pubsub from 'c/pubsub';

export default class Publisher extends LightningElement {

    @track message;

    handleChange(event){
        this.message = event.target.value;
    
        let payload = {
            "source":'parent',
            "message": this.message
        }
        pubsub.fire("simpleevent",payload);
        console.log('payload',payload);

    }
}