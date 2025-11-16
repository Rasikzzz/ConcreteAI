document.getElementById("predictForm").addEventListener("submit", function (e) {
    e.preventDefault();
    predict();
});

function predict() {

    const inputs = [
        parseFloat(document.getElementById("cement").value) || 0,
        parseFloat(document.getElementById("slag").value) || 0,
        parseFloat(document.getElementById("flyash").value) || 0,
        parseFloat(document.getElementById("water").value) || 0,
        parseFloat(document.getElementById("superplasticizer").value) || 0,
        parseFloat(document.getElementById("coarseaggregate").value) || 0,
        parseFloat(document.getElementById("fineaggregate").value) || 0,
        parseFloat(document.getElementById("age").value) || 0
    ];

    const intercept = -28.82355499969256;
    const coef = [
        0.11899393, 0.1085356, 0.08215181, -0.13527626,
        0.31056994, 0.01786715, 0.02409978, 0.11643864
    ];

    let y = intercept;
    for (let i = 0; i < coef.length; i++) {
        y += coef[i] * inputs[i];
    }

    document.getElementById("resultText").innerText =
        `Predicted Strength: ${y.toFixed(2)} MPa`;

    const box = document.getElementById("resultBox");
    box.classList.add("show");
}
