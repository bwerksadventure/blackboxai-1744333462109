const conversation = {
    coverPage: {
        cid: Date.now().toString(36),
        ts: Date.now(),
        summary: "Simple conversation",
        sections: ["conv", "algColl"]
    },
    conv: [],
    ar: []
};

// Just say hello
const userInput = {
    txt: "Hello",
    mod: "text",
    pfc_input: {
        priority_retention: 8.5,
        evaluation_decisregard: 7.5,
        subconscious_disregard: 2.0,
        perspective_proximity_paradox: 0.5
    }
};

conversation.conv.push(userInput);
console.log("User:", userInput.txt);
console.log("Algorithm:", userInput.pfc_input);

// Response
const response = {
    txt: "Hello! Nice to meet you",
    mod: "text",
    alg: ["initial_contact"]
};

conversation.ar.push(response);
console.log("Minnie:", response.txt);
