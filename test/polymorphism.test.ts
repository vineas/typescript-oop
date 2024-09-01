describe('Polymorphism', () => { 

    class Employee {
        constructor(public name : string) {

        }

    }

    class Manager extends Employee {

    }

    class VicePresident extends Manager {

    }

    function sayHello (employee: Employee): void{
        console.info(`Hello ${employee.name}`)
    }


    it('should support', () => {
        let employee: Employee = new Employee("Alvienas");
        console.info(employee);

        employee = new Manager("Alvienas");
        console.info(employee);

        employee = new VicePresident("Alvienas");
        console.info(employee);

    })

    it('should support method parameter polymorphism', () => {
        sayHello(new Employee("Alvienas"));
        sayHello(new Manager("Yandika"));
        sayHello(new VicePresident("Joko"));
    })
 })