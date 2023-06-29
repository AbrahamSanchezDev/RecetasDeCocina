<?php
include_once 'config.php';

if ($conn->connect_error) {
    echo "Error en la conexion";
} else {
    $name = $_POST['nombre'];
    $email = $_POST['correo'];
    $tel = $_POST['telefono'];

    $sql = "INSERT INTO contactos(nombre,correo,telefono) VALUES ('$name','$email','$tel');";
    if($conn -> query($sql) === TRUE){

        // loggerRegister($conn,$sql);
        echo "<br>";
        echo ("Posted!");
        // header("Location:../index.html");
        
    }
    else{
        echo "FAIL!";
        // header("Location:../index.html");
    }  
}
    

?>