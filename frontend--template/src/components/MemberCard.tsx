import { useState } from 'react'
import type { Member } from '../data/members'

type MemberCardProps = {
  member: Member
}

function MemberCard({ member }: MemberCardProps) {
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
