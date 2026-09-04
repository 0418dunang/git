const PROMOS = [
  {
    image: "https://dj5nb01yl89hl.cloudfront.net/dashboard/banner/mwsikennry.jpg?x-process=image%2Fresize%2Cw_280%2Fformat%2Cwebp",
    kicker: "New model",
    title: "Seedance 2.5 is here",
    copy: "Sharper motion, cleaner cuts, and more control for short-form video.",
    note: "$3.6 / 30s",
  },
  {
    image: "https://dj5nb01yl89hl.cloudfront.net/dashboard/banner/fbyVbBEzuw.jpg?x-process=image%2Fresize%2Cw_280%2Fformat%2Cwebp",
    kicker: "Creator drop",
    title: "60 days of unlimited",
    copy: "Try more directions, variations, and visual references without slowing down.",
    note: "Limited offer",
  },
  {
    image: "https://dj5nb01yl89hl.cloudfront.net/dashboard/banner/MXbWeoFhgU.webp?x-process=image%2Fresize%2Cw_280%2Fformat%2Cwebp",
    kicker: "AI Canvas",
    title: "Every shot stays editable",
    copy: "Move from idea to storyboard, output, and review in one visual workspace.",
    note: "Start from a prompt",
  },
  {
    image: "https://dj5nb01yl89hl.cloudfront.net/dashboard/banner/fcSHlSJmpU.webp?x-process=image%2Fresize%2Cw_280%2Fformat%2Cwebp",
    kicker: "Video Agent",
    title: "Let the agent plan the cut",
    copy: "Add a brief, reference, or product URL and get a production-ready direction.",
    note: "Agent workflow",
  },
  {
    image: "https://dj5nb01yl89hl.cloudfront.net/dashboard/banner/5iTIaKL1D4.webp?x-process=image%2Fresize%2Cw_280%2Fformat%2Cwebp",
    kicker: "Image tools",
    title: "Build the visual system",
    copy: "Generate campaign images, characters, thumbnails, and product scenes together.",
    note: "Image to video",
  },
  {
    image: "https://dj5nb01yl89hl.cloudfront.net/dashboard/banner/eL6uUACOrJ.webp?x-process=image%2Fresize%2Cw_280%2Fformat%2Cwebp",
    kicker: "Drama Studio",
    title: "Turn a script into scenes",
    copy: "Keep characters, locations, and visual beats consistent across the story.",
    note: "Scene continuity",
  },
  {
    image: "https://dj5nb01yl89hl.cloudfront.net/dashboard/banner/n7Nr0AlYV3.webp?x-process=image%2Fresize%2Cw_280%2Fformat%2Cwebp",
    kicker: "Localization",
    title: "Make every market feel native",
    copy: "Create voiceover, dialogue, and alternate cuts for a global audience.",
    note: "30+ languages",
  },
  {
    image: "https://dj5nb01yl89hl.cloudfront.net/dashboard/banner/ATiIyAsNUS.webp?x-process=image%2Fresize%2Cw_280%2Fformat%2Cwebp",
    kicker: "Team mode",
    title: "Share the work in progress",
    copy: "Keep credits, references, and approved assets organized for the whole team.",
    note: "Built for teams",
  },
];

