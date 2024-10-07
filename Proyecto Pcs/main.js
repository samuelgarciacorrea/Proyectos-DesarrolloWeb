class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada
        this._marca = marca
    }
    get tipoEntrada(){
        return this._tipoEntrada
    }
    get marca(){
        return this._marca
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada
    }
    set marca(marca){
        this._marca = marca
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idRaton = ++Raton.contadorRatones
    }
    get idRaton(){
        return this._idRaton
    }

    toString(){
        return `Raton: ${this._idRaton}, ${this._tipoEntrada}, ${this._marca}`
    }
}

let raton1 = new Raton('usb','hp')
raton1.marca = 'microsft'
console.log(raton1.toString())


let raton2 = new Raton('bluethoot','dell')
console.log(raton2.toString())

class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idTeclado = ++Teclado.contadorTeclados
    }
    get idTeclado(){
        return this._idTeclado
    }

    toString(){
        return `Teclado: ${this._idTeclado}, ${this._tipoEntrada}, ${this._marca}`
    }
}

let teclado1 = new Teclado('cable','redragon')
let teclado2 = new Teclado('USB','HP')

console.log(teclado1.toString())

class Monitor{
    static contadorMonitores = 0
    constructor(marca, tamanio){
        this._idMonitor = ++Monitor.contadorMonitores
        this._marca = marca
        this._tamanio = tamanio
    }
    get idMonitor(){
        return this._idMonitor
    }
    get marca(){
        return this._marca
    }

    set marca(marca){
        this._marca = marca
    }
    get tamanio(){
        return this._tamanio
    }

    set tamanio(tamanio){
        this._tamanio = tamanio
    }

    toString(){
        return `Monitor: ${this._idMonitor}, ${this._marca}, ${this._tamanio}`
    }
}

let monitor1 = new Monitor('hp',15)
let monitor2 = new Monitor('LG',18)

monitor1.marca = 'lg'
monitor1.tamanio = 20
console.log(monitor1.toString())

class Computadora{
    static contadorComputadoras = 0

    constructor(nombre,monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadoras
        this._nombre = nombre
        this._monitor = monitor
        this._teclado = teclado
        this._raton = raton
    }

    get idComputadora(){
        return this._idComputadora
    }
    get monitor(){
        return this._monitor
    }

    set monitor(monitor){
        this._monitor = monitor
    }

    get teclado(){
        return this._teclado
    }

    set teclado(teclado){
        this._teclado = teclado
    }


    toString(){
        return `Computadora: ${this._idComputadora}, Nombre: ${this._nombre}, ${this._monitor}, ${this._teclado}, ${this._raton}`
    }
}

let computadora1 = new Computadora('Acer',monitor1,raton1,teclado1)
let computadora2 = new Computadora('Hp',monitor2,raton2,teclado2) 

console.log(computadora1.toString())

class Orden{
    static contadorOrdenes = 0
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes
        this._computadoras = []
    }
    get idOrden(){
        return this._idOrden
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora)
    }

    toString(){
        let computadorasOrden = ''
        for(let computadora of this._computadoras){
            computadorasOrden += '\n' + computadora.toString()
        }
        return `Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`
    }

    mostrarOrden(){
        console.log(this.toString())
    }
}   

let orden1 = new Orden(computadora1)
orden1.agregarComputadora(computadora1)
orden1.agregarComputadora(computadora2)
orden1.agregarComputadora(computadora1)



console.log(orden1.toString())