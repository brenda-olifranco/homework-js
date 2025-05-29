const { somaMultiplos } = require('./somaMultiplos')

describe('Somando os múltiplos', () => {
    it('Deve retornar a soma de todos os múltiplos de 5 ou 7 abaixo de 1000', () => {
        expect(somaMultiplos()).toBe(156361)
    });
});