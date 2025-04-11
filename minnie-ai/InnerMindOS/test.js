/**
 * InnerMind OS Test Suite
 * Verifies all components work according to specifications
 */

const InnerMindOS = require('./app');
const assert = require('assert');

async function runTests() {
    console.log('Starting InnerMind OS tests...');
    
    // Initialize system
    const system = new InnerMindOS();
    
    // Test cases
    const tests = [
        testFunctionEngagement,
        testCognitiveProcessing,
        testKnowledgeAccess,
        testDeviceStates,
        testGhostFileUpdate
    ];

    // Run tests
    for (const test of tests) {
        try {
            await test(system);
            console.log(`✓ ${test.name} passed`);
        } catch (error) {
            console.error(`✗ ${test.name} failed:`, error.message);
        }
    }
}

// Test function engagement
async function testFunctionEngagement(system) {
    const input = "Generate a caption for this image";
    const result = await system.processInput(input);
    
    assert(result.function === 'generate_caption', 'Function determination failed');
    assert(result.response.alg.includes('caption_gen_001'), 'Algorithm selection failed');
}

// Test cognitive processing
async function testCognitiveProcessing(system) {
    const input = "Set a reminder for tomorrow";
    const result = await system.processInput(input);
    
    assert(result.response.cm, 'Cognitive map not generated');
    assert(result.response.cm.perspective, 'Perspective calculation failed');
}

// Test knowledge base access
async function testKnowledgeAccess(system) {
    const result = await system.processInput("Generate caption");
    
    assert(result.knowledge.status === 'success', 'Knowledge base access failed');
    assert(result.knowledge.files.length > 0, 'No knowledge files returned');
}

// Test device state handling
async function testDeviceStates(system) {
    // Test folded state
    system.handleDeviceStateChange('folded');
    let status = system.getStatus();
    assert(status.deviceState === 'folded', 'Folded state transition failed');

    // Test unfolded state
    system.handleDeviceStateChange('unfolded');
    status = system.getStatus();
    assert(status.deviceState === 'unfolded', 'Unfolded state transition failed');
}

// Test ghost file updates
async function testGhostFileUpdate(system) {
    const result = await system.handleGhostFileUpdate('new_capability.txt');
    assert(result.status === 'success', 'Ghost file update failed');
}

// Run tests if called directly
if (require.main === module) {
    runTests().catch(console.error);
}

module.exports = {
    runTests
};
