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
   // ISLAMIC ACCOUNTING QUESTIONS

{category:"Islamic Accounting",question:"What is the primary principle that distinguishes Islamic accounting?",options:["Profit maximization","Compliance with Shariah law","Tax minimization","Asset valuation"],correctAnswer:1},
{category:"Islamic Accounting",question:"In Islamic finance, what is 'Riba'?",options:["Interest or usury","Charitable giving","Profit sharing","Asset leasing"],correctAnswer:0},
{category:"Islamic Accounting",question:"What is Zakat in Islamic accounting?",options:["Mandatory charitable contribution","Business tax","Profit margin","Investment return"],correctAnswer:0},
{category:"Islamic Accounting",question:"Which is NOT Shariah-compliant?",options:["Real estate","Alcohol production","Technology company","Agricultural business"],correctAnswer:1},
{category:"Islamic Accounting",question:"What is 'Mudarabah'?",options:["Fixed interest loan","Credit card facility","Mortgage agreement","Profit and loss sharing partnership"],correctAnswer:3},
{category:"Islamic Accounting",question:"'Gharar' refers to:",options:["Profit sharing","Asset depreciation","Charitable donation","Excessive uncertainty or risk"],correctAnswer:3},
{category:"Islamic Accounting",question:"What is 'Sukuk'?",options:["Islamic insurance","Islamic bond or certificate","Islamic tax","Islamic charity"],correctAnswer:1},
{category:"Islamic Accounting",question:"What prohibits speculation?",options:["Maysir","Haram","Halal","Takaful"],correctAnswer:0},
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


{category:"Islamic Accounting",question:"Which principle ensures risk-sharing in Islamic finance?",options:["Riba","Maysir","Profit-and-loss sharing","Interest compounding"],correctAnswer:2},
{category:"Islamic Accounting",question:"Islamic accounting discourages income derived from:",options:["Trade","Services","Speculation","Manufacturing"],correctAnswer:2},
{category:"Islamic Accounting",question:"Which contract involves advance payment for future delivery?",options:["Ijarah","Salam","Mudarabah","Musharakah"],correctAnswer:1},
{category:"Islamic Accounting",question:"Murabaha is best described as:",options:["Profit-sharing venture","Cost-plus sale","Leasing contract","Charitable loan"],correctAnswer:1},
{category:"Islamic Accounting",question:"Which activity is encouraged in Islamic finance?",options:["Hoarding wealth","Productive investment","Speculation","Interest lending"],correctAnswer:1},
{category:"Islamic Accounting",question:"Zakat is payable when assets reach:",options:["Break-even","Nisab threshold","Profit target","Year-end"],correctAnswer:1},
{category:"Islamic Accounting",question:"Which income is considered Halal?",options:["Interest income","Gambling winnings","Trading profit","Alcohol sales"],correctAnswer:2},
{category:"Islamic Accounting",question:"Islamic accounting emphasizes accountability to:",options:["Shareholders only","Management","Society and God","Tax authorities"],correctAnswer:2},
{category:"Islamic Accounting",question:"Which contract transfers asset ownership at end of lease?",options:["Salam","Ijarah Muntahia Bittamleek","Murabaha","Mudarabah"],correctAnswer:1},
{category:"Islamic Accounting",question:"Islamic accounting treats wealth as:",options:["Private absolute ownership","Trust from God","Government property","Public property only"],correctAnswer:1},
{category:"Islamic Accounting",question:"Which practice ensures social justice?",options:["Zakat distribution","Interest compounding","Wealth hoarding","Speculation"],correctAnswer:0},
{category:"Islamic Accounting",question:"Prohibition of Riba aims to:",options:["Reduce trade","Promote fairness","Increase taxation","Limit investment"],correctAnswer:1},
{category:"Islamic Accounting",question:"Islamic financial reporting promotes:",options:["Secrecy","Transparency","Minimal disclosure","Tax avoidance"],correctAnswer:1},
{category:"Islamic Accounting",question:"Which body issues Islamic accounting standards?",options:["IASB","AAOIFI","IFRS","SEC"],correctAnswer:1},
{category:"Islamic Accounting",question:"Ethical screening excludes companies involved in:",options:["Healthcare","Education","Alcohol and gambling","Manufacturing"],correctAnswer:2},
{category:"Islamic Accounting",question:"Which contract is purely charitable?",options:["Qard Hasan","Murabaha","Ijarah","Salam"],correctAnswer:0},
{category:"Islamic Accounting",question:"Islamic accounting prohibits earning income from:",options:["Trade risk","Business effort","Uncertainty exploitation","Labor"],correctAnswer:2},
{category:"Islamic Accounting",question:"Zakat distribution primarily supports:",options:["Investors","Employees","Eligible beneficiaries","Managers"],correctAnswer:2},
{category:"Islamic Accounting",question:"Which principle ensures honesty in reporting?",options:["Amanah","Riba","Maysir","Gharar"],correctAnswer:0},
{category:"Islamic Accounting",question:"Islamic accounting ultimately seeks:",options:["Profit maximization","Social welfare and justice","Tax efficiency","Market dominance"],correctAnswer:1},



    // ADVANCED FINANCIAL ACCOUNTING QUESTIONS
    // ADVANCED FINANCIAL ACCOUNTING QUESTIONS

{category:"Advanced Financial Accounting",question:"What is consolidation?",options:["Combining parent and subsidiary statements","Combining assets","Reducing debt","Merging accounts"],correctAnswer:0},
{category:"Advanced Financial Accounting",question:"Goodwill arises when:",options:["Company makes profit","Purchase price exceeds fair value","Assets depreciate","Liabilities increase"],correctAnswer:1},
{category:"Advanced Financial Accounting",question:"Method used when significant influence exists:",options:["Cost method","Equity method","Fair value method","Historical cost"],correctAnswer:1},
{category:"Advanced Financial Accounting",question:"Non-controlling interest represents:",options:["Equity not owned by parent","Parent's share","Long-term debt","Preferred stock"],correctAnswer:0},
{category:"Advanced Financial Accounting",question:"Acquisition method requires assets to be measured at:",options:["Book value","Fair value","Historical cost","Replacement cost"],correctAnswer:1},

{category:"Advanced Financial Accounting",question:"Intercompany profit elimination means:",options:["Tax planning","Dividend declaration","Income maximization","Removing unrealized profits"],correctAnswer:3},
{category:"Advanced Financial Accounting",question:"Assets in foreign operations are translated using:",options:["Historical rate","Current exchange rate","Average rate","Closing budget rate"],correctAnswer:1},
{category:"Advanced Financial Accounting",question:"A derivative derives value from:",options:["Reputation","Past profit","Management skill","Underlying asset or rate"],correctAnswer:3},
{category:"Advanced Financial Accounting",question:"Cash flow hedge protects against:",options:["Fair value risk","Credit risk","Cash flow variability","Operational risk"],correctAnswer:2},
{category:"Advanced Financial Accounting",question:"Push-down accounting involves:",options:["Reducing equity","Adjusting subsidiary books after acquisition","Eliminating liabilities","Deferring income"],correctAnswer:1},

// CALCULATION-BASED QUESTIONS
{category:"Advanced Financial Accounting",question:"Parent buys subsidiary for GH₵500,000. Fair value of net assets is GH₵450,000. Goodwill equals:",options:["GH₵50,000","GH₵450,000","GH₵500,000","GH₵950,000"],correctAnswer:0},
{category:"Advanced Financial Accounting",question:"If parent owns 80% of subsidiary profit of GH₵100,000, NCI share is:",options:["GH₵80,000","GH₵20,000","GH₵100,000","GH₵50,000"],correctAnswer:1},
{category:"Advanced Financial Accounting",question:"Unrealized profit on intercompany inventory of GH₵40,000 should be:",options:["Added","Ignored","Eliminated","Capitalized"],correctAnswer:2},
{category:"Advanced Financial Accounting",question:"Parent sells goods to subsidiary at GH₵120,000 costing GH₵90,000. Unrealized profit is:",options:["GH₵120,000","GH₵30,000","GH₵90,000","GH₵210,000"],correctAnswer:1},
{category:"Advanced Financial Accounting",question:"If exchange rate moves from 10 to 12, asset translation effect is:",options:["Decrease","No change","Increase","Loss only"],correctAnswer:2},

