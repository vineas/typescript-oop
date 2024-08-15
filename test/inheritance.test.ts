describe('Inheritance', () => { 

    class Employee {
        name: string
        constructor(name: string) {
            this.name = name
        }
    }

    class Manager extends Employee { //turunan dari employee dengan keyword "extends"
    }

    class Director extends Manager { //turunan dari manajer dengan keyword "extends"

    }

    it('should can create a Inheritance', () => {
        const employee = new Employee("John");
        console.info(employee.name);
        const manager = new Manager("Margareth");
        console.info(manager.name);
        const director = new Director("Sally");
        console.info(director.name);
    })
 })