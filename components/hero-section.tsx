"use client"

import Link from "next/link"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/data"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 -z-10 opacity-10 dark:opacity-5">
        <div className="w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-10 dark:opacity-5">
        <div className="w-64 h-64 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium tracking-wide animate-fade-in">
          Available for freelance work
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground">
          Hi, I'm <span className="text-primary">{siteConfig.name}</span>
          <br />
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-muted-foreground font-semibold mt-2 block">
            {siteConfig.title}
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground mb-10 leading-relaxed">
          I build accessible, pixel-perfect, performant, and secure web applications. 
          My goal is to create digital experiences that are both beautiful and functional.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button asChild size="lg" className="rounded-full px-8">
            <Link href="#contact">
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8">
            <a href="/resume.pdf" download>
              Download CV <Download className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 text-muted-foreground">
          <a href={siteConfig.social.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}