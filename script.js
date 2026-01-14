// ===================================
// IBRACHECK - QUIZ APPLICATION
// ===================================

// Page Loader
window.addEventListener('load', () => {
    const loader = document.getElementById('pageLoader');
    if (loader) {
        loader.classList.add('hidden');
    }
});

// ===================================
// MOBILE MENU TOGGLE
// ===================================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');

if (hamburger && mobileMenu && overlay) {
    hamburger.addEventListener('click', () => {
        const isActive = hamburger.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isActive);
        mobileMenu.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', () => {
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
    });
}

// ===================================
// QUIZ DATA
// ===================================

// ============================================================
// TO ADD MORE QUESTIONS:
// 1. Copy the structure below
// 2. Update the category name (must match existing category)
// 3. Add your question, options, and correctAnswer index (0-3)
// 4. The correctAnswer is the index of the correct option (0 = first option, 1 = second, etc.)
// 
// Example:
// {
//     category: "Islamic Accounting",
//     question: "Your question here?",
//     options: ["Option A", "Option B", "Option C", "Option D"],
//     correctAnswer: 2  // This means "Option C" is correct (index starts at 0)
// }
// ============================================================

const quizData = [
    // ISLAMIC ACCOUNTING QUESTIONS
    {category:"Islamic Accounting",question:"What is the primary principle that distinguishes Islamic accounting?",options:["Profit maximization","Compliance with Shariah law","Tax minimization","Asset valuation"],correctAnswer:1},
    {category:"Islamic Accounting",question:"In Islamic finance, what is 'Riba'?",options:["Interest or usury","Charitable giving","Profit sharing","Asset leasing"],correctAnswer:0},
    {category:"Islamic Accounting",question:"What is Zakat in Islamic accounting?",options:["Mandatory charitable contribution","Business tax","Profit margin","Investment return"],correctAnswer:0},
    {category:"Islamic Accounting",question:"Which is NOT Shariah-compliant?",options:["Real estate","Alcohol production","Technology company","Agricultural business"],correctAnswer:1},
    {category:"Islamic Accounting",question:"What is 'Mudarabah'?",options:["Fixed interest loan","Credit card facility","Mortgage agreement","Profit and loss sharing partnership"],correctAnswer:3},
    {category:"Islamic Accounting",question:"'Gharar' refers to:",options:["Profit sharing","Asset depreciation","Charitable donation","Excessive uncertainty or risk"],correctAnswer:3},
    {category:"Islamic Accounting",question:"What is 'Sukuk'?",options:["Islamic insurance","Islamic bond or certificate","Islamic tax","Islamic charity"],correctAnswer:1},
    {category:"Islamic Accounting",question:"What prohibits speculation?",options:["Maysir","Haram","Halal","Takaful"],correctAnswer:1},
    {category:"Islamic Accounting",question:"What is 'Takaful'?",options:["Islamic banking","Islamic mortgage","Islamic investment fund","Islamic insurance"],correctAnswer:3},
    {category:"Islamic Accounting",question:"Profit must be:",options:["Maximized at all costs","Earned through ethical means","Hidden from stakeholders","Distributed unequally"],correctAnswer:1},
    {category:"Islamic Accounting",question:"What is 'Ijarah'?",options:["Interest-based loan","Leasing agreement","Gambling contract","Speculative investment"],correctAnswer:1},
    {category:"Islamic Accounting",question:"'Maslahah' refers to:",options:["Tax evasion","Speculative trading","Hidden profits","Public interest and welfare"],correctAnswer:3},
    {category:"Islamic Accounting",question:"Unique Islamic bank statement:",options:["Cash flow statement","Statement of Zakat and charity funds","Balance sheet","Income statement"],correctAnswer:1},
    {category:"Islamic Accounting",question:"What is 'Musharakah'?",options:["Fixed deposit","Joint venture with profit/loss sharing","Credit card","Personal loan"],correctAnswer:1},
    {category:"Islamic Accounting",question:"Financial disclosure must be:",options:["Transparent and truthful","Minimal","Only to tax authorities","Optional"],correctAnswer:0},
    {category:"Islamic Accounting",question:"Shariah Supervisory Board ensures:",options:["Marketing products","Managing customers","Setting interest rates","Compliance with Islamic principles"],correctAnswer:3},
    {category:"Islamic Accounting",question:"What is prohibited in contracts?",options:["Transparency","Ambiguity and deception","Documentation","Mutual consent"],correctAnswer:1},
    {category:"Islamic Accounting",question:"Rate of Zakat on business assets:",options:["1.5%","2.5%","5%","10%"],correctAnswer:1},
    {category:"Islamic Accounting",question:"Standard governing Islamic institutions:",options:["AAOIFI","GAAP only","SEC regulations","Local tax code"],correctAnswer:0},
    {category:"Islamic Accounting",question:"Wealth accumulation is permissible when:",options:["Earned ethically and shared","Done by any means","Hidden from authorities","Only for personal benefit"],correctAnswer:0},

    // ADVANCED FINANCIAL ACCOUNTING QUESTIONS
    {category:"Advanced Financial Accounting",question:"What is consolidation?",options:["Combining parent and subsidiary statements","Combining assets","Reducing debt","Merging accounts"],correctAnswer:0},
    {category:"Advanced Financial Accounting",question:"Goodwill arises when:",options:["Company makes profit","Purchase price exceeds fair value","Assets depreciate","Liabilities increase"],correctAnswer:1},
    {category:"Advanced Financial Accounting",question:"Method for significant influence:",options:["Cost method","Equity method","Fair value method","Historical cost"],correctAnswer:1},
    {category:"Advanced Financial Accounting",question:"Non-controlling interest represents:",options:["Equity not owned by parent","Parent's share","Long-term debt","Preferred stock"],correctAnswer:0},
    {category:"Advanced Financial Accounting",question:"Acquisition method requires:",options:["Adding book values","Measuring at fair value","Ignoring intangibles","Using historical cost"],correctAnswer:1},
    {category:"Advanced Financial Accounting",question:"Intercompany profit elimination:",options:["Tax optimization","Distributing dividends","Increasing income","Removing unrealized profits"],correctAnswer:3},
    {category:"Advanced Financial Accounting",question:"Currency translation rate for assets:",options:["Historical rate","Current exchange rate","Average rate","Fixed rate"],correctAnswer:1},
    {category:"Advanced Financial Accounting",question:"Derivative derives value from:",options:["Company reputation","Historical performance","Management decisions","Underlying asset/rate/index"],correctAnswer:3},
    {category:"Advanced Financial Accounting",question:"Cash flow hedge protects against:",options:["Fair value changes","Credit risk","Cash flow variability","Operational inefficiency"],correctAnswer:2},
    {category:"Advanced Financial Accounting",question:"Push-down accounting involves:",options:["Reducing values","Adjusting subsidiary books","Eliminating debt","Deferring revenue"],correctAnswer:1},

    // OPERATIONS RESEARCH QUESTIONS
    {category:"Operations Research",question:"What is the primary goal of inventory control?",options:["Maximize storage space","Balance ordering costs with holding costs","Eliminate all stockouts","Increase product prices"],correctAnswer:1},
    {category:"Operations Research",question:"Economic Order Quantity (EOQ) minimizes which costs?",options:["Production and marketing costs","Transportation and packaging costs","Labor and overhead costs","Total inventory costs (ordering + holding)"],correctAnswer:3},
    {category:"Operations Research",question:"In the basic EOQ model, what happens when order quantity doubles?",options:["Ordering cost doubles","Holding cost doubles","Total cost doubles","Shortage cost doubles"],correctAnswer:1},
    {category:"Operations Research",question:"What does 'lead time' mean in inventory management?",options:["Time to manufacture a product","Time between placing and receiving an order","Time products stay in storage","Time to sell inventory"],correctAnswer:1},
    {category:"Operations Research",question:"Which factor is NOT typically considered in basic EOQ calculation?",options:["Annual demand","Ordering cost per order","Product quality ratings","Holding cost per unit per year"],correctAnswer:2},
    {category:"Operations Research",question:"Gradual replenishment (EPL) is used when:",options:["Products are received all at once","Products are produced and consumed simultaneously","Demand is uncertain","Orders are always backordered"],correctAnswer:1},
    {category:"Operations Research",question:"In EOQ with gradual replenishment, the maximum inventory level is:",options:["Equal to order quantity","Greater than order quantity","Less than order quantity","Zero"],correctAnswer:2},
    {category:"Operations Research",question:"What is a 'stockout' in inventory management?",options:["Excess inventory disposal","Damaged goods","Ordering too much inventory","Running out of inventory to meet demand"],correctAnswer:3},
    {category:"Operations Research",question:"When stockouts are permitted in EOQ, what additional cost is considered?",options:["Marketing cost","Packaging cost","Quality control cost","Shortage or backorder cost"],correctAnswer:3},
    {category:"Operations Research",question:"In EOQ models with planned shortages, the optimal policy involves:",options:["Never running out of stock","Intentionally allowing some shortages to reduce costs","Always maintaining maximum inventory","Eliminating ordering costs"],correctAnswer:1},
    {category:"Operations Research",question:"Quantity discounts affect EOQ by:",options:["Potentially changing the optimal order quantity","Eliminating ordering cost","Increasing holding costs only","Having no effect on order decisions"],correctAnswer:0},
    {category:"Operations Research",question:"When evaluating quantity discounts, you should:",options:["Always choose the largest discount","Compare total costs at different price breaks","Only consider the unit price","Ignore holding costs"],correctAnswer:1},
    {category:"Operations Research",question:"What is a 'price break' in quantity discount models?",options:["A quantity level where unit price changes","When prices increase suddenly","A discount for damaged goods","A seasonal price reduction"],correctAnswer:0},
    {category:"Operations Research",question:"The reorder point in inventory systems is:",options:["When inventory reaches maximum level","Inventory level that triggers a new order","When demand increases","When suppliers offer discounts"],correctAnswer:1},
    {category:"Operations Research",question:"Re-order levels are set based on:",options:["Random selection","Lead time demand and desired service level","Supplier preferences","Only storage capacity"],correctAnswer:1},
    {category:"Operations Research",question:"Under conditions of certainty, the reorder point equals:",options:["Zero inventory","Safety stock only","Maximum inventory level","Demand during lead time"],correctAnswer:3},
    {category:"Operations Research",question:"What is the purpose of safety stock?",options:["To increase storage costs","To protect against demand or lead time uncertainty","To maximize profits","To reduce product quality"],correctAnswer:1},
    {category:"Operations Research",question:"Safety stock levels are influenced by:",options:["Only product color","Demand variability and desired service level","Marketing budget","Number of employees"],correctAnswer:1},
    {category:"Operations Research",question:"Higher service levels require:",options:["Higher safety stock","Lower safety stock","No safety stock","Constant inventory"],correctAnswer:0},
    {category:"Operations Research",question:"Statistical methods for safety stock calculation typically use:",options:["Guesswork","Standard deviation of demand and z-scores","Only historical averages","Supplier recommendations only"],correctAnswer:1},
    {category:"Operations Research",question:"If demand variability increases, safety stock should:",options:["Decrease","Stay the same","Increase","Be eliminated"],correctAnswer:2},
    {category:"Operations Research",question:"The normal distribution is commonly used in safety stock calculations to model:",options:["Employee productivity","Demand uncertainty","Product color preferences","Supplier reliability"],correctAnswer:1},
    {category:"Operations Research",question:"Inventory control with sensitivity analysis examines:",options:["Only one scenario","How changes in parameters affect optimal decisions","Employee satisfaction","Marketing effectiveness"],correctAnswer:1},
    {category:"Operations Research",question:"Sensitivity analysis in EOQ helps identify:",options:["Customer preferences","Which parameters have the greatest impact on total cost","Employee schedules","Product colors"],correctAnswer:1},
    {category:"Operations Research",question:"If holding cost increases by 20%, the EOQ will:",options:["Decrease (but not by 20%)","Increase by 20%","Remain unchanged","Double"],correctAnswer:0},
    {category:"Operations Research",question:"A robust inventory policy is one that:",options:["Performs well across different scenarios","Only works in one situation","Ignores cost changes","Maximizes inventory levels always"],correctAnswer:0},
    {category:"Operations Research",question:"In EOQ formula, if annual demand quadruples, the optimal order quantity will:",options:["Quadruple","Double","Remain the same","Halve"],correctAnswer:1},
    {category:"Operations Research",question:"The ratio of ordering cost to holding cost affects:",options:["Product quality","The optimal order frequency and quantity","Customer satisfaction only","Supplier selection only"],correctAnswer:1},
    {category:"Operations Research",question:"When conducting sensitivity analysis on reorder points, you examine:",options:["Only storage space","Impact of changes in lead time and demand variability","Employee preferences","Product packaging"],correctAnswer:1},
    {category:"Operations Research",question:"Total relevant cost in EOQ includes:",options:["Purchase cost only","Marketing cost only","Ordering cost plus holding cost","All company expenses"],correctAnswer:2},

    // MICRO ECONOMICS QUESTIONS
    {category:"Micro Economics",question:"What is the law of demand?",options:["Price and quantity demanded move in same direction","Price and quantity demanded move in opposite directions","Price remains constant","Quantity is always fixed"],correctAnswer:1},
    {category:"Micro Economics",question:"What causes a shift in the demand curve?",options:["Change in price of the good itself","Change in income or preferences","Movement along the curve","Government intervention only"],correctAnswer:1},
    {category:"Micro Economics",question:"Perfect competition is characterized by:",options:["One dominant firm","Few large firms","Many small firms with identical products","Differentiated products"],correctAnswer:2},
    {category:"Micro Economics",question:"What is price elasticity of demand?",options:["Total revenue divided by price","Percentage change in quantity demanded / percentage change in price","Change in supply","Fixed pricing strategy"],correctAnswer:1},
    {category:"Micro Economics",question:"Consumer surplus represents:",options:["Government tax revenue","Producer profit","Difference between willingness to pay and actual price paid","Total market value"],correctAnswer:2},

    // ACCOUNTING INFORMATION SYSTEM QUESTIONS
    {category:"Accounting Information System",question:"What is the primary purpose of an AIS?",options:["Marketing products","Collecting, storing, and processing financial data","Managing employees","Designing products"],correctAnswer:1},
    {category:"Accounting Information System",question:"Which cycle involves customer sales and cash receipts?",options:["Expenditure cycle","Production cycle","Revenue cycle","Financing cycle"],correctAnswer:2},
    {category:"Accounting Information System",question:"Internal controls in AIS are designed to:",options:["Increase sales","Ensure accuracy and prevent fraud","Reduce employee count","Eliminate all risks"],correctAnswer:1},
    {category:"Accounting Information System",question:"What does ERP stand for?",options:["Enterprise Resource Planning","Electronic Revenue Processing","External Reporting Program","Economic Risk Planning"],correctAnswer:0},
    {category:"Accounting Information System",question:"Segregation of duties helps prevent:",options:["Employee collaboration","Efficient workflow","Fraud and errors","System updates"],correctAnswer:2},

    // STRATEGIC MANAGEMENT QUESTIONS
    {category:"Strategic Management",question:"SWOT analysis examines:",options:["Only internal factors","Only external factors","Strengths, Weaknesses, Opportunities, Threats","Financial ratios only"],correctAnswer:2},
    {category:"Strategic Management",question:"Porter's Five Forces framework analyzes:",options:["Employee satisfaction","Industry competitive structure","Product quality","Marketing effectiveness"],correctAnswer:1},
    {category:"Strategic Management",question:"What is a competitive advantage?",options:["Having more employees","Superior performance vs. competitors","Larger office space","Higher advertising budget"],correctAnswer:1},
    {category:"Strategic Management",question:"Cost leadership strategy focuses on:",options:["Premium pricing","Being the lowest cost producer","Product differentiation","Niche marketing"],correctAnswer:1},
    {category:"Strategic Management",question:"The balanced scorecard measures performance across:",options:["Financial metrics only","Customer satisfaction only","Financial, customer, internal, learning perspectives","Revenue only"],correctAnswer:2},

    // COMPANY AND PARTNERSHIP LAW QUESTIONS
    {category:"Company and Partnership Law",question:"A limited liability company means:",options:["Unlimited personal liability","Shareholders' liability limited to investment","Company cannot be sued","No legal obligations"],correctAnswer:1},
    {category:"Company and Partnership Law",question:"What is a partnership?",options:["Single person business","Association of two or more persons in business","Government entity","Charitable organization"],correctAnswer:1},
    {category:"Company and Partnership Law",question:"In a general partnership, partners have:",options:["No liability","Limited liability","Unlimited joint and several liability","Government protection"],correctAnswer:2},
    {category:"Company and Partnership Law",question:"A company's articles of association contain:",options:["Employee contracts","Internal management rules and regulations","Tax returns","Marketing plans"],correctAnswer:1},
    {category:"Company and Partnership Law",question:"Directors owe fiduciary duties to:",options:["Themselves only","The company and shareholders","Competitors","Government only"],correctAnswer:1},

    // COST ACCOUNTING QUESTIONS
    {category:"Cost Accounting",question:"Variable costs:",options:["Remain constant in total","Change with production volume","Are always zero","Never change"],correctAnswer:1},
    {category:"Cost Accounting",question:"What is absorption costing?",options:["Ignoring overhead","Allocating all manufacturing costs to products","Only direct costs","Marketing costs only"],correctAnswer:1},
    {category:"Cost Accounting",question:"Break-even point is where:",options:["Profit is maximized","Total revenue equals total costs","Costs are minimized","Sales are highest"],correctAnswer:1},
    {category:"Cost Accounting",question:"Standard costing involves:",options:["Using historical costs only","Setting predetermined costs for comparison","Ignoring variances","Random cost allocation"],correctAnswer:1},
    {category:"Cost Accounting",question:"Job order costing is appropriate when:",options:["Products are identical","Products are customized","Mass production","Services only"],correctAnswer:1},

    // AUDIT AND INTERNAL REVIEW QUESTIONS
    {category:"Audit and Internal Review",question:"The primary objective of an audit is to:",options:["Find all fraud","Express opinion on financial statement fairness","Prepare financial statements","Manage company operations"],correctAnswer:1},
    {category:"Audit and Internal Review",question:"Audit evidence should be:",options:["Expensive","Sufficient and appropriate","Minimal","Ignored"],correctAnswer:1},
    {category:"Audit and Internal Review",question:"Independence means the auditor:",options:["Works for the company","Is free from conflicts of interest","Ignores management","Never communicates"],correctAnswer:1},
    {category:"Audit and Internal Review",question:"Internal audit focuses on:",options:["External reporting only","Improving operations and controls","Marketing","Product development"],correctAnswer:1},
    {category:"Audit and Internal Review",question:"Audit risk is the risk that:",options:["Company fails","Auditor issues wrong opinion","Employees quit","Sales decline"],correctAnswer:1},

    // ============================================================
    // TO ADD A NEW CATEGORY:
    // 1. Add questions with a new category name (copy the format above)
    // 2. The category will automatically appear on the homepage
    // 3. Update the category icons in the categoryIcons object below
    // 4. Update the category descriptions in the categoryDescriptions object below
    // 
    // Example of adding "Cost Accounting" category:
    // {category:"Cost Accounting",question:"What is absorption costing?",options:["Option 1","Option 2","Option 3","Option 4"],correctAnswer:0},
    // ============================================================
];

