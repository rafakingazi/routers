<?php
/*
    Database Connections
*/

// Return database connection
function pgConnection() {
	$conn = new PDO ("pgsql:host=localhost;dbname=dar_router;port=5432","raphaelmartin","", array(PDO::ATTR_PERSISTENT => true));
    return $conn;
}

?>
