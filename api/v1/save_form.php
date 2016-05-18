<?php

     include_once '../config.php';
     $target_dir = "../../app/images/";
     $nombre = $_POST['nombre'];
     $primerApellido = $_POST['primerApellido'];
     $segundoApellido = $_POST['segundoApellido'];

     print_r($_FILES);
     $time = time();
     $target_file = $target_dir .$time. basename($_FILES["file"]["name"]);

     move_uploaded_file($_FILES["file"]["tmp_name"], $target_file);

     // Create connection
     $conn = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);
     // Check connection
     if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
     }

     $sql = "INSERT INTO DESAPARECIDO (nombre,primer_apellido,segundo_apellido,file_name,estatus)
     VALUES ('".$nombre."','".$primerApellido."','".$segundoApellido."','".$time.basename($_FILES["file"]["name"])."','1')";

     if ($conn->query($sql) === TRUE) {
         echo json_encode($_FILES["file"]); // new file uploaded
     } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
     }

     $conn->close();

?>
