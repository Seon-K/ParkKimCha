import { useMemo, useState } from 'react'
import type { CSSProperties } from 'react'
import { getZodiacSign, zodiacSigns } from '../data/zodiac'
import { getMockZodiacCompatibility } from '../data/zodiacMock'

function ZodiacCompatibility() {
  // select에서 선택한 값은 백엔드 API의 sign1, sign2 query 값으로 그대로 사용할 수 있습니다.
  const [firstSign, setFirstSign] = useState('leo')
  const [secondSign, setSecondSign] = useState('leo')

  // 실제 API 연결 시 이 useMemo를 useEffect + fetch 로직으로 교체하면 됩니다.
  const result = useMemo(
    () => getMockZodiacCompatibility(firstSign, secondSign),
    [firstSign, secondSign],
  )

  // API 응답의 name 값을 프론트 표시용 한글 라벨/심볼 데이터와 연결합니다.
  const first = getZodiacSign(result.sign1.name)
  const second = getZodiacSign(result.sign2.name)
  const selectedFirst = getZodiacSign(firstSign)
  const selectedSecond = getZodiacSign(secondSign)

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
                  {sign.symbol} {sign.label} ({sign.dateRange})
                </option>
              ))}
            </select>
            <small className="date-range">
              {selectedFirst.label}: {selectedFirst.dateRange}
            </small>
          </label>

          <label>
            두 번째 별자리
            <select value={secondSign} onChange={(event) => setSecondSign(event.target.value)}>
              {zodiacSigns.map((sign) => (
                <option key={sign.name} value={sign.name}>
                  {sign.symbol} {sign.label} ({sign.dateRange})
                </option>
              ))}
            </select>
            <small className="date-range">
              {selectedSecond.label}: {selectedSecond.dateRange}
            </small>
          </label>
        </form>

        <article className="result-card" aria-live="polite">
          <div className="sign-row">
            <div>
              <strong>{first.symbol}</strong>
              <span>{first.label}</span>
              <small>
                {first.dateRange} · {result.sign1.element_label}
              </small>
            </div>
            <b>+</b>
            <div>
              <strong>{second.symbol}</strong>
              <span>{second.label}</span>
              <small>
                {second.dateRange} · {result.sign2.element_label}
              </small>
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
