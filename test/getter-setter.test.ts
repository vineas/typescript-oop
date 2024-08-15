describe('Getter Setter', () => { 
    class Category {
        _name?: string;

        get name(): string {
            if(this._name){
                return this._name;
            }
            else {
                return "empty";
            }
        }

        set name(value: string) {
            if(value !== ""){
                this._name = value;
            }
        }
    }   

    it('should can create Getter Setter', () => {
        const category = new Category();
        console.info(category.name);
        category.name = "Food";
        console.info(category.name);
        category.name = ""; //namanya tidak akan berubah dari data sebelumnya. Seperti yang sudah ditetapkan pada set name
        console.info(category.name);
        
    })
 })