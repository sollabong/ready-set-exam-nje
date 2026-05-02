<?php
require_once '../config/cors.php';
require_once '../config/db.php';

$subject_id = $_GET['subject_id'] ?? '';

try {
    $stmt = $pdo->prepare("SELECT id, question, answer, `explain` FROM tasks WHERE subject_id = :subject_id");
    $stmt->execute(['subject_id' => $subject_id]);
    $tasks = $stmt->fetchAll();

    header('Content-Type: application/json');
    echo json_encode($tasks);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Hiba történt a feladatok lekérésekor.']);
}
?>