"use client"

import { skills } from "@/lib/data"
import { Code, Paintbrush, TrendingUp, PieChart, Shield, Megaphone, ListTodo } from "lucide-react"
import { cn } from "@/lib/utils"

const iconMap: Record<string, React.ElementType> = {
  Code,
  Paintbrush,
  TrendingUp,
  PieChart,
  Shield,
  Megaphone,
  ListTodo,
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">Expertise</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Skills & Experience
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon] || Code
            
            return (
              <div 
                key={index}
                className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
              >
                <div className={cn(
                  "w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors",
                  skill.color === "blue" ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-500/20" : "bg-red-500/10 text-red-600 dark:text-red-400 group-hover:bg-red-500/20"
                )}>
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-lg font-bold mb-4">{skill.title}</h3>
                
                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{item.name}</span>
                      <span className={cn(
                        "text-xs font-medium px-2 py-0.5 rounded-full",
                        item.level === "Expert" ? "bg-green-500/10 text-green-600" :
                        item.level === "Advanced" ? "bg-blue-500/10 text-blue-600" :
                        item.level === "Intermediate" ? "bg-yellow-500/10 text-yellow-600" :
                        "bg-gray-500/10 text-gray-600"
                      )}>{item.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}