# 🛡️ Sensibilisation IST/MST - Application Remotion

> **Application React de génération de vidéos éducatives sur les Infections Sexuellement Transmissibles**

![Remotion](https://img.shields.io/badge/Remotion-4.0-blue?style=flat-square)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-38B2AC?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12-FF0080?style=flat-square)

---

## 📋 Table des matières

1. [📖 Description du projet](#-description-du-projet)
2. [🎬 Structure de la vidéo](#-structure-de-la-vidéo)
3. [🚀 Installation](#-installation)
4. [💻 Utilisation](#-utilisation)
5. [📁 Architecture du projet](#-architecture-du-projet)
6. [🎨 Technologies utilisées](#-technologies-utilisées)
7. [📤 Export de la vidéo](#-export-de-la-vidéo)
8. [📚 Contenu éducatif](#-contenu-éducatif)
9. [🔗 Ressources utiles](#-ressources-utiles)
10. [📄 Licence](#-licence)

---

## 📖 Description du projet

Cette application web permet de **générer et prévisualiser des vidéos de sensibilisation** sur les IST (Infections Sexuellement Transmissibles) et MST (Maladies Sexuellement Transmissibles).

### 🎯 Objectifs

- **Éduquer** le public sur les IST de manière accessible et engageante
- **Sensibiliser** aux risques et à l'importance du dépistage
- **Fournir** des ressources et contacts utiles
- **Générer** des vidéos exportables pour les campagnes sur les réseaux sociaux

### ✨ Fonctionnalités principales

- 🎥 **Lecteur vidéo interactif** avec contrôles (play, pause, timeline)
- 📊 **10 scènes animées** couvrant tous les aspects essentiels
- 📱 **Interface responsive** adaptée à tous les écrans
- 🌙 **Mode sombre premium** avec design glassmorphisme
- 📤 **Export MP4** via Remotion CLI
- 📚 **Documentation intégrée** avec contenu éducatif détaillé

---

## 🎬 Structure de la vidéo

La vidéo de sensibilisation est composée de **10 scènes pédagogiques** (durée totale : ~35 secondes) :

| #   | Scène             | Durée | Description                                                |
| --- | ----------------- | ----- | ---------------------------------------------------------- |
| 1   | **Introduction**  | 4s    | Titre accrocheur et message "Brisez le Silence"            |
| 2   | **Définition**    | 4s    | Qu'est-ce qu'une IST ? Points clés                         |
| 3   | **IST courantes** | 3.3s  | VIH, Chlamydia, Gonorrhée, Syphilis, Herpès, HPV           |
| 4   | **Symptômes**     | 4s    | Signes à surveiller + attention aux cas asymptomatiques    |
| 5   | **Transmission**  | 3.3s  | Modes de transmission des IST                              |
| 6   | **Dépistage**     | 3.6s  | Importance du dépistage : gratuit, confidentiel, rapide    |
| 7   | **Traitement**    | 3.3s  | La plupart des IST se soignent si détectées tôt            |
| 8   | **Prévention**    | 3.3s  | 4 conseils essentiels de protection                        |
| 9   | **Ressources**    | 3.3s  | Numéros utiles et où trouver de l'aide                     |
| 10  | **Conclusion**    | 3.3s  | Message final : "Protégez-vous. Parlez-en. Dépistez-vous." |

### 🎨 Animations utilisées

- **Spring animations** pour les apparitions dynamiques
- **Interpolation** pour les fondus et translations
- **Easing functions** pour des mouvements naturels
- **Gradients animés** pour un rendu premium

---

## 🚀 Installation

### Prérequis

- **Node.js** >= 18.x
- **npm** >= 9.x

### Étapes d'installation

```bash
# 1. Cloner ou accéder au projet
cd ist-awareness

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Le projet sera accessible sur `http://localhost:5173`

---

## 💻 Utilisation

### Mode développement

```bash
npm run dev
```

Lance le serveur Vite avec hot-reload.

### Build production

```bash
npm run build
```

Génère les fichiers optimisés dans le dossier `dist/`.

### Prévisualisation du build

```bash
npm run preview
```

---

## 📁 Architecture du projet

```
ist-awareness/
├── public/                  # Assets statiques
├── src/
│   ├── remotion/
│   │   └── AwarenessVideo.jsx   # Composition Remotion (vidéo)
│   ├── App.jsx              # Composant principal de l'application
│   ├── index.css            # Styles globaux + Tailwind
│   └── main.jsx             # Point d'entrée React
├── index.html               # Template HTML
├── vite.config.js           # Configuration Vite + Tailwind
├── package.json             # Dépendances et scripts
└── README.md                # Documentation (ce fichier)
```

### Fichiers clés

| Fichier                           | Description                                                                        |
| --------------------------------- | ---------------------------------------------------------------------------------- |
| `src/remotion/AwarenessVideo.jsx` | Contient toutes les scènes de la vidéo avec leurs animations                       |
| `src/App.jsx`                     | Interface utilisateur complète avec le lecteur, la documentation et les ressources |
| `vite.config.js`                  | Configuration Vite avec les plugins React et Tailwind                              |

---

## 🎨 Technologies utilisées

| Technologie          | Version | Utilisation                          |
| -------------------- | ------- | ------------------------------------ |
| **React**            | 19.x    | Framework UI                         |
| **Vite**             | 7.x     | Build tool / Dev server              |
| **Remotion**         | 4.x     | Génération de vidéos programmatiques |
| **@remotion/player** | 4.x     | Lecteur vidéo interactif             |
| **Tailwind CSS**     | 4.x     | Styling utilitaire                   |
| **Framer Motion**    | 12.x    | Animations de l'interface            |
| **Lucide React**     | 0.56x   | Bibliothèque d'icônes                |
| **Zod**              | 4.x     | Validation de schémas                |

---

## 📤 Export de la vidéo

### Via Remotion CLI

Pour exporter la vidéo au format MP4, vous devez d'abord configurer Remotion pour le rendu :

#### 1. Créer un fichier de configuration Remotion

Créez `src/remotion/index.ts` :

```typescript
import { registerRoot } from 'remotion';
import { AwarenessVideo } from './AwarenessVideo';

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="AwarenessVideo"
        component={AwarenessVideo}
        durationInFrames={1070}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};

registerRoot(RemotionRoot);
```

#### 2. Installer les dépendances de rendu

```bash
npm install -D @remotion/cli @remotion/bundler
```

#### 3. Exporter la vidéo

```bash
npx remotion render src/remotion/index.ts AwarenessVideo output/video.mp4
```

### Options d'export

```bash
# Qualité haute (CRF 18)
npx remotion render src/remotion/index.ts AwarenessVideo output/video.mp4 --crf 18

# Format vertical pour Stories/Reels (9:16)
# Modifier compositionWidth et compositionHeight dans la composition

# GIF animé
npx remotion render src/remotion/index.ts AwarenessVideo output/video.gif
```

---

## 📚 Contenu éducatif

### 🔬 Qu'est-ce qu'une IST ?

Une **Infection Sexuellement Transmissible** (IST) est une infection causée par des bactéries, des virus ou des parasites, qui se transmet principalement lors de rapports sexuels non protégés.

> **Note** : Le terme "MST" (Maladie Sexuellement Transmissible) est moins utilisé aujourd'hui car beaucoup d'infections restent asymptomatiques.

### 🦠 Les IST les plus courantes

| IST           | Type     | Guérissable ?          |
| ------------- | -------- | ---------------------- |
| **VIH/SIDA**  | Virus    | Non (traitable)        |
| **Chlamydia** | Bactérie | ✅ Oui                 |
| **Gonorrhée** | Bactérie | ✅ Oui                 |
| **Syphilis**  | Bactérie | ✅ Oui                 |
| **Herpès**    | Virus    | Non (traitable)        |
| **HPV**       | Virus    | Non (vaccin préventif) |

### ⚠️ Symptômes possibles

> **Attention** : Beaucoup d'IST sont **asymptomatiques** !

- Brûlures lors de la miction
- Écoulements inhabituels
- Démangeaisons ou irritations génitales
- Douleurs pelviennes ou abdominales
- Lésions, boutons ou ulcères
- Fatigue inexpliquée, fièvre

### 🔄 Modes de transmission

1. **Rapports sexuels non protégés** (vaginaux, anaux, oraux) - Principal mode
2. Contact peau à peau (herpès, HPV)
3. Partage de seringues ou matériel d'injection
4. Transmission de la mère à l'enfant

### 🩺 L'importance du dépistage

Le dépistage est le **seul moyen** de savoir si vous avez une IST. Il est :

- ✅ **Gratuit** dans les CeGIDD et plannings familiaux
- ✅ **Confidentiel** (anonymat possible)
- ✅ **Rapide** (résultats en quelques jours)

**Quand se faire dépister ?**

- Après chaque nouveau partenaire
- En cas de rapport non protégé
- Au moins une fois par an si sexuellement actif

### 🛡️ Comment se protéger ?

1. 🛡️ **Utilisez un préservatif** (masculin ou féminin)
2. 💉 **Faites-vous vacciner** (HPV, Hépatite B)
3. 🩺 **Dépistez-vous régulièrement**
4. 💬 **Communiquez avec vos partenaires**

---

## 🔗 Ressources utiles

### Lignes d'écoute

| Service                    | Numéro        | Disponibilité              |
| -------------------------- | ------------- | -------------------------- |
| **Sida Info Service**      | 0 800 840 800 | 24h/24, gratuit et anonyme |
| **Hépatites Info Service** | 0 800 845 800 | Gratuit                    |
| **Fil Santé Jeunes**       | 0 800 235 236 | 9h-23h, gratuit            |

### Sites officiels

- [Santé Publique France](https://www.santepubliquefrance.fr/) - Informations officielles
- [Sida Info Service](https://www.sida-info-service.org/) - Écoute, information, orientation
- [Annuaire des CeGIDD](https://www.sida-info-service.org/annuaire/) - Trouver un centre près de chez vous

### Où se faire dépister ?

- **CeGIDD** (Centre Gratuit d'Information, de Dépistage et de Diagnostic)
- **Plannings familiaux**
- **Médecin généraliste**
- **Laboratoires d'analyses** (avec ordonnance)

---

## 🤝 Contribuer

Les contributions sont les bienvenues ! N'hésitez pas à :

1. 🍴 Fork le projet
2. 🌿 Créer une branche (`git checkout -b feature/amelioration`)
3. 💾 Commit vos changements (`git commit -m 'Ajout d'une nouvelle scène'`)
4. 📤 Push vers la branche (`git push origin feature/amelioration`)
5. 🔀 Ouvrir une Pull Request

---

## 📄 Licence

Ce projet est sous licence **MIT** - voir le fichier [LICENSE](LICENSE) pour plus de détails.

Vous êtes libre de :

- ✅ Utiliser ce projet à des fins personnelles et commerciales
- ✅ Modifier et adapter le contenu
- ✅ Distribuer des copies
- ✅ Utiliser les vidéos générées pour vos campagnes de sensibilisation

---

## 🙏 Remerciements

- **Remotion** pour la bibliothèque de génération vidéo
- **Lucide** pour les icônes
- **Framer Motion** pour les animations fluides
- Toutes les associations et services de santé qui œuvrent pour la prévention des IST

---

<div align="center">

**Créé avec ❤️ pour sensibiliser et informer**

_Partagez librement ce projet et les vidéos générées_

</div>
