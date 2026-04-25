export type Member = {
  id: number
  name: string
  mbti: string
  message: string
}

export const members: Member[] = [
  {
    id: 1,
    name: '박준석',
    mbti: 'ISFP',
    message: '백엔드 담당',
  },
  {
    id: 2,
    name: '차성진',
    mbti: 'INFP',
    message: 'api fetch 담당',
  },
  {
    id: 3,
    name: '김서연',
    mbti: 'INTP',
    message: '프론트엔드 담당',
  },
]
