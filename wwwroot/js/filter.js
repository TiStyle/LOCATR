const getCheckboxValues = function(selector){
    return Array
        .from(document.querySelectorAll(selector + ' input:checked'))
        .map(e => e.value)
}