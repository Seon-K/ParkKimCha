export type ZodiacElement = 'fire' | 'earth' | 'air' | 'water'

// 프론트에서 별자리 선택 옵션과 결과 라벨을 표시할 때 사용하는 타입입니다.
export type ZodiacSign = {
  name: string
  label: string
  symbol: string
  element: ZodiacElement
  elementLabel: string
}

// 백엔드 /api/zodiac 응답 형태와 맞춘 타입입니다.
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

// API 연결 후에도 유지해야 하는 프론트 표시용 별자리 목록입니다.
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

// API 응답에는 영문 name만 오므로, 화면에 보여줄 한글 라벨과 심볼을 찾아 붙입니다.
export function getZodiacSign(name: string) {
  return zodiacSigns.find((sign) => sign.name === name) ?? zodiacSigns[0]
}
