/**
 * 개별 멤버 정보를 보여주는 카드 컴포넌트입니다.
 *
 * 이름, MBTI, 한마디, 좋아요 버튼을 표시합니다.
 */
import { useState } from 'react'
import type { Member } from '../data/members'

type MemberCardProps = {
  member: Member
}

function MemberCard({ member }: MemberCardProps) {
  // 각 카드의 좋아요 상태는 카드별로 독립적으로 관리합니다.
  const [liked, setLiked] = useState(false)

  return (
    <article className="member-card">
      <div className="member-avatar" aria-hidden="true">
        {member.name.slice(0, 1)}
      </div>
      <div className="member-info">
        <div>
          <h3>{member.name}</h3>
          <span>{member.mbti}</span>
        </div>
        <p>{member.message}</p>
      </div>
      <button
        className={liked ? 'like-button liked' : 'like-button'}
        type="button"
        aria-pressed={liked}
        onClick={() => setLiked((current) => !current)}
      >
        {liked ? '♥ 좋아요' : '♡ 좋아요'}
      </button>
    </article>
  )
}

export default MemberCard
