    document.getElementById("saludarBtn").addEventListener("click", () => {
        let nombrePersona = document.getElementById("nombre").value
        if(!nombrePersona)
            alert("Debe ingresar el nombre")
        else
            alert("Hola "+nombrePersona+"!!!!")
    })

    function saludar(){
        let nombrePersona = document.getElementById("nombre").value
        if(!nombrePersona)
            alert("Debe ingresar el nombre")
        else
            alert("Hola "+nombrePersona+"!!!!")
    }