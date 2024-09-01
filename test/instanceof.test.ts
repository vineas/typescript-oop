describe('Instanceof', () => {
    class Employee { }
    class Manager { }

    const budi = new Employee();
    const andi = new Manager();

    it('using typeof', () => {
        console.info(typeof budi); //jika menggunakan typeof maka outputnya akan menjadi Object
        console.info(typeof andi); 

    });

    it('using instanceof', () => {
        expect(budi instanceof Employee).toBe(true); //Instanceof berbentuk boolean 
        expect(budi instanceof Manager).toBe(false);

        expect(andi instanceof Manager).toBe(true);
        expect(andi instanceof Employee).toBe(false);


    });
});