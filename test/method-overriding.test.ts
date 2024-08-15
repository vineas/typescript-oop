describe('Method Overriding', () => {    

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
            console.info(`Hello ${name}, my name is ${this.name}, I am your manager`);
        }
    } 

    it('should can create a method overriding', () => {
        const employee = new Employee("Martha");
        employee.sayHello("John");
        const manager = new Manager("Margareth");
        manager.sayHello("Muhammad");
    });
 });