// ============================================================
// CATEGORY CUSTOMIZATION
// ============================================================

// Category Icons Mapping
// TO CUSTOMIZE CATEGORY ICONS: Add your category name as the key and choose an emoji icon
const categoryIcons = {
    "Islamic Accounting": "🕌",
    "Advanced Financial Accounting": "💼",
    "Operations Research": "📊",
    "Micro Economics": "📈",
    "Accounting Information System": "💻",
    "Strategic Management": "🎯",
    "Company and Partnership Law": "⚖️",
    "Cost Accounting": "💰",
    "Audit and Internal Review": "🔍"
    // Add more categories here:
    // "Taxation": "📋",
    // "Management Accounting": "📊"
};

// Category Descriptions
// TO ADD DESCRIPTIONS FOR CATEGORIES: Add your category name and a brief description
const categoryDescriptions = {
    "Islamic Accounting": "Master Shariah-compliant accounting principles and Islamic financial instruments",
    "Advanced Financial Accounting": "Deep dive into consolidation, mergers, and complex accounting standards",
    "Operations Research": "Understand inventory management, EOQ models, and optimization techniques",
    "Micro Economics": "Learn demand, supply, market structures, and consumer behavior",
    "Accounting Information System": "Explore data processing, internal controls, and ERP systems",
    "Strategic Management": "Study competitive analysis, SWOT, Porter's Forces, and strategy formulation",
    "Company and Partnership Law": "Understand corporate governance, partnership structures, and legal compliance",
    "Cost Accounting": "Master cost behavior, absorption costing, and managerial decision-making",
    "Audit and Internal Review": "Learn audit procedures, evidence gathering, and internal control evaluation"
    // Add more descriptions here:
    // "Taxation": "Explore tax laws, compliance, and planning strategies"
};

