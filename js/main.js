const memories = [
  {
    id: 1,
    url: "assets/images/1.png",
    alt: "滑雪场",
    date: "2022/xx/xx，照片的时间搞丢了啦，总之是夏天",
    location: "南山滑雪场",
    story: "第一次给你拍照，初次展现无敌摄影天赋。其实那天是没事找事，说什么天太热了想出去凉快凉快都是借口，只是想找你而已。",
    shape: "landscape",
    layout: "wide-left",
    speed: 0.09,
    accentShadow: "rgba(236, 178, 167, 0.32)",
    liquidText: "翻开第一次的相片",
  },
  {
    id: 2,
    url: "assets/images/2.png",
    alt: "红树林",
    date: "2022/xx/xx，没有准确时间2号",
    location: "我记得是宝安西湾红树林",
    story: "这时候还是很害羞的，第二次给你拍照，紧张害怕且尴尬。比第一次还尴尬因为旁边人实在是太多了。",
    shape: "portrait",
    layout: "portrait-offset",
    speed: 0.12,
    accentShadow: "rgba(206, 182, 145, 0.3)",
    liquidText: "翻开西湾红树林",
  },
  {
    id: 3,
    url: "assets/images/3.png",
    alt: "birthday",
    date: "2023/04/20",
    location: "九方鸽子旁边的烤肉店",
    story: "算是到目前为止唯一给你惊喜的生日了吧？因为买了蛋糕没告诉你哈哈。",
    shape: "landscape",
    layout: "square-center",
    speed: 0.08,
    accentShadow: "rgba(175, 184, 211, 0.28)",
    liquidText: "生日",
  },
  {
    id: 4,
    url: "assets/images/4.png",
    alt: "咖啡店",
    date: "2023/10/21",
    location: "不知名咖啡店",
    story: "这个时候拍照没那么尴尬了，并且再次展现惊人的摄影天赋，你的运气真好啊，哪有男的这么会拍照的，原图直出，你那P过的图我压根没保存。",
    shape: "landscape",
    layout: "wide-right",
    speed: 0.1,
    accentShadow: "rgba(226, 162, 170, 0.3)",
    liquidText: "NO name coffee",
  },
  {
    id: 5,
    url: "assets/images/5.png",
    alt: "小黑屋",
    date: "2023/10/28",
    location: "萍宝在小黑屋",
    story: "随便一拍也好看得很，不知道为啥当时拍的这种滤镜，有点CCD的感觉。",
    shape: "portrait",
    layout: "portrait-tall",
    speed: 0.13,
    accentShadow: "rgba(177, 202, 178, 0.3)",
    liquidText: "小黑屋",
  },
  {
    id: 6,
    url: "assets/images/6.png",
    alt: "动物园",
    date: "2024/09/08",
    location: "在世界之窗旁边的这个小动物园",
    story: "依旧原图直出，摄影实力高出天际！不过我也说过，人像三要素，1：模特好看、2：模特好看、3：模特好看，到现在还是深表赞同。",
    shape: "landscape",
    layout: "landscape-trim",
    speed: 0.07,
    accentShadow: "rgba(205, 174, 147, 0.3)",
    liquidText: "没有卡皮巴拉的卡皮巴拉合照",
  },
  {
    id: 7,
    url: "assets/images/7.png",
    alt: "厦门双子塔",
    date: "2023/12/31",
    location: "厦门双子塔下桥边",
    story: "这个是正经CCD拍的了，那天风太大了，基本上没拍出啥好看的，你都要跟我闹了，唯一就是这张，非常完美！！",
    shape: "portrait",
    layout: "portrait-soft",
    speed: 0.11,
    accentShadow: "rgba(147, 175, 198, 0.3)",
    liquidText: "我认为是在厦门最帅气的一张，我个人非常喜欢这个更甚簪花",
  },
  {
    id: 8,
    url: "assets/images/8.png",
    alt: "厦门-簪花",
    date: "2023/12/31，到这才发现这居然是23年了，时间排错了，但就不改了，少改少错，你忍一下。",
    location: "在厦门做的簪花造型",
    story: "我选了摄影师拍的版本，不得不承认本人虽天赋惊为天人，但经验略逊于他，不过我是为了不砸他饭碗。毕竟萍宝咋拍都能好看，不算什么本事。",
    shape: "landscape",
    layout: "wide-finale",
    speed: 0.09,
    accentShadow: "rgba(216, 186, 161, 0.3)",
    liquidText: "簪花萍",
  },
  {
    id: 9,
    url: "assets/images/9.png",
    alt: "迪士尼",
    date: "2026/03/07",
    location: "疲惫迪士尼",
    story: "这天真的超累的啊，扁平足都走烂了，脚底板第二天还疼呢！不过照片随手一拍也很好看，不知道为什么很喜欢这张，感觉特别可爱。",
    shape: "landscape",
    layout: "wide-left",
    speed: 0.08,
    accentShadow: "rgba(198, 176, 152, 0.3)",
    liquidText: "下次可不准让我白天走到晚上了，但是还有这种时候我也不跟你抱怨了，偷偷找机会偷懒吧",
  },
  {
    id: 10,
    url: "assets/images/10.png",
    alt: "南山",
    date: "2025/04/06",
    location: "南山的燕晗山",
    story: "最新出炉，今天的装造很好看，你老问我要不要把头上发箍摘了拍照，我一直说不用，其实是觉得带上才有搭配，摘了就没啥特点了和以前的照片。",
    shape: "portrait",
    layout: "portrait-offset",
    speed: 0.11,
    accentShadow: "rgba(182, 168, 198, 0.3)",
    liquidText: "这个燕晗山名字，你读了三遍全是错的，小猪",
  },
];

