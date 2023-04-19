/*
    ! To store all the JS funstions for the various LWC
    * This javascript file is used to provide many reusability functionality
    * Reusable Apex calls to server, Preparing Dynamic Toasts
    Todo : PubSub JS file of LWC & Aura Components
    ? V2 of PubSub Component
*/

var callbacks = {};

/**  
 * Registers a callback for an event
 * @param {string} eventName - Name of the event to listen for.
 * @param {function} callback - Funation to invoke when said event is fired.
 */
 const register = (eventName, callback) => {
     if(!callbacks[eventName]){
         callbacks[eventName] = new Set();
     }
     callbacks[eventName].add(callback); 
 };

/** 
 * Unregisters a callback for a event
 * @param {string} eventName - Name of the event of unregister from.
 * @param {function} callback - Function of unregister.
*/
const unregister = (eventName, callback) => {
    if(callbacks[eventName]){
        callbacks[eventName].delete(callback);
        // ! delete the callback from callbacks variable
    }
};

/*
    ! Deletes all the Components from the callbacks params & remove all the listeners and related 
    ! Callback functions
*/
const unregisterAll = () => {
    callbacks = {};
};

/**
 * Fires an event to listeners.
 * @param {string} eventName - Name of the event to fire.
 * @param {*} Payload - Payload of the event to fire
 */
const fire = (eventName, payload) => {
    if(callbacks[eventName]){
        callbacks[eventName].forEach(callback => {
            try {
                callback[payload];
            } catch (error){
                // fail silently
            }
        });
    }
};

/*
    Todo: Export all the functions so that these are accisible from other JS Classes.
*/
export default {
    register,
    unregister,
    unregisterAll,
    fire
};