<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

require_once '../config/db.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['user_id'], $data['task_id'], $data['status'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Hiányzó adatok']);
    exit;
}

try {
    $stmt = $pdo->prepare("
        INSERT INTO user_task_progress (user_id, task_id, status) 
        VALUES (:u, :t, :s)
        ON DUPLICATE KEY UPDATE status = :s
    ");
    $stmt->execute(['u' => $data['user_id'], 't' => $data['task_id'], 's' => $data['status']]);

    echo json_encode(['success' => true]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
?>