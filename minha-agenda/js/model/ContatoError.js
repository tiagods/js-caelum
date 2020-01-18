export class ContatoError extends Error {
    constructor(message){
        super();
        this.message=message;
    }
}