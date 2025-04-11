const analysis = {
    "coverPage": {
        "cid": Date.now().toString(36),
        "ts": Date.now(),
        "uid": Math.random().toString(36).substr(2),
        "summary": "Analysis of poem 'Never Really Mine' with emotional and thematic depth exploration",
        "sections": ["conv", "algColl", "meta", "evar"]
    },
    "conv": [
        {
            "txt": "Never Really Mine [POEM TEXT]",
            "mod": "text",
            "sent": "introspective",
            "pfc_input": {
                "priority_retention": 9.5,
                "evaluation_decisregard": 3.2,
                "subconscious_disregard": 1.8,
                "perspective_proximity_paradox": 1.2
            },
            "pfc_output": null
        }
    ],
    "ar": [
        {
            "txt": "The poem 'Never Really Mine' exhibits deep psychological complexity, exploring themes of internal conflict, unresolved trauma, and the perpetual nature of emotional battles. Key observations:\n\n1. Emotional Depth:\n- Recurring motif of buried secrets and hidden pain\n- Contrast between surface appearance and internal reality\n- Metaphorical use of physical spaces (ocean, below surface)\n\n2. Structural Elements:\n- Non-linear narrative reflecting psychological state\n- Repetitive patterns emphasizing emotional cycles\n- Use of questions as rhetorical devices\n\n3. Thematic Analysis:\n- Primary theme: The persistence of internal struggles\n- Secondary themes: Identity loss, emotional burial, perpetual conflict\n- Underlying message: The disconnect between external perception and internal reality",
            "mod": "text",
            "alg": [
                "emotional_pattern_recognition",
                "thematic_analysis",
                "metaphor_mapping",
                "psychological_depth_scanning"
            ],
            "cm": {
                "emotional_depth": 0.95,
                "complexity_level": 0.88,
                "psychological_resonance": 0.92,
                "metaphorical_density": 0.85
            }
        }
    ],
    "algColl": {
        "algs": [
            {
                "aid": "emo_pat_001",
                "desc": "Emotional pattern recognition in literary works",
                "pm": {
                    "pattern_depth": 0.9,
                    "emotional_resonance": 0.85
                }
            },
            {
                "aid": "theme_ana_002",
                "desc": "Thematic analysis and mapping",
                "pm": {
                    "theme_coherence": 0.88,
                    "symbolic_mapping": 0.92
                }
            }
        ]
    },
    "instr": [
        "Analyze emotional patterns in text",
        "Map metaphorical relationships",
        "Identify psychological depth markers",
        "Track thematic progression"
    ]
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = analysis;
}
