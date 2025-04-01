document.addEventListener("DOMContentLoaded", function () {
    const curiosidades = [
        "O Internacional foi fundado em 4 de abril de 1909.",
        "O Inter conquistou a Libertadores e o Mundial de Clubes em 2006.",
        "O Beira-Rio foi um dos estádios da Copa do Mundo de 2014.",
        "O Internacional tem uma das maiores torcidas do Brasil.",
        "O Inter é o atual campeão gaúcho quebrando a seca de titulos.",
    ];

    const botao = document.getElementById("curiosidade-btn");
    const paragrafoCuriosidade = document.getElementById("curiosidade");

    botao.addEventListener("click", function () {
        const indice = Math.floor(Math.random() * curiosidades.length);
        paragrafoCuriosidade.textContent = curiosidades[indice];
        paragrafoCuriosidade.style.fontWeight = "bold";
        paragrafoCuriosidade.style.color = "red";
        paragrafoCuriosidade.style.textAlign = "center";
        paragrafoCuriosidade.style.marginTop = "10px";
    });
});
