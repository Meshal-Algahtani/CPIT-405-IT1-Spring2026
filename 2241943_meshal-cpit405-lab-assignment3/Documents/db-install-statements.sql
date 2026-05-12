CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

CREATE TABLE IF NOT EXISTS labs (
    id         INT AUTO_INCREMENT PRIMARY KEY,
    lab_number INT          NOT NULL,
    topic      VARCHAR(100) NOT NULL,
    status     VARCHAR(50)  NOT NULL,
    link       VARCHAR(200)
);

CREATE TABLE IF NOT EXISTS works (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    title       VARCHAR(100) NOT NULL,
    description TEXT         NOT NULL,
    tag         VARCHAR(50)  NOT NULL,
    link        VARCHAR(200)
);

CREATE TABLE IF NOT EXISTS contact_messages (
    id         INT AUTO_INCREMENT PRIMARY KEY,
    name       VARCHAR(100) NOT NULL,
    email      VARCHAR(100) NOT NULL,
    type       VARCHAR(50)  NOT NULL,
    message    TEXT         NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO labs (lab_number, topic, status, link) VALUES
(1,  'Setup',                            'Completed', NULL),
(2,  'Introduction, HTML Structure',     'Completed', NULL),
(3,  'CSS Structure and Properties 1',   'Completed', NULL),
(4,  'CSS Structure and Properties 2',   'Completed', NULL),
(5,  'DOM API and JS Events',            'Completed', NULL),
(6,  'JavaScript',                       'Completed', NULL),
(7,  'Ajax',                             'Completed', NULL),
(8,  'React',                            'Completed', NULL),
(9,  'PHP Basics',                       'Completed', NULL),
(10, 'PHP and MariaDB',                  'Completed', NULL);

INSERT INTO works (title, description, tag, link) VALUES
('Trivia Quiz App',  'An interactive multiple-choice quiz game built with vanilla JavaScript. Tests your knowledge across different topics. Tracks your score and shows results at the end.',                                         'JavaScript',       'app1.php'),
('Country Explorer', 'Search and explore countries using the REST Countries public API. Displays each country flag, capital, region, and population for every result.',                                                             'JavaScript + API', 'app2.php'),
('TIAA',             'A Threat Intelligence platform that aggregates and correlates Indicators of Compromise (IOCs) from multiple sources into a unified dashboard with LLM-assisted relevance scoring.',                           'Python / AI',      NULL),
('AlertSense',       'Reducing False Positives in SIEM Using Agentic AI. An AI agent that automatically triages SIEM alerts, suppresses duplicates, and surfaces only the alerts that need human review.',                         'AI / SIEM',        NULL);