{category:"Advanced Financial Accounting",question:"If parent owns 70% and subsidiary equity is GH₵200,000, NCI equals:",options:["GH₵140,000","GH₵200,000","GH₵60,000","GH₵70,000"],correctAnswer:2},
{category:"Advanced Financial Accounting",question:"Goodwill impairment loss is:",options:["Capitalized","Reversed later","Charged to profit or loss","Deferred"],correctAnswer:2},
{category:"Advanced Financial Accounting",question:"In equity method, investment account is increased by:",options:["Dividends received","Share of profit","Share of losses only","Purchase cost"],correctAnswer:1},
{category:"Advanced Financial Accounting",question:"Dividends received under equity method are:",options:["Income","Ignored","Reduction of investment","Liability"],correctAnswer:2},
{category:"Advanced Financial Accounting",question:"Which is eliminated on consolidation?",options:["Parent revenue","Subsidiary expenses","Intercompany balances","External liabilities"],correctAnswer:2},

{category:"Advanced Financial Accounting",question:"If subsidiary has retained earnings of GH₵60,000 at acquisition, it is:",options:["Added fully","Ignored","Pre-acquisition reserve","Post-acquisition profit"],correctAnswer:2},
{category:"Advanced Financial Accounting",question:"Post-acquisition profits are shared based on:",options:["Cost","Fair value","Ownership percentage","Voting power"],correctAnswer:2},
{category:"Advanced Financial Accounting",question:"Group retained earnings exclude:",options:["Parent profits","Subsidiary post-acquisition profits","Subsidiary pre-acquisition profits","Group income"],correctAnswer:2},
{category:"Advanced Financial Accounting",question:"If impairment reduces goodwill by GH₵10,000, group profit:",options:["Increases","Remains same","Decreases","Is ignored"],correctAnswer:2},
{category:"Advanced Financial Accounting",question:"Fair value adjustments affect:",options:["Pre-acquisition profit","Post-acquisition profit","Dividends","Cash flow"],correctAnswer:1},

{category:"Advanced Financial Accounting",question:"Which standard governs consolidation under IFRS?",options:["IAS 28","IFRS 10","IAS 16","IFRS 9"],correctAnswer:1},
{category:"Advanced Financial Accounting",question:"Control exists when parent has:",options:["50% ownership","Significant influence","Power over investee","Voting rights only"],correctAnswer:2},
{category:"Advanced Financial Accounting",question:"Joint ventures are accounted for using:",options:["Cost method","Equity method","Fair value","Historical cost"],correctAnswer:1},
{category:"Advanced Financial Accounting",question:"Negative goodwill arises when:",options:["Purchase price > fair value","Fair value > purchase price","Assets depreciate","Loss occurs"],correctAnswer:1},
{category:"Advanced Financial Accounting",question:"Group financial statements present the group as:",options:["Separate companies","One economic entity","Parent only","Holding company"],correctAnswer:1},

{category:"Advanced Financial Accounting",question:"If subsidiary sells asset to parent at profit, unrealized gain is:",options:["Recognized","Deferred","Eliminated","Taxed"],correctAnswer:2},
{category:"Advanced Financial Accounting",question:"Foreign currency translation differences are recorded in:",options:["Profit or loss","Equity","Revenue","Expenses"],correctAnswer:1},
{category:"Advanced Financial Accounting",question:"Fair value hedge protects against:",options:["Cash flow risk","Fair value changes","Liquidity risk","Operational loss"],correctAnswer:1},
{category:"Advanced Financial Accounting",question:"Which item is NOT consolidated?",options:["Subsidiary assets","Subsidiary liabilities","Subsidiary revenue","Associate investment"],correctAnswer:3},
{category:"Advanced Financial Accounting",question:"Ultimate aim of consolidation is to:",options:["Increase profit","Reduce tax","Show true group position","Eliminate subsidiaries"],correctAnswer:2},
{category:"Advanced Financial Accounting",question:"If a parent acquires 80% of a subsidiary for GH₵800,000 and the fair value of net identifiable assets is GH₵900,000, what is goodwill?",options:["GH₵80,000","GH₵100,000","GH₵-100,000","GH₵0"],correctAnswer:1},

{category:"Advanced Financial Accounting",question:"A subsidiary reports profit of GH₵200,000. Parent owns 75%. What amount is attributable to the parent?",options:["GH₵50,000","GH₵150,000","GH₵200,000","GH₵100,000"],correctAnswer:1},

{category:"Advanced Financial Accounting",question:"If intercompany sales include unrealized profit of GH₵40,000 at year end, consolidation requires:",options:["Adding GH₵40,000 to revenue","Ignoring the profit","Eliminating GH₵40,000 from group profit","Recording as goodwill"],correctAnswer:2},

{category:"Advanced Financial Accounting",question:"A foreign subsidiary has assets of $100,000. Closing exchange rate is GH₵12 per $. What amount is reported on consolidation?",options:["GH₵100,000","GH₵1,000,000","GH₵1,200,000","GH₵12,000"],correctAnswer:2},

{category:"Advanced Financial Accounting",question:"If a parent uses the equity method and its share of associate profit is GH₵60,000, the investment account is:",options:["Decreased by GH₵60,000","Unchanged","Increased by GH₵60,000","Written off"],correctAnswer:2},



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
    {category:"Operations Research",question:"If annual demand is 10,000 units, ordering cost is GH₵50 per order, and holding cost is GH₵2 per unit per year, what is the EOQ?",options:["500 units","707 units","1,000 units","2,000 units"],correctAnswer:1},

{category:"Operations Research",question:"In an EOQ model, average inventory level is equal to:",options:["Order quantity","Half of order quantity","Demand during lead time","Safety stock only"],correctAnswer:1},

{category:"Operations Research",question:"If lead time demand is 300 units and safety stock is 100 units, the reorder point is:",options:["100 units","200 units","300 units","400 units"],correctAnswer:3},

{category:"Operations Research",question:"Which assumption is made in the basic EOQ model?",options:["Demand is uncertain","Lead time varies","No shortages are allowed","Quantity discounts always apply"],correctAnswer:2},

