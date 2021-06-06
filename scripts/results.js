$('#new-calculator').click(() => {
    scrollTo("html", 2000);
    $('#results').fadeOut(2000);
});

function doShowResults(inputs) {
    // Calcula Dimensionamento
    // Adiciona os Resultados no HTML
    calculate(inputs);

    $('#results').fadeIn(2000);
    scrollTo("#results", 2000);
}

function calculate(inputs) {
    console.log(inputs.pForce);
}