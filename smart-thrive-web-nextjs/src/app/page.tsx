import Image from "next/image";
import AboutPage from "./(site)/about/page";
import Hero from "@/components/hero";
import CallToAction from "@/components/call-to-action";
import About from "@/components/about";
import Experience from "@/components/about/experience";
import Courses from "@/components/courses";
import Testimonials from "@/components/providers";
import HomeBlogSection from "@/components/blog/HomeBlogSection";
import { getAllPosts } from "@/utils/markdown";
import Contact from "@/components/contact";
import Clients from "@/components/clients";

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <Hero />
      <About />
      <Experience/>
      <CallToAction />
      <Courses />
      <Testimonials />
      <HomeBlogSection posts={posts} />
      <Contact />
      <Clients />
    </main>
  );
}
