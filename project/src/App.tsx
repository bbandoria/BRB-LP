import React, { useState } from 'react';
import { 
  TrendingUp, 
  Share2, 
  Globe, 
  MessageSquare, 
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  TrendingDown,
  BarChart3,
  Phone
} from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const services = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Tráfego Pago",
      description: "Campanhas estratégicas que geram resultados reais para seu negócio"
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Social Media",
      description: "Gestão profissional das suas redes sociais com conteúdo que engaja"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Desenvolvimento Web",
      description: "Sites e landing pages modernos e otimizados para conversão"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automações",
      description: "Processos automatizados para aumentar a eficiência do seu negócio"
    }
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "CEO, TechStart",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      content: "A BRB Digital transformou completamente nossa presença online. Aumentamos nossas conversões em 150% em apenas 3 meses.",
      rating: 5
    },
    {
      name: "Ana Paula",
      role: "Marketing Director, Fashion Corp",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      content: "Excelente equipe! Nosso ROI em mídia paga triplicou desde que começamos a trabalhar com eles.",
      rating: 5
    },
    {
      name: "Roberto Santos",
      role: "Founder, RS Solutions",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      content: "As automações implementadas pela BRB economizaram mais de 30 horas semanais da nossa equipe.",
      rating: 5
    }
  ];

  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "+280%",
      label: "Média de aumento em ROI",
      color: "bg-green-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "+150",
      label: "Clientes Atendidos",
      color: "bg-blue-500"
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      value: "-45%",
      label: "Redução em CAC",
      color: "bg-purple-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      value: "98%",
      label: "Taxa de Satisfação",
      color: "bg-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 relative">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5519999353218"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all z-50 flex items-center gap-2"
      >
        <Phone className="w-6 h-6" />
        <span className="hidden md:inline">Fale Conosco</span>
      </a>

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <img 
              src="https://i.imgur.com/XpXAGCH.png"
              alt="BRB Digital Logo"
              className="h-16 w-auto"
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-all">
            Contato
          </button>
        </nav>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transforme sua presença digital em resultados reais
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Somos especialistas em marketing digital, desenvolvimento web e automação. 
              Deixe-nos impulsionar seu negócio para o próximo nível.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all flex items-center gap-2">
                Comece Agora <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="bg-gradient-to-tr from-blue-500/20 to-purple-500/20 p-8 rounded-2xl backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6">Fale com um especialista</h3>
              <input
                type="text"
                placeholder="Nome completo"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input
                type="email"
                placeholder="E-mail profissional"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <input
                type="tel"
                placeholder="Telefone"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              <input
                type="text"
                placeholder="Empresa"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
              />
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-all"
              >
                Solicitar Contato
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Nossos Serviços
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:transform hover:-translate-y-2 transition-all">
              <div className="text-blue-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          O que nossos clientes dizem
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-transparent to-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Por que escolher a BRB Digital?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Equipe especializada e dedicada",
            "Resultados mensuráveis e transparentes",
            "Estratégias personalizadas",
            "Suporte contínuo",
            "Tecnologia de ponta",
            "ROI comprovado"
          ].map((benefit, index) => (
            <div key={index} className="flex items-center gap-3 text-white">
              <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src="https://i.imgur.com/XpXAGCH.png"
              alt="BRB Digital Logo"
              className="h-10 w-auto"
            />
          </div>
          <p>© 2024 BRB Agência Digital. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;