{category:"Operations Research",question:"If ordering cost decreases significantly while holding cost remains constant, the EOQ will:",options:["Increase","Decrease","Remain unchanged","Become zero"],correctAnswer:1},


    // MICRO ECONOMICS QUESTIONS
    {category:"Micro Economics",question:"What is the law of demand?",options:["Price and quantity demanded move in same direction","Price and quantity demanded move in opposite directions","Price remains constant","Quantity is always fixed"],correctAnswer:1},
    {category:"Micro Economics",question:"What causes a shift in the demand curve?",options:["Change in price of the good itself","Change in income or preferences","Movement along the curve","Government intervention only"],correctAnswer:1},
    {category:"Micro Economics",question:"Perfect competition is characterized by:",options:["One dominant firm","Few large firms","Many small firms with identical products","Differentiated products"],correctAnswer:2},
    {category:"Micro Economics",question:"What is price elasticity of demand?",options:["Total revenue divided by price","Percentage change in quantity demanded / percentage change in price","Change in supply","Fixed pricing strategy"],correctAnswer:1},
    {category:"Micro Economics",question:"Consumer surplus represents:",options:["Government tax revenue","Producer profit","Difference between willingness to pay and actual price paid","Total market value"],correctAnswer:2},
    
  {
    category: "Micro Economics",
    question: "What does the law of demand state?",
    options: [
      "Price and quantity demanded move in the same direction",
      "Price and quantity demanded move in opposite directions",
      "Demand is constant",
      "Quantity supplied never changes"
    ],
    correctAnswer: 1
  },
  {
    category: "Micro Economics",
    question: "If the price of a good rises from ₵10 to ₵12 and quantity demanded falls from 50 to 40 units, demand is:",
    options: [
      "Perfectly elastic",
      "Perfectly inelastic",
      "Elastic",
      "Inelastic"
    ],
    correctAnswer: 2
  },
  {
    category: "Micro Economics",
    question: "A rightward shift of the demand curve is caused by:",
    options: [
      "Increase in price",
      "Decrease in income (normal good)",
      "Increase in consumer income",
      "Increase in production cost"
    ],
    correctAnswer: 2
  },
  {
    category: "Micro Economics",
    question: "Total revenue is calculated as:",
    options: [
      "Price × Quantity",
      "Quantity ÷ Price",
      "Revenue − Cost",
      "Cost × Quantity"
    ],
    correctAnswer: 0
  },
  {
    category: "Micro Economics",
    question: "If price is ₵5 and quantity sold is 200 units, total revenue is:",
    options: [
      "₵1,000",
      "₵205",
      "₵1,500",
      "₵2,000"
    ],
    correctAnswer: 0
  },
  {
    category: "Micro Economics",
    question: "Opportunity cost is best defined as:",
    options: [
      "Money spent on goods",
      "Accounting cost",
      "Value of the next best alternative forgone",
      "Total cost of production"
    ],
    correctAnswer: 2
  },
  {
    category: "Micro Economics",
    question: "Which of the following is a normal good?",
    options: [
      "Demand falls as income rises",
      "Demand rises as income rises",
      "Demand is unchanged with income",
      "Demand depends only on price"
    ],
    correctAnswer: 1
  },
  {
    category: "Micro Economics",
    question: "If total cost is ₵500 and output is 100 units, average cost is:",
    options: [
      "₵4",
      "₵5",
      "₵50",
      "₵500"
    ],
    correctAnswer: 1
  },
  {
    category: "Micro Economics",
    question: "Which market structure has one seller and many buyers?",
    options: [
      "Oligopoly",
      "Perfect competition",
      "Monopoly",
      "Monopolistic competition"
    ],
    correctAnswer: 2
  },
  {
    category: "Micro Economics",
    question: "Marginal cost is the:",
    options: [
      "Total cost",
      "Average cost",
      "Additional cost of producing one more unit",
      "Fixed cost"
    ],
    correctAnswer: 2
  },
  {
    category: "Micro Economics",
    question: "If marginal utility is decreasing, it means:",
    options: [
      "Total utility is falling",
      "Consumer satisfaction rises at a decreasing rate",
      "Demand is elastic",
      "Prices are constant"
    ],
    correctAnswer: 1
  },
  {
    category: "Micro Economics",
    question: "A movement along the demand curve is caused by:",
    options: [
      "Change in income",
      "Change in taste",
      "Change in population",
      "Change in price of the good"
    ],
    correctAnswer: 3
  },
  {
    category: "Micro Economics",
    question: "If fixed cost is ₵200 and variable cost is ₵300, total cost is:",
    options: [
      "₵100",
      "₵200",
      "₵300",
      "₵500"
    ],
    correctAnswer: 3
  },
  {
    category: "Micro Economics",
    question: "Which of the following does NOT affect supply?",
    options: [
      "Technology",
      "Cost of production",
      "Number of sellers",
      "Consumer income"
    ],
    correctAnswer: 3
  },
  {
    category: "Micro Economics",
    question: "If demand is perfectly inelastic, the demand curve is:",
    options: [
      "Horizontal",
      "Downward sloping",
      "Vertical",
      "Upward sloping"
    ],
    correctAnswer: 2
  },
  {
    category: "Micro Economics",
    question: "If profit = total revenue − total cost, what is profit when TR = ₵1,200 and TC = ₵900?",
    options: [
      "₵300",
      "₵2,100",
      "₵1,100",
      "₵200"
    ],
    correctAnswer: 0
  },
  {
    category: "Micro Economics",
    question: "Which good is a complement to petrol?",
    options: [
      "Bicycle",
      "Car",
      "Rice",
      "Clothing"
    ],
    correctAnswer: 1
  },
  {
    category: "Micro Economics",
    question: "A price ceiling set below equilibrium causes:",
    options: [
      "Surplus",
      "Shortage",
      "No effect",
      "Higher prices"
    ],
    correctAnswer: 1
  },
  {
    category: "Micro Economics",
    question: "If price elasticity of demand is greater than 1, demand is:",
    options: [
      "Inelastic",
      "Unit elastic",
      "Elastic",
      "Perfectly inelastic"
    ],
    correctAnswer: 2
  },
  {
    category: "Micro Economics",
    question: "Which cost does not change with output?",
    options: [
      "Variable cost",
      "Marginal cost",
      "Average cost",
      "Fixed cost"
    ],
    correctAnswer: 3
  },
  {
    category: "Micro Economics",
    question: "Equilibrium price occurs where:",
    options: [
      "Demand equals supply",
      "Demand exceeds supply",
      "Supply exceeds demand",
      "Costs equal revenue"
    ],
    correctAnswer: 0
  },
  {
    category: "Micro Economics",
    question: "If supply increases and demand remains constant, price will:",
    options: [
      "Increase",
      "Decrease",
      "Remain unchanged",
      "Become zero"
    ],
    correctAnswer: 1
  },
  {
    category: "Micro Economics",
    question: "Which of the following is a public good?",
    options: [
      "Bread",
      "Mobile phone",
      "Street lighting",
      "Private car"
    ],
    correctAnswer: 2
  },
  {
    category: "Micro Economics",
    question: "Average revenue is equal to:",
    options: [
      "Price",
      "Total cost",
      "Marginal cost",
      "Profit"
    ],
    correctAnswer: 0
  },
  {
    category: "Micro Economics",
    question: "If price is ₵8 and quantity demanded is 50 units, total expenditure is:",
    options: [
      "₵58",
      "₵400",
      "₵450",
      "₵500"
    ],
    correctAnswer: 1
  },
  {
    category: "Micro Economics",
    question: "Which market structure sells differentiated products?",
    options: [
      "Perfect competition",
      "Monopoly",
      "Oligopoly",
      "Monopolistic competition"
    ],
    correctAnswer: 3
  },
  {
    category: "Micro Economics",
    question: "The short run is defined as a period when:",
    options: [
      "All factors are variable",
      "At least one factor is fixed",
      "Production stops",
      "Firms exit the market"
    ],
    correctAnswer: 1
  },
  {
    category: "Micro Economics",
    question: "If marginal cost is below average cost, average cost will:",
    options: [
      "Rise",
      "Fall",
      "Remain constant",
      "Become zero"
    ],
    correctAnswer: 1
  },
  {
    category: "Micro Economics",
    question: "Which of the following increases demand?",
    options: [
      "Decrease in income (normal good)",
      "Increase in price",
      "Increase in consumer income",
      "Increase in production cost"
    ],
    correctAnswer: 2
  },
  {
    category: "Micro Economics",
    question: "If fixed cost is ₵300 and output is zero, total cost is:",
    options: [
      "₵0",
      "₵300",
      "₵150",
      "₵600"
    ],
    correctAnswer: 1
  },
  {
    category: "Micro Economics",
    question: "Which curve shows price versus quantity demanded?",
    options: [
      "Supply curve",
      "Cost curve",
      "Utility curve",
      "Demand curve"
    ],
    correctAnswer: 3
  },
  {
    category: "Micro Economics",
    question: "If a subsidy is given to producers, supply will:",
    options: [
      "Decrease",
      "Remain constant",
      "Increase",
      "Disappear"
    ],
    correctAnswer: 2
  },
  {
    category: "Micro Economics",
    question: "Which of the following is an example of variable cost?",
    options: [
      "Rent",
      "Insurance",
      "Raw materials",
      "Factory building"
    ],
    correctAnswer: 2
  },
  {
    category: "Micro Economics",
    question: "When marginal revenue equals marginal cost, the firm is:",
    options: [
      "Making loss",
      "At profit-maximizing output",
      "Breaking even",
      "Overproducing"
    ],
    correctAnswer: 1
  },
  {
    category: "Micro Economics",
    question: "If demand is unit elastic, total revenue will:",
    options: [
      "Increase when price rises",
      "Decrease when price rises",
      "Remain unchanged when price changes",
      "Become zero"
    ],
    correctAnswer: 2
  },
  {
    category: "Micro Economics",
    question: "Which of the following best describes consumer surplus?",
    options: [
      "Profit of firms",
      "Tax collected by government",
      "Difference between willingness to pay and market price",
      "Total production"
    ],
    correctAnswer: 2
  },
  {
    category: "Micro Economics",
    question: "If price rises and demand is inelastic, total revenue will:",
    options: [
      "Fall",
      "Remain constant",
      "Increase",
      "Become zero"
    ],
    correctAnswer: 2
  },



    // ACCOUNTING INFORMATION SYSTEM QUESTIONS
    {category:"Accounting Information System",question:"What is the primary purpose of an AIS?",options:["Marketing products","Collecting, storing, and processing financial data","Managing employees","Designing products"],correctAnswer:1},
    {category:"Accounting Information System",question:"Which cycle involves customer sales and cash receipts?",options:["Expenditure cycle","Production cycle","Revenue cycle","Financing cycle"],correctAnswer:2},
    {category:"Accounting Information System",question:"Internal controls in AIS are designed to:",options:["Increase sales","Ensure accuracy and prevent fraud","Reduce employee count","Eliminate all risks"],correctAnswer:1},
    {category:"Accounting Information System",question:"What does ERP stand for?",options:["Enterprise Resource Planning","Electronic Revenue Processing","External Reporting Program","Economic Risk Planning"],correctAnswer:0},
    {category:"Accounting Information System",question:"Segregation of duties helps prevent:",options:["Employee collaboration","Efficient workflow","Fraud and errors","System updates"],correctAnswer:2},
    
  {
    category: "Accounting Information System",
    question: "What is the primary purpose of an Accounting Information System (AIS)?",
    options: [
      "Marketing products",
      "Collecting, storing, and processing financial data",
      "Managing employees",
      "Designing products"
    ],
    correctAnswer: 1
  },
  {
    category: "Accounting Information System",
    question: "Which cycle involves customer sales and cash receipts?",
    options: [
      "Expenditure cycle",
      "Production cycle",
      "Revenue cycle",
      "Financing cycle"
    ],
    correctAnswer: 2
  },
  {
    category: "Accounting Information System",
    question: "Internal controls in AIS are designed mainly to:",
    options: [
      "Increase profits",
      "Ensure accuracy and prevent fraud",
      "Reduce system costs",
      "Eliminate management decisions"
    ],
    correctAnswer: 1
  },
  {
    category: "Accounting Information System",
    question: "What does ERP stand for?",
    options: [
      "Enterprise Resource Planning",
      "Electronic Revenue Processing",
      "External Reporting Program",
      "Economic Risk Planning"
    ],
    correctAnswer: 0
  },
  {
    category: "Accounting Information System",
    question: "Segregation of duties helps prevent:",
    options: [
      "Employee collaboration",
      "Efficient workflow",
      "Fraud and errors",
      "System upgrades"
    ],
    correctAnswer: 2
  },
  {
    category: "Accounting Information System",
    question: "Which document authorizes the shipment of goods?",
    options: [
      "Sales order",
      "Shipping document",
      "Purchase order",
      "Invoice"
    ],
    correctAnswer: 1
  },
  {
    category: "Accounting Information System",
    question: "If total cash receipts for a day are ₵12,500 and cash disbursements are ₵8,000, net cash flow is:",
    options: [
      "₵20,500",
      "₵4,500",
      "₵12,500",
      "₵8,000"
    ],
    correctAnswer: 1
  },
  {
    category: "Accounting Information System",
    question: "Which cycle deals with purchasing and paying for goods?",
    options: [
      "Revenue cycle",
      "Expenditure cycle",
      "Financing cycle",
      "Production cycle"
    ],
    correctAnswer: 1
  },
  {
    category: "Accounting Information System",
    question: "A source document is best described as:",
    options: [
      "A summary report",
      "An original record of a transaction",
      "A trial balance",
      "A financial statement"
    ],
    correctAnswer: 1
  },
  {
    category: "Accounting Information System",
    question: "Which control ensures transactions are recorded only once?",
    options: [
      "Batch totals",
      "Segregation of duties",
      "Authorization controls",
      "Input validation"
    ],
    correctAnswer: 0
  },
  {
    category: "Accounting Information System",
    question: "If 250 sales invoices are processed with a total value of ₵50,000, the average invoice value is:",
    options: [
      "₵20",
      "₵200",
      "₵250",
      "₵500"
    ],
    correctAnswer: 1
  },
  {
    category: "Accounting Information System",
    question: "Which of the following is an example of a preventive control?",
    options: [
      "Bank reconciliation",
      "Authorization of transactions",
      "Internal audit",
      "Error report"
    ],
    correctAnswer: 1
  },
  {
    category: "Accounting Information System",
    question: "The production cycle is mainly concerned with:",
    options: [
      "Selling finished goods",
      "Converting raw materials into finished goods",
      "Paying suppliers",
      "Borrowing funds"
    ],
    correctAnswer: 1
  },
  {
    category: "Accounting Information System",
    question: "Which file stores current transaction data temporarily?",
    options: [
      "Master file",
      "Transaction file",
      "Backup file",
      "Reference file"
    ],
    correctAnswer: 1
  },
  {
    category: "Accounting Information System",
    question: "If total system processing cost is ₵9,000 and 300 transactions are processed, cost per transaction is:",
    options: [
      "₵30",
      "₵27",
      "₵300",
      "₵3"
    ],
    correctAnswer: 0
  },
  {
    category: "Accounting Information System",
    question: "Which document triggers the recording of a sales transaction?",
    options: [
      "Purchase order",
      "Sales invoice",
      "Receiving report",
      "Check"
    ],
    correctAnswer: 1
  },
  {
    category: "Accounting Information System",
    question: "A well-designed AIS should provide information that is:",
    options: [
      "Late and complex",
      "Relevant and reliable",
      "Incomplete",
      "Only historical"
    ],
    correctAnswer: 1
  },
  {
    category: "Accounting Information System",
    question: "Which of the following is a detective control?",
    options: [
      "Authorization",
      "Segregation of duties",
      "Physical access control",
      "Bank reconciliation"
    ],
    correctAnswer: 3
  },
  {
    category: "Accounting Information System",
    question: "If 5 errors are found in 500 transactions, the error rate is:",
    options: [
      "1%",
      "5%",
      "10%",
      "0.5%"
    ],
    correctAnswer: 0
  },
  {
    category: "Accounting Information System",
    question: "Which system integrates all business functions into one database?",
    options: [
      "TPS",
      "MIS",
      "ERP",
      "DSS"
    ],
    correctAnswer: 2
  },
  {
    category: "Accounting Information System",
    question: "Input controls are mainly used to:",
    options: [
      "Correct errors",
      "Prevent invalid data entry",
      "Summarize reports",
      "Store historical data"
    ],
    correctAnswer: 1
  },
  {
    category: "Accounting Information System",
    question: "Which document confirms goods received from suppliers?",
    options: [
      "Invoice",
      "Purchase order",
      "Receiving report",
      "Sales order"
    ],
    correctAnswer: 2
  },
  {
    category: "Accounting Information System",
    question: "If total payroll is ₵40,000 and 20 employees are paid equally, each employee receives:",
    options: [
      "₵1,000",
      "₵2,000",
      "₵4,000",
      "₵800"
    ],
    correctAnswer: 1
  },
  {
    category: "Accounting Information System",
    question: "Which of the following reduces the risk of unauthorized system access?",
    options: [
      "Password controls",
      "Batch processing",
      "Documentation",
      "Trial balance"
    ],
    correctAnswer: 0
  },
  {
    category: "Accounting Information System",
    question: "A master file typically contains:",
    options: [
      "Daily transactions",
      "Temporary data",
      "Permanent records such as customer accounts",
      "Backup copies only"
    ],
    correctAnswer: 2
  },
  {
    category: "Accounting Information System",
    question: "Which report compares actual results with expected results?",
    options: [
      "Error report",
      "Exception report",
      "Financial statement",
      "Transaction listing"
    ],
    correctAnswer: 1
  },
  {
    category: "Accounting Information System",
    question: "If a company processes 1,200 transactions monthly, average daily transactions (30 days) are:",
    options: [
      "20",
      "30",
      "40",
      "60"
    ],
    correctAnswer: 2
  },
  {
    category: "Accounting Information System",
    question: "Which of the following is an output of an AIS?",
    options: [
      "Source document",
      "Transaction file",
      "Financial statements",
      "Input screen"
    ],
    correctAnswer: 2
  },
  {
    category: "Accounting Information System",
    question: "Which AIS component includes people, procedures, and data?",
    options: [
      "Hardware only",
      "Software only",
      "System components",
      "Control environment"
    ],
    correctAnswer: 2
  },
  {
    category: "Accounting Information System",
    question: "If cash balance is ₵15,000 and unauthorized payment of ₵2,500 occurs, new balance is:",
    options: [
      "₵17,500",
      "₵12,500",
      "₵10,000",
      "₵15,000"
    ],
    correctAnswer: 1
  },
  {
    category: "Accounting Information System",
    question: "Which document authorizes payment to suppliers?",
    options: [
      "Purchase order",
      "Check or payment voucher",
      "Sales invoice",
      "Receiving report"
    ],
    correctAnswer: 1
  },
  {
    category: "Accounting Information System",
    question: "Which of the following is a corrective control?",
    options: [
      "Error correction procedures",
      "Authorization",
      "Segregation of duties",
      "Access restriction"
    ],
    correctAnswer: 0
  },
  {
    category: "Accounting Information System",
    question: "If total sales are ₵80,000 and cash sales are ₵30,000, credit sales are:",
    options: [
      "₵110,000",
      "₵50,000",
      "₵30,000",
      "₵20,000"
    ],
    correctAnswer: 1
  },
  {
    category: "Accounting Information System",
    question: "Which technology allows real-time processing of transactions?",
    options: [
      "Batch processing",
      "Manual system",
      "Online real-time processing",
      "Periodic reporting"
    ],
    correctAnswer: 2
  },
  {
    category: "Accounting Information System",
    question: "Which AIS principle ensures data is available when needed?",
    options: [
      "Accuracy",
      "Timeliness",
      "Completeness",
      "Authorization"
    ],
    correctAnswer: 1
  },
  {
    category: "Accounting Information System",
    question: "If an invoice of ₵6,000 is paid with a 5% cash discount, the amount paid is:",
    options: [
      "₵6,300",
      "₵5,700",
      "₵5,800",
      "₵6,000"
    ],
    correctAnswer: 1
  },
  {
    category: "Accounting Information System",
    question: "Which activity is part of the financing cycle?",
    options: [
      "Issuing shares",
      "Selling goods",
      "Purchasing inventory",
      "Producing goods"
    ],
    correctAnswer: 0
  },
  {
    category: "Accounting Information System",
    question: "Which control ensures only valid users access the system?",
    options: [
      "Audit trail",
      "Access control",
      "Error report",
      "Batch total"
    ],
    correctAnswer: 1
  },



    // STRATEGIC MANAGEMENT QUESTIONS
    {category:"Strategic Management",question:"SWOT analysis examines:",options:["Only internal factors","Only external factors","Strengths, Weaknesses, Opportunities, Threats","Financial ratios only"],correctAnswer:2},
    {category:"Strategic Management",question:"Porter's Five Forces framework analyzes:",options:["Employee satisfaction","Industry competitive structure","Product quality","Marketing effectiveness"],correctAnswer:1},
    {category:"Strategic Management",question:"What is a competitive advantage?",options:["Having more employees","Superior performance vs. competitors","Larger office space","Higher advertising budget"],correctAnswer:1},
    {category:"Strategic Management",question:"Cost leadership strategy focuses on:",options:["Premium pricing","Being the lowest cost producer","Product differentiation","Niche marketing"],correctAnswer:1},
    {category:"Strategic Management",question:"The balanced scorecard measures performance across:",options:["Financial metrics only","Customer satisfaction only","Financial, customer, internal, learning perspectives","Revenue only"],correctAnswer:2},
    
  {
    category: "Strategic Management",
    question: "SWOT analysis examines:",
    options: [
      "Only internal factors",
      "Only external factors",
      "Strengths, Weaknesses, Opportunities, Threats",
      "Financial ratios only"
    ],
    correctAnswer: 2
  },
  {
    category: "Strategic Management",
    question: "Porter's Five Forces framework analyzes:",
    options: [
      "Employee satisfaction",
      "Industry competitive structure",
      "Product quality",
      "Marketing effectiveness"
    ],
    correctAnswer: 1
  },
  {
    category: "Strategic Management",
    question: "A competitive advantage refers to:",
    options: [
      "Having more employees",
      "Superior performance compared to competitors",
      "Larger office space",
      "Higher advertising budget"
    ],
    correctAnswer: 1
  },
  {
    category: "Strategic Management",
    question: "Cost leadership strategy focuses on:",
    options: [
      "Premium pricing",
      "Being the lowest cost producer",
      "Product differentiation",
      "Niche marketing"
    ],
    correctAnswer: 1
  },
  {
    category: "Strategic Management",
    question: "The balanced scorecard evaluates performance using:",
    options: [
      "Financial metrics only",
      "Customer satisfaction only",
      "Financial, customer, internal, and learning perspectives",
      "Revenue figures only"
    ],
    correctAnswer: 2
  },
  {
    category: "Strategic Management",
    question: "Which strategy focuses on unique products or services?",
    options: [
      "Cost leadership",
      "Market penetration",
      "Differentiation strategy",
      "Retrenchment strategy"
    ],
    correctAnswer: 2
  },
  {
    category: "Strategic Management",
    question: "Corporate-level strategy mainly concerns:",
    options: [
      "Day-to-day operations",
      "Functional activities",
      "Overall direction of the organization",
      "Employee supervision"
    ],
    correctAnswer: 2
  },
  {
    category: "Strategic Management",
    question: "If a firm sells 40,000 units in a market of 200,000 units, its market share is:",
    options: [
      "10%",
      "15%",
      "20%",
      "25%"
    ],
    correctAnswer: 2
  },
  {
    category: "Strategic Management",
    question: "Which of the following is an external analysis tool?",
    options: [
      "Value chain analysis",
      "SWOT (internal part)",
      "PESTLE analysis",
      "Resource audit"
    ],
    correctAnswer: 2
  },
  {
    category: "Strategic Management",
    question: "Business-level strategy focuses on:",
    options: [
      "Overall mission of the firm",
      "How to compete in a particular market",
      "Employee recruitment",
      "Financial reporting"
    ],
    correctAnswer: 1
  },
  {
    category: "Strategic Management",
    question: "If company profit increased from ₵200,000 to ₵260,000, profit growth rate is:",
    options: [
      "20%",
      "25%",
      "30%",
      "35%"
    ],
    correctAnswer: 2
  },
  {
    category: "Strategic Management",
    question: "Which of the following represents an opportunity?",
    options: [
      "New government regulation",
      "Increase in competition",
      "Emerging new market",
      "Rising production costs"
    ],
    correctAnswer: 2
  },
  {
    category: "Strategic Management",
    question: "The main goal of strategic management is to:",
    options: [
      "Increase short-term profits only",
      "Achieve sustainable competitive advantage",
      "Reduce employee numbers",
      "Eliminate competition"
    ],
    correctAnswer: 1
  },
  {
    category: "Strategic Management",
    question: "Which strategy involves withdrawing from unprofitable markets?",
    options: [
      "Expansion",
      "Stability",
      "Retrenchment",
      "Diversification"
    ],
    correctAnswer: 2
  },
  {
    category: "Strategic Management",
    question: "If total company sales are ₵1,000,000 and one product contributes ₵250,000, its contribution is:",
    options: [
      "15%",
      "20%",
      "25%",
      "30%"
    ],
    correctAnswer: 2
  },
  {
    category: "Strategic Management",
    question: "Functional-level strategy mainly supports:",
    options: [
      "Corporate strategy",
      "Business strategy",
      "Employee discipline",
      "External environment"
    ],
    correctAnswer: 1
  },
  {
    category: "Strategic Management",
    question: "Which of the following is NOT part of PESTLE analysis?",
    options: [
      "Political",
      "Economic",
      "Social",
      "Technological cost"
    ],
    correctAnswer: 3
  },
  {
    category: "Strategic Management",
    question: "A diversification strategy involves:",
    options: [
      "Selling existing products in existing markets",
      "Selling new products in new markets",
      "Reducing product lines",
      "Focusing on a single product"
    ],
    correctAnswer: 1
  },
  {
    category: "Strategic Management",
    question: "If a firm reduces cost but maintains quality, it is pursuing:",
    options: [
      "Differentiation",
      "Focus strategy",
      "Cost leadership",
      "Stability strategy"
    ],
    correctAnswer: 2
  },
  {
    category: "Strategic Management",
    question: "Which of the following is a threat?",
    options: [
      "Improved technology",
      "Entry of new competitors",
      "Growing customer base",
      "Tax reduction"
    ],
    correctAnswer: 1
  },
  {
    category: "Strategic Management",
    question: "Strategy formulation involves:",
    options: [
      "Evaluating results",
      "Setting objectives and choosing strategies",
      "Monitoring performance",
      "Correcting deviations"
    ],
    correctAnswer: 1
  },
  {
    category: "Strategic Management",
    question: "If return on investment (ROI) is 15% on ₵400,000 investment, return is:",
    options: [
      "₵50,000",
      "₵55,000",
      "₵60,000",
      "₵65,000"
    ],
    correctAnswer: 2
  },
  {
    category: "Strategic Management",
    question: "Which of the following supports strategy implementation?",
    options: [
      "Mission statement",
      "Organizational structure",
      "External analysis",
      "Competitor analysis"
    ],
    correctAnswer: 1
  },
  {
    category: "Strategic Management",
    question: "Stability strategy means:",
    options: [
      "Expanding rapidly",
      "Maintaining current operations",
      "Reducing activities",
      "Diversifying products"
    ],
    correctAnswer: 1
  },
  {
    category: "Strategic Management",
    question: "Which ratio best measures strategic performance?",
    options: [
      "Liquidity ratio",
      "Profit margin",
      "Turnover ratio",
      "Employee ratio"
    ],
    correctAnswer: 1
  },
  {
    category: "Strategic Management",
    question: "The value chain analysis focuses on:",
    options: [
      "External environment",
      "Internal activities that create value",
      "Competitor pricing",
      "Government policy"
    ],
    correctAnswer: 1
  },
  {
    category: "Strategic Management",
    question: "Which strategy targets a specific market segment?",
    options: [
      "Cost leadership",
      "Differentiation",
      "Focus strategy",
      "Stability strategy"
    ],
    correctAnswer: 2
  },
  {
    category: "Strategic Management",
    question: "If a firm's sales grew from ₵500,000 to ₵600,000, growth rate is:",
    options: [
      "15%",
      "18%",
      "20%",
      "25%"
    ],
    correctAnswer: 2
  },
  {
    category: "Strategic Management",
    question: "Strategic control is mainly concerned with:",
    options: [
      "Strategy formulation",
      "Strategy implementation",
      "Monitoring and evaluating strategies",
      "Employee recruitment"
    ],
    correctAnswer: 2
  },
  {
    category: "Strategic Management",
    question: "Which of the following is an internal strength?",
    options: [
      "Economic recession",
      "Strong brand image",
      "New competitors",
      "High taxes"
    ],
    correctAnswer: 1
  },
  {
    category: "Strategic Management",
    question: "Ansoff Matrix market development strategy involves:",
    options: [
      "Existing products in existing markets",
      "New products in existing markets",
      "Existing products in new markets",
      "New products in new markets"
    ],
    correctAnswer: 2
  },
  {
    category: "Strategic Management",
    question: "Which of the following best describes vision?",
    options: [
      "Current operations",
      "Future desired position",
      "Daily objectives",
      "Financial target"
    ],
    correctAnswer: 1
  },
  {
    category: "Strategic Management",
    question: "If fixed costs are ₵100,000 and contribution is ₵25 per unit, break-even units are:",
    options: [
      "2,000",
      "3,000",
      "4,000",
      "5,000"
    ],
    correctAnswer: 3
  },
  {
    category: "Strategic Management",
    question: "Which strategic option involves merging with another company?",
    options: [
      "Internal growth",
      "Strategic alliance",
      "Merger or acquisition",
      "Stability strategy"
    ],
    correctAnswer: 2
  },
  {
    category: "Strategic Management",
    question: "Competitive rivalry is strongest when:",
    options: [
      "Few competitors exist",
      "Products are highly differentiated",
      "Many competitors offer similar products",
      "Demand is rising rapidly"
    ],
    correctAnswer: 2
  },
  {
    category: "Strategic Management",
    question: "Which of the following is a corporate restructuring strategy?",
    options: [
      "Market penetration",
      "Product development",
      "Divestment",
      "Cost leadership"
    ],
    correctAnswer: 2
  },
  {
    category: "Strategic Management",
    question: "If sales revenue is ₵900,000 and costs are ₵720,000, profit margin is:",
    options: [
      "15%",
      "18%",
      "20%",
      "25%"
    ],
    correctAnswer: 1
  },
  {
    category: "Strategic Management",
    question: "Strategic intent primarily focuses on:",
    options: [
      "Short-term goals",
      "Daily operations",
      "Long-term direction and ambition",
      "Employee discipline"
    ],
    correctAnswer: 2
  },



    // COMPANY AND PARTNERSHIP LAW QUESTIONS
    {category:"Company and Partnership Law",question:"A limited liability company means:",options:["Unlimited personal liability","Shareholders' liability limited to investment","Company cannot be sued","No legal obligations"],correctAnswer:1},
    {category:"Company and Partnership Law",question:"What is a partnership?",options:["Single person business","Association of two or more persons in business","Government entity","Charitable organization"],correctAnswer:1},
    {category:"Company and Partnership Law",question:"In a general partnership, partners have:",options:["No liability","Limited liability","Unlimited joint and several liability","Government protection"],correctAnswer:2},
    {category:"Company and Partnership Law",question:"A company's articles of association contain:",options:["Employee contracts","Internal management rules and regulations","Tax returns","Marketing plans"],correctAnswer:1},
    {category:"Company and Partnership Law",question:"Directors owe fiduciary duties to:",options:["Themselves only","The company and shareholders","Competitors","Government only"],correctAnswer:1},
    

