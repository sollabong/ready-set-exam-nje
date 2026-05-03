<?php
require_once '../config/cors.php';
require_once '../config/db.php';

$data = json_decode(file_get_contents("php://input"), true);
$email = $data['email'] ?? '';
$password = $data['password'] ?? '';

if (empty($email) || empty($password)) {
    echo json_encode(['error' => 'Minden mező kitöltése kötelező!']);
    exit;
}

try {
    $passwordHash = password_hash($password, PASSWORD_DEFAULT);

    $stmt = $pdo->prepare("INSERT INTO users (email, password_hash) VALUES (:email, :hash)");
    $stmt->execute(['email' => $email, 'hash' => $passwordHash]);

    echo json_encode(['message' => 'Sikeres regisztráció!']);
} catch (PDOException $e) {
    if ($e->getCode() == '23000') { 
        echo json_encode(['error' => 'Ez az email cím már regisztrálva van!']);
    } else {
        echo json_encode(['error' => 'Hiba történt a regisztráció során.']);
    }
}
?>