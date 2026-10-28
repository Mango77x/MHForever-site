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
    'hero.sub': 'MHForever es un proyecto de ports no oficiales hechos mediante recompilación estática. Freedom Unite se juega hoy, también en línea, y vendrán más juegos. Sin emulador, con cualquier mando y con un launcher que lo prepara todo a partir de tu propia copia.',
    'hero.cta1': 'Descargar para Windows', 'hero.cta2': 'Ver en GitHub',
    'hero.chip1': 'Jugable hoy', 'hero.chip2': 'Ediciones europea y norteamericana', 'hero.chip5': 'Juego en línea', 'hero.chip3': 'Última versión en GitHub',
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
    'what.r1p': 'No hay ningún emulador en medio. Por eso son prácticos las resoluciones altas, cualquier mando y el juego en línea.',
    'what.r2h': 'Tu copia, tus archivos',
    'what.r2p': 'MHForever nunca incluye ni descarga recursos del juego. Todo se lee de la imagen de disco que tú aportas, y tus partidas guardadas se quedan en tu ordenador.',
    'what.r3h': 'Hecho para crecer',
    'what.r3p': 'Cada juego es un módulo sobre un runtime común. Freedom Unite es el primero. Se planean más juegos y regiones.',
    'how.h': 'De tu imagen de disco a jugar', 'how.p': 'Cuatro pasos, todos dentro del launcher. Sin herramientas de desarrollo.',
    'how.s1h': 'Descarga y descomprime', 'how.s1p': 'Baja de la página de Releases el archivo de tu sistema (zip para Windows, tar.gz para Linux) y descomprímelo donde quieras.',
    'how.s2h': 'Añade tu copia', 'how.s2p': 'Abre MHForever.exe y elige tu propio .iso de Freedom Unite, una imagen normal y sin comprimir de tu UMD.',
    'how.s3h': 'Deja que lo compruebe y lo prepare', 'how.s3p': 'El launcher verifica tu copia y prepara en tu PC lo que el juego necesita. También puede guardar una copia de la imagen en su propia carpeta.',
    'how.s4h': 'Pulsa Jugar', 'how.s4p': 'Los mandos funcionan sin configurar y hay teclas por defecto para teclado.',
    'fps.h': 'Más fluido que el original',
    'fps.p': 'El juego original va a 30 fotogramas por segundo. Desde la versión 0.2.0 MHForever puede dibujar fotogramas intermedios, hasta 180 fps, para que el movimiento se vea más suave en una pantalla rápida. Compara las opciones.',
    'fps.badge': 'Experimental', 'fps.note': 'Se elige en los Ajustes del juego del launcher (Game settings) o en el menú del juego (Esc). Las escenas pesadas pueden no mantener las tasas más altas. En una pantalla de 60 Hz, todo lo que pase de 60 se ve igual que 60.',
    'fps.label': 'Fotogramas por segundo', 'fps.pause': 'Pausar', 'fps.play': 'Reproducir', 'fps.unit': 'fotogramas por segundo',
    'games.h': 'Juegos actuales', 'games.p': 'Los Monster Hunter clásicos y en qué punto está cada uno. El color significa que funciona hoy.', 'games.first': 'Lanzado en', 'games.reg': 'Regiones:', 'games.sup': 'Compatible hoy: EU y NA, con juego en línea. Planeado: JP.', 'games.s.full': 'Totalmente implementado', 'games.s.partial': 'Parcialmente implementado', 'games.s.planned': 'Planeado', 'games.s.none': 'No implementado', 'games.note': 'Monster Hunter y las portadas de sus juegos pertenecen a Capcom. Se muestran solo para identificar cada juego. MHForever no está afiliado a Capcom.',
    'st.h': 'Dónde está el proyecto hoy',
    'st.p': 'Es software en fase temprana. El juego arranca y se puede jugar, pero espera fallos y asperezas. Los reportes son bienvenidos.',
    'st.issue': 'Reportar un problema',
    'live.k': 'Última versión', 'live.dl': 'Descargar', 'live.notes': 'Notas de la versión', 'live.stars': 'Estrellas', 'live.commit': 'Última actualización', 'live.issues': 'Issues abiertas', 'live.ci': 'Compilación', 'ci.pass': 'Correcta', 'ci.fail': 'Fallando', 'ci.run': 'En curso', 'live.src': 'Datos leídos en directo desde GitHub.',
    'st.k1': 'Juego jugable', 'st.v1': 'Monster Hunter Freedom Unite (PSP), ediciones europea y norteamericana, conocido en Japón como Monster Hunter Portable 2nd G. Por ahora es el único juego, y cada edición guarda sus propios ajustes.',
    'st.k2': 'Fotogramas', 'st.v2': '30 fps como la consola original, o de 60 a 180 fps con interpolación de fotogramas (experimental). Se puede cambiar mientras juegas.',
    'st.k3': 'Juego en línea', 'st.v3': 'Experimental, desde la 0.6. Caza en compañía en los mismos servidores ad hoc que usa PPSSPP, con otros jugadores de MHForever y con jugadores de PPSSPP. El servidor se elige en el launcher, en Settings → Online. Lo siguiente son los amigos y las salas privadas.',
    'st.k4': 'Plataformas', 'st.v4': 'Windows y Linux de 64 bits. Steam Deck sin probar.',
    'st.k5': 'Mandos', 'st.v5': 'Los mandos funcionan sin configurar. Probado con un DualSense de PS5. Otros mandos que reconozca SDL deberían funcionar.',
    'st.k6': 'Resolución', 'st.v6': 'Hasta 10 veces los 480×272 originales, con un filtro de texturas más suave opcional. Se puede cambiar mientras juegas.',
    'st.k7': 'Otros juegos y regiones', 'st.v7': 'Se planean la edición japonesa (Portable 2nd G) y otros juegos de la saga.',
    'st.k8': 'Menú del juego', 'st.v8': 'Pulsa Escape (o el botón guía del mando) para abrirlo encima del juego, que sigue en marcha: cambia el volumen, la resolución, los fotogramas y la pantalla completa sin reiniciar. Funciona con teclado, mando o ratón.',
    'st.k9': 'Partidas', 'st.v9': 'El mismo formato que la PSP y PPSSPP: importa tus partidas de una PSP o de PPSSPP y copia las de MHForever a PPSSPP. Solo de tu propia versión del juego.',
    'vm.h1': 'Misión', 'vm.m': 'Hacer que Monster Hunter se pueda jugar en PCs modernos, de forma nativa, a partir de los discos que la gente ya tiene.',
    'vm.h2': 'Visión', 'vm.v': 'Un hogar para toda la saga: cada juego, cada región y cada plataforma de la que vino.',
    'vm.p': 'Hoy es un juego, en dos regiones y en línea. El plan es que sean todos.',
    'rm.h': 'Hoja de ruta', 'rm.p': 'Lo que está hecho, lo que se está trabajando y lo que viene después. La lista completa con detalles está en GitHub.',
    'rm.link': 'Leer la hoja de ruta completa',
    'rm.a': 'Runtime de PSP y recompilador', 'rm.b': 'Freedom Unite llega al menú principal', 'rm.c': 'Launcher y versión para Windows',
    'rm.d': 'Un jugador totalmente jugable', 'rm.e': 'Más fluidez, 60 fps y más', 'rm.f': 'Juego en línea en servidores de la comunidad',
    'rm.i': 'Menú en el juego y partidas en formato PSP', 'hero.cta1l': 'Descargar para Linux', 'live.altl': 'Descarga para Linux', 'live.altw': 'Descarga para Windows', 'rm.j': 'Versión para Linux', 'rm.g': 'Edición norteamericana', 'rm.k': 'Amigos, salas privadas e invitaciones', 'rm.l': 'Edición japonesa (Portable 2nd G)', 'rm.h2': 'Más juegos de la saga, en PSP y más allá',
    'rm.done': 'Hecho', 'rm.now': 'En curso', 'rm.test': 'En pruebas', 'rm.plan': 'Planeado',
    'faq.h': 'Preguntas', 'faq.p': 'Respuestas cortas a lo que más se pregunta.',
    'faq.q1': '¿Necesito tener el juego?', 'faq.a1': 'Sí. MHForever requiere tu propia copia legítima de Freedom Unite. No se incluye ni se descarga ningún recurso del juego.',
    'faq.q2': '¿Qué versión funciona?', 'faq.a2': 'Monster Hunter Freedom Unite para PSP, ediciones europea (ULES01213) y norteamericana (ULUS10391), versión 1.01. Puedes añadir las dos y elegir cuál jugar en la Biblioteca. La edición japonesa está planeada.',
    'faq.q3': '¿Es un emulador?', 'faq.a3': 'No. El programa del juego se recompila a código nativo de PC y los servicios del sistema de la consola se reimplementan. Obtienes un programa normal de Windows.',
    'faq.q4': '¿Es legal?', 'faq.a4': 'MHForever no contiene código ni recursos de Capcom ni de Sony y te pide usar tu propia copia. No está afiliado a Capcom ni a Sony. Esto no es asesoramiento legal y las leyes cambian según el país.',
    'faq.q5': '¿Puedo jugar en línea con amigos?', 'faq.a5': 'Sí, desde la 0.6 (experimental). En el launcher, abre Settings → Online y elige un servidor: te encuentras con otros jugadores en la Sala de Reunión del propio juego y salís juntos de misión, también con jugadores de PPSSPP. El servidor muestra tu nombre y tu juego en su página de estado pública; los demás jugadores no ven tu dirección. Los amigos y las salas privadas con código están planeados para la 0.7.',
    'faq.q6': '¿Funciona en Linux o en Steam Deck?', 'faq.a6': 'Linux sí: desde la 0.4.1 hay una descarga para Linux junto a la de Windows (necesita WebKitGTK 4.1 y GTK 3 y se compila en Ubuntu 24.04, así que distribuciones muy antiguas pueden no ejecutarla). Steam Deck todavía no se ha probado; los reportes son bienvenidos.',
    'faq.q7': '¿Cómo reporto un fallo?', 'faq.a7': 'Abre una issue en GitHub con tu versión y lo que pasó, o pregunta en el Discord. Los reportes son bienvenidos.',
    'faq.q8': '¿Perderé mis partidas al actualizar?', 'faq.a8': 'No. Las partidas se guardan en Documents\\MHForever\\saves y tus ajustes en %APPDATA%\\MHForever, fuera de la carpeta del programa, así que descomprimir una versión nueva nunca las toca. Las partidas de versiones anteriores que estaban junto al programa se copian la primera vez que pulsas Play.',
    'faq.q9': '¿Puedo usar partidas de una PSP real o de PPSSPP?', 'faq.a9': 'Sí, de tu propia versión del juego (una partida europea funciona con la edición europea y una norteamericana con la norteamericana). En los Ajustes del juego del launcher (Game settings), en Saves, elige la carpeta que las contiene. Tu partida actual se guarda en una copia de seguridad. Las partidas de MHForever también se cargan en PPSSPP. En una PSP real no está garantizado.',
    'faq.q10': '¿Qué tasas de fotogramas hay?', 'faq.a10': 'El original va a 30 fps. En los Ajustes del juego del launcher (Game settings) puedes elegir de 60 a 180 fps (cualquier múltiplo de 30): el juego sigue a 30 y se dibujan imágenes intermedias. Es experimental y las escenas pesadas pueden no mantener las tasas más altas.',
    'faq.q11': '¿Puedo cambiar los gráficos o el sonido mientras juego?', 'faq.a11': 'Sí. Pulsa Escape en el juego y se abre un menú encima (el juego sigue en marcha) donde cambias el volumen, la resolución (hasta 10×), los fotogramas (de 30 a 180) y la pantalla completa sin reiniciar.',
    'end.discord': 'Únete al Discord',
    'faq.q12': '¿Hay una comunidad?', 'faq.a12': 'Sí, un servidor de Discord para pedir ayuda, reportar fallos, hacer sugerencias y seguir las novedades. Trae tu propia copia del juego: allí no se habla de piratería.',
    'end.h': '¿Listo para cazar?', 'end.p': 'Descarga el launcher, añade tu propia copia y pulsa Jugar.',
    'foot.legal': 'MHForever es un proyecto de fans no oficial. No está afiliado, respaldado ni patrocinado por Capcom ni por Sony. Monster Hunter es una marca de su propietario y se usa aquí solo para describir con qué juegos funciona el proyecto.'
  };

  var JA = {
    'nav.project': 'プロジェクト', 'nav.games': '対応ゲーム', 'nav.how': '使い方', 'nav.fps': 'フレームレート', 'nav.status': '現状',
    'nav.roadmap': 'ロードマップ', 'nav.faq': 'よくある質問', 'nav.star': 'GitHubでスター',
    'hero.h1': '往年のモンスターハンターを、PCネイティブで。',
    'hero.sub': 'MHForeverは、静的再コンパイルで作る非公式ポートのプロジェクトです。今はFreedom Unite（日本版『モンスターハンターポータブル 2nd G』）がオンラインも含めて遊べ、今後ほかの作品も追加していきます。エミュレーターは使わず、好きなコントローラーで遊べて、ランチャーがお手持ちのゲームからセットアップをすべて行います。',
    'hero.cta1': 'Windows版をダウンロード', 'hero.cta2': 'GitHubで見る',
    'hero.chip1': '今すぐプレイ可能', 'hero.chip2': '欧州版・北米版', 'hero.chip5': 'オンラインプレイ', 'hero.chip3': 'GitHubの最新リリース',
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
    'what.r1p': 'エミュレーターを介しません。だから高解像度や好きなコントローラー、そしてオンラインプレイも現実的になります。',
    'what.r2h': 'あなたのコピー、あなたのファイル',
    'what.r2p': 'MHForeverはゲームのデータを同梱もダウンロードもしません。すべてあなたが用意したディスクイメージから読み込まれ、セーブデータもあなたのPCに残ります。',
    'what.r3h': '拡張を前提に',
    'what.r3p': 'ゲームごとに、共通のランタイム上のモジュールとして作られます。最初のゲームはFreedom Uniteで、今後ほかのゲームや地域も予定しています。',
    'how.h': 'ディスクイメージからプレイまで', 'how.p': '手順は4つ。すべてランチャーの中で完結し、開発ツールは不要です。',
    'how.s1h': 'ダウンロードして展開', 'how.s1p': 'Releasesページからお使いの環境のファイル（Windowsはzip、Linuxはtar.gz）を入手し、好きな場所に展開します。',
    'how.s2h': 'コピーを追加', 'how.s2p': 'MHForever.exe を開き、お手持ちのFreedom Uniteの .iso（UMDを圧縮せずに吸い出した通常のイメージ）を選びます。',
    'how.s3h': '確認と準備を任せる', 'how.s3p': 'ランチャーがコピーを検証し、ゲームに必要なものをお使いのPC上で準備します。イメージのコピーを専用フォルダに保存することもできます。',
    'how.s4h': 'プレイを押す', 'how.s4p': 'ゲームパッドは設定なしで使え、キーボードの初期設定も用意されています。',
    'fps.h': 'オリジナルよりなめらかに',
    'fps.p': 'オリジナルのゲームは毎秒30フレームで動きます。バージョン0.2.0から、MHForeverは間のフレームを追加で描いて最大180fpsにでき、高速なディスプレイでは動きがよりなめらかに見えます。下で違いを比べてみてください。',
    'fps.badge': '試験的機能', 'fps.note': 'ランチャーのゲーム設定（Game settings）、またはゲーム内メニュー（Esc）で選べます。負荷の高い場面では最高レートを維持できないことがあります。60Hzの画面では、60を超えても60と同じ見え方になります。',
    'fps.label': '毎秒のフレーム数', 'fps.pause': '一時停止', 'fps.play': '再生', 'fps.unit': 'フレーム／秒',
    'games.h': '対応ゲーム', 'games.p': 'クラシックなモンスターハンターシリーズと、それぞれの対応状況です。色がついているものは今すぐ動作します。', 'games.first': '初出', 'games.reg': '発売地域:', 'games.sup': '現在対応: EU・NA（オンライン対応）。対応予定: JP。', 'games.s.full': '完全対応', 'games.s.partial': '一部対応', 'games.s.planned': '対応予定', 'games.s.none': '未対応', 'games.note': 'モンスターハンターおよび各ゲームのカバーアートはカプコンに帰属します。ゲームを識別する目的でのみ表示しています。MHForeverはカプコンとは無関係です。',
    'st.h': 'プロジェクトの現状',
    'st.p': '開発初期のソフトウェアです。ゲームは起動して遊べますが、粗い部分や不具合があります。報告をお待ちしています。',
    'st.issue': '問題を報告する',
    'live.k': '最新リリース', 'live.dl': 'ダウンロード', 'live.notes': 'リリースノート', 'live.stars': 'スター', 'live.commit': '最終更新', 'live.issues': '未解決のIssue', 'live.ci': 'ビルド', 'ci.pass': '成功', 'ci.fail': '失敗', 'ci.run': '実行中', 'live.src': 'GitHubからリアルタイムで取得しています。',
    'st.k1': 'プレイできるゲーム', 'st.v1': 'Monster Hunter Freedom Unite（PSP）欧州版・北米版。日本では『モンスターハンターポータブル 2nd G』。今のところ唯一のゲームで、版ごとに設定を保存します。',
    'st.k2': 'フレームレート', 'st.v2': 'オリジナルの本体と同じ30fps、またはフレーム補間による60〜180fps（試験的）。プレイ中に切り替えられます。',
    'st.k3': 'オンラインプレイ', 'st.v3': '0.6から試験的に対応。PPSSPPと同じアドホックサーバーで、ほかのMHForeverプレイヤーやPPSSPPのプレイヤーと一緒に狩りに行けます。サーバーはランチャーの Settings → Online で選びます。次はフレンドとプライベートルームです。',
    'st.k4': 'プラットフォーム', 'st.v4': 'WindowsとLinux（64ビット）。Steam Deckは未検証です。',
    'st.k5': 'コントローラー', 'st.v5': 'ゲームパッドは設定なしで使えます。PS5 DualSenseで動作確認済み。SDLが認識するほかのパッドも動くはずです。',
    'st.k6': '解像度', 'st.v6': 'オリジナルの480×272の最大10倍。より滑らかなテクスチャフィルターも選べます。プレイ中に変更できます。',
    'st.k7': 'ほかのゲームと地域', 'st.v7': '日本版（ポータブル 2nd G）や、シリーズのほかのゲームを予定しています。',
    'st.k8': 'ゲーム内メニュー', 'st.v8': 'Esc（またはコントローラーのガイドボタン）でゲームを止めずにメニューを開き、音量・解像度・フレームレート・フルスクリーンを再起動なしで変更できます。キーボード、コントローラー、マウスに対応しています。',
    'st.k9': 'セーブデータ', 'st.v9': 'PSPやPPSSPPと同じ形式です。PSPやPPSSPPのセーブデータを取り込めるほか、MHForeverのセーブデータをPPSSPPにコピーして使えます。対象はお手持ちと同じバージョンのゲームのみです。',
    'vm.h1': 'ミッション', 'vm.m': 'すでに手元にあるディスクから、モンスターハンターを現代のPCでネイティブに遊べるようにすること。',
    'vm.h2': 'ビジョン', 'vm.v': 'シリーズ全体の拠り所となること。すべてのゲーム、すべての地域、そして元のすべてのプラットフォームを。',
    'vm.p': '今は1本、2つの地域とオンラインで。目指すのは、すべてです。',
    'rm.h': 'ロードマップ', 'rm.p': '完了したこと、取り組み中のこと、これからのこと。詳細な一覧はGitHubにあります。',
    'rm.link': '完全なロードマップを読む',
    'rm.a': 'PSPランタイムとリコンパイラー', 'rm.b': 'Freedom Uniteがメインメニューまで到達', 'rm.c': 'ランチャーとWindows版リリース',
    'rm.d': 'シングルプレイを遊べる状態に', 'rm.e': 'よりなめらかなフレームレート（60fps以上）', 'rm.f': 'コミュニティサーバーでのオンラインプレイ',
    'rm.i': 'ゲーム内メニューとPSP形式のセーブデータ', 'hero.cta1l': 'Linux版をダウンロード', 'live.altl': 'Linux版', 'live.altw': 'Windows版', 'rm.j': 'Linux版のリリース', 'rm.g': '北米版', 'rm.k': 'フレンド、プライベートルーム、招待', 'rm.l': '日本版（ポータブル 2nd G）', 'rm.h2': 'シリーズのほかのゲーム（PSPとその先へ）',
    'rm.done': '完了', 'rm.now': '取り組み中', 'rm.test': 'テスト中', 'rm.plan': '予定',
    'faq.h': 'よくある質問', 'faq.p': 'よく聞かれることへの短い答えです。',
    'faq.q1': 'ゲームを持っている必要がありますか？', 'faq.a1': 'はい。MHForeverにはFreedom Uniteの正規のコピーが必要です。ゲームのデータは同梱もダウンロードもされません。',
    'faq.q2': 'どのバージョンで動きますか？', 'faq.a2': 'PSP版 Monster Hunter Freedom Unite の欧州版（ULES01213）と北米版（ULUS10391）、バージョン1.01です。両方を追加して、ライブラリで遊ぶ方を選べます。日本版（『モンスターハンターポータブル 2nd G』）は予定しています。',
    'faq.q3': 'エミュレーターですか？', 'faq.a3': 'いいえ。ゲームのプログラムをPC向けのネイティブコードに再コンパイルし、本体のシステム機能を再実装しています。通常のWindowsプログラムとして動きます。',
    'faq.q4': '合法ですか？', 'faq.a4': 'MHForeverにはCapcomやSonyのコードやデータは含まれず、ご自身のコピーを使う前提です。CapcomおよびSonyとは無関係です。これは法的助言ではなく、法律は国によって異なります。',
    'faq.q5': 'フレンドとオンラインで遊べますか？', 'faq.a5': 'はい、0.6から試験的に遊べます。ランチャーで Settings → Online を開いてサーバーを選ぶと、ゲーム内の集会所でほかのプレイヤーと会ってクエストに行けます。PPSSPPのプレイヤーとも一緒に遊べます。サーバーの公開ステータスページには名前とゲームが表示されますが、ほかのプレイヤーにあなたのアドレスは見えません。フレンドやコード付きのプライベートルームは0.7で予定しています。',
    'faq.q6': 'LinuxやSteam Deckで動きますか？', 'faq.a6': 'Linuxは動きます。0.4.1からWindows版と並んでLinux版を配布しています（WebKitGTK 4.1とGTK 3が必要で、Ubuntu 24.04でビルドしているため、非常に古いディストリビューションでは動かない場合があります）。Steam Deckはまだ試していません。報告を歓迎します。',
    'faq.q7': '不具合はどう報告すればいいですか？', 'faq.a7': 'バージョンと状況を添えて、GitHubでissueを開くか、Discordで質問してください。報告をお待ちしています。',
    'faq.q8': 'アップデートするとセーブデータは消えますか？', 'faq.a8': 'いいえ。セーブデータは Documents\\MHForever\\saves に、設定は %APPDATA%\\MHForever に保存され、プログラムのフォルダの外にあるため、新しいバージョンを展開しても影響を受けません。プログラムの横にあった古いバージョンのセーブデータは、初めて「Play」を押したときにコピーされます。',
    'faq.q9': '実機PSPやPPSSPPのセーブデータは使えますか？', 'faq.a9': 'はい、お手持ちと同じバージョンのゲームのものなら使えます（欧州版のセーブは欧州版、北米版のセーブは北米版で）。ランチャーのゲーム設定（Game settings）の Saves で、セーブデータのあるフォルダーを選んでください。いまのセーブデータはバックアップフォルダーに残ります。MHForeverのセーブデータはPPSSPPでも読み込めます。実機PSPで読み込めるかどうかは保証できません。',
    'faq.q10': '選べるフレームレートは？', 'faq.a10': 'オリジナルは30fpsです。ランチャーのゲーム設定（Game settings）で、30の倍数の60〜180fpsを選べます。ゲーム自体は30のままで、間のフレームを追加で描きます。試験的な機能で、負荷の高い場面では最高レートを維持できないことがあります。',
    'faq.q11': 'プレイ中に画質や音量を変えられますか？', 'faq.a11': 'はい。ゲーム中にEscを押すと、ゲームを止めずにメニューが開き、音量、解像度（最大10倍）、フレームレート（30〜180）、フルスクリーンを再起動なしで変更できます。',
    'end.discord': 'Discordに参加',
    'faq.q12': 'コミュニティはありますか？', 'faq.a12': 'はい、ヘルプ、不具合の報告、提案、リリース情報のためのDiscordサーバーがあります。ゲームはご自身のコピーをご用意ください。海賊版の話題は禁止です。',
    'end.h': '狩りの準備はできましたか？', 'end.p': 'ランチャーをダウンロードし、お手持ちのコピーを追加して、プレイを押すだけです。',
    'foot.legal': 'MHForeverは非公式のファンプロジェクトです。CapcomおよびSonyとは提携・承認・後援の関係にありません。Monster Hunterは各権利者の商標であり、このプロジェクトが対応するゲームを説明する目的でのみ使用しています。'
  };

  var DICT = { es: ES, ja: JA };
  var isLinux = /Linux|X11/i.test(navigator.userAgent) && !/Android/i.test(navigator.userAgent);
  /* Both downloads sit side by side; on Linux the Linux one is the highlighted button. */
  if (isLinux) {
    Array.prototype.forEach.call(document.querySelectorAll('.dl-win, .dl-lin'), function (a) {
      var primary = a.classList.contains('dl-lin');
      a.classList.toggle('primary', primary);
      a.classList.toggle('ghost', !primary);
    });
  }
  var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));
  var EN = {};
  nodes.forEach(function (n) { EN[n.getAttribute('data-i18n')] = n.textContent; });
  EN['live.altw'] = 'Windows download';
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
      var assets = rel.assets || [];
      var win = assets.filter(function (a) { return /\.zip$/i.test(a.name); })[0];
      var lin = assets.filter(function (a) { return /\.tar\.gz$/i.test(a.name); })[0];
      var asset = (isLinux && lin) || win || lin;
      var alt = asset === lin ? win : lin;
      if (asset) {
        Array.prototype.forEach.call(document.querySelectorAll('.dl-latest'), function (a) { a.href = asset.browser_download_url; });
        $('liveSize').textContent = fmtSize(asset.size);
      }
      if (win) Array.prototype.forEach.call(document.querySelectorAll('.dl-win'), function (a) { a.href = win.browser_download_url; });
      if (lin) Array.prototype.forEach.call(document.querySelectorAll('.dl-lin'), function (a) { a.href = lin.browser_download_url; });
      var altEl = $('liveAlt');
      if (altEl) {
        altEl.style.display = alt ? '' : 'none';
        if (alt) {
          altEl.href = alt.browser_download_url;
          var k = alt === lin ? 'live.altl' : 'live.altw';
          altEl.setAttribute('data-i18n', k);
          altEl.textContent = (DICT[lang] && DICT[lang][k]) || (alt === lin ? 'Linux download' : 'Windows download');
        }
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
