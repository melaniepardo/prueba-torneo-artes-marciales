class Personaje {
    constructor(nombre, img, poder, raza) {
        const Nombre = nombre
        const Img = img
        const Poder = poder
        const Raza = raza

        this.getNombre = () => Nombre
        this.getImg = () => Img
        this.getPoder = () => Poder
        this.getRaza = () => Raza

    }
    get Nombre() {
        return this.getNombre()
    }

    get Img() {
         return this.getImg()
    }
    get Poder() {
        return this.getPoder()
    }
    get Raza() {
        return this.getRaza()
    }
    set Poder(poder) {
        return this.getPoder(poder)
    }
}
export default Personaje