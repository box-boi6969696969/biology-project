// Buddha Jumps Over the Wall - Interactive Biochemistry Website
// Main JavaScript functionality (English only)

// Ingredient data with molecular information
const ingredients = [
    {
        id: 'abalone',
        name: 'Abalone',
        category: 'proteins',
        image: 'abalone.jpg',
        description: 'High-quality protein source rich in essential amino acids',
        molecular: 'Collagen and myofibrillar proteins',
        enzyme: 'Pepsin, Trypsin',
        monomer: 'Amino acids (Glycine, Proline, Hydroxyproline)',
        reaction: 'protein_hydrolysis'
    },
    {
        id: 'sea-cucumber',
        name: 'Sea Cucumber',
        category: 'proteins',
        image: 'sea-cucumber.jpg',
        description: 'Marine invertebrate with high collagen content',
        molecular: 'Collagen proteins (Type I and Type V)',
        enzyme: 'Pepsin, Collagenase',
        monomer: 'Amino acids (Glycine, Proline, Lysine)',
        reaction: 'protein_hydrolysis'
    },
    {
        id: 'shark-fin',
        name: 'Shark Fin',
        category: 'proteins',
        image: 'shark-fin.jpg',
        description: 'Cartilaginous tissue rich in collagen',
        molecular: 'Collagen and elastin fibers',
        enzyme: 'Pepsin, Trypsin',
        monomer: 'Amino acids (Glycine, Proline, Hydroxyproline)',
        reaction: 'protein_hydrolysis'
    },
    {
        id: 'dried-scallops',
        name: 'Dried Scallops',
        category: 'proteins',
        image: 'dried-scallops.jpg',
        description: 'Concentrated seafood protein with umami compounds',
        molecular: 'Myofibrillar proteins, nucleotides',
        enzyme: 'Pepsin, Trypsin',
        monomer: 'Amino acids, Nucleotides',
        reaction: 'protein_hydrolysis'
    },
    {
        id: 'shiitake',
        name: 'Shiitake Mushrooms',
        category: 'carbohydrates',
        image: 'dried-mushrooms.jpg',
        description: 'Fungi containing complex polysaccharides',
        molecular: 'Chitin, Beta-glucans, Mannans',
        enzyme: 'Chitinase, Glucanase, Amylase',
        monomer: 'Glucose, N-acetylglucosamine',
        reaction: 'carbohydrate_hydrolysis'
    },
    {
        id: 'bamboo-shoots',
        name: 'Bamboo Shoots',
        category: 'carbohydrates',
        image: 'bamboo-shoots.jpg',
        description: 'Young bamboo with cellulose and hemicellulose',
        molecular: 'Cellulose, Hemicellulose, Starch',
        enzyme: 'Cellulase, Amylase',
        monomer: 'Glucose, Xylose',
        reaction: 'carbohydrate_hydrolysis'
    },
    {
        id: 'quail-eggs',
        name: 'Quail Eggs',
        category: 'proteins',
        image: 'quail-eggs.jpg',
        description: 'Complete protein source with all essential amino acids',
        molecular: 'Ovalbumin, Ovotransferrin, Phosvitin',
        enzyme: 'Pepsin, Trypsin',
        monomer: 'Essential amino acids',
        reaction: 'protein_hydrolysis'
    },
    {
        id: 'pork-belly',
        name: 'Pork Belly',
        category: 'lipids',
        image: 'pork-belly.jpg',
        description: 'Fatty meat providing triglycerides and proteins',
        molecular: 'Triglycerides, Collagen, Myosin',
        enzyme: 'Lipase, Pepsin',
        monomer: 'Fatty acids, Glycerol, Amino acids',
        reaction: 'lipid_hydrolysis'
    },
    {
        id: 'chicken',
        name: 'Chicken',
        category: 'proteins',
        image: 'chicken.jpg',
        description: 'Lean protein with complete amino acid profile',
        molecular: 'Actin, Myosin, Collagen',
        enzyme: 'Pepsin, Trypsin',
        monomer: 'Essential amino acids',
        reaction: 'protein_hydrolysis'
    },
    {
        id: 'ham',
        name: 'Chinese Ham',
        category: 'proteins',
        image: 'chinese-ham.jpg',
        description: 'Aged pork with concentrated flavors and proteins',
        molecular: 'Denatured proteins, Peptides',
        enzyme: 'Pepsin, Trypsin',
        monomer: 'Amino acids, Peptides',
        reaction: 'protein_hydrolysis'
    },
    {
        id: 'shaoxing-wine',
        name: 'Shaoxing Wine',
        category: 'carbohydrates',
        image: 'shaoxing-wine.jpg',
        description: 'Rice wine providing alcohol and sugars',
        molecular: 'Ethanol, Glucose, Fructose',
        enzyme: 'Alcohol dehydrogenase',
        monomer: 'Ethanol, Glucose',
        reaction: 'alcohol_metabolism'
    },
    {
        id: 'fish-maw',
        name: 'Fish Maw',
        category: 'proteins',
        image: 'fish-maw.jpg',
        description: 'Swim bladder rich in collagen and elastin',
        molecular: 'Collagen, Elastin',
        enzyme: 'Pepsin, Trypsin',
        monomer: 'Amino acids (Glycine, Proline)',
        reaction: 'protein_hydrolysis'
    }
];