// ===================================
// APPLICATION STATE
// ===================================
let currentCategory = '';
let currentQuestionCount = 10;
let currentQuestionIndex = 0;
let score = 0;
let quizQuestions = [];
let selectedAnswer = null;

// DOM Elements
const el = {
    categoryGrid: document.getElementById('categoryGrid'),
    questionSelectionScreen: document.getElementById('questionSelectionScreen'),
    closeSelection: document.getElementById('closeSelection'),
    quizScreen: document.getElementById('quizScreen'),
    resultsScreen: document.getElementById('resultsScreen'),
    questionText: document.getElementById('questionText'),
    optionsContainer: document.getElementById('optionsContainer'),
    nextBtn: document.getElementById('nextBtn'),
    currentQuestion: document.getElementById('currentQuestion'),
    totalQuestions: document.getElementById('totalQuestions'),
    progressBar: document.getElementById('progressBar'),
    finalScore: document.getElementById('finalScore'),
    percentageScore: document.getElementById('percentageScore'),
    resultMessage: document.getElementById('resultMessage'),
    restartBtn: document.getElementById('restartBtn'),
    homeBtn: document.getElementById('homeBtn'),
    quitQuiz: document.getElementById('quitQuiz'),
    scoreCircle: document.getElementById('scoreCircle')
};

