const List = ({ className, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Isolation_Mode"
    data-name="Isolation Mode"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    className={className}
    fill={color}
  >
    <rect x="7" y="4" width="17" height="3" />
    <rect x="7" y="11" width="17" height="3" />
    <rect x="7" y="18" width="17" height="3" />
    <circle cx="2.5" cy="5.5" r="2.5" />
    <circle cx="2.5" cy="12" r="2.5" />
    <circle cx="2.5" cy="19" r="2.5" />
  </svg>
)

export default List
