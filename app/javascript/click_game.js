document.addEventListener("turbo:load", () => {
  const startBtn = document.getElementById("start-btn");
  const gameArea = document.getElementById("game-area");
  const clickBtn = document.getElementById("click-btn");
  const timeEl = document.getElementById("time");
  const countEl = document.getElementById("count");
  const resultBtn = document.getElementById("result-btn");

  if (!startBtn) return;

  let count = 0;
  let timeLeft = 10;
  let timerId;

  startBtn.addEventListener("click", () => {
    startBtn.classList.add("hidden");
    gameArea.classList.remove("hidden");

    count = 0;
    timeLeft = 10;
    countEl.textContent = "0";
    timeEl.textContent = "10";

    clickBtn.disabled = false;

    timerId = setInterval(() => {
      timeLeft--;
      timeEl.textContent = timeLeft;

      if (timeLeft <= 0) {
        clearInterval(timerId);
        clickBtn.disabled = true;
        // 結果ページへクリック数を渡す
        resultBtn.href = `/usage?clicks=${count}`;
        resultBtn.classList.remove("hidden");
      }
    }, 1000);
  });

  clickBtn.addEventListener("click", () => {
    count++;
    countEl.textContent = count;
  });
});
