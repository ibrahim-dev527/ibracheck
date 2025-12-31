/* ============================================
   ENHANCED CHATBOT FUNCTIONALITY
   ============================================ */

const chatbotToggle = document.getElementById('chatbotToggle');
const chatbot = document.getElementById('chatbot');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotSend = document.getElementById('chatbotSend');
const chatbotMessages = document.getElementById('chatbotMessages');

// Toggle chatbot
chatbotToggle.addEventListener('click', () => {
    chatbot.classList.toggle('active');
});

chatbotClose.addEventListener('click', () => {
    chatbot.classList.remove('active');
});

// Send message
function sendMessage() {
    const userMessage = chatbotInput.value.trim();
    if (userMessage === '') return;
    
    displayMessage(userMessage, 'user');
    chatbotInput.value = '';
    
    setTimeout(() => {
        const botResponse = generateResponse(userMessage);
        displayMessage(botResponse, 'bot');
    }, 500);
}

// Display message
function displayMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Enhanced response generation
function generateResponse(userMessage) {
    const msg = userMessage.toLowerCase();
    
    // Navigation help
    if (msg.includes('navigate') || msg.includes('where') || msg.includes('find')) {
        return "📍 You can navigate to:\n• <strong>Quiz</strong> - Take interactive quizzes\n• <strong>About</strong> - Learn about IbraCheck\n• <strong>Resources</strong> - Access study materials\n• <strong>Contact</strong> - Get in touch with us";
    }
    
    // Quiz questions
    if (msg.includes('how many question') || msg.includes('number of question')) {
        return "📊 We have:\n• Islamic Accounting: 20 questions\n• Advanced Financial Accounting: 10 questions\n• Operations Research: 30 questions\n\nYou can choose 10, 15, or 20 questions per quiz!";
    }
    
    if (msg.includes('start quiz') || msg.includes('take quiz')) {
        return "🎯 To start a quiz:\n1. Go to the Quiz page\n2. Select a category\n3. Choose number of questions\n4. Begin learning!\n\nGood luck! 📚";
    }
    
    if (msg.includes('pass') || msg.includes('score') || msg.includes('grade')) {
        return "📈 You need 70% or higher to pass a quiz. After completing, you'll see:\n• Your score (e.g., 8/10)\n• Percentage achieved\n• Pass/Fail status\n\nKeep practicing to improve! 💪";
    }
    
    // Islamic Accounting specific
    if (msg.includes('zakat') || msg.includes('riba') || msg.includes('shariah')) {
        return "🕌 Islamic Accounting topics include:\n• Zakat (charitable contribution)\n• Riba (interest/usury)\n• Mudarabah (profit sharing)\n• Sukuk (Islamic bonds)\n• Takaful (Islamic insurance)\n\nTake our quiz to test your knowledge!";
    }
    
    // Operations Research specific
    if (msg.includes('eoq') || msg.includes('inventory') || msg.includes('stock')) {
        return "📦 Operations Research covers:\n• Economic Order Quantity (EOQ)\n• Inventory control systems\n• Safety stock calculations\n• Reorder points\n• Sensitivity analysis\n\nPerfect for supply chain students! 🚛";
    }
    
    // Financial Accounting specific
    if (msg.includes('consolidation') || msg.includes('goodwill') || msg.includes('derivative')) {
        return "💼 Advanced Financial Accounting topics:\n• Consolidation methods\n• Goodwill calculation\n• Non-controlling interest\n• Foreign currency translation\n• Derivatives and hedging\n\nReady for the challenge? 🎓";
    }
    
    // Study tips
    if (msg.includes('study') || msg.includes('prepare') || msg.includes('tips')) {
        return "📖 Study tips:\n1. Take quizzes regularly\n2. Review Resources page materials\n3. Focus on weak areas\n4. Retake quizzes to improve\n5. Use dark mode for night study 🌙\n\nConsistency is key! ✨";
    }
    
    // Technical help
    if (msg.includes('dark mode') || msg.includes('theme')) {
        return "🌙 Toggle dark mode by clicking the moon/sun icon in the quiz header! It's easier on your eyes during night study sessions.";
    }
    
    if (msg.includes('mobile') || msg.includes('phone') || msg.includes('tablet')) {
        return "📱 IbraCheck is fully responsive! Use the hamburger menu (☰) on mobile to access all pages. Everything works great on phones and tablets!";
    }
    
    // Account/Progress
    if (msg.includes('save') || msg.includes('progress') || msg.includes('account')) {
        return "💾 Your last quiz score is automatically saved in your browser. You can see your results history and track your improvement over time!";
    }
    
    // Resources
    if (msg.includes('book') || msg.includes('pdf') || msg.includes('download')) {
        return "📚 Check our Resources page for links to:\n• AAOIFI standards\n• IFRS guidelines\n• FASB materials\n• Practice problems\n• Video tutorials";
    }
    
    // Contact & Support
    if (msg.includes('contact') || msg.includes('support') || msg.includes('help desk')) {
        return "📞 Need help? Contact us:\n📧 support@ibracheck.com\n📱 +233 XX XXX XXXX\n📍 Accra, Ghana\n\nOr visit our Contact page to send a message!";
    }
    
    if (msg.includes('feedback') || msg.includes('suggest') || msg.includes('improve')) {
        return "💡 We love feedback! Please use our Contact page to share suggestions. Your input helps us improve IbraCheck for everyone! 🙏";
    }
    
    // Greetings
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
        return "Hello! 👋 I'm your IbraCheck assistant. I can help with:\n• Quiz information\n• Study tips\n• Navigation\n• Resources\n\nWhat would you like to know?";
    }
    
    if (msg.includes('good morning')) return "Good morning! ☀️ Ready to learn today?";
    if (msg.includes('good afternoon')) return "Good afternoon! 🌤️ Let's make progress!";
    if (msg.includes('good evening')) return "Good evening! 🌆 Study time?";
    if (msg.includes('good night')) return "Good night! 🌙 Sleep well and dream of success!";
    
    // Positive responses
    if (msg.includes('thank') || msg.includes('thanks')) {
        return "You're very welcome! 😊 Happy to help. Good luck with your studies! 📚✨";
    }
    
    if (msg.includes('great') || msg.includes('awesome') || msg.includes('perfect')) {
        return "Glad I could help! 🎉 Feel free to ask anything else!";
    }
    
    // Farewell
    if (msg.includes('bye') || msg.includes('goodbye') || msg.includes('see you')) {
        return "Goodbye! 👋 Come back soon and keep learning! 🚀";
    }
    
    // Motivational
    if (msg.includes('difficult') || msg.includes('hard') || msg.includes('struggling')) {
        return "Don't give up! 💪 Every expert was once a beginner. Keep practicing with our quizzes, review the resources, and you'll master it! You've got this! 🌟";
    }
    
    if (msg.includes('motivate') || msg.includes('encourage')) {
        return "Remember: Success is the sum of small efforts repeated day in and day out! 🌟 You're already taking the right steps by using IbraCheck. Keep going! 💪📚";
    }
    
    // Fun/casual
    if (msg.includes('joke')) {
        return "Why did the accountant break up with the calculator? 🧮\nBecause she felt he was just using her for her figures! 😄\n\nNow back to studying! 📚";
    }
    
    if (msg.includes('who are you') || msg.includes('what are you')) {
        return "I'm IbraCheck Assistant! 🤖 I'm here 24/7 to help you navigate our platform, answer questions about quizzes, and support your learning journey! 📚✨";
    }
    
    // Default response
    return "I'm here to help! 🤗 You can ask me about:\n\n📝 Quiz topics and categories\n📊 How to take quizzes\n📚 Study resources\n💡 Study tips\n📞 Contact information\n🎯 Platform features\n\nWhat would you like to know?";
}

// Event listeners
chatbotSend.addEventListener('click', sendMessage);
chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

// Pulse animation for attention
setTimeout(() => {
    if (!chatbot.classList.contains('active')) {
        chatbotToggle.style.animation = 'pulse 2s infinite';
    }
}, 5000);

const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
`;
document.head.appendChild(style);