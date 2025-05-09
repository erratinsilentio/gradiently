"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

export default function GradientCarousell() {
  return (
    <>
      <section className="pt-8 pb-16 px-6 bg-black flex  flex-col items-center justify-center overflow-hidden">
      <div className="fade-mask [mask-image:linear-gradient(to_right,transparent,black_10%,black_80%,transparent)] [mask-size:100%_100%] [mask-repeat:no-repeat]">
        <Carousel
          className=""
          plugins={[
            AutoScroll({
              playOnInit: true,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-3">
                  <Card className="h-[240px] p-0 overflow-hidden border-0">
                    <img
                      src={`/sample${index + 1}.png`}
                      alt="Sample"
                      className="w-full min-h-full object-cover opacity-50 hover:opacity-90 transition duration-200 cursor-pointer hover:scale-105"
                    />
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        </div>
      </section>
    </>
  );
}