const CASES = [
  {
    id: "thirty-second-challenge",
    category: "30s Challenge",
    title: "A complete product story in thirty seconds",
    shortTitle: "30s product challenge",
    copy: "Start with one product and let the agent shape the hook, scene rhythm, product proof, and final CTA.",
    image: "https://dj5nb01yl89hl.cloudfront.net/dashboard/banner/mwsikennry.jpg",
    video: "https://dj5nb01yl89hl.cloudfront.net/media/videos/Eo77Cl7euqCTiTYE.mp4",
    duration: "00:30",
    stat: "Full cut",
  },
  {
    id: "ugc-product",
    category: "Marketing Video",
    title: "A product launch that feels native to the feed",
    shortTitle: "UGC product launch",
    copy: "A direct-response product story with creator energy, product close-ups, and a quick CTA.",
    image: "https://dj5nb01yl89hl.cloudfront.net/media/images/KgHl27-LpNNkWNrp.webp",
    video: "https://dj5nb01yl89hl.cloudfront.net/media/videos/Eo77Cl7euqCTiTYE.mp4",
    duration: "00:30",
    stat: "4.8x faster",
  },
  {
    id: "beauty-story",
    category: "Marketing Video",
    title: "A beauty routine with cinematic texture",
    shortTitle: "Beauty routine",
    copy: "Use a simple brief to move from product details to an expressive, editorial-looking cut.",
    image: "https://dj5nb01yl89hl.cloudfront.net/media/images/H3QeiZWlM6hUX5QI.webp",
    video: "https://dj5nb01yl89hl.cloudfront.net/media/videos/W9xwa7iSaZ8V5T9O.mp4",
    duration: "00:24",
    stat: "12 variants",
  },
  {
    id: "fashion-motion",
    category: "Social Media",
    title: "Fashion motion built for vertical screens",
    shortTitle: "Fashion motion",
    copy: "Generate a social-first sequence with rhythm, movement, and a visual hook in the opening second.",
    image: "https://dj5nb01yl89hl.cloudfront.net/media/images/NHFSq3qJYcc2Hqtp.webp",
    video: "https://dj5nb01yl89hl.cloudfront.net/media/videos/yXmn4aUepv5972gu.mp4",
    duration: "00:15",
    stat: "9:16 ready",
  },
  {
    id: "travel-brand",
    category: "Short Film",
    title: "A travel mood piece from one paragraph",
    shortTitle: "Travel mood piece",
    copy: "Let the agent find the visual language first, then turn the direction into a short film.",
    image: "https://dj5nb01yl89hl.cloudfront.net/dashboard/banner/rz758kEyu9.jpg",
    video: "https://dj5nb01yl89hl.cloudfront.net/dashboard/banner/8gKGS3W00R.mp4",
    duration: "00:42",
    stat: "3 scene arcs",
  },
  {
    id: "skincare-explainer",
    category: "Explainer",
    title: "Make a complex product easy to understand",
    shortTitle: "Skincare explainer",
    copy: "Combine a product URL, a few proof points, and clear scene beats for a compact explainer.",
    image: "https://dj5nb01yl89hl.cloudfront.net/dashboard/banner/IGC4tqg2Pr.jpg",
    video: "https://dj5nb01yl89hl.cloudfront.net/dashboard/banner/Q1qZzAm2Il.mp4",
    duration: "00:28",
    stat: "6 visual beats",
  },
  {
    id: "character-swap",
    category: "Character Swap",
    title: "Keep the scene, change the character",
    shortTitle: "Character swap",
    copy: "Test a new casting direction while preserving the framing, movement, and story moment.",
    image: "https://dj5nb01yl89hl.cloudfront.net/dashboard/banner/RbVxrv0mlh.jpg",
    video: "https://dj5nb01yl89hl.cloudfront.net/dashboard/banner/aCkLmyaiiA.mp4",
    duration: "00:18",
    stat: "Same camera",
  },
  {
    id: "animated-launch",
    category: "Animation",
    title: "A launch story with a playful visual system",
    shortTitle: "Animated launch",
    copy: "Use references and a tone prompt to create animated motion that keeps the product in focus.",
    image: "https://dj5nb01yl89hl.cloudfront.net/dashboard/banner/1q4RnPGIpq.jpg",
    video: "https://dj5nb01yl89hl.cloudfront.net/dashboard/banner/0kgEHwEHag.mp4",
    duration: "00:22",
    stat: "Brand matched",
  },
  {
    id: "social-hook",
    category: "Social Media",
    title: "Find the hook before the edit",
    shortTitle: "Social hook",
    copy: "Generate several opening directions, then keep the winning idea editable in the same Canvas.",
    image: "https://dj5nb01yl89hl.cloudfront.net/dashboard/banner/QG9dgV2loY.jpg",
    video: "https://dj5nb01yl89hl.cloudfront.net/dashboard/banner/K1u3OahjNn.mp4",
    duration: "00:12",
    stat: "5 openings",
  },
  {
    id: "image-design",
    category: "Image Design",
    title: "Build campaign stills before the video",
    shortTitle: "Campaign stills",
    copy: "Create a visual direction board with product frames, campaign art, and reusable social crops.",
    image: "https://dj5nb01yl89hl.cloudfront.net/dashboard/banner/uvn0kH3SFJ.webp",
    video: "https://dj5nb01yl89hl.cloudfront.net/dashboard/banner/2QdfOh5Nn6.mp4",
    duration: "00:20",
    stat: "4 crop sets",
  },
  {
    id: "clone-reference",
    category: "Video Clone",
    title: "Use a reference to create a fresh variation",
    shortTitle: "Reference clone",
    copy: "Bring the pacing and framing you like, then explore a new visual treatment around it.",
    image: "https://dj5nb01yl89hl.cloudfront.net/dashboard/banner/gysShcttqY.webp",
    video: "https://dj5nb01yl89hl.cloudfront.net/dashboard/banner/lrxDWqEi22.mp4",
    duration: "00:26",
    stat: "New direction",
  },
  {
    id: "product-photo",
    category: "Marketing Video",
    title: "Turn product photography into motion",
    shortTitle: "Product photography",
    copy: "Start with a still, add a movement cue, and let the agent build the reveal around the product.",
    image: "https://dj5nb01yl89hl.cloudfront.net/dashboard/banner/up955I2iN0.webp",
    video: "https://dj5nb01yl89hl.cloudfront.net/dashboard/banner/dD5CLz0XKw.mp4",
    duration: "00:16",
    stat: "Still to motion",
  },
  {
    id: "short-drama",
    category: "Short Film",
    title: "Keep a dramatic beat consistent",
    shortTitle: "Drama beat",
    copy: "Organize the scene, character, and visual references before generating the next shot.",
    image: "https://dj5nb01yl89hl.cloudfront.net/dashboard/banner/6WP70ZVF2W.webp",
    video: "https://dj5nb01yl89hl.cloudfront.net/dashboard/banner/Un7mHwvxOV.mp4",
    duration: "00:36",
    stat: "Shot continuity",
  },
];