// ===================================
// INITIALIZE APP
// ===================================
function init() {
    // Only initialize quiz if elements exist
    if (!el.categoryGrid) return;
    
    // Get unique categories from quiz data
    const categories = [...new Set(quizData.map(q => q.category))];
    
    // Create category cards
    categories.forEach(cat => {
        const count = quizData.filter(q => q.category === cat).length;
        const icon = categoryIcons[cat] || "📚"; // Default icon if not specified
        const description = categoryDescriptions[cat] || "Test your knowledge with comprehensive questions";
        
        const card = document.createElement('div');
        card.className = 'category-card-modern';
        card.innerHTML = `
            <div class="category-icon">${icon}</div>
            <h3>${cat}</h3>
            <p>${description}</p>
            <div class="category-meta">
                <span class="question-count">${count} Questions Available</span>
                <div class="start-arrow">→</div>
            </div>
        `;
        
        card.onclick = () => {
            currentCategory = cat;
            showQuestionSelection();
        };
        
        el.categoryGrid.appendChild(card);
    });
    
    // Update total questions stat in hero
    const totalQuestionsEl = document.getElementById('totalQuestions');
    if (totalQuestionsEl) {
        totalQuestionsEl.textContent = quizData.length + '+';
    }
    
    // Setup event listeners
    setupEventListeners();
}

