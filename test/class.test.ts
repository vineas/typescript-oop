describe('Class', () => { 
    class Customer {
        constructor() {
            console.info(`Data Created`);
        }
    }
    class Order{

    }
    it('should can create a class', () => {
        const customer: Customer = new Customer();
        const order: Order = new Order();
    })
    it('should can create constructor', () => {
        new Customer();
        new Customer();

    })
 })