# Portfolio

순수 HTML / CSS / JS로 만든 포트폴리오 사이트입니다. GitHub Pages로 배포합니다.

## 구조

```
index.html      Works (참여 프로젝트 목록 + 개인 프로젝트 카드)
about.html      소개
contact.html    연락처
css/common.css  공통 레이아웃 · 헤더 · 푸터
css/works.css   Works 페이지
js/common.js    현재 메뉴 강조, 푸터 연도
images/         썸네일 등 이미지
```

## 프로젝트 추가

- 참여 프로젝트: `index.html`의 `article.work-row` 블록을 복사해 수정
- 개인 프로젝트: `article.work-card` 블록을 복사해 수정
- 링크 버튼 색상: `chip-github`, `chip-demo`, `chip-youtube`, `chip-steam`, `chip-googleplay`, `chip-appstore`, `chip-doc`

## 로컬 미리보기

```bash
python3 -m http.server 8000
# http://localhost:8000
```
