function calcularEstatisticas() {
    const branca = parseInt(document.getElementById('branca').value) || 0;
    const parda = parseInt(document.getElementById('parda').value) || 0;
    const preta = parseInt(document.getElementById('preta').value) || 0;
    const amarela = parseInt(document.getElementById('amarela').value) || 0;
    const indigena = parseInt(document.getElementById('indigena').value) || 0;

    const totalPessoas = branca + parda + preta + amarela + indigena;

    const porcentagemBranca = totalPessoas ? (branca / totalPessoas) * 100 : 0;
    const porcentagemParda = totalPessoas ? (parda / totalPessoas) * 100 : 0;
    const porcentagemPreta = totalPessoas ? (preta / totalPessoas) * 100 : 0;
    const porcentagemAmarela = totalPessoas ? (amarela / totalPessoas) * 100 : 0;
    const porcentagemIndigena = totalPessoas ? (indigena / totalPessoas) * 100 : 0;

    const resultados = document.getElementById('resultados');
    resultados.innerHTML = `
        <h2>Resultados</h2>
        <p>Total de pessoas Pesquisadas: ${totalPessoas}</p>
        <p>Pessoas que se declaram brancas: ${branca} (${porcentagemBranca.toFixed(2)}%)</p>
        <div class="barra">
            <div class="progresso" style="width: ${porcentagemBranca}%;"></div>
        </div>
        <p>Pessoas que se declaram pardas: ${parda} (${porcentagemParda.toFixed(2)}%)</p>
        <div class="barra">
            <div class="progresso" style="width: ${porcentagemParda}%;"></div>
        </div>
        <p>Pessoas que se declaram pretas: ${preta} (${porcentagemPreta.toFixed(2)}%)</p>
        <div class="barra">
            <div class="progresso" style="width: ${porcentagemPreta}%;"></div>
        </div>
        <p>Pessoas que se declaram amarelas: ${amarela} (${porcentagemAmarela.toFixed(2)}%)</p>
        <div class="barra">
            <div class="progresso" style="width: ${porcentagemAmarela}%;"></div>
        </div>
        <p>Pessoas que se declaram indígenas: ${indigena} (${porcentagemIndigena.toFixed(2)}%)</p>
        <div class="barra">
            <div class="progresso" style="width: ${porcentagemIndigena}%;"></div>
        </div>
    `;
}
