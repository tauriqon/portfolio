(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var nav = document.querySelector(".site-nav");
  var toggle = document.querySelector(".nav-toggle");
  var navLinks = document.querySelectorAll(".site-nav a[href^=\"#\"]");

  function setNavOpen(open) {
    if (!nav || !toggle) return;
    nav.classList.toggle("is-open", open);
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
    document.body.style.overflow = open ? "hidden" : "";
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setNavOpen(!nav.classList.contains("is-open"));
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setNavOpen(false);
      }
    });
  });

  window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 769px)").matches) {
      setNavOpen(false);
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav && nav.classList.contains("is-open")) {
      setNavOpen(false);
      if (toggle) toggle.focus();
    }
  });

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var form = document.getElementById("contact-form");
  var statusEl = document.getElementById("form-status");

  function clearErrors() {
    ["name", "email", "message"].forEach(function (field) {
      var el = document.getElementById("error-" + field);
      if (el) el.textContent = "";
    });
  }

  function showFieldError(field, message) {
    var el = document.getElementById("error-" + field);
    if (el) el.textContent = message;
  }

  if (form && statusEl) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      clearErrors();
      statusEl.textContent = "";
      statusEl.classList.remove("is-success", "is-error");

      var name = form.querySelector("#contact-name");
      var email = form.querySelector("#contact-email");
      var message = form.querySelector("#contact-message");
      var ok = true;

      if (!name || !name.value.trim()) {
        showFieldError("name", "이름을 입력해 주세요.");
        ok = false;
      }

      if (!email || !email.value.trim()) {
        showFieldError("email", "이메일을 입력해 주세요.");
        ok = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        showFieldError("email", "올바른 이메일 형식이 아닙니다.");
        ok = false;
      }

      if (!message || !message.value.trim()) {
        showFieldError("message", "메시지를 입력해 주세요.");
        ok = false;
      }

      if (!ok) {
        statusEl.textContent = "입력 내용을 확인해 주세요.";
        statusEl.classList.add("is-error");
        return;
      }

      statusEl.textContent = "전송되었습니다. (데모: 실제 서버 전송은 연결되지 않았습니다.)";
      statusEl.classList.add("is-success");
      form.reset();
    });
  }

  var scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var top = header ? header.offsetHeight : 0;
      var y = target.getBoundingClientRect().top + window.scrollY - top;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });
})();
