"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Bird, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function LandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Bird className="h-6 w-6" />
            <span className="text-xl font-bold">Little Birds Day Home</span>
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="#about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="#programs" className="hover:underline">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:underline">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-muted py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to Little Birds Day Home
            </h1>
            <p className="text-xl mb-8">
              Where Every Child&apos;s Potential Takes Flight
            </p>
            <Button asChild>
              <Link href="#contact">Schedule a Visit</Link>
            </Button>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Philosophy
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mb-4">
                  At Little Birds Day Home, we believe in nurturing each
                  child&apos;s unique potential through a balance of play-based
                  learning and structured activities. Our approach focuses on:
                </p>
                <ul className="list-disc list-inside mb-4">
                  <li>Fostering creativity and imagination</li>
                  <li>Developing social and emotional skills</li>
                  <li>Encouraging curiosity and a love for learning</li>
                  <li>Promoting physical activity and healthy habits</li>
                </ul>
                <p>
                  We provide a safe, loving, and stimulating environment where
                  children can grow, explore, and build lasting friendships.
                </p>
              </div>
              <div className="relative h-64 md:h-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Children playing and learning"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="programs" className="bg-muted py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Programs
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Toddler Nest",
                  age: "18 months - 3 years",
                  description:
                    "A nurturing environment for our youngest learners to explore and grow.",
                },
                {
                  title: "Preschool Perch",
                  age: "3 - 5 years",
                  description:
                    "Preparing children for kindergarten through play-based learning and social interaction.",
                },
                {
                  title: "After-School Aviary",
                  age: "5 - 12 years",
                  description:
                    "A fun and educational after-school program for school-age children.",
                },
              ].map((program, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {program.age}
                    </p>
                    <p>{program.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              What Parents Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "Little Birds Day Home has been a second family for our daughter. The care and attention she receives is outstanding!",
                  author: "Sarah M.",
                },
                {
                  quote:
                    "We've seen tremendous growth in our son's social skills and creativity since he started at Little Birds. Highly recommended!",
                  author: "Michael T.",
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <p className="mb-4 italic">{testimonial.quote}</p>
                    <p className="text-right font-bold">
                      - {testimonial.author}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="bg-primary text-primary-foreground py-16"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                <form className="space-y-4">
                  <Input type="text" placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Input type="tel" placeholder="Your Phone" />
                  <Textarea placeholder="Your Message" />
                  <Button type="submit" variant="secondary">
                    Send Message
                  </Button>
                </form>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Visit Us</h3>
                <address className="not-italic space-y-2">
                  <p className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5" />
                    123 Nest Street, Birdville, BV 12345
                  </p>
                  <p className="flex items-center">
                    <Phone className="mr-2 h-5 w-5" />
                    (555) 123-4567
                  </p>
                  <p className="flex items-center">
                    <Mail className="mr-2 h-5 w-5" />
                    info@littlebirdsdayhome.com
                  </p>
                </address>
                <div className="mt-4 h-48 relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Map"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-8">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Little Birds Day Home. All rights
            reserved.
          </p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="hover:underline ml-2">
              Terms of Service
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
