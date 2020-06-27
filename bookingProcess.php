<?php
$customerName = isset($_POST['customerName']) ? $_POST['customerName'] : '';
$contactPhone = isset($_POST['contactPhone']) ? $_POST['contactPhone'] : '';
$pickUpAddress = isset($_POST['pickUpAddress']) ? $_POST['pickUpAddress'] : '';
$destinationAddress = isset($_POST['destinationAddress']) ? $_POST['destinationAddress'] : '';
$date = isset($_POST['date']) ? $_POST['date'] : '';
$time = isset($_POST['time']) ? $_POST['time'] : '';
$ok = true;
$messages = array();

if ( !isset($customerName) || empty($customerName) ) {
    $ok = false;
    $messages[] = 'customer name cannot be empty!';
}

if ( !isset($contactPhone) || empty($contactPhone) ) {
    $ok = false;
    $messages[] = 'contact Phone cannot be empty!';
}

if(!is_numeric($contactPhone))
{
     $ok = false;
    $messages[] = 'please enter correct phone number!';
}

if ( !isset($pickUpAddress) || empty($pickUpAddress) ) {
    $ok = false;
    $messages[] = 'pick Up Address cannot be empty!';
}

if ( !isset($destinationAddress) || empty($destinationAddress) ) {
    $ok = false;
    $messages[] = 'destinationAddress cannot be empty!';
}

if ( !isset($date) || empty($date) ) {
    $ok = false;
    $messages[] = 'date cannot be empty!';
}
if ( !isset($time) || empty($time) ) {
    $ok = false;
    $messages[] = 'time cannot be empty!';
}

if($ok)
{
        // sql info or use include 'file.inc'
    require_once('sqlinfo.inc.php');

    // The @ operator suppresses the display of any error messages
    // mysqli_connect returns false if connection failed, otherwise a connection value
    $conn = @mysqli_connect($sql_host,
                            $sql_user,
                            $sql_pass,
                            $sql_db
                           );

    // Checks if connection is successful

    if (!$conn) {
        $messages[] = 'Database connection failure ';
    } 
    else {
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
        
        
        $bookingStatus = "false";
        $query = "INSERT INTO $sql_tble (customerName,contactPhone, pickUpAddress,destinationAddress,pickUpDate,pickUptime,bookingStatus) VALUES('$customerName','$contactPhone', '$pickUpAddress','$destinationAddress','$date','$time','$bookingStatus')";

        // executes the query
        $result = mysqli_query($conn, $query);

        mysqli_close($conn);
    }  // if successful database connection

}

    


echo json_encode(
    array(
        'ok' => $ok,
        'messages' => $messages
    )
);
?>
