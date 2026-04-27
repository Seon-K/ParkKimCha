import './App.css'
import ZodiacCompatibility from './components/ZodiacCompatibility';
import MemberSection from './components/MemberSection'; 

function App() {
  return (
    <main className="app-shell">
      {/* 페이지 상단 소개 영역입니다. 실제 기능은 아래 섹션 컴포넌트에서 분리해 관리합니다. */}
      <section className="hero-section" aria-labelledby="page-title">
        <span className="eyebrow">Zodiac Match Lab</span>
        <h1 id="page-title">별자리 궁합 테스트</h1>
        <p>팀 ParkKimCha</p>
      </section>

      <MemberSection />
      <ZodiacCompatibility />
    </main>
  )
}

export default App;