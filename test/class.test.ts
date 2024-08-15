describe('Class', () => { 
    class Customer { //Class
        constructor() {
            console.info(`Data Created`);
        }
    }
    class Order{ //Class

    }

    it('should can create a class', () => {
        const customer: Customer = new Customer(); //Object
        const order: Order = new Order(); //Object
    })
    it('should can create constructor', () => {
        new Customer();
        new Customer();

    })
 })