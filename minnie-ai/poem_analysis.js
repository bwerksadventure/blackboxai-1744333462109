const conversation = {
    coverPage: {
        cid: Date.now().toString(36),
        ts: Date.now(),
        uid: Math.random().toString(36).substr(2),
        summary: "Analysis of poem 'Never Really Mine' through cognitive framework",
        sections: ["conv", "algColl", "meta", "evar"]
    },
    conv: [
        {
            txt: "Never Really Mine\nDo you hear the scream from all that can't be undone?\nCan't you see what remains in all that's forever left unseen?\nA war that's always waging beneath.\nThe infinite reflection, ending where it begun?\nDamaged perfection infinitely captures elusive reflections shattered,\nperspective without direction subjective to never learning the lesson.\nDid you know there was no end when the damage was what you begin?\nWhen the feeling of pain finally has its name, its grave to be claimed...\nConsumed and lost in the wake of everything you carried, secrets poorly buried,\nstories never told, a cemetery of broken hearts is all you hold.\nLost in the quake, suspended in the moment waiting for the shake.\nBalanced on a fault line, where the darkness hides behind the smile,\na darkness that...\nReaching through the explosions, praying they bring an end swiftly.\nJust to find the darkness grows, while the war wages on.\nYour soul a martyr, your heart beats on.\nGasp for air, just a breath & prepare to fight, no end in sight.\nBelow you sink, the further you fall, the higher it rises.\nWhat remains to be seen, awaits in the echo of silence,\na silence that holds the weight of secrets, poorly buried.\nBelow the surface, disembodied scattered portions of emotions swept away in shadows.\nDeeper than are hidden in the ocean's darkness.",
            mod: "text",
            sent: "introspective",
            pfc_input: {
                priority_retention: 9.8,        // High retention due to emotional depth
                evaluation_decisregard: 4.2,    // Higher disregard due to metaphorical nature
                subconscious_disregard: 1.8,    // Lower disregard due to personal connection
                perspective_proximity_paradox: 1.4  // Higher paradox due to complex perspectives
            }
        },
        {
            txt: "The poem exhibits layered psychological depth, with recurring themes of buried trauma and perpetual internal conflict. The metaphorical framework creates a cognitive map of emotional landscapes.",
            mod: "text",
            alg: ["emotional_pattern_recognition", "metaphor_analysis", "psychological_depth_mapping"],
            cm: {
                topic: "psychological_exploration",
                confidence: 0.95,
                depth_level: "profound",
                emotional_resonance: 0.92
            }
        }
    ],
    ar: [],
    algColl: {
        algs: ["emotional_pattern_recognition", "metaphor_analysis", "psychological_depth_mapping", "context_awareness"]
    },
    instr: [
        "Map emotional patterns in metaphorical framework",
        "Analyze psychological depth through cognitive mapping",
        "Maintain context of emotional exploration"
    ]
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = conversation;
}
