/**
 * InnerMind OS Main Application
 * Integrates all components as specified in requirements
 */

const FunctionManager = require('./core/function_manager');
const CognitiveProcessor = require('./core/cognitive_processor');
const KnowledgeManager = require('./core/knowledge_manager');
const UIManager = require('./interface/ui_manager');
const DeviceInterface = require('./hal/device_interface');

class InnerMindOS {
    constructor() {
        // Core Components
        this.functionManager = new FunctionManager();
        this.cognitiveProcessor = new CognitiveProcessor();
        this.knowledgeManager = new KnowledgeManager();
        
        // Interface Components
        this.uiManager = new UIManager();
        this.deviceInterface = new DeviceInterface();

        // System State
        this.currentFunction = null;
        this.deviceState = 'folded';
    }

    // Process user input
    async processInput(input) {
        try {
            // Determine function based on input
            const functionName = this.determineFunction(input);
            
            // Start new engagement if function changes
            if (!this.currentFunction || this.currentFunction !== functionName) {
                this.currentFunction = functionName;
                this.functionManager.startNewEngagement(functionName);
            }

            // Access function-specific knowledge
            const knowledge = this.knowledgeManager.accessFunctionKnowledge(functionName);

            // Process through cognitive map
            const cognitiveResponse = this.cognitiveProcessor.processTurn(
                input,
                this.functionManager.miniAI.functions[functionName]
            );

            // Execute function instructions
            this.functionManager.executeInstructions(functionName, input);

            // Update UI based on device state
            const uiState = this.uiManager.handleStateChange(this.deviceState);

            return {
                response: cognitiveResponse,
                ui: uiState,
                function: functionName,
                knowledge: knowledge
            };

        } catch (error) {
            return {
                status: 'error',
                error: error.message
            };
        }
    }

    // Handle device state changes
    handleDeviceStateChange(newState) {
        this.deviceState = newState;
        this.deviceInterface.updateDeviceState({ screenState: newState });
        this.uiManager.handleStateChange(newState);
    }

    // Determine function based on input
    determineFunction(input) {
        // Simple function determination logic
        if (input.includes('caption')) {
            return 'generate_caption';
        } else if (input.includes('reminder')) {
            return 'set_reminder';
        }
        return 'default';
    }

    // Handle ghost file updates
    async handleGhostFileUpdate(file) {
        const result = await this.knowledgeManager.handleGhostFile({
            type: 'activate',
            file: file
        });

        if (result.status === 'success') {
            await this.knowledgeManager.handleGhostFile({
                type: 'integrate',
                file: file
            });
        }

        return result;
    }

    // Get system status
    getStatus() {
        return {
            currentFunction: this.currentFunction,
            deviceState: this.deviceState,
            knowledge: this.knowledgeManager.knowledge_base,
            cognitive: this.cognitiveProcessor.cognitive_map
        };
    }
}

module.exports = InnerMindOS;
