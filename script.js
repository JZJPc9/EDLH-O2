function formatNum(num) {
    return Number.isInteger(num) ? num.toString() : parseFloat(num.toFixed(4)).toString();
}

function renderMath() {
    document.body.querySelectorAll('.math-card, #resultsArea').forEach(el => {
        renderMathInElement(el, {
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false},
                {left: '\\(', right: '\\)', display: false},
                {left: '\\[', right: '\\]', display: true}
            ],
            throwOnError: false
        });
    });
}

function solve() {
    const A = parseFloat(document.getElementById('coeffA').value);
    const B = parseFloat(document.getElementById('coeffB').value);
    const C = parseFloat(document.getElementById('coeffC').value);

    if (isNaN(A) || isNaN(B) || isNaN(C)) {
        alert("Por favor, ingresa los tres coeficientes.");
        return;
    }

    const resultsArea = document.getElementById('resultsArea');
    resultsArea.classList.remove('hidden');

    let charEq, rootsText, y1, y2, generalY;

    if (A !== 0) {
        // --- SEGUNDO ORDEN (Caso Original) ---
        const signB = B >= 0 ? (B === 0 ? '' : '+') : '';
        const signC = C >= 0 ? (C === 0 ? '' : '+') : '';

        let eqStr = `${formatNum(A)}m^2`;
        if (B !== 0) eqStr += ` ${B >= 0 ? '+' : ''} ${formatNum(B)}m`;
        if (C !== 0) eqStr += ` ${C >= 0 ? '+' : ''} ${formatNum(C)}`;
        eqStr += ` = 0`;
        charEq = `\\[ ${eqStr} \\]`;

        const disc = B*B - 4*A*C;

        if (disc > 0) {
            const m1 = (-B + Math.sqrt(disc)) / (2*A);
            const m2 = (-B - Math.sqrt(disc)) / (2*A);
            rootsText = `\\[ m_1 = ${formatNum(m1)}, \\quad m_2 = ${formatNum(m2)} \\]`;
            y1 = `\\[ y_1 = e^{${formatNum(m1)}x} \\]`;
            y2 = `\\[ y_2 = e^{${formatNum(m2)}x} \\]`;
            generalY = `\\[ y = C_1 e^{${formatNum(m1)}x} + C_2 e^{${formatNum(m2)}x} \\]`;
        } else if (disc === 0) {
            const m = -B / (2*A);
            rootsText = `\\[ m_1 = m_2 = ${formatNum(m)} \\]`;
            y1 = `\\[ y_1 = e^{${formatNum(m)}x} \\]`;
            y2 = `\\[ y_2 = x e^{${formatNum(m)}x} \\]`;
            generalY = `\\[ y = C_1 e^{${formatNum(m)}x} + C_2 x e^{${formatNum(m)}x} \\]`;
        } else {
            const realPart = -B / (2*A);
            const imagPart = Math.sqrt(-disc) / (2*A);
            const alpha = formatNum(realPart);
            const beta = formatNum(Math.abs(imagPart));
            rootsText = `\\[ m = ${alpha} \\pm ${beta}i \\]`;
            y1 = `\\[ y_1 = e^{${alpha}x} \\cos(${beta}x) \\]`;
            y2 = `\\[ y_2 = e^{${alpha}x} \\sin(${beta}x) \\]`;
            generalY = `\\[ y = e^{${alpha}x} (C_1 \\cos(${beta}x) + C_2 \\sin(${beta}x)) \\]`;
        }
    } else {
        // --- PRIMER ORDEN (A = 0) ---
        if (B !== 0) {
            // Ecuación: By' + Cy = 0
            let eqStr = "";
            if (B !== 0) eqStr += `${formatNum(B)}m`;
            if (C !== 0) eqStr += ` ${C >= 0 ? '+' : ''} ${formatNum(C)}`;
            eqStr += ` = 0`;
            charEq = `\\[ ${eqStr} \\]`;

            const m = -C / B;
            rootsText = `\\[ m = ${formatNum(m)} \\]`;
            y1 = `\\[ y_1 = e^{${formatNum(m)}x} \\]`;
            y2 = `\\[ y_2 = \\text{N/A (1er Orden)} \\]`;
            generalY = `\\[ y = C_1 e^{${formatNum(m)}x} \\]`;
        } else {
            // Caso donde A=0 y B=0 -> Cy = 0
            if (C !== 0) {
                charEq = `\\[ \\text{"ey ey ey, aqui eso no bro"} \\]`;
                rootsText = `\\[ \\text{Sin raíces diferenciales} \\]`;
                y1 = `\\[ y_1 = 0 \\]`;
                y2 = `\\[ y_2 = 0 \\]`;
                generalY = `\\[ y = 0 \\]`;
            } else {
                charEq = `\\[ 0 = 0 \\]`;
                rootsText = `\\[ \\text{Trivial} \\]`;
                y1 = `\\[ \\text{Cualquier } y(x) \\]`;
                y2 = `\\[ \\text{Cualquier } y(x) \\]`;
                generalY = `\\[ y = f(x) \\]`;
            }
        }
    }

    document.getElementById('resCharEq').innerHTML = charEq;
    document.getElementById('resRoots').innerHTML = rootsText;
    document.getElementById('resY1').innerHTML = `<span class="text-xs text-slate-400 block mb-1">Solución 1</span> ${y1}`;
    document.getElementById('resY2').innerHTML = `<span class="text-xs text-slate-400 block mb-1">Solución 2</span> ${y2}`;
    document.getElementById('resGeneral').innerHTML = generalY;

    renderMath();
}

window.onload = () => {
    renderMath();
};