{category:"Company and Partnership Law",question:"A limited liability company means:",options:["Unlimited personal liability","Shareholders' liability limited to investment","Company cannot be sued","No legal obligations"],correctAnswer:1},
{category:"Company and Partnership Law",question:"What is a partnership?",options:["Single person business","Association of two or more persons in business","Government entity","Charitable organization"],correctAnswer:1},
{category:"Company and Partnership Law",question:"In a general partnership, partners have:",options:["No liability","Limited liability","Unlimited joint and several liability","Government protection"],correctAnswer:2},
{category:"Company and Partnership Law",question:"A company's articles of association contain:",options:["Employee contracts","Internal management rules and regulations","Tax returns","Marketing plans"],correctAnswer:1},
{category:"Company and Partnership Law",question:"Directors owe fiduciary duties to:",options:["Themselves only","The company and shareholders","Competitors","Government only"],correctAnswer:1},

{category:"Company and Partnership Law",question:"Which document states a company’s objectives?",options:["Articles of association","Memorandum of association","Share certificate","Prospectus"],correctAnswer:1},
{category:"Company and Partnership Law",question:"Which type of company can offer shares to the public?",options:["Private company","Unlimited company","Public company","Partnership"],correctAnswer:2},
{category:"Company and Partnership Law",question:"Minimum number of members in a partnership is:",options:["One","Two","Three","Five"],correctAnswer:1},
{category:"Company and Partnership Law",question:"A minor in a partnership:",options:["Can be a full partner","Cannot be admitted at all","Can be admitted to benefits only","Controls the firm"],correctAnswer:2},
{category:"Company and Partnership Law",question:"The doctrine of ultra vires means:",options:["Acts beyond authority","Acts within power","Illegal contracts","Fraud"],correctAnswer:0},

