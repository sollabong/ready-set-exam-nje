<?php
require_once '../config/cors.php'; 
require_once '../config/db.php';

$user_id = $_GET['user_id'] ?? null;

if (!$user_id) {
    echo json_encode(['error' => 'User ID hiányzik']);
    exit;
}

try {
    $stmtTotal = $pdo->query("SELECT COUNT(*) FROM tasks");
    $total = $stmtTotal->fetchColumn();

    $stmtLearned = $pdo->prepare("SELECT COUNT(*) FROM user_task_progress WHERE user_id = ? AND status = 'learned'");
    $stmtLearned->execute([$user_id]);
    $learned = $stmtLearned->fetchColumn();

    $stmtRepeat = $pdo->prepare("SELECT COUNT(*) FROM user_task_progress WHERE user_id = ? AND status = 'repeat'");
    $stmtRepeat->execute([$user_id]); 
    $repeat = $stmtRepeat->fetchColumn();
    
    echo json_encode([
        'total_tasks' => (int)$total,
        'learned_tasks' => (int)$learned,
        'repeat_tasks' => (int)$repeat
    ]);
} catch (Exception $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>