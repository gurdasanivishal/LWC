import { LightningElement, track } from 'lwc';
import pubsub from 'c/pubsub';

export default class Subscriber extends LightningElement {

@track message;

connectedCallback(){
    pubsub.register("simpleevent",this._handlePubsub.bind(this));
    console.log('PUBSUB Subscribed');}

subscribePubsub(){
    pubsub.register("simpleevent",this._handlePubsub.bind(this));
    console.log('PUBSUB Subscribed');
}

_handlePubsub(messageFromEvt){
    console.log('handlePubsub method called');
    console.log(JSON.stringify(messageFromEvt));
    this.message = JSON.stringify(messageFromEvt);
}
}