const CATEGORIES = [
  {
    id: "operations",
    title: "Operations",
    zh: "操作词",
    note: "动词、介词、代词、连词等",
    tag: "OP",
    words: `come, get, give, go, keep, let, make, put, seem, take, be, do, have, say, see, send, may, will, about, across, after, against, among, at, before, between, by, down, from, in, off, on, over, through, to, under, up, with, as, for, of, till, than, a, the, all, any, every, little, much, no, other, some, such, that, this, I, he, you, who, and, because, but, or, if, though, while, how, when, where, why, again, ever, far, forward, here, near, now, out, still, then, there, together, well, almost, enough, even, not, only, quite, so, very, tomorrow, yesterday, north, south, east, west, please, yes`
  },
  {
    id: "general",
    title: "General Things",
    zh: "通用词",
    note: "一般事物与抽象名词",
    tag: "GEN",
    words: `account, act, addition, adjustment, advertisement, agreement, air, amount, amusement, animal, answer, apparatus, approval, argument, art, attack, attempt, attention, attraction, authority, back, balance, base, behavior, belief, birth, bit, bite, blood, blow, body, brass, bread, breath, brother, building, burn, burst, business, butter, canvas, care, cause, chalk, chance, change, cloth, coal, color, comfort, committee, company, comparison, competition, condition, connection, control, cook, copper, copy, cork, cotton, cough, country, cover, crack, credit, crime, crush, cry, current, curve, damage, danger, daughter, day, death, debt, decision, degree, design, desire, destruction, detail, development, digestion, direction, discovery, discussion, disease, disgust, distance, distribution, division, doubt, drink, driving, dust, earth, edge, education, effect, end, error, event, example, exchange, existence, expansion, experience, expert, fact, fall, family, father, fear, feeling, fiction, field, fight, fire, flame, flight, flower, fold, food, force, form, friend, front, fruit, glass, gold, government, grain, grass, grip, group, growth, guide, harbor, harmony, hate, hearing, heat, help, history, hole, hope, hour, humor, ice, idea, impulse, increase, industry, ink, insect, instrument, insurance, interest, invention, iron, jelly, join, journey, judge, jump, kick, kiss, knowledge, land, language, laugh, law, lead, learning, leather, letter, level, lift, light, limit, linen, liquid, list, look, loss, love, machine, man, manager, mark, market, mass, meal, measure, meat, meeting, memory, metal, middle, milk, mind, mine, minute, mist, money, month, morning, mother, motion, mountain, move, music, name, nation, need, news, night, noise, note, number, observation, offer, oil, operation, opinion, order, organization, ornament, owner, page, pain, paint, paper, part, paste, payment, peace, person, place, plant, play, pleasure, point, poison, polish, porter, position, powder, power, price, print, process, produce, profit, property, prose, protest, pull, punishment, purpose, push, quality, question, rain, range, rate, ray, reaction, reading, reason, record, regret, relation, religion, representative, request, respect, rest, reward, rhythm, rice, river, road, roll, room, rub, rule, run, salt, sand, scale, science, sea, seat, secretary, selection, self, sense, servant, sex, shade, shake, shame, shock, side, sign, silk, silver, sister, size, sky, sleep, slip, slope, smash, smell, smile, smoke, sneeze, snow, soap, society, son, song, sort, sound, soup, space, stage, start, statement, steam, steel, step, stitch, stone, stop, story, stretch, structure, substance, sugar, suggestion, summer, support, surprise, swim, system, talk, taste, tax, teaching, tendency, test, theory, thing, thought, thunder, time, tin, top, touch, trade, transport, trick, trouble, turn, twist, unit, use, value, verse, vessel, view, voice, walk, war, wash, waste, water, wave, wax, way, weather, week, weight, wind, wine, winter, woman, wood, wool, word, work, wound, writing, year`
  },
  {
    id: "picturable",
    title: "Picturable Things",
    zh: "图示词",
    note: "具体可见、容易画出的名词",
    tag: "PIC",
    words: `angle, ant, apple, arch, arm, army, baby, bag, ball, band, basin, basket, bath, bed, bee, bell, berry, bird, blade, board, boat, bone, book, boot, bottle, box, boy, brain, brake, branch, brick, bridge, brush, bucket, bulb, button, cake, camera, card, cart, carriage, cat, chain, cheese, chest, chin, church, circle, clock, cloud, coat, collar, comb, cord, cow, cup, curtain, cushion, dog, door, drain, drawer, dress, drop, ear, egg, engine, eye, face, farm, feather, finger, fish, flag, floor, fly, foot, fork, fowl, frame, garden, girl, glove, goat, gun, hair, hammer, hand, hat, head, heart, hook, horn, horse, hospital, house, island, jewel, kettle, key, knee, knife, knot, leaf, leg, library, line, lip, lock, map, match, monkey, moon, mouth, muscle, nail, neck, needle, nerve, net, nose, nut, office, orange, oven, parcel, pen, pencil, picture, pig, pin, pipe, plane, plate, plough, pocket, pot, potato, prison, pump, rail, rat, receipt, ring, rod, roof, root, sail, school, scissors, screw, seed, sheep, shelf, ship, shirt, shoe, skin, skirt, snake, sock, spade, sponge, spoon, spring, square, stamp, star, station, stem, stick, stocking, stomach, store, street, sun, table, tail, thread, throat, thumb, ticket, toe, tongue, tooth, town, train, tray, tree, trousers, umbrella, wall, watch, wheel, whip, whistle, window, wing, wire, worm`
  },
  {
    id: "qualities",
    title: "Qualities",
    zh: "性质词",
    note: "一般性质与描述词",
    tag: "QL",
    words: `able, acid, angry, automatic, beautiful, black, boiling, bright, broken, brown, cheap, chemical, chief, clean, clear, common, complex, conscious, cut, deep, dependent, early, elastic, electric, equal, fat, fertile, first, fixed, flat, free, frequent, full, general, good, great, grey, hanging, happy, hard, healthy, high, hollow, important, kind, like, living, long, male, married, material, medical, military, natural, necessary, new, normal, open, parallel, past, physical, political, poor, possible, present, private, probable, quick, quiet, ready, red, regular, responsible, right, round, same, second, separate, serious, sharp, smooth, sticky, stiff, straight, strong, sudden, sweet, tall, thick, tight, tired, true, violent, waiting, warm, wet, wide, wise, yellow, young`
  },
  {
    id: "opposites",
    title: "Opposites",
    zh: "反义对",
    note: "对立性质与常见反义词",
    tag: "OPP",
    words: `awake, bad, bent, bitter, blue, certain, cold, complete, cruel, dark, dead, dear, delicate, different, dirty, dry, false, feeble, female, foolish, future, green, ill, last, late, left, loose, loud, low, mixed, narrow, old, opposite, public, rough, sad, safe, secret, short, shut, simple, slow, small, soft, solid, special, strange, thin, white, wrong`
  }
];

