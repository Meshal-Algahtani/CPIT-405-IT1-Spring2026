<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $pageTitle ?? 'Meshal Algahtani'; ?></title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>

<header>
    <div class="header-info">
        <h1>Meshal Mohammed Algahtani</h1>
        <p>IT Student | Cybersecurity</p>
    </div>
    <nav>
        <ul>
            <li><a href="index.php" <?php echo ($activePage ?? '') == 'home'    ? 'class="active"' : ''; ?>>Home</a></li>
            <li><a href="labs.php" <?php echo ($activePage ?? '') == 'labs'    ? 'class="active"' : ''; ?>>Labs</a></li>
            <li><a href="myworks.php" <?php echo ($activePage ?? '') == 'myworks' ? 'class="active"' : ''; ?>>My Works</a></li>
            <li><a href="contact.php" <?php echo ($activePage ?? '') == 'contact' ? 'class="active"' : ''; ?>>Contact</a></li>
        </ul>
    </nav>
</header>

<div class="container">
    <aside class="sidebar">
        <div class="profile-card">
            <div class="profile-pic">
                <img src="../meshal_algahtani.jpg" class="profile-pic" alt="Meshal">
            </div>
            <h3>Contact Info</h3>
            <hr>
            <p>Email:<br><a style="font-size:15px;" href="mailto:malgahtani0069@stu.kau.edu.sa">Malgahtani0069@stu.kau.edu.sa</a></p>
            <p>Phone:<br><a href="tel:+966550246971">+966550246971</a></p>
            <div class="social-links">
                <a href="https://github.com/Meshal-Algahtani" target="_blank"><img src="../GitHubIcon.png" alt="GitHub"></a>
                <a href="https://www.linkedin.com/in/meshal-algahtani-13a938145/" target="_blank"><img src="../LinkedInIcon.png" alt="LinkedIn"></a>
            </div>
        </div>
    </aside>

    <main class="content">
