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
        if(employee instanceof VicePresident){
            const vice = employee as VicePresident;
            console.info(`Hello VP ${vice.name}`);
        } 
        else if(employee instanceof Manager){
            const manager = employee as Manager;
            console.info(`Hello Manager ${manager.name}`);
        } 
        else {
            console.info(`Hello Employee ${employee.name}`);
        }
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