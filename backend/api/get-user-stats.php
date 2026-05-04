<?php
require_once '../config/cors.php'; 
require_once '../config/db.php';

$user_id = $_GET['user_id'] ?? null;

if (!$user_id) {
    echo json_encode(['error' => 'User ID hiányzik']);
    exit;
}

try {

    $stmt = $pdo->prepare("
        SELECT 
            (SELECT COUNT(*) FROM tasks) as total_tasks,
            (SELECT COUNT(*) FROM user_task_progress WHERE user_id = ? AND status = 'learned') as learned_tasks
    ");
    
    $stmt->execute([$user_id]);
    $stats = $stmt->fetch(PDO::FETCH_ASSOC);
    
    echo json_encode($stats);
} catch (Exception $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>