// Enhanced enzyme data with multiple reaction types
const enzymeReactions = {
    protein_hydrolysis: {
        name: 'Protein Hydrolysis',
        enzyme: 'Pepsin / Trypsin',
        substrate: 'Protein Polymer',
        products: 'Amino Acids',
        optimal_ph: [1.5, 2.0],
        optimal_temp: [37, 37],
        structure_image: 'pepsin-enzyme.jpg',
        breakdown_image: 'protein-breakdown.jpg',
        equation: 'Protein + H₂O → Amino Acids',
        description: 'Proteins are broken down into individual amino acids through hydrolysis of peptide bonds.',
        denaturation_info: 'Pepsin denatures above pH 6.0, losing its catalytic activity as the active site unfolds and the protein structure is destroyed.'
    },
    carbohydrate_hydrolysis: {
        name: 'Carbohydrate Hydrolysis',
        enzyme: 'Amylase / Maltase',
        substrate: 'Starch / Polysaccharides',
        products: 'Glucose',
        optimal_ph: [6.7, 7.1],
        optimal_temp: [37, 37],
        structure_image: 'amylase-enzyme.jpg',
        breakdown_image: 'carbohydrate-breakdown.jpg',
        equation: 'Starch + H₂O → Glucose',
        description: 'Complex carbohydrates are broken down into simple glucose molecules through enzymatic hydrolysis.',
        denaturation_info: 'Amylase denatures below pH 4.0 or above pH 9.0, disrupting the enzyme\'s calcium binding site and destroying its three-dimensional structure.'
    },
    lipid_hydrolysis: {
        name: 'Lipid Hydrolysis',
        enzyme: 'Lipase',
        substrate: 'Triglycerides',
        products: 'Fatty Acids + Glycerol',
        optimal_ph: [8.0, 8.5],
        optimal_temp: [37, 37],
        structure_image: 'lipase-enzyme.jpg',
        breakdown_image: 'lipid-breakdown.jpg',
        equation: 'Triglyceride + 3H₂O → 3Fatty Acids + Glycerol',
        description: 'Triglycerides are broken down into fatty acids and glycerol through lipase-catalyzed hydrolysis.',
        denaturation_info: 'Lipase denatures at temperatures above 45°C or in strongly acidic conditions (pH < 5.0), causing complete loss of enzymatic activity.'
    },
    alcohol_metabolism: {
        name: 'Alcohol Metabolism',
        enzyme: 'Alcohol Dehydrogenase',
        substrate: 'Ethanol',
        products: 'Acetaldehyde',
        optimal_ph: [7.0, 8.5],
        optimal_temp: [37, 37],
        structure_image: 'pepsin-enzyme.jpg',
        breakdown_image: 'protein-breakdown.jpg',
        equation: 'Ethanol + NAD⁺ → Acetaldehyde + NADH + H⁺',
        description: 'Alcohol is metabolized in the liver through oxidation by alcohol dehydrogenase.',
        denaturation_info: 'Alcohol dehydrogenase denatures in acidic conditions below pH 6.0, reducing metabolism efficiency and causing structural collapse.'
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    
    // Page-specific initializations
    if (document.getElementById('ingredient-grid')) {
        initializeIngredientExplorer();
        initializeParticleBackground();
    }
    
    if (document.getElementById('ph-slider')) {
        initializeEnzymeSimulator();
        initializeDigestivePathway();
        initializeNutritionalCharts();
        initializePolymerBreakdown();
    }
    
    if (document.querySelector('.timeline')) {
        initializeTimeline();
    }
});

