<?php
require_once '../config/cors.php';
require_once '../config/db.php';
$data = json_decode(file_get_contents("php://input"), true);

$user_id = $data['user_id'] ?? null;
$old_password = $data['old_password'] ?? null;
$new_password = $data['new_password'] ?? null;

if (!$user_id || !$old_password || !$new_password) {
    http_response_code(400);
    echo json_encode(['error' => 'Hiányzó adatok!']);
    exit;
}

try {
    $stmt = $pdo->prepare("SELECT password_hash FROM users WHERE id = ?");
    $stmt->execute([$user_id]);
    $user = $stmt->fetch();

    if (!$user) {
        http_response_code(400);
        echo json_encode(['error' => 'Felhasználó nem található!']);
        exit;
    }

    if (!password_verify($old_password, $user['password_hash'])) {
        http_response_code(401);
        echo json_encode(['error' => 'A régi jelszó helytelen!']);
        exit;
    }

    $hashedPassword = password_hash($new_password, PASSWORD_DEFAULT);
    $updateStmt = $pdo->prepare("UPDATE users SET password_hash = ? WHERE id = ?");
    $updateStmt->execute([$hashedPassword, $user_id]);

    echo json_encode(['success' => true]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Hiba történt: ' . $e->getMessage()]);
}