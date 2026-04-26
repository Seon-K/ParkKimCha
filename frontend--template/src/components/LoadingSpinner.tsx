/**
 * API 응답 대기 상태를 표시하는 로딩 컴포넌트입니다.
 *
 * 별자리 궁합 API 요청 중 결과 카드 영역에 표시할 수 있습니다.
 */
type LoadingSpinnerProps = {
  message?: string
}

function LoadingSpinner({ message = '궁합 결과를 불러오는 중입니다' }: LoadingSpinnerProps) {
  return (
    <div className="loading-state" role="status" aria-live="polite">
      <span className="loading-spinner" aria-hidden="true" />
      <p>{message}</p>
    </div>
  )
}

export default LoadingSpinner
