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

export function getZodiacSign(name: string) {
  return zodiacSigns.find((sign) => sign.name === name) ?? zodiacSigns[0]
}
