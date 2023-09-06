document.getElementById("regBtn").addEventListener("click", function () {
    // Obtiene los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fechaDeNacimiento = document.getElementById("fechaDeNacimiento").value;

    // Crea un objeto con los datos del formulario
    const formData = {
        nombre : nombre,
        apellido : apellido,
        fechaDeNacimiento : fechaDeNacimiento
    };

    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    
    .then(response => response.json())
    .then(data => {
        // Maneja la respuesta del servidor
        console.log(data);
        

        
        
    })
    .catch(error => {
        console.error("Error al enviar los datos:", error);
    });


})