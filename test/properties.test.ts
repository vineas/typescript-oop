describe('Class', () => { 
    class Customer {
        readonly id: number;
        name: string;
        age?: number;
        constructor(id: number, name: string) {
            this.id = id;
            this.name = name;
        }
    }

    class Order{

    }

    it('should can create a class', () => {
        const customer: Customer = new Customer(1, "John");
        const order: Order = new Order();
        console.info(customer)
    })
    it('should can create constructor', () => {
        const customer2 = new Customer(2, "Margareth");
        const customer3 = new Customer(3, "Noah");
        customer3.age = 23;
        console.info(customer2, customer3);

    })
 })