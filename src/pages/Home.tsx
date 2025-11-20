import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2, 
  Palette, 
  Home as HomeIcon, 
  Hotel, 
  Hammer, 
  Layers,
  CheckCircle,
  Users,
  Award,
  Clock
} from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import bathroomImage from "@/assets/bathroom-renovation.jpg";
import villaImage from "@/assets/villa-exterior.jpg";
import hotelImage from "@/assets/hotel-suite.jpg";

const Home = () => {
  const services = [
    { icon: Building2, title: "Renovations", description: "Complete property transformations" },
    { icon: Hammer, title: "Construction", description: "New builds and extensions" },
    { icon: Palette, title: "Interior Design", description: "Custom finishing solutions" },
    { icon: HomeIcon, title: "Exterior Facades", description: "Modern facade upgrades" },
    { icon: Layers, title: "Tile & Floor", description: "Professional installations" },
    { icon: Hotel, title: "Hotel Upgrades", description: "Hospitality renovations" },
  ];

  const stats = [
    { icon: Clock, value: "10+", label: "Years Experience" },
    { icon: CheckCircle, value: "500+", label: "Projects Completed" },
    { icon: Users, value: "450+", label: "Happy Clients" },
    { icon: Award, value: "100%", label: "Quality Guarantee" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 animate-fade-in text-balance">
            Transforming Spaces with Precision & Style
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 animate-fade-in [animation-delay:200ms]">
            10 Years of Renovation Excellence in Santorini
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:400ms]">
            <Button asChild size="lg" className="text-lg">
              <Link to="/projects">View Projects</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">Why Choose A FINISH O.E.</h2>
            <p className="text-lg text-muted-foreground">
              We bring together expertise, quality, and dedication to deliver exceptional renovation services across Santorini.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center shadow-card hover-lift">
                <CardContent className="pt-8 pb-8">
                  <stat.icon className="w-12 h-12 mx-auto mb-4" />
                  <div className="text-4xl font-black mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "10+ years of industry expertise in Santorini",
              "High-quality renovations for villas, hotels, and homes",
              "Professional, detail-oriented finishing",
              "Trusted by hundreds of satisfied clients"
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0 text-primary mt-1" />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">Our Core Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive renovation and construction solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover-lift cursor-pointer">
                <CardContent className="pt-8 pb-8 text-center">
                  <service.icon className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              Explore our recent work and see the quality that defines us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: bathroomImage, title: "Luxury Bathroom", category: "Residential" },
              { img: villaImage, title: "Villa Exterior", category: "Villa" },
              { img: hotelImage, title: "Hotel Suite", category: "Commercial" },
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden shadow-card hover-lift cursor-pointer">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="pt-6 pb-6">
                  <div className="text-sm text-muted-foreground mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="secondary">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today for a free consultation and quote. Let's bring your vision to life.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
