$(document).ready(() => {
    $('.modal').modal();
    $("#estrutura").mouseenter(() => $('#modal-estrutura').modal("open"));
    
    $('.fixed-action-btn').floatingActionButton();
});