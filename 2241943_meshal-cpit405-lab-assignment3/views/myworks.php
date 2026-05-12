<?php
$activePage = 'myworks';
$pageTitle  = 'My Works - Meshal Algahtani';
require_once '../models/works_model.php';
$works = getAllWorks();
include 'header.php';
?>

<section class="card">
    <h2>My Works</h2>
    <div class="works-grid">
        <?php foreach ($works as $work): ?>
        <div class="work-card">
            <span class="tag"><?php echo htmlspecialchars($work['tag']); ?></span>
            <h3><?php echo htmlspecialchars($work['title']); ?></h3>
            <p><?php echo htmlspecialchars($work['description']); ?></p>
            <?php if (!empty($work['link'])): ?>
                <a href="<?php echo htmlspecialchars($work['link']); ?>" class="open-btn">Open App</a>
            <?php endif; ?>
        </div>
        <?php endforeach; ?>
    </div>
</section>

<?php include 'footer.php'; ?>
