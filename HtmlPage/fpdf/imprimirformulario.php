
<?php
require('fpdf.php');


class PDF extends FPDF
{
// Cabecera de página
function Header()
{

      

    // Logo
    $this->Image('../images/cabecerapeke.png',5,5,200);  //derecha, Abajo, tamaño
    // Arial bold 15
    //ayos y meses
   $date = date('Y-m-d');
    $diff = abs(strtotime($date) - strtotime($_POST['fecha_na']));
    $years = floor($diff / (365*60*60*24));
    $months = floor(($diff - $years * 365*60*60*24) / (30*60*60*24));
    //Sexo
    if($_POST['sexo'] != "")
    {
        if($_POST['sexo'] == "M")
        {
            $sexo = "Masculino";
        }else
        {
            $sexo = "Femenino";
        }
    }else
    {
        $sexo = "";
    }



    // Movernos a la derecha
    //$this->Cell(80);
    // Título
    //$this->Cell(30,10,'Title',1,0,'C');
    // Salto de línea
    $this->Ln(20);
    $this->SetFont('Arial','B',8);
    $this->Cell(0,10,utf8_decode('Junin 13-35 entre,'),0,'L'); //largo,ancho,texto,borde,
    $this->Ln(4);
    $this->Cell(0,10,utf8_decode('Loja y Joaquin Chiriboga.'),0,'L');
    $this->Ln(4);
    $this->Cell(0,10,utf8_decode('Bloque 2 -Timbre N. 101+CALL'),0,'L');
    $this->Ln(4);
    $this->Cell(0,10,utf8_decode('Telephone: 032942094 - 0995789894'),0,'L');
    $this->Ln(4);
    $this->Cell(0,10,utf8_decode('E-mail: info@ceipekelandia.com'),0,'L');
    $this->Ln(4);
    $this->Cell(20,10,utf8_decode('ceipekelandia@hotmail.com'),0,'L');
    //margen primario
    $this->Line(10, 60, 200, 60);
    $this->Line(10, 60, 10, 287);
    $this->Line(200, 60, 200, 287);
    $this->Line(10, 287, 95, 287);
    $this->Line(112, 287, 200, 287);
    //margen secundario
    $this->Rect(12, 77, 186, 205); //puntox,y,ancho,alto
    $this->Line(12, 82, 158, 82);
    //margen foto
    $this->Rect(158, 77, 40, 48);

    //contenido niño niña
    $this->Ln(10);
    $this->SetFont('Times','B',10);
    $this->Cell(15,10,'Fecha:',0,0,'R');
    $this->SetFont('Times','',10);
    $this->Cell(30,10,$date,0,0,'L');
    $this->SetFont('Times','B',14);
    $this->Cell(100,10,'Formulario de Pre-matricula',0,0,'C');
    $this->SetFont('Times','B',10);
    $this->Cell(17,10,utf8_decode('Cédula:'),0,0,'R');
    $this->SetFont('Times','',10);
    $this->Cell(0,10,utf8_decode($_POST['cedula']),0,1,'L');
    $this->Ln(2);
    $this->SetFont('Times','B',11);
    $this->Cell(35,5,utf8_decode('Datos del niño/a'),0,1,'C');
    //datos niño o niña
    $this->Cell(2,5,utf8_decode(''),0,0,'R');
    $this->SetFont('Times','B',10);
    $this->Cell(15,5,utf8_decode('Nombre:'),0,0,'L');
    $this->SetFont('Times','',10);
    $this->Cell(131,5,utf8_decode($_POST['nombre']),0,1,'L');
    $this->Cell(2,5,utf8_decode(''),0,0,'R');
    $this->SetFont('Times','B',10);
    $this->Cell(33,5,utf8_decode('Fecha de nacimiento:'),0,0,'L');
    $this->SetFont('Times','',10);
    $this->Cell(113,5,utf8_decode($_POST['fecha_na']),0,1,'L');
    $this->Line(12, 87, 158, 87);
    $this->Ln(2);
    $this->Cell(2,5,utf8_decode(''),0,0,'R');
    $this->SetFont('Times','B',10);
    $this->Cell(15,5,utf8_decode('Edad:'),0,0,'L');
    $this->SetFont('Times','',10);
    $this->Cell(10,5,utf8_decode($years),1,0,'C');
    $this->Cell(15,5,utf8_decode('Años'),0,0,'L');
    $this->Cell(11,5,utf8_decode($months),1,0,'C');
    $this->Cell(20,5,utf8_decode('Meses'),0,0,'L');
    $this->SetFont('Times','B',10);
    $this->Cell(10,5,utf8_decode('Sexo:'),0,0,'L');
    $this->SetFont('Times','',10);
    $this->Cell(20,5,utf8_decode($sexo),0,1,'L');
    $this->Line(12, 96, 158, 96);
    $this->Ln(4);
    $this->Cell(2,5,utf8_decode(''),0,0,'R');
    $this->SetFont('Times','B',10);
    $this->Cell(15,5,utf8_decode('Talla:'),0,0,'L');
    $this->SetFont('Times','',10);
    $this->Cell(15,5,utf8_decode($_POST['talla']),1,0,'C');
    $this->Cell(15,5,utf8_decode('cm.'),0,0,'L');
    $this->SetFont('Times','B',10);
    $this->Cell(15,5,utf8_decode('Peso:'),0,0,'C');
    $this->SetFont('Times','',10);
    $this->Cell(15,5,utf8_decode($_POST['peso']),1,0,'C');
    $this->Cell(15,5,utf8_decode('cm.'),0,0,'L');
    $this->SetFont('Times','B',10);
    $this->Cell(15,5,utf8_decode('Torax:'),0,0,'L');
    $this->SetFont('Times','',10);
    $this->Cell(15,5,utf8_decode($_POST['torax']),1,0,'C');
    $this->Cell(42,5,utf8_decode('cm.'),0,0,'L');
    $this->Cell(15,10,'foto',0,0,'L');
    $this->Line(12, 105, 158, 105);
    $this->Ln(9);
    $this->Cell(2,5,utf8_decode(''),0,0,'R');
    $this->SetFont('Times','B',10);
    $this->Cell(17,5,utf8_decode('Jornada:'),0,0,'L');
    $this->SetFont('Times','',10);
    $this->Cell(65,5,utf8_decode($_POST['jornada']),0,0,'L');
    $this->Line(12, 115, 158, 115);
    $this->Ln(8);
    $this->Cell(2,5,utf8_decode(''),0,0,'R');
    $this->SetFont('Times','B',10);
    $this->Cell(13,5,utf8_decode('Nivel:'),0,0,'L');
    $this->SetFont('Times','',10);
    $this->Cell(65,5,utf8_decode($_POST['level']),0,0,'L');
    $this->Line(12, 120, 158, 120);
    $this->Ln(5);
    $this->Cell(2,5,utf8_decode(''),0,0,'R');
    $this->SetFont('Times','B',10);
    $this->Cell(30,5,utf8_decode('Servicio de lunch:'),0,0,'L');
    $this->SetFont('Times','',10);
    $this->Cell(65,5,utf8_decode($_POST['lunch']),0,0,'L');
    $this->Line(12, 125, 198, 125);
    $this->Line(12, 125, 198, 125);
    $this->Line(12, 125, 198, 125);
    $this->Ln(7);
    $this->Cell(2,5,utf8_decode(''),0,0,'R');
    $this->SetFont('Times','B',10);
    $this->Cell(55,5,utf8_decode('Alimentos que no puede consumir:'),0,0,'L');
    $this->SetFont('Times','',10);
    $this->Cell(130,5,utf8_decode($_POST['alimen_exc']),0,0,'L');
    $this->Line(68, 132, 198, 132);
    $this->Line(12, 137, 198, 137);
    $this->Line(12, 136.7, 198, 136.7);
    $this->Ln(12);
    $this->Cell(2,5,utf8_decode(''),0,0,'R');
    $this->SetFont('Times','B',10);
    $this->Cell(33,5,utf8_decode('Problemas de salud:'),0,0,'L');
    $this->SetFont('Times','',10);
    $this->Cell(130,5,utf8_decode($_POST['prob_salud']),0,0,'L');
    $this->Line(46, 144, 198, 144);
    $this->Line(12, 149, 198, 149);
    $this->Line(12, 148.7, 198, 148.7);
    $this->Ln(12);
    $this->Cell(2,5,utf8_decode(''),0,0,'R');
    $this->SetFont('Times','B',10);
    $this->Cell(33,5,utf8_decode('Alergias del niño/a:'),0,0,'L');
    $this->SetFont('Times','',10);
    $this->Cell(130,5,utf8_decode($_POST['aler_niño']),0,0,'L');
    $this->Line(46, 156, 198, 156);
    $this->Line(12, 161, 198, 161);
    $this->Line(12, 160.7, 198, 160.7);
    $this->Ln(12);
    $this->Cell(2,5,utf8_decode(''),0,0,'R');
    $this->SetFont('Times','B',10);
    $this->Cell(38,5,utf8_decode('Medicacion que recibe:'),0,0,'L');
    $this->SetFont('Times','',10);
    $this->Cell(130,5,utf8_decode($_POST['medi_recibe']),0,0,'L');
    $this->Line(51, 168, 198, 168);
    $this->Line(12, 173, 198, 173);
    $this->Line(12, 172.7, 198, 172.7);
    $this->Ln(12);
    $this->Cell(2,5,utf8_decode(''),0,0,'R');
    $this->SetFont('Times','B',10);
    $this->Cell(35,5,utf8_decode('Nombre del pediatra:'),0,0,'L');
    $this->SetFont('Times','',10);
    $this->Cell(65,5,utf8_decode($_POST['nom_pedia']),0,0,'L');
     $this->SetFont('Times','B',10);
    $this->Cell(35,5,utf8_decode('Telefono del pediatra:'),0,0,'L');
    $this->SetFont('Times','',10);
    $this->Cell(0,5,utf8_decode($_POST['numtelf']),0,0,'L');
    $this->Line(12, 183, 198, 183);
     $this->Ln(10);
    $this->Cell(2,5,utf8_decode(''),0,0,'R');
    $this->SetFont('Times','B',10);
    $this->Cell(80,5,utf8_decode('Persona encargada de entregar y recibir al niño/a:'),0,0,'L');
    $this->SetFont('Times','',10);
    $this->Cell(65,5,utf8_decode($_POST['reci_niño']),0,0,'L');
    $this->Line(12, 193, 198, 193);
     $this->Ln(10);
    $this->Cell(2,5,utf8_decode(''),0,0,'R');
    $this->SetFont('Times','B',10);
    $this->Cell(50,5,utf8_decode('En caso de energencia llamar a:'),0,0,'L');
    $this->SetFont('Times','',10);
    $this->Cell(65,5,utf8_decode($_POST['telf_emerg']),0,0,'L');
    $this->Line(12, 203, 198, 203);
     $this->Ln(10);
    $this->Cell(2,5,utf8_decode(''),0,0,'R');
    $this->SetFont('Times','B',10);
    $this->Cell(26,5,utf8_decode('Observaciones:'),0,0,'L');
    $this->SetFont('Times','',10);
    $this->Cell(130,5,utf8_decode($_POST['observ']),0,0,'L');
    $this->Line(39, 211, 198, 211);
    $this->Line(12, 216, 198, 216);
    $this->Line(12, 221, 198, 221);
    $this->Line(12, 220.7, 198, 220.7);
     $this->Ln(17);
    $this->Cell(2,5,utf8_decode(''),0,0,'R');
    $this->SetFont('Times','B',10);
    $this->Cell(47,5,utf8_decode('Centro de educacion anterior:'),0,0,'L');
    $this->SetFont('Times','',10);
    $this->Cell(65,5,utf8_decode($_POST['centro_edu']),0,0,'L');
    $this->Line(12, 230, 198, 230);

    $this->Ln(8);
    $this->Line(105, 230, 105, 270);
    $this->Cell(2,5,utf8_decode(''),0,0,'R');
    $this->SetFont('Times','B',10);
    $this->Cell(93,5,utf8_decode('Nomnre del padre:'),0,0,'L');
    $this->SetFont('Times','B',10);
    $this->Cell(0,5,utf8_decode("Nombre de la madre:"),0,1,'L');
    $this->Cell(2,5,utf8_decode(''),0,0,'R');
     $this->SetFont('Times','',10);
    $this->Cell(93,5,utf8_decode($_POST['nombrepa']),0,0,'L');
    $this->Cell(0,5,utf8_decode($_POST['nombrema']),0,1,'L');
    $this->Line(12, 240, 198, 240);
    $this->Cell(2,5,utf8_decode(''),0,0,'R');
    $this->SetFont('Times','B',10);
    $this->Cell(13,5,utf8_decode('Cedula:'),0,0,'L');
    $this->SetFont('Times','',10);
    $this->Cell(80,5,utf8_decode($_POST['cedulapa']),0,0,'L');
    $this->SetFont('Times','B',10);
     $this->Cell(13,5,utf8_decode('Cedula:'),0,0,'L');
     $this->SetFont('Times','',10);
    $this->Cell(80,5,utf8_decode($_POST['cedulama']),0,1,'L');
    $this->Line(12, 245, 198, 245);
    $this->Cell(2,5,utf8_decode(''),0,0,'R');
    $this->SetFont('Times','B',10);
    $this->Cell(30,5,utf8_decode('Lugar de trabajo:'),0,0,'L');
    $this->SetFont('Times','',10);
    $this->Cell(63,5,utf8_decode($_POST['lugar_trapa']),0,0,'L');
    $this->SetFont('Times','B',10);
     $this->Cell(30,5,utf8_decode('Lugar de trabajo:'),0,0,'L');
     $this->SetFont('Times','',10);
    $this->Cell(63,5,utf8_decode($_POST['lugar_tra_ma']),0,1,'L');
    $this->Line(12, 250, 198, 250);

     $this->Cell(2,5,utf8_decode(''),0,0,'R');
    $this->SetFont('Times','B',10);
    $this->Cell(93,5,utf8_decode('Direccion de trabajo:'),0,0,'L');
    $this->SetFont('Times','B',10);
    $this->Cell(0,5,utf8_decode("Direccion de trabajo:"),0,1,'L');
    $this->Cell(2,5,utf8_decode(''),0,0,'R');
     $this->SetFont('Times','',10);
    $this->Cell(93,5,utf8_decode($_POST['dir_trapa']),0,0,'L');
    $this->Cell(0,5,utf8_decode($_POST['dir_tra_ma']),0,1,'L');
    $this->Line(12, 260, 198, 260);
    $this->Cell(2,5,utf8_decode(''),0,0,'R');
    $this->SetFont('Times','B',10);
    $this->Cell(33,5,utf8_decode('Telefono del trabajo:'),0,0,'L');
    $this->SetFont('Times','',10);
    $this->Cell(60,5,utf8_decode($_POST['tel_padre']),0,0,'L');
    $this->SetFont('Times','B',10);
     $this->Cell(33,5,utf8_decode('Telefono del trabajo:'),0,0,'L');
     $this->SetFont('Times','',10);
    $this->Cell(63,5,utf8_decode($_POST['tel_madre']),0,1,'L');
    $this->Line(12, 265, 198, 265);
     $this->Cell(2,5,utf8_decode(''),0,0,'R');
    $this->SetFont('Times','B',10);
    $this->Cell(13,5,utf8_decode('Email:'),0,0,'L');
    $this->SetFont('Times','',10);
    $this->Cell(80,5,utf8_decode($_POST['email_padre']),0,0,'L');
    $this->SetFont('Times','B',10);
     $this->Cell(13,5,utf8_decode('Email:'),0,0,'L');
     $this->SetFont('Times','',10);
    $this->Cell(80,5,utf8_decode($_POST['email_madre']),0,1,'L');
     $this->Line(12, 270, 198, 270);
      $this->Cell(2,5,utf8_decode(''),0,0,'R');
    $this->SetFont('Times','B',10);
     $this->Cell(37,5,utf8_decode('Direccion de domicilio:'),0,0,'L');
     $this->SetFont('Times','',10);
     $this->Cell(149,5,utf8_decode($_POST['dir_do_pa']),0,1,'L');
    $this->Line(12, 275, 198, 275);
      $this->Cell(2,5,utf8_decode(''),0,0,'R');
    $this->SetFont('Times','B',10);
     $this->Cell(30,5,utf8_decode('Tipo de vivienda:'),0,0,'L');
     $this->SetFont('Times','',10);
     $this->Cell(40,5,utf8_decode($_POST['viviendapadre']),0,0,'L');
     $this->SetFont('Times','B',10);
     $this->Cell(25,5,utf8_decode('Celular papa:'),0,0,'L');
     $this->SetFont('Times','',10);
     $this->Cell(40,5,utf8_decode($_POST['tel_aux_pa']),0,0,'L');
      $this->SetFont('Times','B',10);
     $this->Cell(25,5,utf8_decode('Celular mama:'),0,0,'L');
     $this->SetFont('Times','',10);
     $this->Cell(20,5,utf8_decode($_POST['tel_aux_ma']),0,0,'L');
    $this->Line(12, 275, 198, 275);
    $this->Line(12, 230, 198, 230);


   
}

// Pie de página
function Footer()
{
    // Posición: a 1,5 cm del final
    $this->SetY(-15);
    // Arial italic 8
    $this->SetFont('Arial','I',8);
    // Número de página
    $this->Cell(0,10,'Page '.$this->PageNo().'/{nb}',0,0,'C');
}
}

// Creación del objeto de la clase heredada
$pdf = new PDF();
$pdf->AliasNbPages();
$pdf->AddPage();
$pdf->SetFont('Times','',12);
$pdf->Output();
?>