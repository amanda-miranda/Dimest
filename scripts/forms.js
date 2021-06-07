$(document).ready(() => {
    $('.tabs').tabs();
    $('.materialboxed').materialbox();
});

$('#calculator').click(() => {
    $('input').each((index, field) => $(field).blur()); //AQUI

    let validFormLoad = isValidLoadAndDimensioningForm();
    let validWire = isValidWiresProperties();
    let leakageLimit1 = $('#leakage1').val();
    let leakageLimit2 = $('#leakage2').val();


    if(!validFormLoad) {
        M.toast({html: 'Verifique os Campos Inválidos'});
        $('.tabs').tabs('select', 'load_tab')
        return;
    }

    if(!validWire) {
        M.toast({html: 'Verifique os Campos Inválidos'});
        $('.tabs').tabs('select', 'wires_tab')
        return;
    }

    else if(leakageLimit1 < 200 && leakageLimit2 < 200){
        M.toast({html: 'Limite de escoamento dos arames ultrapassam o de aço!'});
        $('.tabs').tabs('select', 'wires_tab')
        return;
    }
    else if(leakageLimit1 < 200){
        M.toast({html: 'Limite de escoamento do primeiro arame ultrapassa o de aço!'});
        $('.tabs').tabs('select', 'wires_tab')
        return;
    }
    else if(leakageLimit2 < 200){
        M.toast({html: 'Limite de escoamento do segundo arame ultrapassa o de aço!'});
        $('.tabs').tabs('select', 'wires_tab')
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

function setWiresFields(elasticity, leakage, position) {
    if(position == 'first') {
        $('#elasticity-e1').val(elasticity).focus();
        $('#leakage1').val(leakage).focus();
    } else {
        $('#elasticity-e2').val(elasticity).focus();
        $('#leakage2').val(leakage).focus();
    }
}

/* Validações de Campos */

$('#p-force').blur((field) => {
    let pForce = $(field.target);
    let pForceMessage = $('#p-force-message');

    if (pForce.val() == '') {
        pForceMessage.attr('data-error', 'Campo Obrigatório')
        pForce.addClass('invalid');
    } else if(pForce.val() < 0) {
        pForceMessage.attr('data-error', 'P não pode ser negativo')
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
        wLoadMessage.attr('data-error', 'w não pode ser negativo')
        wLoad.addClass('invalid');
    }   
})

$('#l3-length').blur((field) => {
    let l3Length = $(field.target);
    let l3LengthMessage = $('#l3-length-message');

    if (l3Length.val() == '') {
        l3LengthMessage.attr('data-error', 'Campo Obrigatório')
        l3Length.addClass('invalid');
    } else if(l3Length.val() < 0) {
        l3LengthMessage.attr('data-error', 'L3 não pode ser negativo')
        l3Length.addClass('invalid');
    }   
})

$('#l4-length').blur((field) => {
    let l4Length = $(field.target);
    let l4LengthMessage = $('#l4-length-message');

    if (l4Length.val() == '') {
        l4LengthMessage.attr('data-error', 'Campo Obrigatório')
        l4Length.addClass('invalid');
    } else if(l4Length.val() < 0) {
        l4LengthMessage.attr('data-error', 'L4 não pode ser negativo')
        l4Length.addClass('invalid');
    }   
})

$('#l5-length').blur((field) => {
    let l5Length = $(field.target);
    let l5LengthMessage = $('#l5-length-message');

    if (l5Length.val() == '') {
        l5LengthMessage.attr('data-error', 'Campo Obrigatório')
        l5Length.addClass('invalid');
    } else if(l5Length.val() < 0) {
        l5LengthMessage.attr('data-error', 'L5 não pode ser negativo')
        l5Length.addClass('invalid');
    }   
})

$('#elasticity-e1').blur((field) => {
    let e1Elasticity = $(field.target);
    let e1ElasticityMessage = $('#elasticity-e1-message');

    if (e1Elasticity.val() == '') {
        e1ElasticityMessage.attr('data-error', 'Campo Obrigatório')
        e1Elasticity.addClass('invalid');
    } else if(e1Elasticity.val() < 0) {
        e1ElasticityMessage.attr('data-error', 'E1 não pode ser negativo')
        e1Elasticity.addClass('invalid');
    }   
})

$('#leakage1').blur((field) => {
    let leakage1 = $(field.target);
    let leakage1Message = $('#leakage1-message');

    if (leakage1.val() == '') {
        leakage1Message.attr('data-error', 'Campo Obrigatório')
        leakage1.addClass('invalid');
    } else if(leakage1.val() < 0) {
        leakage1Message.attr('data-error', 'σ não pode ser negativo')
        leakage1.addClass('invalid');
    }   
})

$('#section-a1').blur((field) => {
    let a1Section = $(field.target);
    let a1SectionMessage = $('#section-a1-message');

    if (a1Section.val() == '') {
        a1SectionMessage.attr('data-error', 'Campo Obrigatório')
        a1Section.addClass('invalid');
    } else if(a1Section.val() < 0) {
        a1SectionMessage.attr('data-error', 'A1 não pode ser negativo')
        a1Section.addClass('invalid');
    }   
})

$('#length-l1').blur((field) => {
    let l1Length = $(field.target);
    let l1LengthMessage = $('#length-l1-message');

    if (l1Length.val() == '') {
        l1LengthMessage.attr('data-error', 'Campo Obrigatório')
        l1Length.addClass('invalid');
    } else if(l1Length.val() < 0) {
        l1LengthMessage.attr('data-error', 'L1 não pode ser negativo')
        l1Length.addClass('invalid');
    }   
})

$('#elasticity-e2').blur((field) => {
    let e2Elasticity = $(field.target);
    let e2ElasticityMessage = $('#elasticity-e2-message');

    if (e2Elasticity.val() == '') {
        e2ElasticityMessage.attr('data-error', 'Campo Obrigatório')
        e2Elasticity.addClass('invalid');
    } else if(e2Elasticity.val() < 0) {
        e2ElasticityMessage.attr('data-error', 'E2 não pode ser negativo')
        e2Elasticity.addClass('invalid');
    }   
})

$('#leakage2').blur((field) => {
    let leakage2 = $(field.target);
    let leakage2Message = $('#leakage2-message');

    if (leakage2.val() == '') {
        leakage2Message.attr('data-error', 'Campo Obrigatório')
        leakage2.addClass('invalid');
    } else if(leakage2.val() < 0) {
        leakage2Message.attr('data-error', 'σ não pode ser negativo')
        leakage2.addClass('invalid');
    }   
})

$('#section-a2').blur((field) => {
    let a2Section = $(field.target);
    let a2SectionMessage = $('#section-a2-message');

    if (a2Section.val() == '') {
        a2SectionMessage.attr('data-error', 'Campo Obrigatório')
        a2Section.addClass('invalid');
    } else if(a2Section.val() < 0) {
        a2SectionMessage.attr('data-error', 'A2 não pode ser negativo')
        a2Section.addClass('invalid');
    }   
})

$('#length-l2').blur((field) => {
    let l2Length = $(field.target);
    let l2LengthMessage = $('#length-l2-message');

    if (l2Length.val() == '') {
        l2LengthMessage.attr('data-error', 'Campo Obrigatório')
        l2Length.addClass('invalid');
    } else if(l2Length.val() < 0) {
        l2LengthMessage.attr('data-error', 'L2 não pode ser negativo')
        l2Length.addClass('invalid');
    }   
})