const STORAGE_KEY = "ogden-basic-english-state-v2";
const elements = {
  tabs: document.getElementById("categoryTabs"),
  sections: document.getElementById("sections"),
  search: document.getElementById("searchInput"),
  progressText: document.getElementById("progressText"),
  percentText: document.getElementById("percentText"),
  progressBar: document.getElementById("progressBar"),
  resumeText: document.getElementById("resumeText"),
  listMode: document.getElementById("listModeBtn"),
  cardMode: document.getElementById("cardModeBtn"),
  review: document.getElementById("reviewBtn"),
  download: document.getElementById("downloadBtn"),
  reset: document.getElementById("resetBtn")
};

const words = CATEGORIES.flatMap((category) =>
  splitWords(category.words).map((word, index) => ({
    id: `${category.id}-${word.toLowerCase()}`,
    word,
    categoryId: category.id,
    categoryTitle: category.title,
    categoryZh: category.zh,
    tag: category.tag,
    order: index + 1
  }))
);

const state = loadState();

function splitWords(text) {
  return text.split(",").map((word) => word.trim()).filter(Boolean);
}

function loadState() {
  const fallback = {
    learned: [],
    category: "all",
    query: "",
    mode: "list",
    reviewOnly: false,
    lastOpened: null
  };

  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { ...fallback, ...stored, learned: stored?.learned || [] };
  } catch {
    return fallback;
  }
}

function saveState() {
  state.lastOpened = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function learnedSet() {
  return new Set(state.learned);
}

function setLearned(wordId, isLearned) {
  const learned = learnedSet();
  if (isLearned) learned.add(wordId);
  else learned.delete(wordId);
  state.learned = [...learned];
  saveState();
  render();
}

function categoryCounts() {
  return CATEGORIES.map((category) => ({
    ...category,
    count: splitWords(category.words).length
  }));
}

function renderTabs() {
  const categories = [{ id: "all", title: "All", zh: "全部", count: words.length }, ...categoryCounts()];
  elements.tabs.innerHTML = "";

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `tab${state.category === category.id ? " is-active" : ""}`;
    button.innerHTML = `<strong>${category.title}</strong><span>· ${category.zh}</span><strong>${category.count}</strong>`;
    button.addEventListener("click", () => {
      state.category = category.id;
      saveState();
      render();
    });
    elements.tabs.appendChild(button);
  });
}

function matchesWord(entry, query) {
  if (!query) return true;
  const haystack = `${entry.word} ${entry.categoryTitle} ${entry.categoryZh} ${entry.tag}`.toLowerCase();
  return haystack.includes(query.toLowerCase());
}

