class Gimine {
    constructor() {
        this.list = [];
    }
    gime(item) {
        item.married = false;
        this.list.push(item);
        console.log(item);
    }

    giminesMedis() {
        for (let i = 0; i < this.list.length; i++) {
            const zmogus = this.list[i];
            let vestuvinisStatusas = '';
            if (zmogus.married === true) {
                vestuvinisStatusas = 'yra'
            }
            else {
                vestuvinisStatusas = 'nera'
            }
            console.log(`${i + 1}. ${zmogus.name} gime ${zmogus.year} metais ir ${vestuvinisStatusas} vedes.`)
        }
    }

    zmogausInformacija(index) {
        console.log(this.list[index]);

    }

    vestuves(index) {

        this.list[index].married = true;

    }

    mire(index) {

        const updatedList = [];

        for (let i = 0; i < this.list.length; i++) {
            if (i !== index) {
                updatedList.push(this.list[i]);
            }
        }

        this.list = updatedList;
    }
    skyrybos(index) {
        this.list[index].married = false;
    }

}






module.exports = Gimine;