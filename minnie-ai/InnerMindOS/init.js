/**
 * InnerMind OS Initialization
 * Sets up required directory structure and initial files
 */

const fs = require('fs');
const path = require('path');

// Directory structure based on specifications
const directories = [
    // Knowledge Base Directories
    './knowledge_base',
    './knowledge_base/generate_caption',
    './knowledge_base/set_reminder',
    
    // Cache and Ghost Files
    './cache',
    './ghost_files',
    
    // Core System Directories
    './core',
    './interface',
    './services',
    './hal',
    './kernel'
];

// Initial knowledge base files
const knowledgeFiles = {
    'generate_caption': [
        'caption_patterns.txt',
        'content_analysis.txt'
    ],
    'set_reminder': [
        'reminder_patterns.txt',
        'time_processing.txt'
    ]
};

// Cache files
const cacheFiles = [
    'synonyms.txt',
    'patterns.txt'
];

function initializeSystem() {
    console.log('Initializing InnerMind OS...');

    // Create directories
    directories.forEach(dir => {
        const fullPath = path.join(__dirname, dir);
        if (!fs.existsSync(fullPath)) {
            fs.mkdirSync(fullPath, { recursive: true });
            console.log(`Created directory: ${dir}`);
        }
    });

    // Create knowledge base files
    Object.entries(knowledgeFiles).forEach(([function_name, files]) => {
        files.forEach(file => {
            const filePath = path.join(__dirname, 'knowledge_base', function_name, file);
            if (!fs.existsSync(filePath)) {
                fs.writeFileSync(filePath, '');
                console.log(`Created knowledge base file: ${file}`);
            }
        });
    });

    // Create cache files
    cacheFiles.forEach(file => {
        const filePath = path.join(__dirname, 'cache', file);
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, '');
            console.log(`Created cache file: ${file}`);
        }
    });

    console.log('System initialization complete.');
    return {
        status: 'success',
        message: 'InnerMind OS initialized successfully'
    };
}

// Run initialization if called directly
if (require.main === module) {
    initializeSystem();
}

module.exports = {
    initialize: initializeSystem
};
