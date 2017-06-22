class Panel{
    constructor(element, activeButton, content){
        
        this.activeButton = activeButton;
        if(!this.activeButton){
            this.activeButton = false;
        }

        this.panel = document.getElementById(element);
        this.switch = document.querySelector('#' + element + ' #switch');
        this.filterIcon = document.querySelector('#' + element + ' #filter');
        this.closeIcon = document.querySelector('#' + element + ' #close');

        this.activeContent = document.querySelector('#' + element + ' #locationInfo');

        this.content = content;
        
        this.addEventListeners();
    }
    
    addEventListeners() {
        if(this.activeButton){
            this.switch.addEventListener('click', this.toggleMenuVisibility.bind(this));
        } else{
            this.switch.addEventListener('click', this.close.bind(this));
        }

        if(this.content){
            if(this.activeContent){
                this.cleanContent();
                this.showContent(this.content);
            } else{
                this.showContent(this.content);
            }
        }
    }
    
    toggleMenuVisibility() {
        if (this.isVisible()) {
            this.close();
        } else {
            this.open();
        }
    }

    isVisible() {
        return this.panel.classList.contains('open');
    }

    open() {
        this.panel.classList.add('open');
        if(this.filterIcon){
            this.filterIcon.classList.add('hide');
        }
        this.closeIcon.classList.remove('hide');
    }

    close() {
        this.panel.classList.remove('open');
        if(this.filterIcon){
            this.filterIcon.classList.remove('hide');
        }
        this.closeIcon.classList.add('hide');

        if(this.activeContent){
            this.cleanContent();
        }
    }

    showContent(content) {
        // console.log('Content: ' + content.phone);
        // console.log('Add content');

        var container = document.createElement('div');
        container.id = 'locationInfo';
        
        var header = document.createElement('h5');

        var image = document.createElement('img');

        var metaInfo = document.createElement('ul');
        var metaInfoPhone = document.createElement('li');
        var metaInfoMail = document.createElement('li');

        var contentHeader = this.content.title;
        var contentPhone = this.content.phone;
        var contentMail = this.content.mail;
        image.src = this.content.imageSrc;
        image.style.width = '100%';

        metaInfo.append(metaInfoPhone);
        metaInfo.append(metaInfoMail);

        header.append(contentHeader);
        metaInfoPhone.append(contentPhone);
        metaInfoMail.append(contentMail);

        this.panel.append(container);
        container.append(header);
        container.append(image);
        container.append(metaInfo);
    }

    cleanContent(){
        // console.log('Remove content');
        this.activeContent.remove();
    }

}