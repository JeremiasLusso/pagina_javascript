function resultado()
{
    var nomb1 = document.getElementById("nombre1").value;
    var apell= document.getElementById("apellido").value;
    var tel= document.getElementById("telefono").value;

    if(nomb1 == "")
    {
        alert("ingrese su nombre en el campo requerido");
    }
    if(apell == "")
    {
        alert("ingrese su apellido en el campo requerido");
    }
    if(tel == "")
    {
        alert("ingrese su numero de telefono en el campo requerido");
    }
    
    document.getElementById("resultado1").innerHTML = nomb1 + " " + apell + " su turno ha sido guardado, pronto sera notificado a traves de su numero: " + tel;
}
