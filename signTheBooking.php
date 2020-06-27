
<?php
// sql info or use include 'file.inc'
require_once('sqlinfo.inc.php');
$keyword = isset($_GET['keyword']) ? $_GET['keyword'] : '';
// The @ operator suppresses the display of any error messages
// mysqli_connect returns false if connection failed, otherwise a connection value
$conn = @mysqli_connect($sql_host,
                        $sql_user,
                        $sql_pass,
                        $sql_db
                       );
$result = mysqli_query($conn, 
    "CREATE TABLE IF NOT EXISTS assignment2Table (
   	id INT AUTO_INCREMENT PRIMARY KEY ,
    customerName CHAR(40),
    contactPhone CHAR(30),
    pickUpAddress CHAR(120),
    destinationAddress CHAR(120),
    pickUpDate DATE,
    pickUpTime TIME,
    bookingStatus CHAR(20)
)");


$result = mysqli_query($conn, "
UPDATE assignment2Table
SET 
    bookingStatus = 'true'
WHERE
    id = '$keyword';
");
$data = array();
while ($row = mysqli_fetch_object($result))
{
   $data[] = $row;
}
//echo json_encode($keyword);
echo json_encode($data);
exit();
?>