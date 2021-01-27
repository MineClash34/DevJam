<!DOCTYPE html>
<html>
    <?php
        session_start();
    ?>
    <head>
        <meta charset="utf-8"/> <!--Encodage-->
        <link rel="icon" href="images/devjamtest.gif">
        <link rel="stylesheet" href="style.css"> <!--Style importer de ./style.css-->
        <title>Dev Jam</title> <!--Titre (troll) de la page-->
    </head>
    <body>
        <h1 class="title"><code>Dev Jam</code></h1>
        <p class="loginon">
            Connecté sur : <?= $_SESSION['pseudo']; ?>
        </p>
        <p class="presentation">
            Bienvenue sur le site crée pour la participation à la <a target="_blank" href="https://discord.gg/pBxEgKB"  style="color: whitesmoke;">Dev Jam</a> de Mine_Clash_34 et Jules.
        </p>
        <p class="devjam">
            <img src="images/devjamtest.gif" alt="DevJam's server logo" title="DevJam's server logo"> La Dev Jam qu'est-ce que c'est ?<br/>
            La Dev Jam est un concours de développement organisé par le serveur <code>Le coin des dev's</code><br/>
            Le but est de faire la meilleure réalisation dans un délai de 2 semaines sur un thème imposé.
        </p>
        <form action="start_snake.html" method="get">
            <input type="submit" value="SNAKE" class="start_snake">
        </form>
    </body>
</html>