const MODELS = [
  {
    id: "seedance-2-5",
    name: "Seedance 2.5",
    badge: "Featured",
    description: "Expressive motion, strong camera control, and polished short-form output.",
    price: "$3.6 / 30s",
    meta: "Video",
  },
  {
    id: "wan-3",
    name: "Wan 3.0",
    badge: "Cinematic",
    description: "A flexible engine for rich movement, atmosphere, and visual transitions.",
    price: "From 8 credits",
    meta: "Video",
  },
  {
    id: "seedance-2",
    name: "Seedance 2.0",
    badge: "Fast",
    description: "Fast iterations for social hooks, product scenes, and creative testing.",
    price: "From 4 credits",
    meta: "Video",
  },
  {
    id: "minimax-h3",
    name: "MiniMax H3",
    badge: "Dialogue",
    description: "Dialogue-friendly generation for character-led stories and explainers.",
    price: "From 6 credits",
    meta: "Video + voice",
  },
];

const MODE_CONFIG = {
  "AI Video": {
    placeholder: "Ask Topview to create a UGC-style product ad",
    hint: "Press Enter to generate",
    status: "Agent is ready when you are.",
    defaultModel: "Seedance 2.5",
  },
  "AI Image": {
    placeholder: "Describe the product image or campaign visual you want",
    hint: "Press Enter to generate an image",
    status: "Image agent is ready when you are.",
    defaultModel: "MiniMax H3",
  },
  "Video Agent": {
    placeholder: "Give the agent a brief, script, URL, or visual direction",
    hint: "Press Enter to brief the agent",
    status: "Video Agent is ready to plan your project.",
    defaultModel: "Seedance 2.5",
  },
  "Drama Studio": {
    placeholder: "Describe the scene, character, emotion, and camera direction",
    hint: "Press Enter to build a scene",
    status: "Drama Studio is ready for the next scene.",
    defaultModel: "Wan 3.0",
  },
};

