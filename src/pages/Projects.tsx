import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import bathroomImage from "@/assets/bathroom-renovation.jpg";
import villaImage from "@/assets/villa-exterior.jpg";
import hotelImage from "@/assets/hotel-suite.jpg";
import heroImage from "@/assets/hero-construction.jpg";

const Projects = () => {
  const projects = [
    {
      name: "Luxury Villa Renovation",
      location: "Oia, Santorini",
      category: "Villa",
      description: "Full interior and exterior redesign with modern minimalist style. This comprehensive renovation transformed a traditional property into a contemporary masterpiece, featuring open-plan living spaces, high-end finishes, and breathtaking views.",
      image: heroImage,
      year: "2024"
    },
    {
      name: "Hotel Suite Refurbishment",
      location: "Fira, Santorini",
      category: "Hotel",
      description: "Complete suite renovation including bathroom, lighting, and finishes. Upgraded 12 luxury suites with modern amenities while maintaining the property's unique character and charm.",
      image: hotelImage,
      year: "2023"
    },
    {
      name: "Modern Bathroom Design",
      location: "Imerovigli, Santorini",
      category: "Residential",
      description: "Luxury bathroom renovation featuring marble tiles, premium fixtures, and contemporary design. A perfect blend of functionality and elegance with attention to every detail.",
      image: bathroomImage,
      year: "2024"
    },
    {
      name: "Villa Exterior Restoration",
      location: "Pyrgos, Santorini",
      category: "Villa",
      description: "Traditional Cycladic architecture restoration with modern touches. Complete facade renovation maintaining historical integrity while incorporating contemporary design elements.",
      image: villaImage,
      year: "2023"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-black mb-6 animate-fade-in">
              Our Projects
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in [animation-delay:200ms]">
              Showcase of completed renovations and construction work across Santorini
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden shadow-card hover-lift">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="text-sm">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold">{project.name}</h3>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    📍 {project.location}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-card">
              <CardContent className="pt-12 pb-12 text-center">
                <h2 className="text-3xl font-black mb-6">
                  500+ Projects Delivered
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Every project represents our commitment to quality and client satisfaction. From small renovations to large-scale transformations, we approach each job with the same level of dedication and professionalism.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary text-primary-foreground rounded-lg shadow-elegant p-12 text-center">
            <h2 className="text-4xl font-black mb-4">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Have a project in mind? Contact us to discuss how we can bring your vision to life.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground font-semibold rounded-md hover:bg-background/90 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
