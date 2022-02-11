// When a comment Starts with an *** its because that 'section' of code ended

class WhatsAppController {
    constructor() {
            console.log('funfou');


            this.elementsPrototype();
            this.loadElements();

        } // End of constructor

    loadElements() {
        this.el = {};

        document.querySelectorAll('[id]').forEach(element => {

            this.el[Format.getCamelCase(element.id)] = element;

        });
    }

    elementsPrototype() {

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
    }

} // End of class WhatsAppController