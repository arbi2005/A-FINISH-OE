import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Target, Heart } from "lucide-react";
import villaImage from "@/assets/villa-exterior.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Professionalism",
      description: "We maintain the highest standards in every project we undertake.",
    },
    {
      icon: Users,
      title: "Quality",
      description: "Excellence in craftsmanship and materials is our commitment.",
    },
    {
      icon: Target,
      title: "Trust",
      description: "Building lasting relationships through reliability and transparency.",
    },
    {
      icon: Heart,
      title: "Innovation",
      description: "Combining traditional techniques with modern design solutions.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-black mb-6 animate-fade-in">
              About A FINISH O.E.
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in [animation-delay:200ms]">
              10 Years of Excellence in Construction & Renovation
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  A FINISH O.E. is a professional construction and renovation company based in Santorini. We specialize in full-scale renovations, restorations, interior & exterior finishing, and hotel/villa upgrades.
                </p>
                <p>
                  Our team combines craftsmanship with modern design, delivering projects on time with the highest quality standards. With a decade of experience serving the unique architectural landscape of Santorini, we understand the importance of preserving character while embracing contemporary functionality.
                </p>
                <p>
                  With hundreds of successful projects, we continue to build strong relationships with satisfied clients across the island. From luxury villas to boutique hotels, residential homes to commercial spaces, our portfolio reflects our versatility and commitment to excellence.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={villaImage}
                alt="Santorini Architecture"
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black mb-8 text-center">Our Mission</h2>
            <Card className="shadow-card">
              <CardContent className="pt-8 pb-8">
                <p className="text-xl text-center leading-relaxed">
                  To deliver premium renovation solutions that elevate spaces with quality, style, and long-lasting durability. We aim to exceed expectations by combining technical expertise with creative vision, ensuring every project becomes a testament to superior craftsmanship.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-black mb-6">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide our work and relationships with clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="shadow-card hover-lift text-center">
                <CardContent className="pt-8 pb-8">
                  <value.icon className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-black mb-2">10+</div>
              <div className="text-lg opacity-90">Years in Business</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">500+</div>
              <div className="text-lg opacity-90">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">450+</div>
              <div className="text-lg opacity-90">Satisfied Clients</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">100%</div>
              <div className="text-lg opacity-90">Quality Commitment</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
