$(document).ready(() => {
    $('.modal').modal();
    $("#estrutura").mouseenter(() => $('#modal_estrutura').modal("open"));
    
    $('.fixed-action-btn').floatingActionButton();
});