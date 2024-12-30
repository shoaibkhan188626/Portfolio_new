const config = {
  title: "Shoaib Khan | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Shoaib, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Shoaib, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Shoaib",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Shoaib Khan",
  email: "shoaibullakhan15@gmail.com",
  site: "https://nareshkhatri.site",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/shoaib-ulla-khan-80302033a",
    instagram: "https://www.instagram.com/shoaib__khan_649",
    github: "https://github.com/shoaibkhan188626",
  },
};
export { config };