const gallery = document.querySelector("[data-gallery]");
const root = document.documentElement;
const pageShell = document.querySelector(".page-shell");
const smoothContent = document.querySelector("[data-smooth-content]");
const liquidCursor = document.querySelector("[data-liquid-cursor]");
const liquidCursorShape = liquidCursor?.querySelector(".liquid-cursor__shape");
const liquidContentWrap = liquidCursor?.querySelector(".liquid-cursor__content-wrap");
const liquidContent = document.querySelector("[data-liquid-content]");
const mobileNav = document.querySelector("[data-mobile-nav]");
const mobileUpButton = document.querySelector("[data-mobile-up]");
const mobileDownButton = document.querySelector("[data-mobile-down]");
const mobileIndexLabel = document.querySelector("[data-mobile-index]");
const mobileTotalLabel = document.querySelector("[data-mobile-total]");
const depthLayers = Array.from(document.querySelectorAll("[data-depth]"));
const heroSection = document.querySelector(".hero");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const mobileBreakpoint = window.matchMedia("(max-width: 720px)");
let liquidTranslations = [];
let liquidStories = [];
let mobileSteps = [];

const backdropTones = [
  { hue: "0deg", saturation: "1.06", brightness: "1" },
  { hue: "-14deg", saturation: "1.12", brightness: "1.02" },
  { hue: "18deg", saturation: "1.08", brightness: "1.01" },
  { hue: "34deg", saturation: "1.14", brightness: "1.04" },
  { hue: "-28deg", saturation: "1.1", brightness: "0.98" },
];

const motion = {
  currentScroll: window.scrollY,
  targetScroll: window.scrollY,
  cursorX: window.innerWidth / 2,
  cursorY: window.innerHeight / 2,
  targetCursorX: window.innerWidth / 2,
  targetCursorY: window.innerHeight / 2,
  cursorVisible: mobileBreakpoint.matches,
  activeStoryId: null,
  activeTranslationId: null,
  mobileMode: mobileBreakpoint.matches,
  mobileStepIndex: 0,
  backdropToneIndex: 0,
  frame: 0,
};

function renderGallery(items) {
  gallery.innerHTML = items
    .map(
      (memory, index) => `
        <article
          class="memory-card"
          data-layout="${memory.layout}"
          data-shape="${memory.shape}"
          data-speed="${memory.speed}"
          data-mobile-step="memory-${memory.id}"
          style="--stagger:${index * 90}ms; --accent-shadow:${memory.accentShadow};"
        >
          <div class="memory-perspective">
            <button
              class="memory-tilt"
              type="button"
              aria-label="悬停查看 ${memory.location} 的故事"
              data-story-id="${memory.id}"
            >
              <div class="card-face card-front">
                <img src="${memory.url}" alt="${memory.alt}" loading="lazy" />
                <div class="front-copy">
                  <p class="front-title">${memory.location}</p>
                  <p class="front-date">${memory.date}</p>
                </div>
                <div class="card-liquid-source" data-liquid-source="${memory.id}" aria-hidden="true">
                  <p class="card-liquid-caption">背后有故事呢</p>
                  <p class="card-liquid-story">${memory.story}</p>
                  <span class="card-liquid-meta card-liquid-meta--date">${memory.date}</span>
                  <span class="card-liquid-meta card-liquid-meta--location">${memory.location}</span>
                </div>
              </div>
            </button>
          </div>
        </article>
      `
    )
    .join("");
}