// Animation utilities
function initializeAnimations() {
    // Fade in animations
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [30, 0],
                    duration: 800,
                    easing: 'easeOutCubic',
                    delay: anime.stagger(100)
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(el => observer.observe(el));
}

// Ingredient Explorer functionality
function initializeIngredientExplorer() {
    const grid = document.getElementById('ingredient-grid');
    const categoryFilters = document.querySelectorAll('.category-filter');
    
    // Render ingredient grid
    function renderIngredients(filteredIngredients = ingredients) {
        grid.innerHTML = '';
        filteredIngredients.forEach(ingredient => {
            const card = document.createElement('div');
            card.className = 'ingredient-card bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all cursor-pointer';
            card.dataset.ingredientId = ingredient.id;
            card.dataset.category = ingredient.category;
            
            card.innerHTML = `
                <img src="${ingredient.image}" alt="${ingredient.name}" 
                     class="w-full h-24 object-cover rounded-md mb-3">
                <h4 class="font-semibold text-sm mb-1">${ingredient.name}</h4>
                <p class="text-xs text-gray-600">${ingredient.molecular}</p>
                <div class="mt-2">
                    <span class="inline-block px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                        ${ingredient.category.charAt(0).toUpperCase() + ingredient.category.slice(1)}
                    </span>
                </div>
            `;
            
            card.addEventListener('click', () => showMolecularDetails(ingredient));
            grid.appendChild(card);
        });
    }
    
    // Category filtering
    categoryFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            categoryFilters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            
            const category = filter.dataset.category;
            const filtered = category === 'all' ? ingredients : ingredients.filter(ing => ing.category === category);
            renderIngredients(filtered);
        });
    });
    
    // Show molecular details
    function showMolecularDetails(ingredient) {
        const display = document.getElementById('molecule-display');
        const reaction = enzymeReactions[ingredient.reaction];
        
        display.innerHTML = `
            <div class="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center">
                <span class="text-4xl">🧬</span>
            </div>
            <h4 class="font-display text-xl font-semibold mb-2">${ingredient.name}</h4>
            <p class="text-sm text-gray-600 mb-3">${ingredient.description}</p>
            
            <div class="grid grid-cols-1 gap-3 text-xs">
                <div class="bg-blue-50 p-3 rounded-lg">
                    <strong class="text-blue-800">Molecular Structure:</strong><br>
                    <span class="text-blue-700">${ingredient.molecular}</span>
                </div>
                
                <div class="bg-green-50 p-3 rounded-lg">
                    <strong class="text-green-800">Digestive Enzymes:</strong><br>
                    <span class="text-green-700">${ingredient.enzyme}</span>
                </div>
                
                <div class="bg-purple-50 p-3 rounded-lg">
                    <strong class="text-purple-800">Final Products:</strong><br>
                    <span class="text-purple-700">${ingredient.monomer}</span>
                </div>
                
                <div class="bg-yellow-50 p-3 rounded-lg">
                    <strong class="text-yellow-800">Reaction Type:</strong><br>
                    <span class="text-yellow-700">${reaction.name}</span>
                </div>
            </div>
            
            <div class="mt-4 p-3 bg-gray-50 rounded-lg">
                <p class="text-xs text-gray-700">
                    <strong class="block mb-1">Digestion Process:</strong>
                    ${ingredient.molecular} → ${ingredient.enzyme} → ${ingredient.monomer}
                </p>
            </div>
        `;
        
        // Animate the update
        anime({
            targets: display,
            scale: [0.9, 1],
            opacity: [0.7, 1],
            duration: 400,
            easing: 'easeOutCubic'
        });
    }
    
    // Initial render
    renderIngredients();
}

