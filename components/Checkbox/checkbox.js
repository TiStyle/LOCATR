class Checkbox{
    constructor(element){
        this.choicesElement = document.getElementById(element);
        this.choicesElements = document.querySelectorAll('#' + element + ' input[type=checkbox]');
        this.resetElement = document.querySelector('#' + element + ' .reset');
        
        this.addEventListeners();
    }
    
    addEventListeners(){
        this.resetElement.addEventListener('click', this.resetChoices.bind(this));
    }

    resetChoices(){
        this.choicesElements.forEach(function(element) {
            if(element.checked){
                element.checked = false;
            }
        }, this);
    }
}