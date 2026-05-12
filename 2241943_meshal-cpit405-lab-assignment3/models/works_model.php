<?php

require_once __DIR__ . '/db.php';

function getAllWorks() {
    $conn = getConnection();
    $result = $conn->query("SELECT * FROM works ORDER BY id ASC");
    $works = [];
    while ($row = $result->fetch_assoc()) {
        $works[] = $row;
    }
    $conn->close();
    return $works;
}

?>