// Enhanced Enzyme Simulator functionality
function initializeEnzymeSimulator() {
    const phSlider = document.getElementById('ph-slider');
    const tempSlider = document.getElementById('temp-slider');
    const phValue = document.getElementById('ph-value');
    const tempValue = document.getElementById('temp-value');
    const enzymeStatus = document.getElementById('enzyme-status');
    const enzymeImage = document.getElementById('enzyme-image');
    const reactionRate = document.getElementById('reaction-rate');
    const reactionSelect = document.getElementById('reaction-select');
    const equationDisplay = document.getElementById('equation-display');
    const breakdownImage = document.getElementById('breakdown-image');
    
    let currentReaction = 'protein_hydrolysis';
    
    // Populate reaction selector
    if (reactionSelect) {
        Object.keys(enzymeReactions).forEach(key => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = enzymeReactions[key].name;
            reactionSelect.appendChild(option);
        });
        
        reactionSelect.addEventListener('change', (e) => {
            currentReaction = e.target.value;
            updateReactionDisplay();
            updateEnzymeSimulation();
        });
    }
    
    function updateReactionDisplay() {
        const reaction = enzymeReactions[currentReaction];
        
        if (equationDisplay) {
            equationDisplay.innerHTML = `
                <div class="bg-white rounded-lg p-4 border-2 border-gray-200">
                    <h4 class="font-semibold mb-3">${reaction.name}</h4>
                    <div class="text-center space-y-2">
                        <div class="font-mono text-lg">${reaction.substrate}</div>
                        <div class="text-sm text-gray-500">↓ ${reaction.enzyme}</div>
                        <div class="font-mono text-lg text-green-600">${reaction.products}</div>
                    </div>
                    <div class="mt-3 text-sm text-gray-600">
                        <strong>Equation:</strong> ${reaction.equation}
                    </div>
                </div>
            `;
        }
        
        if (breakdownImage) {
            breakdownImage.src = reaction.breakdown_image;
            breakdownImage.alt = `${reaction.name} breakdown process`;
        }
        
        if (enzymeImage) {
            enzymeImage.src = reaction.structure_image;
            enzymeImage.alt = `${reaction.enzyme} structure`;
        }
    }
    
    function updateEnzymeSimulation() {
        const ph = parseFloat(phSlider.value);
        const temp = parseInt(tempSlider.value);
        const reaction = enzymeReactions[currentReaction];
        
        // Update display values
        phValue.textContent = ph.toFixed(1);
        tempValue.textContent = temp + '°C';
        
        // Determine enzyme status based on reaction type
        let status, rate, className, activity;
        const [optimal_ph_min, optimal_ph_max] = reaction.optimal_ph;
        const [optimal_temp_min, optimal_temp_max] = reaction.optimal_temp;
        
        if (ph >= optimal_ph_min && ph <= optimal_ph_max && 
            temp >= optimal_temp_min && temp <= optimal_temp_max) {
            status = `✓ Optimal conditions - ${reaction.enzyme} highly active`;
            rate = 'Reaction Rate: Optimal (>95%)';
            activity = 'High catalytic efficiency';
            className = '';
        } else if (ph < optimal_ph_min - 2 || ph > optimal_ph_max + 3) {
            status = `✗ Severe denaturation - ${reaction.enzyme} inactive`;
            rate = 'Reaction Rate: Minimal (<5%)';
            activity = 'Enzyme structure destroyed';
            className = 'denatured';
        } else if (temp > optimal_temp_max + 10) {
            status = `✗ Thermal denaturation - ${reaction.enzyme} destroyed`;
            rate = 'Reaction Rate: Minimal (<5%)';
            activity = 'Protein unfolding occurred';
            className = 'denatured';
        } else if (ph < optimal_ph_min - 1 || ph > optimal_ph_max + 1) {
            status = `~ Suboptimal pH - ${reaction.enzyme} partially active`;
            rate = 'Reaction Rate: Reduced (25-50%)';
            activity = 'Reduced catalytic efficiency';
            className = '';
        } else if (temp < optimal_temp_min - 5) {
            status = `~ Low temperature - ${reaction.enzyme} sluggish`;
            rate = 'Reaction Rate: Reduced (30-60%)';
            activity = 'Slower molecular motion';
            className = '';
        } else {
            status = `~ Moderate conditions - ${reaction.enzyme} functional`;
            rate = 'Reaction Rate: Moderate (60-80%)';
            activity = 'Acceptable catalytic activity';
            className = '';
        }
        
        enzymeStatus.innerHTML = `
            <div class="space-y-2">
                <div>${status}</div>
                <div class="text-sm text-gray-600">${activity}</div>
                <div class="text-xs text-gray-500">
                    Optimal pH: ${optimal_ph_min}-${optimal_ph_max} | 
                    Optimal temp: ${optimal_temp_min}°C
                </div>
            </div>
        `;
        
        reactionRate.innerHTML = `
            <div class="text-lg font-semibold text-blue-600">${rate}</div>
            <div class="text-sm text-gray-600 mt-1">
                ${reaction.denaturation_info}
            </div>
        `;
        
        enzymeImage.className = `enzyme-structure w-full max-w-xs mx-auto rounded-lg ${className}`;
    }
    
    phSlider.addEventListener('input', updateEnzymeSimulation);
    tempSlider.addEventListener('input', updateEnzymeSimulation);
    
    // Initial updates
    updateReactionDisplay();
    updateEnzymeSimulation();
}

