<?php

require_once __DIR__ . '/db.php';

function getAllLabs() {
    $conn = getConnection();
    $result = $conn->query("SELECT * FROM labs ORDER BY lab_number ASC");
    $labs = [];
    while ($row = $result->fetch_assoc()) {
        $labs[] = $row;
    }
    $conn->close();
    return $labs;
}

?>