function createTranslationLayer(text, layerClass) {
  const layer = document.createElement("span");
  layer.className = `liquid-translation-item__layer ${layerClass}`;
  layer.textContent = text;
  return layer;
}

function containsCJKText(text = "") {
  return /[\u3400-\u9fff\uf900-\ufaff]/.test(text);
}

function getTranslationText(source) {
  if (motion.mobileMode && source.dataset.liquidCnMobile) {
    return source.dataset.liquidCnMobile;
  }

  return source.dataset.liquidCn || "";
}

function getTranslationScale(source) {
  const rawScale = motion.mobileMode && source.dataset.liquidScaleMobile
    ? source.dataset.liquidScaleMobile
    : source.dataset.liquidScale;
  const scale = Number.parseFloat(rawScale || "1");

  return Number.isFinite(scale) && scale > 0 ? scale : 1;
}

function getTranslationOffsetY(source, fontSize) {
  const rawOffset = motion.mobileMode && source.dataset.liquidOffsetYMobile
    ? source.dataset.liquidOffsetYMobile
    : source.dataset.liquidOffsetY;
  const offset = Number.parseFloat(rawOffset || "0");

  return Number.isFinite(offset) ? fontSize * offset : 0;
}

function shouldKeepTranslationUnbroken(source) {
  return source.dataset.liquidKeepAll === "true";
}

function rectsIntersect(firstRect, secondRect, padding = 0) {
  return (
    firstRect.left < secondRect.right - padding &&
    firstRect.right > secondRect.left + padding &&
    firstRect.top < secondRect.bottom - padding &&
    firstRect.bottom > secondRect.top + padding
  );
}

function getRenderedTextMetrics(source, fallbackRect) {
  const range = document.createRange();
  range.selectNodeContents(source);
  const textRects = Array.from(range.getClientRects());

  if (!textRects.length) {
    return {
      left: fallbackRect.left,
      top: fallbackRect.top,
      right: fallbackRect.right,
      bottom: fallbackRect.bottom,
      width: fallbackRect.width,
      height: fallbackRect.height,
      maxLineWidth: fallbackRect.width,
    };
  }

  const renderedRect = range.getBoundingClientRect();

  return {
    left: renderedRect.left,
    top: renderedRect.top,
    right: renderedRect.right,
    bottom: renderedRect.bottom,
    width: renderedRect.width,
    height: renderedRect.height,
    maxLineWidth: Math.max(
      renderedRect.width,
      ...textRects.map((textRect) => textRect.width)
    ),
  };
}

function updateTranslationLayers(item, text) {
  if (item.dataset.translationText === text) {
    item.dataset.textMode = containsCJKText(text) ? "plain" : "liquid";
    return;
  }

  item.dataset.translationText = text;
  item.dataset.textMode = containsCJKText(text) ? "plain" : "liquid";
  item.querySelectorAll(".liquid-translation-item__layer").forEach((layer) => {
    layer.textContent = text;
  });
}

function buildLiquidTranslations() {
  liquidTranslations = Array.from(document.querySelectorAll("[data-liquid-cn]")).map((source, index) => {
    const key = `translation-${index + 1}`;
    source.dataset.liquidKey = key;

    const item = document.createElement("span");
    const text = getTranslationText(source);
    item.className = "liquid-translation-item liquid-translation-proxy";
    item.dataset.translationKey = key;
    item.dataset.translationText = text;
    item.dataset.textMode = containsCJKText(text) ? "plain" : "liquid";
    item.setAttribute("aria-hidden", "true");
    item.append(
      createTranslationLayer(text, "liquid-translation-item__layer--cyan"),
      createTranslationLayer(text, "liquid-translation-item__layer--magenta"),
      createTranslationLayer(text, "liquid-translation-item__layer--main")
    );

    liquidContent.appendChild(item);
    return { source, item };
  });
}

