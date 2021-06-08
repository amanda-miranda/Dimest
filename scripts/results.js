$('#new-calculator').click(() => {
    scrollTo("html", 1000);
    $('#results').fadeOut(1000);
});

$('#download').click(() => $('#results').printThis());

function doShowResults(inputs) {
    // Calcula Dimensionamento


    // Adiciona os Resultados no HTML
    calculate(inputs);

    $('#results').fadeIn(1000);
    scrollTo("#results", 1000);
}

function calculate(inputs) {

    let p = parseInt(inputs.p);
    let w = parseInt(inputs.w);
    let l1 = parseInt(inputs.l1);
    let l2 = parseInt(inputs.l2);
    let l3 = parseInt(inputs.l3);
    let l4 = parseInt(inputs.l4);
    let l5 = parseInt(inputs.l5);
    let e1 = parseInt(inputs.e1);
    let e2 = parseInt(inputs.e2);
    let a1 = parseInt(inputs.a1);
    let a2 = parseInt(inputs.a2);
    let t1 = parseInt(inputs.t1);
    let t2 = parseInt(inputs.t2);

 
    let vd = ((w*((l3*l3)/2))+(w*(l4+l5)*(l4+l5))+(p*(l3+l4)))/(((a1*e1*l2*l3*l3)/(a2*e2*l1*(l3+l4)))+l3+l4);
    let vb = (vd*a1*e1*l2*l3)/(a2*e2*l1*(l3+l4));
    let va = p+(w*l3)+(2*w*(l4+l5))-vb-vd;
    let tc = (vb*l1)/(e1*a1);
    let te = (vd*l2)/(e2*a2);
    let tf = (tc/l3)*(l3+l4+l5);
    let ebc = tc/l1;
    let ede = te/l2;

    $('#reaction-va').html(va.toFixed(2));
    $('#reaction-vb').html(vb.toFixed(2));
    $('#reaction-vd').html(vd.toFixed(2));
    $('#displacement-tc').html(tc.toFixed(2));
    $('#displacement-te').html(te.toFixed(2));
    $('#displacement-tf').html(tf.toFixed(2));
    $('#deformation-ebc').html(ebc.toFixed(2));
    $('#deformation-ede').html(ede.toFixed(2));

}