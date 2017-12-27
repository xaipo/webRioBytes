<?php
require_once ("../conexion/conexion.php");
$db_table_name="disponibilidad_matri";

 if (!$db_connection) {
	die('No se ha podido conectar a la base de datos');
}

$sql= "SELECT * FROM `disponibilidad_matri`";
	mysql_select_db($db_name, $db_connection);
	$result = mysql_query($sql, $db_connection);
	$num = mysql_num_rows($result);

$arr = array();
if ($num > 0 )
{

	while($row = mysql_fetch_assoc($result)) {
		$arr[] = $row;	

	}

}
# JSON-encode the response
echo $json_response = json_encode($arr);

?>