{category:"Company and Partnership Law",question:"Which body appoints company directors?",options:["Auditors","Shareholders","Government","Employees"],correctAnswer:1},
{category:"Company and Partnership Law",question:"A partnership deed is:",options:["Mandatory by law","Optional but advisable","Illegal","A court document"],correctAnswer:1},
{category:"Company and Partnership Law",question:"Which partner has unlimited liability?",options:["Limited partner","Sleeping partner","General partner","Nominal partner"],correctAnswer:2},
{category:"Company and Partnership Law",question:"Company profits are distributed as:",options:["Salary","Wages","Dividends","Commission"],correctAnswer:2},
{category:"Company and Partnership Law",question:"Which meeting is held annually?",options:["Extraordinary meeting","Statutory meeting","Annual General Meeting","Board meeting"],correctAnswer:2},

{category:"Company and Partnership Law",question:"Share capital represents:",options:["Company debt","Owners’ contribution","Company expenses","Government grant"],correctAnswer:1},
{category:"Company and Partnership Law",question:"Who manages the daily affairs of a company?",options:["Shareholders","Auditors","Directors","Registrar"],correctAnswer:2},
{category:"Company and Partnership Law",question:"Which partner contributes only reputation?",options:["Active partner","Sleeping partner","Nominal partner","Minor partner"],correctAnswer:2},
{category:"Company and Partnership Law",question:"Company liquidation means:",options:["Expansion","Dissolution","Merger","Incorporation"],correctAnswer:1},
{category:"Company and Partnership Law",question:"Which is NOT a type of partner?",options:["Sleeping partner","Active partner","Nominal partner","Equity partner"],correctAnswer:3},

