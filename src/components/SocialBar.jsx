const redes = [
  { label: 'Facebook', color: '#1877f2' },
  { label: 'Instagram', color: '#e1306c' },
  { label: 'YouTube', color: '#ff0000' },
  { label: 'Libro', color: '#4caf50' },
]

const SocialBar = () => {
  return (
    <div className="fixed top-1/3 right-0 z-50 flex flex-col">
      {redes.map((r, idx) => (
        <button
          key={idx}
          className="w-9 h-9 flex items-center justify-center text-white font-bold text-xs border-b border-white/20"
          style={{ backgroundColor: r.color }}
        >
          {r.label[0]}
        </button>
      ))}
    </div>
  )
}

export default SocialBar