function buildLiquidStories() {
  if (!liquidContent) {
    return;
  }

  liquidStories = Array.from(document.querySelectorAll("[data-liquid-source]")).map((source) => {
    const item = source.cloneNode(true);
    item.classList.add("liquid-story-proxy");
    item.dataset.textMode = "plain";
    item.setAttribute("aria-hidden", "true");
    const caption = item.querySelector(".card-liquid-caption");
    const story = item.querySelector(".card-liquid-story");
    const date = item.querySelector(".card-liquid-meta--date");
    const location = item.querySelector(".card-liquid-meta--location");

    if (caption) {
      const text = caption.textContent;
      caption.textContent = "";
      caption.append(
        createTranslationLayer(text, "liquid-translation-item__layer--cyan"),
        createTranslationLayer(text, "liquid-translation-item__layer--magenta"),
        createTranslationLayer(text, "liquid-translation-item__layer--main")
      );
    }

    if (story) {
      const text = story.textContent;
      story.textContent = "";
      story.append(
        createTranslationLayer(text, "liquid-translation-item__layer--cyan"),
        createTranslationLayer(text, "liquid-translation-item__layer--magenta"),
        createTranslationLayer(text, "liquid-translation-item__layer--main")
      );
    }

    if (date) {
      const text = date.textContent;
      date.textContent = "";
      date.appendChild(createTranslationLayer(text, "liquid-translation-item__layer--main"));
    }

    if (location) {
      const text = location.textContent;
      location.textContent = "";
      location.appendChild(createTranslationLayer(text, "liquid-translation-item__layer--main"));
    }

    liquidContent.appendChild(item);

    return { source, item };
  });
}

function syncLiquidTranslations() {
  if (!liquidContent || !liquidCursor) {
    return;
  }

  const lensRect = liquidCursor.getBoundingClientRect();
  const lensIsVisible = motion.cursorVisible && lensRect.width > 0 && lensRect.height > 0;

  liquidTranslations.forEach(({ source, item }) => {
    const rect = source.getBoundingClientRect();
    const styles = window.getComputedStyle(source);
    const scale = getTranslationScale(source);
    const fontSize = parseFloat(styles.fontSize);
    const lineHeight = parseFloat(styles.lineHeight);
    const letterSpacing = parseFloat(styles.letterSpacing);
    const sourceColor = styles.color;
    const textMetrics = getRenderedTextMetrics(source, rect);
    const offsetY = getTranslationOffsetY(source, fontSize);
    const isVisible =
      lensIsVisible &&
      !motion.activeStoryId &&
      rectsIntersect(textMetrics, lensRect, 2) &&
      textMetrics.bottom > -60 &&
      textMetrics.top < window.innerHeight + 60 &&
      textMetrics.right > -60 &&
      textMetrics.left < window.innerWidth + 60;
    const chineseFontFamily = styles.fontFamily.includes("Playfair")
      ? '"Noto Serif SC", "Songti SC", serif'
      : '"PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif';
    const keepAll = shouldKeepTranslationUnbroken(source);

    updateTranslationLayers(item, getTranslationText(source));
    item.style.opacity = isVisible ? "1" : "0";
    item.style.left = `${textMetrics.left}px`;
    item.style.top = `${textMetrics.top + offsetY}px`;
    item.style.width = `${Math.max(textMetrics.maxLineWidth, fontSize * scale)}px`;
    item.style.minHeight = `${Math.max(textMetrics.height, fontSize)}px`;
    item.style.fontFamily = chineseFontFamily;
    item.style.fontSize = `${fontSize * scale}px`;
    item.style.fontWeight = styles.fontWeight;
    item.style.color = sourceColor;
    item.style.lineHeight = Number.isNaN(lineHeight) ? styles.lineHeight : `${lineHeight * scale}px`;
    item.style.letterSpacing = Number.isNaN(letterSpacing) ? "0" : `${letterSpacing * scale}px`;
    item.style.textAlign = styles.textAlign;
    item.style.overflowWrap = keepAll ? "normal" : "anywhere";
    item.style.wordBreak = keepAll ? "keep-all" : "normal";
    item.style.lineBreak = keepAll ? "strict" : "auto";
    item.style.justifyContent =
      source.dataset.liquidAlign === "center"
        ? "center"
        : source.dataset.liquidAlign === "right"
          ? "flex-end"
          : styles.textAlign === "center"
            ? "center"
            : styles.textAlign === "right" || styles.textAlign === "end"
              ? "flex-end"
              : "flex-start";
    item.style.alignItems = "flex-start";
  });
}