{category:"Company and Partnership Law",question:"Transfer of shares in a private company is:",options:["Freely allowed","Restricted","Illegal","Mandatory"],correctAnswer:1},
{category:"Company and Partnership Law",question:"The maximum number of partners in a firm (generally) is:",options:["10","20","50","Unlimited"],correctAnswer:1},
{category:"Company and Partnership Law",question:"Who bears losses in a partnership?",options:["Only active partners","Partners as agreed","Only sleeping partners","Government"],correctAnswer:1},
{category:"Company and Partnership Law",question:"Separate legal personality applies to:",options:["Partnership","Sole trader","Company","Joint venture"],correctAnswer:2},
{category:"Company and Partnership Law",question:"Which document invites public subscription?",options:["Articles","Memorandum","Prospectus","Resolution"],correctAnswer:2},

{category:"Company and Partnership Law",question:"A company seal signifies:",options:["Approval","Authentication","Ownership","Profit"],correctAnswer:1},
{category:"Company and Partnership Law",question:"Which partner does not take part in management?",options:["Active partner","Nominal partner","Sleeping partner","General partner"],correctAnswer:2},
{category:"Company and Partnership Law",question:"Who can wind up a company compulsorily?",options:["Directors","Shareholders","Court","Auditors"],correctAnswer:2},
{category:"Company and Partnership Law",question:"Partners are agents of:",options:["The government","Each other","The company","The court"],correctAnswer:1},
{category:"Company and Partnership Law",question:"Which is an advantage of incorporation?",options:["Unlimited liability","Separate legal entity","More risk","No regulation"],correctAnswer:1},

