describe('Super Constructor', () => {    

    class Person {
        name: string;

        constructor(name: string){
            this.name = name;
        }
    }

    class Employee extends Person {
        department: string
        constructor(name: string, department: string){
            super(name); //tidak perlu menuliskan this.name, karena sudah ada di parent class Person
            this.department = department;
        }
    } 

    it('should can create a Super Constructor', () => {
        const employee = new Employee("John", "IT");
        console.info(employee);
        console.info(employee.name);
    });
 });