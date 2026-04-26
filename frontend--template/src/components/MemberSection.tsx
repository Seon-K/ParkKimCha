/**
 * 팀 멤버 소개 섹션 컴포넌트입니다.
 *
 * members 데이터를 순회하면서 MemberCard 목록을 렌더링합니다.
 */
import MemberCard from './MemberCard'
import { members } from '../data/members'

function MemberSection() {
  return (
    <section className="section-panel" aria-labelledby="members-title">
      <div className="section-heading">
        <span>Team</span>
        <h2 id="members-title">멤버 소개</h2>
      </div>
      <div className="member-grid">
        {/* members 배열을 map으로 순회해 멤버 카드를 렌더링합니다. */}
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  )
}

export default MemberSection