{category:"Company and Partnership Law",question:"A firm name is also called:",options:["Trade name","Legal name","Brand","Copyright"],correctAnswer:0},
{category:"Company and Partnership Law",question:"Company directors must act in:",options:["Personal interest","Best interest of company","Interest of competitors","Any manner"],correctAnswer:1},
{category:"Company and Partnership Law",question:"Which is a ground for dissolution of partnership?",options:["Admission of partner","Expiry of term","Profit sharing","Capital contribution"],correctAnswer:1},
{category:"Company and Partnership Law",question:"If a partner contributes GH₵10,000 and firm dissolves with GH₵40,000 assets, capital repayment is:",options:["GH₵10,000","GH₵40,000","GH₵30,000","GH₵50,000"],correctAnswer:0},
{category:"Company and Partnership Law",question:"Company income tax is paid by:",options:["Directors","Shareholders","Company itself","Employees"],correctAnswer:2},



    // COST ACCOUNTING QUESTIONS
    {category:"Cost Accounting",question:"Variable costs:",options:["Remain constant in total","Change with production volume","Are always zero","Never change"],correctAnswer:1},
    {category:"Cost Accounting",question:"What is absorption costing?",options:["Ignoring overhead","Allocating all manufacturing costs to products","Only direct costs","Marketing costs only"],correctAnswer:1},
    {category:"Cost Accounting",question:"Break-even point is where:",options:["Profit is maximized","Total revenue equals total costs","Costs are minimized","Sales are highest"],correctAnswer:1},
    {category:"Cost Accounting",question:"Standard costing involves:",options:["Using historical costs only","Setting predetermined costs for comparison","Ignoring variances","Random cost allocation"],correctAnswer:1},
    {category:"Cost Accounting",question:"Job order costing is appropriate when:",options:["Products are identical","Products are customized","Mass production","Services only"],correctAnswer:1},
   

{category:"Cost Accounting",question:"Variable costs:",options:["Remain constant in total","Change with production volume","Are always zero","Never change"],correctAnswer:1},
{category:"Cost Accounting",question:"Absorption costing involves:",options:["Ignoring overhead","Allocating all manufacturing costs to products","Only direct costs","Marketing costs only"],correctAnswer:1},
{category:"Cost Accounting",question:"Break-even point occurs when:",options:["Profit is highest","Total revenue equals total cost","Sales are zero","Fixed cost is zero"],correctAnswer:1},
{category:"Cost Accounting",question:"Standard costing is:",options:["Actual cost system","Predetermined cost system","Random costing","Market-based costing"],correctAnswer:1},
{category:"Cost Accounting",question:"Job order costing is suitable when:",options:["Products are identical","Products are customized","Continuous production","No inventories"],correctAnswer:1},

{category:"Cost Accounting",question:"Marginal cost refers to:",options:["Total cost","Additional cost of one extra unit","Average cost","Fixed cost"],correctAnswer:1},
{category:"Cost Accounting",question:"Fixed costs:",options:["Vary per unit","Change with output","Remain constant in total","Are always variable"],correctAnswer:2},
{category:"Cost Accounting",question:"Contribution equals:",options:["Sales − Variable cost","Sales − Fixed cost","Profit − Cost","Revenue − Total cost"],correctAnswer:0},
{category:"Cost Accounting",question:"Which cost is NOT a product cost?",options:["Direct material","Direct labor","Manufacturing overhead","Selling expense"],correctAnswer:3},
{category:"Cost Accounting",question:"Process costing is best used when:",options:["Products are unique","Production is continuous","Jobs differ","Orders are small"],correctAnswer:1},

{category:"Cost Accounting",question:"If selling price is GH₵50 and variable cost is GH₵30, contribution per unit is:",options:["GH₵20","GH₵80","GH₵30","GH₵50"],correctAnswer:0},
{category:"Cost Accounting",question:"Total cost equals:",options:["Fixed cost + Variable cost","Revenue − Profit","Contribution − Fixed cost","Marginal cost × Units"],correctAnswer:0},
{category:"Cost Accounting",question:"A cost that can be traced directly to a product is:",options:["Indirect cost","Period cost","Direct cost","Opportunity cost"],correctAnswer:2},
{category:"Cost Accounting",question:"Which cost remains unchanged per unit as output increases?",options:["Variable cost","Fixed cost","Marginal cost","Prime cost"],correctAnswer:1},
{category:"Cost Accounting",question:"Prime cost consists of:",options:["Direct materials and labor","Labor and overhead","Materials and overhead","Total production cost"],correctAnswer:0},

{category:"Cost Accounting",question:"Overhead costs are:",options:["Direct costs","Indirect costs","Selling costs","Opportunity costs"],correctAnswer:1},
{category:"Cost Accounting",question:"Cost-volume-profit analysis helps in:",options:["Budgeting","Decision making","Auditing","Taxation"],correctAnswer:1},
{category:"Cost Accounting",question:"If fixed cost is GH₵10,000 and contribution per unit is GH₵50, break-even units are:",options:["200","100","500","5,000"],correctAnswer:0},
{category:"Cost Accounting",question:"Which is a period cost?",options:["Factory rent","Direct labor","Administrative salary","Raw material"],correctAnswer:2},
{category:"Cost Accounting",question:"Variable costing treats fixed manufacturing overhead as:",options:["Product cost","Period cost","Direct cost","Marginal cost"],correctAnswer:1},

{category:"Cost Accounting",question:"Sunk cost is a cost that:",options:["Will be incurred","Has already been incurred","Can be avoided","Is variable"],correctAnswer:1},
{category:"Cost Accounting",question:"Relevant costs are costs that:",options:["Are fixed","Differ between alternatives","Are sunk","Are historical"],correctAnswer:1},
{category:"Cost Accounting",question:"Which cost involves sacrifice of next best alternative?",options:["Historical cost","Opportunity cost","Fixed cost","Marginal cost"],correctAnswer:1},
{category:"Cost Accounting",question:"If sales are GH₵100,000 and variable costs are GH₵60,000, contribution is:",options:["GH₵40,000","GH₵160,000","GH₵60,000","GH₵100,000"],correctAnswer:0},
{category:"Cost Accounting",question:"Contribution margin ratio equals:",options:["Contribution ÷ Sales","Sales ÷ Contribution","Profit ÷ Cost","Fixed cost ÷ Sales"],correctAnswer:0},

{category:"Cost Accounting",question:"Which cost increases in total as output increases?",options:["Fixed cost","Variable cost","Sunk cost","Opportunity cost"],correctAnswer:1},
{category:"Cost Accounting",question:"Budgetary control involves:",options:["Ignoring budgets","Comparing actual with budgeted results","Only planning","Only controlling"],correctAnswer:1},
{category:"Cost Accounting",question:"Standard cost variance is the difference between:",options:["Budget and actual cost","Standard and actual cost","Sales and profit","Fixed and variable cost"],correctAnswer:1},
{category:"Cost Accounting",question:"Which is NOT a function of cost accounting?",options:["Cost control","Cost ascertainment","Decision making","Statutory auditing"],correctAnswer:3},
{category:"Cost Accounting",question:"Direct labor cost is classified as:",options:["Product cost","Period cost","Selling cost","Administrative cost"],correctAnswer:0},