const CANVAS_MODES = [
  {
    id: "canvas",
    label: "AI Canvas",
    title: "Plan, generate, and edit in context.",
    copy: "Turn a brief into scenes, references, and editable outputs without leaving the project view.",
    count: "12 assets",
    footer: ["Scene 01", "Product ref", "Review ready"],
    image: CASES[0].image,
    video: CASES[0].video,
    thumbs: [CASES[1].image, CASES[2].image],
  },
  {
    id: "drama",
    label: "Drama Studio",
    title: "Keep characters and story beats aligned.",
    copy: "Organize scripts, visual references, and continuity notes before the next shot is generated.",
    count: "08 scenes",
    footer: ["Scene 04", "Character lock", "Continuity"],
    image: CASES[4].image,
    video: CASES[4].video,
    thumbs: [CASES[12].image, CASES[7].image],
  },
  {
    id: "board",
    label: "Board",
    title: "See every direction at a glance.",
    copy: "Collect options, compare variants, and move the strongest idea forward with your team.",
    count: "24 frames",
    footer: ["Concept A", "Concept B", "Team notes"],
    image: CASES[9].image,
    video: CASES[9].video,
    thumbs: [CASES[10].image, CASES[11].image],
  },
  {
    id: "shot-composer",
    label: "3D Shot Composer",
    title: "Stage the shot before you spend credits.",
    copy: "Place characters and props, adjust the virtual camera, and explore consistent angles before generating the final clip.",
    count: "06 angles",
    footer: ["Camera lock", "Character ref", "Shot ready"],
    image: CASES[6].image,
    video: CASES[6].video,
    thumbs: [CASES[7].image, CASES[10].image],
  },
];

const state = {
  promoIndex: 0,
  selectedCaseId: CASES[0].id,
  caseCategory: "All",
  selectedModel: MODELS[0].name,
  mode: "AI Video",
  canvasMode: CANVAS_MODES[0].id,
  playingCaseId: null,
  playingHero: false,
  playingCanvas: false,
};

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[character]));
}

