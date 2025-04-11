/**
 * InnerMind OS - Main Entry Point
 * Integrates with existing AI framework
 */

const FunctionManager = require('./core/function_manager');
const CognitiveProcessor = require('./core/cognitive_processor');
const KnowledgeManager = require('./core/knowledge_manager');
const UIManager = require('./interface/ui_manager');
const DeviceInterface = require('./hal/device_interface');
const SystemManager = require('./kernel/system_manager');

class InnerMindOS {
    constructor() {
        // Initialize system components
        this.system = new SystemManager();
        this.functions = new FunctionManager();
        this.cognitive = new CognitiveProcessor();
        this.knowledge = new KnowledgeManager();
        this.ui = new UIManager();
        this.device = new DeviceInterface();

        // System state
        this.state = {
            initialized: false,
            deviceMode: 'folded',
            activeFunction: null
        };
    }

    async initialize() {
        try {
            // Initialize core system
            await this.system.initializeSystem();

            // Set up device interface
            this.device.updateDeviceState({ screenState: this.state.deviceMode });

            // Initialize UI
            this.ui.handleStateChange(this.state.deviceMode);

            this.state.initialized = true;

            return {
                status: 'success',
                message: 'InnerMind OS initialized successfully'
            };
        } catch (error) {
            return {
                status: 'error',
                message: error.message
            };
        }
    }

    async processInput(input) {
        if (!this.state.initialized) {
            throw new Error('System not initialized');
        }

        // Process through cognitive map
        const cognitiveResult = await this.cognitive.processTurn(input, {
            deviceState: this.state.deviceMode,
            activeFunction: this.state.activeFunction
        });

        // Update function context
        if (cognitiveResult.function !== this.state.activeFunction) {
            this.state.activeFunction = cognitiveResult.function;
            await this.functions.startNewEngagement(cognitiveResult.function);
        }

        // Process through active function
        const functionResult = await this.functions.executeInstructions(
            this.state.activeFunction,
            input
        );

        return {
            cognitive: cognitiveResult,
            function: functionResult,
            state: this.state
        };
    }

    async handleDeviceStateChange(newState) {
        this.state.deviceMode = newState;
        await this.device.updateDeviceState({ screenState: newState });
        await this.ui.handleStateChange(newState);
    }

    getSystemStatus() {
        return {
            state: this.state,
            device: this.device.getDeviceConfig(),
            system: this.system.getSystemStatus()
        };
    }
}

module.exports = InnerMindOS;
