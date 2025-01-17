import { motion } from "framer-motion";
import { ArrowRight, Component, Palette, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel } from "@/components/ui/carousel";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const dogImages = [
  "https://images.unsplash.com/photo-1558788353-f76d92427f16",
  "https://images.unsplash.com/photo-1560807707-8cc77767d783",
  "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8",
  "https://images.unsplash.com/photo-1517849845537-4d257902454a",
  "https://images.unsplash.com/photo-1507146426996-ef05306b995a"
];

export default function IndexPage() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-16 space-y-32">
      {/* Hero Section */}
      <motion.section 
        className="text-center space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Badge variant="secondary" className="mb-4">
          Welcome to Our Business
        </Badge>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Transforming Ideas into Reality
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          We provide innovative solutions to help your business grow.
        </p>
        <Button size="lg" className="mt-4" onClick={() => navigate('/contact')}>
          Contact Us <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.section>

      {/* Features Section */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-3"
      >
        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Component className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Innovative Solutions</h3>
              <p className="text-muted-foreground">
                We offer cutting-edge solutions tailored to your needs.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Creative Design</h3>
              <p className="text-muted-foreground">
                Our designs are crafted to captivate and engage your audience.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Fast Execution</h3>
              <p className="text-muted-foreground">
                We ensure timely delivery without compromising on quality.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Image Slider Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="space-y-8"
      >
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Lovely Dogs
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Enjoy a collection of adorable dog images.
          </p>
        </motion.div>

        <Carousel className="w-full max-w-3xl mx-auto">
          {dogImages.map((src, index) => (
            <img key={index} src={src} alt={`Dog ${index + 1}`} className="w-full h-auto rounded-lg shadow-lg" />
          ))}
        </Carousel>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center space-y-6"
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Ready to Elevate Your Business?
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Contact us today to discuss how we can help you achieve your goals.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button size="lg" variant="default" onClick={() => navigate('/services')}>
              Our Services
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/contact')}>
              Get in Touch
            </Button>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