function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function scrollToTarget(selector) {
  const target = $(selector);
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function activeCase() {
  return CASES.find((item) => item.id === state.selectedCaseId) || CASES[0];
}

function filteredCases() {
  return state.caseCategory === "All"
    ? CASES
    : CASES.filter((item) => item.category === state.caseCategory);
}

function renderPromos() {
  const track = $("#promo-track");
  if (!track) return;
  track.innerHTML = PROMOS.map((promo, index) => `
    <button class="promo-card ${index === state.promoIndex ? "active" : ""}" type="button" data-promo-index="${index}">
      <img src="${promo.image}" alt="${escapeHtml(promo.title)}">
      <span>
        <span class="promo-kicker">${escapeHtml(promo.kicker)}</span>
        <h3>${escapeHtml(promo.title)}</h3>
        <p>${escapeHtml(promo.copy)}</p>
        <span class="promo-note">${escapeHtml(promo.note)}</span>
      </span>
    </button>
  `).join("");
}

function renderModels() {
  const list = $("#model-list");
  if (!list) return;
  list.innerHTML = MODELS.map((model) => `
    <button class="model-card ${model.name === state.selectedModel ? "active" : ""}" type="button" data-model="${escapeHtml(model.name)}">
      <span class="model-badge">${escapeHtml(model.badge)}</span>
      <h3>${escapeHtml(model.name)}</h3>
      <p>${escapeHtml(model.description)}</p>
      <span class="model-footer">
        <strong class="model-price">${escapeHtml(model.price)}</strong>
        <span class="model-meta">${escapeHtml(model.meta)}</span>
      </span>
    </button>
  `).join("");
}

function renderHeroPreviewStrip() {
  const strip = $("#hero-preview-strip");
  if (!strip) return;
  const current = activeCase();
  const related = CASES.filter((item) => item.id !== current.id && item.category === current.category).slice(0, 2);
  const items = [current, ...related];
  strip.innerHTML = items.map((item) => `
    <button class="preview-chip ${item.id === current.id ? "active" : ""}" type="button" data-case-id="${item.id}">
      <img src="${item.image}" alt="${escapeHtml(item.shortTitle)}" loading="lazy">
      <span>
        <span>${escapeHtml(item.category)}</span>
        <strong>${escapeHtml(item.shortTitle)}</strong>
      </span>
    </button>
  `).join("");
}

function stopVideo(video) {
  if (!video) return;
  video.pause();
  video.currentTime = 0;
}

function renderHeroPreview() {
  const item = activeCase();
  const image = $("#hero-preview-image");
  const video = $("#hero-preview-video");
  const viewport = $(".preview-viewport");
  if (!image || !video || !viewport) return;

  stopVideo(video);
  state.playingHero = false;
  viewport.classList.remove("is-playing");
  $("#hero-preview-play").textContent = "Play";
  image.src = item.image;
  image.alt = item.title;
  video.src = item.video;
  video.load();
  $("#hero-preview-badge").textContent = item.category;
  $("#hero-preview-title").textContent = item.title;
  $("#hero-preview-copy").textContent = item.copy;
  renderHeroPreviewStrip();
}

function renderCaseTabs() {
  const tabs = $("#case-tabs");
  if (!tabs) return;
  const preferredOrder = [
    "30s Challenge",
    "Short Film",
    "Marketing Video",
    "Animation",
    "Video Clone",
    "Social Media",
    "Explainer",
    "Character Swap",
    "Image Design",
  ];
  const available = new Set(CASES.map((item) => item.category));
  const categories = ["All", ...preferredOrder.filter((category) => available.has(category))];
  tabs.innerHTML = categories.map((category) => `
    <button class="case-tab ${category === state.caseCategory ? "active" : ""}" type="button" data-category="${escapeHtml(category)}">
      ${escapeHtml(category)}
    </button>
  `).join("");
}

function caseMedia(item, spotlight = false) {
  return `
    <div class="${spotlight ? "spotlight-media" : "case-media"} ${state.playingCaseId === item.id ? "is-playing" : ""}">
      <img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy">
      <video src="${item.video}" muted loop playsinline preload="metadata"></video>
      <button class="preview-play" type="button" data-play-case="${item.id}">
        ${state.playingCaseId === item.id ? "Pause" : "Play"}
      </button>
      <span class="preview-badge">${escapeHtml(item.category)}</span>
    </div>
  `;
}

function renderSpotlight() {
  const spotlight = $("#case-spotlight");
  if (!spotlight) return;
  const item = activeCase();
  spotlight.innerHTML = `
    <article class="spotlight-card">
      ${caseMedia(item, true)}
      <div class="spotlight-copy">
        <span class="case-badge">${escapeHtml(item.category)}</span>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.copy)}</p>
        <div class="spotlight-stats">
          <div class="spotlight-stat">
            <span>Duration</span>
            <strong>${escapeHtml(item.duration)}</strong>
          </div>
          <div class="spotlight-stat">
            <span>Workflow</span>
            <strong>${escapeHtml(item.stat)}</strong>
          </div>
        </div>
        <button class="secondary-button" type="button" data-use-case="${item.id}">Use this direction</button>
      </div>
    </article>
  `;
}

function renderCaseGrid() {
  const grid = $("#case-grid");
  if (!grid) return;
  const visible = filteredCases();
  grid.innerHTML = visible.map((item) => `
    <article class="case-card ${item.id === state.selectedCaseId ? "active" : ""} ${item.id === state.playingCaseId ? "playing" : ""}" data-case-id="${item.id}" tabindex="0">
      ${caseMedia(item)}
      <div class="case-copy">
        <span class="case-tag">${escapeHtml(item.category)}</span>
        <h3>${escapeHtml(item.shortTitle)}</h3>
        <p>${escapeHtml(item.copy)}</p>
      </div>
      <div class="case-meta">
        <span>${escapeHtml(item.duration)}</span>
        <span>${escapeHtml(item.stat)}</span>
      </div>
    </article>
  `).join("");
}

function renderCases() {
  renderCaseTabs();
  renderSpotlight();
  renderCaseGrid();
}

function renderCanvas() {
  const tabs = $("#canvas-tabs");
  const copy = $("#canvas-copy");
  const media = $("#canvas-media");
  const footer = $("#canvas-footer");
  if (!tabs || !copy || !media || !footer) return;
  const mode = CANVAS_MODES.find((item) => item.id === state.canvasMode) || CANVAS_MODES[0];

  tabs.innerHTML = CANVAS_MODES.map((item) => `
    <button class="canvas-tab ${item.id === state.canvasMode ? "active" : ""}" type="button" data-canvas-mode="${item.id}">
      ${escapeHtml(item.label)}
    </button>
  `).join("");

  copy.innerHTML = `
    <div class="canvas-line">
      <strong>${escapeHtml(mode.title)}</strong>
      <span>${escapeHtml(mode.copy)}</span>
    </div>
  `;

  media.innerHTML = `
    <div class="canvas-preview ${state.playingCanvas ? "is-playing" : ""}">
      <img src="${mode.image}" alt="${escapeHtml(mode.title)}">
      <video id="canvas-video" src="${mode.video}" muted loop playsinline preload="metadata"></video>
      <button class="preview-play" type="button" data-play-canvas>${state.playingCanvas ? "Pause" : "Play"}</button>
      <span class="preview-badge">${escapeHtml(mode.label)}</span>
    </div>
    <div class="canvas-stack">
      ${mode.thumbs.map((image, index) => `
        <div class="canvas-thumb">
          <img src="${image}" alt="Canvas reference ${index + 1}" loading="lazy">
        </div>
      `).join("")}
      <div class="canvas-thumb-body">
        <strong>Agent notes</strong>
        <span>Keep the product close-up in shot two and match the reference pacing.</span>
      </div>
    </div>
  `;
  $("#canvas-count").textContent = mode.count;
  footer.innerHTML = mode.footer.map((item) => `<span class="canvas-pill">${escapeHtml(item)}</span>`).join("");
}

function selectCase(id) {
  const item = CASES.find((candidate) => candidate.id === id);
  if (!item) return;
  state.selectedCaseId = item.id;
  state.playingCaseId = null;
  renderHeroPreview();
  renderCases();
}

function toggleCaseVideo(id, media) {
  const item = CASES.find((candidate) => candidate.id === id);
  if (!item || !media) return;
  const video = $("video", media);
  if (!video) return;

  if (state.playingCaseId === id) {
    stopVideo(video);
    state.playingCaseId = null;
    renderCases();
  } else {
    $$(".case-media.is-playing, .spotlight-media.is-playing").forEach((element) => {
      stopVideo($("video", element));
      element.classList.remove("is-playing");
    });
    state.playingCaseId = id;
    renderCases();
    const nextMedia = $(`[data-case-id="${id}"] .case-media, .spotlight-media`);
    const nextVideo = $("video", nextMedia);
    nextVideo?.play().catch(() => {});
  }
}

function setMode(mode) {
  state.mode = mode;
  const config = MODE_CONFIG[mode] || MODE_CONFIG["AI Video"];
  $$(".studio-tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.mode === mode));
  $("#prompt").placeholder = config.placeholder;
  $("#composer-hint").textContent = config.hint;
  $("#status-text").textContent = config.status;
  state.selectedModel = config.defaultModel;
  $("#selected-model-button").textContent = config.defaultModel;
  renderModels();
}

function updateOffer(index) {
  const promo = PROMOS[index];
  if (!promo) return;
  $("#hero-offer-main").textContent = promo.kicker === "New model" ? "Seedance 2.5" : "Topview Agent";
  $("#hero-offer-price").textContent = promo.note;
  $("#hero-offer-note").textContent = promo.title;
}

function setPromo(index, announce = false) {
  state.promoIndex = (index + PROMOS.length) % PROMOS.length;
  renderPromos();
  updateOffer(state.promoIndex);
  const card = $(`[data-promo-index="${state.promoIndex}"]`);
  card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  if (announce) showToast(PROMOS[state.promoIndex].title);
}

function cycleModel() {
  const currentIndex = MODELS.findIndex((model) => model.name === state.selectedModel);
  const next = MODELS[(currentIndex + 1) % MODELS.length];
  state.selectedModel = next.name;
  $("#selected-model-button").textContent = next.name;
  renderModels();
  showToast(`Model selected: ${next.name}`);
}

function simulateGenerate() {
  const prompt = $("#prompt");
  const status = $("#composer-status");
  const statusText = $("#status-text");
  const button = $("#generate-button");
  const value = prompt.value.trim();
  if (!value) {
    prompt.value = "Create a vertical product ad with a warm creator voice and three quick scene changes.";
  }

  button.disabled = true;
  status.classList.add("busy");
  statusText.textContent = "Agent is mapping scenes, references, and model choices...";
  window.setTimeout(() => {
    status.classList.remove("busy");
    statusText.textContent = "Draft ready. Your first direction is waiting on Canvas.";
    button.disabled = false;
    showToast("Draft generated. Open Canvas to keep editing.");
  }, 1400);
}

function toggleHeroVideo() {
  const video = $("#hero-preview-video");
  const viewport = $(".preview-viewport");
  if (!video || !viewport) return;
  if (state.playingHero) {
    stopVideo(video);
    state.playingHero = false;
    viewport.classList.remove("is-playing");
    $("#hero-preview-play").textContent = "Play";
  } else {
    video.play().catch(() => {});
    state.playingHero = true;
    viewport.classList.add("is-playing");
    $("#hero-preview-play").textContent = "Pause";
  }
}

function toggleCanvasVideo() {
  const video = $("#canvas-video");
  const preview = $(".canvas-preview");
  if (!video || !preview) return;
  if (state.playingCanvas) {
    stopVideo(video);
    state.playingCanvas = false;
  } else {
    state.playingCanvas = true;
  }
  renderCanvas();
  if (state.playingCanvas) $("#canvas-video")?.play().catch(() => {});
}

function closeMenus() {
  $$(".nav-group.open").forEach((group) => {
    group.classList.remove("open");
    $("button", group)?.setAttribute("aria-expanded", "false");
  });
}

function setupEvents() {
  document.addEventListener("click", (event) => {
    const scrollButton = event.target.closest("[data-scroll]");
    if (scrollButton) {
      event.preventDefault();
      scrollToTarget(scrollButton.dataset.scroll);
      $(".site-header")?.classList.remove("nav-open");
      $(".mobile-toggle")?.setAttribute("aria-expanded", "false");
      return;
    }

    const toastButton = event.target.closest("[data-toast]");
    if (toastButton) {
      showToast(toastButton.dataset.toast);
      return;
    }

    const menuTrigger = event.target.closest("[data-menu-trigger]");
    if (menuTrigger) {
      const group = menuTrigger.closest(".nav-group");
      const shouldOpen = !group.classList.contains("open");
      closeMenus();
      group.classList.toggle("open", shouldOpen);
      menuTrigger.setAttribute("aria-expanded", String(shouldOpen));
      return;
    }

    const promoCard = event.target.closest("[data-promo-index]");
    if (promoCard) {
      setPromo(Number(promoCard.dataset.promoIndex), true);
      return;
    }

    const modelCard = event.target.closest("[data-model]");
    if (modelCard) {
      state.selectedModel = modelCard.dataset.model;
      $("#selected-model-button").textContent = state.selectedModel;
      renderModels();
      showToast(`Model selected: ${state.selectedModel}`);
      return;
    }

    const modeTab = event.target.closest("[data-mode]");
    if (modeTab) {
      setMode(modeTab.dataset.mode);
      return;
    }

    const caseTab = event.target.closest("[data-category]");
    if (caseTab) {
      state.caseCategory = caseTab.dataset.category;
      const visible = filteredCases();
      if (!visible.some((item) => item.id === state.selectedCaseId)) {
        state.selectedCaseId = visible[0]?.id || CASES[0].id;
      }
      state.playingCaseId = null;
      renderHeroPreview();
      renderCases();
      return;
    }

    const caseCard = event.target.closest(".case-card[data-case-id]");
    if (caseCard && !event.target.closest("[data-play-case]")) {
      selectCase(caseCard.dataset.caseId);
      return;
    }

    const previewChip = event.target.closest("[data-case-id]");
    if (previewChip && !event.target.closest(".case-card")) {
      selectCase(previewChip.dataset.caseId);
      return;
    }

    const casePlay = event.target.closest("[data-play-case]");
    if (casePlay) {
      const media = casePlay.closest(".case-media, .spotlight-media");
      toggleCaseVideo(casePlay.dataset.playCase, media);
      return;
    }

    const useCase = event.target.closest("[data-use-case]");
    if (useCase) {
      const item = CASES.find((candidate) => candidate.id === useCase.dataset.useCase);
      if (item) {
        $("#prompt").value = `Create a new ${item.category.toLowerCase()} inspired by "${item.shortTitle}" with a fresh visual direction.`;
        scrollToTarget("#composer");
        showToast("Direction added to your prompt.");
      }
      return;
    }

    const canvasTab = event.target.closest("[data-canvas-mode]");
    if (canvasTab) {
      state.canvasMode = canvasTab.dataset.canvasMode;
      state.playingCanvas = false;
      renderCanvas();
      return;
    }

    if (event.target.closest("[data-play-canvas]")) {
      toggleCanvasVideo();
      return;
    }

    if (!event.target.closest(".nav-group")) closeMenus();
  });

  $("[data-promo-prev]")?.addEventListener("click", () => setPromo(state.promoIndex - 1, true));
  $("[data-promo-next]")?.addEventListener("click", () => setPromo(state.promoIndex + 1, true));
  $("[data-case-prev]")?.addEventListener("click", () => {
    const visible = filteredCases();
    const currentIndex = Math.max(0, visible.findIndex((item) => item.id === state.selectedCaseId));
    selectCase(visible[(currentIndex - 1 + visible.length) % visible.length].id);
  });
  $("[data-case-next]")?.addEventListener("click", () => {
    const visible = filteredCases();
    const currentIndex = Math.max(0, visible.findIndex((item) => item.id === state.selectedCaseId));
    selectCase(visible[(currentIndex + 1) % visible.length].id);
  });
  $("#hero-preview-play")?.addEventListener("click", toggleHeroVideo);
  $("#selected-model-button")?.addEventListener("click", cycleModel);
  $("#generate-button")?.addEventListener("click", simulateGenerate);
  $("[data-action='reference']")?.addEventListener("click", () => {
    $("#prompt").value = `${$("#prompt").value.trim()} Reference URL: https://example.com/product`.trim();
    $("#status-text").textContent = "Reference URL attached to the brief.";
    showToast("Reference URL attached.");
  });
  $("#file-input")?.addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    $("#status-text").textContent = `${file.name} attached to the brief.`;
    showToast(`${file.name} attached.`);
  });
  $("#prompt")?.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      simulateGenerate();
    }
  });
  $(".mobile-toggle")?.addEventListener("click", () => {
    const header = $(".site-header");
    const toggle = $(".mobile-toggle");
    const open = !header.classList.contains("nav-open");
    header.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });
}

function init() {
  renderPromos();
  renderModels();
  renderHeroPreview();
  renderCases();
  renderCanvas();
  updateOffer(0);
  setMode(state.mode);
  setupEvents();
}

init();
