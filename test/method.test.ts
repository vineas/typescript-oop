describe('Method', () => { 
    class Customer {
        readonly id: number; 
        age?: number; 
        name: string = "Guest" ; 
        constructor(id: number, name: string ) { 
            this.id = id;
            this.name = name;
        }
        sayHello(name: string){ //ini Method sayHello, sebuah function di dalam Class disebut method
            console.info(`Hello ${name}, my name is ${this.name}`); 
        }
    }

    it('should can create a method', () => {
        const customer = new Customer(1, "John");
        customer.sayHello("Margareth");
    })
 })