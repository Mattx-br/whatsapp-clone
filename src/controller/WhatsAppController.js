class WhatsAppController {
    constructor() {
            console.log('funfou');

            this.loadElements();

        } // End of constructor

    loadElements() {
        this.el = {};

        document.querySelectorAll('[id]').forEach(element => {

            this.el[Format.getCamelCase(element.id)] = element;

        });
    }
} // End of class WhatsAppController