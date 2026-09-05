const html = String.raw`<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Topview-inspired AI video agent homepage clone.">
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='9' fill='%23743dff'/%3E%3Cpath d='M9 8h14v4h-5v12h-4V12H9z' fill='white'/%3E%3C/svg%3E">
  <title>Topview — Create Any Video, Just Tell Your Agent</title>
  <script>
    tailwind = {
      config: {
        theme: {
          extend: {
            fontFamily: { sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"] }
          }
        }
      }
    };
  </script>
  <script src="https://cdn.tailwindcss.com/3.4.17"></script>
  <style>
    :root {
      --ink: #17131f;
      --muted: #716a7e;
      --line: #e9e6ef;
      --soft: #f7f5fb;
      --purple: #743dff;
      --purple-2: #a653fa;
      --deep: #1c1235;
      --green: #d8ff67;
      --shadow: 0 18px 55px rgba(39, 20, 76, .12);
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { margin: 0; color: var(--ink); background: #fff; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; overflow-x: hidden; }
    button, input, textarea { font: inherit; }
    button, a { -webkit-tap-highlight-color: transparent; }
    a { color: inherit; text-decoration: none; }
    .shell { width: min(1240px, calc(100% - 48px)); margin: 0 auto; }
    .site-header { position: sticky; top: 0; z-index: 50; border-bottom: 1px solid rgba(231, 227, 239, .85); background: rgba(255, 255, 255, .88); backdrop-filter: blur(18px); }
    .nav-wrap { height: 76px; display: flex; align-items: center; gap: 30px; }
    .brand { display: inline-flex; align-items: center; gap: 10px; font-weight: 800; letter-spacing: -.04em; font-size: 20px; white-space: nowrap; }
    .brand-mark { width: 31px; height: 31px; border-radius: 10px; display: grid; place-items: center; color: #fff; font-size: 18px; font-weight: 900; background: linear-gradient(135deg, #6740ff, #bd5bfa); box-shadow: 0 6px 16px rgba(119, 61, 255, .3); }
    .desktop-nav { display: flex; align-items: center; gap: 5px; flex: 1; }
    .nav-item { position: relative; }
    .nav-button, .nav-link { border: 0; background: transparent; color: #514a5d; cursor: pointer; padding: 9px 11px; border-radius: 10px; font-weight: 600; font-size: 13px; transition: background .2s, color .2s; }
    .nav-button:hover, .nav-link:hover, .nav-item.open > .nav-button { color: var(--purple); background: #f5f1ff; }
    .nav-button span { display: inline-block; margin-left: 5px; font-size: 11px; transition: transform .2s; }
    .nav-item.open .nav-button span { transform: rotate(180deg); }
    .mega-menu { position: absolute; top: 49px; left: 0; width: 510px; padding: 18px; border: 1px solid var(--line); border-radius: 20px; background: rgba(255, 255, 255, .98); box-shadow: var(--shadow); opacity: 0; visibility: hidden; transform: translateY(8px); transition: opacity .2s, transform .2s, visibility .2s; }
    .nav-item.open .mega-menu { opacity: 1; visibility: visible; transform: translateY(0); }
    .mega-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px; }
    .mega-link { display: block; padding: 12px; border-radius: 12px; }
    .mega-link:hover { background: #f7f4ff; }
    .mega-kicker { color: var(--purple); font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .08em; }
    .mega-link strong { display: block; margin: 4px 0; font-size: 13px; }
    .mega-link small { color: var(--muted); font-size: 11px; line-height: 1.45; }
    .nav-actions { display: flex; align-items: center; gap: 9px; }
    .language { position: relative; }
    .language button { border: 1px solid var(--line); background: #fff; border-radius: 10px; padding: 9px 12px; cursor: pointer; color: #514a5d; }
    .language-menu { position: absolute; top: 44px; right: 0; width: 130px; padding: 7px; border: 1px solid var(--line); border-radius: 12px; background: #fff; box-shadow: var(--shadow); display: none; }
    .language.open .language-menu { display: block; }
    .language-menu button { border: 0; display: block; width: 100%; padding: 9px; text-align: left; border-radius: 8px; }
    .language-menu button:hover { background: #f7f4ff; }
    .outline-button, .solid-button, .text-button { cursor: pointer; border-radius: 11px; font-weight: 700; font-size: 13px; transition: transform .2s, box-shadow .2s, background .2s; }
    .outline-button { border: 1px solid var(--line); padding: 10px 15px; background: #fff; }
    .solid-button { border: 1px solid var(--purple); padding: 10px 16px; color: #fff; background: var(--purple); box-shadow: 0 7px 18px rgba(116, 61, 255, .22); }
    .text-button { border: 0; background: transparent; padding: 10px 5px; color: #5c5666; }
    .outline-button:hover, .solid-button:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(65, 33, 127, .17); }
    .mobile-menu-button { display: none; margin-left: auto; border: 1px solid var(--line); background: #fff; border-radius: 10px; padding: 9px 11px; font-size: 19px; cursor: pointer; }
    .mobile-panel { display: none; padding: 0 0 18px; }
    .mobile-panel.open { display: block; }
    .mobile-panel a, .mobile-panel button { display: block; width: 100%; padding: 12px 4px; text-align: left; border: 0; background: transparent; color: #514a5d; font-weight: 700; }
    .mobile-panel [hidden] { display: none; }
    .mobile-panel .mobile-sub { padding-left: 16px; font-weight: 500; color: var(--muted); }
    .announcement-bar { padding: 12px 0; background: #1b1135; color: #fff; font-size: 12px; }
    .announcement-inner { display: flex; justify-content: center; align-items: center; gap: 12px; }
    .announcement-inner strong { color: var(--green); }
    .announcement-inner a { color: #fff; opacity: .84; text-decoration: underline; }
    .hero { position: relative; isolation: isolate; overflow: hidden; padding: 76px 0 92px; color: #fff; background: radial-gradient(circle at 80% 16%, rgba(242, 146, 255, .54), transparent 28%), radial-gradient(circle at 20% 4%, rgba(126, 93, 255, .62), transparent 32%), linear-gradient(123deg, #331374 0%, #6a31d6 46%, #9f4de8 100%); }
    .hero:before, .hero:after { content: ""; position: absolute; border-radius: 999px; pointer-events: none; z-index: -1; filter: blur(2px); }
    .hero:before { width: 620px; height: 620px; right: -190px; bottom: -380px; background: rgba(255, 193, 252, .2); }
    .hero:after { width: 420px; height: 420px; left: -280px; top: 240px; border: 1px solid rgba(255,255,255,.17); }
    .hero-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 62px; align-items: center; }
    .hero-copy { max-width: 620px; }
    .promo-pill { display: inline-flex; align-items: center; gap: 10px; border: 1px solid rgba(255,255,255,.26); background: rgba(255,255,255,.13); border-radius: 999px; padding: 8px 13px; color: #fff; font-size: 12px; }
    .promo-pill b { color: var(--green); }
    .sparkle { color: #e5d6ff; font-size: 16px; }
    .hero h1 { max-width: 670px; margin: 24px 0 20px; font-size: clamp(44px, 5.1vw, 75px); line-height: .98; letter-spacing: -.065em; font-weight: 800; }
    .hero-copy > p { max-width: 570px; color: rgba(255,255,255,.78); line-height: 1.7; font-size: 16px; }
    .hero-ctas { display: flex; flex-wrap: wrap; gap: 11px; margin-top: 31px; }
    .hero-ctas .solid-button { color: var(--ink); background: var(--green); border-color: var(--green); }
    .hero-ctas .outline-button { color: #fff; background: rgba(255,255,255,.1); border-color: rgba(255,255,255,.35); }
    .hero-note { display: flex; flex-wrap: wrap; gap: 15px; margin-top: 29px; color: rgba(255,255,255,.62); font-size: 12px; }
    .hero-note span:before { content: "✓"; color: var(--green); font-weight: 900; margin-right: 6px; }
    .composer { position: relative; border: 1px solid rgba(255,255,255,.28); border-radius: 23px; padding: 14px; background: rgba(20, 8, 51, .64); box-shadow: 0 28px 70px rgba(20, 5, 54, .32); backdrop-filter: blur(20px); }
    .composer-top { display: flex; align-items: center; gap: 5px; padding: 3px 3px 13px; }
    .composer-tab { border: 0; color: rgba(255,255,255,.56); background: transparent; padding: 9px 12px; border-radius: 9px; cursor: pointer; font-size: 12px; font-weight: 700; }
    .composer-tab.active { color: #fff; background: rgba(255,255,255,.14); }
    .composer-status { margin-left: auto; color: var(--green); font-size: 10px; font-weight: 800; display: flex; align-items: center; gap: 6px; }
    .composer-status:before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--green); box-shadow: 0 0 10px var(--green); }
    .composer-board { overflow: hidden; min-height: 270px; border-radius: 16px; position: relative; background: #2a1952; }
    .composer-collage { display: grid; grid-template-columns: 1.2fr .8fr; gap: 8px; height: 270px; padding: 8px; }
    .composer-collage .collage-main { grid-row: span 2; }
    .collage-image { position: relative; min-height: 0; border-radius: 12px; overflow: hidden; background-size: cover; background-position: center; }
    .collage-image:after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 40%, rgba(20,6,45,.74)); }
    .collage-image span { position: absolute; left: 12px; bottom: 10px; z-index: 1; color: #fff; font-size: 11px; font-weight: 700; }
    .composer-overlay { position: absolute; left: 19px; top: 18px; color: #fff; z-index: 2; }
    .composer-overlay small { color: rgba(255,255,255,.68); font-size: 10px; text-transform: uppercase; letter-spacing: .12em; }
    .composer-overlay h3 { margin: 4px 0 0; font-size: 22px; letter-spacing: -.04em; }
    .composer-form { margin-top: 13px; border: 1px solid rgba(255,255,255,.16); border-radius: 16px; background: rgba(255,255,255,.08); padding: 14px; }
    .composer-form textarea { width: 100%; min-height: 62px; resize: vertical; color: #fff; border: 0; outline: none; background: transparent; font-size: 14px; line-height: 1.5; }
    .composer-form textarea::placeholder { color: rgba(255,255,255,.56); }
    .composer-tools { display: flex; align-items: center; gap: 8px; margin-top: 10px; }
    .tool-chip { border: 1px solid rgba(255,255,255,.17); border-radius: 8px; color: rgba(255,255,255,.78); background: rgba(255,255,255,.07); padding: 7px 9px; cursor: pointer; font-size: 11px; }
    .tool-chip:hover, .tool-chip.selected { color: #fff; background: rgba(255,255,255,.16); }
    .model-select { margin-left: auto; position: relative; }
    .model-select button { border: 0; color: #fff; background: transparent; cursor: pointer; font-size: 11px; }
    .model-menu { position: absolute; right: 0; bottom: 34px; width: 160px; padding: 6px; background: #21113d; border: 1px solid rgba(255,255,255,.2); border-radius: 12px; box-shadow: 0 14px 35px rgba(0,0,0,.28); display: none; z-index: 5; }
    .model-select.open .model-menu { display: block; }
    .model-menu button { display: block; width: 100%; border-radius: 8px; padding: 8px; text-align: left; }
    .model-menu button:hover { background: rgba(255,255,255,.12); }
    .composer-submit { width: 34px; height: 34px; border: 0; border-radius: 10px; color: #28103c; background: var(--green); cursor: pointer; font-weight: 900; }
    .composer-feedback { min-height: 18px; padding-top: 8px; color: rgba(255,255,255,.66); font-size: 11px; }
    .section { padding: 112px 0; }
    .section.soft { background: var(--soft); }
    .section.dark { color: #fff; background: var(--deep); }
    .eyebrow { color: var(--purple); font-size: 11px; font-weight: 900; letter-spacing: .15em; text-transform: uppercase; }
    .dark .eyebrow { color: var(--green); }
    .section-heading { max-width: 780px; margin-bottom: 44px; }
    .section-heading h2 { margin: 12px 0 14px; font-size: clamp(33px, 4.5vw, 58px); line-height: 1.03; letter-spacing: -.06em; }
    .section-heading p { max-width: 640px; margin: 0; color: var(--muted); line-height: 1.7; }
    .dark .section-heading p { color: rgba(255,255,255,.62); }
    .split-heading { display: flex; align-items: end; justify-content: space-between; gap: 28px; }
    .split-heading .section-heading { margin-bottom: 0; }
    .arrow-link { display: inline-flex; align-items: center; gap: 8px; color: var(--purple); font-size: 13px; font-weight: 800; white-space: nowrap; }
    .arrow-link span { font-size: 20px; transition: transform .2s; }
    .arrow-link:hover span { transform: translateX(4px); }
    .product-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
    .product-card { position: relative; overflow: hidden; min-height: 395px; padding: 25px; border-radius: 22px; color: #fff; background: linear-gradient(160deg, #22113e, #5a2aac); box-shadow: 0 15px 35px rgba(32, 15, 70, .1); transition: transform .35s, box-shadow .35s; }
    .product-card:nth-child(2) { background: linear-gradient(160deg, #41206f, #9a45d9); }
    .product-card:nth-child(3) { background: linear-gradient(160deg, #171b45, #4d4bb8); }
    .product-card:hover { transform: translateY(-8px); box-shadow: 0 27px 52px rgba(51, 20, 105, .25); }
    .product-card:after { content: ""; position: absolute; width: 230px; height: 230px; right: -80px; bottom: -85px; border: 1px solid rgba(255,255,255,.24); border-radius: 50%; box-shadow: 0 0 0 30px rgba(255,255,255,.05), 0 0 0 60px rgba(255,255,255,.04); }
    .product-icon { width: 44px; height: 44px; display: grid; place-items: center; border-radius: 13px; color: var(--ink); background: var(--green); font-size: 20px; font-weight: 900; }
    .product-card h3 { margin: 38px 0 12px; font-size: 28px; letter-spacing: -.05em; }
    .product-card p { max-width: 295px; color: rgba(255,255,255,.7); line-height: 1.65; font-size: 13px; }
    .product-card .arrow-link { position: absolute; bottom: 24px; left: 25px; color: #fff; }
    .skill-row { display: flex; gap: 10px; overflow-x: auto; padding: 4px 0 12px; scrollbar-width: thin; }
    .skill-row::-webkit-scrollbar { height: 5px; }
    .skill-row::-webkit-scrollbar-thumb { background: #d5c7fc; border-radius: 99px; }
    .skill-pill { flex: 0 0 auto; display: flex; align-items: center; gap: 9px; border: 1px solid var(--line); border-radius: 14px; background: #fff; padding: 12px 15px; color: #4a4353; cursor: pointer; transition: transform .2s, border-color .2s, box-shadow .2s; }
    .skill-pill:hover { transform: translateY(-4px); border-color: #cbb7ff; box-shadow: 0 10px 23px rgba(85, 46, 168, .1); }
    .skill-dot { width: 25px; height: 25px; border-radius: 8px; display: grid; place-items: center; color: #fff; background: linear-gradient(135deg, #6d38ff, #bf5afb); font-size: 11px; font-weight: 900; }
    .skill-pill strong { font-size: 12px; }
    .skill-pill small { display: block; color: var(--muted); font-size: 10px; margin-top: 2px; }
    .models-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
    .model-card { position: relative; min-height: 230px; padding: 20px; border-radius: 19px; overflow: hidden; color: #fff; background: #20133b; cursor: pointer; transition: transform .3s, box-shadow .3s; }
    .model-card:nth-child(2) { background: #36205b; }
    .model-card:nth-child(3) { background: #5a277c; }
    .model-card:nth-child(4) { background: #222b62; }
    .model-card:hover, .model-card.selected { transform: translateY(-6px); box-shadow: 0 20px 35px rgba(39, 18, 86, .2); }
    .model-card.selected { outline: 2px solid var(--green); }
    .model-card:before { content: ""; position: absolute; width: 190px; height: 190px; right: -58px; top: 45px; border: 1px solid rgba(255,255,255,.2); border-radius: 50%; box-shadow: 0 0 0 28px rgba(255,255,255,.05), 0 0 0 58px rgba(255,255,255,.04); }
    .model-badge { display: inline-block; padding: 5px 7px; border-radius: 7px; color: var(--green); background: rgba(216,255,103,.13); font-size: 9px; font-weight: 900; letter-spacing: .07em; }
    .model-card h3 { margin: 33px 0 8px; font-size: 22px; letter-spacing: -.05em; }
    .model-card p { max-width: 200px; color: rgba(255,255,255,.65); font-size: 12px; line-height: 1.55; }
    .model-card .model-arrow { position: absolute; top: 20px; right: 20px; color: rgba(255,255,255,.64); font-size: 23px; }
    .cases-section { background: #fcfbff; }
    .filter-row { display: flex; flex-wrap: wrap; gap: 8px; margin: 0 0 28px; }
    .filter-button { border: 1px solid var(--line); border-radius: 999px; padding: 9px 13px; background: #fff; color: #665e70; font-size: 12px; cursor: pointer; transition: color .2s, background .2s, border-color .2s; }
    .filter-button.active, .filter-button:hover { color: #fff; border-color: var(--purple); background: var(--purple); }
    .media-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; }
    .media-card { overflow: hidden; border: 1px solid var(--line); border-radius: 17px; background: #fff; box-shadow: 0 7px 25px rgba(33, 18, 65, .05); transition: transform .3s, box-shadow .3s, opacity .25s; }
    .media-card:hover { transform: translateY(-7px); box-shadow: 0 22px 38px rgba(51, 27, 106, .17); }
    .media-card.hidden-card { display: none; }
    .media-visual { position: relative; aspect-ratio: 1.25 / 1; overflow: hidden; background: #24163e; }
    .media-visual video { width: 100%; height: 100%; display: block; object-fit: cover; transition: transform .55s, filter .4s; }
    .media-card:hover video { transform: scale(1.07); filter: saturate(1.12); }
    .media-overlay { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; pointer-events: none; background: linear-gradient(180deg, rgba(15,5,35,.04), rgba(15,5,35,.44)); }
    .play-button { width: 42px; height: 42px; display: grid; place-items: center; border: 1px solid rgba(255,255,255,.5); border-radius: 50%; color: #fff; background: rgba(26,10,57,.43); backdrop-filter: blur(5px); cursor: pointer; pointer-events: auto; transition: transform .2s, background .2s; }
    .play-button:hover { transform: scale(1.1); background: rgba(116,61,255,.82); }
    .media-card.playing .play-button { background: var(--green); color: var(--ink); }
    .media-card.playing .media-visual:after { content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 3px; background: linear-gradient(90deg, var(--green), #fff, var(--purple)); animation: progress 2.8s linear infinite; }
    .media-tag { position: absolute; top: 12px; left: 12px; padding: 5px 7px; border-radius: 7px; color: #fff; background: rgba(25,12,48,.56); font-size: 9px; font-weight: 900; letter-spacing: .08em; text-transform: uppercase; }
    .media-content { padding: 14px 15px 16px; }
    .media-content h3 { margin: 0 0 7px; font-size: 14px; letter-spacing: -.02em; }
    .media-content p { min-height: 36px; margin: 0; color: var(--muted); font-size: 11px; line-height: 1.55; }
    .agents-grid { display: grid; grid-template-columns: 1.1fr .9fr; gap: 18px; }
    .agent-feature { min-height: 500px; padding: 28px; position: relative; overflow: hidden; border-radius: 22px; color: #fff; background: linear-gradient(145deg, #24123e, #6a35bf); }
    .agent-feature h3 { max-width: 460px; margin: 15px 0 11px; font-size: 31px; line-height: 1.04; letter-spacing: -.055em; }
    .agent-feature p { max-width: 390px; color: rgba(255,255,255,.68); line-height: 1.65; font-size: 13px; }
    .agent-feature img { position: absolute; width: 70%; right: -7%; bottom: -10%; border: 6px solid rgba(255,255,255,.15); border-radius: 18px; transform: rotate(-5deg); box-shadow: 0 20px 45px rgba(0,0,0,.3); }
    .agent-stack { display: grid; grid-template-rows: repeat(3, 1fr); gap: 18px; }
    .agent-card { position: relative; overflow: hidden; min-height: 155px; padding: 24px; border-radius: 20px; border: 1px solid var(--line); background: #fff; transition: transform .3s, box-shadow .3s; }
    .agent-card:hover { transform: translateX(6px); box-shadow: 0 17px 32px rgba(39,20,78,.1); }
    .agent-card:after { content: ""; position: absolute; width: 120px; height: 120px; right: -40px; bottom: -50px; border: 1px solid #e4dafa; border-radius: 50%; }
    .agent-card .mini-number { color: var(--purple); font-size: 11px; font-weight: 900; }
    .agent-card h3 { margin: 14px 0 7px; font-size: 18px; letter-spacing: -.04em; }
    .agent-card p { max-width: 330px; margin: 0; color: var(--muted); font-size: 12px; line-height: 1.55; }
    .workflow-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; }
    .workflow-card { min-height: 240px; padding: 23px; border: 1px solid rgba(255,255,255,.13); border-radius: 18px; background: rgba(255,255,255,.065); transition: background .25s, transform .25s; }
    .workflow-card:hover { transform: translateY(-5px); background: rgba(255,255,255,.11); }
    .workflow-card .workflow-icon { font-size: 28px; color: var(--green); }
    .workflow-card h3 { margin: 33px 0 10px; font-size: 20px; letter-spacing: -.04em; }
    .workflow-card p { margin: 0; color: rgba(255,255,255,.62); line-height: 1.6; font-size: 12px; }
    .stat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 42px; }
    .stat-card { border-radius: 17px; padding: 24px; background: #f4f0ff; }
    .stat-card strong { display: block; color: var(--purple); font-size: 42px; letter-spacing: -.07em; }
    .stat-card p { margin: 9px 0 0; color: var(--muted); line-height: 1.5; font-size: 12px; }
    .testimonial { margin-top: 45px; display: grid; grid-template-columns: 1fr .55fr; gap: 30px; padding: 32px; border-radius: 22px; background: #f6f3ff; }
    .testimonial blockquote { margin: 0; font-size: clamp(21px, 2.5vw, 33px); line-height: 1.2; letter-spacing: -.05em; }
    .testimonial cite { display: block; margin-top: 22px; color: var(--muted); font-size: 12px; font-style: normal; }
    .testimonial-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; align-items: center; }
    .testimonial-stats strong { color: var(--purple); font-size: 27px; }
    .testimonial-stats span { display: block; color: var(--muted); font-size: 10px; line-height: 1.45; }
    .team-section { background: #fbf9ff; }
    .team-grid { display: grid; grid-template-columns: .82fr 1.18fr; gap: 22px; align-items: stretch; }
    .team-copy { padding: 34px; border-radius: 22px; color: #fff; background: linear-gradient(145deg, #24123e, #7337ca); }
    .team-copy h2 { max-width: 520px; }
    .team-copy p { color: rgba(255,255,255,.7); line-height: 1.7; font-size: 13px; }
    .team-visual { position: relative; min-height: 410px; overflow: hidden; border-radius: 22px; background: #eee8ff; }
    .team-visual img { width: 100%; height: 100%; display: block; object-fit: cover; opacity: .9; }
    .team-visual:after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 30%, rgba(31,14,59,.62)); }
    .team-visual strong { position: absolute; left: 26px; bottom: 25px; z-index: 1; color: #fff; font-size: 23px; letter-spacing: -.04em; }
    .team-benefits { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 18px; }
    .team-benefit { padding: 19px; border-radius: 16px; border: 1px solid var(--line); background: #fff; }
    .team-benefit strong { display: block; color: var(--purple); font-size: 13px; }
    .team-benefit p { margin: 9px 0 0; color: var(--muted); font-size: 11px; line-height: 1.55; }
    .usecase-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; }
    .usecase-card { position: relative; min-height: 235px; padding: 23px; overflow: hidden; border: 1px solid var(--line); border-radius: 18px; background: #fff; transition: transform .3s, box-shadow .3s; }
    .usecase-card:hover { transform: translateY(-6px); box-shadow: 0 18px 32px rgba(39,20,78,.1); }
    .usecase-card:after { content: ""; position: absolute; width: 150px; height: 150px; right: -52px; bottom: -62px; border: 1px solid #dfd5fb; border-radius: 50%; box-shadow: 0 0 0 24px rgba(116,61,255,.04); }
    .usecase-card .usecase-index { color: var(--purple); font-size: 11px; font-weight: 900; }
    .usecase-card h3 { margin: 26px 0 8px; font-size: 18px; letter-spacing: -.04em; }
    .usecase-card p { margin: 0; color: var(--muted); font-size: 12px; line-height: 1.6; }
    .comparison-wrap { overflow-x: auto; border: 1px solid rgba(255,255,255,.14); border-radius: 20px; }
    .comparison-table { width: 100%; min-width: 760px; border-collapse: collapse; text-align: left; }
    .comparison-table th, .comparison-table td { padding: 17px 18px; border-bottom: 1px solid rgba(255,255,255,.11); color: rgba(255,255,255,.68); font-size: 12px; line-height: 1.5; vertical-align: top; }
    .comparison-table th { color: #fff; background: rgba(255,255,255,.07); font-weight: 800; }
    .comparison-table tr:last-child td { border-bottom: 0; }
    .comparison-table td:first-child { color: #fff; font-weight: 800; }
    .comparison-table td:last-child { color: var(--green); font-weight: 700; }
    .cta-section { position: relative; overflow: hidden; text-align: center; padding: 120px 0; background: linear-gradient(125deg, #ece3ff, #fff 49%, #e9ddff); }
    .cta-section:before { content: ""; position: absolute; width: 470px; height: 470px; left: 50%; top: 55%; transform: translate(-50%, -50%); border: 1px solid rgba(116,61,255,.13); border-radius: 50%; box-shadow: 0 0 0 55px rgba(116,61,255,.06), 0 0 0 110px rgba(116,61,255,.04); }
    .cta-section .shell { position: relative; z-index: 1; }
    .cta-section h2 { max-width: 720px; margin: 12px auto 20px; font-size: clamp(38px, 5vw, 65px); line-height: 1; letter-spacing: -.065em; }
    .cta-section p { max-width: 550px; margin: 0 auto; color: var(--muted); line-height: 1.7; font-size: 14px; }
    .cta-section .solid-button { margin-top: 28px; }
    .faq-grid { max-width: 840px; margin: 0 auto; }
    .faq-item { border-top: 1px solid var(--line); }
    .faq-item:last-child { border-bottom: 1px solid var(--line); }
    .faq-question { width: 100%; display: flex; justify-content: space-between; gap: 22px; padding: 22px 0; border: 0; background: transparent; color: var(--ink); cursor: pointer; text-align: left; font-size: 15px; font-weight: 800; }
    .faq-question span { color: var(--purple); font-size: 22px; line-height: 1; transition: transform .2s; }
    .faq-answer { max-height: 0; overflow: hidden; color: var(--muted); font-size: 13px; line-height: 1.7; transition: max-height .3s, padding .3s; }
    .faq-item.open .faq-answer { max-height: 160px; padding: 0 45px 21px 0; }
    .faq-item.open .faq-question span { transform: rotate(45deg); }
    footer { color: rgba(255,255,255,.67); background: #171024; padding: 70px 0 28px; }
    .footer-grid { display: grid; grid-template-columns: 1.25fr repeat(4, 1fr); gap: 28px; }
    footer .brand { color: #fff; }
    .footer-intro p { max-width: 230px; font-size: 12px; line-height: 1.7; }
    .footer-col h3 { margin: 0 0 14px; color: #fff; font-size: 12px; }
    .footer-col a { display: block; margin: 0 0 10px; font-size: 11px; transition: color .2s; }
    .footer-col a:hover { color: var(--green); }
    .footer-bottom { display: flex; justify-content: space-between; gap: 20px; margin-top: 56px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,.12); font-size: 11px; }
    .toast { position: fixed; right: 22px; bottom: 22px; z-index: 80; max-width: 320px; transform: translateY(20px); opacity: 0; pointer-events: none; padding: 13px 16px; border-radius: 12px; color: #fff; background: #201333; box-shadow: 0 16px 40px rgba(20,8,45,.25); font-size: 12px; transition: opacity .25s, transform .25s; }
    .toast.show { transform: translateY(0); opacity: 1; }
    .modal-backdrop { position: fixed; inset: 0; z-index: 70; display: none; align-items: center; justify-content: center; padding: 20px; background: rgba(18,8,36,.52); backdrop-filter: blur(8px); }
    .modal-backdrop.open { display: flex; }
    .modal { width: min(540px, 100%); position: relative; padding: 29px; border-radius: 22px; color: #fff; background: linear-gradient(145deg, #271143, #6d36bd); box-shadow: 0 30px 70px rgba(18,6,44,.35); }
    .modal h2 { margin: 0 0 12px; font-size: 28px; letter-spacing: -.05em; }
    .modal p { color: rgba(255,255,255,.72); line-height: 1.65; font-size: 13px; }
    .modal-close { position: absolute; top: 15px; right: 17px; border: 0; color: #fff; background: transparent; font-size: 22px; cursor: pointer; }
    .modal-list { display: grid; gap: 8px; margin-top: 22px; }
    .modal-list button { border: 1px solid rgba(255,255,255,.17); border-radius: 10px; padding: 11px; color: #fff; background: rgba(255,255,255,.08); cursor: pointer; text-align: left; }
    .modal-list button:hover { background: rgba(255,255,255,.16); }
    [data-reveal] { opacity: 0; transform: translateY(22px); transition: opacity .7s ease, transform .7s ease; }
    [data-reveal].revealed { opacity: 1; transform: none; }
    @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
    @keyframes progress { from { transform: translateX(-100%); } to { transform: translateX(100%); } }
    @media (max-width: 1050px) {
      .desktop-nav, .nav-actions { display: none; }
      .mobile-menu-button { display: block; }
      .hero-grid { grid-template-columns: 1fr; gap: 40px; }
      .hero-copy { max-width: 760px; }
      .composer { max-width: 760px; }
      .media-grid { grid-template-columns: repeat(3, 1fr); }
      .footer-grid { grid-template-columns: 1.4fr repeat(3, 1fr); }
      .footer-col:last-child { display: none; }
    }
    @media (max-width: 760px) {
      .shell { width: min(100% - 30px, 620px); }
      .nav-wrap { height: 66px; }
      .announcement-inner { text-align: center; flex-wrap: wrap; gap: 4px 10px; line-height: 1.5; }
      .hero { padding: 55px 0 62px; }
      .hero h1 { font-size: clamp(41px, 12vw, 60px); }
      .hero-copy > p { font-size: 14px; }
      .hero-note { display: grid; gap: 9px; }
      .composer { padding: 9px; border-radius: 18px; }
      .composer-top { overflow-x: auto; }
      .composer-tab { flex: 0 0 auto; }
      .composer-status { display: none; }
      .composer-collage, .composer-board { height: 220px; min-height: 220px; }
      .composer-overlay h3 { font-size: 18px; }
      .section { padding: 76px 0; }
      .split-heading { display: block; }
      .split-heading .arrow-link { margin-top: 16px; }
      .product-grid, .models-grid, .workflow-grid, .stat-grid { grid-template-columns: 1fr; }
      .product-card { min-height: 330px; }
      .models-grid { gap: 12px; }
      .model-card { min-height: 190px; }
      .media-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
      .media-content { padding: 11px; }
      .media-content h3 { font-size: 12px; }
      .media-content p { font-size: 10px; }
      .agents-grid { grid-template-columns: 1fr; }
      .agent-feature { min-height: 410px; }
      .agent-feature h3 { font-size: 27px; }
      .agent-stack { grid-template-rows: none; }
      .testimonial { grid-template-columns: 1fr; padding: 23px; }
      .testimonial-stats { padding-top: 13px; }
      .team-grid { grid-template-columns: 1fr; }
      .team-copy { padding: 25px; }
      .team-visual { min-height: 280px; }
      .team-benefits, .usecase-grid { grid-template-columns: 1fr; }
      .usecase-card { min-height: 190px; }
      .footer-grid { grid-template-columns: repeat(2, 1fr); gap: 30px 18px; }
      .footer-intro { grid-column: 1 / -1; }
      .footer-col:last-child { display: block; }
      .footer-bottom { display: block; line-height: 1.7; }
      .footer-bottom span { display: block; margin-top: 5px; }
    }
    @media (prefers-reduced-motion: reduce) {
      *, *:before, *:after { scroll-behavior: auto !important; animation-duration: .01ms !important; transition-duration: .01ms !important; }
    }
    .mobile-bottom-nav { display: none; }
    .announcement-bar.dismissed { display: none; }
    .promo-close { border: 1px solid rgba(255,255,255,.85); width: 24px; height: 24px; display: grid; place-items: center; border-radius: 50%; color: #fff; background: rgba(20,8,45,.22); cursor: pointer; font-size: 16px; line-height: 1; }
    @media (max-width: 1050px) {
      body { background: #0d0818; }
      .site-header { position: absolute; top: 58px; left: 0; right: 0; border-bottom: 0; background: transparent; }
      .nav-wrap { height: 78px; gap: 10px; }
      .brand { color: #fff; font-size: 19px; }
      .brand-mark { border: 1px solid rgba(255,255,255,.65); background: rgba(255,255,255,.12); box-shadow: none; }
      .nav-actions { display: flex; margin-left: auto; gap: 7px; }
      .nav-actions .text-button { display: none; }
      .nav-actions .language button { min-width: 56px; padding: 10px 11px; border-color: rgba(255,255,255,.16); color: #fff; background: rgba(255,255,255,.08); border-radius: 999px; font-size: 12px; }
      .nav-actions .language-menu { top: 48px; }
      .nav-actions .solid-button { padding: 10px 14px; border: 1px solid rgba(215,177,255,.45); color: #fff; background: linear-gradient(135deg, rgba(137,62,255,.82), rgba(93,36,181,.82)); border-radius: 999px; box-shadow: 0 10px 26px rgba(96,42,236,.25); font-size: 11px; }
      .mobile-menu-button { display: block; margin-left: 0; width: 44px; height: 44px; padding: 0; border-color: rgba(255,255,255,.16); color: #fff; background: rgba(255,255,255,.08); border-radius: 50%; line-height: 1; }
      .mobile-panel { position: absolute; top: 72px; left: 15px; right: 15px; width: auto; padding: 12px 18px 17px; border: 1px solid rgba(255,255,255,.14); border-radius: 20px; background: rgba(29,17,48,.98); box-shadow: 0 22px 48px rgba(0,0,0,.35); }
      .mobile-panel a, .mobile-panel button { color: rgba(255,255,255,.9); }
      .mobile-panel .mobile-sub { color: rgba(255,255,255,.62); }
      .announcement-bar { position: relative; z-index: 60; min-height: 58px; padding: 8px 38px 8px 15px; background: linear-gradient(90deg, #6130ff 0%, #8b2eff 52%, #6824f1 100%); color: #fff; }
      .announcement-inner { position: relative; gap: 7px 10px; min-height: 42px; flex-wrap: wrap; text-align: center; line-height: 1.15; font-size: 11px; }
      .announcement-inner span { width: 100%; }
      .announcement-inner strong { color: #fff36a; }
      .announcement-inner a { display: inline-flex; align-items: center; justify-content: center; padding: 4px 10px; border: 1px solid #151020; border-radius: 4px; color: #171021; background: #fff36a; font-weight: 800; text-decoration: none; }
      .announcement-inner .promo-caption { width: auto; color: rgba(255,255,255,.9); font-size: 10px; }
      .announcement-inner .promo-caption strong { color: #fff; }
      .announcement-inner .promo-close { position: absolute; top: 8px; right: -29px; }
      .hero { padding: 130px 0 52px; min-height: 900px; background: radial-gradient(circle at 50% 4%, rgba(112,44,234,.22), transparent 34%), radial-gradient(circle at 83% 27%, rgba(69,26,146,.19), transparent 38%), #0d0818; }
      .hero:before { width: 520px; height: 520px; right: -300px; bottom: 120px; background: rgba(110,43,232,.14); filter: blur(20px); }
      .hero:after { width: 360px; height: 360px; left: -270px; top: 330px; border-color: rgba(150,105,255,.09); }
      .hero-grid { grid-template-columns: 1fr; gap: 27px; text-align: center; }
      .hero-copy { max-width: 520px; margin: 0 auto; }
      .promo-pill { max-width: 100%; justify-content: center; padding: 8px 15px; border-color: rgba(159,76,255,.45); background: linear-gradient(100deg, rgba(119,39,255,.92), rgba(93,19,222,.92)); box-shadow: 0 10px 32px rgba(91,29,235,.32); font-size: 11px; white-space: nowrap; }
      .promo-pill b { color: #fff; }
      .hero h1 { max-width: 370px; margin: 26px auto 18px; font-size: clamp(39px, 11.3vw, 53px); line-height: .99; letter-spacing: -.065em; }
      .hero-copy > p { max-width: 340px; margin: 0 auto; color: rgba(219,207,236,.6); font-size: 14px; line-height: 1.62; }
      .hero-ctas, .hero-note { display: none; }
      .composer { max-width: 590px; margin: 5px auto 0; padding: 0; border: 1px solid rgba(255,255,255,.14); border-radius: 25px; background: rgba(31,24,42,.76); box-shadow: 0 28px 65px rgba(0,0,0,.38); text-align: left; }
      .composer-top { gap: 3px; overflow-x: auto; padding: 14px 14px 0; border-bottom: 1px solid rgba(255,255,255,.08); scrollbar-width: none; }
      .composer-top::-webkit-scrollbar { display: none; }
      .composer-tab { position: relative; padding: 11px 9px 14px; color: rgba(255,255,255,.62); font-size: 12px; white-space: nowrap; }
      .composer-tab.active { color: #fff; background: transparent; }
      .composer-tab.active:after { content: ""; position: absolute; left: 9px; right: 9px; bottom: -1px; height: 2px; border-radius: 4px; background: #c9a4ff; box-shadow: 0 0 12px rgba(201,164,255,.8); }
      .composer-board { display: none; }
      .composer-form { margin: 0; min-height: 355px; padding: 22px 20px 18px; border: 0; border-radius: 0 0 25px 25px; background: transparent; }
      .composer-form textarea { min-height: 148px; color: #fff; font-size: 15px; line-height: 1.55; }
      .composer-form textarea::placeholder { color: rgba(231,224,241,.46); }
      .composer-tools { gap: 10px; margin-top: 18px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,.07); }
      .tool-chip { width: 39px; height: 39px; padding: 0; border-radius: 50%; color: #d9b7ff; border-color: rgba(190,145,255,.22); background: rgba(120,72,188,.18); font-size: 0; }
      .tool-chip:first-child:before { content: "+"; font-size: 25px; font-weight: 300; }
      .tool-chip:nth-child(2) { display: none; }
      .model-select { margin-left: 0; flex: 1; }
      .model-select > button { width: 100%; padding: 11px 14px; border: 1px solid rgba(255,255,255,.12); border-radius: 12px; color: rgba(255,255,255,.85); background: rgba(255,255,255,.06); text-align: left; }
      .composer-submit { width: 42px; height: 42px; border-radius: 50%; color: #fff; background: linear-gradient(135deg,#6d21ff,#b158ff); box-shadow: 0 0 0 4px rgba(124,50,255,.2), 0 8px 20px rgba(94,30,237,.38); }
      .composer-feedback { min-height: 24px; padding-top: 11px; color: rgba(220,208,236,.48); font-size: 10px; }
      .mobile-bottom-nav { display: grid; grid-template-columns: repeat(5, 1fr); align-items: center; position: relative; margin: 0 10px 10px; min-height: 73px; padding: 8px 7px 5px; border: 1px solid rgba(255,255,255,.13); border-radius: 28px; background: rgba(34,27,46,.96); box-shadow: 0 14px 27px rgba(0,0,0,.25); }
      .mobile-bottom-nav button { display: grid; justify-items: center; gap: 4px; border: 0; color: rgba(255,255,255,.45); background: transparent; cursor: pointer; font-size: 21px; line-height: 1; }
      .mobile-bottom-nav button span { font-size: 9px; }
      .mobile-bottom-nav button.active { color: #d1a7ff; }
      .mobile-bottom-nav button.create { width: 54px; height: 54px; margin: -28px auto 0; border: 2px solid rgba(205,160,255,.82); border-radius: 50%; color: #fff; background: linear-gradient(145deg,#6c1dff,#a04bff); box-shadow: 0 0 0 6px rgba(117,43,255,.18), 0 9px 22px rgba(93,31,220,.45); }
      .mobile-bottom-nav button.create span { font-size: 8px; }
      .floating-app { display: block; }
    }
    @media (min-width: 1051px) {
      .announcement-inner .promo-close { display: none; }
    }
    @media (min-width: 761px) and (max-width: 1050px) {
      .nav-wrap { max-width: 650px; margin: 0 auto; }
      .hero { padding-top: 132px; min-height: 920px; }
      .hero-grid { max-width: 650px; margin: 0 auto; }
      .hero-copy { max-width: 650px; }
      .hero h1 { max-width: 650px; margin-top: 27px; font-size: clamp(44px, 5.7vw, 61px); }
      .hero-copy > p { max-width: 520px; font-size: 16px; }
      .composer { width: 580px; max-width: 100%; }
      .composer-form { min-height: 370px; }
      .composer-form textarea { min-height: 175px; }
    }
    :root {
      --ink: #ffffff;
      --muted: #b5a8c9;
      --line: rgba(226, 204, 255, .17);
      --soft: #1d1035;
      --purple: #9945ff;
      --purple-2: #c176ff;
      --deep: #140722;
      --green: #d9ff47;
      --shadow: 0 24px 70px rgba(14, 3, 35, .34);
    }
    body { color: var(--ink); background: #0d0618; }
    .shell { width: min(1280px, calc(100% - 48px)); }
    .site-header { position: absolute; top: 58px; left: 0; right: 0; border-bottom: 1px solid rgba(223, 195, 255, .08); background: rgba(13, 6, 24, .72); backdrop-filter: blur(18px); }
    .nav-wrap { min-height: 80px; height: 80px; }
    .brand { color: #fff; }
    .brand-mark { border: 1px solid rgba(255,255,255,.66); background: linear-gradient(145deg, rgba(255,255,255,.18), rgba(129,56,255,.5)); box-shadow: 0 8px 24px rgba(111, 38, 255, .25); }
    .nav-button, .nav-link { color: rgba(255,255,255,.7); }
    .nav-button:hover, .nav-link:hover, .nav-item.open > .nav-button { color: #fff; background: rgba(255,255,255,.1); }
    .mega-menu, .language-menu { border-color: var(--line); background: rgba(27, 12, 49, .98); box-shadow: var(--shadow); }
    .mega-link:hover, .language-menu button:hover { background: rgba(255,255,255,.08); }
    .mega-link strong, .mega-link small, .language-menu button { color: rgba(255,255,255,.84); }
    .mega-kicker { color: var(--purple-2); }
    .language button, .outline-button { border-color: var(--line); color: rgba(255,255,255,.86); background: rgba(255,255,255,.06); }
    .solid-button { border-color: var(--purple); color: #fff; background: linear-gradient(135deg, #7b2fff, #a554ff); box-shadow: 0 10px 26px rgba(110, 37, 240, .28); }
    .text-button { color: rgba(255,255,255,.76); }
    .mobile-menu-button { border-color: var(--line); color: #fff; background: rgba(255,255,255,.08); }
    .announcement-bar { position: relative; z-index: 60; min-height: 58px; padding: 8px 15px; background: linear-gradient(90deg, #6531ff 0%, #8d2dff 50%, #6d27f1 100%); color: #fff; }
    .announcement-inner { max-width: 820px; min-height: 42px; flex-wrap: wrap; gap: 6px 10px; font-size: 11px; line-height: 1.15; }
    .announcement-inner > span:first-child { display: inline-flex; align-items: center; gap: 8px; }
    .announcement-inner strong, .announcement-inner a { display: inline-flex; align-items: center; min-height: 24px; padding: 4px 10px; border: 1px solid #151020; border-radius: 5px; color: #171021; background: #f4ff5a; font-weight: 900; text-decoration: none; }
    .announcement-inner strong { color: #171021; }
    .announcement-inner .promo-caption { color: rgba(255,255,255,.9); }
    .promo-close { border-color: rgba(255,255,255,.9); background: rgba(20,8,45,.22); }
    .hero { min-height: 790px; padding: 150px 0 105px; background: radial-gradient(circle at 78% 12%, rgba(134, 48, 255, .28), transparent 28%), radial-gradient(circle at 20% 0%, rgba(70, 24, 145, .3), transparent 34%), linear-gradient(145deg, #2c1058 0%, #160726 45%, #0d0618 100%); }
    .hero:before { width: 680px; height: 680px; right: -260px; bottom: -430px; background: rgba(153, 69, 255, .16); filter: blur(22px); }
    .hero:after { left: -300px; top: 230px; width: 520px; height: 520px; border-color: rgba(194, 138, 255, .12); }
    .hero-grid { grid-template-columns: minmax(0, 1fr) minmax(500px, 1fr); gap: 48px; }
    .promo-pill { border-color: rgba(218, 184, 255, .3); background: linear-gradient(100deg, rgba(109, 35, 229, .78), rgba(129, 46, 245, .58)); box-shadow: 0 10px 30px rgba(81, 28, 192, .22); }
    .promo-pill b { color: var(--green); }
    .hero h1 { max-width: 620px; font-size: clamp(46px, 4.5vw, 68px); letter-spacing: -.058em; }
    .hero-copy > p { color: rgba(232, 220, 246, .72); }
    .hero-note { color: rgba(232,220,246,.62); }
    .composer { border-color: rgba(228, 202, 255, .22); background: rgba(24, 11, 42, .72); box-shadow: 0 30px 78px rgba(8, 2, 22, .45); }
    .composer-tab { color: rgba(255,255,255,.58); }
    .composer-tab:hover, .composer-tab.active { color: #fff; background: rgba(255,255,255,.1); }
    .composer-board { background: linear-gradient(145deg, #2c1556, #150a2b); }
    .composer-form { border-color: rgba(255,255,255,.14); background: rgba(255,255,255,.06); }
    .tool-chip, .model-select > button { border-color: rgba(255,255,255,.16); color: rgba(255,255,255,.78); background: rgba(255,255,255,.07); }
    .section, .section.soft, .cases-section, .section.dark { color: #fff; background: linear-gradient(180deg, #160825 0%, #0f071b 100%); }
    .section:nth-of-type(even) { background: linear-gradient(145deg, #251043 0%, #130620 100%); }
    .section-heading h2, .faq-question { color: #fff; }
    .section-heading p, .dark .section-heading p { color: rgba(228, 216, 242, .68); }
    .eyebrow, .dark .eyebrow { color: #c08bff; }
    .arrow-link { color: var(--green); }
    .product-grid, .models-grid, .agents-grid, .usecase-grid, .workflow-grid, .team-benefits { gap: 16px; }
    .product-card, .agent-feature, .agent-card, .team-copy, .team-benefit, .usecase-card, .workflow-card, .stat-card { border: 1px solid rgba(218, 185, 255, .14); box-shadow: 0 22px 58px rgba(12, 3, 31, .22); }
    .product-card { border-radius: 19px; background: linear-gradient(145deg, rgba(57, 22, 94, .9), rgba(102, 42, 181, .75)); }
    .product-card:nth-child(2) { background: linear-gradient(145deg, rgba(74, 31, 121, .92), rgba(148, 61, 210, .78)); }
    .product-card:nth-child(3) { background: linear-gradient(145deg, rgba(28, 28, 76, .95), rgba(70, 61, 177, .78)); }
    .product-card:hover, .agent-card:hover, .team-benefit:hover, .usecase-card:hover, .workflow-card:hover { box-shadow: 0 28px 65px rgba(85, 29, 177, .28); }
    .skill-row { padding-bottom: 15px; }
    .skill-pill { border-color: rgba(218,185,255,.17); border-radius: 999px; color: rgba(255,255,255,.86); background: rgba(255,255,255,.07); box-shadow: none; }
    .skill-pill:hover { border-color: rgba(193, 139, 255, .62); background: rgba(145, 68, 238, .18); box-shadow: 0 12px 28px rgba(88, 28, 178, .2); }
    .skill-pill small, .media-content p, .usecase-card p { color: rgba(224, 211, 241, .62); }
    .skill-dot { background: linear-gradient(135deg, #762bff, #b768ff); }
    .model-card { border: 1px solid rgba(218,185,255,.14); background: linear-gradient(145deg, #1c0e35, #3d1b6e); }
    .model-card:nth-child(2) { background: linear-gradient(145deg, #281346, #57228c); }
    .model-card:nth-child(3) { background: linear-gradient(145deg, #3b174f, #7b2ca6); }
    .model-card:nth-child(4) { background: linear-gradient(145deg, #17183d, #343e91); }
    .model-card p { color: rgba(255,255,255,.64); }
    .filter-button { border-color: rgba(218,185,255,.18); color: rgba(255,255,255,.72); background: rgba(255,255,255,.06); }
    .filter-button.active, .filter-button:hover { color: #1d0d31; border-color: var(--green); background: var(--green); }
    .media-card { border-color: rgba(218,185,255,.16); background: rgba(35, 16, 61, .84); box-shadow: 0 18px 45px rgba(10, 2, 25, .26); }
    .media-card:hover { box-shadow: 0 28px 58px rgba(91, 29, 185, .3); }
    .media-content h3 { color: #fff; }
    .media-tag { background: rgba(25,12,48,.76); }
    .agent-feature { background: linear-gradient(145deg, #24103f, #6e32bd); }
    .agent-card { color: #fff; background: linear-gradient(145deg, rgba(36, 16, 62, .92), rgba(74, 31, 126, .78)); }
    .agent-card p, .team-copy p { color: rgba(235,224,246,.68); }
    .team-section { background: linear-gradient(135deg, #210d3d, #10061c) !important; }
    .team-copy { color: #fff; background: linear-gradient(145deg, rgba(50, 22, 86, .92), rgba(102, 43, 175, .72)); }
    .team-benefit { color: #fff; background: rgba(255,255,255,.055); }
    .team-benefit p { color: rgba(231,219,244,.62); }
    .usecase-card { color: #fff; background: linear-gradient(145deg, rgba(43, 18, 72, .88), rgba(74, 28, 116, .62)); }
    .usecase-index, .mini-number { color: var(--green); }
    .comparison-wrap { border-color: rgba(218,185,255,.17); background: rgba(255,255,255,.035); }
    .comparison-table th { background: rgba(255,255,255,.08); }
    .comparison-table th, .comparison-table td { border-color: rgba(255,255,255,.1); color: rgba(235,224,246,.68); }
    .comparison-table td:first-child, .comparison-table th, .comparison-table td:last-child { color: #fff; }
    .workflow-card, .stat-card { color: #fff; background: linear-gradient(145deg, rgba(40, 17, 70, .88), rgba(91, 37, 146, .68)); }
    .workflow-card p, .stat-card p { color: rgba(231,219,244,.64); }
    .testimonial { border-color: rgba(218,185,255,.16); background: rgba(255,255,255,.06); }
    .cta-section { background: radial-gradient(circle at 50% 42%, rgba(145, 55, 255, .36), transparent 32%), linear-gradient(145deg, #2c1058, #11061f); }
    .cta-section h2, .cta-section p { color: #fff; }
    .cta-section p { color: rgba(232,220,246,.7); }
    .faq-item { border-color: rgba(218,185,255,.17); }
    .faq-question span { color: var(--green); }
    footer { background: #0c0516; }
    .footer-col a, .footer-intro p, .footer-bottom { color: rgba(231,219,244,.62); }
    .modal { border: 1px solid rgba(218,185,255,.18); background: linear-gradient(145deg, #2b104f, #7130bb); }
    .toast { border: 1px solid rgba(218,185,255,.15); background: #241037; }
    @media (min-width: 1051px) {
      .announcement-inner { flex-wrap: wrap; }
      .announcement-inner > span:first-child { order: 1; }
      .announcement-inner .promo-caption { order: 2; width: 100%; text-align: center; }
      .announcement-inner .promo-close { display: none; }
      .mobile-bottom-nav { display: none; }
    }
    @media (max-width: 1050px) {
      .site-header { top: 58px; border-bottom: 0; background: transparent; backdrop-filter: none; }
      .nav-wrap { height: 78px; }
      .hero { min-height: 900px; padding: 130px 0 52px; background: radial-gradient(circle at 50% 5%, rgba(112,44,234,.24), transparent 34%), radial-gradient(circle at 83% 27%, rgba(69,26,146,.2), transparent 38%), #0d0818; }
      .hero-grid { grid-template-columns: minmax(0, 1fr); max-width: 650px; margin: 0 auto; }
      .hero-grid > * { min-width: 0; }
      .hero-copy { width: 100%; max-width: 650px; min-width: 0; text-align: center; }
      .hero h1 { max-width: 640px; margin: 27px auto 18px; font-size: clamp(44px, 5.7vw, 61px); }
      .hero-copy > p { max-width: 520px; margin: 0 auto; }
      .hero-ctas, .hero-note { justify-content: center; }
      .composer { width: 100%; max-width: 100%; min-width: 0; margin: 5px auto 0; }
      .composer-board { display: none; }
      .composer-form { min-height: 370px; }
      .composer-form textarea { min-height: 175px; }
      .section { padding: 92px 0; }
    }
    @media (max-width: 760px) {
      .shell { width: min(calc(100% - 30px), 620px); }
      .announcement-inner { padding-right: 0; }
      .announcement-inner > span:first-child { flex-wrap: wrap; justify-content: center; }
      .announcement-inner .promo-caption { width: 100%; text-align: center; }
      .announcement-inner .promo-close { top: 8px; right: -29px; }
      .hero { min-height: 900px; }
      .hero h1 { max-width: 370px; font-size: clamp(35px, 10vw, 44px); line-height: 1.04; }
      .hero-copy > p { max-width: 340px; font-size: 14px; }
      .hero-ctas, .hero-note { display: none; }
      .composer { border-radius: 25px; }
      .composer-form { min-height: 355px; }
      .composer-form textarea { min-height: 148px; }
      .section { padding: 76px 0; }
    }
    /* Final responsive pass: match the compact mobile app shell in the reference recording. */
    .floating-tools { display: none; }
    @media (min-width: 1051px) {
      .site-header { position: fixed; top: 58px; }
      .announcement-bar { position: relative; }
      main { position: relative; }
    }
    @media (max-width: 1050px) {
      .announcement-bar { min-height: 36px; height: 36px; padding: 3px 38px 3px 15px; }
      .announcement-inner { min-height: 30px; height: 30px; display: grid; grid-template-columns: 1fr; align-content: center; gap: 1px; font-size: 10px; }
      .announcement-inner > span:first-child { width: 100%; min-height: 21px; justify-content: center; gap: 6px; }
      .announcement-inner strong, .announcement-inner a { min-height: 21px; padding: 3px 8px; border-radius: 4px; font-size: 10px; }
      .announcement-inner .promo-caption { width: 100%; min-height: 12px; font-size: 9px; }
      .announcement-inner .promo-close { top: 6px; right: -29px; width: 24px; height: 24px; }
      .site-header { position: fixed; top: 36px; left: 0; right: 0; z-index: 90; border-bottom: 1px solid rgba(218,185,255,.08); background: rgba(13,6,24,.28); backdrop-filter: blur(14px); }
      .nav-wrap { height: 60px; min-height: 60px; }
      .mobile-panel { top: 58px; }
      .hero { min-height: 820px; padding: 66px 0 32px; }
      .hero-grid { gap: 17px; }
      .promo-pill { display: inline-grid; grid-template-columns: auto 1fr auto; grid-template-rows: 1fr 1fr; column-gap: 6px; row-gap: 0; width: min(100%, 292px); white-space: normal; padding: 6px 12px; font-size: 9px; line-height: 1.1; text-align: center; }
      .promo-pill .sparkle { grid-row: 1 / span 2; align-self: center; font-size: 13px; }
      .promo-pill b { font-size: 9px; }
      .promo-pill:after { content: "365-Day Unlimited: Wan 3.0 & MiniMax H3 & GPT Image 2"; grid-column: 1 / -1; grid-row: 2; color: rgba(255,255,255,.9); font-size: 8px; white-space: nowrap; }
      .promo-pill > span:last-child { white-space: nowrap; }
      .hero h1 { max-width: 350px; margin: 14px auto 13px; font-size: clamp(31px, 8.5vw, 42px); line-height: 1.03; letter-spacing: -.055em; }
      .hero-copy > p { max-width: 315px; margin: 0 auto; font-size: 12px; line-height: 1.58; }
      .hero-ctas, .hero-note { display: none; }
      .composer { width: 100%; max-width: 100%; margin: 0 auto; border-radius: 22px; }
      .composer-top { padding: 10px 10px 0; }
      .composer-tab { padding: 9px 8px 12px; font-size: 10px; }
      .composer-form { min-height: 282px; padding: 17px 15px 14px; }
      .composer-form textarea { min-height: 116px; font-size: 13px; }
      .composer-tools { margin-top: 12px; padding-top: 9px; gap: 8px; }
      .composer-feedback { padding-top: 8px; font-size: 9px; }
      .mobile-bottom-nav { position: fixed; left: 15px; right: 15px; bottom: 10px; z-index: 80; width: auto; margin: 0; min-height: 65px; border-radius: 24px; }
      .floating-tools { display: flex; position: fixed; right: 16px; bottom: 106px; z-index: 82; flex-direction: column; align-items: flex-end; gap: 10px; }
      .floating-tool { position: relative; width: 43px; height: 43px; display: grid; place-items: center; border: 1px solid rgba(255,255,255,.28); border-radius: 50%; color: #fff; background: linear-gradient(145deg,#7021ff,#a34dff); box-shadow: 0 10px 24px rgba(85,25,217,.42), 0 0 0 5px rgba(125,47,255,.12); cursor: pointer; font-size: 18px; transition: transform .2s, box-shadow .2s; }
      .floating-tool:first-child { color: #6d20ed; background: #f5efff; }
      .floating-tool:hover { transform: translateY(-3px) scale(1.04); box-shadow: 0 14px 28px rgba(85,25,217,.52), 0 0 0 6px rgba(125,47,255,.17); }
      .floating-tool .floating-close { position: absolute; top: -8px; right: -8px; width: 17px; height: 17px; display: grid; place-items: center; border: 1px solid rgba(255,255,255,.45); border-radius: 50%; color: #fff; background: #2b183e; font-size: 11px; }
      .floating-tools.dismissed { display: none; }
      .promo-closed .site-header { top: 0; }
    }
    @media (max-width: 370px) {
      .nav-actions .language button { min-width: 50px; padding-inline: 8px; }
      .nav-actions .solid-button { padding-inline: 10px; }
      .composer-tab { padding-inline: 6px; }
      .hero h1 { font-size: 30px; }
    }
  </style>
</head>
<body>
  <header class="site-header">
    <div class="shell nav-wrap">
      <a class="brand" href="#home" aria-label="Topview home"><span class="brand-mark">↗</span><span>Topview</span></a>
      <nav class="desktop-nav" aria-label="Main navigation">
        <div class="nav-item">
          <button class="nav-button" type="button" data-menu="use-cases" aria-expanded="false">Use Cases <span>⌄</span></button>
          <div class="mega-menu" data-panel="use-cases">
            <div class="mega-grid">
              <a class="mega-link" href="#cases"><span class="mega-kicker">Marketing</span><strong>AI Ads &amp; UGC</strong><small>Create conversion-ready videos for every channel.</small></a>
              <a class="mega-link" href="#cases"><span class="mega-kicker">Stories</span><strong>Films &amp; Drama</strong><small>Turn a script, novel, or idea into scenes.</small></a>
              <a class="mega-link" href="#cases"><span class="mega-kicker">Growth</span><strong>Social Content</strong><small>Batch short-form videos for your audience.</small></a>
              <a class="mega-link" href="#cases"><span class="mega-kicker">Visuals</span><strong>Image Design</strong><small>Build campaign visuals and product assets.</small></a>
            </div>
          </div>
        </div>
        <div class="nav-item">
          <button class="nav-button" type="button" data-menu="ai-tools" aria-expanded="false">AI Tools <span>⌄</span></button>
          <div class="mega-menu" data-panel="ai-tools">
            <div class="mega-grid">
              <a class="mega-link" href="#composer"><span class="mega-kicker">Agent</span><strong>AI Video Agent</strong><small>One prompt for a complete production flow.</small></a>
              <a class="mega-link" href="#products"><span class="mega-kicker">Canvas</span><strong>AI Canvas</strong><small>Edit scenes, references, and shots together.</small></a>
              <a class="mega-link" href="#products"><span class="mega-kicker">Studio</span><strong>Drama Studio</strong><small>Keep characters and episodes consistent.</small></a>
              <a class="mega-link" href="#skills"><span class="mega-kicker">Toolkit</span><strong>Image, Voice &amp; Motion</strong><small>Specialized tools when you need more control.</small></a>
            </div>
          </div>
        </div>
        <div class="nav-item">
          <button class="nav-button" type="button" data-menu="resources" aria-expanded="false">Resources <span>⌄</span></button>
          <div class="mega-menu" data-panel="resources">
            <div class="mega-grid">
              <a class="mega-link" href="#faq"><span class="mega-kicker">Learn</span><strong>Guides &amp; Inspiration</strong><small>Ideas for faster creative production.</small></a>
              <a class="mega-link" href="#workflow"><span class="mega-kicker">Compare</span><strong>Agent workflow</strong><small>See how a production system changes the process.</small></a>
              <a class="mega-link" href="#footer"><span class="mega-kicker">Community</span><strong>Creator challenges</strong><small>Share what you make with other creators.</small></a>
              <a class="mega-link" href="#footer"><span class="mega-kicker">Developers</span><strong>API &amp; Skills</strong><small>Connect Topview to your creative stack.</small></a>
            </div>
          </div>
        </div>
        <a class="nav-link" href="#models">Models</a>
        <a class="nav-link" href="#skills">MCP / Skill</a>
        <a class="nav-link" href="#footer">Plugin</a>
        <a class="nav-link" href="#footer">API</a>
        <a class="nav-link" href="#cta">Pricing</a>
      </nav>
      <div class="nav-actions">
        <div class="language">
          <button type="button" aria-expanded="false" data-language>English⌄</button>
          <div class="language-menu">
            <button type="button" data-lang="English">English</button>
            <button type="button" data-lang="中文">中文</button>
            <button type="button" data-lang="日本語">日本語</button>
          </div>
        </div>
        <button class="text-button" type="button" data-toast="Login is ready in the full Topview app.">Login</button>
        <button class="solid-button" type="button" data-scroll="#composer">Sign Up</button>
      </div>
      <button class="mobile-menu-button" type="button" data-mobile-toggle aria-expanded="false" aria-label="Open menu">☰</button>
    </div>
    <div class="shell mobile-panel" data-mobile-panel>
      <a href="#home">Home</a>
      <button type="button" data-mobile-expand>Use Cases <span>⌄</span></button>
      <a class="mobile-sub" href="#cases" hidden>Marketing Video</a>
      <a class="mobile-sub" href="#cases" hidden>Short Film</a>
      <a class="mobile-sub" href="#cases" hidden>Video Clone</a>
      <button type="button" data-mobile-expand>AI Tools <span>⌄</span></button>
      <a class="mobile-sub" href="#composer" hidden>Video Agent</a>
      <a class="mobile-sub" href="#products" hidden>Canvas &amp; Drama Studio</a>
      <a href="#models">Models</a>
      <a href="#skills">MCP / Skill</a>
      <a href="#cta">Pricing</a>
      <button type="button" data-toast="Login is ready in the full Topview app.">Login</button>
    </div>
  </header>

  <div class="announcement-bar">
    <div class="shell announcement-inner"><span><strong>3-Day Pro Trial · $1</strong> <a href="#cta">Try Now →</a></span><span class="promo-caption">15 Credits · All Top AI models &amp; AI Agents</span><button class="promo-close" type="button" aria-label="Close promotion" data-promo-close>×</button></div>
  </div>

  <main>
    <section class="hero" id="home">
      <div class="shell hero-grid">
        <div class="hero-copy" data-reveal>
          <a class="promo-pill" href="#models"><span class="sparkle">✦</span><span>Seedance 2.5</span><b>$3.6 / 30s</b><span>· 60-Day Unlimited</span></a>
          <h1>Create Any Video,<br>Just Tell Your Agent</h1>
          <p>Describe your idea or add a script, reference video, or product URL. Topview plans scenes, selects the right models, generates assets, and keeps every shot editable on Canvas.</p>
          <div class="hero-ctas">
            <button class="solid-button" type="button" data-scroll="#composer">Start creating <span>→</span></button>
            <button class="outline-button" type="button" data-scroll="#cases">Browse cases</button>
          </div>
          <div class="hero-note"><span>Canvas editing and team review</span><span>Video, image, avatar, and voice</span><span>Built for stories and ads</span></div>
        </div>
        <div class="composer" id="composer" data-reveal>
          <div class="composer-top" role="tablist" aria-label="Video composer">
            <button class="composer-tab active" type="button" data-composer-tab="AI Video">AI Video</button>
            <button class="composer-tab" type="button" data-composer-tab="AI Image">AI Image</button>
            <button class="composer-tab" type="button" data-composer-tab="Video Agent">Video Agent</button>
            <button class="composer-tab" type="button" data-composer-tab="Drama Studio">Drama Studio</button>
            <span class="composer-status">Agent ready</span>
          </div>
          <div class="composer-board">
            <div class="composer-collage">
              <div class="collage-image collage-main" style="background-image:url('https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=85')"><span>Scene 01 · Establishing shot</span></div>
              <div class="collage-image" style="background-image:url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=85')"><span>Character</span></div>
              <div class="collage-image" style="background-image:url('https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=600&q=85')"><span>Atmosphere</span></div>
            </div>
            <div class="composer-overlay"><small id="composer-kicker">Video Agent · Canvas</small><h3 id="composer-title">From prompt to finished film</h3></div>
          </div>
          <div class="composer-form">
            <textarea id="prompt" aria-label="Creation prompt" placeholder="Ask Topview to create a UGC-style product ad">Ask Topview to create a UGC-style product ad</textarea>
            <div class="composer-tools">
              <button class="tool-chip" type="button" data-tool="Reference">＋ Reference</button>
              <button class="tool-chip" type="button" data-tool="Canvas">Canvas</button>
              <div class="model-select">
                <button type="button" data-model-toggle><span id="active-model">Seedance 2.5</span>⌄</button>
                <div class="model-menu">
                  <button type="button" data-model="Seedance 2.5">Seedance 2.5</button>
                  <button type="button" data-model="Wan 3.0">Wan 3.0</button>
                  <button type="button" data-model="MiniMax H3">MiniMax H3</button>
                  <button type="button" data-model="GPT Image 2">GPT Image 2</button>
                </div>
              </div>
              <button class="composer-submit" type="button" id="composer-submit" aria-label="Generate">↑</button>
            </div>
            <div class="composer-feedback" id="composer-feedback">Press generate to let the agent plan your first scene.</div>
          </div>
          <div class="mobile-bottom-nav" aria-label="App navigation">
            <button class="active" type="button" data-scroll="#home">⌂<span>Home</span></button>
            <button type="button" data-scroll="#products">▦<span>Board</span></button>
            <button class="create" type="button" data-scroll="#composer">✦<span>Create</span></button>
            <button type="button" data-scroll="#cases">♧<span>Inspiration</span></button>
            <button type="button" data-scroll="#footer">♙<span>Profile</span></button>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="products">
      <div class="shell">
        <div class="section-heading" data-reveal><div class="eyebrow">The smartest AI video agent</div><h2>Turn stories into finished films.</h2><p>One creative workspace for thinking, making, reviewing, and adapting. Start with a sentence or a source asset; keep every decision editable.</p></div>
        <div class="product-grid">
          <article class="product-card" data-reveal><div class="product-icon">✦</div><h3>Video Agent</h3><p>Give the agent a brief, URL, or reference. It maps the story, selects models, and produces a complete first cut.</p><a class="arrow-link" href="#composer">Create with Agent <span>→</span></a></article>
          <article class="product-card" data-reveal><div class="product-icon">⌁</div><h3>Canvas</h3><p>Move from prompt to scenes, frames, clips, and revisions on a free-form board where every shot stays in context.</p><a class="arrow-link" href="#workflow">Explore Canvas <span>→</span></a></article>
          <article class="product-card" data-reveal><div class="product-icon">◈</div><h3>Drama Studio</h3><p>Build short dramas and vertical series with consistent characters, locations, dialogue, and episode structure.</p><a class="arrow-link" href="#cases">Open Drama flow <span>→</span></a></article>
        </div>
      </div>
    </section>

    <section class="section soft" id="skills">
      <div class="shell">
        <div class="split-heading">
          <div class="section-heading" data-reveal><div class="eyebrow">Creative toolkit</div><h2>One agent, every skill it needs.</h2><p>Switch from broad ideation to sharp control without leaving the production flow.</p></div>
          <a class="arrow-link" href="#composer">See all skills <span>→</span></a>
        </div>
        <div class="skill-row" data-reveal>
          <button class="skill-pill" type="button" data-skill="AI Video Generator"><span class="skill-dot">V</span><span><strong>AI Video Generator</strong><small>Generate scenes</small></span></button>
          <button class="skill-pill" type="button" data-skill="Image Generator"><span class="skill-dot">I</span><span><strong>Image Generator</strong><small>Create visuals</small></span></button>
          <button class="skill-pill" type="button" data-skill="Character Swap"><span class="skill-dot">C</span><span><strong>Character Swap</strong><small>Keep identity</small></span></button>
          <button class="skill-pill" type="button" data-skill="Motion Control"><span class="skill-dot">M</span><span><strong>Motion Control</strong><small>Direct movement</small></span></button>
          <button class="skill-pill" type="button" data-skill="Product Photography"><span class="skill-dot">P</span><span><strong>Product Photography</strong><small>Stage products</small></span></button>
          <button class="skill-pill" type="button" data-skill="Voiceover"><span class="skill-dot">A</span><span><strong>Voiceover</strong><small>Localize stories</small></span></button>
          <button class="skill-pill" type="button" data-skill="Video Upscale"><span class="skill-dot">↑</span><span><strong>Video Upscale</strong><small>Polish output</small></span></button>
          <button class="skill-pill" type="button" data-skill="3D Shot Composer"><span class="skill-dot">3D</span><span><strong>3D Shot Composer</strong><small>Stage the camera</small></span></button>
        </div>
      </div>
    </section>

    <section class="section" id="models">
      <div class="shell">
        <div class="split-heading">
          <div class="section-heading" data-reveal><div class="eyebrow">Model orchestration</div><h2>Many creative engines. One workspace.</h2><p>Topview routes each job to the model that best fits the output, then keeps the result ready for your next scene.</p></div>
          <a class="arrow-link" href="#composer">Choose a model <span>→</span></a>
        </div>
        <div class="models-grid">
          <article class="model-card" data-model-card="Seedance 2.5" data-reveal><span class="model-badge">60 DAYS UNLIMITED</span><span class="model-arrow">↗</span><h3>Seedance 2.5</h3><p>The most powerful model yet for cinematic motion and expressive scenes.</p></article>
          <article class="model-card" data-model-card="Wan 3.0" data-reveal><span class="model-badge">365 DAYS UNLIMITED</span><span class="model-arrow">↗</span><h3>Wan 3.0</h3><p>Near-Seedance quality at a fraction of the price for daily creation.</p></article>
          <article class="model-card" data-model-card="Seedance 2.0" data-reveal><span class="model-badge">60 DAYS UNLIMITED</span><span class="model-arrow">↗</span><h3>Seedance 2.0</h3><p>Pro-level quality for short films, ads, and social variations.</p></article>
          <article class="model-card" data-model-card="MiniMax H3" data-reveal><span class="model-badge">365 DAYS UNLIMITED</span><span class="model-arrow">↗</span><h3>MiniMax H3</h3><p>Fast generation for product stories, avatars, and creator-led clips.</p></article>
        </div>
      </div>
    </section>

    <section class="section cases-section" id="cases">
      <div class="shell">
        <div class="split-heading">
          <div class="section-heading" data-reveal><div class="eyebrow">Featured cases</div><h2>Make the next scroll stop.</h2><p>Explore the kinds of videos the agent can plan, generate, and remix for you.</p></div>
          <a class="arrow-link" href="#composer">Make one now <span>→</span></a>
        </div>
        <div class="filter-row" role="tablist" aria-label="Featured case categories" data-reveal>
          <button class="filter-button active" type="button" data-filter="All">All</button>
          <button class="filter-button" type="button" data-filter="Marketing">Marketing</button>
          <button class="filter-button" type="button" data-filter="Film">Short Film</button>
          <button class="filter-button" type="button" data-filter="Social">Social</button>
          <button class="filter-button" type="button" data-filter="Animation">Animation</button>
          <button class="filter-button" type="button" data-filter="Product">Product</button>
        </div>
        <div class="media-grid" id="media-grid">
          <article class="media-card" data-category="Marketing" data-reveal><div class="media-visual"><video poster="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85" muted loop playsinline></video><span class="media-tag">Marketing</span><div class="media-overlay"><button class="play-button" type="button" data-play aria-label="Play product fashion ad">▶</button></div></div><div class="media-content"><h3>Creator-led product launch</h3><p>UGC hooks, clean product frames, and a fast social cut.</p></div></article>
          <article class="media-card" data-category="Film" data-reveal><div class="media-visual"><video poster="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=85" muted loop playsinline></video><span class="media-tag">Short Film</span><div class="media-overlay"><button class="play-button" type="button" data-play aria-label="Play cinematic short film">▶</button></div></div><div class="media-content"><h3>A quiet cinematic morning</h3><p>Atmosphere, camera direction, and a complete visual beat.</p></div></article>
          <article class="media-card" data-category="Social" data-reveal><div class="media-visual"><video poster="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=85" muted loop playsinline></video><span class="media-tag">Social</span><div class="media-overlay"><button class="play-button" type="button" data-play aria-label="Play social video">▶</button></div></div><div class="media-content"><h3>Three-second scroll stopper</h3><p>Bold text beats and a vertical edit shaped for discovery.</p></div></article>
          <article class="media-card" data-category="Animation" data-reveal><div class="media-visual"><video poster="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=85" muted loop playsinline></video><span class="media-tag">Animation</span><div class="media-overlay"><button class="play-button" type="button" data-play aria-label="Play animated explainer">▶</button></div></div><div class="media-content"><h3>Animated brand explainer</h3><p>Turn a complex product story into a friendly visual sequence.</p></div></article>
          <article class="media-card" data-category="Product" data-reveal><div class="media-visual"><video poster="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=85" muted loop playsinline></video><span class="media-tag">Product</span><div class="media-overlay"><button class="play-button" type="button" data-play aria-label="Play product video">▶</button></div></div><div class="media-content"><h3>Product in its natural habitat</h3><p>Stage the object, set the mood, and deliver a polished reveal.</p></div></article>
          <article class="media-card" data-category="Film" data-reveal><div class="media-visual"><video poster="https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=800&q=85" muted loop playsinline></video><span class="media-tag">Short Film</span><div class="media-overlay"><button class="play-button" type="button" data-play aria-label="Play dramatic scene">▶</button></div></div><div class="media-content"><h3>Drama scene in the blue hour</h3><p>Characters, setting, and pacing designed for an emotional turn.</p></div></article>
          <article class="media-card" data-category="Marketing" data-reveal><div class="media-visual"><video poster="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=85" muted loop playsinline></video><span class="media-tag">Marketing</span><div class="media-overlay"><button class="play-button" type="button" data-play aria-label="Play beauty campaign">▶</button></div></div><div class="media-content"><h3>Beauty campaign variations</h3><p>One direction, multiple creators, hooks, and aspect ratios.</p></div></article>
          <article class="media-card" data-category="Social" data-reveal><div class="media-visual"><video poster="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=85" muted loop playsinline></video><span class="media-tag">Social</span><div class="media-overlay"><button class="play-button" type="button" data-play aria-label="Play team social video">▶</button></div></div><div class="media-content"><h3>Team story, made social</h3><p>Pull the strongest moments into a concise campaign cut.</p></div></article>
          <article class="media-card" data-category="Animation" data-reveal><div class="media-visual"><video poster="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=85" muted loop playsinline></video><span class="media-tag">Animation</span><div class="media-overlay"><button class="play-button" type="button" data-play aria-label="Play film title sequence">▶</button></div></div><div class="media-content"><h3>Title sequence, reimagined</h3><p>Graphic motion and film language blended into one opening.</p></div></article>
          <article class="media-card" data-category="Product" data-reveal><div class="media-visual"><video poster="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=85" muted loop playsinline></video><span class="media-tag">Product</span><div class="media-overlay"><button class="play-button" type="button" data-play aria-label="Play workspace product video">▶</button></div></div><div class="media-content"><h3>Workspace that tells a story</h3><p>Show a product in use with natural light and purposeful motion.</p></div></article>
          <article class="media-card" data-category="Marketing" data-reveal><div class="media-visual"><video poster="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=85" muted loop playsinline></video><span class="media-tag">Marketing</span><div class="media-overlay"><button class="play-button" type="button" data-play aria-label="Play business campaign">▶</button></div></div><div class="media-content"><h3>Campaign story in one take</h3><p>From brief to a clear message your audience can remember.</p></div></article>
          <article class="media-card" data-category="Social" data-reveal><div class="media-visual"><video poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=85" muted loop playsinline></video><span class="media-tag">Social</span><div class="media-overlay"><button class="play-button" type="button" data-play aria-label="Play creator tutorial">▶</button></div></div><div class="media-content"><h3>Teach it in a scroll</h3><p>Turn a process, lesson, or idea into a crisp visual tutorial.</p></div></article>
        </div>
      </div>
    </section>

    <section class="section" id="agent-capabilities">
      <div class="shell">
        <div class="section-heading" data-reveal><div class="eyebrow">What agents can do for you</div><h2>From a rough idea to a real production system.</h2><p>Topview coordinates the creative work around your goal, not around one isolated generation box.</p></div>
        <div class="agents-grid">
          <article class="agent-feature" data-reveal><div class="eyebrow">01 / Canvas</div><h3>Plan scenes. Generate assets. Keep the story editable.</h3><p>Give the agent a direction and it proposes a visual route that you can adjust before the final export.</p><img src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=85" alt="Creative production board placeholder"></article>
          <div class="agent-stack">
            <article class="agent-card" data-reveal><span class="mini-number">02 / Reference</span><h3>Recreate a style, not a file.</h3><p>Analyze pacing, shots, hooks, and visual language from a reference so your version feels intentional.</p></article>
            <article class="agent-card" data-reveal><span class="mini-number">03 / Consistency</span><h3>Keep characters and worlds together.</h3><p>Drama Studio keeps details aligned across scenes, episodes, and alternate cuts.</p></article>
            <article class="agent-card" data-reveal><span class="mini-number">04 / Scale</span><h3>Make one idea travel further.</h3><p>Adapt your story for ads, Reels, Shorts, product pages, and localized campaigns.</p></article>
          </div>
        </div>
      </div>
    </section>

    <section class="section team-section" id="team">
      <div class="shell">
        <div class="team-grid">
          <div class="team-copy" data-reveal>
            <div class="eyebrow">Topview for teams</div>
            <h2>Share projects, credits, and assets across the team.</h2>
            <p>Give creators one place for team video collaboration while admins control credits and keep production materials organized.</p>
            <p>Built for enterprise marketing teams, agencies, and film or creative studios.</p>
            <button class="solid-button" type="button" data-toast="Team workspace is ready for review.">Explore team workspace →</button>
          </div>
          <div class="team-visual" data-reveal>
            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85" alt="Creative team collaboration placeholder">
            <strong>One shared production surface.</strong>
          </div>
        </div>
        <div class="team-benefits">
          <article class="team-benefit" data-reveal><strong>Collaborate on video projects</strong><p>Work from shared projects in Canvas, Drama Studio, and Board.</p></article>
          <article class="team-benefit" data-reveal><strong>Manage team credits</strong><p>Share credits, monitor usage, and keep production spend under control.</p></article>
          <article class="team-benefit" data-reveal><strong>Organize every generated asset</strong><p>Keep videos, images, audio, avatars, and approved materials reusable.</p></article>
        </div>
      </div>
    </section>

    <section class="section" id="use-cases">
      <div class="shell">
        <div class="section-heading" data-reveal><div class="eyebrow">AI video agent for film, drama, and marketing</div><h2>Six ways to create with AI.</h2><p>Use the same agent-first workspace for cinematic scenes, short dramas, reference recreation, UGC ads, social content, and product marketing.</p></div>
        <div class="usecase-grid">
          <article class="usecase-card" data-reveal><span class="usecase-index">01 / Film</span><h3>AI film and cinematic video</h3><p>Turn a scene idea, script, or visual reference into cinematic shots with camera movement, lighting, mood, and editable structure.</p></article>
          <article class="usecase-card" data-reveal><span class="usecase-index">02 / Drama</span><h3>AI short drama and micro-drama</h3><p>Build vertical series from a novel, script, or rough plot with consistent characters, props, scenes, and dialogue.</p></article>
          <article class="usecase-card" data-reveal><span class="usecase-index">03 / Clone</span><h3>Reference video recreation</h3><p>Study pacing, shot structure, camera language, and hooks to create a fresh version of a reference direction.</p></article>
          <article class="usecase-card" data-reveal><span class="usecase-index">04 / UGC</span><h3>UGC-style ads</h3><p>Generate realistic creator-led ads with lifelike presenters, natural hooks, and product storytelling.</p></article>
          <article class="usecase-card" data-reveal><span class="usecase-index">05 / Social</span><h3>TikTok, Reels, and Shorts</h3><p>Batch-create short-form variations with consistent brand voice, captions, aspect ratios, and edits.</p></article>
          <article class="usecase-card" data-reveal><span class="usecase-index">06 / URL</span><h3>URL to marketing video</h3><p>Paste a product URL or campaign brief and turn it into a polished product video, explainer, or comparison clip.</p></article>
        </div>
      </div>
    </section>

    <section class="section dark" id="comparison">
      <div class="shell">
        <div class="section-heading" data-reveal><div class="eyebrow">Workflow shift</div><h2>From single-purpose generators to an agent production system.</h2><p>Most tools make one asset at a time. Topview is designed for the full creative loop: plan, generate, compare, refine, and adapt.</p></div>
        <div class="comparison-wrap" data-reveal>
          <table class="comparison-table">
            <thead><tr><th>Capability</th><th>Manual production</th><th>Generic AI tools</th><th>Topview AI agent</th></tr></thead>
            <tbody>
              <tr><td>Creative input</td><td>Brief, shot list, assets, team handoff</td><td>Mostly prompt-only</td><td>Prompt, URL, image, video, or reference mix</td></tr>
              <tr><td>Reference recreation</td><td>Manual research and editing</td><td>Limited or template-bound</td><td>Analyzes pacing, shots, hooks, and structure</td></tr>
              <tr><td>Image + video workflow</td><td>Separate design and video tools</td><td>Usually one media type</td><td>Create images, scene boards, clips, and edits together</td></tr>
              <tr><td>Narrative production</td><td>Writers, directors, editors, actors</td><td>Short isolated clips</td><td>Plans scenes, characters, shots, and variants</td></tr>
              <tr><td>Platform formats</td><td>Rebuild per channel</td><td>Export and resize manually</td><td>Adapts for TikTok, Reels, Shorts, ads, and stories</td></tr>
              <tr><td>Localization and scale</td><td>High cost per market</td><td>Limited and one at a time</td><td>Voice, captions, and versions across 30+ languages</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="section dark" id="workflow">
      <div class="shell">
        <div class="section-heading" data-reveal><div class="eyebrow">Workflow shift</div><h2>Stop making one asset at a time.</h2><p>Move from brief to plan, generate, compare, refine, and adapt across video, image, social, and commercial formats.</p></div>
        <div class="workflow-grid">
          <article class="workflow-card" data-reveal><div class="workflow-icon">✦</div><h3>Creative input</h3><p>Prompt, URL, image, video, script, or any combination. The agent starts from what you already have.</p></article>
          <article class="workflow-card" data-reveal><div class="workflow-icon">⌁</div><h3>Scene orchestration</h3><p>Characters, shots, camera movement, voice, and model choice come together as one production plan.</p></article>
          <article class="workflow-card" data-reveal><div class="workflow-icon">↗</div><h3>Platform-ready output</h3><p>Adapt a winning idea for TikTok, Reels, Shorts, ads, product pages, and localized versions.</p></article>
        </div>
        <div class="stat-grid">
          <div class="stat-card" data-reveal><strong>1</strong><p>Agent workspace for planning, creating, reviewing, and exporting.</p></div>
          <div class="stat-card" data-reveal><strong>5+</strong><p>Major creation modes across film, drama, ads, social, and image assets.</p></div>
          <div class="stat-card" data-reveal><strong>30+</strong><p>Languages for voiceover, captions, and creative variants.</p></div>
        </div>
        <div class="testimonial" data-reveal><div><blockquote>“The agent gives our team a faster way to test ideas, produce variations, and turn creative work into measurable output.”</blockquote><cite>Long Ma · CEO, Shopnow Technology JSC</cite></div><div class="testimonial-stats"><div><strong>+80%</strong><span>Revenue growth</span></div><div><strong>−50%</strong><span>Labor and production cost</span></div><div><strong>10×</strong><span>Faster turnaround</span></div></div></div>
      </div>
    </section>

    <section class="cta-section" id="cta">
      <div class="shell" data-reveal><div class="eyebrow">Your next story starts here</div><h2>Create your next video with Topview AI.</h2><p>Bring the idea. Let the agent help shape the scene, the style, and the final cut.</p><button class="solid-button" type="button" data-scroll="#composer">Start creating <span>→</span></button></div>
    </section>

    <section class="section" id="faq">
      <div class="shell">
        <div class="section-heading" data-reveal><div class="eyebrow">Frequently asked</div><h2>Questions, answered.</h2><p>Everything you need to understand the agent-first creative workflow.</p></div>
        <div class="faq-grid">
          <div class="faq-item" data-reveal><button class="faq-question" type="button">What is Topview AI?<span>+</span></button><div class="faq-answer">Topview is an AI video agent for short films, dramas, marketing videos, social content, image assets, and creative production workflows.</div></div>
          <div class="faq-item" data-reveal><button class="faq-question" type="button">What is Canvas best for?<span>+</span></button><div class="faq-answer">Canvas is best for planning scenes, organizing references, generating assets, and keeping each shot editable in context.</div></div>
          <div class="faq-item" data-reveal><button class="faq-question" type="button">Can beginners control the details?<span>+</span></button><div class="faq-answer">Yes. Start with a plain-language idea, then use the Composer, references, model picker, and Canvas to make more specific decisions as you go.</div></div>
          <div class="faq-item" data-reveal><button class="faq-question" type="button">What is Drama Studio for?<span>+</span></button><div class="faq-answer">Drama Studio helps create micro-dramas, mini dramas, vertical series, and story-led videos with consistent characters and scenes.</div></div>
          <div class="faq-item" data-reveal><button class="faq-question" type="button">Can Topview recreate a reference video style?<span>+</span></button><div class="faq-answer">The workflow is designed to study pacing, camera language, shot structure, and hooks so you can build a new creative direction from a reference.</div></div>
        </div>
      </div>
    </section>
  </main>

  <div class="floating-tools" aria-label="Quick tools">
    <button class="floating-tool" type="button" data-toast="Assistant preview opened." aria-label="Open assistant">▰</button>
    <button class="floating-tool" type="button" data-toast="Creative app preview opened." aria-label="Open creative app">✦<span class="floating-close" data-floating-close aria-label="Close quick tools">×</span></button>
  </div>

  <footer id="footer">
    <div class="shell">
      <div class="footer-grid">
        <div class="footer-intro"><a class="brand" href="#home"><span class="brand-mark">↗</span><span>Topview</span></a><p>An AI video agent for stories, marketing, and every creative team that wants to move from idea to finished film.</p><button class="outline-button" type="button" data-scroll="#composer">Open the workspace</button></div>
        <div class="footer-col"><h3>AI Ads</h3><a href="#composer">AI Video Agent</a><a href="#cases">AI Ads Video</a><a href="#cases">AI Product Video</a><a href="#cases">AI UGC Video</a><a href="#composer">URL to Video</a></div>
        <div class="footer-col"><h3>AI Video</h3><a href="#composer">AI Video Generator</a><a href="#products">Drama Studio</a><a href="#cases">Video Clone</a><a href="#skills">Motion Control</a><a href="#skills">Video Upscale</a></div>
        <div class="footer-col"><h3>AI Image</h3><a href="#composer">AI Image Generator</a><a href="#skills">Character Swap</a><a href="#skills">Image Upscale</a><a href="#skills">Product Photography</a><a href="#skills">Virtual Try-On</a></div>
        <div class="footer-col"><h3>Resources</h3><a href="#faq">Learning Center</a><a href="#workflow">Agent workflow</a><a href="#skills">MCP / Skill</a><a href="#cta">Pricing</a><a href="#home">Back to top ↑</a></div>
      </div>
      <div class="footer-bottom"><span>© 2026 TOPVIEW PTE. LTD.</span><span>Made for creators, marketers, and storytellers.</span></div>
    </div>
  </footer>

  <div class="toast" id="toast" role="status" aria-live="polite"></div>
  <div class="modal-backdrop" id="skills-modal" aria-hidden="true">
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <button class="modal-close" type="button" data-close-modal aria-label="Close">×</button>
      <div class="eyebrow">Creative toolkit</div><h2 id="modal-title">Choose a sharper control.</h2><p id="modal-copy">The full workspace connects this skill to your current scene.</p>
      <div class="modal-list"><button type="button" data-scroll-modal="#composer">Use this skill in Composer →</button><button type="button" data-close-modal>Keep exploring the homepage</button></div>
    </div>
  </div>

  <script>
    const $ = (selector, root = document) => root.querySelector(selector);
    const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
    const toast = $("#toast");
    let toastTimer;
    function showToast(message) {
      toast.textContent = message;
      toast.classList.add("show");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove("show"), 2700);
    }
    function scrollToTarget(selector) {
      const target = $(selector);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    $$("[data-scroll]").forEach(button => button.addEventListener("click", () => scrollToTarget(button.dataset.scroll)));
    $$("[data-toast]").forEach(button => button.addEventListener("click", () => showToast(button.dataset.toast)));
    $("[data-promo-close]")?.addEventListener("click", () => {
      $(".announcement-bar")?.classList.add("dismissed");
      document.body.classList.add("promo-closed");
    });
    $("[data-floating-close]")?.addEventListener("click", event => {
      event.stopPropagation();
      $(".floating-tools")?.classList.add("dismissed");
    });
    $$("[data-menu]").forEach(button => {
      button.addEventListener("click", event => {
        event.stopPropagation();
        const item = button.closest(".nav-item");
        const willOpen = !item.classList.contains("open");
        $$(".nav-item").forEach(other => { other.classList.remove("open"); $("[data-menu]", other)?.setAttribute("aria-expanded", "false"); });
        item.classList.toggle("open", willOpen);
        button.setAttribute("aria-expanded", String(willOpen));
      });
    });
    document.addEventListener("click", event => {
      if (!event.target.closest(".nav-item")) $$(".nav-item").forEach(item => { item.classList.remove("open"); $("[data-menu]", item)?.setAttribute("aria-expanded", "false"); });
      if (!event.target.closest(".language")) $(".language")?.classList.remove("open");
      if (!event.target.closest(".model-select")) $(".model-select")?.classList.remove("open");
    });
    const language = $(".language");
    $("[data-language]")?.addEventListener("click", event => { event.stopPropagation(); language.classList.toggle("open"); });
    $$("[data-lang]").forEach(button => button.addEventListener("click", () => {
      $("[data-language]").firstChild.textContent = button.dataset.lang;
      language.classList.remove("open");
      showToast("Language preview switched to " + button.dataset.lang + ".");
    }));
    const mobilePanel = $("[data-mobile-panel]");
    $("[data-mobile-toggle]")?.addEventListener("click", () => {
      const open = mobilePanel.classList.toggle("open");
      $("[data-mobile-toggle]").setAttribute("aria-expanded", String(open));
      $("[data-mobile-toggle]").textContent = open ? "×" : "☰";
    });
    $$("[data-mobile-panel] a").forEach(link => link.addEventListener("click", () => {
      mobilePanel.classList.remove("open");
      $("[data-mobile-toggle]").textContent = "☰";
    }));
    $$("[data-mobile-expand]").forEach(button => button.addEventListener("click", () => {
      let next = button.nextElementSibling;
      let expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      while (next && next.classList.contains("mobile-sub")) {
        next.hidden = expanded;
        next = next.nextElementSibling;
      }
    }));
    $$("[data-composer-tab]").forEach(tab => tab.addEventListener("click", () => {
      $$("[data-composer-tab]").forEach(item => item.classList.remove("active"));
      tab.classList.add("active");
      const mode = tab.dataset.composerTab;
      const title = mode === "Drama Studio" ? "Build a world that stays consistent" : mode === "AI Image" ? "Create the frame before the film" : mode === "Video Agent" ? "From a brief to a complete cut" : "From prompt to finished film";
      const kicker = mode === "Drama Studio" ? "Drama Studio · Episodes" : mode + " · Canvas";
      $("#composer-title").textContent = title;
      $("#composer-kicker").textContent = kicker;
      $("#prompt").placeholder = mode === "AI Image" ? "Describe the image you want to create" : mode === "Drama Studio" ? "Describe a scene, character, or episode" : "Ask Topview to create a " + (mode === "Video Agent" ? "complete video" : "video");
      showToast(mode + " mode selected.");
    }));
    $$(".tool-chip").forEach(button => button.addEventListener("click", () => {
      button.classList.toggle("selected");
      showToast(button.dataset.tool + (button.classList.contains("selected") ? " added to the brief." : " removed from the brief."));
    }));
    const modelSelect = $(".model-select");
    $("[data-model-toggle]")?.addEventListener("click", event => { event.stopPropagation(); modelSelect.classList.toggle("open"); });
    $$("[data-model]").forEach(button => button.addEventListener("click", () => {
      $("#active-model").textContent = button.dataset.model;
      modelSelect.classList.remove("open");
      showToast(button.dataset.model + " selected for the next generation.");
    }));
    $$("[data-model-card]").forEach(card => card.addEventListener("click", () => {
      $("#active-model").textContent = card.dataset.modelCard;
      $$("[data-model-card]").forEach(item => item.classList.remove("selected"));
      card.classList.add("selected");
      scrollToTarget("#composer");
      showToast(card.dataset.modelCard + " selected in Composer.");
    }));
    $("#composer-submit")?.addEventListener("click", () => {
      const feedback = $("#composer-feedback");
      feedback.textContent = "Agent is planning scenes, selecting references, and preparing a first cut…";
      showToast("Your agent is planning the first scene.");
      setTimeout(() => { feedback.textContent = "Plan ready — review the scene direction on Canvas."; }, 1900);
    });
    $$("[data-filter]").forEach(button => button.addEventListener("click", () => {
      $$("[data-filter]").forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      const filter = button.dataset.filter;
      $$(".media-card").forEach(card => card.classList.toggle("hidden-card", filter !== "All" && card.dataset.category !== filter));
    }));
    $$("[data-play]").forEach(button => button.addEventListener("click", event => {
      event.stopPropagation();
      const card = button.closest(".media-card");
      const playing = card.classList.toggle("playing");
      button.textContent = playing ? "Ⅱ" : "▶";
      button.setAttribute("aria-label", playing ? "Pause media preview" : "Play media preview");
      showToast(playing ? "Preview playing — placeholder motion simulated." : "Preview paused.");
    }));
    const modal = $("#skills-modal");
    $$("[data-skill]").forEach(button => button.addEventListener("click", () => {
      $("#modal-title").textContent = button.dataset.skill;
      $("#modal-copy").textContent = button.dataset.skill + " is ready to connect with your current scene and creative brief.";
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
    }));
    function closeModal() { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); }
    $$("[data-close-modal]").forEach(button => button.addEventListener("click", closeModal));
    $("[data-scroll-modal]")?.addEventListener("click", () => { closeModal(); scrollToTarget("#composer"); });
    modal.addEventListener("click", event => { if (event.target === modal) closeModal(); });
    $$(".faq-question").forEach(button => button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const wasOpen = item.classList.contains("open");
      $$(".faq-item").forEach(other => other.classList.remove("open"));
      item.classList.toggle("open", !wasOpen);
    }));
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("revealed"); revealObserver.unobserve(entry.target); } }), { threshold: .12 });
    $$("[data-reveal]").forEach(element => revealObserver.observe(element));
  </script>
</body>
</html>
`;

export default {
  async fetch(request, env) {
    if (env && env.ASSETS) {
      const asset = await env.ASSETS.fetch(request);
      if (asset.status !== 404) return asset;
      return env.ASSETS.fetch(new Request(new URL("/index.html", request.url), request));
    }
    return new Response(html, {
      headers: { "content-type": "text/html; charset=UTF-8", "cache-control": "no-store" }
    });
  }
};
