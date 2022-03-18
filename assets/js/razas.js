import Personaje from "./Personaje.js"

class Saiyajin extends Personaje {
    constructor(nombre, img, poder, raza) {
        super(nombre, img, poder, raza)
    }

    Transformacion() {
        const podr = this.getPoder()
        this.setPoder(parseInt(poder * 1.8))
        
}
}