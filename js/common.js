// 현재 페이지에 해당하는 내비게이션 링크 강조
function markActiveNav() {
    const current = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach((link) => {
        if (link.getAttribute('href') === current) {
            link.classList.add('is-active');
            link.setAttribute('aria-current', 'page');
        }
    });
}

// 푸터 연도 자동 갱신
function setFooterYear() {
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
    markActiveNav();
    setFooterYear();
});
