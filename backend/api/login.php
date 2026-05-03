<?php
require_once '../config/cors.php';
require_once '../config/db.php';

$data = json_decode(file_get_contents("php://input"), true);
$email = $data['email'] ?? '';
$password = $data['password'] ?? '';

if (empty($email) || empty($password)) {
    http_response_code(400);
    echo json_encode(['error' => 'Email és jelszó megadása kötelező!']);
    exit;
}

try {
    $stmt = $pdo->prepare("SELECT id, email, password_hash FROM users WHERE email = :email");
    $stmt->execute(['email' => $email]);
    $user = $stmt->fetch();

    if ($user) {
    if (password_verify($password, $user['password_hash'])) {
        // Sikeres
    } else {
        // Helytelen jelszó
        echo json_encode(['error' => 'A jelszó nem egyezik a tárolt hash-sel!']);
        exit;
    }
} else {
    echo json_encode(['error' => 'Nincs ilyen felhasználó!']);
    exit;
}

    if ($user && password_verify($password, $user['password_hash'])) {
        echo json_encode([
            'message' => 'Sikeres belépés',
            'user' => [
                'id' => $user['id'],
                'email' => $user['email']
            ]
        ]);
    } else {
        http_response_code(401);
        echo json_encode(['error' => 'Hibás email cím vagy jelszó!']);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Szerverhiba történt.']);
}
?>