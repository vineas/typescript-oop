describe('Static', () => { 
    class Configutation {
        static NAME: string = "Belajar Typescript OOP";
        static VERSION: number = 1.0;
        static AUTHOR: string = "Alvienas Yandika";
    }

    class MathUtil {

        static sum(...values: number[]): number {
            let total = 0;
            for (let value of values) {
                total += value;
            }
            return total;
        }
    }

    it('should support static method', () => {
        console.info(MathUtil.sum(1,2,3,4,5));
    })

    it('should support', () => {
        console.info(Configutation.NAME);
        console.info(Configutation.VERSION);
        console.info(Configutation.AUTHOR);        
    })
 })