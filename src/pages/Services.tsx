import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Hotel, 
  Palette, 
  Hammer, 
  Layers, 
  Mountain 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Full Property Renovations",
      description: "Complete interior and exterior renovations for homes, villas, and commercial buildings. We handle every aspect from initial design to final finishing, ensuring a seamless transformation of your property.",
      features: [
        "Complete interior redesign",
        "Exterior facade upgrades",
        "Structural modifications",
        "Modern system installations"
      ]
    },
    {
      icon: Hotel,
      title: "Hotel & Villa Refurbishment",
      description: "Upgrading and modernizing hospitality units with precision and style. Specialized in tourism properties, we understand the importance of minimal downtime and maximum impact.",
      features: [
        "Suite renovations",
        "Lobby and common area upgrades",
        "Bathroom modernization",
        "Energy-efficient improvements"
      ]
    },
    {
      icon: Palette,
      title: "Interior Design & Finishing",
      description: "Custom finishing, painting, and decorative solutions tailored to each space. Our team combines aesthetic vision with practical functionality.",
      features: [
        "Custom paint finishes",
        "Decorative treatments",
        "Lighting design",
        "Space optimization"
      ]
    },
    {
      icon: Hammer,
      title: "Bathroom & Kitchen Renovations",
      description: "High-quality installations, tiles, plumbing, and modern design solutions. We create functional, beautiful spaces that stand the test of time.",
      features: [
        "Modern fixture installation",
        "Custom cabinetry",
        "Waterproofing systems",
        "Premium tile work"
      ]
    },
    {
      icon: Layers,
      title: "Flooring & Tiling",
      description: "Professional tile and floor installation with durable materials. From traditional patterns to contemporary designs, we ensure flawless execution.",
      features: [
        "Ceramic and porcelain tiles",
        "Natural stone installation",
        "Wood and laminate flooring",
        "Waterproofing solutions"
      ]
    },
    {
      icon: Mountain,
      title: "Outdoor Construction",
      description: "Patios, poolsides, stonework, facades, and exterior improvements. Enhance your outdoor living spaces with expert craftsmanship.",
      features: [
        "Patio construction",
        "Pool area finishing",
        "Stone and masonry work",
        "Landscape integration"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-black mb-6 animate-fade-in">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in [animation-delay:200ms]">
              Comprehensive renovation and construction solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover-lift">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary text-primary-foreground rounded-lg">
                      <service.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-black mb-6">Our Process</h2>
            <p className="text-lg text-muted-foreground">
              A streamlined approach to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "01", title: "Consultation", desc: "Initial meeting and site assessment" },
              { step: "02", title: "Planning", desc: "Detailed design and project timeline" },
              { step: "03", title: "Execution", desc: "Professional construction and finishing" },
              { step: "04", title: "Completion", desc: "Final inspection and handover" }
            ].map((phase, index) => (
              <Card key={index} className="text-center shadow-card">
                <CardContent className="pt-8 pb-8">
                  <div className="text-5xl font-black text-muted-foreground/30 mb-4">{phase.step}</div>
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-muted-foreground text-sm">{phase.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary text-primary-foreground shadow-elegant">
            <CardContent className="pt-12 pb-12 text-center">
              <h2 className="text-4xl font-black mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Get in touch with us today for a free consultation and detailed quote.
              </p>
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;