function syncLiquidStories() {
  if (!liquidContent) {
    return;
  }

  liquidStories.forEach(({ source, item }) => {
    const rect = source.getBoundingClientRect();
    const isVisible =
      motion.activeStoryId === source.dataset.liquidSource &&
      rect.bottom > -40 &&
      rect.top < window.innerHeight + 40 &&
      rect.right > -40 &&
      rect.left < window.innerWidth + 40;

    item.style.opacity = isVisible ? "1" : "0";
    item.style.left = `${rect.left}px`;
    item.style.top = `${rect.top}px`;
    item.style.width = `${Math.max(rect.width, 1)}px`;
    item.style.height = `${Math.max(rect.height, 1)}px`;
  });
}

function setupCards() {
  const cards = Array.from(document.querySelectorAll(".memory-card"));

  cards.forEach((card) => {
    const button = card.querySelector(".memory-tilt");

    if (!supportsHover || prefersReducedMotion) {
      return;
    }

    button.addEventListener("pointerenter", () => {
      const rotate = (Math.random() * 2.8 - 1.4).toFixed(2);
      button.style.setProperty("--hover-rotate", `${rotate}deg`);
      button.style.setProperty("--hover-scale", "1.03");
      motion.activeStoryId = button.dataset.storyId;
      motion.cursorVisible = true;
    });

    button.addEventListener("pointermove", (event) => {
      const rect = button.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      button.style.setProperty("--tilt-x", `${(py * -7.2).toFixed(2)}deg`);
      button.style.setProperty("--tilt-y", `${(px * 8.8).toFixed(2)}deg`);
    });

    button.addEventListener("pointerleave", () => {
      button.style.setProperty("--hover-rotate", "0deg");
      button.style.setProperty("--hover-scale", "1");
      button.style.setProperty("--tilt-x", "0deg");
      button.style.setProperty("--tilt-y", "0deg");
      motion.activeStoryId = null;
      motion.cursorVisible = false;
    });
  });

  return cards;
}

function buildMobileSteps() {
  mobileSteps = Array.from(document.querySelectorAll("[data-mobile-step]")).map((element) => ({
    id: element.dataset.mobileStep,
    element,
  }));

  if (mobileTotalLabel) {
    mobileTotalLabel.textContent = String(mobileSteps.length).padStart(2, "0");
  }
}

function syncMobileNav() {
  if (!motion.mobileMode || !mobileSteps.length) {
    if (mobileNav) {
      mobileNav.setAttribute("aria-hidden", "true");
    }
    return;
  }

  if (mobileNav) {
    mobileNav.setAttribute("aria-hidden", "false");
  }

  if (mobileIndexLabel) {
    mobileIndexLabel.textContent = String(motion.mobileStepIndex + 1).padStart(2, "0");
  }

  if (mobileUpButton) {
    mobileUpButton.disabled = motion.mobileStepIndex <= 0;
  }

  if (mobileDownButton) {
    mobileDownButton.disabled = motion.mobileStepIndex >= mobileSteps.length - 1;
  }
}

function applyBackdropTone(index) {
  const toneCount = backdropTones.length;
  const normalizedIndex = ((index % toneCount) + toneCount) % toneCount;
  const tone = backdropTones[normalizedIndex];

  motion.backdropToneIndex = normalizedIndex;
  root.style.setProperty("--page-backdrop-hue", tone.hue);
  root.style.setProperty("--page-backdrop-sat", tone.saturation);
  root.style.setProperty("--page-backdrop-brightness", tone.brightness);
}

function advanceBackdropTone() {
  applyBackdropTone(motion.backdropToneIndex + 1);
}

function getStepOffset(element) {
  if (!element) {
    return 0;
  }

  const raw = element.offsetTop - window.innerHeight * 0.08;
  return Math.max(0, Math.round(raw));
}

