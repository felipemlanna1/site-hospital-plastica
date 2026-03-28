import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Star, WhatsappLogo, Phone, ShieldCheck, UserCircle, MapPin, Clock, Certificate, Hospital, Syringe, Heart, Eye, Scissors, FirstAid } from '@phosphor-icons/react'
import './App.css'

const WA = 'https://wa.me/5548996296030?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20no%20Hospital%20da%20Pl%C3%A1stica!'
const TEL = 'tel:+554832290202'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] } }),
}
const stagger = { visible: { transition: { staggerChildren: 0.08 } } }

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-logo"><Hospital size={20} weight="duotone" /> Hospital da Plástica <span>SC</span></div>
      <div className="nav-links">
        <a href="#cirurgioes">Cirurgiões</a>
        <a href="#especialidades">Especialidades</a>
        <a href="#contato">Contato</a>
      </div>
      <a href={WA} target="_blank" rel="noopener noreferrer" className="nb">
        <WhatsappLogo size={16} weight="duotone" /> Agendar
      </a>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="mx hero-center">
        <motion.div className="hero-badge" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <ShieldCheck size={14} weight="fill" /> Desde 2009 • 1000m² de Infraestrutura
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
          Excelência em<br /><span className="accent">cirurgia plástica</span>
        </motion.h1>
        <motion.p className="hero-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          Centro cirúrgico especializado com 8 cirurgiões plásticos, equipe de anestesiologia com 25+ anos de experiência, e infraestrutura hospitalar completa no Centro de Florianópolis.
        </motion.p>
        <motion.div className="hero-stats" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
          <div className="stat"><strong>4.6</strong><span>Google</span></div>
          <div className="stat-sep" />
          <div className="stat"><strong>250+</strong><span>Avaliações</span></div>
          <div className="stat-sep" />
          <div className="stat"><strong>8</strong><span>Cirurgiões</span></div>
          <div className="stat-sep" />
          <div className="stat"><strong>15+</strong><span>Anos</span></div>
        </motion.div>
        <motion.div className="hero-btns" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-prim">
            <WhatsappLogo size={18} weight="duotone" /> <span>Agendar Consulta</span>
          </a>
          <a href={TEL} className="btn-sec">
            <Phone size={18} weight="duotone" /> <span>(48) 3229-0202</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

const cirurgioes = [
  { name: 'Dr. Paulo Mendes', crm: 'CRM/SC 5169', wa: '5548984285678' },
  { name: 'Dra. Ingrid Luckmann', crm: 'CRM/SC 12912', wa: '5548996600960' },
  { name: 'Dr. Evandro Parente', crm: 'CRM/SC 8130', wa: '5548999145379' },
  { name: 'Dr. Guilherme Pintarelli', crm: 'CRM/SC 13519', wa: '5548991202006' },
  { name: 'Dr. Conrado D\'Avila', crm: 'CRM/SC 12476', wa: '5548988153003' },
  { name: 'Dr. Denis Burger', crm: 'CRM/SC 13900', wa: '5548984772100' },
  { name: 'Dr. Willian Seidel', crm: 'CRM/SC 19085', wa: '5548991068213' },
  { name: 'Dra. Aimée Recchia', crm: 'CRM/SC 22065', wa: '5548992221223' },
]

