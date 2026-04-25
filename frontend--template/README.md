# 별자리 궁합 테스트 Frontend

ParkKimCha 팀의 별자리 궁합 테스트 화면을 담당하는 React 프론트엔드 프로젝트입니다.

## 주요 기능

- 팀 멤버 소개 카드 렌더링
- 멤버별 이름, MBTI, 담당 역할 표시
- 멤버 카드 좋아요 버튼
- 두 개의 별자리 선택 UI
- 별자리 궁합 결과 화면 표시
- API 응답 대기 상태를 위한 로딩 스피너

## 기술 스택

- React 19
- TypeScript
- Vite
- ESLint
- CSS

## 실행 방법

의존성 설치:

```bash
npm install
```

개발 서버 실행:

```bash
npm run dev
```

브라우저에서 아래 주소로 접속합니다.

```text
http://127.0.0.1:5173/
```

## 사용 가능한 스크립트

```bash
npm run dev
```

개발 서버를 실행합니다.

```bash
npm run build
```

TypeScript 검사 후 프로덕션 빌드를 생성합니다.

```bash
npm run lint
```

ESLint로 코드 스타일과 기본 규칙을 검사합니다.

```bash
npm run preview
```

빌드 결과물을 로컬에서 미리 확인합니다.

## 폴더 구조

```text
frontend--template/
├─ public/
│  └─ favicon.svg
├─ src/
│  ├─ components/
│  │  ├─ LoadingSpinner.tsx
│  │  ├─ MemberCard.tsx
│  │  ├─ MemberSection.tsx
│  │  └─ ZodiacCompatibility.tsx
│  ├─ data/
│  │  ├─ members.ts
│  │  └─ zodiac.ts
│  ├─ App.css
│  ├─ App.tsx
│  ├─ index.css
│  └─ main.tsx
├─ index.html
├─ package.json
└─ vite.config.ts
```

## 개발 메모

- 화면은 단일 페이지로 구성되어 있습니다.
- 멤버 카드와 별자리 궁합 영역은 컴포넌트 단위로 분리되어 있습니다.
- 별자리 선택 값은 API 요청의 `sign1`, `sign2` 값으로 사용할 수 있도록 영문 key를 사용합니다.
- 별자리 한글 이름, 기호, 기간 정보는 `src/data/zodiac.ts`에서 관리합니다.
