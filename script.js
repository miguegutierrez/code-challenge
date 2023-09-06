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

    const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        };
        
        fetch('https://jsonplaceholder.typicode.com/posts', options)
  .then(data => {
      if (!data.ok) {
        throw Error(data.status);
       }
       return data.json();
      }).then(formData => {
      console.log(formData);


}).catch(e => {
    console.log(e);
    });
})