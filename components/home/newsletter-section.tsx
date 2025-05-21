import { Cloud, Mail } from "lucide-react";
import { Button } from "../ui/button";
import { Roboto, Saira } from 'next/font/google'

const saira = Saira({
  weight: '400',
  subsets: ['latin'],
})

export default function Newsletter() {
    return (
        <section className="px-8 md:px-40 py-8 md:py-20 pb-10 bg-[url('/car1.png')] bg-center bg-cover bg-no-repeat relative">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#4db3910d]/5 via-violet-500/25 to-transparent p-8 md:p-12 border border-pink-900/25">

          <div className={`relative max-w-2xl mx-auto text-center dark:text-white ${saira.className}`}>
            <Mail className="h-8 w-8 text-emerald-700 mx-auto mb-4" />
            <span className="text-[26px] md:text-[36px] text-zinc-800 dark:text-zinc-200 font-bold tracking-[-0.025em]">Fresh Gradients, Straight to Your Inbox</span>
            <p className="text-[#bab3ab] text-xl tracking-wider font-extralight pt-2">
            Sign up for our newsletter and never miss out on new arrivals and exclusive gradient packs.
            </p>
            <form className="flex flex-col items-center sm:flex-row gap-3 max-w-md mx-auto mt-8">
              <input
                type="email"
                placeholder="Your email address"
                className="text-sm text-center flex-1 px-4 py-3 rounded-full bg-[#F7F8FA]/50 dark:bg-black border border-[#2c2621] dark:placeholder:text-zinc-100 dark:placeholder:opacity-50 placeholder:text-zinc-400"
                required
              />
              <Button type="submit" className="rounded-full bg-emerald-700 px-5 py-5 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    )
}