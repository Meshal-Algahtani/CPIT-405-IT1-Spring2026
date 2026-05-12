<?php
$activePage = 'labs';
$pageTitle  = 'Labs - Meshal Algahtani';
require_once '../models/labs_model.php';
$labs = getAllLabs();
include 'header.php';
?>

<section id="labs" class="card">
    <h2>Labs & Projects</h2>

    <h3>Completed Labs</h3>
    <table>
        <tr>
            <th>Lab</th>
            <th>Topic</th>
            <th>Status</th>
            <th>Link</th>
        </tr>
        <?php foreach ($labs as $lab): ?>
        <tr>
            <td>Lab <?php echo htmlspecialchars($lab['lab_number']); ?></td>
            <td><?php echo htmlspecialchars($lab['topic']); ?></td>
            <td><?php echo htmlspecialchars($lab['status']); ?></td>
            <td>
                <?php if (!empty($lab['link'])): ?>
                    <a href="<?php echo htmlspecialchars($lab['link']); ?>">Open</a>
                <?php else: ?>
                    N/A
                <?php endif; ?>
            </td>
        </tr>
        <?php endforeach; ?>
    </table>
</section>

<?php include 'footer.php'; ?>
