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
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  )
}

export default MemberSection
