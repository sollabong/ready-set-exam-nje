<?php
require_once '../config/cors.php'; 
require_once '../config/db.php';

try {

    $sql = "SELECT s.id AS subject_id, s.name AS subject_name, sem.name AS semester_name 
            FROM subjects s 
            JOIN semesters sem ON s.semester_id = sem.id 
            ORDER BY sem.id, s.id";

    $stmt = $pdo->query($sql);
    $subjects = $stmt->fetchAll();

    header('Content-Type: application/json');
    
    echo json_encode($subjects);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Hiba történt a lekérdezésben: ' . $e->getMessage()]);
}
?>