function filteredWords() {
  const learned = learnedSet();
  return words.filter((entry) => {
    const categoryOk = state.category === "all" || entry.categoryId === state.category;
    const queryOk = matchesWord(entry, state.query);
    const reviewOk = !state.reviewOnly || !learned.has(entry.id);
    return categoryOk && queryOk && reviewOk;
  });
}

function groupWords(entries) {
  return CATEGORIES.map((category) => ({
    ...category,
    entries: entries.filter((entry) => entry.categoryId === category.id)
  })).filter((category) => category.entries.length);
}

function renderProgress() {
  const learned = learnedSet();
  const count = words.filter((entry) => learned.has(entry.id)).length;
  const percent = Math.round((count / words.length) * 100);
  elements.progressText.textContent = `已学习 ${count} / ${words.length}`;
  elements.percentText.textContent = `${percent}%`;
  elements.progressBar.style.width = `${percent}%`;

  const dateText = state.lastOpened ? new Date(state.lastOpened).toLocaleString("zh-CN") : "现在开始";
  elements.resumeText.textContent = `学习记录会自动保存在本机浏览器。上次记录：${dateText}`;
}

function renderSections() {
  const learned = learnedSet();
  const groups = groupWords(filteredWords());
  elements.sections.classList.toggle("card-mode", state.mode === "card");
  elements.sections.innerHTML = "";

  if (!groups.length) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "没有找到匹配的词。";
    elements.sections.appendChild(empty);
    return;
  }

  groups.forEach((group) => {
    const section = document.createElement("section");
    section.className = "section";
    section.id = group.id;
    section.innerHTML = `
      <div class="section-heading">
        <div>
          <h2>${group.title}</h2>
          <p>${group.zh} · ${group.note}</p>
        </div>
        <span class="count">${group.entries.length} WORDS</span>
      </div>
      <div class="word-grid"></div>
    `;

    const grid = section.querySelector(".word-grid");
    group.entries.forEach((entry) => grid.appendChild(createWordCard(entry, learned.has(entry.id))));
    elements.sections.appendChild(section);
  });
}

function createWordCard(entry, isLearned) {
  const card = document.createElement("article");
  card.className = `word-card${isLearned ? " is-learned" : ""}`;
  card.innerHTML = `
    <div class="word-main">
      <div>
        <div class="word">${entry.word}</div>
        <p class="meta">${entry.categoryZh} · ${entry.categoryTitle} #${entry.order}</p>
      </div>
      <span class="tag">${entry.tag}</span>
    </div>
    <div class="word-actions">
      <button class="speak" type="button" aria-label="朗读 ${entry.word}">⌕</button>
      <label class="learned-check">
        <input type="checkbox" ${isLearned ? "checked" : ""} />
        <span>${isLearned ? "已学" : "未学"}</span>
      </label>
    </div>
  `;

  card.querySelector(".speak").textContent = "♪";
  card.querySelector(".speak").addEventListener("click", () => speak(entry.word));
  card.querySelector("input").addEventListener("change", (event) => {
    setLearned(entry.id, event.target.checked);
  });

  return card;
}

function renderControls() {
  elements.search.value = state.query;
  elements.review.classList.toggle("is-active", state.reviewOnly);
  elements.review.textContent = state.reviewOnly ? "显示全部" : "只看未学";
  elements.listMode.classList.toggle("is-active", state.mode === "list");
  elements.cardMode.classList.toggle("is-active", state.mode === "card");
}

function render() {
  renderTabs();
  renderControls();
  renderProgress();
  renderSections();
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.88;
  window.speechSynthesis.speak(utterance);
}

function downloadRemainingWords() {
  const learned = learnedSet();
  const remaining = words.filter((entry) => !learned.has(entry.id));
  const content = remaining.map((entry) => `${entry.word}\t${entry.categoryTitle}\t${entry.categoryZh}`).join("\n");
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "ogden-remaining-words.txt";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function resetProgress() {
  if (!confirm("确定要清空学习记录吗？")) return;
  state.learned = [];
  saveState();
  render();
}

elements.search.addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  saveState();
  renderSections();
});

elements.listMode.addEventListener("click", () => {
  state.mode = "list";
  saveState();
  render();
});

elements.cardMode.addEventListener("click", () => {
  state.mode = "card";
  saveState();
  render();
});

elements.review.addEventListener("click", () => {
  state.reviewOnly = !state.reviewOnly;
  saveState();
  render();
});

elements.download.addEventListener("click", downloadRemainingWords);
elements.reset.addEventListener("click", resetProgress);

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== elements.search) {
    event.preventDefault();
    elements.search.focus();
  }
});

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

saveState();
render();
