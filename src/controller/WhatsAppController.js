// When a comment Starts with an *** its because that 'section' of code ended

class WhatsAppController {
    constructor() {
            console.log('funfou');


            this.elementsPrototype();
            this.loadElements();
            this.initEvents();

        } // *** End of constructor

    loadElements() {
        this.el = {};

        document.querySelectorAll('[id]').forEach(element => {

            this.el[Format.getCamelCase(element.id)] = element;

        });
    }

    elementsPrototype() { // Self created functions for Prototypes 

            // <=====================||=====================>
            // Show and Hide
            Element.prototype.hide = function() {
                // inside a regular function, the scope is limited to the function, so when 'this' is inside a function, it refers to its Object
                this.style.display = 'none';
                return this;
            }
            Element.prototype.show = function() {
                this.style.display = 'block';
                return this;
            }
            Element.prototype.toggle = function() {
                this.style.display = (this.style.display === 'none') ? 'block' : 'none';
                return this;
            }

            // *** Show and Hide
            // <=====================||=====================>


            // <=====================||=====================>
            // Events (ex click, mouseover etc)

            Element.prototype.on = function(events, fn) {
                events.split(' ').forEach(event => {
                    this.addEventListener(events, fn);
                })
                return this;
            }

            // *** Events (ex click, mouseover etc)
            // <=====================||=====================>

            // <=====================||=====================>
            // CSS 

            Element.prototype.css = function(styles) {
                for (let name in styles) {
                    this.style[name] = styles[name];
                }
                return this;
            }

            Element.prototype.addClass = function(name) {
                this.classList.add(name);
                return this;
            }
            Element.prototype.removeClass = function(name) {
                this.classList.remove(name);
                return this;
            }
            Element.prototype.toggleClass = function(name) {
                this.classList.toggle(name);
                return this;
            }
            Element.prototype.hasClass = function(name) {
                return this.classList.contains(name);
            }

            // *** CSS 
            // <=====================||=====================>
        } // *** Self created functions for Prototypes



    initEvents() {
        // <=====================||=====================>
        // Main buttons
        this.el.myPhoto.on('click', e => {
            this.closeAllLeftPanel();
            this.el.panelEditProfile.show();
            setTimeout(() => {
                this.el.panelEditProfile.addClass('open');
            }, 300);
        });

        this.el.btnClosePanelEditProfile.on('click', e => {
            this.el.panelEditProfile.removeClass('open');
        })


        this.el.btnNewContact.on('click', e => {
            this.closeAllLeftPanel();
            this.el.panelAddContact.show();
            setTimeout(() => {
                this.el.panelAddContact.addClass('open');
            }, 300);
        });

        this.el.btnClosePanelAddContact.on('click', e => {
            this.el.panelAddContact.removeClass('open');
        })


        // *** Main buttons
        // <=====================||=====================>
    }

    closeAllLeftPanel() {
        this.el.panelEditProfile.hide();
        this.el.panelAddContact.hide();
    }

} // End of class WhatsAppController