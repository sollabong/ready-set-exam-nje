<?php
require_once '../config/cors.php';
require_once '../config/db.php';

$data = json_decode(file_get_contents("php://input"), true);
$user_id = $data['user_id'] ?? null;

if (!$user_id) {
    echo json_encode(['error' => 'Nincs User ID megadva']);
    exit;
}

try {
    $pdo->beginTransaction();

    $stmt1 = $pdo->prepare("DELETE FROM user_task_progress WHERE user_id = ?");
    $stmt1->execute([$user_id]);

    $stmt2 = $pdo->prepare("DELETE FROM users WHERE id = ?");
    $stmt2->execute([$user_id]);

    $pdo->commit();
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    $pdo->rollBack();
    echo json_encode(['error' => 'Sikertelen törlés: ' . $e->getMessage()]);
}
?>