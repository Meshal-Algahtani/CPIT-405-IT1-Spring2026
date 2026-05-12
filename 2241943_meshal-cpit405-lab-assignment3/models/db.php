<?php

function getConnection() {
    $conn = new mysqli("localhost", "root", "", "portfolio_db");
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    return $conn;
}

?>
