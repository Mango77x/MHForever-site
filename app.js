/* MHForever site: language switch, launcher walkthrough, frame-rate demo, release version.
   The page reads fine without this script. English text lives in the HTML; Spanish is below. */
(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.add('js');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------ language */

  var ES = {
    'nav.project': 'Proyecto', 'nav.games': 'Juegos', 'nav.how': 'Cómo funciona', 'nav.fps': 'Fotogramas', 'nav.status': 'Estado',
    'nav.roadmap': 'Hoja de ruta', 'nav.faq': 'Preguntas', 'nav.star': 'Estrella en GitHub',
    'hero.h1': 'Los Monster Hunter clásicos, ejecutándose de forma nativa en PC.',
    'hero.sub': 'MHForever es un proyecto de ports no oficiales hechos mediante recompilación estática. Freedom Unite se juega hoy y vendrán más juegos. Sin emulador, con cualquier mando y con un launcher que lo prepara todo a partir de tu propia copia.',
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
    'fps.p': 'El juego original va a 30 fotogramas por segundo. Desde la versión 0.2.0 MHForever puede dibujar fotogramas intermedios, hasta 180 fps, para que el movimiento se vea más suave en una pantalla rápida. Compara las opciones.',
    'fps.badge': 'Experimental', 'fps.note': 'Se elige en los Ajustes del launcher. Las escenas pesadas pueden no mantener las tasas más altas. En una pantalla de 60 Hz, todo lo que pase de 60 se ve igual que 60.',
    'fps.label': 'Fotogramas por segundo', 'fps.pause': 'Pausar', 'fps.play': 'Reproducir', 'fps.unit': 'fotogramas por segundo',
    'games.h': 'Juegos actuales', 'games.p': 'Los Monster Hunter clásicos y en qué punto está cada uno. El color significa que funciona hoy.', 'games.first': 'Lanzado en', 'games.reg': 'Regiones:', 'games.sup': 'Compatible hoy: EU. Planeado: NA, JP.', 'games.s.full': 'Totalmente implementado', 'games.s.partial': 'Parcialmente implementado', 'games.s.planned': 'Planeado', 'games.s.none': 'No implementado', 'games.note': 'Monster Hunter y las portadas de sus juegos pertenecen a Capcom. Se muestran solo para identificar cada juego. MHForever no está afiliado a Capcom.',
    'st.h': 'Dónde está el proyecto hoy',
    'st.p': 'Es software en fase temprana. El juego arranca y se puede jugar, pero espera fallos y asperezas. Los reportes son bienvenidos.',
    'st.issue': 'Reportar un problema',
    'live.k': 'Última versión', 'live.dl': 'Descargar', 'live.notes': 'Notas de la versión', 'live.stars': 'Estrellas', 'live.commit': 'Última actualización', 'live.issues': 'Issues abiertas', 'live.ci': 'Compilación', 'ci.pass': 'Correcta', 'ci.fail': 'Fallando', 'ci.run': 'En curso', 'live.src': 'Datos leídos en directo desde GitHub.',
    'st.k1': 'Juego jugable', 'st.v1': 'Monster Hunter Freedom Unite (PSP), edición europea, conocido en Japón como Monster Hunter Portable 2nd G. Por ahora es el único juego.',
    'st.k2': 'Fotogramas', 'st.v2': '30 fps como la consola original, o de 60 a 180 fps con interpolación de fotogramas (experimental).',
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

  var JA = {
    'nav.project': 'プロジェクト', 'nav.games': '対応ゲーム', 'nav.how': '使い方', 'nav.fps': 'フレームレート', 'nav.status': '現状',
    'nav.roadmap': 'ロードマップ', 'nav.faq': 'よくある質問', 'nav.star': 'GitHubでスター',
    'hero.h1': '往年のモンスターハンターを、PCネイティブで。',
    'hero.sub': 'MHForeverは、静的再コンパイルで作る非公式ポートのプロジェクトです。今はFreedom Unite（日本版『モンスターハンターポータブル 2nd G』）が遊べ、今後ほかの作品も追加していきます。エミュレーターは使わず、好きなコントローラーで遊べて、ランチャーがお手持ちのゲームからセットアップをすべて行います。',
    'hero.cta1': 'Windows版をダウンロード', 'hero.cta2': 'GitHubで見る',
    'hero.chip1': '今すぐプレイ可能', 'hero.chip2': '欧州版 ULES01213', 'hero.chip3': 'GitHubの最新リリース',
    'hero.chip4': 'オープンソース GPL-3.0',
    'hero.note': 'ご自身で入手したゲームのコピーが必要です。ゲームのファイルは同梱されず、ダウンロードもされません。',
    'mock.home': 'ホーム', 'mock.welcome': 'ようこそ', 'mock.h': 'ゲームを持ち込もう。',
    'mock.p': 'お手持ちのコピーを追加して、PCでネイティブに遊べます。', 'mock.add': 'コピーを追加',
    'mock.unzipped': '展開済み', 'mock.s1': '好きな場所に展開して、MHForever.exe を開きます。',
    'mock.chosen': '選択済み', 'mock.s3h': 'コピーを確認中', 'mock.c1': 'ディスクイメージを確認しました',
    'mock.c2': 'このPCでゲームを準備しました', 'mock.c3': '何もアップロードされません', 'mock.s4p': '欧州版 ULES01213',
    'mock.play': 'プレイ',
    'what.h': 'エミュレーターではなく、ネイティブなプログラム',
    'what.p': 'ゲームのコードは事前にPC向けのネイティブコードへ変換され、本体のシステム機能は再実装されています。その結果、ゲームを直接動かす通常のWindowsプログラムになり、周りには最新のランチャーが付きます。',
    'what.r1h': 'エミュレーターではなくネイティブ',
    'what.r1p': 'エミュレーターを介しません。だから高解像度や好きなコントローラー、そして将来のオンライン対戦も現実的になります。',
    'what.r2h': 'あなたのコピー、あなたのファイル',
    'what.r2p': 'MHForeverはゲームのデータを同梱もダウンロードもしません。すべてあなたが用意したディスクイメージから読み込まれ、セーブデータもあなたのPCに残ります。',
    'what.r3h': '拡張を前提に',
    'what.r3p': 'ゲームごとに、共通のランタイム上のモジュールとして作られます。最初のゲームはFreedom Uniteで、今後ほかのゲームや地域も予定しています。',
    'how.h': 'ディスクイメージからプレイまで', 'how.p': '手順は4つ。すべてランチャーの中で完結し、開発ツールは不要です。',
    'how.s1h': 'ダウンロードして展開', 'how.s1p': 'Releasesページからzipを入手し、好きな場所に展開します。',
    'how.s2h': 'コピーを追加', 'how.s2p': 'MHForever.exe を開き、お手持ちのFreedom Uniteの .iso（UMDを圧縮せずに吸い出した通常のイメージ）を選びます。',
    'how.s3h': '確認と準備を任せる', 'how.s3p': 'ランチャーがコピーを検証し、ゲームに必要なものをお使いのPC上で準備します。イメージのコピーを専用フォルダに保存することもできます。',
    'how.s4h': 'プレイを押す', 'how.s4p': 'ゲームパッドは設定なしで使え、キーボードの初期設定も用意されています。',
    'fps.h': 'オリジナルよりなめらかに',
    'fps.p': 'オリジナルのゲームは毎秒30フレームで動きます。バージョン0.2.0から、MHForeverは間のフレームを追加で描いて最大180fpsにでき、高速なディスプレイでは動きがよりなめらかに見えます。下で違いを比べてみてください。',
    'fps.badge': '試験的機能', 'fps.note': 'ランチャーの設定で選べます。負荷の高い場面では最高レートを維持できないことがあります。60Hzの画面では、60を超えても60と同じ見え方になります。',
    'fps.label': '毎秒のフレーム数', 'fps.pause': '一時停止', 'fps.play': '再生', 'fps.unit': 'フレーム／秒',
    'games.h': '対応ゲーム', 'games.p': 'クラシックなモンスターハンターシリーズと、それぞれの対応状況です。色がついているものは今すぐ動作します。', 'games.first': '初出', 'games.reg': '発売地域:', 'games.sup': '現在対応: EU。対応予定: NA、JP。', 'games.s.full': '完全対応', 'games.s.partial': '一部対応', 'games.s.planned': '対応予定', 'games.s.none': '未対応', 'games.note': 'モンスターハンターおよび各ゲームのカバーアートはカプコンに帰属します。ゲームを識別する目的でのみ表示しています。MHForeverはカプコンとは無関係です。',
    'st.h': 'プロジェクトの現状',
    'st.p': '開発初期のソフトウェアです。ゲームは起動して遊べますが、粗い部分や不具合があります。報告をお待ちしています。',
    'st.issue': '問題を報告する',
    'live.k': '最新リリース', 'live.dl': 'ダウンロード', 'live.notes': 'リリースノート', 'live.stars': 'スター', 'live.commit': '最終更新', 'live.issues': '未解決のIssue', 'live.ci': 'ビルド', 'ci.pass': '成功', 'ci.fail': '失敗', 'ci.run': '実行中', 'live.src': 'GitHubからリアルタイムで取得しています。',
    'st.k1': 'プレイできるゲーム', 'st.v1': 'Monster Hunter Freedom Unite（PSP）欧州版。日本では『モンスターハンターポータブル 2nd G』。今のところ唯一のゲームです。',
    'st.k2': 'フレームレート', 'st.v2': 'オリジナルの本体と同じ30fps、またはフレーム補間による60〜180fps（試験的）。',
    'st.k3': 'オンラインプレイ', 'st.v3': 'まだ利用できません。インターネット対戦を設計中です。',
    'st.k4': 'プラットフォーム', 'st.v4': 'Windows（64ビット）。LinuxとSteam Deckは予定しています。',
    'st.k5': 'コントローラー', 'st.v5': 'ゲームパッドは設定なしで使えます。PS5 DualSenseで動作確認済み。SDLが認識するほかのパッドも動くはずです。',
    'st.k6': '解像度', 'st.v6': 'オリジナルの480×272の数倍。より滑らかなテクスチャフィルターも選べます。',
    'st.k7': 'ほかのゲームと地域', 'st.v7': 'Freedom Uniteの北米版・日本版や、シリーズのほかのゲームを予定しています。',
    'vm.h1': 'ミッション', 'vm.m': 'すでに手元にあるディスクから、モンスターハンターを現代のPCでネイティブに遊べるようにすること。',
    'vm.h2': 'ビジョン', 'vm.v': 'シリーズ全体の拠り所となること。すべてのゲーム、すべての地域、そして元のすべてのプラットフォームを。',
    'vm.p': '今は1本。目指すのは、すべてです。',
    'rm.h': 'ロードマップ', 'rm.p': '完了したこと、取り組み中のこと、これからのこと。詳細な一覧はGitHubにあります。',
    'rm.link': '完全なロードマップを読む',
    'rm.a': 'PSPランタイムとリコンパイラー', 'rm.b': 'Freedom Uniteがメインメニューまで到達', 'rm.c': 'ランチャーとWindows版リリース',
    'rm.d': 'シングルプレイを遊べる状態に', 'rm.e': 'よりなめらかなフレームレート（60fps以上）', 'rm.f': 'オンラインマルチプレイ',
    'rm.g': '北米版・日本版', 'rm.h2': 'シリーズのほかのゲーム（PSPとその先へ）',
    'rm.done': '完了', 'rm.now': '取り組み中', 'rm.test': 'テスト中', 'rm.plan': '予定',
    'faq.h': 'よくある質問', 'faq.p': 'よく聞かれることへの短い答えです。',
    'faq.q1': 'ゲームを持っている必要がありますか？', 'faq.a1': 'はい。MHForeverにはFreedom Uniteの正規のコピーが必要です。ゲームのデータは同梱もダウンロードもされません。',
    'faq.q2': 'どのバージョンで動きますか？', 'faq.a2': 'PSP版 Monster Hunter Freedom Unite の欧州版（ULES01213、v1.01）です。北米版と日本版（日本では『モンスターハンターポータブル 2nd G』）は予定しています。',
    'faq.q3': 'エミュレーターですか？', 'faq.a3': 'いいえ。ゲームのプログラムをPC向けのネイティブコードに再コンパイルし、本体のシステム機能を再実装しています。通常のWindowsプログラムとして動きます。',
    'faq.q4': '合法ですか？', 'faq.a4': 'MHForeverにはCapcomやSonyのコードやデータは含まれず、ご自身のコピーを使う前提です。CapcomおよびSonyとは無関係です。これは法的助言ではなく、法律は国によって異なります。',
    'faq.q5': 'フレンドとオンラインで遊べますか？', 'faq.a5': 'まだです。PSPがなくてもフレンドと狩りに行けるよう、インターネット対戦を設計中です。',
    'faq.q6': 'LinuxやSteam Deckで動きますか？', 'faq.a6': 'まだです。どちらも予定しています。',
    'faq.q7': '不具合はどう報告すればいいですか？', 'faq.a7': 'バージョンと状況を添えて、GitHubでissueを開いてください。報告をお待ちしています。',
    'end.h': '狩りの準備はできましたか？', 'end.p': 'ランチャーをダウンロードし、お手持ちのコピーを追加して、プレイを押すだけです。',
    'foot.legal': 'MHForeverは非公式のファンプロジェクトです。CapcomおよびSonyとは提携・承認・後援の関係にありません。Monster Hunterは各権利者の商標であり、このプロジェクトが対応するゲームを説明する目的でのみ使用しています。'
  };

  var DICT = { es: ES, ja: JA };
  var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));
  var EN = {};
  nodes.forEach(function (n) { EN[n.getAttribute('data-i18n')] = n.textContent; });
  var lang = 'en';
  var version = '';

  function versionText() {
    if (!version) return null;
    return ({ es: 'Versión ', ja: 'バージョン ' }[lang] || 'Version ') + version;
  }
  function apply(l) {
    lang = l;
    root.lang = l;
    nodes.forEach(function (n) {
      var k = n.getAttribute('data-i18n');
      var v = (DICT[l] && DICT[l][k]) || EN[k];
      if (k === 'hero.chip3' && versionText()) v = versionText();
      n.textContent = v;
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-lang]'), function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === l));
    });
    syncPause();
    renderLive();
    try { localStorage.setItem('mhf-lang', l); } catch (e) { /* storage may be blocked */ }
  }
  Array.prototype.forEach.call(document.querySelectorAll('[data-lang]'), function (b) {
    b.addEventListener('click', function () { apply(b.getAttribute('data-lang')); });
  });
  var saved = null;
  try { saved = localStorage.getItem('mhf-lang'); } catch (e) { saved = null; }
  var browser = (navigator.language || 'en').toLowerCase();
  var initial = saved && (saved === 'en' || DICT[saved]) ? saved : (browser.indexOf('es') === 0 ? 'es' : browser.indexOf('ja') === 0 ? 'ja' : 'en');

  /* ------------------------------------------------------------ game covers: use the art when the file exists */

  Array.prototype.forEach.call(document.querySelectorAll('.game .art'), function (img) {
    var probe = new Image();
    probe.onload = function () { img.parentNode.classList.add('has-art'); };
    probe.src = img.getAttribute('src');
  });

  /* ------------------------------------------------------------ cover tilt: the hovered cover leans towards the pointer */

  if (!reduce && window.matchMedia('(hover: hover)').matches) {
    Array.prototype.forEach.call(document.querySelectorAll('.game'), function (g) {
      g.addEventListener('pointermove', function (e) {
        var r = g.getBoundingClientRect();
        g.style.setProperty('--ry', (((e.clientX - r.left) / r.width) - 0.5) * 14 + 'deg');
        g.style.setProperty('--rx', (0.5 - ((e.clientY - r.top) / r.height)) * 14 + 'deg');
      });
      g.addEventListener('pointerleave', function () { g.style.removeProperty('--rx'); g.style.removeProperty('--ry'); });
    });
  }

  /* ------------------------------------------------------------ latest release */

  var live = { rel: null, repo: null, ci: null };
  var CI_LABEL = { en: { pass: 'Passing', fail: 'Failing', run: 'Running' } };
  var API = 'https://api.github.com/repos/Mango77x/MHForever';
  var TTL = 10 * 60 * 1000; /* the unauthenticated API allows 60 requests an hour per IP */

  function $(id) { return document.getElementById(id); }
  function fmtDate(iso) {
    try { return new Intl.DateTimeFormat(lang, { year: 'numeric', month: 'short', day: 'numeric' }).format(new Date(iso)); }
    catch (e) { return String(iso).slice(0, 10); }
  }
  function fmtSize(b) { return b >= 1048576 ? (b / 1048576).toFixed(1) + ' MB' : ''; }
  function renderLive() {
    var rel = live.rel, repo = live.repo;
    if (rel) {
      $('liveVer').textContent = String(rel.tag_name).replace(/^v/, '');
      $('liveDate').textContent = rel.published_at ? fmtDate(rel.published_at) : '';
      var asset = (rel.assets || []).filter(function (a) { return /\.zip$/i.test(a.name); })[0];
      if (asset) {
        Array.prototype.forEach.call(document.querySelectorAll('.dl-latest'), function (a) { a.href = asset.browser_download_url; });
        $('liveSize').textContent = fmtSize(asset.size);
      }
      if (rel.html_url) $('liveNotes').href = rel.html_url;
    }
    if (repo) {
      $('liveStars').textContent = String(repo.stargazers_count);
      $('liveCommit').textContent = fmtDate(repo.pushed_at);
      $('liveIssues').textContent = String(repo.open_issues_count);
    }
    var run = live.ci && live.ci.workflow_runs && live.ci.workflow_runs[0];
    if (run) {
      var st = run.status !== 'completed' ? 'run' : run.conclusion === 'success' ? 'pass' : 'fail';
      var el = $('liveCi');
      el.textContent = (DICT[lang] && DICT[lang]['ci.' + st]) || CI_LABEL.en[st];
      el.className = 'ci ' + st;
      el.href = run.html_url;
    }
  }
  function loaded() {
    if (live.rel && live.rel.tag_name) {
      version = String(live.rel.tag_name).replace(/^v/, '');
      var chip = $('ver');
      if (chip) chip.textContent = versionText();
    }
    renderLive();
  }
  function getJSON(url) {
    return fetch(url, { headers: { Accept: 'application/vnd.github+json' } }).then(function (r) { return r.ok ? r.json() : null; });
  }
  try {
    var cached = null;
    try { cached = JSON.parse(sessionStorage.getItem('mhf-live') || 'null'); } catch (e) { cached = null; }
    if (cached && Date.now() - cached.t < TTL) {
      live = cached.d;
      loaded();
    } else {
      Promise.all([getJSON(API + '/releases/latest'), getJSON(API), getJSON(API + '/actions/runs?branch=main&per_page=1')]).then(function (r) {
        live = { rel: r[0], repo: r[1], ci: r[2] };
        if (r[0] || r[1] || r[2]) { try { sessionStorage.setItem('mhf-live', JSON.stringify({ t: Date.now(), d: live })); } catch (e) { /* storage blocked */ } }
        loaded();
      }).catch(function () { /* offline or rate limited: the card keeps its links */ });
    }
  } catch (e) { /* fetch unavailable */ }

  /* ------------------------------------------------------------ reveal on scroll */

  var revealSel = '.head, .games, .rows .row, .table > div, .timeline li, .faq details, .demo, .vm > div, .final-in, .how > *';
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
    var L = { en: ['Pause', 'Play'], es: ['Pausar', 'Reproducir'], ja: ['一時停止', '再生'] }[lang] || ['Pause', 'Play'];
    pp.textContent = playing ? L[0] : L[1];
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
