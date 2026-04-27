const TRAINER = {
  name: "Armin Nabizadeh",
  email: "armin.nabizade@gmail.com",
  phone: "+358 45 160 3940",
  company: "FITSTRONOMY"
};

const MUSCLES = {
  "Chest": ["Bench Press (Barbell)","Bench Press (Dumbbell)","Bench Press (Smith)","Incline Press (Dumbbell)","Incline Press (Barbell)","Decline Press (Dumbbell)","Decline Press (Barbell)","Press (Machine)","Fly (Cable)","Fly (Dumbbell)","Incline Fly (Dumbbell)","Incline Fly (Cable)","Decline Fly (Dumbbell)","Decline Fly (Cable)","Push-Up","Push-Up (Incline)","Push-Up (Knee)","Push-Up (Diamond)","Push-Up (Typewriter)","Pec Deck","Crossover (Low Cable)","Crossover (High Cable)","Crossover (Upper Cable)","Fly (Incline Cable)","Plate Press","Push-Up (BOSU Single-Arm)","Dips (Chest Focus)","Dips (Weighted Parallel)"],
  "Back": ["Pull-Up","Chin-Up","Pull-Up (Weighted)","Pull-Up (Assisted)","Row (Barbell)","Row (Dumbbell)","Cable Row (Close Grip)","Reverse Row (Barbell)","Reverse Row (Dumbbell)","Row (Barbell, Middle Grip)","Row (Seated Cable)","Row (Single-Arm Cable)","Lat Pulldown (Wide Grip)","Pulldown (Medium Grip)","Lat Pulldown (Close Grip)","Single-Arm Row (Dumbbell)","Row (T-Bar)","Row (Machine, Close Grip)","Incline Cable Row (Wide Grip)","Incline Dumbbell Row","Incline Row (Barbell)","Incline Row (Barbell, Middle Grip)","Pulldown (Incline Bench Rope)","Pullover (Rope)","Pulldown (Straight-Arm)","Rack Pull","Row (Meadows)"],
  "Shoulders": ["Seated Press (Smith)","Press (Barbell)","Military Press (Barbell)","Press (Dumbbell)","Press (Machine)","Arnold Press","Landmine Press","Lateral Raise","Lateral Raise (Dumbbell)","Lateral Raise (Cable)","Lateral Raise (Resistance Band)","Front Raise","Front Raise (Dumbbell)","Front Raise (Cable)","Rear Delt Fly","Bent-Over Lateral Raise (Dumbbell)","Bent-Over Lateral Raise (Cable)","Y-Raise (Prone)","Upright Row (Dumbbell)","Upright Row (Barbell)","Upright Row (Cable)","Face Pull (Cable)","Face Pull","Shrug","Shrug (Barbell)", "Shrug (Dumbbell)","Shrug (Cable)" ,"Handstand","Wall Handstand","Lying Rear Delt Cable Fly","Reverse Pec Deck"],
  "Biceps": ["Curl (Barbell)","Curl (Close-Grip Barbell)","Curl (Wide-Grip Barbell)","Curl (Dumbbell)","Incline Curl (Dumbbell)","Reverse Incline Curl (Dumbbell)","Reverse Incline Curl (EZ)","One-Dumbbell Curl","Hammer Curl","Preacher Curl","Curl (Cable)","Bayesian Curl (Cable)","Concentration Curl","Spider Curl","Curl (EZ Bar)","Zottman Curl","21s","Reverse Curl"],
  "Triceps": ["Bench Press (Close-Grip)","Press (Close-Grip)","Pushdown (Cable)","Skull Crusher","Skull Crusher (EZ Bar)","Skull Crusher (Dumbbell)","Overhead Extension (Cable)","Overhead Extension (Dumbbell)","Single-Arm Overhead Extension (Cable)","Single-Arm Overhead Extension (Dumbbell)","Extension (Incline Seated)","Extension (Cable)","Extension (Cable Rope)","Reverse Extension (Cable)","Single-Arm Extension (Cable)","Single-Arm Reverse Extension (Cable)","Dips (Tricep Focus)","Dip (Weighted)","Dip (Bench)","Kickback","Pushdown (Single-Arm)","Diamond Push-Up","Tate Press","JM Press"],
  "Quads": ["Squat (Barbell)","Squat (Back)","Squat","Squat (Full)","Squat (Half Smith)","Squat (Smith)","Squat (Box)","Leg Press","Leg Press (Seated)","Leg Press (Single-Leg)","Hack Squat","Split Squat (Bulgarian)","Lunge (Weighted)","Lunge (Walking)","Lunge (Forward)","Lunge (TRX Suspended)","Lunge (Side)","Squat (Cossack)","Leg Extension","Squat (Front)","Squat (Goblet)","Step-Up","Squat (Single-Leg)","Squat (Stability Ball Wall)","Wall Sit","Sissy Squat","Reverse Nordic","Squat (Pistol)"],
  "Hamstrings": ["Romanian Deadlift","Romanian Deadlift (Dumbbell)","Romanian Deadlift (Barbell)","Romanian Deadlift (Smith)","Romanian Deadlift (Single-Leg)","Romanian Deadlift (Single-Arm Single-Leg)","Deadlift (Staggered-Stance Single-Leg)","Leg Curl (Lying)","Hamstring Curl (Prone)","Leg Curl (Seated)","Leg Curl (Seated Single-Leg)","Hamstring Curl (Standing)","Leg Curl (Cable)","Hamstring Curl (Nordic)","Good Morning","Good Morning (Cable)","Deadlift (Stiff-Leg)","Leg Curl (Swiss Ball)","Hamstring Curl (Single-Leg)","Raise (Glute-Ham)","Swing (Kettlebell)","Sit-to-Stand"],
  "Glutes": ["Hip Thrust","Hip Thrust (Barbell)","Glute Bridge","Glute Bridge (Bench)","Glute Bridge (Single-Leg)","Kickback (Cable)","Split Squat (Bulgarian)","Squat (Sumo)","Step-Up","Clamshell","Abductor (Machine)","Hip Abduction","Hip Abduction (Machine)","Hip Abduction (Incline Cable)","Donkey Kick","Donkey Kick (Single Leg)","Frog Pump","Back Extension","Pull-Through (Cable)","Lateral Walk (Banded)","Romanian Deadlift"],
  "Calves": ["Standing Calf Raise","Seated Calf Raise","Leg Press Calf Raise","Press Calf Raise","Donkey Calf Raise","Single-Leg Calf Raise","Farmer's Walk on Toes","Box Jump (Calf Focus)"],
  "Abs/Core": ["Crunch","Machine Crunch","Bench Crunch","Reverse Crunch","Plank","Dead Bug","Bird Dog","Heel Touch","Hanging Leg Raise","Weighted Leg Raise","Incline Leg Raise","Leg Raise","Leg to Chest","Cable Crunch","Side Crunch","Side Cable Crunch","Ab Wheel Rollout","Russian Twist","Side Plank","Decline Sit-Up","Dragon Flag","Pallof Press"],
  "Forearms": ["Wrist Curl (Plate)","Wrist Curl (Resistance Band)","Palms-Up Wrist Curl","Dumbbell Twist","Reverse Curl","Farmer's Walk"],
  "Cardio": ["Treadmill Running","Treadmill Walking","Incline Treadmill Walking","Treadmill Walking Intervals","Cycling","Elliptical","Bike","Bike or Elliptical","Battle Ropes","Farmer's Walk"],
  "Balance": ["BOSU Single-Leg Hold","Handstand","Wall Handstand"],
  "Full Body": ["Deadlift","Power Clean","Thruster","Burpee","Kettlebell Swing","Turkish Get-Up","Clean & Press","Box Jump","Sled Push","Battle Ropes"]
};

const SORTED_MUSCLES = Object.fromEntries(
  Object.entries(MUSCLES).map(([muscle, exercises]) => [
    muscle,
    [...new Set(exercises)].sort((a, b) => a.localeCompare(b))
  ])
);

const SETS = ["1","2","3","4","5","6"];
const REPS = ["4","5","6","8","10","12","15","20","6-8","8-10","10-12","12-15","15-20","10-8-6","12-10-8","20-15-10-15-20","15-12-10-15","15-12-8-8","12-10-8-6","10-8-6-4","5+5+5","7+7+7","10+10","3+3+2+2+1+1","AMRAP","Time-based"];
const LINK_TYPES = ["","Superset","Triset","Giant Set"];
const TECHNIQUES = ["Standard","Straight Sets","Drop Set","LS: Drop Set","Pyramid","Rest-Pause","Alt. Rest Pause","21","Finisher","Feeder","Cluster Set","Time Under Tension","Circuit"];
const TEMPO = ["Controlled","2-0-2","3-1-2","4-0-1","Explosive","1-0-1","2-1-2","Slow Eccentric","Peak Contraction Pause"];
const REST = ["30s","45s","60s","90s","2 min","3 min","No Rest","As needed"];
const FIELD_OPTIONS = {
  sets: SETS,
  reps: REPS,
  tempo: TEMPO,
  rest: REST,
  technique: TECHNIQUES
};

const STORAGE_KEY = "gym-program-generator-state-v1";
const THEME_STORAGE_KEY = "gym-program-generator-theme-v1";
const LOGO_STORAGE_KEY = "gym-program-generator-logo-v1";
const ARCHIVE_STORAGE_KEY = "gym-program-generator-archive-v1";
const DAY_TEMPLATE_STORAGE_KEY = "gym-program-generator-day-templates-v1";
const PROGRAM_TEMPLATE_STORAGE_KEY = "gym-program-generator-program-templates-v1";
const THEMES = {
  classic_dark: {
    label: "Classic Dark",
    meta: "Current house theme",
    colors: ["#171717", "#1d1d1d", "#252a34", "#f3701e", "#e8d8c9"],
    vars: {
      "--red": "#f3701e",
      "--red-dark": "#d85f12",
      "--bg": "#171717",
      "--bg2": "#1d1d1d",
      "--bg3": "#252a34",
      "--bg4": "#4b607f",
      "--border": "#2a2a2a",
      "--border2": "#3a4455",
      "--text": "#e8d8c9",
      "--text2": "#b8ab9f",
      "--text3": "#7f8896",
      "--ink": "#111111"
    }
  },
  vintage_ledger: {
    label: "Vintage Ledger",
    meta: "Retro dark with cream, brick, sage",
    colors: ["#1a1a18", "#DCC9A9", "#B83A2D", "#4E6851", "#2b2a24"],
    vars: {
      "--red": "#B83A2D",
      "--red-dark": "#972d23",
      "--bg": "#1a1a18",
      "--bg2": "#211d1a",
      "--bg3": "#2b2a24",
      "--bg4": "#4E6851",
      "--border": "#34322d",
      "--border2": "#5a6658",
      "--text": "#DCC9A9",
      "--text2": "#b9ab93",
      "--text3": "#8f8a79",
      "--ink": "#14110c"
    }
  },
  performance_clay: {
    label: "Performance Clay",
    meta: "Earthy athletic palette",
    colors: ["#14110c", "#de5d0e", "#a28b73", "#81684a", "#3e3d2a"],
    vars: {
      "--red": "#de5d0e",
      "--red-dark": "#c54f07",
      "--bg": "#14110c",
      "--bg2": "#1c1711",
      "--bg3": "#3e3d2a",
      "--bg4": "#81684a",
      "--border": "#2d281f",
      "--border2": "#5b4a34",
      "--text": "#f0e2d2",
      "--text2": "#cbb39a",
      "--text3": "#948470",
      "--ink": "#110d09"
    }
  },
  signal_bright: {
    label: "Signal Bright",
    meta: "Energetic orange, cobalt, warm paper",
    colors: ["#fff8ee", "#ff6b00", "#1e4fff", "#ffd166", "#17130f"],
    vars: {
      "--red": "#ff6b00",
      "--red-dark": "#d95600",
      "--bg": "#fff8ee",
      "--bg2": "#fffdf8",
      "--bg3": "#f3e6d4",
      "--bg4": "#1e4fff",
      "--border": "#dcccb6",
      "--border2": "#c8ac86",
      "--text": "#17130f",
      "--text2": "#7b3f12",
      "--text3": "#8e7f6d",
      "--ink": "#111111"
    }
  },
  coastal_mint: {
    label: "Coastal Mint",
    meta: "Fresh mint, sea blue, sand paper",
    colors: ["#f3fff9", "#00a99d", "#005fcb", "#ffb347", "#102d28"],
    vars: {
      "--red": "#00a99d",
      "--red-dark": "#007f76",
      "--bg": "#f3fff9",
      "--bg2": "#ffffff",
      "--bg3": "#d2ece5",
      "--bg4": "#005fcb",
      "--border": "#afd8cc",
      "--border2": "#73b6a6",
      "--text": "#102d28",
      "--text2": "#1d5149",
      "--text3": "#4f847a",
      "--ink": "#081714"
    }
  }
};
let dayCount = 0;
let exerciseCount = 0;
let draggedExerciseId = null;
let draggedDayId = null;
let templateInsertAfterDayId = "";
let templatePanelAnchorMode = "settings";
let activeTemplatePanelType = "day";
let templatePanelAnchorElement = null;
let themeSubmenuAnchorElement = null;
let defaultDocumentTitle = document.title;

