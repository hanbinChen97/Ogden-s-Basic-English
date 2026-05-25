const words = [
  "a", "able", "about", "across", "after", "again", "against", "air", "all", "almost",
  "among", "an", "and", "animal", "answer", "as", "at", "back", "be", "because",
  "before", "begin", "between", "big", "bird", "black", "blue", "book", "boy", "bread",
  "by", "call", "can", "car", "change", "child", "city", "clean", "come", "country",
  "day", "do", "dog", "door", "down", "drink", "dry", "eat", "end", "eye",
  "face", "family", "far", "father", "feel", "find", "fire", "first", "fish", "food",
  "for", "from", "full", "get", "give", "go", "good", "great", "green", "hand",
  "have", "he", "head", "help", "here", "high", "house", "I", "in", "is",
  "it", "keep", "kind", "know", "land", "last", "left", "light", "like", "line",
  "little", "long", "look", "love", "make", "man", "many", "may", "me", "mind"
];

const STORAGE_KEY = "ogden-basic-english-learned";
const wordList = document.getElementById("wordList");
const progress = document.getElementById("progress");
const downloadBtn = document.getElementById("downloadBtn");
const resetBtn = document.getElementById("resetBtn");

const learned = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...learned]));
}

function renderProgress() {
  progress.textContent = `已学习 ${learned.size} / ${words.length}`;
}

function renderWords() {
  wordList.innerHTML = "";

  words.forEach((word) => {
    const item = document.createElement("li");
    const label = document.createElement("label");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = learned.has(word);
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        learned.add(word);
      } else {
        learned.delete(word);
      }
      saveState();
      renderProgress();
    });

    const text = document.createElement("span");
    text.textContent = word;

    label.append(checkbox, text);
    item.appendChild(label);
    wordList.appendChild(item);
  });
}

function downloadRemainingWords() {
  const remaining = words.filter((word) => !learned.has(word));
  const blob = new Blob([remaining.join("\n")], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "remaining-words.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function resetProgress() {
  learned.clear();
  saveState();
  renderWords();
  renderProgress();
}

downloadBtn.addEventListener("click", downloadRemainingWords);
resetBtn.addEventListener("click", resetProgress);

renderWords();
renderProgress();