function goToMobileStep(index) {
  if (!mobileSteps.length) {
    return;
  }

  const nextIndex = Math.max(0, Math.min(index, mobileSteps.length - 1));
  if (nextIndex === motion.mobileStepIndex && motion.targetScroll === getStepOffset(mobileSteps[nextIndex].element)) {
    syncMobileNav();
    return;
  }

  motion.mobileStepIndex = nextIndex;
  motion.targetScroll = getStepOffset(mobileSteps[nextIndex].element);
  syncMobileNav();
}

function updateMobileStage() {
  if (!motion.mobileMode || !mobileSteps.length) {
    mobileSteps.forEach(({ element }) => {
      element.style.setProperty("--mobile-step-shift", "0px");
      element.style.setProperty("--mobile-step-scale", "1");
      element.style.setProperty("--mobile-step-opacity", "1");
    });
    if (heroSection) {
      heroSection.style.setProperty("--hero-title-left-shift", "0px");
      heroSection.style.setProperty("--hero-title-right-shift", "0px");
      heroSection.style.setProperty("--hero-title-opacity", "1");
      heroSection.style.setProperty("--hero-copy-opacity", "1");
    }
    return;
  }

  const viewportHeight = window.innerHeight;

  mobileSteps.forEach(({ element }) => {
    const relative = (getStepOffset(element) - motion.currentScroll) / viewportHeight;
    const abs = Math.min(Math.abs(relative), 1.2);
    const opacity = abs < 0.12 ? 1 : Math.max(0.18, 1 - abs * 0.68);

    element.style.setProperty("--mobile-step-shift", "0px");
    element.style.setProperty("--mobile-step-scale", "1");
    element.style.setProperty("--mobile-step-opacity", `${opacity.toFixed(3)}`);
  });

  if (heroSection) {
    const heroRelative = (getStepOffset(heroSection) - motion.currentScroll) / viewportHeight;
    const heroProgress = Math.max(0, Math.min(1, -heroRelative * 1.08));
    const copyFade = Math.max(0, Math.min(1, heroProgress * 1.18));
    const titleShift = heroProgress * 26;

    heroSection.style.setProperty("--hero-title-left-shift", `${(-titleShift).toFixed(2)}px`);
    heroSection.style.setProperty("--hero-title-right-shift", `${titleShift.toFixed(2)}px`);
    heroSection.style.setProperty("--hero-title-opacity", `${(1 - heroProgress).toFixed(3)}`);
    heroSection.style.setProperty("--hero-copy-opacity", `${(1 - copyFade).toFixed(3)}`);
  }
}

function updateMobileMode() {
  motion.mobileMode = mobileBreakpoint.matches;

  if (motion.mobileMode) {
    document.body.classList.add("is-mobile-nav");
    document.body.classList.remove("is-smooth");
    document.body.style.height = "100svh";
    buildMobileSteps();
    const heroTitle = document.querySelector(".hero h1");
    if (heroTitle) {
      const rect = heroTitle.getBoundingClientRect();
      const x = rect.left + Math.min(rect.width * 0.58, window.innerWidth * 0.55);
      const y = rect.top + Math.min(rect.height * 0.56, window.innerHeight * 0.34);
      motion.cursorX = x;
      motion.cursorY = y;
      motion.targetCursorX = x;
      motion.targetCursorY = y;
      motion.activeTranslationId = heroTitle.dataset.liquidKey || null;
    }
    motion.cursorVisible = true;
    goToMobileStep(motion.mobileStepIndex);
  } else {
    document.body.classList.remove("is-mobile-nav");
    document.body.classList.add("is-smooth");
    document.body.style.height = `${Math.ceil(pageShell.offsetHeight)}px`;
    syncMobileNav();
  }
}

function updateDepthLayers(scrollValue) {
  if (prefersReducedMotion) {
    return;
  }

  depthLayers.forEach((layer) => {
    const depth = Number(layer.dataset.depth || 0);
    layer.style.setProperty("--depth-offset", `${(-scrollValue * depth).toFixed(2)}px`);
  });
}