function muscleOptions(selected='') {
  return Object.keys(SORTED_MUSCLES).map(m => `<option value="${m}" ${m===selected?'selected':''}>${m}</option>`).join('');
}

function exerciseOptions(muscle) {
  return SORTED_MUSCLES[muscle] || [];
}

function presetOptions(role, row) {
  if (role === "muscle") {
    return Object.keys(SORTED_MUSCLES);
  }
  if (role === "exercise") {
    return exerciseOptions(getRowValue(row, "muscle"));
  }
  return FIELD_OPTIONS[role] || [];
}

function selectOpts(arr, selected='', placeholder='') {
  const ph = placeholder ? `<option value="">${placeholder}</option>` : '';
  return ph + arr.map(v => `<option value="${v}" ${v===selected?'selected':''}>${v}</option>`).join('');
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatMultilineText(value) {
  return escapeHtml(value).replace(/\n/g, "<br>");
}

function getStoredLogo() {
  return localStorage.getItem(LOGO_STORAGE_KEY) || "";
}

function parseDateInputValue(dateString) {
  if (!dateString) return null;
  const date = new Date(`${dateString}T00:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function formatDateInputValue(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return "";
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function calculateProgramEndDate(startDate, durationWeeks) {
  const parsedStartDate = parseDateInputValue(startDate);
  const weeks = Number(durationWeeks);
  if (!parsedStartDate || !Number.isFinite(weeks) || weeks <= 0) return "";
  const endDate = new Date(parsedStartDate);
  endDate.setDate(endDate.getDate() + weeks * 7);
  return formatDateInputValue(endDate);
}

function getCurrentThemeId() {
  return localStorage.getItem(THEME_STORAGE_KEY) || "classic_dark";
}

function applyTheme(themeId, shouldPersist = true) {
  const theme = THEMES[themeId] || THEMES.classic_dark;
  Object.entries(theme.vars).forEach(([name, value]) => {
    document.documentElement.style.setProperty(name, value);
  });
  document.documentElement.dataset.theme = themeId;
  if (shouldPersist) localStorage.setItem(THEME_STORAGE_KEY, themeId);
  renderThemeOptions(themeId);
  renderBrandingActions();
}

function renderThemeOptions(activeThemeId = getCurrentThemeId()) {
  const container = document.getElementById("themeOptions");
  if (!container) return;
  container.innerHTML = Object.entries(THEMES).map(([themeId, theme]) => `
    <button type="button" class="theme-option ${themeId === activeThemeId ? "is-active" : ""}" data-theme-id="${themeId}">
      <span class="theme-swatches">
        ${theme.colors.map(color => `<span class="theme-swatch" style="background:${color}"></span>`).join("")}
      </span>
      <span>
        <span class="theme-name">${escapeHtml(theme.label)}</span>
        <span class="theme-meta">${escapeHtml(theme.meta)}</span>
      </span>
    </button>
  `).join("");
}

function renderBrandingActions() {
  const hasLogo = Boolean(getStoredLogo());
  const logoStatus = document.getElementById("logoStatus");
  const removeLogoBtn = document.getElementById("removeLogoBtn");
  if (logoStatus) logoStatus.textContent = hasLogo ? "Uploaded" : "None";
  if (removeLogoBtn) removeLogoBtn.style.display = hasLogo ? "flex" : "none";
}

function toggleSettingsMenu(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  const menu = document.getElementById("settingsMenu");
  if (!menu) return;
  const willOpen = !menu.classList.contains("is-open");
  menu.classList.toggle("is-open");
  if (!willOpen) closeThemeSubmenu();
}

function closeSettingsMenu() {
  const menu = document.getElementById("settingsMenu");
  if (menu) menu.classList.remove("is-open");
  closeThemeSubmenu();
}

function toggleThemeSubmenu(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  const submenu = document.getElementById("themeSubmenu");
  if (!submenu) return;
  themeSubmenuAnchorElement = event?.currentTarget || null;
  positionThemeSubmenu(themeSubmenuAnchorElement);
  submenu.classList.toggle("is-open");
}

function openThemeSubmenu(event) {
  const submenu = document.getElementById("themeSubmenu");
  if (!submenu) return;
  themeSubmenuAnchorElement = event?.currentTarget || null;
  positionThemeSubmenu(themeSubmenuAnchorElement);
  submenu.classList.add("is-open");
  document.getElementById("templatePanel")?.classList.remove("is-open");
}

function closeThemeSubmenu() {
  const submenu = document.getElementById("themeSubmenu");
  if (submenu) submenu.classList.remove("is-open");
}

function closeAllDayActionMenus() {
  document.querySelectorAll('.day-action-menu.is-open').forEach(menu => {
    menu.classList.remove('is-open');
  });
}

function isMobileViewport() {
  return window.innerWidth <= 640;
}

function toggleDayActionMenu(dayId, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  const menu = document.getElementById(`day-action-menu-${dayId}`);
  if (!menu) return;
  const willOpen = !menu.classList.contains('is-open');
  closeAllDayActionMenus();
  if (willOpen) menu.classList.add('is-open');
}

function positionThemeSubmenu(anchorElement = null) {
  const submenu = document.getElementById("themeSubmenu");
  if (!submenu) return;
  if (isMobileViewport()) {
    submenu.style.left = "";
    submenu.style.top = "";
    submenu.style.right = "";
    return;
  }
  const submenuWidth = submenu.offsetWidth || 260;
  const submenuHeight = submenu.offsetHeight || 320;
  const anchor = anchorElement || themeSubmenuAnchorElement || document.querySelector('#settingsMenu .menu-action');
  if (!anchor) return;

  const rect = anchor.getBoundingClientRect();
  const maxLeft = Math.max(16, window.innerWidth - submenuWidth - 16);
  const maxTop = Math.max(16, window.innerHeight - submenuHeight - 16);
  const left = Math.min(Math.max(16, rect.left - submenuWidth - 2), maxLeft);
  const top = Math.min(Math.max(16, rect.top), maxTop);

  submenu.style.left = `${left}px`;
  submenu.style.top = `${top}px`;
}

function triggerLogoUpload() {
  const input = document.getElementById("logoUploadInput");
  if (input) input.click();
}

function clearStoredLogo() {
  localStorage.removeItem(LOGO_STORAGE_KEY);
  const input = document.getElementById("logoUploadInput");
  if (input) input.value = "";
  renderBrandingActions();
}

function getDayTemplates() {
  try {
    const raw = localStorage.getItem(DAY_TEMPLATE_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Failed to read day templates", error);
    return [];
  }
}

function setDayTemplates(templates) {
  localStorage.setItem(DAY_TEMPLATE_STORAGE_KEY, JSON.stringify(templates));
  renderTemplateList();
}

function getProgramTemplates() {
  try {
    const raw = localStorage.getItem(PROGRAM_TEMPLATE_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Failed to read program templates", error);
    return [];
  }
}

function setProgramTemplates(templates) {
  localStorage.setItem(PROGRAM_TEMPLATE_STORAGE_KEY, JSON.stringify(templates));
  renderTemplateList();
}

function handleLogoUpload(event) {
  const file = event?.target?.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const result = typeof reader.result === "string" ? reader.result : "";
    if (!result) return;
    localStorage.setItem(LOGO_STORAGE_KEY, result);
    renderBrandingActions();
  };
  reader.readAsDataURL(file);
}

function getArchiveEntries() {
  try {
    const raw = localStorage.getItem(ARCHIVE_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Failed to read client archive", error);
    return [];
  }
}

function setArchiveEntries(entries) {
  localStorage.setItem(ARCHIVE_STORAGE_KEY, JSON.stringify(entries));
  renderArchiveList();
}

function toggleArchivePanel() {
  const panel = document.getElementById("archivePanel");
  const templatePanel = document.getElementById("templatePanel");
  if (!panel) return;
  if (templatePanel) templatePanel.classList.remove("is-open");
  panel.classList.toggle("is-open");
}

function toggleTemplatePanel(templateType = "day", event = null) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  templateInsertAfterDayId = "";
  activeTemplatePanelType = templateType;
  const panel = document.getElementById("templatePanel");
  const archivePanel = document.getElementById("archivePanel");
  if (!panel) return;
  if (archivePanel) archivePanel.classList.remove("is-open");
  templatePanelAnchorMode = "settings";
  templatePanelAnchorElement = event?.currentTarget || null;
  positionTemplatePanel(templatePanelAnchorElement);
  panel.classList.toggle("is-open");
  renderTemplateList();
}

function openTemplatePanelFromMenu(templateType = "day", event = null) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  templateInsertAfterDayId = "";
  activeTemplatePanelType = templateType;
  const panel = document.getElementById("templatePanel");
  const archivePanel = document.getElementById("archivePanel");
  if (!panel) return;
  if (archivePanel) archivePanel.classList.remove("is-open");
  templatePanelAnchorMode = "settings";
  templatePanelAnchorElement = event?.currentTarget || null;
  positionTemplatePanel(templatePanelAnchorElement);
  panel.classList.add("is-open");
  closeThemeSubmenu();
  renderTemplateList();
}

function openTemplatePanelForDay(dayId, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  flushPendingEdits();
  templateInsertAfterDayId = dayId;
  activeTemplatePanelType = "day";
  const panel = document.getElementById("templatePanel");
  const archivePanel = document.getElementById("archivePanel");
  templatePanelAnchorMode = dayId;
  templatePanelAnchorElement = event?.currentTarget || null;
  if (archivePanel) archivePanel.classList.remove("is-open");
  positionTemplatePanel(templatePanelAnchorElement || document.getElementById(dayId));
  if (panel) panel.classList.add("is-open");
  renderTemplateList();
}

function switchTemplatePanelType(templateType) {
  activeTemplatePanelType = templateType;
  if (templateType !== "day") templateInsertAfterDayId = "";
  renderTemplateList();
}

function positionTemplatePanel(anchorElement = null) {
  const panel = document.getElementById("templatePanel");
  if (!panel) return;
  if (isMobileViewport()) {
    panel.style.left = "";
    panel.style.top = "";
    panel.style.right = "";
    return;
  }
  const panelWidth = panel.offsetWidth || 260;
  const panelHeight = panel.offsetHeight || 420;

  let top = 74;
  let left = window.innerWidth - panelWidth - 32;

  if (templatePanelAnchorMode === "settings") {
    const anchor = anchorElement || templatePanelAnchorElement || document.querySelector(".template-panel-trigger");
    if (anchor) {
      const rect = anchor.getBoundingClientRect();
      top = rect.top;
      left = rect.left - panelWidth - 2;
    }
  } else {
    const anchor = anchorElement || templatePanelAnchorElement || document.getElementById(templatePanelAnchorMode)?.querySelector(".day-template-btn");
    if (anchor) {
      const rect = anchor.getBoundingClientRect();
      top = rect.bottom + 10;
      left = rect.right - panelWidth;
    }
  }

  const maxLeft = Math.max(16, window.innerWidth - panelWidth - 16);
  const maxTop = Math.max(16, window.innerHeight - panelHeight - 16);
  panel.style.top = `${Math.min(Math.max(16, top), maxTop)}px`;
  panel.style.left = `${Math.min(Math.max(16, left), maxLeft)}px`;
}

function renderArchiveList() {
  const archiveList = document.getElementById("archiveList");
  const archiveCount = document.getElementById("archiveCount");
  const archiveSearch = document.getElementById("archiveSearch");
  if (!archiveList) return;

  const searchQuery = (archiveSearch?.value || "").trim().toLowerCase();
  const entries = getArchiveEntries();
  if (archiveCount) archiveCount.textContent = String(entries.length);

  const filteredEntries = entries.filter(entry => {
    if (!searchQuery) return true;
    const haystack = [
      entry.clientName,
      entry.displayDate,
      entry.savedLabel,
      entry.versionLabel,
      entry.state?.client?.name
    ].join(" ").toLowerCase();
    return haystack.includes(searchQuery);
  });

  if (!filteredEntries.length) {
    archiveList.innerHTML = `<div class="archive-empty">${searchQuery ? "No archive results match your search." : "No saved client programs yet."}</div>`;
    return;
  }

  archiveList.innerHTML = filteredEntries
    .sort((a, b) => (b.savedAt || "").localeCompare(a.savedAt || ""))
    .map(entry => {
      const daysCount = Array.isArray(entry.state?.days) ? entry.state.days.length : 0;
      return `
        <div class="archive-item">
          <div class="archive-item-head">
            <div class="archive-item-name">${escapeHtml(entry.clientName || "Untitled Client")}</div>
            <div class="archive-version">${escapeHtml(entry.versionLabel || "v1")}</div>
          </div>
          <div class="archive-item-meta">${escapeHtml(entry.displayDate || "No date")} · ${daysCount} day${daysCount === 1 ? "" : "s"} · Saved ${escapeHtml(entry.savedLabel || "recently")}</div>
          <div class="archive-item-actions">
            <button type="button" class="archive-item-btn" onclick="loadArchivedProgram('${entry.id}')">Load</button>
            <button type="button" class="archive-item-btn" onclick="deleteArchivedProgram('${entry.id}')">Delete</button>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderTemplateList() {
  const templateList = document.getElementById("templateList");
  const templateCount = document.getElementById("templateCount");
  const programTemplateCount = document.getElementById("programTemplateCount");
  const templateSummaryCount = document.getElementById("templateSummaryCount");
  const templateSearch = document.getElementById("templateSearch");
  const templatePanelContext = document.getElementById("templatePanelContext");
  const dayTemplateSwitch = document.getElementById("dayTemplateSwitch");
  const programTemplateSwitch = document.getElementById("programTemplateSwitch");
  if (!templateList) return;

  const dayTemplates = getDayTemplates();
  const programTemplates = getProgramTemplates();
  const templates = activeTemplatePanelType === "program" ? programTemplates : dayTemplates;
  const searchQuery = (templateSearch?.value || "").trim().toLowerCase();
  if (templateCount) templateCount.textContent = String(dayTemplates.length);
  if (programTemplateCount) programTemplateCount.textContent = String(programTemplates.length);
  if (templateSummaryCount) templateSummaryCount.textContent = String(dayTemplates.length + programTemplates.length);
  if (dayTemplateSwitch) dayTemplateSwitch.classList.toggle("is-active", activeTemplatePanelType === "day");
  if (programTemplateSwitch) programTemplateSwitch.classList.toggle("is-active", activeTemplatePanelType === "program");
  if (templateSearch) {
    templateSearch.placeholder = activeTemplatePanelType === "program"
      ? "Search program template name..."
      : "Search template name or day...";
  }
  if (templatePanelContext) {
    templatePanelContext.textContent = activeTemplatePanelType === "program"
      ? "Load a saved full-program template into the planner."
      : (templateInsertAfterDayId
        ? "Choose a template to insert below the selected day."
        : "Add a saved day template to the end of the program.");
  }

  const filteredTemplates = templates.filter(template => {
    if (!searchQuery) return true;
    const haystack = [
      template.name,
      template.data?.name,
      template.createdLabel
    ].join(" ").toLowerCase();
    return haystack.includes(searchQuery);
  });

  if (!filteredTemplates.length) {
    templateList.innerHTML = `<div class="archive-empty">${
      searchQuery
        ? "No templates match your search."
        : (activeTemplatePanelType === "program" ? "No saved program templates yet." : "No saved day templates yet.")
    }</div>`;
    return;
  }

  const actionLabel = activeTemplatePanelType === "program"
    ? "Load Program"
    : (templateInsertAfterDayId ? "Insert Below" : "Add to End");
  templateList.innerHTML = filteredTemplates
    .sort((a, b) => (b.createdAt || "").localeCompare(a.createdAt || ""))
    .map(template => {
      const isProgramTemplate = activeTemplatePanelType === "program";
      const daysCount = Array.isArray(template.data?.days) ? template.data.days.length : 0;
      const exerciseCount = Array.isArray(template.data?.exercises) ? template.data.exercises.length : 0;
      const meta = isProgramTemplate
        ? `${daysCount} day${daysCount === 1 ? "" : "s"} · ${escapeHtml(template.data?.durationWeeks || "4")} weeks · Saved ${escapeHtml(template.createdLabel || "recently")}`
        : `${escapeHtml(template.data?.name || "No day title")} · ${exerciseCount} exercise${exerciseCount === 1 ? "" : "s"} · Saved ${escapeHtml(template.createdLabel || "recently")}`;
      return `
        <div class="archive-item">
          <div class="archive-item-head">
            <div class="archive-item-name">${escapeHtml(template.name || "Untitled Template")}</div>
            <div class="archive-version">${isProgramTemplate ? "PROGRAM" : "DAY"}</div>
          </div>
          <div class="archive-item-meta">${meta}</div>
          <div class="archive-item-actions">
            <button type="button" class="archive-item-btn" onclick="${isProgramTemplate ? `loadProgramTemplate('${template.id}')` : `insertDayTemplate('${template.id}')`}">${actionLabel}</button>
            <button type="button" class="archive-item-btn" onclick="${isProgramTemplate ? `deleteProgramTemplate('${template.id}')` : `deleteDayTemplate('${template.id}')`}">Delete</button>
          </div>
        </div>
      `;
    })
    .join("");
}

function flushPendingEdits() {
  const activeElement = document.activeElement;
  if (activeElement instanceof HTMLElement) {
    const isEditableField = activeElement.matches("input, textarea, select");
    if (isEditableField) activeElement.blur();
  }
}

function saveClientProgram() {
  flushPendingEdits();
  saveState();
  const state = collectCurrentState();
  const clientName = (state.client?.name || "").trim() || "Untitled Client";
  const startDate = state.client?.startDate || "";
  const durationWeeks = state.client?.durationWeeks || "4";
  const displayDate = getProgramPeriodLabel(startDate, durationWeeks);
  const savedAt = new Date().toISOString();
  const savedLabel = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(new Date(savedAt));
  const normalizedKey = `${clientName.toLowerCase()}`;
  const entries = getArchiveEntries();
  const existingVersions = entries.filter(entry => entry.key === normalizedKey);
  const nextVersion = existingVersions.length
    ? Math.max(...existingVersions.map(entry => Number(entry.version || 1))) + 1
    : 1;
  const archiveEntry = {
    id: `archive-${Date.now()}`,
    key: normalizedKey,
    clientName,
    displayDate,
    savedAt,
    savedLabel,
    version: nextVersion,
    versionLabel: `v${nextVersion}`,
    state
  };

  entries.push(archiveEntry);
  setArchiveEntries(entries);
  const panel = document.getElementById("archivePanel");
  if (panel) panel.classList.add("is-open");
}

function saveDayAsTemplate(dayId) {
  flushPendingEdits();
  const day = document.getElementById(dayId);
  if (!day) return;
  templateInsertAfterDayId = dayId;
  const dayData = getSerializableDayData(day);
  const existingTemplates = getDayTemplates();
  const defaultName = dayData.name.trim() || `Day Template ${existingTemplates.length + 1}`;
  const templateName = window.prompt("Template name", defaultName)?.trim();
  if (!templateName) return;

  const createdAt = new Date().toISOString();
  const createdLabel = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(new Date(createdAt));

  existingTemplates.push({
    id: `day-template-${Date.now()}`,
    name: templateName,
    createdAt,
    createdLabel,
    data: dayData
  });

  setDayTemplates(existingTemplates);
  const menu = document.getElementById("settingsMenu");
  const panel = document.getElementById("templatePanel");
  if (menu) menu.classList.add("is-open");
  if (panel) panel.classList.add("is-open");
}

function getSerializableProgramTemplateData() {
  const state = collectCurrentState();
  return {
    durationWeeks: state.client?.durationWeeks || "4",
    preWorkout: state.client?.preWorkout || "",
    postWorkout: state.client?.postWorkout || "",
    trainer: {
      company: state.trainer?.company || TRAINER.company
    },
    days: state.days || []
  };
}

function saveProgramAsTemplate() {
  flushPendingEdits();
  saveState();
  const templateData = getSerializableProgramTemplateData();
  const existingTemplates = getProgramTemplates();
  const defaultName = `Program Template ${existingTemplates.length + 1}`;
  const templateName = window.prompt("Program template name", defaultName)?.trim();
  if (!templateName) return;

  const createdAt = new Date().toISOString();
  const createdLabel = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(new Date(createdAt));

  existingTemplates.push({
    id: `program-template-${Date.now()}`,
    name: templateName,
    createdAt,
    createdLabel,
    data: templateData
  });

  activeTemplatePanelType = "program";
  setProgramTemplates(existingTemplates);
  const panel = document.getElementById("templatePanel");
  templatePanelAnchorMode = "settings";
  templatePanelAnchorElement = document.querySelector(".template-panel-trigger:last-of-type");
  positionTemplatePanel(templatePanelAnchorElement);
  if (panel) panel.classList.add("is-open");
}

function insertDayTemplate(templateId) {
  flushPendingEdits();
  const template = getDayTemplates().find(item => item.id === templateId);
  if (!template?.data) return;
  const insertedDay = addDay(true, templateInsertAfterDayId, template.data);
  templateInsertAfterDayId = insertedDay?.id || "";
  renderTemplateList();
}

function deleteDayTemplate(templateId) {
  const templates = getDayTemplates().filter(template => template.id !== templateId);
  setDayTemplates(templates);
}

function loadProgramTemplate(templateId) {
  flushPendingEdits();
  const template = getProgramTemplates().find(item => item.id === templateId);
  if (!template?.data) return;
  const currentState = collectCurrentState();
  const templateState = {
    ...currentState,
    client: {
      ...currentState.client,
      durationWeeks: template.data.durationWeeks || "4",
      preWorkout: template.data.preWorkout || "",
      postWorkout: template.data.postWorkout || ""
    },
    trainer: {
      ...currentState.trainer,
      company: template.data.trainer?.company || currentState.trainer?.company || TRAINER.company
    },
    days: template.data.days || []
  };
  hydrateState(templateState);
  document.getElementById("templatePanel")?.classList.remove("is-open");
}

function deleteProgramTemplate(templateId) {
  const templates = getProgramTemplates().filter(template => template.id !== templateId);
  setProgramTemplates(templates);
}

function loadArchivedProgram(archiveId) {
  const entry = getArchiveEntries().find(item => item.id === archiveId);
  if (!entry?.state) return;
  hydrateState(entry.state);
  closeSettingsMenu();
}

function clearCurrentProgram() {
  flushPendingEdits();
  dayCount = 0;
  exerciseCount = 0;

  document.getElementById("clientName").value = "";
  document.getElementById("startDate").value = "";
  document.getElementById("programDuration").value = "4";
  document.getElementById("clientWeight").value = "";
  document.getElementById("clientHeight").value = "";
  document.getElementById("clientAge").value = "";
  document.getElementById("clientEmail").value = "";
  document.getElementById("preWorkout").value = "";
  document.getElementById("postWorkout").value = "";
  document.getElementById("trainerCompany").value = TRAINER.company;

  const daysContainer = document.getElementById("daysContainer");
  if (daysContainer) {
    daysContainer.querySelectorAll(".day-card").forEach(day => day.remove());
  }

  addDay(false);
  saveState();
  closeSettingsMenu();
}

function deleteArchivedProgram(archiveId) {
  const entries = getArchiveEntries().filter(entry => entry.id !== archiveId);
  setArchiveEntries(entries);
}

function getRowLinkKey(row) {
  const linkType = row.querySelector('[data-role="link-type"]')?.value || '';
  return linkType || '';
}

function getLinkGroupSize(linkType) {
  if (linkType === "Superset") return 2;
  if (linkType === "Triset") return 3;
  if (linkType === "Giant Set") return 4;
  return 1;
}

function getLinkBadgeLabel(linkType, position) {
  if (linkType === "Superset") return `Superset ${position}`;
  if (linkType === "Triset") return `Triset ${position}`;
  if (linkType === "Giant Set") return `Giant ${position}`;
  return `Link ${position}`;
}

function getRowValue(row, role) {
  return row.querySelector(`[data-role="${role}"]`)?.value || '';
}

function getExerciseName(row) {
  return getRowValue(row, "exercise").trim() || "—";
}

function autocompleteFieldHtml(exId, role, placeholder) {
  return `
    <div class="exercise-autocomplete">
      <div class="exercise-input-wrap">
        <input
          type="text"
          id="${role}-input-${exId}"
          data-role="${role}"
          placeholder="${placeholder}"
          oninput="handleAutocompleteInput('${exId}', '${role}')"
          onfocus="openAutocompleteMenu('${exId}', '${role}')"
          onblur="handleAutocompleteBlur('${exId}', '${role}')"
          onkeydown="handleAutocompleteKeydown('${exId}', '${role}', event)"
        >
        <button
          type="button"
          class="exercise-toggle"
          onclick="toggleAutocompleteMenu('${exId}', '${role}', event)"
          aria-label="Toggle ${role} suggestions"
        >▾</button>
      </div>
      <div id="${role}-menu-${exId}" class="exercise-menu"></div>
    </div>`;
}

function getRowData(row) {
  return {
    linkType: getRowValue(row, "link-type"),
    linkKey: getRowValue(row, "link-type"),
    muscle: getRowValue(row, "muscle") || "—",
    exercise: getExerciseName(row),
    sets: getRowValue(row, "sets") || "—",
    reps: getRowValue(row, "reps") || "—",
    tempo: getRowValue(row, "tempo") || "—",
    rest: getRowValue(row, "rest") || "—",
    technique: getRowValue(row, "technique") || "—",
    note: getRowValue(row, "note").trim()
  };
}

function insertAfterElement(element, referenceElement) {
  if (!element || !referenceElement?.parentNode) return;
  referenceElement.parentNode.insertBefore(element, referenceElement.nextSibling);
}

function getSerializableRowData(row) {
  return {
    muscle: getRowValue(row, "muscle"),
    exercise: getRowValue(row, "exercise"),
    sets: getRowValue(row, "sets"),
    reps: getRowValue(row, "reps"),
    tempo: getRowValue(row, "tempo"),
    rest: getRowValue(row, "rest"),
    linkType: getRowValue(row, "link-type"),
    technique: getRowValue(row, "technique"),
    note: getRowValue(row, "note")
  };
}

function getSerializableDayData(day) {
  return {
    name: day.querySelector(".day-title input")?.value || "",
    exercises: Array.from(day.querySelectorAll("tbody tr")).map(getSerializableRowData)
  };
}

function getMobileExerciseMeta(rowData) {
  const bits = [rowData.sets, rowData.reps].filter(Boolean);
  const setRep = bits.length === 2 ? `${bits[0]} x ${bits[1]}` : bits.join(" ");
  return [setRep, rowData.rest, rowData.tempo, rowData.technique].filter(Boolean).join(" · ");
}

function updateDayNumbers() {
  const days = document.querySelectorAll(".day-card");
  days.forEach((day, index) => {
    const numberLabel = day.querySelector("[data-role='day-number']");
    if (numberLabel) numberLabel.textContent = String(index + 1).padStart(2, "0");
  });
}

function collectCurrentState() {
  return {
    dayCount,
    exerciseCount,
    client: {
      name: document.getElementById("clientName").value,
      startDate: document.getElementById("startDate").value,
      durationWeeks: document.getElementById("programDuration").value,
      weight: document.getElementById("clientWeight").value,
      height: document.getElementById("clientHeight").value,
      age: document.getElementById("clientAge").value,
      email: document.getElementById("clientEmail").value,
      preWorkout: document.getElementById("preWorkout").value,
      postWorkout: document.getElementById("postWorkout").value
    },
    trainer: {
      company: document.getElementById("trainerCompany").value
    },
    days: Array.from(document.querySelectorAll(".day-card")).map(getSerializableDayData)
  };
}

function saveState() {
  const state = collectCurrentState();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  renderMobileExerciseLists();
}

function restoreExerciseRow(row, rowData) {
  row.querySelector('[data-role="muscle"]').value = rowData.muscle || "";
  updateExercises(row.id);
  row.querySelector('[data-role="exercise"]').value = rowData.exercise || "";
  row.querySelector('[data-role="sets"]').value = rowData.sets || "3";
  row.querySelector('[data-role="reps"]').value = rowData.reps || "10";
  row.querySelector('[data-role="tempo"]').value = rowData.tempo || "Controlled";
  row.querySelector('[data-role="rest"]').value = rowData.rest || "60s";
  row.querySelector('[data-role="link-type"]').value = rowData.linkType || "";
  row.querySelector('[data-role="technique"]').value = rowData.technique || "Standard";
  row.querySelector('[data-role="note"]').value = rowData.note || "";
  updateNoteState(row.id);
  syncRowState(row);
}

function hydrateState(state) {
  try {
    dayCount = 0;
    exerciseCount = 0;

    document.getElementById("clientName").value = state.client?.name || "";
    document.getElementById("startDate").value = state.client?.startDate || "";
    document.getElementById("programDuration").value = state.client?.durationWeeks || "4";
    document.getElementById("clientWeight").value = state.client?.weight || "";
    document.getElementById("clientHeight").value = state.client?.height || "";
    document.getElementById("clientAge").value = state.client?.age || "";
    document.getElementById("clientEmail").value = state.client?.email || "";
    document.getElementById("preWorkout").value = state.client?.preWorkout || "";
    document.getElementById("postWorkout").value = state.client?.postWorkout || "";
    document.getElementById("trainerCompany").value = state.trainer?.company || TRAINER.company;

    if (Array.isArray(state.days) && state.days.length) {
      state.days.forEach(dayData => {
        addDay();
        const day = document.querySelector(".day-card:last-child");
        day.querySelector(".day-title input").value = dayData.name || "";
        const tbody = day.querySelector("tbody");
        tbody.innerHTML = "";

        (dayData.exercises || []).forEach(exerciseData => {
          const row = addExercise(day.id, false);
          restoreExerciseRow(row, exerciseData);
        });

        if (!dayData.exercises?.length) addExercise(day.id, false);
      });
      exerciseCount = Math.max(exerciseCount, state.exerciseCount || 0);
      updateDayNumbers();
      saveState();
    } else {
      addDay();
    }
  } catch (error) {
    console.error("Failed to hydrate saved program", error);
    return false;
  }
  return true;
}

function restoreState() {
  const rawState = localStorage.getItem(STORAGE_KEY);
  if (!rawState) {
    addDay();
    return;
  }

  try {
    const state = JSON.parse(rawState);
    if (!hydrateState(state)) addDay();
  } catch (error) {
    console.error("Failed to restore saved program", error);
    addDay();
  }
}

function renderMobileExerciseLists() {
  document.querySelectorAll('.day-card').forEach(day => {
    let mobileList = day.querySelector('.mobile-exercise-list');
    if (!mobileList) {
      mobileList = document.createElement('div');
      mobileList.className = 'mobile-exercise-list';
      day.querySelector('.day-body')?.insertBefore(mobileList, day.querySelector('.add-ex-btn'));
    }

    const rows = Array.from(day.querySelectorAll('tbody tr'));
    const rowsData = rows.map(row => ({
      row,
      rowData: getSerializableRowData(row),
      classes: [],
      groupBadge: '',
      groupType: ''
    }));

    let index = 0;
    while (index < rowsData.length) {
      const current = rowsData[index];
      const linkType = current.rowData.linkType || '';
      if (!linkType) {
        index += 1;
        continue;
      }

      const groupSize = getLinkGroupSize(linkType);
      const groupRows = [];
      let cursor = index;

      while (cursor < rowsData.length && groupRows.length < groupSize && (rowsData[cursor].rowData.linkType || '') === linkType) {
        groupRows.push(rowsData[cursor]);
        cursor += 1;
      }

      if (groupRows.length === 1) {
        groupRows[0].classes.push('mobile-linked-single');
        groupRows[0].groupBadge = getLinkBadgeLabel(linkType, 1);
        groupRows[0].groupType = linkType;
        index += 1;
        continue;
      }

      groupRows.forEach((groupRow, groupIndex) => {
        groupRow.classes.push('mobile-linked');
        groupRow.groupBadge = getLinkBadgeLabel(linkType, groupIndex + 1);
        groupRow.groupType = linkType;
        if (groupIndex === 0) groupRow.classes.push('mobile-linked-start');
        else if (groupIndex === groupRows.length - 1) groupRow.classes.push('mobile-linked-end');
        else groupRow.classes.push('mobile-linked-middle');
      });

      index += groupRows.length;
    }

    mobileList.innerHTML = rowsData.map(({ row, rowData, classes, groupBadge, groupType }) => {
      const meta = getMobileExerciseMeta(rowData);
      const noteBadge = rowData.note?.trim() ? `<span class="mobile-exercise-note-badge">Note</span>` : '';
      const linkedBadge = groupBadge
        ? `<span class="mobile-exercise-link-badge" aria-label="${escapeHtml(groupType)} group">${escapeHtml(groupBadge)}</span>`
        : '';
      return `
        <div class="mobile-exercise-card ${classes.join(' ')}">
          <button type="button" class="mobile-exercise-main" onclick="openMobileExerciseEditor('${row.id}')">
            ${linkedBadge}
            <div class="mobile-exercise-muscle">${escapeHtml(rowData.muscle || 'Muscle')}</div>
            <div class="mobile-exercise-name">${escapeHtml(rowData.exercise || 'Exercise')}</div>
            <div class="mobile-exercise-meta">${escapeHtml(meta || 'Tap to edit details')}${noteBadge}</div>
          </button>
          <div class="mobile-exercise-actions">
            <button type="button" class="move-up-btn" onclick="moveExercise('${row.id}', 'up')" aria-label="Move exercise up">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 14l6-6 6 6"></path></svg>
            </button>
            <button type="button" class="move-down-btn" onclick="moveExercise('${row.id}', 'down')" aria-label="Move exercise down">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 10l6 6 6-6"></path></svg>
            </button>
            <button type="button" class="dup-ex" onclick="duplicateExercise('${row.id}')" aria-label="Duplicate exercise">⧉</button>
            <button type="button" class="del-ex" onclick="removeExercise('${row.id}')" aria-label="Remove exercise">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M6 6l12 12M18 6L6 18"></path>
              </svg>
            </button>
          </div>
        </div>
      `;
    }).join('') + `
      <button type="button" class="mobile-add-exercise-card" onclick="createMobileExercise('${day.id}')">
        <span>＋</span>
        <span>Add Exercise</span>
      </button>
    `;
  });
}

function refreshDayLinkStates(dayId) {
  const tbody = document.getElementById('tbody-' + dayId);
  if (!tbody) return;

  const rows = Array.from(tbody.querySelectorAll('tr'));
  rows.forEach(row => {
    row.classList.remove('linked-row', 'linked-start', 'linked-middle', 'linked-end', 'linked-alt');
  });

  let index = 0;
  let visualGroupIndex = 0;
  while (index < rows.length) {
    const row = rows[index];
    const linkKey = getRowLinkKey(row);
    if (!linkKey) {
      index += 1;
      continue;
    }

    const groupSize = getLinkGroupSize(linkKey);
    const groupRows = [];
    let cursor = index;

    while (cursor < rows.length && groupRows.length < groupSize && getRowLinkKey(rows[cursor]) === linkKey) {
      groupRows.push(rows[cursor]);
      cursor += 1;
    }

    if (groupRows.length === 1) {
      groupRows[0].classList.add('linked-row');
      if (visualGroupIndex % 2 === 1) groupRows[0].classList.add('linked-alt');
      visualGroupIndex += 1;
      index += 1;
      continue;
    }

    groupRows.forEach((groupRow, groupIndex) => {
      groupRow.classList.add('linked-row');
      if (visualGroupIndex % 2 === 1) groupRow.classList.add('linked-alt');
      if (groupIndex === 0) groupRow.classList.add('linked-start');
      else if (groupIndex === groupRows.length - 1) groupRow.classList.add('linked-end');
      else groupRow.classList.add('linked-middle');
    });

    visualGroupIndex += 1;
    index += groupRows.length;
  }
}

function syncRowState(row) {
  if (!row) return;
  const dayCard = row.closest('.day-card');
  if (!dayCard) return;
  refreshDayLinkStates(dayCard.id);
}

function clearDayDropTargets() {
  document.querySelectorAll('.day-card.day-drop-target-before, .day-card.day-drop-target-after').forEach(day => {
    day.classList.remove('day-drop-target-before', 'day-drop-target-after');
  });
}

function armDayDrag(dayId) {
  const day = document.getElementById(dayId);
  if (!day) return;
  day.draggable = true;
}

function disarmDayDrag(dayId) {
  window.setTimeout(() => {
    const day = document.getElementById(dayId);
    if (day) day.draggable = false;
  }, 0);
}

function handleDayDragStart(dayId, event) {
  const day = document.getElementById(dayId);
  if (!day) {
    if (event) event.preventDefault();
    return;
  }
  draggedDayId = dayId;
  day.querySelector('.day-header')?.classList.add('dragging');
  closeAllAutocompleteMenus();
  closeAllNotePopovers();
  if (event?.dataTransfer) {
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', dayId);
    event.dataTransfer.setDragImage(day, 24, 24);
  }
}

function handleDayDragOver(event) {
  const container = document.getElementById('daysContainer');
  const draggedDay = draggedDayId ? document.getElementById(draggedDayId) : null;
  if (!container || !draggedDay || draggedDay.parentElement !== container) return;

  event.preventDefault();
  clearDayDropTargets();

  const dayCards = Array.from(container.querySelectorAll('.day-card')).filter(day => day !== draggedDay);
  let insertBeforeDay = null;

  for (const day of dayCards) {
    const rect = day.getBoundingClientRect();
    const midpoint = rect.top + rect.height / 2;
    if (event.clientY < midpoint) {
      insertBeforeDay = day;
      break;
    }
  }

  if (insertBeforeDay) {
    insertBeforeDay.classList.add('day-drop-target-before');
    container.insertBefore(draggedDay, insertBeforeDay);
  } else {
    const lastDay = dayCards[dayCards.length - 1];
    if (lastDay) lastDay.classList.add('day-drop-target-after');
    container.appendChild(draggedDay);
  }
}

function finishDayDrag(dayId) {
  const day = document.getElementById(dayId);
  if (!day) return;
  day.querySelector('.day-header')?.classList.remove('dragging');
  day.draggable = false;
  clearDayDropTargets();
  draggedDayId = null;
  updateDayNumbers();
  saveState();
}

function moveDay(dayId, direction) {
  const day = document.getElementById(dayId);
  const container = document.getElementById('daysContainer');
  if (!day || !container) return;

  if (direction === 'up') {
    const previousDay = day.previousElementSibling;
    if (previousDay?.classList.contains('day-card')) {
      container.insertBefore(day, previousDay);
    }
  } else {
    const nextDay = day.nextElementSibling;
    if (nextDay?.classList.contains('day-card')) {
      container.insertBefore(nextDay, day);
    }
  }

  updateDayNumbers();
  saveState();
}

function clearDropTargets(dayId) {
  const tbody = document.getElementById(`tbody-${dayId}`);
  if (!tbody) return;
  tbody.querySelectorAll('.drop-target-before, .drop-target-after').forEach(row => {
    row.classList.remove('drop-target-before', 'drop-target-after');
  });
}

function armExerciseDrag(exId) {
  const row = document.getElementById(exId);
  if (!row) return;
  row.draggable = true;
}

function disarmExerciseDrag(exId) {
  window.setTimeout(() => {
    const row = document.getElementById(exId);
    if (row) row.draggable = false;
  }, 0);
}

function handleExerciseDragStart(exId, event) {
  const row = document.getElementById(exId);
  if (!row) {
    if (event) event.preventDefault();
    return;
  }
  draggedExerciseId = exId;
  row.classList.add('dragging');
  closeAllAutocompleteMenus();
  closeAllNotePopovers();
  if (event?.dataTransfer) {
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', exId);
    event.dataTransfer.setDragImage(row, 24, 24);
  }
}

function handleExerciseDragOver(dayId, event) {
  const tbody = document.getElementById(`tbody-${dayId}`);
  const draggedRow = draggedExerciseId ? document.getElementById(draggedExerciseId) : null;
  if (!tbody || !draggedRow || draggedRow.closest('tbody') !== tbody) return;

  event.preventDefault();
  clearDropTargets(dayId);

  const candidateRows = Array.from(tbody.querySelectorAll('tr')).filter(row => row !== draggedRow);
  let insertBeforeRow = null;

  for (const row of candidateRows) {
    const rect = row.getBoundingClientRect();
    const midpoint = rect.top + rect.height / 2;
    if (event.clientY < midpoint) {
      insertBeforeRow = row;
      break;
    }
  }

  if (insertBeforeRow) {
    insertBeforeRow.classList.add('drop-target-before');
    tbody.insertBefore(draggedRow, insertBeforeRow);
  } else {
    const lastRow = candidateRows[candidateRows.length - 1];
    if (lastRow) lastRow.classList.add('drop-target-after');
    tbody.appendChild(draggedRow);
  }
}

function finishExerciseDrag(exId) {
  const row = document.getElementById(exId);
  if (!row) return;
  row.classList.remove('dragging');
  row.draggable = false;
  const dayCard = row.closest('.day-card');
  if (dayCard) {
    clearDropTargets(dayCard.id);
    refreshDayLinkStates(dayCard.id);
  }
  draggedExerciseId = null;
  saveState();
}

function moveExercise(exId, direction) {
  const row = document.getElementById(exId);
  const tbody = row?.parentElement;
  if (!row || !tbody) return;

  if (direction === 'up') {
    const previousRow = row.previousElementSibling;
    if (previousRow) tbody.insertBefore(row, previousRow);
  } else {
    const nextRow = row.nextElementSibling;
    if (nextRow) tbody.insertBefore(nextRow, row);
  }

  const dayCard = row.closest('.day-card');
  if (dayCard) refreshDayLinkStates(dayCard.id);
  saveState();
}

function getMobileExerciseEditorFields() {
  return {
    backdrop: document.getElementById('mobileExerciseEditorBackdrop'),
    note: document.getElementById('mobileExerciseNote')
  };
}

function fieldSupportsMobileCustomValue(field) {
  return ['exercise', 'sets', 'reps', 'tempo', 'rest', 'technique'].includes(field);
}

function getMobileEditorCustomLabel(field) {
  if (field === 'exercise') return 'Custom exercise...';
  return `Custom ${field}...`;
}

function ensureMobileExerciseEditorOptions() {
  renderMobileEditorPicker('muscle');
  renderMobileEditorPicker('exercise');
  renderMobileEditorPicker('sets');
  renderMobileEditorPicker('reps');
  renderMobileEditorPicker('tempo');
  renderMobileEditorPicker('rest');
  renderMobileEditorPicker('link');
  renderMobileEditorPicker('technique');
}

function updateMobileExerciseExerciseOptions(selectedExercise = '') {
  renderMobileEditorPicker('exercise', selectedExercise);
}

function getMobileEditorPickerButton(field) {
  const id = `mobileExercise${field.charAt(0).toUpperCase()}${field.slice(1)}Picker`;
  return document.getElementById(id);
}

function getMobileEditorPickerMenu(field) {
  const id = `mobileExercise${field.charAt(0).toUpperCase()}${field.slice(1)}Menu`;
  return document.getElementById(id);
}

function getMobileEditorPickerOptions(field) {
  if (field === 'muscle') return Object.keys(SORTED_MUSCLES);
  if (field === 'exercise') return exerciseOptions(getMobileEditorPickerValue('muscle'));
  if (field === 'sets') return SETS;
  if (field === 'reps') return REPS;
  if (field === 'tempo') return TEMPO;
  if (field === 'rest') return REST;
  if (field === 'link') return LINK_TYPES;
  if (field === 'technique') return TECHNIQUES;
  return [];
}

function getMobileEditorPickerPlaceholder(field) {
  if (field === 'muscle') return 'Choose muscle';
  if (field === 'exercise') return 'Choose exercise';
  if (field === 'sets') return 'Choose sets';
  if (field === 'reps') return 'Choose reps';
  if (field === 'tempo') return 'Choose tempo';
  if (field === 'rest') return 'Choose rest';
  if (field === 'link') return 'Choose link';
  if (field === 'technique') return 'Choose technique';
  return 'Choose option';
}

function getMobileEditorPickerValue(field) {
  return getMobileEditorPickerButton(field)?.dataset.value || '';
}

function closeAllMobileEditorPickers() {
  document.querySelectorAll('.mobile-picker-menu.is-open').forEach(menu => {
    menu.classList.remove('is-open');
  });
}

function setMobileEditorPickerValue(field, value) {
  const button = getMobileEditorPickerButton(field);
  if (!button) return;
  button.dataset.value = value;
  const options = getMobileEditorPickerOptions(field);
  let label = value;

  if (!value) {
    label = getMobileEditorPickerPlaceholder(field);
  } else if (field === 'link' && !value) {
    label = 'None';
  }

  button.textContent = label || getMobileEditorPickerPlaceholder(field);
  button.classList.toggle('is-placeholder', !value);
}

function renderMobileEditorPicker(field, selectedValue = '') {
  const menu = getMobileEditorPickerMenu(field);
  const button = getMobileEditorPickerButton(field);
  if (!menu || !button) return;
  const options = getMobileEditorPickerOptions(field);
  const currentValue = selectedValue || getMobileEditorPickerValue(field);

  menu.innerHTML = '';

  if (field === 'link') {
    const noneButton = document.createElement('button');
    noneButton.type = 'button';
    noneButton.className = 'mobile-picker-option';
    noneButton.textContent = 'None';
    noneButton.onclick = () => selectMobileEditorOption(field, '');
    menu.appendChild(noneButton);
  }

  options.forEach(option => {
    const optionButton = document.createElement('button');
    optionButton.type = 'button';
    optionButton.className = 'mobile-picker-option';
    optionButton.textContent = option;
    optionButton.onclick = () => selectMobileEditorOption(field, option);
    menu.appendChild(optionButton);
  });

  if (fieldSupportsMobileCustomValue(field)) {
    const customButton = document.createElement('button');
    customButton.type = 'button';
    customButton.className = 'mobile-picker-option';
    customButton.textContent = getMobileEditorCustomLabel(field);
    customButton.onclick = () => requestMobileCustomValue(field);
    menu.appendChild(customButton);
  }

  setMobileEditorPickerValue(field, currentValue);
}

function toggleMobileEditorPicker(field, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  const menu = getMobileEditorPickerMenu(field);
  if (!menu) return;
  const willOpen = !menu.classList.contains('is-open');
  closeAllMobileEditorPickers();
  if (willOpen) menu.classList.add('is-open');
}

function selectMobileEditorOption(field, value) {
  setMobileEditorPickerValue(field, value);
  if (field === 'muscle') {
    updateMobileExerciseExerciseOptions('');
  }
  closeAllMobileEditorPickers();
}

function requestMobileCustomValue(field) {
  const currentValue = getMobileEditorPickerValue(field);
  const presetOptions = getMobileEditorPickerOptions(field);
  const seedValue = presetOptions.includes(currentValue) ? '' : currentValue;
  const promptLabel = field === 'exercise' ? 'exercise name' : field;
  const enteredValue = window.prompt(`Enter custom ${promptLabel}:`, seedValue);
  if (enteredValue === null) return;
  const trimmedValue = enteredValue.trim();
  if (!trimmedValue) return;
  setMobileEditorPickerValue(field, trimmedValue);
  if (field === 'muscle') updateMobileExerciseExerciseOptions('');
  closeAllMobileEditorPickers();
}

function openMobileExerciseEditor(exId) {
  const row = document.getElementById(exId);
  if (!row) return;
  ensureMobileExerciseEditorOptions();
  const fields = getMobileExerciseEditorFields();
  const rowData = getSerializableRowData(row);
  fields.backdrop.dataset.exId = exId;
  renderMobileEditorPicker('muscle', rowData.muscle || '');
  updateMobileExerciseExerciseOptions(rowData.exercise || '');
  renderMobileEditorPicker('sets', rowData.sets || '3');
  renderMobileEditorPicker('reps', rowData.reps || '10');
  renderMobileEditorPicker('tempo', rowData.tempo || 'Controlled');
  renderMobileEditorPicker('rest', rowData.rest || '60s');
  renderMobileEditorPicker('link', rowData.linkType || '');
  renderMobileEditorPicker('technique', rowData.technique || 'Standard');
  fields.note.value = rowData.note || '';
  fields.backdrop.classList.add('is-open');
}

function closeMobileExerciseEditor(event) {
  if (event) event.preventDefault();
  const fields = getMobileExerciseEditorFields();
  if (fields.backdrop) {
    closeAllMobileEditorPickers();
    fields.backdrop.classList.remove('is-open');
    delete fields.backdrop.dataset.exId;
  }
}

function saveMobileExerciseEditor() {
  const fields = getMobileExerciseEditorFields();
  const exId = fields.backdrop?.dataset.exId;
  const row = exId ? document.getElementById(exId) : null;
  if (!row) return;

  row.querySelector('[data-role="muscle"]').value = getMobileEditorPickerValue('muscle');
  updateExercises(exId);
  const exerciseValue = getMobileEditorPickerValue('exercise');
  row.querySelector('[data-role="exercise"]').value = exerciseValue;
  row.querySelector('[data-role="sets"]').value = getMobileEditorPickerValue('sets');
  row.querySelector('[data-role="reps"]').value = getMobileEditorPickerValue('reps');
  row.querySelector('[data-role="tempo"]').value = getMobileEditorPickerValue('tempo');
  row.querySelector('[data-role="rest"]').value = getMobileEditorPickerValue('rest');
  row.querySelector('[data-role="link-type"]').value = getMobileEditorPickerValue('link');
  row.querySelector('[data-role="technique"]').value = getMobileEditorPickerValue('technique');
  row.querySelector('[data-role="note"]').value = fields.note.value;
  updateNoteState(exId);
  syncRowState(row);
  saveState();
  closeMobileExerciseEditor();
}

function createMobileExercise(dayId) {
  const row = addExercise(dayId, false);
  saveState();
  if (row) openMobileExerciseEditor(row.id);
}

function addDay(shouldSave = true, insertAfterDayId = "", initialData = null) {
  dayCount++;
  const id = 'day-' + dayCount;
  const div = document.createElement('div');
  div.className = 'day-card';
  div.id = id;
  div.draggable = false;
  div.innerHTML = `
    <div class="day-header">
      <div class="day-title">
        <span data-role="day-number" style="color:var(--red);font-size:20px;font-weight:700;">${String(dayCount).padStart(2,'0')}</span>
        <input type="text" placeholder="DAY NAME / FOCUS" value="" oninput="saveState()" onchange="saveState()">
      </div>
      <div class="day-controls">
        <button
          class="day-drag-handle"
          type="button"
          draggable="true"
          ondragstart="handleDayDragStart('${id}', event)"
          ondragend="finishDayDrag('${id}')"
          aria-label="Drag to reorder day"
          data-tooltip="Drag to reorder day"
        >⋮⋮</button>
        <div class="day-mobile-move">
          <button class="day-move-btn" type="button" onclick="moveDay('${id}', 'up')" aria-label="Move day up" data-tooltip="Move day up">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 14l6-6 6 6"></path></svg>
          </button>
          <button class="day-move-btn" type="button" onclick="moveDay('${id}', 'down')" aria-label="Move day down" data-tooltip="Move day down">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 10l6 6 6-6"></path></svg>
          </button>
        </div>
        <button class="day-actions-trigger" type="button" onclick="toggleDayActionMenu('${id}', event)" aria-label="Open day actions" data-tooltip="Open day actions">⋮</button>
        <div class="day-action-menu" id="day-action-menu-${id}">
          <button class="day-template-btn" type="button" onclick="openTemplatePanelForDay('${id}', event)" aria-label="Insert template below this day" data-tooltip="Insert template below this day">Template</button>
          <button class="day-template-save-btn" type="button" onclick="saveDayAsTemplate('${id}')" aria-label="Save day as template" data-tooltip="Save day as template">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M5 3h11l3 3v15H5V3zm2 2v5h8V5H7zm0 8v6h10v-6H7zm2 1h6v4H9v-4z"></path>
            </svg>
            <span class="day-action-label">Save Template</span>
          </button>
          <button class="day-duplicate-btn" type="button" onclick="duplicateDay('${id}')" aria-label="Duplicate day" data-tooltip="Duplicate day">⧉<span class="day-action-label">Duplicate Day</span></button>
          <button class="day-delete-btn" type="button" onclick="removeDay('${id}')" aria-label="Remove day" data-tooltip="Remove day"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6L6 18"></path></svg><span class="day-action-label">Remove Day</span></button>
        </div>
        <button class="day-template-btn" type="button" onclick="openTemplatePanelForDay('${id}', event)" aria-label="Insert template below this day" data-tooltip="Insert template below this day">Template</button>
        <button class="day-template-save-btn" type="button" onclick="saveDayAsTemplate('${id}')" aria-label="Save day as template" data-tooltip="Save day as template">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M5 3h11l3 3v15H5V3zm2 2v5h8V5H7zm0 8v6h10v-6H7zm2 1h6v4H9v-4z"></path>
          </svg>
          <span class="day-action-label">Save Template</span>
        </button>
        <button class="day-duplicate-btn" type="button" onclick="duplicateDay('${id}')" aria-label="Duplicate day" data-tooltip="Duplicate day">⧉<span class="day-action-label">Duplicate Day</span></button>
        <button class="day-delete-btn" type="button" onclick="removeDay('${id}')" aria-label="Remove day" data-tooltip="Remove day"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6L6 18"></path></svg><span class="day-action-label">Remove Day</span></button>
      </div>
    </div>
    <div class="day-body">
      <table class="ex-table" id="table-${id}">
        <thead>
          <tr>
            <th style="width:130px;">MUSCLE</th>
            <th style="width:170px;">EXERCISE</th>
            <th style="width:70px;">SETS</th>
            <th style="width:90px;">REPS</th>
            <th style="width:100px;">TEMPO</th>
            <th style="width:80px;">REST</th>
            <th style="width:94px;">LINK</th>
            <th style="width:120px;">TECHNIQUE</th>
            <th style="width:68px;"></th>
          </tr>
        </thead>
        <tbody id="tbody-${id}" ondragover="handleExerciseDragOver('${id}', event)"></tbody>
      </table>
      <button class="add-ex-btn no-print" onclick="addExercise('${id}')">＋ Add Exercise</button>
    </div>`;
  const container = document.getElementById('daysContainer');
  const referenceDay = insertAfterDayId ? document.getElementById(insertAfterDayId) : null;
  if (container && referenceDay?.parentElement === container) {
    insertAfterElement(div, referenceDay);
  } else {
    container?.appendChild(div);
  }

  if (initialData) {
    div.querySelector(".day-title input").value = initialData.name || "";
    const tbody = div.querySelector("tbody");
    tbody.innerHTML = "";
    (initialData.exercises || []).forEach(exerciseData => {
      const row = addExercise(id, false);
      restoreExerciseRow(row, exerciseData);
    });
    if (!initialData.exercises?.length) addExercise(id, false);
  } else {
    addExercise(id, false);
  }

  updateDayNumbers();
  if (shouldSave) saveState();
  return div;
}

function addExercise(dayId, shouldSave = true, insertAfterExerciseId = "", initialData = null) {
  const tbody = document.getElementById('tbody-' + dayId);
  if (!tbody) return null;
  const tr = document.createElement('tr');
  exerciseCount++;
  const exId = 'ex-' + exerciseCount;
  tr.id = exId;
  tr.draggable = false;
  tr.innerHTML = `
    <td data-label="Muscle">
      ${autocompleteFieldHtml(exId, "muscle", "Type or choose muscle")}
    </td>
    <td data-label="Exercise">
      ${autocompleteFieldHtml(exId, "exercise", "Type to search or enter custom exercise")}
    </td>
    <td data-label="Sets">${autocompleteFieldHtml(exId, "sets", "Type or choose sets")}</td>
    <td data-label="Reps">${autocompleteFieldHtml(exId, "reps", "Type or choose reps")}</td>
    <td data-label="Tempo">${autocompleteFieldHtml(exId, "tempo", "Type or choose tempo")}</td>
    <td data-label="Rest">${autocompleteFieldHtml(exId, "rest", "Type or choose rest")}</td>
    <td data-label="Link"><select data-role="link-type" onchange="syncRowState(this.closest('tr')); saveState()">${selectOpts(LINK_TYPES,'','')}</select></td>
    <td data-label="Technique">${autocompleteFieldHtml(exId, "technique", "Type or choose technique")}</td>
    <td data-label="Delete">
      <div class="row-actions">
        <button
          class="drag-handle"
          type="button"
          draggable="true"
          ondragstart="handleExerciseDragStart('${exId}', event)"
          ondragend="finishExerciseDrag('${exId}')"
          aria-label="Drag to reorder exercise"
          data-tooltip="Drag to reorder exercise"
        >⋮⋮</button>
        <button class="move-up-btn" type="button" onclick="moveExercise('${exId}', 'up')" aria-label="Move exercise up" data-tooltip="Move exercise up"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 14l6-6 6 6"></path></svg></button>
        <button class="move-down-btn" type="button" onclick="moveExercise('${exId}', 'down')" aria-label="Move exercise down" data-tooltip="Move exercise down"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 10l6 6 6-6"></path></svg></button>
        <button class="dup-ex" type="button" onclick="duplicateExercise('${exId}')" aria-label="Duplicate exercise" data-tooltip="Duplicate exercise">⧉</button>
        <button class="note-btn" onclick="toggleNotePopover('${exId}', event)" aria-label="Exercise note" data-tooltip="Exercise note">✎</button>
        <button class="del-ex" onclick="removeExercise('${exId}')" aria-label="Remove exercise" data-tooltip="Remove exercise"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6L6 18"></path></svg></button>
        <div id="note-popover-${exId}" class="note-popover">
          <div class="note-popover-header">
            <span class="note-popover-title">EXERCISE NOTE</span>
            <button type="button" class="note-close" onclick="closeNotePopover('${exId}')" aria-label="Close note" data-tooltip="Close note"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6L6 18"></path></svg></button>
          </div>
          <textarea class="note-textarea" data-role="note" placeholder="Add coaching cue, setup tip, or caution..." oninput="handleNoteInput('${exId}')"></textarea>
        </div>
      </div>
    </td>`;
  const referenceRow = insertAfterExerciseId ? document.getElementById(insertAfterExerciseId) : null;
  if (referenceRow?.parentElement === tbody) {
    insertAfterElement(tr, referenceRow);
  } else {
    tbody.appendChild(tr);
  }

  if (initialData) {
    restoreExerciseRow(tr, initialData);
  } else {
    tr.querySelector('[data-role="sets"]').value = "3";
    tr.querySelector('[data-role="reps"]').value = "10";
    tr.querySelector('[data-role="tempo"]').value = "Controlled";
    tr.querySelector('[data-role="rest"]').value = "60s";
    tr.querySelector('[data-role="technique"]').value = "Standard";
    renderAutocompleteMenu(exId, "muscle");
    updateNoteState(exId);
    syncRowState(tr);
  }
  if (shouldSave) saveState();
  return tr;
}

function updateExercises(exId) {
  const row = document.getElementById(exId);
  if (!row) return;
  const exerciseInput = row.querySelector('[data-role="exercise"]');
  const selectedMuscle = getRowValue(row, "muscle");
  const availableExercises = exerciseOptions(selectedMuscle);

  if (exerciseInput && exerciseInput.value && !availableExercises.includes(exerciseInput.value)) {
    exerciseInput.value = "";
  }

  renderAutocompleteMenu(exId, "exercise");
  saveState();
}

function renderAutocompleteMenu(exId, role, forceOpen = false, showAll = false) {
  const row = document.getElementById(exId);
  if (!row) return;
  const input = row.querySelector(`[data-role="${role}"]`);
  const menu = document.getElementById(`${role}-menu-${exId}`);
  if (!input || !menu) return;

  const rawInput = input.value.trim();
  const query = showAll ? "" : rawInput.toLowerCase();
  const optionsPool = presetOptions(role, row);
  const options = optionsPool.filter(option => option.toLowerCase().includes(query));
  const exactMatch = optionsPool.some(option => option.toLowerCase() === rawInput.toLowerCase());

  if (role === "exercise" && !getRowValue(row, "muscle")) {
    menu.innerHTML = '<div class="exercise-empty">Choose a muscle first</div>';
  } else {
    const allowCustom = role !== "muscle";
    const customOption = allowCustom && rawInput && !exactMatch
      ? `<button type="button" class="exercise-option" data-ex-id="${exId}" data-role="${role}" data-value="${escapeHtml(rawInput)}">Use custom ${escapeHtml(role)}: ${escapeHtml(rawInput)}</button>`
      : '';

    const suggestionOptions = options
      .map(option => `<button type="button" class="exercise-option" data-ex-id="${exId}" data-role="${role}" data-value="${escapeHtml(option)}">${escapeHtml(option)}</button>`)
      .join('');

    if (!suggestionOptions && !customOption) {
      menu.innerHTML = `<div class="exercise-empty">No matches. Type a custom ${escapeHtml(role)} value.</div>`;
    } else {
      menu.innerHTML = customOption + suggestionOptions;
    }
  }

  if (forceOpen || document.activeElement === input) {
    menu.classList.add('is-open');
  }
}

function handleAutocompleteInput(exId, role) {
  renderAutocompleteMenu(exId, role, true);
  saveState();
}

function lockAutocompleteMenu(exId, role, duration = 250) {
  const input = document.getElementById(`${role}-input-${exId}`);
  if (!input) return;
  input.dataset.menuLockedUntil = String(Date.now() + duration);
}

function isAutocompleteMenuLocked(exId, role) {
  const input = document.getElementById(`${role}-input-${exId}`);
  if (!input) return false;
  const lockedUntil = Number(input.dataset.menuLockedUntil || 0);
  return lockedUntil > Date.now();
}

function isMobileLayout() {
  return window.matchMedia('(max-width: 640px)').matches;
}

function handleAutocompleteBlur(exId, role) {
  if (isMobileLayout()) return;
  window.setTimeout(() => {
    const menu = document.getElementById(`${role}-menu-${exId}`);
    if (menu) menu.classList.remove('is-open');
  }, 0);
}

function handleAutocompleteKeydown(exId, role, event) {
  if (!event) return;
  if (event.key === "Enter") {
    event.preventDefault();
    const row = document.getElementById(exId);
    const input = document.getElementById(`${role}-input-${exId}`);
    const menu = document.getElementById(`${role}-menu-${exId}`);
    if (!row || !input || !menu) return;

    const rawValue = input.value.trim();
    const options = presetOptions(role, row);
    const exactMatch = options.find(option => option.toLowerCase() === rawValue.toLowerCase());
    const firstMatch = options.find(option => option.toLowerCase().includes(rawValue.toLowerCase()));

    if (role === "muscle") {
      const nextValue = exactMatch || firstMatch || "";
      input.value = nextValue;
      updateExercises(exId);
    } else {
      input.value = exactMatch || rawValue;
      saveState();
    }

    lockAutocompleteMenu(exId, role);
    menu.classList.remove('is-open');
    input.blur();
    return;
  }

  if (event.key === "Escape") {
    const menu = document.getElementById(`${role}-menu-${exId}`);
    if (menu) menu.classList.remove('is-open');
    event.target.blur();
  }
}

function selectAutocompleteOption(exId, role, value) {
  const input = document.getElementById(`${role}-input-${exId}`);
  const menu = document.getElementById(`${role}-menu-${exId}`);
  if (!input || !menu) return;
  input.value = value;
  lockAutocompleteMenu(exId, role);
  menu.classList.remove('is-open');
  if (role === "muscle") {
    updateExercises(exId);
  } else {
    saveState();
  }
  input.blur();
}

function openAutocompleteMenu(exId, role) {
  if (isAutocompleteMenuLocked(exId, role)) return;
  renderAutocompleteMenu(exId, role, true);
}

function closeAllAutocompleteMenus() {
  document.querySelectorAll('.exercise-menu.is-open').forEach(menu => {
    menu.classList.remove('is-open');
  });
}

function toggleAutocompleteMenu(exId, role, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  const menu = document.getElementById(`${role}-menu-${exId}`);
  const input = document.getElementById(`${role}-input-${exId}`);
  if (!menu || !input) return;
  const isOpen = menu.classList.contains('is-open');
  closeAllAutocompleteMenus();
  if (!isOpen) {
    input.focus();
    renderAutocompleteMenu(exId, role, true, true);
  }
}

function updateNoteState(exId) {
  const row = document.getElementById(exId);
  if (!row) return;
  const noteButton = row.querySelector('.note-btn');
  const noteValue = getRowValue(row, 'note').trim();
  if (noteButton) noteButton.classList.toggle('has-note', Boolean(noteValue));
}

function handleNoteInput(exId) {
  updateNoteState(exId);
  saveState();
}

function closeAllNotePopovers() {
  document.querySelectorAll('.note-popover.is-open').forEach(popover => {
    popover.classList.remove('is-open');
  });
}

function handleAutocompleteOptionPointer(event) {
  const optionButton = event.target.closest('.exercise-option');
  if (!optionButton) return;
  event.preventDefault();
  event.stopPropagation();
  selectAutocompleteOption(
    optionButton.dataset.exId,
    optionButton.dataset.role || "exercise",
    optionButton.dataset.value || ""
  );
}

function closeNotePopover(exId) {
  const popover = document.getElementById(`note-popover-${exId}`);
  if (popover) popover.classList.remove('is-open');
}

function toggleNotePopover(exId, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  const popover = document.getElementById(`note-popover-${exId}`);
  if (!popover) return;
  const isOpen = popover.classList.contains('is-open');
  closeAllNotePopovers();
  if (!isOpen) popover.classList.add('is-open');
}

function removeDay(id) {
  const el = document.getElementById(id);
  if (el) {
    el.remove();
    updateDayNumbers();
    saveState();
  }
}

function duplicateDay(dayId) {
  flushPendingEdits();
  const day = document.getElementById(dayId);
  if (!day) return;
  const dayData = getSerializableDayData(day);
  addDay(true, dayId, dayData);
}

function removeExercise(exId) {
  const row = document.getElementById(exId);
  if (!row) return;
  const dayCard = row.closest('.day-card');
  row.remove();
  if (dayCard) refreshDayLinkStates(dayCard.id);
  saveState();
}

function duplicateExercise(exId) {
  flushPendingEdits();
  const row = document.getElementById(exId);
  const dayCard = row?.closest('.day-card');
  if (!row || !dayCard) return;
  const rowData = getSerializableRowData(row);
  addExercise(dayCard.id, true, exId, rowData);
}

function getPrintLinkState(rowsData, index) {
  const rowData = rowsData[index];
  if (!rowData.linkKey || rowData.linkGroupSize <= 1) return '';
  if (rowData.linkGroupPosition === 0) return 'pp-link-start';
  if (rowData.linkGroupPosition === rowData.linkGroupLength - 1) return 'pp-link-end';
  return 'pp-link-middle';
}

function formatDisplayDate(dateString) {
  if (!dateString) return '—';
  const date = parseDateInputValue(dateString);
  if (!date) return dateString;
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date);
}

function getProgramPeriodLabel(startDate, durationWeeks) {
  const calculatedEndDate = calculateProgramEndDate(startDate, durationWeeks);
  const formattedStartDate = formatDisplayDate(startDate);
  const formattedEndDate = formatDisplayDate(calculatedEndDate);
  if (startDate && calculatedEndDate) return `${formattedStartDate} - ${formattedEndDate}`;
  if (startDate) return formattedStartDate;
  return "No date";
}

function slugifyFilenamePart(value, fallback) {
  return (value || fallback || "program")
    .trim()
    .replace(/[^A-Za-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || fallback;
}

function getPrintFilename() {
  const clientName = (document.getElementById('clientName')?.value || '').trim();
  const startDateValue = document.getElementById('startDate')?.value || '';
  const dateSource = startDateValue ? new Date(`${startDateValue}T00:00:00`) : new Date();
  const monthYear = Number.isNaN(dateSource.getTime())
    ? new Intl.DateTimeFormat('en-GB', { month: 'long', year: 'numeric' }).format(new Date())
    : new Intl.DateTimeFormat('en-GB', { month: 'long', year: 'numeric' }).format(dateSource);

  return `${slugifyFilenamePart(clientName, 'client')}_${slugifyFilenamePart(monthYear, 'month-year')}.pdf`;
}

function preparePrintTitle() {
  document.title = getPrintFilename();
}

function restorePrintTitle() {
  document.title = defaultDocumentTitle;
}

function buildPrint() {
  const trainerName = TRAINER.name;
  const trainerPhone = TRAINER.phone;
  const trainerEmail = TRAINER.email;
  const trainerCompany = (document.getElementById('trainerCompany')?.value || TRAINER.company || 'FITSTRONOMY').trim() || 'FITSTRONOMY';
  const logoData = getStoredLogo();
  const clientName = document.getElementById('clientName').value || '—';
  const startDate = formatDisplayDate(document.getElementById('startDate').value);
  const durationWeeks = document.getElementById('programDuration').value || '4';
  const weight = document.getElementById('clientWeight').value || '—';
  const height = document.getElementById('clientHeight').value || '—';
  const age = document.getElementById('clientAge').value || '—';
  const pre = document.getElementById('preWorkout').value || '';
  const post = document.getElementById('postWorkout').value || '';

  const days = document.querySelectorAll('.day-card');
  let daysHtml = '';
  days.forEach((day, i) => {
    const nameInput = day.querySelector('.day-title input');
    const dayName = nameInput ? nameInput.value || `DAY ${String(i+1).padStart(2,'0')}` : `DAY ${String(i+1).padStart(2,'0')}`;
    const rows = day.querySelectorAll('tbody tr');
    const rowsData = Array.from(rows).map(getRowData);
    let visualGroupIndex = 0;
    for (let rowIndex = 0; rowIndex < rowsData.length; ) {
      const rowData = rowsData[rowIndex];
      if (!rowData.linkKey) {
        rowIndex += 1;
        continue;
      }

      const groupSize = getLinkGroupSize(rowData.linkKey);
      const groupStart = rowIndex;
      const groupRows = [];
      while (
        rowIndex < rowsData.length &&
        groupRows.length < groupSize &&
        rowsData[rowIndex].linkKey === rowData.linkKey
      ) {
        groupRows.push(rowsData[rowIndex]);
        rowIndex += 1;
      }

      groupRows.forEach((groupRow, position) => {
        groupRow.linkGroupSize = groupSize;
        groupRow.linkGroupLength = groupRows.length;
        groupRow.linkGroupPosition = position;
        groupRow.linkVariant = visualGroupIndex % 2 === 1 ? 'alt' : 'base';
      });

      if (groupRows.length) visualGroupIndex += 1;
      if (!groupRows.length) rowIndex = groupStart + 1;
    }
    let rowsHtml = '';
    rowsData.forEach((rowData, rowIndex) => {
      const isLinked = Boolean(rowData.linkKey);
      const linkCell = rowData.linkType
        ? `<span class="pp-link-type">${escapeHtml(rowData.linkType)}</span>`
        : '—';
      const noteHtml = rowData.note
        ? `<span class="pp-exercise-note">${formatMultilineText(rowData.note)}</span>`
        : '';
      const rowClasses = [
        isLinked ? 'pp-linked' : '',
        rowData.linkVariant === 'alt' ? 'pp-linked-alt' : '',
        getPrintLinkState(rowsData, rowIndex)
      ].filter(Boolean).join(' ');
      rowsHtml += `<tr class="${rowClasses}"><td>${escapeHtml(rowData.muscle)}</td><td><strong>${escapeHtml(rowData.exercise)}</strong>${noteHtml}</td><td style="text-align:center;">${escapeHtml(rowData.sets)}</td><td style="text-align:center;">${escapeHtml(rowData.reps)}</td><td>${escapeHtml(rowData.tempo)}</td><td>${escapeHtml(rowData.rest)}</td><td>${linkCell}</td><td>${escapeHtml(rowData.technique)}</td></tr>`;
    });
    daysHtml += `
      <div class="pp-day">
        <div class="pp-day-header">
          <span class="pp-day-num">${String(i+1).padStart(2,'0')}</span>
          <span class="pp-day-name">${escapeHtml(dayName.toUpperCase())}</span>
        </div>
        <table class="pp-table">
          <thead><tr><th>MUSCLE</th><th>EXERCISE</th><th>SETS</th><th>REPS</th><th>TEMPO</th><th>REST</th><th>LINK</th><th>TECHNIQUE</th></tr></thead>
          <tbody>${rowsHtml}</tbody>
        </table>
      </div>`;
  });

  const preHtml = pre ? `<div class="pp-notes"><strong style="font-family:'Oswald',sans-serif;letter-spacing:1px;font-size:10px;">PRE-WORKOUT</strong><br>${formatMultilineText(pre)}</div>` : '';
  const postHtml = post ? `<div class="pp-post"><strong style="font-family:'Oswald',sans-serif;letter-spacing:1px;font-size:10px;">POST-WORKOUT & NOTES</strong><br>${formatMultilineText(post)}</div>` : '';

  document.getElementById('printArea').innerHTML = `
    <div class="pp ${logoData ? 'pp-has-logo' : ''}">
      ${logoData ? `<div class="pp-logo-watermark" aria-hidden="true"></div>` : ''}
      ${logoData ? '' : `<div class="pp-brand-mark">${escapeHtml(trainerCompany.toUpperCase())}</div>`}
      <div class="pp-header">
        <div>
          <div class="pp-trainer-name">${escapeHtml(trainerName.toUpperCase())} <span>·</span> PT</div>
          <div class="pp-contact">${[trainerPhone, trainerEmail].filter(Boolean).map(escapeHtml).join(' &nbsp;|&nbsp; ')}</div>
        </div>
        <div>
          <div class="pp-title">FITSTRONOMY</div>
        </div>
      </div>
      <div class="pp-client-grid">
        <div class="pp-client-cell"><div class="pp-client-label">CLIENT</div><div class="pp-client-val">${escapeHtml(clientName)}</div></div>
        <div class="pp-client-cell"><div class="pp-client-label">PROGRAM START</div><div class="pp-client-val">${escapeHtml(startDate)}</div></div>
        <div class="pp-client-cell"><div class="pp-client-label">DURATION</div><div class="pp-client-val">${escapeHtml(durationWeeks)} weeks</div></div>
        <div class="pp-client-cell"><div class="pp-client-label">WEIGHT / HEIGHT</div><div class="pp-client-val">${escapeHtml(weight)} kg / ${escapeHtml(height)} cm</div></div>
        <div class="pp-client-cell"><div class="pp-client-label">AGE</div><div class="pp-client-val">${escapeHtml(age)}</div></div>
      </div>
      ${preHtml}
      ${daysHtml}
      ${postHtml}
      <div class="pp-footer">PREPARED BY ${escapeHtml(trainerName.toUpperCase())} · EVIDENCE-BASED TRAINING PROTOCOL</div>
    </div>`;

  if (logoData) {
    const watermark = document.querySelector('.pp-logo-watermark');
    if (watermark) {
      watermark.style.backgroundImage = `url("${logoData}")`;
    }
  }
}

window.addEventListener('beforeprint', () => {
  preparePrintTitle();
  buildPrint();
});
window.addEventListener('afterprint', restorePrintTitle);
document.addEventListener("input", event => {
  if (event.target.matches("#clientName, #startDate, #clientWeight, #clientHeight, #clientAge, #clientEmail, #preWorkout, #postWorkout, #trainerCompany")) {
    saveState();
  }
});

document.addEventListener("change", event => {
  if (event.target.matches("#programDuration")) saveState();
});

document.addEventListener("pointerdown", handleAutocompleteOptionPointer);
document.addEventListener("mousedown", handleAutocompleteOptionPointer);

document.addEventListener("click", event => {
  const themeButton = event.target.closest('.theme-option');
  if (themeButton) {
    applyTheme(themeButton.dataset.themeId || "classic_dark");
    closeThemeSubmenu();
    closeSettingsMenu();
    return;
  }
  if (!event.target.closest('.settings-wrap')) {
    closeSettingsMenu();
  }
  if (!event.target.closest('#templatePanel') && !event.target.closest('.day-template-btn') && !event.target.closest('.template-panel-trigger')) {
    document.getElementById("templatePanel")?.classList.remove("is-open");
  }
  if (!event.target.closest('.day-action-menu') && !event.target.closest('.day-actions-trigger')) {
    closeAllDayActionMenus();
  }
  if (!event.target.closest('.mobile-picker')) {
    closeAllMobileEditorPickers();
  }
  if (!event.target.closest('.exercise-autocomplete')) {
    closeAllAutocompleteMenus();
  }
  if (!event.target.closest('.note-popover') && !event.target.closest('.note-btn')) {
    closeAllNotePopovers();
  }
});

document.addEventListener("mouseover", event => {
  const settingsMenu = document.getElementById("settingsMenu");
  if (!settingsMenu?.classList.contains("is-open")) return;

  const hoveredThemeTrigger = event.target.closest('.submenu-trigger:not(.template-panel-trigger)');
  if (hoveredThemeTrigger) {
    openThemeSubmenu({ currentTarget: hoveredThemeTrigger, preventDefault() {}, stopPropagation() {} });
    return;
  }

  const hoveredTemplateTrigger = event.target.closest('.template-panel-trigger');
  if (hoveredTemplateTrigger) {
    const templateType = hoveredTemplateTrigger.textContent?.toLowerCase().includes('program') ? 'program' : 'day';
    openTemplatePanelFromMenu(templateType, { currentTarget: hoveredTemplateTrigger, preventDefault() {}, stopPropagation() {} });
    return;
  }

  const insideThemeArea = event.target.closest('#themeSubmenu');
  const insideTemplateArea = event.target.closest('#templatePanel');
  const insideSettingsArea = event.target.closest('#settingsMenu');

  if (!insideThemeArea && !hoveredThemeTrigger && insideSettingsArea) {
    closeThemeSubmenu();
  }
  if (!insideTemplateArea && !hoveredTemplateTrigger && insideSettingsArea) {
    document.getElementById("templatePanel")?.classList.remove("is-open");
  }
});

window.addEventListener("resize", () => {
  if (document.getElementById("templatePanel")?.classList.contains("is-open")) {
    positionTemplatePanel();
  }
  if (document.getElementById("themeSubmenu")?.classList.contains("is-open")) {
    positionThemeSubmenu();
  }
});

applyTheme(getCurrentThemeId(), false);
renderBrandingActions();
renderArchiveList();
renderTemplateList();
restoreState();
