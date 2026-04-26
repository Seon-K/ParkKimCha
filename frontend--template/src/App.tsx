import { useState } from "react";
import ZodiacCompatibility from './components/ZodiacCompatibility';
// 👇 멤버 섹션을 보여주는 컴포넌트를 꼭 불러와야 합니다!
import MemberSection from './components/MemberSection'; 

function App() {
  return (
    <div className="app-container">
      {/* 1. 상단: 팀 멤버 카드 섹션 */}
      <MemberSection />
      
      <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #333' }} />

      {/* 2. 하단: 별자리 궁합 섹션 (현재 잘 나오고 있는 부분) */}
      <ZodiacCompatibility />
    </div>
  );
}

export default App;