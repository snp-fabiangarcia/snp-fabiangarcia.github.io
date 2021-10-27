function ValidateUser() {
    let user = document.getElementById("fnameID").value;
    if (user.length < 6) {
        alert('El usuario debe tener una longitud mínima de 6 caracteres')
        return false;
    }
    else {
        return true;
    }
}

function ValidateComment() {
    if (document.getElementById("commentID").value.length < 10) {
        alert('Escriba 10 caracteres como mínimo')
        return false;
    }
    else {
        return true;
    }
}