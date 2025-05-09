import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export default function HeroSection() {
  return (
    <section className="w-full h-[110vh] py-20 md:py-32 lg:py-40 overflow-hidden bg-[url('/hero6.png')] bg-center bg-cover bg-no-repeat">
      <div className=" px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <Badge
            className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-white/10 text-white hover:bg-white/20"
            variant="outline"
          >
            Now Available
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-l from-blue-200 via-blue-100 to-blue-200">
            Elevate Your Design with Stunning Gradients
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-blue-100 to-blue-100">
            Vibrant, ready-to-use gradient backgrounds that make your landing
            pages stand out
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="default"
              className="rounded-full cursor-pointer h-12 px-8 text-base border-[1px] border-violet-500/50 bg-gradient-to-br from-teal-700 via-teal-900/75 to-teal-500 hover:bg-black text-white"
            >
              Explore Now
            </Button>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6 text-sm text-gray-300">
            <div className="flex items-center gap-1">
              <Check className="size-4 text-pink-400" />
              <span>Unlimited access</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="size-4 text-pink-400" />
              <span>One-time payment</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="size-4 text-pink-400" />
              <span>Production ready</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
