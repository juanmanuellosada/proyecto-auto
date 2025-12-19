// Global state
const state = {
    currentMode: null,
    gameQuestions: [],
    currentIndex: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    startTime: null,
    timerInterval: null,
    history: []
};

// DOM Elements
const screens = {
    home: document.getElementById('home-screen'),
    config: document.getElementById('config-screen'),
    game: document.getElementById('game-screen'),
    result: document.getElementById('result-screen'),
    history: document.getElementById('history-screen')
};

// Data Separation
let teoricaQuestions = [];
let senalesQuestions = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    if (typeof questions === 'undefined') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudieron cargar las preguntas. Verifica el archivo questions.js'
        });
        return;
    }

    // Separate questions
    teoricaQuestions = questions.filter(q => q.type === 'text');
    senalesQuestions = questions.filter(q => q.type === 'image');

    // Initialize Theme
    initTheme();

    // Setup Event Listeners
    setupEventListeners();
});

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const btn = document.getElementById('theme-toggle');
    btn.innerHTML = theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
}

function setupEventListeners() {
    // Theme Toggle
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

    // Mode Selection
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const mode = btn.dataset.mode;
            selectMode(mode);
        });
    });

    // Navigation
    document.getElementById('back-home-btn').addEventListener('click', () => showScreen('home'));
    document.getElementById('home-btn').addEventListener('click', () => showScreen('home'));
    document.getElementById('view-history-btn').addEventListener('click', showHistory);
    document.getElementById('back-from-history').addEventListener('click', () => showScreen('home'));
    
    // Game Control
    document.getElementById('start-game-btn').addEventListener('click', startGame);
    document.getElementById('play-again-btn').addEventListener('click', () => selectMode(state.currentMode));
}

function showScreen(screenName) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[screenName].classList.add('active');
}

function selectMode(mode) {
    state.currentMode = mode;
    
    // Update Config Screen UI based on mode
    const configTeorica = document.getElementById('config-teorica');
    const configSenales = document.getElementById('config-senales');
    const maxTeoricaSpan = document.getElementById('max-teorica');
    const maxSenalesSpan = document.getElementById('max-senales');
    const numTeoricaInput = document.getElementById('num-teorica');
    const numSenalesInput = document.getElementById('num-senales');

    // Reset display
    configTeorica.style.display = 'none';
    configSenales.style.display = 'none';

    // Set max values
    maxTeoricaSpan.textContent = teoricaQuestions.length;
    maxSenalesSpan.textContent = senalesQuestions.length;
    
    // Set default max input values to avoid errors
    numTeoricaInput.max = teoricaQuestions.length;
    numSenalesInput.max = senalesQuestions.length;

    if (mode === 'teorica') {
        configTeorica.style.display = 'flex';
        document.getElementById('config-title').textContent = 'Configuración: Teórica';
    } else if (mode === 'senales') {
        configSenales.style.display = 'flex';
        document.getElementById('config-title').textContent = 'Configuración: Señales';
    } else if (mode === 'mixto') {
        configTeorica.style.display = 'flex';
        configSenales.style.display = 'flex';
        document.getElementById('config-title').textContent = 'Configuración: Mixto';
    }

    showScreen('config');
}

