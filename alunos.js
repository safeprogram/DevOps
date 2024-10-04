class Aluno {
    constructor(nome, notas) {
      this.nome = nome;
      this.notas = notas; // Array com 2 notas

 // Verifica se todas as notas estão entre 0 e 10
 if (!Array.isArray(notas) || notas.length === 0) {
    throw new Error('O array de notas não pode estar vazio.');
  }
  notas.forEach((nota) => {
    if (typeof nota !== 'number' || nota < 0 || nota > 10) {
      throw new Error('Todas as notas devem estar no intervalo entre 0 e 10.');
    }
  });
}

calcularMedia() {
     const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
     let media = soma / this.notas.length;
// Verifica se a média está acima do permitido
if (media > 10.0) {
    throw new Error('Média acima da máxima permitida!');
  }
  return media;
}
obterMencao() {
    const media = this.calcularMedia();
    if (media >= 9) return 'SS';
    if (media >= 7) return 'MS';
    if (media >= 5) return 'MM';
    return 'MI';
    }
statusAprovacao() {
    const mencao = this.obterMencao();
    if (mencao !== 'MI' && mencao !== 'II') {
        return 'aprovad@';
    }
    return 'reprovad@';
  }
}

module.exports = Aluno;