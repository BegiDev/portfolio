import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { articles } from "@/constant/constants"

export default function Article() {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-10">Articles</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {articles.map((article, index) => (
                    <div key={index} className="w-full transition-all duration-500 dark:hover:bg-zinc-900 rounded-xl hover:bg-[#e6e6e6] py-4 flex gap-6 items-start font-poppins">
                        <div className="flex items-start gap-4 px-2">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.37 7.255C4.37 7.044 4.29 6.842 4.146 6.689L2.78 5.055V4.8H7.52L11.2 13.091L14.4 4.8H18.92V5.055L17.745 6.182C17.635 6.264 17.58 6.4 17.6 6.535V17.164C17.58 17.3 17.635 17.436 17.745 17.518L18.883 18.645V18.9H12.52V18.645L13.695 17.482C13.822 17.355 13.822 17.318 13.822 17.127V8.327L10.185 18.864H9.675L5.495 8.327V15.509C5.46 15.764 5.54 16.018 5.71 16.2L7.265 18.609V18.864H2.4V18.609L3.955 16.2C4.125 16.018 4.195 15.764 4.15 15.509V7.255H4.37Z"
                                    className="fill-black dark:fill-white"
                                />
                            </svg>
                            <div className="flex flex-col max-w-[85%] gap-2 h-full justify-between">
                                <Link href={article.link} target="__blank" className="font-bold line-clamp-2 hover:underline text-base md:text-[20px] underline-offset-2 text-black dark:text-white">
                                    {article.title}
                                </Link>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {article.badges.map((badge, badgeIndex) => (
                                        <Badge key={badgeIndex} variant="secondary" className="capitalize text-xs md:text-sm h-max font-bold font-urbanist w-max text-gray-700 dark:text-gray-200 bg-primary/30 px-2 py-1 rounded-sm">
                                            {badge}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
