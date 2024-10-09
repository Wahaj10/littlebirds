'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Bird, Mail, MapPin, Phone, Sun, Cloud, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function FunLandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-sky-50">
      <header className="bg-yellow-400 text-blue-900 py-4 rounded-b-3xl shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Bird className="h-8 w-8 text-blue-700" />
            <span className="text-2xl font-bold font-comic">Little Birds Day Home</span>
          </Link>
          <nav>
            <ul className="flex space-x-4">
              {["About", "Fun Stuff", "Happy Parents", "Say Hi!"].map((item, index) => (
                <li key={index}>
                  <Link href={`#${item.toLowerCase().replace(" ", "-")}`} className="hover:underline text-lg font-semibold">
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
            <h1 className="text-5xl font-bold mb-4 text-blue-900 animate-bounce">Welcome to Our Nest of Fun!</h1>
            <p className="text-2xl mb-8 text-blue-700">Where Little Birds Spread Their Wings and Soar!</p>
            <Button asChild className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full text-xl animate-pulse">
              <Link href="#say-hi">Come Play With Us!</Link>
            </Button>
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
            <Cloud className="absolute top-10 left-10 h-20 w-20 text-blue-200 animate-bounce" />
            <Sun className="absolute top-20 right-20 h-24 w-24 text-yellow-400 animate-spin-slow" />
            <Star className="absolute bottom-10 left-1/4 h-16 w-16 text-yellow-300 animate-pulse" />
          </div>
        </section>

        <section id="about" className="py-16 bg-blue-100 rounded-3xl mx-4 my-8 shadow-inner">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-blue-900">Our Silly Philosophy</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-lg text-blue-800">
                <p>
                  At Little Birds Day Home, we believe in giggles, wiggles, and learning through play! Our nest is where:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Imagination takes flight 🚀</li>
                  <li>Friendships bloom like flowers 🌸</li>
                  <li>Curiosity is our superpower 🦸‍♂️</li>
                  <li>Every day is an adventure 🏞️</li>
                </ul>
                <p>
                  We're not just a daycare, we're a launchpad for little explorers, dreamers, and future world-changers!
                </p>
              </div>
              <div className="relative h-64 md:h-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Happy kids playing and having fun"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-3xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="fun-stuff" className="py-16">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-blue-900">Our Awesome Activities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Tiny Tots Treehouse",
                  age: "18 months - 3 years",
                  description: "A cozy spot for our littlest birds to chirp, crawl, and make new friends!",
                  icon: "🏡"
                },
                {
                  title: "Preschool Party Palace",
                  age: "3 - 5 years",
                  description: "Where ABCs and 123s meet dress-up and make-believe!",
                  icon: "🎉"
                },
                {
                  title: "After-School Adventure Club",
                  age: "5 - 12 years",
                  description: "Homework help meets epic quests and cool experiments!",
                  icon: "🚀"
                }
              ].map((program, index) => (
                <Card key={index} className="bg-yellow-100 rounded-3xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-5xl mb-4">{program.icon}</div>
                    <h3 className="text-2xl font-bold mb-2 text-blue-800">{program.title}</h3>
                    <p className="text-sm text-blue-600 mb-4">{program.age}</p>
                    <p className="text-blue-700">{program.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="happy-parents" className="py-16 bg-pink-100 rounded-3xl mx-4 my-8 shadow-inner">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-blue-900">Happy Bird Families</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote: "Little Birds is like a second nest for our little chick! She comes home every day with new songs and funny stories!",
                  author: "Mama Robin"
                },
                {
                  quote: "Our son used to be shy, but now he's the leader of his own pirate crew! Thank you for helping him find his voice!",
                  author: "Papa Sparrow"
                }
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden">
                  <CardContent className="p-6">
                    <p className="mb-4 italic text-lg text-blue-700">"{testimonial.quote}"</p>
                    <p className="text-right font-bold text-blue-800">- {testimonial.author}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="say-hi" className="py-16 bg-green-100 rounded-3xl mx-4 my-8 shadow-inner">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-blue-900">Let's Chat!</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Send Us a Friendly Chirp</h3>
                <form className="space-y-4">
                  <Input type="text" placeholder="Your Name (Superhero names welcome!)" className="rounded-full" />
                  <Input type="email" placeholder="Your Email (No owl post, sorry!)" className="rounded-full" />
                  <Input type="tel" placeholder="Your Phone (For important playtime updates)" className="rounded-full" />
                  <Textarea placeholder="Your Message (Tell us your favorite joke!)" className="rounded-2xl" />
                  <Button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-2 px-4 rounded-full w-full">
                    Send Your Chirp!
                  </Button>
                </form>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Find Our Nest</h3>
                <address className="not-italic space-y-4 text-lg text-blue-700">
                  <p className="flex items-center">
                    <MapPin className="mr-2 h-6 w-6" />
                    123 Treehouse Lane, Funville, FV 12345
                  </p>
                  <p className="flex items-center">
                    <Phone className="mr-2 h-6 w-6" />
                    (555) PLAY-TIME
                  </p>
                  <p className="flex items-center">
                    <Mail className="mr-2 h-6 w-6" />
                    hello@littlebirdsfunhouse.com
                  </p>
                </address>
                <div className="mt-6 h-48 relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Map to our fun nest"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-yellow-400 py-8 rounded-t-3xl shadow-inner">
        <div className="container mx-auto text-center">
          <p className="text-blue-900 text-lg">&copy; {new Date().getFullYear()} Little Birds Day Home. All rights reserved (but fun is always free!)</p>
          <p className="mt-2 text-blue-700">
            <Link href="/privacy" className="hover:underline">Our Promise to Keep Secrets</Link> | 
            <Link href="/terms" className="hover:underline ml-2">Rules of the Playground</Link>
          </p>
        </div>
      </footer>
    </div>
  )
}