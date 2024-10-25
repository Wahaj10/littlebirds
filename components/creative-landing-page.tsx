"use client";
import React, { useEffect, useState, useCallback } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Bird,
  Mail,
  MapPin,
  Phone,
  Cloud,
  Feather,
  Music,
  Palette,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import kidsPlaying from "@/app/images/kids.jpeg";
import useEmblaCarousel from "embla-carousel-react";

export function CreativeLandingPageComponent() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  // eslint-disable-next-line
  const [scrollSnaps, setScrollSnaps] = useState<any>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000); // Auto-slide every 5 seconds

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const reviews = [
    {
      quote:
        "I almost don’t want to leave a review because then very quickly this dayhome will have a long wait list and then I wouldn’t be able to send my second child here haha!\
        I cannot say enough good things about Little Birds. Shabnam is experienced, knowledgeable, flexible, super patient, and always provided nutritious homemade food for the kids. Like another parent said, she treats the kids as if they were her own.\
        I had sent my child to both daycare and other dayhomes, and the quality of care my child receives at Little Birds is just incomparable. We are so lucky to have matched up with Shabnam. My child loves Shabnam and her family:).",
      author: "Kait Chang",
    },
    {
      quote:
        "My husband and I feel so lucky to have found such a wonderful dayhome for our son. At Little Birds Dayhome, we know he is eating good food, learning, playing and getting lots of outdoor time when the weather permits. Most importantly we know he is well taken care of. He’s happy to arrive and\
         always has lots to say about his day when we pick him up. We are very grateful for Little Birds!",
      author: "Megan Mitchell",
    },
    {
      quote:
        "Shabnam's dayhome is the best out of the few we tried. It has everything we were looking for: healthy \
        homemade meals, daily outdoor play, plenty of crafts and great communications between the provider and the parents.\
         I really love the pictures and videos of the kids doing various activities that she sends. Shabnam is a great educator\
          and my daughter's English improved from just a few words when she started to fluent English after just 2 months. She prepares\
           her for Kindergarten teaching her alphabet and counting. Very soon, I will be sending my second daughter to the same dayhome.",
      author: "Kamila Klimsa",
    },
    {
      quote:
        "My family recently moved from BC. We knew that finding a great daycare / dayhome for our child wouldn't be an easy task. We were SO glad that there was a space at Shabnam's Little Birds Dayhome. My son didn't really get along with any kids at his previous daycare so we were slight concerned and nervous about the transition.\
        \
        It's been almost 2 months now as I write this review. Our son is doing AMAZING. He actually enjoys going to his dayhome and is always happy. He is starting to play with other children and listens to Shabnam. We are so thankful and glad that our child goes to Shabnam's dayhome.\
        \
        If you are looking for a dayhome for your child, I 100% recommend Shabnam.\
        ",
      author: "Kevin Han",
    },
    {
      quote:
        "We've been sending our son to this day home since he was 18 months. He is now 3 years old. He surprises us constantly with new skills and language learned. Shabnam is so patient, nurturing and a great educator to all the kids. She keeps them busy learning and playing all day and he sleeps so much better after a day at her day home. She follows the healthy eating guidelines and he always trying something new.\
        She sends us daily photos and we receive monthly updates from the Childcare Society.\
        If you are searching for a day home and want peace of mind that your little one is safe, happy and healthy, then look no further than Little Birds Day Home.",
      author: "Tracy Spence",
    },
    {
      quote:
        "My son was having a very difficult time at daycare, so we pulled him out and put him in this dayhome, best decision ever! he is so happy now and looks forward to going everyday. Shabnam is lovely and patient,  you can tell she is very experienced\
         and cares greatly for the kids. Highly recommend Little Birds Dayhome",
      author: "Annie Wang",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <header className="bg-white py-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Bird className="h-8 w-8 text-sky-500" />
            <span className="text-2xl font-bold text-sky-700">
              Little Birds Day Home
            </span>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              {["Nest", "Adventures", "Chirps", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-sky-600 hover:text-sky-800 transition-colors duration-200 text-lg font-medium"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-5xl font-bold mb-4 text-sky-800">
              Welcome to Our Magical Nest
            </h1>
            <p className="text-2xl mb-8 text-sky-600">
              Where Imagination Takes Flight!
            </p>
            <Button
              asChild
              className="bg-amber-400 hover:bg-amber-500 text-sky-900 font-bold py-3 px-6 rounded-full text-xl shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
            >
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

        <section
          id="nest"
          className="py-16 bg-gradient-to-r from-sky-100 to-white rounded-3xl mx-4 my-8 shadow-inner"
        >
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-sky-800">
              Our Cozy Nest
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-lg text-sky-700">
                <p>
                  At Little Birds Day Home, we&apos;ve created a magical world
                  where:
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
                    Every child&apos;s uniqueness is celebrated
                  </li>
                </ul>
                <p>
                  Join us in a nest where learning feels like play and every day
                  brings new wonders!
                </p>
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl transform -rotate-2">
                <Image
                  src={kidsPlaying}
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
            <h2 className="text-4xl font-bold mb-12 text-center text-sky-800">
              Daily Adventures
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Curious Caterpillars",
                  age: "18 months - 3 years",
                  description:
                    "A gentle introduction to the world of wonder and discovery.",
                  icon: "🐛",
                },
                {
                  title: "Playful Puffins",
                  age: "3 - 5 years",
                  description:
                    "Where imagination and learning create colorful journeys.",
                  icon: "🐧",
                },
                {
                  title: "Soaring Eagles",
                  age: "5 - 12 years",
                  description:
                    "After-school adventures that challenge and inspire.",
                  icon: "🦅",
                },
              ].map((program, index) => (
                <Card
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
                >
                  <CardContent className="p-6">
                    <div className="text-5xl mb-4">{program.icon}</div>
                    <h3 className="text-2xl font-bold mb-2 text-sky-700">
                      {program.title}
                    </h3>
                    <p className="text-sm text-sky-500 mb-4">{program.age}</p>
                    <p className="text-sky-600">{program.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="chirps"
          className="py-16 bg-gradient-to-r from-amber-100 to-sky-100 rounded-3xl mx-4 my-8 shadow-lg"
        >
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-sky-800">
              Happy Chirps
            </h2>
            <div className="relative max-w-7xl mx-auto">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex -ml-4">
                  {reviews.map((review, index) => (
                    <div
                      key={index}
                      className="flex-[0_0_100%] md:flex-[0_0_33.33%] min-w-0 pl-4 pt-8"
                    >
                      <div
                        className="transition-all duration-300 ease-in-out transform md:hover:scale-105"
                        style={{
                          transform: `scale(${
                            index === selectedIndex ? 1.1 : 0.9
                          })`,
                          marginTop: index === selectedIndex ? "-2rem" : "0",
                          opacity: index === selectedIndex ? 1 : 0.7,
                          transition: "all 0.3s ease-in-out",
                        }}
                      >
                        <Card className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
                          <CardContent className="p-6 md:p-8 flex flex-col h-full">
                            <div className="flex-grow">
                              <Bird className="h-8 w-8 md:h-10 md:w-10 text-amber-400 mb-4 md:mb-6" />
                              <p className="mb-4 md:mb-6 italic text-lg md:text-xl text-sky-700 leading-relaxed">
                                &quot;{review.quote}&quot;
                              </p>
                            </div>
                            <p className="text-right font-medium text-sky-600 text-base md:text-lg">
                              - {review.author}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-white shadow-md hover:bg-sky-100"
                onClick={() => emblaApi?.scrollPrev()}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-white shadow-md hover:bg-sky-100"
                onClick={() => emblaApi?.scrollNext()}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex justify-center mt-8">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 w-3 rounded-full mx-1 ${
                    index === selectedIndex ? "bg-sky-500" : "bg-sky-200"
                  }`}
                  onClick={() => emblaApi?.scrollTo(index)}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="py-16 bg-white rounded-3xl mx-4 my-8 shadow-lg"
        >
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-sky-800">
              Let&apos;s Connect
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-sky-700">
                  Send Us a Friendly Tweet
                </h3>
                <form className="space-y-6">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="rounded-full border-sky-200 focus:border-amber-400 focus:ring-amber-400"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="rounded-full border-sky-200 focus:border-amber-400 focus:ring-amber-400"
                  />
                  <Input
                    type="tel"
                    placeholder="Your Phone"
                    className="rounded-full border-sky-200 focus:border-amber-400 focus:ring-amber-400"
                  />
                  <Textarea
                    placeholder="Your Message"
                    className="rounded-2xl border-sky-200 focus:border-amber-400 focus:ring-amber-400"
                    rows={4}
                  />
                  <Button
                    type="submit"
                    className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-full w-full transition-colors duration-200"
                  >
                    Send Your Tweet
                  </Button>
                </form>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-sky-700">
                  Visit Our Treehouse
                </h3>
                <address className="not-italic space-y-4 text-lg text-sky-600">
                  <p className="flex items-center">
                    <MapPin className="mr-3 h-6 w-6 text-amber-400" />
                    303 Ranchridge Bay NW, Calgary
                  </p>
                  <p className="flex items-center">
                    <Phone className="mr-3 h-6 w-6 text-amber-400" />
                    (403) 293-2961
                  </p>
                  {/* <p className="flex items-center">
                    <Mail className="mr-3 h-6 w-6 text-amber-400" />
                    info@littlebirdsdayhome.com
                  </p> */}
                </address>
                <div className="mt-8 h-64 relative rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160454.89548583867!2d-114.3439488303065!3d51.06956112739282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537169595ddd680d%3A0xa3a47dbc204531a1!2sLittle%20Birds%20Dayhome!5e0!3m2!1sen!2sca!4v1729825199072!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-sky-800 text-white py-8 rounded-t-3xl">
        <div className="container mx-auto text-center">
          <p className="text-lg mb-2">
            &copy; {new Date().getFullYear()} Little Birds Day Home. All rights
            reserved.
          </p>
          <p className="text-sm text-sky-300">
            <Link href="/privacy" className="hover:underline">
              Privacy Nest
            </Link>{" "}
            |
            <Link href="/terms" className="hover:underline ml-2">
              Treehouse Rules
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
