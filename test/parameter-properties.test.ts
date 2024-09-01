describe('Parameter Properties', () => {    

    class Person {
        constructor(public name: string) { //langsung saja begini, tidak perlu deklarasikan di class maupun di constructor

        }
    }

    it('should support parameter properties', () => {
        const person = new Person('Eko');
        console.info(person.name);
        person.name = 'budiono';
        console.info(person.name);
    });
 });