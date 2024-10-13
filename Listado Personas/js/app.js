const personas = [
    new Persona('pedro','perez'),
    new Persona('maria','lopez'),
]

function mostrarPersonas(){
    let texto = ''
    for(let persona of personas){
        console.log(persona)
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`
    }
    document.getElementById('personas').innerHTML = texto
}

function agregarPersona(){
    const forma = document.forms['forma']
    const nombre = forma['nombre']
    const apellido = forma['apellido']
    if(!nombre.value || !apellido.value){
        alert('ingrese nombre y apellido')
        return
    }
    const persona = new Persona(nombre.value,apellido.value)
    console.log(persona)
    personas.push(persona)
    mostrarPersonas()
}
