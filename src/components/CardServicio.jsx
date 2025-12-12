const sizeMap = {
  10: "w-10 h-10",
  12: "w-12 h-12",
  14: "w-14 h-14",
  16: "w-16 h-16",
  20: "w-20 h-20",
}

const CardServicio = ({
  title,
  iconPng,
  link,
  iconSize = 14,
}) => {
  const sizeClass = sizeMap[iconSize] || sizeMap[14]

  return (
    <a
      href={link}
      target={link?.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="block cursor-pointer no-underline"
    >
      <div
        className="
          group relative rounded-2xl p-[2px]
          border border-slate-200
          transition-all duration-300
          hover:border-transparent
          hover:bg-gradient-to-r
          hover:from-[#005c98]
          hover:via-[#18a4a9]
          hover:to-[#e3ab26]
        "
      >
        <div
          className="
            rounded-2xl bg-white
            p-6 h-28 flex items-center justify-between
            transition-all duration-300
            group-hover:shadow-md
          "
        >
          <h3 className="text-[15px] font-extrabold text-slate-800 w-2/3 leading-tight">
            {title}
          </h3>

          <img
            src={iconPng}
            alt={title}
            className={`${sizeClass} object-contain transition-transform duration-300 group-hover:scale-105`}
          />
        </div>
      </div>
    </a>
  )
}

export default CardServicio
