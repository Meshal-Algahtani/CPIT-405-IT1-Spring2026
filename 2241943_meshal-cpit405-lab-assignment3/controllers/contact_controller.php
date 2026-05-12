<?php

require_once __DIR__ . '/../models/contact_model.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name    = $_POST['name'];
    $email   = $_POST['email'];
    $type    = $_POST['type'];
    $message = $_POST['message'];

    saveMessage($name, $email, $type, $message);

    header('Location: ../views/contact.php?success=1');
    exit;
}

header('Location: ../views/contact.php');
exit;

?>
