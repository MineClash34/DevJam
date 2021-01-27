<!DOCTYPE html>
<html>
        <?php
        $time = time();
        $pseudo = $_POST['username'];
        $mdp = $_POST['mdp'];
        $servername = "localhost";
        $username = "user";
        $password = "password";
        $db = "site";
        session_start();
        $_SESSION['pseudo'] = $pseudo;
        // Create connection
        $conn = new mysqli($servername, $username, $password, $db);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "SELECT Password FROM user WHERE Username = '{$pseudo}'";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            if ($row["Password"] === $mdp) {
                $sql = "UPDATE user SET ConnexionTime = {$time} WHERE Username = '{$pseudo}'";

                $conn->query($sql);
                ?>
                    <meta http-equiv="refresh" content="0; URL=accueil.php">
                <?php
            } else {
                ?>
                <meta http-equiv="refresh" content="0; URL=error.html">
                <?php 
            }
        } 
    } elseif (!empty($mdp)) {
        $sql = "INSERT INTO user (Username, Password, ConnexionTime)
                VALUES ('{$pseudo}', '{$mdp}', {$time})";

        $conn->query($sql);   
        ?>
        <meta http-equiv="refresh" content="0; URL=accueil.php">
        <?php
    } else {
            ?>
            <meta http-equiv="refresh" content="0; URL=error.html">
            <?php
    }
        $conn->close();
        ?>
</html>
