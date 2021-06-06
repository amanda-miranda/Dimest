$(document).ready(() => {
    $('.tabs').tabs();
    $('.materialboxed').materialbox();
});

$('#calculator').click(() => {
    let validFormLoad = isValidLoadAndDimensioningForm();
    let validWire = isValidWiresProperties();

    if(!validFormLoad || !validWire) {
        M.toast({html: 'Verifique os Campos Inválidos'});
        return;
    }

    let inputs = {
        pForce: $('#p-force').val(),
        wLoad: $('#w-load').val()
    }

    doShowResults(inputs);
})

function isValidLoadAndDimensioningForm() {
    let formLoad = $('#load-form').find('.invalid');
    let formDimensioning = $('#dimensioning-form').find('.invalid');

    return formLoad.length == 0 && formDimensioning.length == 0;
}

function isValidWiresProperties() {
    let formPropertiesWire1 = $('#properties-wire1-form').find('.invalid');
    let formSizeWire1 = $('#size-wire1-form').find('.invalid');
    let formPropertiesWire2 = $('#properties-wire2-form').find('.invalid');
    let formSizeWire2 = $('#size-wire2-form').find('.invalid');

    return formPropertiesWire1.length == 0  
        && formSizeWire1.length == 0
        && formPropertiesWire2.length == 0
        && formSizeWire2.length == 0;
    
}

/* Validações de Campos */

$('#p-force').blur((field) => {
    let pForce = $(field.target);
    let pForceMessage = $('#p-force-message');

    if (pForce.val() == '') {
        pForceMessage.attr('data-error', 'Campo Obrigatório')
        pForce.addClass('invalid');
    } else if(pForce.val() < 0) {
        pForceMessage.attr('data-error', 'Força P Não Pode Ser Negativa')
        pForce.addClass('invalid');
    }   
})

$('#w-load').blur((field) => {
    let wLoad = $(field.target);
    let wLoadMessage = $('#w-load-message');

    if (wLoad.val() == '') {
        wLoadMessage.attr('data-error', 'Campo Obrigatório')
        wLoad.addClass('invalid');
    } else if(wLoad.val() < 0) {
        wLoadMessage.attr('data-error', 'Carga Distribuída w Não Pode Ser Negativa')
        wLoad.addClass('invalid');
    }   
})