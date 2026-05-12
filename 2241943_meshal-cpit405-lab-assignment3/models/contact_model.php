<?php

require_once __DIR__ . '/db.php';

function saveMessage($name, $email, $type, $message) {
    $conn = getConnection();
    $stmt = $conn->prepare("INSERT INTO contact_messages (name, email, type, message) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $email, $type, $message);
    $stmt->execute();
    $stmt->close();
    $conn->close();
}

?>
