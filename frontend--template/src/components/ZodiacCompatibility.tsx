/**
 * 별자리 궁합 선택 및 결과 표시 컴포넌트입니다.
 *
 * 두 별자리 값을 선택하고, 선택 결과에 맞는 궁합 점수와 메시지를 렌더링합니다.
 * 실제 API 연동 시 이 파일의 result 계산 부분을 fetch 로직으로 교체하면 됩니다.
 */
import { useMemo, useState } from 'react'
import type { CSSProperties } from 'react'
import { getZodiacSign, zodiacSigns } from '../data/zodiac'
import { getMockZodiacCompatibility } from '../data/zodiacMock'
import LoadingSpinner from './LoadingSpinner'

function ZodiacCompatibility() {
  // select에서 선택한 값은 백엔드 API의 sign1, sign2 query 값으로 그대로 사용할 수 있습니다.
  const [firstSign, setFirstSign] = useState('leo')
  const [secondSign, setSecondSign] = useState('leo')
  const [isLoading] = useState(false)

  // 실제 API 연결 시 이 useMemo를 useEffect + fetch 로직으로 교체하면 됩니다.
  // 연동 위치:
  // 0. 위 isLoading 상태는 const [isLoading, setIsLoading] = useState(false)로 변경합니다.
  // 1. result를 useState로 변경합니다.
  // 2. firstSign, secondSign이 바뀔 때 fetch('/api/zodiac/?sign1=...&sign2=...')를 호출합니다.
  // 3. 요청 전 setIsLoading(true), 응답 저장 후 setIsLoading(false)를 호출하면 아래 LoadingSpinner가 표시됩니다.
  const result = useMemo(
    () => getMockZodiacCompatibility(firstSign, secondSign),
    [firstSign, secondSign],
  )

  // API 응답의 name 값을 프론트 표시용 한글 라벨/심볼 데이터와 연결합니다.
  const first = getZodiacSign(result.sign1.name)
  const second = getZodiacSign(result.sign2.name)

  return (
    <section className="section-panel zodiac-panel" aria-labelledby="zodiac-title">
      <div className="section-heading">
        <div>
          <span>Compatibility</span>
          <h2 id="zodiac-title">별자리 궁합</h2>
        </div>
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
          </label>
        </form>

        <article className="result-card" aria-live="polite" aria-busy={isLoading}>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
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
            </>
          )}
        </article>
      </div>
    </section>
  )
}

export default ZodiacCompatibility
