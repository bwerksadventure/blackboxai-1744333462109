/**
 * InnerMind OS Startup Script
 * Launches the application on Samsung Galaxy Fold 3
 */

const InnerMindOS = require('./index');

async function startApp() {
    try {
        console.log('Starting InnerMind OS...');
        
        // Create and initialize system
        const system = new InnerMindOS();
        await system.initialize();
        
        console.log('System initialized successfully');
        console.log('Device State:', system.getSystemStatus().state);
        
        return system;
    } catch (error) {
        console.error('Failed to start system:', error);
        process.exit(1);
    }
}

// Start the application
if (require.main === module) {
    startApp();
}

module.exports = startApp;
