<?php
// Delete a product by ID
include 'db.php';
/* @var $pdo PDO */

$id = $_GET['id'];
$stmt = $pdo->prepare("DELETE FROM products WHERE id = :id");
$stmt->bindParam(':id', $id, PDO::PARAM_INT);
$stmt->execute();

header("Location: index.php");
exit();
