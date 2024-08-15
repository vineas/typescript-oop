describe('Super Method', () => {    

    class Employee {
        name: string;

        constructor(name: string){
            this.name = name;
        }
        sayHello(name: string){
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }

    class Manager extends Employee {
        sayHello(name: string){
            super.sayHello(name); //infonya akan sama dengan method di parent class
            console.info(`And, I am your manager`); //tetapi ada tambahan informasi tambahan
        }
    } 

    it('should can create a super method', () => {
        const employee = new Employee("Martha");
        employee.sayHello("John");
        const manager = new Manager("Margareth");
        manager.sayHello("Muhammad");
    });
 });