// Polymer Breakdown Visualization
function initializePolymerBreakdown() {
    const breakdownContainer = document.getElementById('polymer-breakdown');
    if (!breakdownContainer) return;
    
    const breakdownData = [
        {
            type: 'Proteins',
            polymer: 'Long polypeptide chains with peptide bonds',
            enzyme: 'Pepsin, Trypsin',
            monomer: 'Individual amino acids',
            process: 'Hydrolysis of peptide bonds (-CO-NH-)',
            image: 'resources/molecules/protein-breakdown.jpg'
        },
        {
            type: 'Carbohydrates',
            polymer: 'Complex polysaccharides with glycosidic bonds',
            enzyme: 'Amylase, Maltase',
            monomer: 'Simple glucose molecules',
            process: 'Hydrolysis of glycosidic bonds',
            image: 'resources/molecules/carbohydrate-breakdown.jpg'
        },
        {
            type: 'Lipids',
            polymer: 'Triglycerides with ester bonds',
            enzyme: 'Lipase + Bile acids',
            monomer: 'Fatty acids + Glycerol',
            process: 'Hydrolysis of ester bonds',
            image: 'resources/molecules/lipid-breakdown.jpg'
        }
    ];
    
    breakdownData.forEach((item, index) => {
        const section = document.createElement('div');
        section.className = 'bg-white rounded-xl p-6 shadow-lg mb-8';
        section.innerHTML = `
            <h3 class="font-display text-2xl font-semibold mb-4 text-center">${item.type} Breakdown</h3>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div class="space-y-4">
                    <div class="bg-blue-50 p-4 rounded-lg">
                        <h4 class="font-semibold text-blue-800 mb-2">Polymer Structure</h4>
                        <p class="text-blue-700 text-sm">${item.polymer}</p>
                    </div>
                    
                    <div class="flex items-center justify-center">
                        <div class="text-2xl text-gray-400">↓</div>
                        <div class="mx-4 text-sm text-gray-600">Enzymatic Hydrolysis</div>
                        <div class="text-2xl text-gray-400">↓</div>
                    </div>
                    
                    <div class="bg-green-50 p-4 rounded-lg">
                        <h4 class="font-semibold text-green-800 mb-2">Monomer Products</h4>
                        <p class="text-green-700 text-sm">${item.monomer}</p>
                    </div>
                    
                    <div class="bg-purple-50 p-4 rounded-lg">
                        <h4 class="font-semibold text-purple-800 mb-2">Enzymes Involved</h4>
                        <p class="text-purple-700 text-sm">${item.enzyme}</p>
                    </div>
                    
                    <div class="bg-yellow-50 p-4 rounded-lg">
                        <h4 class="font-semibold text-yellow-800 mb-2">Chemical Process</h4>
                        <p class="text-yellow-700 text-sm">${item.process}</p>
                    </div>
                </div>
                
                <div class="text-center">
                    <img src="${item.image}" alt="${item.type} breakdown diagram" 
                         class="w-full max-w-md mx-auto rounded-lg shadow-md">
                    <p class="text-xs text-gray-500 mt-2">${item.type} polymer to monomer breakdown process</p>
                </div>
            </div>
        `;
        breakdownContainer.appendChild(section);
    });
}

