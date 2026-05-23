/**
 * ============================================================
 *  CALCULADORA DE MAGNITUDES FÍSICAS
 *  Construcción de Algoritmos · Ingeniería de Software · 2025
 * ============================================================
 *
 *  Contiene las funciones de cálculo y validación para:
 *   1. Velocidad          v = d / t
 *   2. Aceleración        a = Δv / Δt
 *   3. Fuerza             F = m · a
 *   4. Trabajo            W = F · d · cos(θ)
 *   5. Energía Cinética   K = ½ · m · v²
 *   6. Energía Potencial  U = m · g · h
 *   7. Densidad           ρ = m / V
 *   8. Presión            P = F / A
 *   9. Carga Eléctrica    q = I · t
 *  10. Ley de Ohm         V = I · R
 * ============================================================
 */

/* ────────────────────────────────────────────────
   UTILIDADES
   ──────────────────────────────────────────────── */

/**
 * Muestra el resultado en la caja correspondiente.
 * @param {string} id       - ID del elemento result-box
 * @param {string} value    - Texto del valor calculado
 * @param {string} unit     - Unidad del resultado
 * @param {string} formula  - Fórmula usada (para contexto)
 * @param {boolean} isError - true si es un mensaje de error
 */
function mostrarResultado(id, value, unit, formula, isError = false) {
  const box = document.getElementById(id);
  box.className = 'result-box show ' + (isError ? 'error' : 'success');

  if (isError) {
    box.innerHTML = `<span class="result-value">⚠ ${value}</span>`;
  } else {
    box.innerHTML = `
      <span class="result-value">${value} <small>${unit}</small></span>
      <span class="result-label">${formula}</span>
    `;
  }
}

/**
 * Obtiene el valor numérico de un campo input.
 * Retorna null si el campo está vacío o no es un número.
 * @param {string} inputId - ID del elemento input
 * @returns {number|null}
 */
function getVal(inputId) {
  const el = document.getElementById(inputId);
  const raw = el.value.trim();
  if (raw === '') return null;
  const num = parseFloat(raw);
  return isNaN(num) ? null : num;
}

/**
 * Verifica que todos los campos indicados tengan valores válidos.
 * @param  {...string} ids - IDs de los inputs a validar
 * @returns {boolean}
 */
function validarCampos(...ids) {
  for (const id of ids) {
    if (getVal(id) === null) return false;
  }
  return true;
}

/**
 * Redondea un número a 4 decimales significativos para la pantalla.
 * @param {number} num
 * @returns {string}
 */
function fmt(num) {
  if (!isFinite(num)) return 'Indefinido';
  return parseFloat(num.toFixed(4)).toString();
}

/* ────────────────────────────────────────────────
   1. VELOCIDAD  —  v = d / t
   ──────────────────────────────────────────────── */
function calcVelocidad() {
  if (!validarCampos('v-dist', 'v-time')) {
    mostrarResultado('res-velocidad', 'Completa todos los campos', '', '', true);
    return;
  }
  const d = getVal('v-dist');
  const t = getVal('v-time');

  if (t === 0) {
    mostrarResultado('res-velocidad', 'El tiempo no puede ser 0', '', '', true);
    return;
  }

  const v = d / t;
  mostrarResultado('res-velocidad', fmt(v), 'm/s', 'v = d / t');
}

/* ────────────────────────────────────────────────
   2. ACELERACIÓN  —  a = Δv / Δt
   ──────────────────────────────────────────────── */
function calcAceleracion() {
  if (!validarCampos('a-dv', 'a-dt')) {
    mostrarResultado('res-aceleracion', 'Completa todos los campos', '', '', true);
    return;
  }
  const dv = getVal('a-dv');
  const dt = getVal('a-dt');

  if (dt === 0) {
    mostrarResultado('res-aceleracion', 'El tiempo Δt no puede ser 0', '', '', true);
    return;
  }

  const a = dv / dt;
  mostrarResultado('res-aceleracion', fmt(a), 'm/s²', 'a = Δv / Δt');
}

/* ────────────────────────────────────────────────
   3. FUERZA  —  F = m · a
   ──────────────────────────────────────────────── */
function calcFuerza() {
  if (!validarCampos('f-masa', 'f-acel')) {
    mostrarResultado('res-fuerza', 'Completa todos los campos', '', '', true);
    return;
  }
  const m = getVal('f-masa');
  const a = getVal('f-acel');

  if (m < 0) {
    mostrarResultado('res-fuerza', 'La masa no puede ser negativa', '', '', true);
    return;
  }

  const F = m * a;
  mostrarResultado('res-fuerza', fmt(F), 'N', 'F = m · a');
}

/* ────────────────────────────────────────────────
   4. TRABAJO  —  W = F · d · cos(θ)
   ──────────────────────────────────────────────── */
function calcTrabajo() {
  if (!validarCampos('w-fuerza', 'w-dist', 'w-angulo')) {
    mostrarResultado('res-trabajo', 'Completa todos los campos', '', '', true);
    return;
  }
  const F      = getVal('w-fuerza');
  const d      = getVal('w-dist');
  const theta  = getVal('w-angulo');

  // Convertir grados a radianes para Math.cos()
  const rad = (theta * Math.PI) / 180;
  const W   = F * d * Math.cos(rad);
  mostrarResultado('res-trabajo', fmt(W), 'J', `W = F · d · cos(${theta}°)`);
}