// ===================================
// EVENT LISTENERS
// ===================================
function setupEventListeners() {
    if (el.closeSelection) {
        el.closeSelection.onclick = hideQuestionSelection;
    }
    
    document.querySelectorAll('.question-option-btn').forEach(btn => {
        btn.onclick = (e) => {
            currentQuestionCount = parseInt(e.currentTarget.dataset.count);
            startQuiz();
        };
    });
    
    if (el.nextBtn) {
        el.nextBtn.onclick = nextQuestion;
    }
    
    if (el.restartBtn) {
        el.restartBtn.onclick = () => {
            hideResults();
            startQuiz();
        };
    }
    
    if (el.homeBtn) {
        el.homeBtn.onclick = () => {
            hideResults();
            currentQuestionIndex = 0;
            score = 0;
        };
    }
    
    if (el.quitQuiz) {
        el.quitQuiz.onclick = () => {
            if (confirm('Are you sure you want to quit? Your progress will be lost.')) {
                hideQuiz();
                currentQuestionIndex = 0;
                score = 0;
            }
        };
    }
}

// ===================================
// SCREEN MANAGEMENT
// ===================================
function showQuestionSelection() {
    el.questionSelectionScreen.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function hideQuestionSelection() {
    el.questionSelectionScreen.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function showQuiz() {
    el.quizScreen.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function hideQuiz() {
    el.quizScreen.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function showResults() {
    el.resultsScreen.classList.add('active');
    document.body.style.overflow = 'hidden';
    animateScoreCircle();
}

function hideResults() {
    el.resultsScreen.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ===================================
// QUIZ LOGIC
// ===================================
function startQuiz() {
    hideQuestionSelection();
    
    // Get questions for selected category
    const categoryQuestions = quizData.filter(q => q.category === currentCategory);
    
    // Shuffle and select questions
    quizQuestions = shuffleArray(categoryQuestions).slice(0, currentQuestionCount);
    
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    
    el.totalQuestions.textContent = quizQuestions.length;
    
    showQuiz();
    loadQuestion();
}

function loadQuestion() {
    const q = quizQuestions[currentQuestionIndex];
    
    el.currentQuestion.textContent = currentQuestionIndex + 1;
    el.progressBar.style.width = ((currentQuestionIndex + 1) / quizQuestions.length * 100) + '%';
    el.questionText.textContent = q.question;
    el.optionsContainer.innerHTML = '';
    
    q.options.forEach((opt, i) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.innerHTML = `<strong>${String.fromCharCode(65 + i)}.</strong><span>${opt}</span>`;
        div.onclick = () => selectOption(i, div);
        el.optionsContainer.appendChild(div);
    });
    
    el.nextBtn.disabled = true;
    selectedAnswer = null;
}

function selectOption(idx, optEl) {
    if (selectedAnswer !== null) return; // Already answered
    
    selectedAnswer = idx;
    const q = quizQuestions[currentQuestionIndex];
    const opts = el.optionsContainer.querySelectorAll('.option');
    
    // Disable all options
    opts.forEach(o => o.classList.add('disabled'));
    
    // Show correct/incorrect
    if (idx === q.correctAnswer) {
        optEl.classList.add('correct');
        score++;
    } else {
        optEl.classList.add('incorrect');
        opts[q.correctAnswer].classList.add('correct');
    }
    
    el.nextBtn.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    hideQuiz();
    
    const pct = Math.round((score / quizQuestions.length) * 100);
    
    el.finalScore.textContent = `${score}/${quizQuestions.length}`;
    el.percentageScore.textContent = `${pct}%`;
    
    const passed = pct >= 70;
    el.resultMessage.className = `result-message ${passed ? 'pass' : 'fail'}`;
    el.resultMessage.textContent = passed 
        ? '🎉 Excellent! You passed!' 
        : '📚 Keep studying! Try again to improve.';
    
    // Save to localStorage
    localStorage.setItem('lastScore', JSON.stringify({
        category: currentCategory,
        score,
        total: quizQuestions.length,
        percentage: pct,
        date: new Date().toISOString()
    }));
    
    showResults();
}

function animateScoreCircle() {
    const pct = Math.round((score / quizQuestions.length) * 100);
    const circumference = 2 * Math.PI * 90; // radius = 90
    const offset = circumference - (pct / 100) * circumference;
    
    // Animate the circle
    setTimeout(() => {
        el.scoreCircle.style.strokeDashoffset = offset;
        el.scoreCircle.style.transition = 'stroke-dashoffset 1.5s ease-out';
    }, 100);
}

// ===================================
// UTILITY FUNCTIONS
// ===================================
function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// ===================================
// START APP
// ===================================
init();