// Digestive Pathway functionality
function initializeDigestivePathway() {
    const steps = document.querySelectorAll('.reaction-step');
    const detailsContainer = document.getElementById('reaction-details');
    
    const stepDetails = {
        1: {
            title: 'Mouth - Mechanical and Initial Chemical Breakdown',
            content: `
                <div class="space-y-4">
                    <p><strong>Process:</strong> Food is mechanically broken down by chewing (mastication) and mixed with saliva containing salivary amylase.</p>
                    <p><strong>Enzyme:</strong> Salivary amylase begins breaking down starches into maltose and dextrins.</p>
                    <p><strong>Key Event:</strong> Initial carbohydrate hydrolysis begins</p>
                    <div class="bg-blue-50 p-4 rounded-lg">
                        <h5 class="font-semibold mb-2">Polymer to Monomer Process:</h5>
                        <p class="text-sm">Starch (polymer) → Maltose (disaccharide) + Dextrins (oligosaccharides)</p>
                    </div>
                </div>
            `
        },
        2: {
            title: 'Stomach - Protein Denaturation and Peptide Formation',
            content: `
                <div class="space-y-4">
                    <p><strong>Process:</strong> Gastric acid (HCl) denatures proteins and activates pepsinogen to pepsin at pH 1.5-2.0.</p>
                    <p><strong>Critical Event:</strong> Pepsin begins protein hydrolysis</p>
                    <p><strong>pH Effect:</strong> If pH rises above 6.0, pepsin denatures and becomes inactive</p>
                    <div class="bg-green-50 p-4 rounded-lg">
                        <h5 class="font-semibold mb-2">Polymer to Monomer Process:</h5>
                        <p class="text-sm">Protein (long polymer) → Peptides (short chains) → Amino acids (monomers)</p>
                    </div>
                    <div class="bg-red-50 p-4 rounded-lg">
                        <h5 class="font-semibold mb-2">Enzyme Denaturation Warning:</h5>
                        <p class="text-sm text-red-700">When removed from ideal pH (1.5-2.0), pepsin unfolds and loses catalytic activity!</p>
                    </div>
                </div>
            `
        },
        3: {
            title: 'Small Intestine - Complete Hydrolysis',
            content: `
                <div class="space-y-4">
                    <p><strong>Process:</strong> Pancreatic enzymes and brush border enzymes complete the breakdown of all macromolecules.</p>
                    <p><strong>Enzymes:</strong> Trypsin, chymotrypsin, lipase, amylase, disaccharidases</p>
                    <p><strong>Environment:</strong> Bicarbonate raises pH to 6.7-7.1 for optimal enzyme activity</p>
                    <div class="bg-yellow-50 p-4 rounded-lg">
                        <h5 class="font-semibold mb-2">Multiple Polymer Breakdowns:</h5>
                        <ul class="text-sm space-y-1">
                            <li>• Peptides → Amino acids (by trypsin, chymotrypsin)</li>
                            <li>• Starch → Glucose (by pancreatic amylase)</li>
                            <li>• Triglycerides → Fatty acids + Glycerol (by lipase)</li>
                        </ul>
                    </div>
                </div>
            `
        },
        4: {
            title: 'Absorption - Nutrient Uptake',
            content: `
                <div class="space-y-4">
                    <p><strong>Process:</strong> Monomers are absorbed through intestinal villi into the bloodstream.</p>
                    <p><strong>Transport Mechanisms:</strong> Active transport and facilitated diffusion move nutrients to liver and tissues</p>
                    <p><strong>Final Products:</strong> All polymers are now completely broken down to absorbable monomers</p>
                    <div class="bg-purple-50 p-4 rounded-lg">
                        <h5 class="font-semibold mb-2">Final Monomer Products:</h5>
                        <ul class="text-sm space-y-1">
                            <li>• <strong>Amino acids</strong> - Building blocks for new proteins</li>
                            <li>• <strong>Glucose</strong> - Immediate energy source</li>
                            <li>• <strong>Fatty acids & Glycerol</strong> - Energy storage and membrane components</li>
                        </ul>
                    </div>
                </div>
            `
        }
    };
    
    steps.forEach(step => {
        step.addEventListener('click', () => {
            steps.forEach(s => s.classList.remove('active'));
            step.classList.add('active');
            
            const stepNumber = parseInt(step.dataset.step);
            const detail = stepDetails[stepNumber];
            
            detailsContainer.innerHTML = `
                <h3 class="font-display text-2xl font-semibold mb-4">${detail.title}</h3>
                <div class="prose max-w-none">${detail.content}</div>
            `;
            
            // Animate the content update
            anime({
                targets: detailsContainer,
                opacity: [0.5, 1],
                translateY: [10, 0],
                duration: 400,
                easing: 'easeOutCubic'
            });
        });
    });
}

