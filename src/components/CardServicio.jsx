const CardServicio = ({ title, iconPng, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block cursor-pointer no-underline"
    >
      <div
        className="
          group relative rounded-2xl p-[2px]
          transition-all duration-300
          border border-slate-200
          hover:border-transparent
          hover:bg-gradient-to-r
          hover:from-[#005c98]
          hover:via-[#18a4a9]
          hover:to-[#e3ab26]
        "
      >
        {/* CARD INTERNO */}
        <div
          className="
            rounded-2xl bg-white
            p-10 h-28 flex items-center justify-between
            transition-all duration-300 group-hover:shadow-md
          "
        >
          <h3 className="text-xl font-extrabold text-slate-800">
            {title}
          </h3>

          <div
            className="
              bg-white
              w-16 h-16 rounded-xl flex items-center justify-center
              transition-all duration-300 group-hover:scale-105
            "
          >
            <img
              src={iconPng}
              alt={title}
              className="w-16 h-16 object-contain"
            />
          </div>
        </div>
      </div>
    </a>
  )
}

export default CardServicio
