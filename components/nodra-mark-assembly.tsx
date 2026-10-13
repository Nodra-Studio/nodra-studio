export function NodraMarkAssembly() {
  return (
    <div className="nodra-mark-stage" aria-hidden="true">
      <span className="nodra-mark-guide nodra-mark-guide-horizontal" />
      <span className="nodra-mark-guide nodra-mark-guide-vertical" />

      <svg
        className="nodra-mark-assembly"
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="nodra-mark-piece nodra-mark-piece-left">
          <path d="M168 316L272 414V682H168V316Z" fill="currentColor" />
        </g>
        <g className="nodra-mark-piece nodra-mark-piece-right">
          <path d="M520 140H632V528L520 421V140Z" fill="currentColor" />
        </g>
        <g className="nodra-mark-piece nodra-mark-piece-diagonal">
          <path d="M168 138L632 583V682L168 269V138Z" fill="currentColor" />
        </g>
      </svg>

      <span className="nodra-mark-node" />
    </div>
  );
}
