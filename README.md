# Portfolio Website (HTML/CSS/Vanilla JS)

모던한 분위기의 개인 포트폴리오 웹 사이트입니다. `HTML`, `CSS`, `바닐라 자바스크립트`만 사용해서 제작했습니다.

## 기능

- 로고 및 내비게이션(데스크톱: 가로 메뉴, 모바일: 햄버거 메뉴)
- 히어로 섹션(큰 배경 이미지 + 오버레이)
- 프로젝트 3개 카드 목록
- Contact 폼(클라이언트 측 입력 검증 및 상태 메시지 표시)

## 실행 방법

이 프로젝트는 별도 빌드 도구가 필요 없습니다. 아래 중 하나로 로컬에서 실행해 보세요.

### 방법 1) Python 간단 서버

```bash
cd "/Users/daewookim/Desktop/Cursor_test/portfolio"
python3 -m http.server 8080
```

브라우저에서 `http://localhost:8080` 로 접속합니다.

### 방법 2) VS Code Live Server(있다면)

`index.html`을 열고 Live Server로 실행하면 됩니다.

## 파일 구조

- `index.html`: 페이지 레이아웃(로고/내비, 히어로, 프로젝트 카드, Contact 폼)
- `css/styles.css`: 스타일(반응형, 다크/라이트 톤, 카드/폼 UI)
- `js/script.js`: 모바일 메뉴 토글, 부드러운 스크롤, Contact 폼 검증/상태 표시

## 커스터마이징 가이드

### 1) 히어로 배경 이미지 변경

`index.html`의 히어로 이미지 URL(아래 요소)만 교체하면 됩니다.

- `.hero-backdrop-img`의 `src`

### 2) 프로젝트 카드 이미지 변경

`index.html`의 프로젝트 카드들에서 `project-card-media img`의 `src`를 교체하세요.

### 3) Contact 폼 전송 연동(선택)

현재 폼은 데모 형태로 동작하며 실제 서버 전송은 연결되어 있지 않습니다.

`js/script.js`의 `submit` 핸들러에서 `fetch()` 또는 `action` 전송 로직을 추가하면 됩니다.

## 이미지 출처

히어로/프로젝트 이미지는 Unsplash의 공개 이미지를 사용하고 있습니다.
원하는 이미지로 교체할 경우, `src` URL만 바꾸면 바로 반영됩니다.