// Nutritional Charts functionality
function initializeNutritionalCharts() {
    // Amino Acid Profile Chart
    const aminoAcidChart = echarts.init(document.getElementById('amino-acid-chart'));
    const aminoAcidOption = {
        title: {
            text: 'Essential Amino Acid Profile',
            left: 'center',
            textStyle: { fontSize: 16, fontWeight: 'bold' }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' }
        },
        legend: {
            data: ['Abalone', 'Sea Cucumber', 'Chicken'],
            bottom: 10
        },
        xAxis: {
            type: 'category',
            data: ['Lysine', 'Leucine', 'Isoleucine', 'Valine', 'Threonine', 'Methionine', 'Phenylalanine', 'Tryptophan']
        },
        yAxis: {
            type: 'value',
            name: 'mg/g protein'
        },
        series: [
            {
                name: 'Abalone',
                type: 'bar',
                data: [95, 82, 45, 58, 65, 28, 52, 12],
                itemStyle: { color: '#2D5A3D' }
            },
            {
                name: 'Sea Cucumber',
                type: 'bar',
                data: [88, 75, 42, 55, 62, 25, 48, 10],
                itemStyle: { color: '#E67E4D' }
            },
            {
                name: 'Chicken',
                type: 'bar',
                data: [92, 78, 44, 56, 63, 27, 50, 11],
                itemStyle: { color: '#D4AF37' }
            }
        ]
    };
    aminoAcidChart.setOption(aminoAcidOption);
    
    // Macromolecule Distribution Chart
    const macroChart = echarts.init(document.getElementById('macromolecule-chart'));
    const macroOption = {
        title: {
            text: 'Macromolecule Composition',
            left: 'center',
            textStyle: { fontSize: 16, fontWeight: 'bold' }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c}% ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['Proteins', 'Lipids', 'Carbohydrates', 'Minerals', 'Water']
        },
        series: [
            {
                name: 'Composition',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '18',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 35, name: 'Proteins', itemStyle: { color: '#2D5A3D' } },
                    { value: 25, name: 'Lipids', itemStyle: { color: '#E67E4D' } },
                    { value: 15, name: 'Carbohydrates', itemStyle: { color: '#D4AF37' } },
                    { value: 5, name: 'Minerals', itemStyle: { color: '#8B4513' } },
                    { value: 20, name: 'Water', itemStyle: { color: '#87CEEB' } }
                ]
            }
        ]
    };
    macroChart.setOption(macroOption);
    
    // Make charts responsive
    window.addEventListener('resize', () => {
        aminoAcidChart.resize();
        macroChart.resize();
    });
}

