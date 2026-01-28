import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Easing,
  Audio,
  staticFile,
} from "remotion";
import {
  ShieldAlert,
  HeartPulse,
  AlertTriangle,
  CheckCircle,
  Syringe,
  Users,
  MessageCircleWarning,
  Pill,
  Microscope,
  Phone,
} from "lucide-react";

// ===========================
// SCENE 1: INTRO / TITRE
// ===========================
const TitleScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame: frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const opacity = interpolate(frame, [0, 25], [0, 1], {
    extrapolateRight: "clamp",
  });

  const subtitleOpacity = interpolate(frame, [30, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill className="flex items-center justify-center bg-gradient-to-br from-slate-950 via-red-950/30 to-slate-950">
      <div
        style={{ opacity, transform: `scale(${scale})` }}
        className="flex flex-col items-center"
      >
        <ShieldAlert size={180} className="text-red-500 mb-6 drop-shadow-2xl" />
        <h1 className="text-8xl font-black text-white text-center tracking-tighter drop-shadow-lg">
          IST / MST
        </h1>
        <div
          style={{ opacity: subtitleOpacity }}
          className="mt-6 flex flex-col items-center"
        >
          <p className="text-4xl text-red-400 font-bold uppercase tracking-[0.3em]">
            Brisez le Silence
          </p>
          <p className="text-xl text-slate-400 mt-4">
            Une campagne de sensibilisation
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ===========================
// SCENE 2: QU'EST-CE QU'UNE IST ?
// ===========================
const DefinitionScene = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1]);
  const slideIn = interpolate(frame, [0, 25], [-100, 0], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const items = [
    {
      icon: Microscope,
      text: "Infections transmises lors de rapports sexuels",
    },
    { icon: AlertTriangle, text: "Souvent sans symptômes visibles" },
    { icon: Users, text: "Peuvent toucher tout le monde" },
  ];

  return (
    <AbsoluteFill className="flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950 p-16">
      <div style={{ opacity }} className="max-w-5xl w-full">
        <h2
          style={{ transform: `translateX(${slideIn}px)` }}
          className="text-6xl font-bold text-white mb-12 border-l-4 border-blue-500 pl-6"
        >
          Qu'est-ce qu'une IST ?
        </h2>
        <div className="grid gap-8">
          {items.map((item, index) => {
            const itemOpacity = interpolate(
              frame,
              [20 + index * 15, 40 + index * 15],
              [0, 1],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
            );
            const itemSlide = interpolate(
              frame,
              [20 + index * 15, 40 + index * 15],
              [50, 0],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
            );
            return (
              <div
                key={index}
                style={{
                  opacity: itemOpacity,
                  transform: `translateY(${itemSlide}px)`,
                }}
                className="flex items-center gap-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700"
              >
                <item.icon size={50} className="text-blue-400 shrink-0" />
                <p className="text-3xl text-slate-200">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ===========================
// SCENE 3: LES IST LES PLUS COURANTES
// ===========================
const CommonISTScene = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1]);

  const ists = [
    { name: "VIH/SIDA", color: "text-red-500", bgColor: "bg-red-500/20" },
    {
      name: "Chlamydia",
      color: "text-orange-400",
      bgColor: "bg-orange-500/20",
    },
    {
      name: "Gonorrhée",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/20",
    },
    { name: "Syphilis", color: "text-purple-400", bgColor: "bg-purple-500/20" },
    { name: "Herpès", color: "text-pink-400", bgColor: "bg-pink-500/20" },
    { name: "HPV", color: "text-teal-400", bgColor: "bg-teal-500/20" },
  ];

  return (
    <AbsoluteFill className="flex items-center justify-center bg-gradient-to-br from-slate-950 via-orange-950/20 to-slate-950 p-16">
      <div style={{ opacity }} className="max-w-6xl w-full text-center">
        <h2 className="text-5xl font-bold text-white mb-4">
          Les IST les plus courantes
        </h2>
        <p className="text-xl text-slate-400 mb-12">
          Ces infections peuvent avoir des conséquences graves si non traitées
        </p>
        <div className="grid grid-cols-3 gap-6">
          {ists.map((ist, index) => {
            const itemScale = spring({
              frame: frame - 20 - index * 8,
              fps: 30,
              config: { damping: 12, stiffness: 100 },
            });
            return (
              <div
                key={index}
                style={{ transform: `scale(${Math.max(0, itemScale)})` }}
                className={`${ist.bgColor} backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50`}
              >
                <p className={`text-3xl font-bold ${ist.color}`}>{ist.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ===========================
// SCENE 4: LES SYMPTOMES
// ===========================
const SymptomsScene = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1]);

  const symptoms = [
    "Brûlures lors de la miction",
    "Écoulements inhabituels",
    "Démangeaisons ou irritations",
    "Douleurs pelviennes",
    "Lésions ou boutons",
    "Fatigue inexpliquée",
  ];

  return (
    <AbsoluteFill className="flex items-center justify-center bg-gradient-to-br from-slate-950 via-amber-950/20 to-slate-950 p-16">
      <div style={{ opacity }} className="flex gap-16 items-center max-w-6xl">
        <div className="flex-1">
          <MessageCircleWarning
            size={200}
            className="text-amber-500 mx-auto opacity-80"
          />
        </div>
        <div className="flex-[2]">
          <h2 className="text-5xl font-bold text-white mb-4">
            Symptômes possibles
          </h2>
          <p className="text-xl text-amber-300 mb-8 font-medium">
            ⚠️ Attention : Beaucoup d'IST sont asymptomatiques !
          </p>
          <ul className="space-y-4">
            {symptoms.map((symptom, index) => {
              const itemOpacity = interpolate(
                frame,
                [25 + index * 10, 40 + index * 10],
                [0, 1],
                { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
              );
              return (
                <li
                  key={index}
                  style={{ opacity: itemOpacity }}
                  className="flex items-center gap-4 text-2xl text-slate-300"
                >
                  <span className="w-3 h-3 bg-amber-500 rounded-full"></span>
                  {symptom}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ===========================
// SCENE 5: MODES DE TRANSMISSION
// ===========================
const TransmissionScene = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1]);

  const modes = [
    { text: "Rapports sexuels non protégés", highlight: true },
    { text: "Contact peau à peau (herpès, HPV)", highlight: false },
    { text: "Partage de seringues", highlight: false },
    { text: "De mère à enfant", highlight: false },
  ];

  return (
    <AbsoluteFill className="flex items-center justify-center bg-gradient-to-br from-slate-950 via-rose-950/20 to-slate-950 p-16">
      <div style={{ opacity }} className="max-w-5xl w-full">
        <h2 className="text-5xl font-bold text-white mb-12 text-center">
          Comment se transmettent les IST ?
        </h2>
        <div className="space-y-6">
          {modes.map((mode, index) => {
            const itemOpacity = interpolate(
              frame,
              [20 + index * 12, 35 + index * 12],
              [0, 1],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
            );
            return (
              <div
                key={index}
                style={{ opacity: itemOpacity }}
                className={`p-6 rounded-xl border ${
                  mode.highlight
                    ? "bg-rose-500/20 border-rose-500/50"
                    : "bg-slate-800/50 border-slate-700"
                }`}
              >
                <p
                  className={`text-2xl ${
                    mode.highlight
                      ? "text-rose-300 font-bold"
                      : "text-slate-300"
                  }`}
                >
                  {mode.highlight && "🔺 "}
                  {mode.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ===========================
// SCENE 6: LE DEPISTAGE
// ===========================
const ScreeningScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 20], [0, 1]);
  const iconScale = spring({
    frame: frame - 10,
    fps,
    config: { damping: 10, stiffness: 80 },
  });

  return (
    <AbsoluteFill className="flex items-center justify-center bg-gradient-to-br from-slate-950 via-emerald-950/30 to-slate-950 p-16">
      <div style={{ opacity }} className="max-w-5xl text-center">
        <Syringe
          size={150}
          className="text-emerald-400 mx-auto mb-8"
          style={{ transform: `scale(${iconScale})` }}
        />
        <h2 className="text-6xl font-bold text-white mb-6">
          Le dépistage sauve des vies
        </h2>
        <p className="text-2xl text-slate-300 leading-relaxed mb-10">
          Un test simple et rapide peut vous permettre de vous soigner à temps
          et de protéger vos partenaires.
        </p>
        <div className="grid grid-cols-3 gap-6 mt-8">
          {["Gratuit", "Confidentiel", "Rapide"].map((item, index) => {
            const badgeOpacity = interpolate(
              frame,
              [40 + index * 10, 55 + index * 10],
              [0, 1],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
            );
            return (
              <div
                key={index}
                style={{ opacity: badgeOpacity }}
                className="bg-emerald-600/30 border border-emerald-500/50 rounded-full py-4 px-6"
              >
                <p className="text-2xl font-bold text-emerald-300">{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ===========================
// SCENE 7: TRAITEMENT
// ===========================
const TreatmentScene = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1]);

  return (
    <AbsoluteFill className="flex items-center justify-center bg-gradient-to-br from-slate-950 via-violet-950/20 to-slate-950 p-16">
      <div style={{ opacity }} className="flex gap-16 items-center max-w-6xl">
        <div className="flex-[2]">
          <h2 className="text-5xl font-bold text-white mb-6">
            La plupart des IST se soignent
          </h2>
          <p className="text-2xl text-slate-300 leading-relaxed mb-8">
            Détectées tôt, la plupart des IST bactériennes{" "}
            <span className="text-violet-400 font-bold">
              (chlamydia, gonorrhée, syphilis)
            </span>{" "}
            peuvent être guéries avec des antibiotiques.
          </p>
          <p className="text-xl text-slate-400">
            Pour les IST virales (VIH, herpès, HPV), des traitements permettent
            de contrôler l'infection et de vivre normalement.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <Pill size={180} className="text-violet-400 opacity-80" />
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ===========================
// SCENE 8: PREVENTION
// ===========================
const PreventionScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = interpolate(frame, [0, 20], [0, 1]);

  const tips = [
    { emoji: "🛡️", text: "Utilisez un préservatif" },
    { emoji: "💉", text: "Faites-vous vacciner (HPV, Hépatite B)" },
    { emoji: "🩺", text: "Dépistez-vous régulièrement" },
    { emoji: "💬", text: "Parlez-en avec vos partenaires" },
  ];

  return (
    <AbsoluteFill className="flex items-center justify-center bg-gradient-to-br from-slate-950 via-cyan-950/20 to-slate-950 p-16">
      <div style={{ opacity }} className="max-w-5xl w-full">
        <h2 className="text-5xl font-bold text-white mb-12 text-center">
          Comment se protéger ?
        </h2>
        <div className="grid grid-cols-2 gap-8">
          {tips.map((tip, index) => {
            const cardScale = spring({
              frame: frame - 15 - index * 10,
              fps,
              config: { damping: 12, stiffness: 100 },
            });
            return (
              <div
                key={index}
                style={{ transform: `scale(${Math.max(0, cardScale)})` }}
                className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-8 flex items-center gap-6"
              >
                <span className="text-5xl">{tip.emoji}</span>
                <p className="text-2xl text-white font-medium">{tip.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ===========================
// SCENE 9: RESSOURCES / CONTACT
// ===========================
const ResourcesScene = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1]);

  return (
    <AbsoluteFill className="flex items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950/20 to-slate-950 p-16">
      <div style={{ opacity }} className="max-w-4xl text-center">
        <Phone size={100} className="text-indigo-400 mx-auto mb-8" />
        <h2 className="text-5xl font-bold text-white mb-6">
          Besoin d'aide ou d'information ?
        </h2>
        <div className="space-y-6 mt-10">
          <div className="bg-indigo-500/20 border border-indigo-500/50 rounded-xl p-6">
            <p className="text-2xl text-white font-bold">
              Sida Info Service : 0 800 840 800
            </p>
            <p className="text-slate-400">Gratuit et anonyme, 24h/24</p>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <p className="text-xl text-slate-300">
              Consultez un médecin, un CeGIDD (Centre Gratuit d'Information, de
              Dépistage et de Diagnostic), ou un planning familial.
            </p>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ===========================
// SCENE 10: CONCLUSION
// ===========================
const ConclusionScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame: frame,
    fps,
    config: { damping: 10, stiffness: 80 },
  });

  const textOpacity = interpolate(frame, [20, 40], [0, 1]);

  return (
    <AbsoluteFill className="flex items-center justify-center bg-gradient-to-br from-slate-950 via-emerald-950/30 to-slate-950">
      <div className="text-center">
        <div style={{ transform: `scale(${scale})` }}>
          <CheckCircle size={180} className="text-emerald-500 mx-auto mb-8" />
        </div>
        <h2
          style={{ opacity: textOpacity }}
          className="text-6xl font-bold text-white mb-6"
        >
          Protégez-vous.
        </h2>
        <p
          style={{ opacity: textOpacity }}
          className="text-3xl text-emerald-400 font-medium"
        >
          Parlez-en. Dépistez-vous.
        </p>
        <div
          style={{ opacity: interpolate(frame, [50, 70], [0, 1]) }}
          className="mt-12 bg-emerald-600 text-white px-10 py-4 rounded-full text-2xl font-bold inline-block shadow-lg shadow-emerald-900/50"
        >
          #SensibilisationIST
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ===========================
// MUSIQUE DE FOND
// ===========================
const BackgroundMusic = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Fade in pendant les 30 premières frames (1 seconde)
  // Fade out pendant les 60 dernières frames (2 secondes)
  const fadeInDuration = 30;
  const fadeOutStart = durationInFrames - 60;

  const volume = interpolate(
    frame,
    [0, fadeInDuration, fadeOutStart, durationInFrames],
    [0, 0.4, 0.4, 0], // Volume max à 0.4 (40%)
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  // Utilise staticFile pour charger depuis le dossier public
  // Placez votre fichier audio dans: public/audio/background.mp3
  return (
    <Audio
      src={staticFile("audio/background.mp3")}
      volume={volume}
      startFrom={0}
    />
  );
};

// ===========================
// COMPOSITION PRINCIPALE
// ===========================
export const AwarenessVideo = () => {
  // Durée de chaque scène en frames (30 fps)
  // Total: 1020 frames = 34 secondes
  const sceneDuration = {
    title: 120, // 4s
    definition: 120, // 4s
    commonIST: 100, // 3.3s
    symptoms: 120, // 4s
    transmission: 100, // 3.3s
    screening: 110, // 3.6s
    treatment: 100, // 3.3s
    prevention: 100, // 3.3s
    resources: 100, // 3.3s
    conclusion: 100, // 3.3s
  };

  let currentFrame = 0;
  const getStart = (duration) => {
    const start = currentFrame;
    currentFrame += duration;
    return start;
  };

  return (
    <AbsoluteFill className="bg-slate-950">
      {/* 🎵 MUSIQUE DE FOND */}
      {/* Placez votre fichier audio dans public/audio/background.mp3 */}
      <BackgroundMusic />

      <Sequence
        from={getStart(sceneDuration.title)}
        durationInFrames={sceneDuration.title}
      >
        <TitleScene />
      </Sequence>
      <Sequence
        from={getStart(sceneDuration.definition)}
        durationInFrames={sceneDuration.definition}
      >
        <DefinitionScene />
      </Sequence>
      <Sequence
        from={getStart(sceneDuration.commonIST)}
        durationInFrames={sceneDuration.commonIST}
      >
        <CommonISTScene />
      </Sequence>
      <Sequence
        from={getStart(sceneDuration.symptoms)}
        durationInFrames={sceneDuration.symptoms}
      >
        <SymptomsScene />
      </Sequence>
      <Sequence
        from={getStart(sceneDuration.transmission)}
        durationInFrames={sceneDuration.transmission}
      >
        <TransmissionScene />
      </Sequence>
      <Sequence
        from={getStart(sceneDuration.screening)}
        durationInFrames={sceneDuration.screening}
      >
        <ScreeningScene />
      </Sequence>
      <Sequence
        from={getStart(sceneDuration.treatment)}
        durationInFrames={sceneDuration.treatment}
      >
        <TreatmentScene />
      </Sequence>
      <Sequence
        from={getStart(sceneDuration.prevention)}
        durationInFrames={sceneDuration.prevention}
      >
        <PreventionScene />
      </Sequence>
      <Sequence
        from={getStart(sceneDuration.resources)}
        durationInFrames={sceneDuration.resources}
      >
        <ResourcesScene />
      </Sequence>
      <Sequence
        from={getStart(sceneDuration.conclusion)}
        durationInFrames={sceneDuration.conclusion}
      >
        <ConclusionScene />
      </Sequence>
    </AbsoluteFill>
  );
};

// Export de la durée totale pour l'utiliser dans le Player
export const TOTAL_DURATION = 1070; // frames (environ 35 secondes)
