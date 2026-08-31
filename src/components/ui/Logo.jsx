function Logo() {
  return (
    <div className="flex items-center gap-3">
      
      {/* SVG — o símbolo V */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* linha esquerda do V */}
        <line
          x1="4" y1="8"
          x2="20" y2="36"
          stroke="#C9A84C"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* linha direita do V */}
        <line
          x1="36" y1="8"
          x2="20" y2="36"
          stroke="#C9A84C"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* linha horizontal — detalhe premium */}
        <line
          x1="10" y1="22"
          x2="30" y2="22"
          stroke="#C9A84C"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {/* texto VELOX */}
      <span className="text-white font-bold text-xl tracking-widest">
        VELOX
      </span>

    </div>
  )
}

export default Logo