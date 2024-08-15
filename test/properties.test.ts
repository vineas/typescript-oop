describe('Properties', () => { 
    class Customer {
        readonly id: number; //properties
        age?: number; //properties opsional karna ada tanda "?"
        name: string = "Guest" ; //default properties, jika pada parameter namenya kosong maka akan terisin "Guest" secara default
        constructor(id: number, name: string ) { //jika ingin menggunakan default value, parameter "name" dihapus
            this.id = id;
            this.name = name; //jika ingin menggunakan default value, ini dihapus
        }
    }

    it('should can create a properties', () => {
        const customer: Customer = new Customer(1, "John");
        console.info(customer)
        const customer2 = new Customer(2, "Margareth");
        customer2.age = 23;
        console.info(customer2.name);
    })
 })