<?php
  class Desaparecido{
    public $idDesaparecido;
    public $nombre;
    public $primerApellido;
    public $segundoApellido;
    public $fileName;
    public $estatus;

    public function __construct($idDesapa,$nom,$primerApe,$segundoApe,$file,$est){
      $this->idDesaparecido = $idDesapa;
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


$app->get('/desaparecidos/:id',function($id) use ($app){
    include_once 'dbConnect.php';
    $dbInstancia = new dbConnect();
    $db =$dbInstancia->connect();
    $desaparecidos = array();

   $response = array();
    $response['status'] = "success";

   $sql = "SELECT id_desaparecido, nombre,primer_apellido,segundo_apellido,file_name,estatus FROM desaparecido where estatus = ".$id;
   $result = $db->query($sql);
   $row=0;
   if ($result->num_rows > 0) {
       while($row = $result->fetch_assoc()) {
           $desaparecido = new Desaparecido($row["id_desaparecido"],$row["nombre"],
           $row["primer_apellido"],$row["segundo_apellido"],$row["file_name"],$row["estatus"]);

           $desaparecidos[]=$desaparecido;
       }
    $response['data'] =  $desaparecidos;
   } else {
     $response['data'] = [];
   }

   $db->close();




   echoResponse(200, $response);
});

$app->post('/actualizarDesaparecido', function() use ($app) {

    $r = json_decode($app->request->getBody());

    $response['status'] = "success";
    $response['nombre'] = 'Id desaparecido' . $r->idDesaparecido;

    include_once 'dbConnect.php';
    $dbInstancia = new dbConnect();
    $db =$dbInstancia->connect();

    $sql = "update desaparecido set estatus = 2 where id_desaparecido= ".$r->idDesaparecido;
    $result = $db->query($sql);

    echoResponse(200, $response);
});

?>
