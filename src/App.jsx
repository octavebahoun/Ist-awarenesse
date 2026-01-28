import { Player } from "@remotion/player";
import { AwarenessVideo, TOTAL_DURATION } from "./remotion/AwarenessVideo";
import {
  Shield,
  Info,
  Download,
  Clock,
  Film,
  BookOpen,
  HeartHandshake,
  Lightbulb,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import "./index.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

function App() {
  const [activeSection, setActiveSection] = useState(null);

  const videoScenes = [
    {
      title: "Introduction",
      description: "Présentation du sujet et accroche visuelle",
      duration: "4s",
      color: "bg-red-500",
    },
    {
      title: "Qu'est-ce qu'une IST ?",
      description:
        "Définition claire et accessible des infections sexuellement transmissibles",
      duration: "4s",
      color: "bg-blue-500",
    },
    {
      title: "IST courantes",
      description:
        "Présentation des 6 principales IST : VIH, Chlamydia, Gonorrhée, Syphilis, Herpès, HPV",
      duration: "3.3s",
      color: "bg-orange-500",
    },
    {
      title: "Symptômes",
      description:
        "Les signes à surveiller et l'importance du dépistage même sans symptômes",
      duration: "4s",
      color: "bg-amber-500",
    },
    {
      title: "Transmission",
      description: "Comment les IST se transmettent-elles ?",
      duration: "3.3s",
      color: "bg-rose-500",
    },
    {
      title: "Dépistage",
      description:
        "L'importance du dépistage : gratuit, confidentiel et rapide",
      duration: "3.6s",
      color: "bg-emerald-500",
    },
    {
      title: "Traitement",
      description: "La plupart des IST se soignent, détectées tôt",
      duration: "3.3s",
      color: "bg-violet-500",
    },
    {
      title: "Prévention",
      description: "4 conseils essentiels pour se protéger",
      duration: "3.3s",
      color: "bg-cyan-500",
    },
    {
      title: "Ressources",
      description: "Numéros utiles et où trouver de l'aide",
      duration: "3.3s",
      color: "bg-indigo-500",
    },
    {
      title: "Conclusion",
      description: "Message final d'encouragement",
      duration: "3.3s",
      color: "bg-emerald-500",
    },
  ];

  const resources = [
    {
      name: "Sida Info Service",
      phone: "0 800 840 800",
      description: "Gratuit et anonyme, 24h/24",
      url: "https://www.sida-info-service.org/",
    },
    {
      name: "Santé Publique France",
      description: "Informations officielles sur les IST",
      url: "https://www.santepubliquefrance.fr/",
    },
    {
      name: "CeGIDD",
      description:
        "Centres Gratuits d'Information, de Dépistage et de Diagnostic",
      url: "https://www.sida-info-service.org/annuaire/",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-teal-500 selection:text-white">
      {/* ===== HERO SECTION ===== */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-slate-950 to-emerald-900/10"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-4 mb-8"
          >
            <Shield className="w-12 h-12 md:w-16 md:h-16 text-teal-500" />
            <div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-teal-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                Sensibilisation IST/MST
              </h1>
              <p className="text-slate-400 text-lg md:text-xl mt-2">
                Plateforme de génération de vidéos éducatives avec Remotion
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 flex items-start gap-4">
              <Film className="w-8 h-8 text-teal-400 shrink-0" />
              <div>
                <h3 className="font-bold text-lg">Vidéo Interactive</h3>
                <p className="text-slate-400 text-sm">
                  10 scènes animées avec Remotion pour un contenu engageant
                </p>
              </div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 flex items-start gap-4">
              <BookOpen className="w-8 h-8 text-emerald-400 shrink-0" />
              <div>
                <h3 className="font-bold text-lg">Contenu Éducatif</h3>
                <p className="text-slate-400 text-sm">
                  Information complète sur les IST, symptômes, prévention et
                  traitement
                </p>
              </div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 flex items-start gap-4">
              <HeartHandshake className="w-8 h-8 text-pink-400 shrink-0" />
              <div>
                <h3 className="font-bold text-lg">Impact Social</h3>
                <p className="text-slate-400 text-sm">
                  Conçu pour les campagnes de sensibilisation sur les réseaux
                  sociaux
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-slate-500 animate-bounce" />
        </motion.div>
      </header>

      {/* ===== VIDEO PLAYER SECTION ===== */}
      <section className="py-16 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prévisualisation de la Vidéo
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Cette vidéo de 35 secondes couvre tous les aspects essentiels de
              la sensibilisation aux IST. Utilisez les contrôles pour naviguer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-8 items-start"
          >
            {/* Player */}
            <div className="w-full lg:w-2/3">
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-[0_0_80px_-20px_rgba(20,184,166,0.3)] bg-slate-900">
                <Player
                  component={AwarenessVideo}
                  durationInFrames={TOTAL_DURATION}
                  compositionWidth={1920}
                  compositionHeight={1080}
                  fps={30}
                  style={{
                    width: "100%",
                    aspectRatio: "16/9",
                  }}
                  controls
                  autoPlay
                  loop
                />
              </div>
              <div className="flex items-center justify-between mt-4 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Durée : ~35 secondes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Film className="w-4 h-4" />
                  <span>1920×1080 @ 30fps</span>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3 space-y-6">
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-teal-400" />À propos de cette
                  vidéo
                </h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Cette vidéo a été générée avec{" "}
                  <span className="text-teal-400 font-medium">Remotion</span>,
                  une bibliothèque React permettant de créer des vidéos
                  programmatiquement.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "#Prevention",
                    "#Sante",
                    "#Remotion",
                    "#React",
                    "#Education",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-800 text-teal-300 text-xs px-3 py-1 rounded-full border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-900/40 to-slate-900 border border-teal-800/50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-teal-100 mb-2 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Export
                </h3>
                <p className="text-sm text-slate-400 mb-4">
                  Utilisez Remotion CLI pour exporter en MP4 haute qualité.
                </p>
                <code className="block bg-slate-950 text-emerald-400 text-xs p-3 rounded-lg mb-4 overflow-x-auto">
                  npx remotion render src/index.ts AwarenessVideo out.mp4
                </code>
                <button className="w-full bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 px-4 rounded-lg transition-all shadow-lg shadow-teal-900/50 flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Voir la documentation Remotion
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== SCENES BREAKDOWN ===== */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Structure de la Vidéo
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              La vidéo est composée de 10 scènes pédagogiques, chacune abordant
              un aspect essentiel de la sensibilisation aux IST.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {videoScenes.map((scene, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all cursor-pointer"
                onClick={() =>
                  setActiveSection(activeSection === index ? null : index)
                }
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-8 h-8 ${scene.color} rounded-lg flex items-center justify-center text-white font-bold text-sm`}
                  >
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-lg">{scene.title}</h3>
                </div>
                <p className="text-slate-400 text-sm mb-3">
                  {scene.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Clock className="w-3 h-3" />
                  <span>{scene.duration}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== EDUCATIONAL CONTENT ===== */}
      <section className="py-16 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Lightbulb className="w-12 h-12 text-amber-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contenu Éducatif Détaillé
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Retrouvez ici les informations clés présentées dans la vidéo, pour
              approfondir vos connaissances.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Colonne 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-400">
                  🔬 Qu'est-ce qu'une IST ?
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Une <strong>Infection Sexuellement Transmissible</strong>{" "}
                  (IST) est une infection causée par des bactéries, des virus ou
                  des parasites, qui se transmet principalement lors de rapports
                  sexuels non protégés. Le terme "MST" (Maladie Sexuellement
                  Transmissible) est moins utilisé car beaucoup d'infections
                  restent asymptomatiques.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-orange-400">
                  🦠 Les IST les plus courantes
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li>
                    <strong className="text-red-400">VIH/SIDA</strong> : Virus
                    attaquant le système immunitaire
                  </li>
                  <li>
                    <strong className="text-orange-300">Chlamydia</strong> : IST
                    bactérienne très fréquente, souvent sans symptômes
                  </li>
                  <li>
                    <strong className="text-yellow-300">Gonorrhée</strong> :
                    Causée par une bactérie, peut entraîner l'infertilité
                  </li>
                  <li>
                    <strong className="text-purple-300">Syphilis</strong> : Se
                    développe en plusieurs stades si non traitée
                  </li>
                  <li>
                    <strong className="text-pink-300">Herpès</strong> : Virus
                    causant des lésions récurrentes
                  </li>
                  <li>
                    <strong className="text-teal-300">HPV</strong> : Peut causer
                    des verrues ou certains cancers
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-amber-400">
                  ⚠️ Symptômes à surveiller
                </h3>
                <p className="text-amber-300 mb-4 font-medium">
                  Attention : Beaucoup d'IST sont asymptomatiques !
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li>• Brûlures lors de la miction</li>
                  <li>• Écoulements inhabituels</li>
                  <li>• Démangeaisons ou irritations génitales</li>
                  <li>• Douleurs pelviennes ou abdominales</li>
                  <li>• Lésions, boutons ou ulcères</li>
                  <li>• Fatigue inexpliquée, fièvre</li>
                </ul>
              </div>
            </motion.div>

            {/* Colonne 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-rose-400">
                  🔄 Modes de transmission
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500">▸</span>
                    <span>
                      <strong>Rapports sexuels non protégés</strong> (vaginaux,
                      anaux, oraux)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-500">▸</span>
                    <span>Contact peau à peau pour l'herpès et le HPV</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-500">▸</span>
                    <span>Partage de seringues ou matériel d'injection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-500">▸</span>
                    <span>Transmission de la mère à l'enfant</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-900/30 to-slate-900 border border-emerald-800/50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-emerald-400">
                  🩺 L'importance du dépistage
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Le dépistage est le seul moyen de savoir si vous avez une IST.
                  Il est recommandé de se faire dépister :
                </p>
                <ul className="space-y-2 text-slate-300 mb-4">
                  <li>• Après chaque nouveau partenaire</li>
                  <li>• En cas de rapport non protégé</li>
                  <li>
                    • Au moins une fois par an si vous êtes sexuellement actif
                  </li>
                </ul>
                <div className="flex gap-3">
                  <span className="bg-emerald-600/30 text-emerald-300 px-3 py-1 rounded-full text-sm border border-emerald-600/50">
                    Gratuit
                  </span>
                  <span className="bg-emerald-600/30 text-emerald-300 px-3 py-1 rounded-full text-sm border border-emerald-600/50">
                    Confidentiel
                  </span>
                  <span className="bg-emerald-600/30 text-emerald-300 px-3 py-1 rounded-full text-sm border border-emerald-600/50">
                    Rapide
                  </span>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">
                  🛡️ Comment se protéger ?
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <span className="text-2xl mb-2 block">🛡️</span>
                    <p className="text-sm text-slate-300">
                      Utilisez un préservatif
                    </p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <span className="text-2xl mb-2 block">💉</span>
                    <p className="text-sm text-slate-300">
                      Faites-vous vacciner (HPV, Hépatite B)
                    </p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <span className="text-2xl mb-2 block">🩺</span>
                    <p className="text-sm text-slate-300">
                      Dépistez-vous régulièrement
                    </p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <span className="text-2xl mb-2 block">💬</span>
                    <p className="text-sm text-slate-300">
                      Communiquez avec vos partenaires
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== RESOURCES SECTION ===== */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ressources et Contacts Utiles
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              N'hésitez pas à contacter ces services pour obtenir de l'aide et
              des informations supplémentaires.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {resources.map((resource, index) => (
              <motion.a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-indigo-500/50 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-white group-hover:text-indigo-400 transition-colors">
                    {resource.name}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                </div>
                {resource.phone && (
                  <p className="text-2xl font-bold text-indigo-400 mb-2">
                    {resource.phone}
                  </p>
                )}
                <p className="text-slate-400 text-sm">{resource.description}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-teal-500" />
            <span className="text-lg font-bold">Sensibilisation IST/MST</span>
          </div>
          <p className="text-slate-500 text-sm mb-4">
            Projet développé avec React, Remotion, Tailwind CSS et Framer Motion
          </p>
          <p className="text-slate-600 text-xs">
            © 2026 — Créé pour sensibiliser et informer. Partagez librement.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