function updateCardParallax(cards) {
  const viewportHeight = window.innerHeight;

  cards.forEach((card) => {
    const tilt = card.querySelector(".memory-tilt");
    const rect = card.getBoundingClientRect();

    if (prefersReducedMotion || motion.mobileMode || rect.top < viewportHeight * 0.92) {
      card.classList.add("is-visible");
    }

    if (prefersReducedMotion) {
      tilt.style.setProperty("--parallax", "0px");
      tilt.style.setProperty("--image-scale", "1");
      return;
    }

    if (motion.mobileMode) {
      const center = rect.top + rect.height / 2;
      const progressToCenter = Math.max(
        0,
        Math.min(
          1,
          (viewportHeight + rect.height / 2 - center) / (viewportHeight / 2 + rect.height / 2)
        )
      );
      const imageScale = 1.2 - progressToCenter * 0.2;
      const riseOffset = (1 - progressToCenter) * 20;

      tilt.style.setProperty("--parallax", `${riseOffset.toFixed(2)}px`);
      tilt.style.setProperty("--image-scale", `${Math.max(1, imageScale).toFixed(3)}`);
      return;
    }

    const speed = Number(card.dataset.speed || 0.08);
    const distanceFromCenter = rect.top + rect.height / 2 - viewportHeight / 2;
    const offset = Math.max(-38, Math.min(38, distanceFromCenter * speed * -0.18));
    tilt.style.setProperty("--parallax", `${offset.toFixed(2)}px`);
    tilt.style.setProperty("--image-scale", "1");
  });
}

function updateCursor() {
  if (!liquidCursor || !liquidCursorShape) {
    return;
  }

  motion.cursorX += (motion.targetCursorX - motion.cursorX) * 0.24;
  motion.cursorY += (motion.targetCursorY - motion.cursorY) * 0.24;

  const velocityX = motion.targetCursorX - motion.cursorX;
  const velocityY = motion.targetCursorY - motion.cursorY;
  const speed = Math.min(Math.hypot(velocityX, velocityY), 34);
  const stretch = 1 + speed / 120;
  const squeeze = 1 - Math.min(speed / 240, 0.12);
  const rotation = Math.max(-8, Math.min(8, velocityX * 0.18));

  liquidCursor.style.setProperty("--cursor-opacity", motion.cursorVisible ? "1" : "0");
  liquidCursor.style.transform = `translate3d(${motion.cursorX.toFixed(2)}px, ${motion.cursorY.toFixed(2)}px, 0) translate(-50%, -50%)`;
  liquidCursorShape.style.setProperty("--cursor-rotate", `${rotation.toFixed(2)}deg`);
  liquidCursorShape.style.setProperty("--cursor-scale-x", stretch.toFixed(3));
  liquidCursorShape.style.setProperty("--cursor-scale-y", squeeze.toFixed(3));

  const horizontalRadius = Math.max(36, 44 - speed * 0.18);
  const verticalRadius = Math.min(64, 56 + speed * 0.22);
  liquidCursorShape.style.borderRadius = `${horizontalRadius}% ${verticalRadius}% ${verticalRadius - 3}% ${horizontalRadius + 4}% / ${verticalRadius - 4}% ${horizontalRadius + 2}% ${verticalRadius}% ${horizontalRadius + 5}%`;

  if (liquidContentWrap) {
    liquidContentWrap.style.transform = `scaleX(${(1 / stretch).toFixed(3)}) scaleY(${(1 / squeeze).toFixed(3)})`;
  }

  if (liquidContent) {
    const lensRect = liquidCursor.getBoundingClientRect();
    liquidContent.style.width = `${window.innerWidth}px`;
    liquidContent.style.height = `${window.innerHeight}px`;
    liquidContent.style.transform = `translate3d(${-lensRect.left.toFixed(2)}px, ${-lensRect.top.toFixed(2)}px, 0)`;
  }
}

function syncCursorTargets() {
  if (!motion.cursorVisible) {
    return;
  }

  const target = document.elementFromPoint(motion.cursorX, motion.cursorY);
  const card = target?.closest?.("[data-story-id]");
  const translation = target?.closest?.("[data-liquid-cn]");

  motion.activeStoryId = card ? card.dataset.storyId : null;
  motion.activeTranslationId = !card && translation ? translation.dataset.liquidKey : null;
}

