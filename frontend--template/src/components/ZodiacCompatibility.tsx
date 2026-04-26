
import { useState, useEffect } from 'react'
import type { CSSProperties } from 'react'
import '../App.css'
import LoadingSpinner from './LoadingSpinner'
// 👇 아래 두 줄을 추가해서 사라진 데이터와 함수를 다시 불러오세요!
//import { zodiacSigns } from '../data/zodiac' 
// 만약 getZodiacSign이 zodiac.ts에 있다면 아래처럼 같이 써주면 됩니다.
 import { zodiacSigns, getZodiacSign } from '../data/zodiac'

function ZodiacCompatibility() {
  const [firstSign, setFirstSign] = useState('leo')
  const [secondSign, setSecondSign] = useState('leo')
  const [result, setResult] = useState<any>(null); // 결과 저장용
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태

  useEffect(() => {
    if (firstSign && secondSign) {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(
            `http://127.0.0.1:8000/api/zodiac/?sign1=${firstSign}&sign2=${secondSign}`
          );
          const data = await response.json();
          setResult(data);
        } catch (error) {
          console.error("연결 에러:", error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }
  }, [firstSign, secondSign]);

  // result가 아직 없을 때(로딩 전)를 위한 처리
  if (!result && !isLoading) {
    return <div>별자리를 선택해주세요!</div>;
  }

  // result가 있을 때만 아래 로직 실행
  const first = result ? getZodiacSign(result.sign1.name) : null;
  const second = result ? getZodiacSign(result.sign2.name) : null;

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
          {isLoading || !result ? (
            <LoadingSpinner />
          ) : (
            <>
              <div className="sign-row">
                <div>
                  <strong>{first?.symbol}</strong>
                  <span>{first?.label}</span>
                  <small>{result.sign1.element_label}</small>
                </div>
                <b>+</b>
                <div>
                  <strong>{second?.symbol}</strong>
                  <span>{second?.label}</span>
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