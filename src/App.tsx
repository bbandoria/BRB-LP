import { FormEvent, useState } from 'react'
import { LineChart, Code, Zap, Star, Check, Users, TrendingDown, TrendingUp } from 'lucide-react'
import emailjs from '@emailjs/browser'

// Add Facebook Pixel type declaration
declare global {
  interface Window {
    fbq: any;
  }
}

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    // Track lead in Facebook Pixel
    window.fbq('track', 'Lead')
    
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Initialize EmailJS with your public key
      emailjs.init("-rRS02N1bof5aBznR") // Replace with your actual public key

      const templateParams = {
        to_email: 'brbagenciadigital@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        from_company: formData.company,
        message: `
          Nome: ${formData.name}
          Email: ${formData.email}
          Telefone: ${formData.phone}
          Empresa: ${formData.company}
        `
      }

      await emailjs.send(
        'service_mzmwuka', // Replace with your EmailJS service ID
        'template_1js4zw9', // Replace with your EmailJS template ID
        templateParams
      )

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: ''
      })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const stats = [
    {
      number: '+180%',
      label: 'Média de aumento em ROI',
      icon: <TrendingUp className="stat-icon green" />
    },
    {
      number: '+80',
      label: 'Clientes Atendidos',
      icon: <Users className="stat-icon blue" />
    },
    {
      number: '-45%',
      label: 'Redução em CAC',
      icon: <TrendingDown className="stat-icon purple" />
    },
    {
      number: '92%',
      label: 'Taxa de Satisfação',
      icon: <Star className="stat-icon yellow" />
    }
  ]

  const services = [
    {
      title: 'Tráfego Pago',
      description: 'Campanhas otimizadas que geram resultados reais para seu negócio',
      icon: <LineChart className="service-icon" />
    },
    {
      title: 'Social Media',
      description: 'Gestão profissional das suas redes sociais com conteúdo que engaja',
      icon: <Code className="service-icon" />
    },
    {
      title: 'Desenvolvimento Web',
      description: 'Sites e landing pages modernos e otimizados para converter',
      icon: <Code className="service-icon" />
    },
    {
      title: 'Automações',
      description: 'Processos automatizados para aumentar a eficiência do seu negócio',
      icon: <Zap className="service-icon" />
    }
  ]

  const testimonials = [
    {
      content: 'A BRB Digital transformou completamente nossa presença online. Aumentamos nossas conversões em 150% em apenas 3 meses.',
      author: 'Carlos Silva',
      rating: 5
    },
    {
      content: 'Excelente equipe! Nossa ROI em mídia paga triplicou desde que começamos a trabalhar com eles.',
      author: 'Ana Paula',
      rating: 5
    },
    {
      content: 'As automações implementadas pela BRB economizaram mais de 30 horas semanais da nossa equipe.',
      author: 'Roberto Santos',
      rating: 5
    }
  ]

  const features = [
    'Equipe especializada e dedicada',
    'Suporte contínuo',
    'Resultados mensuráveis e transparentes',
    'Tecnologia de ponta',
    'Estratégias personalizadas',
    'ROI comprovado'
  ]

  return (
    <div className="app-container">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Transforme sua presença digital em resultados reais
          </h1>
          <p className="hero-subtitle">
            Somos especialistas em marketing digital, desenvolvimento web e automação. Deixe nos impulsionar seu negócio para o próximo nível.
          </p>
        </div>

        <div className="hero-form">
          <div className="contact-form">
            <h2 className="form-title">Fale com um especialista</h2>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                name="name"
                className="input-field"
                placeholder="Nome completo"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                className="input-field"
                placeholder="E-mail profissional"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                type="tel"
                name="phone"
                className="input-field"
                placeholder="Telefone"
                required
                value={formData.phone}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="company"
                className="input-field"
                placeholder="Empresa"
                required
                value={formData.company}
                onChange={handleInputChange}
              />
              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Solicitar Contato'}
              </button>
              
              {submitStatus === 'success' && (
                <p className="form-message success">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </p>
              )}
              
              {submitStatus === 'error' && (
                <p className="form-message error">
                  Erro ao enviar mensagem. Por favor, tente novamente.
                </p>
              )}
            </form>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              {stat.icon}
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2 className="section-title">Nossos Serviços</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              {service.icon}
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="section-title">O que nossos clientes dizem</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-info">
                  <div className="testimonial-name">{testimonial.author}</div>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="testimonial-content">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <h2 className="section-title">Por que escolher a BRB Digital?</h2>
        <div className="feature-list">
          {features.map((feature) => (
            <div key={feature} className="feature-item">
              <Check className="feature-icon" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 BRB Agência Digital. Todos os direitos reservados.</p>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5519999353218"
        target="_blank"
        rel="noopener noreferrer"
        className="float-button"
      >
        <svg 
          viewBox="0 0 24 24" 
          className="float-icon"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span>Fale Conosco</span>
      </a>
    </div>
  )
}

export default App
