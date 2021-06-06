$('#wire-choose-1').click(() => {
    $('#modal-materials')
        .modal('open')
        .attr('position', 'first');
});

$('#wire-choose-2').click(() => {
    $('#modal-materials')
        .modal('open')
        .attr('position', 'last');
});

$('#materials-table tr').click(function() {
    let elasticity = $(this).find('td:eq(1)').text();
    let outflow = $(this).find('td:eq(2)').text();

    let position = $('#modal-materials').attr('position');

    setWiresFields(elasticity, outflow, position);

    $('#modal-materials').modal('close');
})