function Cirurgioes() {
  return (
    <section className="sp cir-sec" id="cirurgioes">
      <div className="mx">
        <motion.div className="sh" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="stg">Corpo Clínico</span>
          <h2>Cirurgiões plásticos</h2>
          <p>Membros da Sociedade Brasileira de Cirurgia Plástica</p>
        </motion.div>
        <motion.div className="cir-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {cirurgioes.map((c, i) => (
            <motion.div key={i} className="cir-card" variants={fadeUp} custom={i}>
              <UserCircle size={36} weight="duotone" className="cir-icon" />
              <h3>{c.name}</h3>
              <span className="cir-crm">{c.crm}</span>
              <span className="cir-spec">Cirurgia Plástica</span>
              <a href={`https://wa.me/${c.wa}`} target="_blank" rel="noopener noreferrer" className="cir-wa">
                <WhatsappLogo size={14} weight="duotone" /> Agendar
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const especialidades = [
  { icon: <Syringe size={24} weight="duotone" />, title: 'Cirurgia Plástica', desc: 'Prótese de mama, abdominoplastia, lipoaspiração, lifting facial e corporal.' },
  { icon: <Eye size={24} weight="duotone" />, title: 'Rinoplastia', desc: 'Dr. Juliano Colonetti e Dr. Waldir Carreirão Neto. Referência em rinoplastia.' },
  { icon: <Heart size={24} weight="duotone" />, title: 'Mastologia', desc: 'Equipe feminina especializada. Dra. Adriana, Dra. Liliane, Dra. Rebeca e Dra. Juliana.' },
  { icon: <Scissors size={24} weight="duotone" />, title: 'Cirurgia Vascular', desc: 'Dr. Vitor Alexandre Gevaerd Jr. Procedimentos vasculares especializados.' },
  { icon: <FirstAid size={24} weight="duotone" />, title: 'Anestesiologia', desc: 'Anestesiologistas Associados com 25+ anos de experiência em Florianópolis.' },
  { icon: <Certificate size={24} weight="duotone" />, title: 'Infraestrutura', desc: '1000m² em 4 andares e meio. Centro Médico Celso Ramos Medical Center.' },
]

function Especialidades() {
  return (
    <section className="sp" id="especialidades">
      <div className="mx">
        <motion.div className="sh" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="stg">Especialidades</span>
          <h2>Conforto, tranquilidade e segurança</h2>
        </motion.div>
        <motion.div className="esp-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {especialidades.map((e, i) => (
            <motion.div key={i} className="esp-card" variants={fadeUp} custom={i}>
              <div className="esp-icon">{e.icon}</div>
              <h3>{e.title}</h3>
              <p>{e.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const reviews = [
  { text: 'Estrutura hospitalar impecável. Me senti segura durante todo o procedimento. Resultado perfeito!', author: 'Camila R.' },
  { text: 'Dr. Paulo Mendes é um artista. Minha prótese ficou natural e perfeita. Equipe maravilhosa.', author: 'Ana S.' },
  { text: 'Hospital completo, equipe atenciosa. A anestesia foi tranquila e o pós-operatório excelente.', author: 'Fernanda L.' },
  { text: 'Fiz rinoplastia e o resultado superou minhas expectativas. Profissionais de alto nível.', author: 'Juliana M.' },
  { text: 'Referência em cirurgia plástica em Santa Catarina. Infraestrutura de primeiro mundo.', author: 'Roberto T.' },
  { text: 'Dra. Ingrid é maravilhosa! Atenciosa, carinhosa e extremamente competente. Super recomendo!', author: 'Patricia H.' },
]

function Avaliacoes() {
  return (
    <section className="sp rev-sec" id="avaliacoes">
      <div className="mx">
        <motion.div className="sh" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="stg">Avaliações</span>
          <h2>Resultados que falam</h2>
          <p>250+ avaliações com nota 4.6 no Google</p>
        </motion.div>
        <motion.div className="rev-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {reviews.map((r, i) => (
            <motion.div key={i} className="rev-card" variants={fadeUp} custom={i}>
              <div className="rev-stars">{[0,1,2,3,4].map(j => <Star key={j} size={14} weight="fill" color="#C4A265" />)}</div>
              <p>&ldquo;{r.text}&rdquo;</p>
              <span className="rev-author">{r.author}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Contato() {
  return (
    <section className="cta sp" id="contato">
      <div className="mx cta-inner">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2>Agende sua<br /><span className="accent">consulta</span></h2>
          <p>Conforto, tranquilidade e segurança para a sua cirurgia.</p>
          <div className="cta-info">
            <div><MapPin size={16} weight="duotone" /> R. Dom Joaquim, 885 — Centro, Florianópolis</div>
            <div><Clock size={16} weight="duotone" /> Segunda a Sexta</div>
          </div>
          <div className="cta-btns">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-prim">
              <WhatsappLogo size={18} weight="duotone" /> <span>WhatsApp</span>
            </a>
            <a href={TEL} className="btn-sec">
              <Phone size={18} weight="duotone" /> <span>(48) 3229-0202</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="mx">
        <div className="footer-brand"><Hospital size={16} weight="duotone" /> Hospital da Plástica de Santa Catarina</div>
        <div className="footer-info">R. Dom Joaquim, 885 — Centro, Florianópolis, SC • CEP 88015-310<br />(48) 3229-0202 • recepcao@hospitaldaplastica.com</div>
        <div className="footer-links">
          <a href={WA} target="_blank" rel="noopener noreferrer" className="fl"><WhatsappLogo size={14} weight="duotone" /> (48) 99629-6030</a>
          <a href={TEL} className="fl"><Phone size={14} weight="duotone" /> Telefone</a>
        </div>
        <div className="footer-copy">&copy; 2026 Hospital da Plástica de Santa Catarina. Desde 2009. Todos os direitos reservados.</div>
      </div>
    </footer>
  )
}

function FloatingWa() {
  return (
    <motion.a href={WA} target="_blank" rel="noopener noreferrer" className="fbtn" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} whileHover={{ scale: 1.05 }}>
      <WhatsappLogo size={20} weight="duotone" />
    </motion.a>
  )
}

function App() {
  return (
    <>
      <Helmet>
        <title>Hospital da Plástica de Santa Catarina | Florianópolis</title>
        <meta name="description" content="Hospital da Plástica SC - 8 cirurgiões plásticos, 1000m² de infraestrutura. Desde 2009. 250+ avaliações, nota 4.6. Centro, Florianópolis." />
      </Helmet>
      <Navbar />
      <Hero />
      <Cirurgioes />
      <Especialidades />
      <Avaliacoes />
      <Contato />
      <Footer />
      <FloatingWa />
    </>
  )
}

export default App
