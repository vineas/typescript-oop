describe('Visibility', () => {    
    class Counter{
        // private counter: number = 0; //jika menggunakan private, maka counter tidak bisa di akses diluar class dan turunannya/child
        protected counter: number = 0; //jika protected, maka bisa digunakan diluar class dan turunannya
        
        public increment(): void{
            this.counter++;
        }

        public getCounter(): number{
            return this.counter;
        }
    }

    class DoubleCounter extends Counter {
        public increment(): void{
            this.counter += 2;
        }
    }

    it('should support private', () => {
        const counter = new Counter();
        counter.increment();
        counter.increment();
        counter.increment();
        console.info(counter.getCounter());
        
    });

    it('should support protected', () => {
        const doubleCounter = new DoubleCounter();
        doubleCounter.increment();
        doubleCounter.increment();
        doubleCounter.increment();
        console.info(doubleCounter.getCounter());
        
    });
 });

//  1 Jam 4 menit