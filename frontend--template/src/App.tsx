import MemberSection from './components/MemberSection'
import ZodiacCompatibility from './components/ZodiacCompatibility'
import './App.css'

function App() {
  return (
    <main className="app-shell">
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

export default App
