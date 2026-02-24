"use client"

import Image from "next/image"
import { Star, Quote } from "lucide-react"
import { testimonials } from "@/lib/data"

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            What Clients Say
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl border border-border/50 relative hover:border-primary/30 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <p className="text-muted-foreground italic mb-6 leading-relaxed">
                "{item.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-secondary">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm">{item.name}</h4>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                  <p className="text-[10px] text-primary font-medium mt-0.5 uppercase tracking-wide">{item.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}