//document.getElementById("nombre").setAttribute("value", "Johan")

document.getElementById("saludarBtn").addEventListener("click", () => {
    let nombrePersona = document.getElementById("nombre").value
    if(!nombrePersona)
        alert("Debe ingresar el nombre")
    else
        alert("Hola "+nombrePersona+"!!!!")
})

