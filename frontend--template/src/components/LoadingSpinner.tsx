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
