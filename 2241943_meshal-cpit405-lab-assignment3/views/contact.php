<?php
$activePage = 'contact';
$pageTitle  = 'Contact - Meshal Algahtani';
include 'header.php';
?>

<section id="contact" class="card">
    <h2>Contact Me</h2>

    <?php if (isset($_GET['success'])): ?>
        <p style="color: #38bdf8; margin-bottom: 16px;">Message sent successfully!</p>
    <?php endif; ?>

    <form action="../controllers/contact_controller.php" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label>Message Type:</label>
        <div class="radio-group">
            <input type="radio" id="inquiry" name="type" value="Inquiry" checked> Inquiry
            <input type="radio" id="feedback" name="type" value="Feedback"> Feedback
        </div>

        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Send</button>
    </form>
</section>

<?php include 'footer.php'; ?>
