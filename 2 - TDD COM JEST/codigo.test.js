const {soma, dobro} = require('./codigo')

describe('funções matemáticas', () => {
    beforeAll(()=>{
        console.log('Antes de tudo')
    })

    beforeEach(() => {
        console.log('Antes de cada teste')
    });

    afterEach(() => {
        console.log('Depois de cada teste')
    });

    afterAll(() => {
        console.log('Depois de tudo')
    });

    it('soma de dois valores', () => {
        expect(soma(2, 5)).toBe(7)
        expect(soma(5, 5)).toBe(10)
    });

    it('dobro de um valor', () => {
        expect(dobro(4)).toBe(8)
    });

});