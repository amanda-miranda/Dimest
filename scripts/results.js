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
    console.log(inputs.pForce);

    let resultLambda1 = inputs.pForce * 2;

    $('#reaction-va').text(resultLambda1)
}