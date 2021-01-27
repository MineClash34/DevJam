<?php
    session_start();
    $time = time();
    $score = $_POST["score"];
    $servername = "localhost";
    $username = "user";
    $password = "password";
    $db = "site";
    // Create connection
    $conn = new mysqli($servername, $username, $password, $db);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT score FROM game WHERE username = '{$_SESSION['pseudo']}'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        if ($row["score"] > $score) {
            $sql = "UPDATE game SET score = {$score} WHERE Username = '{$pseudo}'";

            $conn->query($sql);
    } 
}
} else {
    $sql = "INSERT INTO game (username, score)
            VALUES ('{$_SESSION['pseudo']}', '{$score}')";

    $conn->query($sql);   
}
    $conn->close();
    ?>
