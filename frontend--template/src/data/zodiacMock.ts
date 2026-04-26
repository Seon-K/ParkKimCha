/**
 * 별자리 궁합 API 연동 전 화면 확인용 데이터를 계산하는 파일입니다.
 *
 * 실제 API 연동 후에는 이 파일과 getMockZodiacCompatibility import를 제거할 수 있습니다.
 */
import type { ZodiacCompatibility } from './zodiac'
import { zodiacSigns } from './zodiac'

// 백엔드 API가 연결되기 전까지만 사용하는 임시 궁합 규칙입니다.
const compatiblePairs = new Set([
  'air-fire',
  'earth-water',
  'fire-air',
  'water-earth',
])

const neutralPairs = new Set(['air-air', 'earth-earth', 'fire-fire', 'water-water'])

// 실제 API 연결 시 이 함수와 파일은 제거하고 fetch 응답을 사용하면 됩니다.
export function getMockZodiacCompatibility(
  firstSignName: string,
  secondSignName: string,
): ZodiacCompatibility {
  const sign1 = zodiacSigns.find((sign) => sign.name === firstSignName) ?? zodiacSigns[0]
  const sign2 = zodiacSigns.find((sign) => sign.name === secondSignName) ?? zodiacSigns[0]
  const pairKey = `${sign1.element}-${sign2.element}`

  let score = 45
  let compatibility: ZodiacCompatibility['compatibility'] = 'challenging'
  let message = '다른 속도를 이해하면 더 단단해지는 조합'

  if (sign1.name === sign2.name) {
    score = 100
    compatibility = 'same'
    message = '말하지 않아도 통하는 최고의 파트너!'
  } else if (compatiblePairs.has(pairKey)) {
    score = 70
    compatibility = 'compatible'
    message = '서로에게 영감을 주는 찰떡궁합'
  } else if (neutralPairs.has(pairKey)) {
    score = 62
    compatibility = 'neutral'
    message = '비슷한 리듬으로 편안하게 맞춰가는 조합'
  }

  return {
    sign1: {
      name: sign1.name,
      element: sign1.element,
      element_label: sign1.elementLabel,
    },
    sign2: {
      name: sign2.name,
      element: sign2.element,
      element_label: sign2.elementLabel,
    },
    score,
    compatibility,
    message,
  }
}
