
     const quizData = [
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
            {category:"Advanced Financial Accounting",question:"What is consolidation?",options:["Combining parent and subsidiary statements","Combining assets","Reducing debt","Merging accounts"],correctAnswer:0},
            {category:"Advanced Financial Accounting",question:"Goodwill arises when:",options:["Company makes profit","Purchase price exceeds fair value","Assets depreciate","Liabilities increase"],correctAnswer:1},
            {category:"Advanced Financial Accounting",question:"Method for significant influence:",options:["Cost method","Equity method","Fair value method","Historical cost"],correctAnswer:1},
            {category:"Advanced Financial Accounting",question:"Non-controlling interest represents:",options:["Equity not owned by parent","Parent's share","Long-term debt","Preferred stock"],correctAnswer:0},
            {category:"Advanced Financial Accounting",question:"Acquisition method requires:",options:["Adding book values","Measuring at fair value","Ignoring intangibles","Using historical cost"],correctAnswer:1},
            {category:"Advanced Financial Accounting",question:"Intercompany profit elimination:",options:["Tax optimization","Distributing dividends","Increasing income","Removing unrealized profits"],correctAnswer:3},
            {category:"Advanced Financial Accounting",question:"Currency translation rate for assets:",options:["Historical rate","Current exchange rate","Average rate","Fixed rate"],correctAnswer:1},
            {category:"Advanced Financial Accounting",question:"Derivative derives value from:",options:["Company reputation","Historical performance","Management decisions","Underlying asset/rate/index"],correctAnswer:3},
            {category:"Advanced Financial Accounting",question:"Cash flow hedge protects against:",options:["Fair value changes","Credit risk","Cash flow variability","Operational inefficiency"],correctAnswer:2},
            {category:"Advanced Financial Accounting",question:"Push-down accounting involves:",options:["Reducing values","Adjusting subsidiary books","Eliminating debt","Deferring revenue"],correctAnswer:1}
        ];

        let currentCategory='',currentQuestionCount=10,currentQuestionIndex=0,score=0,quizQuestions=[],selectedAnswer=null;

        const screens={home:document.getElementById('homeScreen'),questionSelection:document.getElementById('questionSelectionScreen'),quiz:document.getElementById('quizScreen'),results:document.getElementById('resultsScreen')};
        const el={categoryGrid:document.getElementById('categoryGrid'),themeToggle:document.getElementById('themeToggle'),backToHome:document.getElementById('backToHome'),questionText:document.getElementById('questionText'),optionsContainer:document.getElementById('optionsContainer'),nextBtn:document.getElementById('nextBtn'),currentQuestion:document.getElementById('currentQuestion'),totalQuestions:document.getElementById('totalQuestions'),progressBar:document.getElementById('progressBar'),finalScore:document.getElementById('finalScore'),percentageScore:document.getElementById('percentageScore'),resultMessage:document.getElementById('resultMessage'),restartBtn:document.getElementById('restartBtn'),homeBtn:document.getElementById('homeBtn')};

        function init(){
            const cats=[...new Set(quizData.map(q=>q.category))];
            cats.forEach(cat=>{
                const count=quizData.filter(q=>q.category===cat).length;
                const card=document.createElement('div');
                card.className='category-card';
                card.innerHTML=`<h3>${cat}</h3><p>${count} questions</p>`;
                card.onclick=()=>{currentCategory=cat;showScreen('questionSelection');};
                el.categoryGrid.appendChild(card);
            });
            el.themeToggle.onclick=()=>{document.body.classList.toggle('dark-mode');el.themeToggle.textContent=document.body.classList.contains('dark-mode')?'☀️':'🌙';};
            el.backToHome.onclick=()=>showScreen('home');
            document.querySelectorAll('.question-option-btn').forEach(btn=>{
                btn.onclick=(e)=>{currentQuestionCount=parseInt(e.target.dataset.count);startQuiz();};
            });
            el.nextBtn.onclick=nextQuestion;
            el.restartBtn.onclick=startQuiz;
            el.homeBtn.onclick=()=>{showScreen('home');currentQuestionIndex=0;score=0;};
        }

        function showScreen(name){
            Object.values(screens).forEach(s=>s.classList.remove('active'));
            screens[name].classList.add('active');
        }

        function startQuiz(){
            quizQuestions=shuffleArray(quizData.filter(q=>q.category===currentCategory)).slice(0,currentQuestionCount);
            currentQuestionIndex=0;score=0;selectedAnswer=null;
            el.totalQuestions.textContent=quizQuestions.length;
            showScreen('quiz');
            loadQuestion();
        }

        function loadQuestion(){
            const q=quizQuestions[currentQuestionIndex];
            el.currentQuestion.textContent=currentQuestionIndex+1;
            el.progressBar.style.width=((currentQuestionIndex+1)/quizQuestions.length*100)+'%';
            el.questionText.textContent=q.question;
            el.optionsContainer.innerHTML='';
            q.options.forEach((opt,i)=>{
                const div=document.createElement('div');
                div.className='option';
                div.innerHTML=`<strong>${String.fromCharCode(65+i)}.</strong><span>${opt}</span>`;
                div.onclick=()=>selectOption(i,div);
                el.optionsContainer.appendChild(div);
            });
            el.nextBtn.disabled=true;
            selectedAnswer=null;
        }

        function selectOption(idx,optEl){
            if(selectedAnswer!==null)return;
            selectedAnswer=idx;
            const q=quizQuestions[currentQuestionIndex];
            const opts=el.optionsContainer.querySelectorAll('.option');
            opts.forEach(o=>o.classList.add('disabled'));
            if(idx===q.correctAnswer){optEl.classList.add('correct');score++;}
            else{optEl.classList.add('incorrect');opts[q.correctAnswer].classList.add('correct');}
            el.nextBtn.disabled=false;
        }

        function nextQuestion(){
            currentQuestionIndex++;
            if(currentQuestionIndex<quizQuestions.length)loadQuestion();
            else showResults();
        }

        function showResults(){
            const pct=Math.round((score/quizQuestions.length)*100);
            el.finalScore.textContent=`${score}/${quizQuestions.length}`;
            el.percentageScore.textContent=`${pct}%`;
            const passed=pct>=70;
            el.resultMessage.className=`result-message ${passed?'pass':'fail'}`;
            el.resultMessage.textContent=passed?'🎉 Excellent! You passed!':'📚 Keep studying! Try again.';
            localStorage.setItem('lastScore',JSON.stringify({category:currentCategory,score,total:quizQuestions.length,percentage:pct}));
            showScreen('results');
        }

        function shuffleArray(arr){
            const a=[...arr];
            for(let i=a.length-1;i>0;i--){
                const j=Math.floor(Math.random()*(i+1));
                [a[i],a[j]]=[a[j],a[i]];
            }
            return a;
        }

        if(localStorage.getItem('theme')==='dark'){
            document.body.classList.add('dark-mode');
            el.themeToggle.textContent='☀️';
        }

        init();
    