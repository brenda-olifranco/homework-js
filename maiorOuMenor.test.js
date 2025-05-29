const { indiceMaior,  indiceMenor } = require('./maiorOuMenor')

describe('Maior indice numérico', () => {
    it('Deve retornar o maior indice numérico', () => {
        expect(indiceMaior).toBe(7)
    });
    it('Deve retornar o menor indice numérico', () => {
        expect(indiceMenor).toBe(0)
    });
});