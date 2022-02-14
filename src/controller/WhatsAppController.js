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

            HTMLFormElement.prototype.getForm = function() {
                return new FormData(this);
            }

            HTMLFormElement.prototype.toJSON = function() {
                let json = {};

                this.getForm().forEach((value, key) => {
                    json[key] = value;
                })
                return json;
            }


            // *** CSS 
            // <=====================||=====================>
        } // *** Self created functions for Prototypes



    initEvents() {
        // <=====================||=====================>

        // Events about Profile
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

        this.el.photoContainerEditProfile.on('click', e => {
            this.el.inputProfilePhoto.click();
        });

        this.el.inputNamePanelEditProfile.on('keypress', e => {
            if (e.key == 'Enter') {
                e.preventDefault();
                this.el.btnSavePanelEditProfile.click();
            }
        });

        this.el.btnSavePanelEditProfile.on('click', e => {
            console.log(this.el.inputNamePanelEditProfile.innerHTML);
        })

        this.el.formPanelAddContact.on('submit', e => {

            e.preventDefault();

            let formData = new FormData(this.el.formPanelAddContact);

            formData.getForm();

        })

        // *** Events about Profile

        // Events about New Contact
        this.el.btnNewContact.on('click', e => {
            this.closeAllLeftPanel();
            this.el.panelAddContact.show();
            setTimeout(() => {
                this.el.panelAddContact.addClass('open');
            }, 300);
        });

        this.el.btnClosePanelAddContact.on('click', e => {
            this.el.panelAddContact.removeClass('open');
        });

        // *** Events about New Contact

        // Events about Contact list

        this.el.contactsMessagesList.querySelectorAll('.contact-item').forEach(item => {

            item.on('click', e => {
                this.el.home.hide();
                this.el.main.css({ display: 'flex' });
            });

        });

        // ***Events about Contact list

        // Events about chat buttons

        // Attach Button 📎
        this.el.btnAttach.on('click', e => {
            event.stopPropagation();
            this.el.menuAttach.addClass('open');
            document.addEventListener('click', this.closeMenuAttach.bind(this));
        });

        // Upload a photo
        this.el.btnAttachPhoto.on('click', e => {
            this.el.inputPhoto.click();
        });
        this.el.inputPhoto.on('change', e => {
            console.log(this.el.inputPhoto.files);

            [...this.el.inputPhoto.files].forEach(file => {
                console.log(file);
            });
        });

        // Open a picture panel
        this.el.btnAttachCamera.on('click', e => {
            this.closeAllMainPanel();
            this.el.panelCamera.addClass('open');
            this.el.panelCamera.css({
                height: '500px'
            });
        });
        this.el.btnTakePicture.on('click', e => {
            console.log('tirou a foto');
        });

        // close picture panel
        this.el.btnClosePanelCamera.on('click', e => {
            this.closeAllMainPanel();
            this.el.panelMessagesContainer.show();
        });

        // open document panel
        this.el.btnAttachDocument.on('click', e => {
            this.closeAllMainPanel();
            this.el.panelDocumentPreview.show();
            this.el.panelDocumentPreview.addClass('open');
            this.el.panelDocumentPreview.css({
                height: '500px'
            });
        });
        // close document panel
        this.el.btnClosePanelDocumentPreview.on('click', e => {
            this.closeAllMainPanel();
            this.el.panelMessagesContainer.show();
        });
        // send document 
        this.el.btnSendDocument.on('click', e => {
            console.log('send document');
        })

        // open contact panel
        this.el.btnAttachContact.on('click', e => {
            this.el.modalContacts.show();
        });
        // close contact panel
        this.el.btnCloseModalContacts.on('click', e => {
            this.el.modalContacts.hide();
        })

        // *** Attach Button 📎

        // Recording audio button
        this.el.btnSendMicrophone.on('click', e => {

            this.el.recordMicrophone.show();
            this.el.btnSendMicrophone.hide();
            this.startRecordMicrophoneTime();

        });
        // cancel recording
        this.el.btnCancelMicrophone.on('click', e => {

            this.closeRecordMicrophone();

        });
        // send record
        this.el.btnFinishMicrophone.on('click', e => {

            this.closeRecordMicrophone();
            console.log('audio sent');

        })

        // Input Text Message and Send message button

        this.el.inputText.on('keypress', e => {
            if (e.key === 'Enter' && !e.ctrlKey) {

                e.preventDefault();
                this.el.btnSend.click();

            }
        });

        this.el.inputText.on('keyup', e => {
            if (this.el.inputText.innerHTML.length && this.el.inputText.innerHTML != '<br>') {

                this.el.inputPlaceholder.hide();
                this.el.btnSendMicrophone.hide();
                this.el.btnSend.show();
            } else {
                this.el.inputPlaceholder.show();
                this.el.btnSendMicrophone.show();
                this.el.btnSend.hide();
            }
        });

        this.el.btnSend.on('click', e => {
            console.log(this.el.inputText.innerHTML);
        });

        this.el.btnEmojis.on('click', e => {
            this.el.panelEmojis.toggleClass('open');
        });

        this.el.panelEmojis.querySelectorAll('.emojik').forEach(emoji => {
            emoji.on('click', e => {

                console.log(emoji.dataset.unicode);

                let img = this.el.imgEmojiDefault.cloneNode();

                img.style.cssText = emoji.style.cssText;
                img.dataset.unicode = emoji.dataset.unicode;
                img.alt = emoji.dataset.unicode;

                emoji.classList.forEach(name => {
                    img.classList.add(name);
                });

                let cursor = window.getSelection();

                if (!cursor.focusNode || !cursor.focusNode.id === 'input-text') {
                    this.el.inputText.focus();
                    cursor = window.getSelection();
                }

                let range = document.createRange();

                range = cursor.getRangeAt(0);
                range.deleteContents();

                let frag = document.createDocumentFragment();

                frag.appendChild(img);

                range.insertNode(frag);

                range.setStartAfter(img);

                this.el.inputText.dispatchEvent(new Event('keyup'));


            });

        });



        // *** Input Text Message and Send message button

        // *** Events about chat buttons

        // *** Main buttons
        // <=====================||=====================>
    }

    // <=====================||=====================>
    // Methods about record audio

    // update record timer
    startRecordMicrophoneTime() {
        let start = Date.now();

        this._recordMicrophoneInterval = setInterval(() => {
            this.el.recordMicrophoneTimer.innerHTML = Format.toTime((Date.now() - start));


        }, 1000);
    }

    closeRecordMicrophone() {
        this.el.recordMicrophone.hide();
        this.el.btnSendMicrophone.show();
        clearInterval(this._recordMicrophoneInterval);
        this.el.recordMicrophoneTimer.innerHTML = '0:00';
    }

    // *** Methods about record audio
    // <=====================||=====================>


    closeAllMainPanel() {
        this.el.panelDocumentPreview.hide();
        this.el.panelMessagesContainer.hide();
        this.el.panelCamera.removeClass('open');

    }

    closeMenuAttach(event) {
        document.removeEventListener('click', this.closeMenuAttach);
        this.el.menuAttach.removeClass('open');
    }

    closeAllLeftPanel() {
        this.el.panelEditProfile.hide();
        this.el.panelAddContact.hide();
    }



} // End of class WhatsAppController