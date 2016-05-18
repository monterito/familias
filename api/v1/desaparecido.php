<?php
  class Desaparecido{
    public $nombre;
    public $primerApellido;
    public $segundoApellido;
    public $fileName;
    public $estatus;

    public function __construct($nom,$primerApe,$segundoApe,$file,$est){
      $this->nombre =$nom;
      $this->primerApellido = $primerApe;
      $this->segundoApellido = $segundoApe;
      $this->fileName = $file;
      $this->estatus = $est;
    }

  }

$app->post('/altaDesaparecido', function() use ($app) {

    $r = json_decode($app->request->getBody());


    $response = array();

    $db = new DbHandler();
    $response = array();

    $response['status'] = "success";
    $response['message'] = 'Uorales chamaco si que se esta guardando' . $r->nombre;

    echoResponse(200, $response);
});


$app->get('/desaparecidos',function(){
    include_once 'dbConnect.php';
   $dbInstancia = new dbConnect();
  $db =$dbInstancia->connect();
   $desaparecidos = array();

   $sql = "SELECT id_desaparecido, nombre,primer_apellido,segundo_apellido,file_name,estatus FROM desaparecido";
   $result = $db->query($sql);
   $row=0;
   if ($result->num_rows > 0) {
       while($row = $result->fetch_assoc()) {
           //echo "id: " . $row["id_desaparecido"]. " - Name: " . $row["nombre"]. " " . $row["primer_apellido"]. "<br>";
           $desaparecido = new Desaparecido($row["id_desaparecido"],$row["nombre"],$row["primer_apellido"],$row["segundo_apellido"],$row["file_name"],$row["estatus"]);
           $desaparecidos[]=$desaparecido;
       }
   } else {
       echo "0 results";
   }
   $db->close();

    $response = array();
    $response['status'] = "success";
    $response['data'] =  $desaparecidos;

   echoResponse(200, $response);
});
?>
