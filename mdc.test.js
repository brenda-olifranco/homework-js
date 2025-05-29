const { num1, num2, mdc } = require('./mdc')

describe('Calculo do MDC', () => {
    it('Deve calcular o MDC entre dois números', () => {
        expect(mdc(num1, num2)).toBe(10)
    });
});