{category:"Cost Accounting",question:"If fixed cost is GH₵12,000 and contribution is GH₵18,000, profit is:",options:["GH₵6,000","GH₵30,000","GH₵12,000","GH₵18,000"],correctAnswer:0},
{category:"Cost Accounting",question:"Which costing method excludes fixed manufacturing overhead?",options:["Absorption costing","Marginal costing","Job costing","Process costing"],correctAnswer:1},
{category:"Cost Accounting",question:"Cost control aims at:",options:["Reducing quality","Maintaining costs within limits","Increasing prices","Eliminating production"],correctAnswer:1},
{category:"Cost Accounting",question:"Semi-variable costs:",options:["Are fully fixed","Are fully variable","Contain fixed and variable elements","Do not change"],correctAnswer:2},
{category:"Cost Accounting",question:"The main objective of cost accounting is to:",options:["Prepare financial statements","Determine and control cost","Calculate tax","Audit accounts"],correctAnswer:1},



    // AUDIT AND INTERNAL REVIEW QUESTIONS
    {category:"Audit and Internal Review",question:"The primary objective of an audit is to:",options:["Find all fraud","Express opinion on financial statement fairness","Prepare financial statements","Manage company operations"],correctAnswer:1},
    {category:"Audit and Internal Review",question:"Audit evidence should be:",options:["Expensive","Sufficient and appropriate","Minimal","Ignored"],correctAnswer:1},
    {category:"Audit and Internal Review",question:"Independence means the auditor:",options:["Works for the company","Is free from conflicts of interest","Ignores management","Never communicates"],correctAnswer:1},
    {category:"Audit and Internal Review",question:"Internal audit focuses on:",options:["External reporting only","Improving operations and controls","Marketing","Product development"],correctAnswer:1},
    {category:"Audit and Internal Review",question:"Audit risk is the risk that:",options:["Company fails","Auditor issues wrong opinion","Employees quit","Sales decline"],correctAnswer:1},
    

{category:"Audit and Internal Review",question:"The primary objective of an audit is to:",options:["Find all fraud","Express opinion on financial statement fairness","Prepare financial statements","Manage company operations"],correctAnswer:1},
{category:"Audit and Internal Review",question:"Audit evidence should be:",options:["Expensive","Sufficient and appropriate","Minimal","Ignored"],correctAnswer:1},
{category:"Audit and Internal Review",question:"Auditor independence means:",options:["Working for management","Freedom from conflicts of interest","Ignoring company policies","Avoiding documentation"],correctAnswer:1},
{category:"Audit and Internal Review",question:"Internal auditing focuses on:",options:["External reporting","Improving operations and controls","Tax computation","Sales growth"],correctAnswer:1},
{category:"Audit and Internal Review",question:"Audit risk is the risk that:",options:["Company collapses","Auditor issues inappropriate opinion","Employees commit fraud","Profits fall"],correctAnswer:1},

{category:"Audit and Internal Review",question:"Which type of audit is statutory?",options:["Internal audit","External audit","Management audit","Operational audit"],correctAnswer:1},
{category:"Audit and Internal Review",question:"Internal control helps to:",options:["Eliminate all risk","Safeguard assets and ensure accuracy","Increase sales","Reduce staff"],correctAnswer:1},
{category:"Audit and Internal Review",question:"Which audit risk relates to client's business environment?",options:["Control risk","Detection risk","Inherent risk","Sampling risk"],correctAnswer:2},
{category:"Audit and Internal Review",question:"Detection risk can be reduced by:",options:["Better internal controls","Increasing audit procedures","Management supervision","Reducing audit fees"],correctAnswer:1},
{category:"Audit and Internal Review",question:"Control risk is the risk that:",options:["Errors occur","Controls fail to prevent errors","Auditor fails","Company shuts down"],correctAnswer:1},

{category:"Audit and Internal Review",question:"Audit planning helps to:",options:["Increase audit cost","Ensure efficient audit","Avoid documentation","Eliminate audit risk"],correctAnswer:1},
{category:"Audit and Internal Review",question:"Materiality refers to:",options:["Exact accuracy","Significance of misstatements","Audit fee","Total assets"],correctAnswer:1},
{category:"Audit and Internal Review",question:"Which document guides the auditor's work?",options:["Financial statements","Audit program","Bank statement","Trial balance"],correctAnswer:1},
{category:"Audit and Internal Review",question:"Substantive testing aims to:",options:["Evaluate controls","Detect material misstatements","Approve transactions","Train staff"],correctAnswer:1},
{category:"Audit and Internal Review",question:"Compliance testing checks:",options:["Accuracy of figures","Adherence to controls","Profitability","Efficiency"],correctAnswer:1},

{category:"Audit and Internal Review",question:"Which is a preventive control?",options:["Reconciliation","Authorization","Internal audit","Error report"],correctAnswer:1},
{category:"Audit and Internal Review",question:"Which audit evidence is most reliable?",options:["Oral evidence","Internal documents","External confirmations","Management representations"],correctAnswer:2},
{category:"Audit and Internal Review",question:"Audit working papers are owned by:",options:["Client","Auditor","Shareholders","Regulators"],correctAnswer:1},
{category:"Audit and Internal Review",question:"The auditor's report is addressed to:",options:["Management","Employees","Shareholders","Government"],correctAnswer:2},
{category:"Audit and Internal Review",question:"Going concern assumption means the business:",options:["Will close soon","Will continue operating","Has no liabilities","Is profitable"],correctAnswer:1},

{category:"Audit and Internal Review",question:"Which opinion is issued when statements are fairly presented?",options:["Qualified","Adverse","Disclaimer","Unqualified"],correctAnswer:3},
{category:"Audit and Internal Review",question:"An adverse opinion is given when:",options:["Misstatements are material and pervasive","Evidence is insufficient","Statements are correct","Audit risk is low"],correctAnswer:0},
{category:"Audit and Internal Review",question:"Disclaimer of opinion occurs when:",options:["Auditor agrees fully","Auditor lacks sufficient evidence","Accounts are perfect","Controls are strong"],correctAnswer:1},
{category:"Audit and Internal Review",question:"Which audit involves efficiency and effectiveness?",options:["Financial audit","Operational audit","Statutory audit","Compliance audit"],correctAnswer:1},
{category:"Audit and Internal Review",question:"Internal auditors report primarily to:",options:["Finance manager","Managing director","Board or audit committee","External auditor"],correctAnswer:2},

{category:"Audit and Internal Review",question:"If inherent risk is high, auditor should:",options:["Reduce testing","Increase testing","Ignore controls","Withdraw"],correctAnswer:1},
{category:"Audit and Internal Review",question:"Sampling risk arises from:",options:["Testing all items","Using a sample","Fraud","Weak controls"],correctAnswer:1},
{category:"Audit and Internal Review",question:"Audit trail helps in:",options:["Hiding errors","Tracing transactions","Increasing revenue","Reducing tax"],correctAnswer:1},
{category:"Audit and Internal Review",question:"Which document summarizes audit findings?",options:["Working papers","Audit report","Ledger","Cash book"],correctAnswer:1},
{category:"Audit and Internal Review",question:"Professional skepticism means:",options:["Trust management fully","Questioning mind","Ignoring evidence","Assuming fraud"],correctAnswer:1},

{category:"Audit and Internal Review",question:"If total audit risk is 5%, inherent risk is 50% and control risk is 50%, detection risk is:",options:["20%","10%","5%","2%"],correctAnswer:0},
{category:"Audit and Internal Review",question:"Which activity is part of internal review?",options:["Preparing tax returns","Evaluating risk management","Selling products","Hiring staff"],correctAnswer:1},
{category:"Audit and Internal Review",question:"Which is NOT an audit evidence type?",options:["Physical inspection","Confirmation","Observation","Speculation"],correctAnswer:3},
{category:"Audit and Internal Review",question:"Audit documentation supports:",options:["Marketing","Audit opinion","Sales","Budgeting"],correctAnswer:1},
{category:"Audit and Internal Review",question:"The final responsibility for financial statements rests with:",options:["Auditor","Management","Internal auditor","Shareholders"],correctAnswer:1},



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