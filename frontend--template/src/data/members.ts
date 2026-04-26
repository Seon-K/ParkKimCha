/**
 * 멤버 카드에 표시할 팀원 데이터 파일입니다.
 *
 * 백엔드 연동 없이 프론트에서 고정으로 사용하는 멤버 목록을 관리합니다.
 */
export type Member = {
  id: number
  name: string
  mbti: string
  message: string
}

// 백엔드 연동 없이 화면에 고정으로 노출하는 팀 멤버 데이터입니다.
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