function getWeightedRandomQuestions(sourceQuestions, count) {
    if (count >= sourceQuestions.length) return [...sourceQuestions];

    const highWeight = sourceQuestions.filter(q => q.weight > 1);
    const normalWeight = sourceQuestions.filter(q => q.weight === 1);

    // Try to get 60% high weight questions
    const highCount = Math.min(Math.ceil(count * 0.6), highWeight.length);
    const normalCount = count - highCount;

    const selectedHigh = shuffleArray([...highWeight]).slice(0, highCount);
    
    // Fill the rest with normal weight, or remaining high weight if needed
    let remaining = [...normalWeight];
    if (highCount < highWeight.length) {
        // If we didn't use all high weight, add them to the pool for the remaining slots
        // (though logic above implies we took what we needed or all of them)
    }
    
    // Actually, just pool the rest and pick random
    const remainingPool = sourceQuestions.filter(q => !selectedHigh.includes(q));
    const selectedRest = shuffleArray([...remainingPool]).slice(0, count - selectedHigh.length);

    return shuffleArray([...selectedHigh, ...selectedRest]);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startGame() {
    const numTeorica = parseInt(document.getElementById('num-teorica').value) || 0;
    const numSenales = parseInt(document.getElementById('num-senales').value) || 0;
    
    state.gameQuestions = [];

    if (state.currentMode === 'teorica') {
        state.gameQuestions = getWeightedRandomQuestions(teoricaQuestions, Math.min(numTeorica, teoricaQuestions.length));
    } else if (state.currentMode === 'senales') {
        state.gameQuestions = getWeightedRandomQuestions(senalesQuestions, Math.min(numSenales, senalesQuestions.length));
    } else if (state.currentMode === 'mixto') {
        const tQ = getWeightedRandomQuestions(teoricaQuestions, Math.min(numTeorica, teoricaQuestions.length));
        const sQ = getWeightedRandomQuestions(senalesQuestions, Math.min(numSenales, senalesQuestions.length));
        state.gameQuestions = shuffleArray([...tQ, ...sQ]);
    }

    if (state.gameQuestions.length === 0) {
        Swal.fire({
            icon: 'warning',
            title: 'Atención',
            text: 'Por favor selecciona un número válido de preguntas.'
        });
        return;
    }

    // Reset State
    state.currentIndex = 0;
    state.correctAnswers = 0;
    state.incorrectAnswers = 0;
    state.startTime = Date.now();
    
    // Start Timer
    if (state.timerInterval) clearInterval(state.timerInterval);
    state.timerInterval = setInterval(updateTimer, 1000);
    updateTimer();

    showScreen('game');
    renderQuestion();
}

function updateTimer() {
    const now = Date.now();
    const diff = Math.floor((now - state.startTime) / 1000);
    const minutes = Math.floor(diff / 60).toString().padStart(2, '0');
    const seconds = (diff % 60).toString().padStart(2, '0');
    document.getElementById('timer').textContent = `${minutes}:${seconds}`;
}

function renderQuestion() {
    const q = state.gameQuestions[state.currentIndex];
    const total = state.gameQuestions.length;
    
    document.getElementById('current-q').textContent = state.currentIndex + 1;
    document.getElementById('total-q').textContent = total;
    document.getElementById('question-text').textContent = q.question;

    const imgContainer = document.getElementById('question-image-container');
    imgContainer.innerHTML = '';
    if (q.type === 'image') {
        const img = document.createElement('img');
        img.src = q.image;
        imgContainer.appendChild(img);
    }

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = () => handleAnswer(index, btn);
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(selectedIndex, btnElement) {
    // Prevent multiple clicks
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(b => b.disabled = true);

    const q = state.gameQuestions[state.currentIndex];
    q.userAnswer = selectedIndex; // Store user answer
    const isCorrect = selectedIndex === q.correct;

    if (isCorrect) {
        btnElement.classList.add('correct');
        state.correctAnswers++;
    } else {
        btnElement.classList.add('incorrect');
        // Highlight correct answer
        buttons[q.correct].classList.add('correct');
        state.incorrectAnswers++;
    }

    // Wait and go to next
    setTimeout(() => {
        state.currentIndex++;
        if (state.currentIndex < state.gameQuestions.length) {
            renderQuestion();
        } else {
            endGame();
        }
    }, 1500);
}

function endGame() {
    clearInterval(state.timerInterval);
    const maxFailures = parseInt(document.getElementById('max-failures').value) || 3;
    const passed = state.incorrectAnswers <= maxFailures;
    const total = state.gameQuestions.length;
    const percentage = Math.round((state.correctAnswers / total) * 100);
    const timeStr = document.getElementById('timer').textContent;

    // Save to history
    const historyItem = {
        mode: state.currentMode,
        score: state.correctAnswers,
        total: total,
        passed: passed,
        time: timeStr,
        date: new Date().toLocaleTimeString()
    };
    state.history.unshift(historyItem);

    // Render Result
    document.getElementById('score-percentage').textContent = `${percentage}%`;
    document.getElementById('correct-count').textContent = state.correctAnswers;
    document.getElementById('incorrect-count').textContent = state.incorrectAnswers;
    document.getElementById('time-taken').textContent = timeStr;
    
    const msgEl = document.getElementById('result-message');
    const circle = document.querySelector('.score-circle');
    
    if (passed) {
        msgEl.textContent = "¡Aprobado! 🎉";
        msgEl.style.color = "var(--success-color)";
        circle.style.backgroundColor = "var(--success-color)";
        
        // Celebration Confetti
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    } else {
        msgEl.textContent = "Reprobado 😔";
        msgEl.style.color = "var(--accent-color)";
        circle.style.backgroundColor = "var(--accent-color)";
    }

    renderSummary();
    showScreen('result');
}

function renderSummary() {
    const container = document.getElementById('questions-summary');
    container.innerHTML = '<h3>Resumen de Preguntas</h3>';

    state.gameQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'summary-item';
        
        const isCorrect = q.userAnswer === q.correct;
        const statusClass = isCorrect ? 'correct' : 'incorrect';
        const statusIcon = isCorrect ? '<i class="fa-solid fa-check"></i>' : '<i class="fa-solid fa-xmark"></i>';

        let imageHtml = '';
        if (q.type === 'image') {
            imageHtml = `<div class="summary-image"><img src="${q.image}" alt="Pregunta"></div>`;
        }

        let optionsHtml = '<div class="summary-options">';
        q.options.forEach((opt, optIndex) => {
            let optionClass = 'summary-option';
            let icon = '<i class="fa-regular fa-circle"></i>';

            if (optIndex === q.correct) {
                optionClass += ' correct-answer';
                icon = '<i class="fa-solid fa-check-circle"></i>';
            }
            
            if (optIndex === q.userAnswer && optIndex !== q.correct) {
                optionClass += ' user-wrong';
                icon = '<i class="fa-solid fa-circle-xmark"></i>';
            }
            
            optionsHtml += `<div class="${optionClass}">${icon} ${opt}</div>`;
        });
        optionsHtml += '</div>';

        questionDiv.innerHTML = `
            <div class="summary-header ${statusClass}">
                <span class="summary-number">#${index + 1}</span>
                <span class="summary-status">${statusIcon}</span>
            </div>
            <div class="summary-content">
                <p class="summary-question">${q.question}</p>
                ${imageHtml}
                ${optionsHtml}
            </div>
        `;

        container.appendChild(questionDiv);
    });
}

function showHistory() {
    const list = document.getElementById('history-list');
    list.innerHTML = '';

    if (state.history.length === 0) {
        list.innerHTML = '<p style="text-align:center; color:#666;">No hay partidas registradas en esta sesión.</p>';
    } else {
        state.history.forEach(item => {
            const div = document.createElement('div');
            div.className = `history-item ${item.passed ? 'pass' : 'fail'}`;
            div.innerHTML = `
                <div class="history-info">
                    <h4>${item.mode.toUpperCase()}</h4>
                    <p>${item.date} - ${item.time}</p>
                </div>
                <div class="history-score">
                    ${item.score}/${item.total}
                </div>
            `;
            list.appendChild(div);
        });
    }
    showScreen('history');
}
