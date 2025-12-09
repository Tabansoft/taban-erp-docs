document$.subscribe(() => {
  renderMathInElement(document.body, {
    delimiters: [
      {left: "$$", right: "$$", display: true},
      {left: "$", right: "$", display: false},
      {left: "\\(", right: "\\)", display: false},
      {left: "\\[", right: "\\]", display: true}
    ],
    // --- تنظیمات جدید برای رفع خطای فارسی ---
    strict: false,       // غیرفعال کردن حالت سخت‌گیرانه (هشدارها را خفه می‌کند)
    trust: true,         // اجازه می‌دهد متن‌های خاص (مثل فارسی) پردازش شوند
    throwOnError: false, // اگر خطایی بود، متن اصلی را نشان بده و سایت را خراب نکن
    output: "html",      // خروجی HTML باشد تا CSS ما رویش اعمال شود
    // ---------------------------------------
  })
})