import MemberSection from './components/MemberSection'
import './App.css'

function App() {
  return (
    <main className="app-shell">
      <section className="hero-section" aria-labelledby="page-title">
        <span className="eyebrow">Zodiac Match Lab</span>
        <h1 id="page-title">별자리 궁합 테스트</h1>
        <p>팀 멤버를 소개하고 두 별자리의 궁합 결과를 한 화면에서 확인해요.</p>
      </section>

      <MemberSection />
    </main>
  )
}

export default App
