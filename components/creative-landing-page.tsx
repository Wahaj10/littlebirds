'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Bird, Mail, MapPin, Phone, Cloud, Feather, Music, Palette } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function CreativeLandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <header className="bg-white py-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Bird className="h-8 w-8 text-sky-500" />
            <span className="text-2xl font-bold text-sky-700">Little Birds Day Home</span>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              {["Nest", "Adventures", "Chirps", "Contact"].map((item, index) => (
                <li key={index}>
                  <Link href={`#${item.toLowerCase()}`} className="text-sky-600 hover:text-sky-800 transition-colors duration-200 text-lg font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-5xl font-bold mb-4 text-sky-800">Welcome to Our Magical Nest</h1>
            <p className="text-2xl mb-8 text-sky-600">Where Imagination Takes Flight!</p>
            <Button asChild className="bg-amber-400 hover:bg-amber-500 text-sky-900 font-bold py-3 px-6 rounded-full text-xl shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
              <Link href="#contact">Start Your Adventure</Link>
            </Button>
          </div>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <Cloud className="absolute top-10 left-1/4 h-16 w-16 text-sky-200 animate-float" />
            <Cloud className="absolute top-32 right-1/4 h-20 w-20 text-sky-100 animate-float-slow" />
            <Feather className="absolute bottom-10 left-1/3 h-12 w-12 text-amber-300 animate-sway" />
            <Feather className="absolute top-1/4 right-1/3 h-10 w-10 text-amber-200 animate-sway-slow" />
          </div>
        </section>

        <section id="nest" className="py-16 bg-gradient-to-r from-sky-100 to-white rounded-3xl mx-4 my-8 shadow-inner">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-sky-800">Our Cozy Nest</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-lg text-sky-700">
                <p>
                  At Little Birds Day Home, we've created a magical world where:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Palette className="h-6 w-6 mr-2 text-amber-400" />
                    Creativity soars higher than the clouds
                  </li>
                  <li className="flex items-center">
                    <Music className="h-6 w-6 mr-2 text-amber-400" />
                    Laughter and song fill the air
                  </li>
                  <li className="flex items-center">
                    <Feather className="h-6 w-6 mr-2 text-amber-400" />
                    Every child's uniqueness is celebrated
                  </li>
                </ul>
                <p>
                  Join us in a nest where learning feels like play and every day brings new wonders!
                </p>
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl transform -rotate-2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Magical treehouse classroom"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="adventures" className="py-16">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-sky-800">Daily Adventures</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Curious Caterpillars",
                  age: "18 months - 3 years",
                  description: "A gentle introduction to the world of wonder and discovery.",
                  icon: "🐛"
                },
                {
                  title: "Playful Puffins",
                  age: "3 - 5 years",
                  description: "Where imagination and learning create colorful journeys.",
                  icon: "🐧"
                },
                {
                  title: "Soaring Eagles",
                  age: "5 - 12 years",
                  description: "After-school adventures that challenge and inspire.",
                  icon: "🦅"
                }
              ].map((program, index) => (
                <Card key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="text-5xl mb-4">{program.icon}</div>
                    <h3 className="text-2xl font-bold mb-2 text-sky-700">{program.title}</h3>
                    <p className="text-sm text-sky-500 mb-4">{program.age}</p>
                    <p className="text-sky-600">{program.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="chirps" className="py-16 bg-gradient-to-l from-amber-50 to-white rounded-3xl mx-4 my-8 shadow-inner">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-sky-800">Happy Chirps</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote: "Little Birds has become our daughter's favorite place! The creativity and care are truly magical.",
                  author: "Sarah, Hummingbird Mom"
                },
                {
                  quote: "As working parents, we couldn't ask for a better 'home away from home' for our son. He's thriving!",
                  author: "Mark & Lisa, Owl Parents"
                }
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex-grow">
                      <Bird className="h-8 w-8 text-amber-400 mb-4" />
                      <p className="mb-4 italic text-lg text-sky-700">"{testimonial.quote}"</p>
                    </div>
                    <p className="text-right font-medium text-sky-600">- {testimonial.author}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-white rounded-3xl mx-4 my-8 shadow-lg">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-sky-800">Let's Connect</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-sky-700">Send Us a Friendly Tweet</h3>
                <form className="space-y-6">
                  <Input type="text" placeholder="Your Name" className="rounded-full border-sky-200 focus:border-amber-400 focus:ring-amber-400" />
                  <Input type="email" placeholder="Your Email" className="rounded-full border-sky-200 focus:border-amber-400 focus:ring-amber-400" />
                  <Input type="tel" placeholder="Your Phone" className="rounded-full border-sky-200 focus:border-amber-400 focus:ring-amber-400" />
                  <Textarea placeholder="Your Message" className="rounded-2xl border-sky-200 focus:border-amber-400 focus:ring-amber-400" rows={4} />
                  <Button type="submit" className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-full w-full transition-colors duration-200">
                    Send Your Tweet
                  </Button>
                </form>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-sky-700">Visit Our Treehouse</h3>
                <address className="not-italic space-y-4 text-lg text-sky-600">
                  <p className="flex items-center">
                    <MapPin className="mr-3 h-6 w-6 text-amber-400" />
                    123 Whispering Willow Lane, Nestville, NV 12345
                  </p>
                  <p className="flex items-center">
                    <Phone className="mr-3 h-6 w-6 text-amber-400" />
                    (555) CHIRP-CHIRP
                  </p>
                  <p className="flex items-center">
                    <Mail className="mr-3 h-6 w-6 text-amber-400" />
                    hello@littlebirdsdayhome.com
                  </p>
                </address>
                <div className="mt-8 h-64 relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Map to Little Birds Day Home"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-sky-800 text-white py-8 rounded-t-3xl">
        <div className="container mx-auto text-center">
          <p className="text-lg mb-2">&copy; {new Date().getFullYear()} Little Birds Day Home. All rights reserved.</p>
          <p className="text-sm text-sky-300">
            <Link href="/privacy" className="hover:underline">Privacy Nest</Link> | 
            <Link href="/terms" className="hover:underline ml-2">Treehouse Rules</Link>
          </p>
        </div>
      </footer>
    </div>
  )
}