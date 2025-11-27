import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaSquareFacebook,
  FaYoutube
} from "react-icons/fa6"
import { AiFillTikTok } from "react-icons/ai"

const iconMap = {
  twitter: FaSquareXTwitter,
  instagram: FaSquareInstagram,
  tiktok: AiFillTikTok,
  youtube: FaYoutube,
  facebook: FaSquareFacebook,
}

const redes = [
  { id: 1, slug: 'facebook', url: 'https://www.facebook.com/MUNILAPUNTAOFICIAL/' },
  { id: 2, slug: 'instagram', url: 'https://www.instagram.com/munilapuntaoficial' },
  { id: 3, slug: 'tiktok', url: 'https://www.tiktok.com/@munilapunta' },
  { id: 4, slug: 'youtube', url: 'https://www.youtube.com/@municipalidaddelapunta74' },
  { id: 5, slug: 'twitter', url: 'https://x.com/LapuntaOficial' },
]

const SocialBar = () => {
  return (
    <div className="fixed top-1/3 right-0 z-50 flex flex-col shadow-lg">

      {redes.map((r) => {
        const Icon = iconMap[r.slug]

        return (
          <a
            key={r.id}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-12 h-12 flex items-center justify-center 
              bg-white border-b border-gray-200 group
              hover:bg-gradient-to-r 
              hover:from-[#005c98] hover:via-[#18a4a9] hover:to-[#e3ab26]
              transition-all duration-300
            "
          >
            <Icon
              size={26}
              className="
                text-[#005c98]
                group-hover:text-white
                transition-all duration-300
              "
            />
          </a>
        )
      })}

    </div>
  )
}


export default SocialBar