function setupLiquidPointer() {
  if (supportsHover) {
    document.body.classList.add("has-liquid-cursor");
  }

  const activateCursor = (x, y, target) => {
    motion.targetCursorX = x;
    motion.targetCursorY = y;
    const card = target?.closest?.("[data-story-id]");
    const translation = target?.closest?.("[data-liquid-cn]");

    motion.activeStoryId = card ? card.dataset.storyId : null;
    motion.activeTranslationId = !card && translation ? translation.dataset.liquidKey : null;
    motion.cursorVisible = true;
  };

  window.addEventListener("pointermove", (event) => {
    activateCursor(event.clientX, event.clientY, event.target);
  });

  window.addEventListener("pointerdown", (event) => {
    activateCursor(event.clientX, event.clientY, event.target);
  });

  window.addEventListener("mouseout", (event) => {
    if (!event.relatedTarget) {
      motion.activeStoryId = null;
      motion.activeTranslationId = null;
    }
  });

  window.addEventListener(
    "touchmove",
    (event) => {
      if (!motion.mobileMode) {
        return;
      }

      const touch = event.touches[0];
      if (!touch) {
        return;
      }

      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      activateCursor(touch.clientX, touch.clientY, target);
      event.preventDefault();
    },
    { passive: false }
  );

  window.addEventListener(
    "touchstart",
    (event) => {
      if (!motion.mobileMode) {
        return;
      }

      const touch = event.touches[0];
      if (!touch) {
        return;
      }

      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      activateCursor(touch.clientX, touch.clientY, target);
    },
    { passive: true }
  );

  window.addEventListener(
    "touchend",
    () => {
      if (!motion.mobileMode) {
        return;
      }
    },
    { passive: true }
  );
}

function setupSmoothScroll(cards) {
  if (!smoothContent) {
    return;
  }

  if (prefersReducedMotion) {
    updateCardParallax(cards);
    return;
  }

  const resize = () => {
    if (!motion.mobileMode) {
      document.body.style.height = `${Math.ceil(pageShell.offsetHeight)}px`;
      return;
    }

    buildMobileSteps();
    goToMobileStep(motion.mobileStepIndex);
  };

  resize();
  new ResizeObserver(resize).observe(smoothContent);
  window.addEventListener("resize", resize);
  mobileBreakpoint.addEventListener("change", updateMobileMode);

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") {
        return;
      }

      const section = document.querySelector(targetId);
      if (!section) {
        return;
      }

      event.preventDefault();
      if (motion.mobileMode) {
        const targetIndex = mobileSteps.findIndex((step) => step.element === section || step.element.contains(section));
        goToMobileStep(targetIndex >= 0 ? targetIndex : 0);
      } else {
        window.scrollTo({
          top: section.offsetTop,
          behavior: "auto",
        });
      }
    });
  });

  if (mobileUpButton) {
    mobileUpButton.addEventListener("click", () => {
      goToMobileStep(motion.mobileStepIndex - 1);
    });
  }

  if (mobileDownButton) {
    mobileDownButton.addEventListener("click", () => {
      advanceBackdropTone();
      goToMobileStep(motion.mobileStepIndex + 1);
    });
  }

  updateMobileMode();
}

function animate(cards) {
  if (!motion.mobileMode) {
    motion.targetScroll = window.scrollY;
  }

  if (document.body.classList.contains("is-smooth") || document.body.classList.contains("is-mobile-nav")) {
    const easing = motion.mobileMode ? 0.18 : 0.08;
    motion.currentScroll += (motion.targetScroll - motion.currentScroll) * easing;

    if (Math.abs(motion.targetScroll - motion.currentScroll) < 0.08) {
      motion.currentScroll = motion.targetScroll;
    }

    smoothContent.style.transform = `translate3d(0, ${(-motion.currentScroll).toFixed(2)}px, 0)`;
    updateDepthLayers(motion.currentScroll);
  }

  syncCursorTargets();
  syncLiquidTranslations();
  syncLiquidStories();
  updateCardParallax(cards);
  updateMobileStage();
  updateCursor();
  syncMobileNav();
  motion.frame = window.requestAnimationFrame(() => animate(cards));
}

renderGallery(memories);
applyBackdropTone(0);
liquidContent.innerHTML = "";
buildLiquidTranslations();
buildLiquidStories();
const cards = setupCards();
setupLiquidPointer();
setupSmoothScroll(cards);
animate(cards);