// Timeline functionality
function initializeTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const detailsContainer = document.getElementById('timeline-details');
    
    const periodDetails = {
        qing: {
            title: 'The Birth of a Legend',
            content: `
                <div class="space-y-4">
                    <p class="text-gray-700">During the Qing Dynasty's Daoguang period (1821-1850), Buddha Jumps Over the Wall emerged from the culinary innovation of Fuzhou's elite. Originally named "Fortune and Longevity Complete" (福寿全), the dish was created by a government official's wife to impress the Fujian Provincial Governor Zhou Lian.</p>
                    <div class="bg-blue-50 p-4 rounded-lg">
                        <h4 class="font-semibold mb-2">Key Historical Facts:</h4>
                        <ul class="text-sm space-y-1">
                            <li>• Created during Daoguang Emperor's reign (1821-1850)</li>
                            <li>• Original name: "Fortune and Longevity Complete" (福寿全)</li>
                            <li>• First served at official government banquet</li>
                            <li>• Combined traditional Fujian cooking techniques</li>
                        </ul>
                    </div>
                </div>
            `
        },
        zheng: {
            title: 'Master Chef Zheng Chunfa',
            content: `
                <div class="space-y-4">
                    <p class="text-gray-700">Zheng Chunfa, the chef who would perfect Buddha Jumps Over the Wall, was originally a cook in the government office. After carefully observing the original preparation, he enhanced the recipe by increasing the proportion of seafood and refining the cooking techniques.</p>
                    <div class="bg-green-50 p-4 rounded-lg">
                        <h4 class="font-semibold mb-2">Culinary Innovations:</h4>
                        <ul class="text-sm space-y-1">
                            <li>• Emphasized premium seafood over meat</li>
                            <li>• Perfected the wine-based cooking method</li>
                            <li>• Established "Three Friends Pavilion" restaurant</li>
                            <li>• Created the modern version we know today</li>
                        </ul>
                    </div>
                </div>
            `
        },
        republic: {
            title: 'National Recognition',
            content: `
                <div class="space-y-4">
                    <p class="text-gray-700">During the Republic of China era (1912-1949), Buddha Jumps Over the Wall gained national prominence. It became a symbol of Fujian cuisine excellence and was featured in important banquets and celebrations across the country.</p>
                    <div class="bg-yellow-50 p-4 rounded-lg">
                        <h4 class="font-semibold mb-2">Cultural Impact:</h4>
                        <ul class="text-sm space-y-1">
                            <li>• Featured in major cultural celebrations</li>
                            <li>• Became symbol of Fujian culinary tradition</li>
                            <li>• Influenced other regional cuisines</li>
                            <li>• Preserved through political changes</li>
                        </ul>
                    </div>
                </div>
            `
        },
        modern: {
            title: 'Cultural Heritage',
            content: `
                <div class="space-y-4">
                    <p class="text-gray-700">In modern times, Buddha Jumps Over the Wall has been recognized as an important part of China's culinary heritage. It is featured in state banquets and has been adapted with modern techniques while preserving traditional flavors.</p>
                    <div class="bg-purple-50 p-4 rounded-lg">
                        <h4 class="font-semibold mb-2">Modern Developments:</h4>
                        <ul class="text-sm space-y-1">
                            <li>• Featured in state banquets and diplomatic events</li>
                            <li>• Sustainable ingredient alternatives developed</li>
                            <li>• Cultural heritage recognition</li>
                            <li>• International culinary influence</li>
                        </ul>
                    </div>
                </div>
            `
        }
    };
    
    timelineItems.forEach(item => {
        item.addEventListener('click', () => {
            timelineItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            const period = item.dataset.period;
            const detail = periodDetails[period];
            
            detailsContainer.innerHTML = `
                <h3 class="font-display text-2xl font-semibold mb-4">${detail.title}</h3>
                ${detail.content}
            `;
            
            // Animate the content update
            anime({
                targets: detailsContainer,
                opacity: [0.5, 1],
                translateY: [20, 0],
                duration: 500,
                easing: 'easeOutCubic'
            });
        });
    });
}

// Particle background for hero section
function initializeParticleBackground() {
    const particleContainer = document.getElementById('particles');
    if (!particleContainer) return;
    
    // Create p5.js sketch for particle system
    new p5((p) => {
        let particles = [];
        
        p.setup = () => {
            const canvas = p.createCanvas(particleContainer.offsetWidth, particleContainer.offsetHeight);
            canvas.parent(particleContainer);
            
            // Create particles
            for (let i = 0; i < 50; i++) {
                particles.push({
                    x: p.random(p.width),
                    y: p.random(p.height),
                    vx: p.random(-0.5, 0.5),
                    vy: p.random(-0.5, 0.5),
                    size: p.random(2, 6),
                    alpha: p.random(0.1, 0.3)
                });
            }
        };
        
        p.draw = () => {
            p.clear();
            
            // Update and draw particles
            particles.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                // Wrap around edges
                if (particle.x < 0) particle.x = p.width;
                if (particle.x > p.width) particle.x = 0;
                if (particle.y < 0) particle.y = p.height;
                if (particle.y > p.height) particle.y = 0;
                
                // Draw particle
                p.fill(45, 90, 61, particle.alpha * 255);
                p.noStroke();
                p.ellipse(particle.x, particle.y, particle.size);
            });
        };
        
        p.windowResized = () => {
            p.resizeCanvas(particleContainer.offsetWidth, particleContainer.offsetHeight);
        };
    });
}

// Utility functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 p-4 rounded-lg shadow-lg z-50 ${
        type === 'success' ? 'bg-green-500 text-white' : 
        type === 'error' ? 'bg-red-500 text-white' : 
        'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    anime({
        targets: notification,
        translateX: [300, 0],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutCubic'
    });
    
    setTimeout(() => {
        anime({
            targets: notification,
            translateX: [0, 300],
            opacity: [1, 0],
            duration: 300,
            easing: 'easeInCubic',
            complete: () => notification.remove()
        });
    }, 3000);
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    showNotification('An error occurred. Please refresh the page.', 'error');
});

// Performance monitoring
window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
});

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ingredients,
        enzymeReactions,
        initializeIngredientExplorer,
        initializeEnzymeSimulator,
        initializeNutritionalCharts
    };
}
