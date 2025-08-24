const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5500;

app.use(bodyParser.json());
app.use(cors());

// Mock AI Response
function mockAIResponse(message) {
    if (message.toLowerCase().includes("hello")) {
        return "Hi there! 👋 I'm your mock AI chatbot.";
    } else if (message.toLowerCase().includes("how are you")) {
        return "I'm just code, but I'm doing great!";
    } else {
        return `You said: "${message}". (This is a mock response)`;
    }
}

app.post("/chat", async (req, res) => {
    const userMessage = req.body.message;
    const aiResponse = mockAIResponse(userMessage);

    res.json({ reply: aiResponse });
});

app.listen(port, () => {
    console.log(`✅ Mock Chatbot server running at http://localhost:${port}`);
});
