/* MHForever site: language switch, launcher walkthrough, frame-rate demo, release version.
   The page reads fine without this script. English text lives in the HTML; Spanish is below. */
(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.add('js');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------ language */

  var ES = {
    'nav.project': 'Proyecto', 'nav.how': 'Cómo funciona', 'nav.fps': 'Fotogramas', 'nav.status': 'Estado',
    'nav.roadmap': 'Hoja de ruta', 'nav.faq': 'Preguntas', 'nav.star': 'Estrella en GitHub',
    'hero.h1': 'Monster Hunter Freedom Unite, ejecutándose de forma nativa en PC.',
    'hero.sub': 'MHForever es un port no oficial hecho mediante recompilación estática. Sin emulador, con cualquier mando y con un launcher que lo prepara todo a partir de tu propia copia del juego.',
    'hero.cta1': 'Descargar para Windows', 'hero.cta2': 'Ver en GitHub',
    'hero.chip1': 'Jugable hoy', 'hero.chip2': 'Edición europea, ULES01213', 'hero.chip3': 'Última versión en GitHub',
    'hero.chip4': 'Código abierto, GPL-3.0',
    'hero.note': 'Necesitas tu propia copia del juego. No se incluye ni se descarga ningún archivo del juego.',
    'mock.home': 'Inicio', 'mock.welcome': 'Bienvenido', 'mock.h': 'Trae tu juego.',
    'mock.p': 'Añade tu propia copia y juégala de forma nativa en PC.', 'mock.add': 'Añadir mi copia',
    'mock.unzipped': 'Descomprimido', 'mock.s1': 'Descomprime donde quieras y abre MHForever.exe.',
    'mock.chosen': 'Elegida', 'mock.s3h': 'Comprobando tu copia', 'mock.c1': 'Imagen de disco comprobada',
    'mock.c2': 'Juego preparado en este PC', 'mock.c3': 'No se sube nada', 'mock.s4p': 'Edición europea, ULES01213',
    'mock.play': 'Jugar',
    'what.h': 'Un programa nativo, no un emulador',
    'what.p': 'El código del juego se traduce de antemano a código nativo de PC y los servicios del sistema de la consola se reimplementan. El resultado es un programa normal de Windows que ejecuta el juego directamente, con un launcher moderno alrededor.',
    'what.r1h': 'Nativo, no emulado',
    'what.r1p': 'No hay ningún emulador en medio. Por eso son prácticos las resoluciones altas, cualquier mando y, más adelante, el juego en línea.',
    'what.r2h': 'Tu copia, tus archivos',
    'what.r2p': 'MHForever nunca incluye ni descarga recursos del juego. Todo se lee de la imagen de disco que tú aportas, y tus partidas guardadas se quedan en tu ordenador.',
    'what.r3h': 'Hecho para crecer',
    'what.r3p': 'Cada juego es un módulo sobre un runtime común. Freedom Unite es el primero. Se planean más juegos y regiones.',
    'how.h': 'De tu imagen de disco a jugar', 'how.p': 'Cuatro pasos, todos dentro del launcher. Sin herramientas de desarrollo.',
    'how.s1h': 'Descarga y descomprime', 'how.s1p': 'Baja el zip de la página de Releases y descomprímelo donde quieras.',
    'how.s2h': 'Añade tu copia', 'how.s2p': 'Abre MHForever.exe y elige tu propio .iso de Freedom Unite, una imagen normal y sin comprimir de tu UMD.',
    'how.s3h': 'Deja que lo compruebe y lo prepare', 'how.s3p': 'El launcher verifica tu copia y prepara en tu PC lo que el juego necesita. También puede guardar una copia de la imagen en su propia carpeta.',
    'how.s4h': 'Pulsa Jugar', 'how.s4p': 'Los mandos funcionan sin configurar y hay teclas por defecto para teclado.',
    'fps.h': 'Más fluido que el original',
    'fps.p': 'El juego original va a 30 fotogramas por segundo. MHForever está aprendiendo a dibujar fotogramas intermedios para que el movimiento se vea más suave en una pantalla rápida. Compara las opciones.',
    'fps.badge': 'En pruebas', 'fps.note': 'No está en la versión actual. En una pantalla de 60 Hz, todo lo que pase de 60 se ve igual que 60.',
    'fps.label': 'Fotogramas por segundo', 'fps.pause': 'Pausar', 'fps.play': 'Reproducir', 'fps.unit': 'fotogramas por segundo',
    'st.h': 'Dónde está el proyecto hoy',
    'st.p': 'Es software en fase temprana. El juego arranca y se puede jugar, pero espera fallos y asperezas. Los reportes son bienvenidos.',
    'st.issue': 'Reportar un problema',
    'st.k1': 'Juego jugable', 'st.v1': 'Monster Hunter Freedom Unite (PSP), edición europea. Por ahora es el único juego.',
    'st.k2': 'Fotogramas', 'st.v2': '30 fps, como la consola original. Se están probando 60 y más.',
    'st.k3': 'Juego en línea', 'st.v3': 'Todavía no está disponible. El multijugador por internet se está diseñando.',
    'st.k4': 'Plataformas', 'st.v4': 'Windows de 64 bits. Linux y Steam Deck están planeados.',
    'st.k5': 'Mandos', 'st.v5': 'Los mandos funcionan sin configurar. Probado con un DualSense de PS5. Otros mandos que reconozca SDL deberían funcionar.',
    'st.k6': 'Resolución', 'st.v6': 'Varias veces los 480×272 originales, con un filtro de texturas más suave opcional.',
    'st.k7': 'Otros juegos y regiones', 'st.v7': 'Se planean las ediciones de EE. UU. y Japón de Freedom Unite y otros juegos de la saga.',
    'vm.h1': 'Misión', 'vm.m': 'Hacer que Monster Hunter se pueda jugar en PCs modernos, de forma nativa, a partir de los discos que la gente ya tiene.',
    'vm.h2': 'Visión', 'vm.v': 'Un hogar para toda la saga: cada juego, cada región y cada plataforma de la que vino.',
    'vm.p': 'Hoy es un juego. El plan es que sean todos.',
    'rm.h': 'Hoja de ruta', 'rm.p': 'Lo que está hecho, lo que se está trabajando y lo que viene después. La lista completa con detalles está en GitHub.',
    'rm.link': 'Leer la hoja de ruta completa',
    'rm.a': 'Runtime de PSP y recompilador', 'rm.b': 'Freedom Unite llega al menú principal', 'rm.c': 'Launcher y versión para Windows',
    'rm.d': 'Un jugador totalmente jugable', 'rm.e': 'Más fluidez, 60 fps y más', 'rm.f': 'Multijugador en línea',
    'rm.g': 'Ediciones de EE. UU. y Japón', 'rm.h2': 'Más juegos de la saga, en PSP y más allá',
    'rm.done': 'Hecho', 'rm.now': 'En curso', 'rm.test': 'En pruebas', 'rm.plan': 'Planeado',
    'faq.h': 'Preguntas', 'faq.p': 'Respuestas cortas a lo que más se pregunta.',
    'faq.q1': '¿Necesito tener el juego?', 'faq.a1': 'Sí. MHForever requiere tu propia copia legítima de Freedom Unite. No se incluye ni se descarga ningún recurso del juego.',
    'faq.q2': '¿Qué versión funciona?', 'faq.a2': 'La edición europea de Monster Hunter Freedom Unite para PSP (ULES01213, v1.01). Las ediciones de EE. UU. y Japón están planeadas.',
    'faq.q3': '¿Es un emulador?', 'faq.a3': 'No. El programa del juego se recompila a código nativo de PC y los servicios del sistema de la consola se reimplementan. Obtienes un programa normal de Windows.',
    'faq.q4': '¿Es legal?', 'faq.a4': 'MHForever no contiene código ni recursos de Capcom ni de Sony y te pide usar tu propia copia. No está afiliado a Capcom ni a Sony. Esto no es asesoramiento legal y las leyes cambian según el país.',
    'faq.q5': '¿Puedo jugar en línea con amigos?', 'faq.a5': 'Todavía no. El multijugador por internet se está diseñando para que puedas cazar con amigos sin una PSP.',
    'faq.q6': '¿Funciona en Linux o en Steam Deck?', 'faq.a6': 'Todavía no. Ambos están planeados.',
    'faq.q7': '¿Cómo reporto un fallo?', 'faq.a7': 'Abre una issue en GitHub con tu versión y lo que pasó. Los reportes son bienvenidos.',
    'end.h': '¿Listo para cazar?', 'end.p': 'Descarga el launcher, añade tu propia copia y pulsa Jugar.',
    'foot.legal': 'MHForever es un proyecto de fans no oficial. No está afiliado, respaldado ni patrocinado por Capcom ni por Sony. Monster Hunter es una marca de su propietario y se usa aquí solo para describir con qué juegos funciona el proyecto.'
  };

  var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));
  var EN = {};
  nodes.forEach(function (n) { EN[n.getAttribute('data-i18n')] = n.textContent; });
  var lang = 'en';
  var version = '';

  function versionText() {
    if (!version) return null;
    return lang === 'es' ? 'Versión ' + version : 'Version ' + version;
  }
  function apply(l) {
    lang = l;
    root.lang = l;
    nodes.forEach(function (n) {
      var k = n.getAttribute('data-i18n');
      var v = l === 'es' && ES[k] ? ES[k] : EN[k];
      if (k === 'hero.chip3' && versionText()) v = versionText();
      n.textContent = v;
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-lang]'), function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === l));
    });
    syncPause();
    try { localStorage.setItem('mhf-lang', l); } catch (e) { /* storage may be blocked */ }
  }
  Array.prototype.forEach.call(document.querySelectorAll('[data-lang]'), function (b) {
    b.addEventListener('click', function () { apply(b.getAttribute('data-lang')); });
  });
  var saved = null;
  try { saved = localStorage.getItem('mhf-lang'); } catch (e) { saved = null; }
  var initial = saved || ((navigator.language || '').toLowerCase().indexOf('es') === 0 ? 'es' : 'en');

  /* ------------------------------------------------------------ latest release */

  try {
    fetch('https://api.github.com/repos/Mango77x/MHForever/releases/latest', { headers: { Accept: 'application/vnd.github+json' } })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) {
        if (!j || !j.tag_name) return;
        version = String(j.tag_name).replace(/^v/, '');
        var chip = document.getElementById('ver');
        if (chip) chip.textContent = versionText();
      })
      .catch(function () { /* offline or rate limited: keep the generic label */ });
  } catch (e) { /* fetch unavailable */ }

  /* ------------------------------------------------------------ reveal on scroll */

  var revealSel = '.head, .rows .row, .table > div, .timeline li, .faq details, .demo, .vm > div, .final-in, .how > *';
  var targets = Array.prototype.slice.call(document.querySelectorAll(revealSel));
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    targets.forEach(function (t) { t.classList.add('reveal'); io.observe(t); });
  }

  /* ------------------------------------------------------------ launcher walkthrough */

  var mock = document.getElementById('mock2');
  var stepBtns = Array.prototype.slice.call(document.querySelectorAll('.step'));
  var current = 1;
  var auto = !reduce;
  var timer = null;
  function setStep(n) {
    current = n;
    mock.setAttribute('data-state', String(n));
    stepBtns.forEach(function (b) {
      var on = Number(b.getAttribute('data-step')) === n;
      b.classList.toggle('on', on);
      if (on) b.setAttribute('aria-current', 'step'); else b.removeAttribute('aria-current');
    });
  }
  function tick() { setStep(current % 4 + 1); }
  function startAuto() { if (auto && !timer) timer = setInterval(tick, 5200); }
  function stopAuto() { clearInterval(timer); timer = null; }
  stepBtns.forEach(function (b) {
    b.addEventListener('click', function () { auto = false; stopAuto(); setStep(Number(b.getAttribute('data-step'))); });
  });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) startAuto(); else stopAuto(); });
    }, { threshold: 0.35 }).observe(document.getElementById('howbox'));
  }

  /* ------------------------------------------------------------ frame-rate demo */

  var cv = document.getElementById('fpsCanvas');
  var ctx = cv.getContext('2d');
  var seg = document.getElementById('fpsSeg');
  var read = document.getElementById('fpsRead');
  var pp = document.getElementById('pp');
  var fps = 30;
  var playing = !reduce;
  var visible = true;
  var t0 = performance.now();
  var offset = 0;
  var sprite = new Image();
  sprite.src = 'img/icon-128.png';
  var W = 720, H = 300;
  var DPR = Math.min(2, window.devicePixelRatio || 1);
  cv.width = W * DPR; cv.height = H * DPR;
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  var PERIOD = 2.6; // seconds for one trip across the track
  var SIZE = 68;

  function posAt(t) {
    var p = (t % (PERIOD * 2)) / PERIOD; // 0..2
    var x = p < 1 ? p : 2 - p;           // ping-pong
    var e = x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2; // ease in/out
    return 32 + e * (W - 64 - SIZE);
  }
  function lane(y, label, rate, t, color) {
    ctx.strokeStyle = 'rgba(255,236,210,0.08)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(24, y + SIZE + 17); ctx.lineTo(W - 24, y + SIZE + 17); ctx.stroke();
    var tq = Math.floor(t * rate) / rate;
    var x = posAt(tq);
    // trail of the frames drawn in the last 100 ms
    var steps = Math.max(1, Math.round(rate * 0.1));
    for (var i = steps; i >= 1; i--) {
      var xf = posAt(tq - i / rate);
      ctx.globalAlpha = 0.07 + 0.1 * (1 - i / (steps + 1));
      ctx.fillStyle = color;
      ctx.fillRect(xf + SIZE / 2 - 2, y + SIZE + 7, 4, 9);
    }
    ctx.globalAlpha = 1;
    if (sprite.complete && sprite.naturalWidth) ctx.drawImage(sprite, x, y, SIZE, SIZE);
    else { ctx.fillStyle = color; ctx.fillRect(x, y, SIZE, SIZE); }
    ctx.fillStyle = '#a59d90';
    ctx.font = '600 20px Manrope, system-ui, sans-serif';
    ctx.fillText(label, 24, y - 12);
  }
  function draw(now) {
    var t = (playing ? now - t0 : offset) / 1000;
    ctx.clearRect(0, 0, W, H);
    lane(52, 'Original, 30 fps', 30, t, '#a59d90');
    lane(184, 'MHForever, ' + fps + ' fps', fps, t, '#f2a541');
  }
  function loop(now) {
    if (playing && visible) draw(now);
    requestAnimationFrame(loop);
  }
  function syncPause() {
    pp.setAttribute('aria-pressed', String(!playing));
    pp.textContent = playing ? (lang === 'es' ? 'Pausar' : 'Pause') : (lang === 'es' ? 'Reproducir' : 'Play');
  }
  pp.addEventListener('click', function () {
    if (playing) { offset = performance.now() - t0; playing = false; }
    else { t0 = performance.now() - offset; playing = true; }
    syncPause();
    if (!playing) draw(performance.now());
  });
  Array.prototype.forEach.call(seg.querySelectorAll('button'), function (b) {
    b.addEventListener('click', function () {
      fps = Number(b.getAttribute('data-fps'));
      read.textContent = String(fps);
      Array.prototype.forEach.call(seg.querySelectorAll('button'), function (o) { o.setAttribute('aria-checked', String(o === b)); });
      if (!playing) draw(performance.now());
    });
  });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (es) { visible = es[0].isIntersecting; }, { threshold: 0.1 }).observe(cv);
  }
  sprite.onload = function () { if (!playing) draw(performance.now()); };
  apply(initial);
  if (!playing) draw(performance.now());
  requestAnimationFrame(loop);
})();
