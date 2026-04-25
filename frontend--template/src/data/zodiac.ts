export type ZodiacElement = 'fire' | 'earth' | 'air' | 'water'

export type ZodiacSign = {
  name: string
  label: string
  symbol: string
  element: ZodiacElement
  elementLabel: string
}

export type ZodiacCompatibility = {
  sign1: {
    name: string
    element: ZodiacElement
    element_label: string
  }
  sign2: {
    name: string
    element: ZodiacElement
    element_label: string
  }
  score: number
  compatibility: 'same' | 'compatible' | 'neutral' | 'challenging'
  message: string
}

export const zodiacSigns: ZodiacSign[] = [
  {
    name: 'aries',
    label: '양자리',
    symbol: '♈',
    element: 'fire',
    elementLabel: '불(Fire)',
  },
  {
    name: 'taurus',
    label: '황소자리',
    symbol: '♉',
    element: 'earth',
    elementLabel: '흙(Earth)',
  },
  {
    name: 'gemini',
    label: '쌍둥이자리',
    symbol: '♊',
    element: 'air',
    elementLabel: '공기(Air)',
  },
  {
    name: 'cancer',
    label: '게자리',
    symbol: '♋',
    element: 'water',
    elementLabel: '물(Water)',
  },
  {
    name: 'leo',
    label: '사자자리',
    symbol: '♌',
    element: 'fire',
    elementLabel: '불(Fire)',
  },
  {
    name: 'virgo',
    label: '처녀자리',
    symbol: '♍',
    element: 'earth',
    elementLabel: '흙(Earth)',
  },
  {
    name: 'libra',
    label: '천칭자리',
    symbol: '♎',
    element: 'air',
    elementLabel: '공기(Air)',
  },
  {
    name: 'scorpio',
    label: '전갈자리',
    symbol: '♏',
    element: 'water',
    elementLabel: '물(Water)',
  },
  {
    name: 'sagittarius',
    label: '궁수자리',
    symbol: '♐',
    element: 'fire',
    elementLabel: '불(Fire)',
  },
  {
    name: 'capricorn',
    label: '염소자리',
    symbol: '♑',
    element: 'earth',
    elementLabel: '흙(Earth)',
  },
  {
    name: 'aquarius',
    label: '물병자리',
    symbol: '♒',
    element: 'air',
    elementLabel: '공기(Air)',
  },
  {
    name: 'pisces',
    label: '물고기자리',
    symbol: '♓',
    element: 'water',
    elementLabel: '물(Water)',
  },
]

const compatiblePairs = new Set([
  'air-fire',
  'earth-water',
  'fire-air',
  'water-earth',
])

const neutralPairs = new Set(['air-air', 'earth-earth', 'fire-fire', 'water-water'])

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

export function getZodiacSign(name: string) {
  return zodiacSigns.find((sign) => sign.name === name) ?? zodiacSigns[0]
}
