import { useMemo, useState } from 'react'
import type { CSSProperties } from 'react'
import {
  getMockZodiacCompatibility,
  getZodiacSign,
  zodiacSigns,
} from '../data/zodiac'

function ZodiacCompatibility() {
  const [firstSign, setFirstSign] = useState('leo')
  const [secondSign, setSecondSign] = useState('leo')

  const result = useMemo(
    () => getMockZodiacCompatibility(firstSign, secondSign),
    [firstSign, secondSign],
  )
  const first = getZodiacSign(result.sign1.name)
  const second = getZodiacSign(result.sign2.name)

  return (
    <section className="section-panel zodiac-panel" aria-labelledby="zodiac-title">
      <div className="section-heading">
        <div>
          <span>Compatibility</span>
          <h2 id="zodiac-title">별자리 궁합</h2>
        </div>
        <p>임시 mock 데이터로 결과를 출력합니다.</p>
      </div>

      <div className="zodiac-layout">
        <form className="zodiac-form">
          <label>
            첫 번째 별자리
            <select value={firstSign} onChange={(event) => setFirstSign(event.target.value)}>
              {zodiacSigns.map((sign) => (
                <option key={sign.name} value={sign.name}>
                  {sign.symbol} {sign.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            두 번째 별자리
            <select value={secondSign} onChange={(event) => setSecondSign(event.target.value)}>
              {zodiacSigns.map((sign) => (
                <option key={sign.name} value={sign.name}>
                  {sign.symbol} {sign.label}
                </option>
              ))}
            </select>
          </label>
        </form>

        <article className="result-card" aria-live="polite">
          <div className="sign-row">
            <div>
              <strong>{first.symbol}</strong>
              <span>{first.label}</span>
              <small>{result.sign1.element_label}</small>
            </div>
            <b>+</b>
            <div>
              <strong>{second.symbol}</strong>
              <span>{second.label}</span>
              <small>{result.sign2.element_label}</small>
            </div>
          </div>

          <div className="score-ring" style={{ '--score': result.score } as CSSProperties}>
            <span>{result.score}</span>
            <small>점</small>
          </div>

          <div className="result-copy">
            <p>{result.message}</p>
            <code>
              out: {result.compatibility} / {result.score}
            </code>
          </div>
        </article>
      </div>
    </section>
  )
}

export default ZodiacCompatibility
