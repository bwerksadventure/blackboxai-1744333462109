// Real conversation data structure
const conversation = {
    coverPage: {
        cid: Date.now().toString(36),
        ts: Date.now(),
        uid: Math.random().toString(36).substr(2),
        summary: "Technical discussion about software development",
        sections: ["conv", "algColl", "meta", "evar"]
    },
    conv: [
        {
            txt: "What's the best way to structure a React application for scalability?",
            mod: "text",
            sent: "neutral",
            pfc_input: {
                priority_retention: 8.7,
                evaluation_decisregard: 3.2,
                subconscious_disregard: 1.5,
                perspective_proximity_paradox: 0.8
            }
        },
        {
            txt: "For scalable React applications, I recommend following these key principles: 1) Component-based architecture with clear separation of concerns, 2) State management using Redux or Context API for larger applications, 3) Custom hooks for reusable logic, 4) Feature-based folder structure instead of type-based. Would you like me to elaborate on any of these points?",
            mod: "text",
            alg: ["technical_analysis", "structured_response"],
            cm: {
                topic: "software_architecture",
                confidence: 0.92,
                expertise_level: "advanced"
            }
        },
        {
            txt: "Could you explain more about feature-based folder structure?",
            mod: "text",
            sent: "curious",
            pfc_input: {
                priority_retention: 9.1,
                evaluation_decisregard: 2.8,
                subconscious_disregard: 1.2,
                perspective_proximity_paradox: 0.6
            }
        },
        {
            txt: "In a feature-based folder structure, instead of having separate folders for components, reducers, and actions, you organize code by feature or domain. For example, 'user-authentication' folder would contain all related components, styles, tests, and logic. This improves maintainability, makes code more modular, and helps teams work independently on different features. It's particularly effective for large-scale applications where multiple teams collaborate.",
            mod: "text",
            alg: ["detailed_explanation", "context_awareness"],
            cm: {
                topic: "code_organization",
                confidence: 0.95,
                expertise_level: "advanced"
            }
        }
    ],
    ar: [],
    algColl: {
        algs: ["technical_analysis", "structured_response", "detailed_explanation", "context_awareness"]
    },
    instr: [
        "Maintain technical accuracy in responses",
        "Provide detailed explanations when requested",
        "Keep context of the development discussion"
    ]
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = conversation;
}
