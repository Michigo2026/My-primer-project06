const InputNombre = document.querySelector('#InputNombre');
const InputApellido = document.querySelector('#InputApellido');
const InputCedula = document.querySelector('#InputCedula');
const btnagregar = document.querySelector('#btnagregar');
const Contenidotabla = document.querySelector('#Contenidotabla');

btnagregar.addEventListener('click', (e) => {
    e.preventDefault();

    const Nom = InputNombre.value;
    const Ape = InputApellido.value;
    const Ced = InputCedula.value;

    if (Nom.trim() === "") {
        alert('Falta el nombre');
        return;
    }
    
    if (Ape.trim() === "") {
        alert('Falta el Apellido');
        return;
    }

    if (Ced.trim() === "") {
        alert('Falta la Cedula');
        return;
    }

    const Tr_NuevaFila = document.createElement('tr');
    const Td_Nombre = document.createElement('td');
    const Td_Apellido = document.createElement('td');
    const Td_Cedula = document.createElement('td');
    const Td_Accion = document.createElement('td');
    const BTNQuitar = document.createElement('button');

    BTNQuitar.textContent = 'Quitar';
    
    BTNQuitar.addEventListener('click', (e) => {
        e.preventDefault();
        Tr_NuevaFila.remove();
    });

    Td_Nombre.textContent = Nom;
    Td_Apellido.textContent = Ape;
    Td_Cedula.textContent = Ced;

    Td_Accion.appendChild(BTNQuitar);

    Tr_NuevaFila.appendChild(Td_Nombre);
    Tr_NuevaFila.appendChild(Td_Apellido);
    Tr_NuevaFila.appendChild(Td_Cedula);
    Tr_NuevaFila.appendChild(Td_Accion); 
    
    Contenidotabla.appendChild(Tr_NuevaFila);

    InputNombre.value = "";
    InputApellido.value = "";
    InputCedula.value = "";
    
    InputNombre.focus();
});