/* ────────────────────────────────────────────────
   5. ENERGÍA CINÉTICA  —  K = ½ · m · v²
   ──────────────────────────────────────────────── */
function calcEnergiaCinetica() {
  if (!validarCampos('ec-masa', 'ec-vel')) {
    mostrarResultado('res-ec', 'Completa todos los campos', '', '', true);
    return;
  }
  const m = getVal('ec-masa');
  const v = getVal('ec-vel');

  if (m < 0) {
    mostrarResultado('res-ec', 'La masa no puede ser negativa', '', '', true);
    return;
  }

  const K = 0.5 * m * v * v;
  mostrarResultado('res-ec', fmt(K), 'J', 'K = ½ · m · v²');
}

/* ────────────────────────────────────────────────
   6. ENERGÍA POTENCIAL GRAVITATORIA  —  U = m · g · h
   ──────────────────────────────────────────────── */
function calcEnergiaPotencial() {
  if (!validarCampos('ep-masa', 'ep-altura', 'ep-g')) {
    mostrarResultado('res-ep', 'Completa todos los campos', '', '', true);
    return;
  }
  const m = getVal('ep-masa');
  const h = getVal('ep-altura');
  const g = getVal('ep-g');

  if (m < 0) {
    mostrarResultado('res-ep', 'La masa no puede ser negativa', '', '', true);
    return;
  }
  if (g <= 0) {
    mostrarResultado('res-ep', 'La gravedad debe ser mayor que 0', '', '', true);
    return;
  }

  const U = m * g * h;
  mostrarResultado('res-ep', fmt(U), 'J', 'U = m · g · h');
}

/* ────────────────────────────────────────────────
   7. DENSIDAD  —  ρ = m / V
   ──────────────────────────────────────────────── */
function calcDensidad() {
  if (!validarCampos('d-masa', 'd-vol')) {
    mostrarResultado('res-densidad', 'Completa todos los campos', '', '', true);
    return;
  }
  const m = getVal('d-masa');
  const V = getVal('d-vol');

  if (V === 0) {
    mostrarResultado('res-densidad', 'El volumen no puede ser 0', '', '', true);
    return;
  }
  if (V < 0) {
    mostrarResultado('res-densidad', 'El volumen no puede ser negativo', '', '', true);
    return;
  }

  const rho = m / V;
  mostrarResultado('res-densidad', fmt(rho), 'kg/m³', 'ρ = m / V');
}

/* ────────────────────────────────────────────────
   8. PRESIÓN  —  P = F / A
   ──────────────────────────────────────────────── */
function calcPresion() {
  if (!validarCampos('p-fuerza', 'p-area')) {
    mostrarResultado('res-presion', 'Completa todos los campos', '', '', true);
    return;
  }
  const F = getVal('p-fuerza');
  const A = getVal('p-area');

  if (A === 0) {
    mostrarResultado('res-presion', 'El área no puede ser 0', '', '', true);
    return;
  }
  if (A < 0) {
    mostrarResultado('res-presion', 'El área no puede ser negativa', '', '', true);
    return;
  }

  const P = F / A;
  mostrarResultado('res-presion', fmt(P), 'Pa', 'P = F / A');
}

/* ────────────────────────────────────────────────
   9. CARGA ELÉCTRICA  —  q = I · t
   ──────────────────────────────────────────────── */
function calcCarga() {
  if (!validarCampos('q-corriente', 'q-tiempo')) {
    mostrarResultado('res-carga', 'Completa todos los campos', '', '', true);
    return;
  }
  const I = getVal('q-corriente');
  const t = getVal('q-tiempo');

  if (t < 0) {
    mostrarResultado('res-carga', 'El tiempo no puede ser negativo', '', '', true);
    return;
  }

  const q = I * t;
  mostrarResultado('res-carga', fmt(q), 'C', 'q = I · t');
}

/* ────────────────────────────────────────────────
   10. LEY DE OHM  —  V = I · R
   ──────────────────────────────────────────────── */
function calcOhm() {
  if (!validarCampos('ohm-i', 'ohm-r')) {
    mostrarResultado('res-ohm', 'Completa todos los campos', '', '', true);
    return;
  }
  const I = getVal('ohm-i');
  const R = getVal('ohm-r');

  if (R < 0) {
    mostrarResultado('res-ohm', 'La resistencia no puede ser negativa', '', '', true);
    return;
  }

  const V = I * R;
  mostrarResultado('res-ohm', fmt(V), 'V', 'V = I · R');
}

/* ────────────────────────────────────────────────
   ENTER KEY — permite calcular presionando Enter
   en cualquier input de una tarjeta
   ──────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Mapear cada tarjeta con su función de cálculo
  const cardFunctions = {
    'card-velocidad':  calcVelocidad,
    'card-aceleracion': calcAceleracion,
    'card-fuerza':     calcFuerza,
    'card-trabajo':    calcTrabajo,
    'card-ec':         calcEnergiaCinetica,
    'card-ep':         calcEnergiaPotencial,
    'card-densidad':   calcDensidad,
    'card-presion':    calcPresion,
    'card-carga':      calcCarga,
    'card-ohm':        calcOhm,
  };

  // Agregar listener a cada input para detectar Enter
  Object.entries(cardFunctions).forEach(([cardId, fn]) => {
    const card = document.getElementById(cardId);
    if (!card) return;
    card.querySelectorAll('input').forEach(input => {
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter') fn();
      });
    });
  });
});
