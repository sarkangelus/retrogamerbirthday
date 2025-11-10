# 🧛 BUFFY MMORPG - SUNNYDALE 3D 🧛

Un MMORPG 3D ultra-realistico ambientato nel mondo di Buffy l'Ammazzavampiri, realizzato con Three.js!

![Three.js](https://img.shields.io/badge/Three.js-r128-black?style=for-the-badge&logo=three.js)
![WebGL](https://img.shields.io/badge/WebGL-Enabled-red?style=for-the-badge)
![3D](https://img.shields.io/badge/3D-Ultra_Realistic-purple?style=for-the-badge)

## 🌟 Features Straordinarie

### 🎮 Mondo Open-World 3D Completo
- **Sunnydale cittadina interamente esplorabile** con edifici iconici:
  - The Bronze (nightclub)
  - Sunnydale High School
  - Magic Shop
  - Library di Giles
  - Espresso Pump
  - Case residenziali
  - Cimitero con lapidi e cripta
- **Terreno procedurale** con variazioni di altezza
- **100+ alberi** distribuiti dinamicamente
- **Sistema di illuminazione notturna** con lampioni stradali
- **Cielo stellato** con luna volumetrica
- **Nebbia atmosferica** per profondità realistica

### 👤 Sistema Personaggio Avanzato
- **Buffy completamente controllabile** in terza persona
- **Modello 3D articolato** con corpo, testa e arma
- **Sistema di movimento fluido**:
  - Camminata (WASD)
  - Sprint (SHIFT)
  - Salto (SPACE)
  - Rotazione mouse fluida
- **Sistema stats completo**:
  - Health (salute)
  - Stamina (energia)
  - XP e sistema di livellamento
  - Gold (oro)
  - Kill counter

### ⚔️ Sistema di Combattimento 3D
- **Combattimento in tempo reale** con paletto sacro
- **Raycast precision targeting** con mirino centrale
- **Damage numbers** volanti (normali e critici)
- **Animazione arma** durante gli attacchi
- **Sistema colpi critici** (20% chance, 2x danno)
- **Consumo stamina** per attacchi e sprint
- **Rigenerazione stamina** automatica

### 👾 Sistema AI Nemici
- **Vampiri con intelligenza artificiale**:
  - Stato IDLE (vagano casualmente)
  - Stato CHASE (inseguono il giocatore a 30m)
  - Stato ATTACK (attaccano a distanza ravvicinata)
- **Occhi rossi luminosi** per i vampiri
- **Pathfinding** verso il giocatore
- **Respawn automatico** dopo eliminazione
- **Sistema salute nemici** con barra HP

### 🎭 Sistema NPC Interattivi
- **Giles** alla Library
- **Willow** a Sunnydale High
- **Xander** vicino al Bronze
- **Sistema dialoghi** multipli per NPC
- **Interazione tasto E** con NPCs vicini
- **Messaggi chat** colorati per tipo

### 🗺️ Minimap in Tempo Reale
- **Mappa 2D dinamica** sempre aggiornata
- **Indicatore posizione** giocatore (cyan)
- **Vampiri** (rosso)
- **NPCs** (verde)
- **Edifici** (grigio)
- **Indicatore direzione** del giocatore

### 💬 Sistema Chat Completo
- **Chat in-game** con tasto T
- **Messaggi colorati**:
  - System (giallo)
  - Player (cyan)
  - NPC (arancione)
- **Scroll automatico**
- **Comandi chat** interattivi

### 🎨 Effetti Grafici Avanzati
- **Ombre dinamiche** in real-time
- **Shadow mapping** PCF soft
- **Point lights** per lampioni
- **Emissive materials** per luci
- **Skybox procedurale** con stelle
- **Post-processing** effects
- **Anti-aliasing** nativo
- **Texture e materiali PBR**

### 📊 HUD Completo
- **Stats panel** con barre HP/Stamina/XP
- **Quest tracker** con missioni attive
- **Inventario** con slot equipaggiamento
- **Pannello controlli** sempre visibile
- **Indicatore location** quando entri in zone
- **Damage numbers** 3D-to-screen

### 🎯 Sistema Quest
- **Quest tracking** dinamico
- **Obiettivi multipli** per quest
- **Rewards** automatici (XP, Gold)
- **Quest log** persistente

### ⚡ Sistema Livellamento
- **Sistema XP** progressivo
- **Level up** automatico
- **Scaling difficulty** con livelli
- **Stat increases** per level
- **XP requirements** crescenti (x1.5 per livello)

### 🎪 Features MMORPG
- **Architettura multiplayer-ready**
- **Sistema chat globale**
- **NPC vendors** (base implementata)
- **Inventory system** (5 slot base)
- **Quest system**
- **Player stats** persistenti

## 🎮 Controlli

| Controllo | Azione |
|-----------|--------|
| **W/A/S/D** | Movimento (avanti/sinistra/indietro/destra) |
| **Mouse** | Rotazione camera e vista |
| **SHIFT** | Sprint (corsa veloce) |
| **SPACE** | Salto |
| **Click Sinistro** | Attacco con paletto |
| **E** | Interagisci con NPC |
| **T** | Apri/chiudi chat |
| **R** | Respawn (dopo morte) |

## 🚀 Come Giocare

### Metodo 1: Online (GitHub Pages)
1. Vai su: `https://sarkangelus.github.io/retrogamerbirthday/`
2. Clicca per bloccare il puntatore
3. Inizia a giocare!

### Metodo 2: Locale
1. **Clona il repository**:
```bash
git clone https://github.com/sarkangelus/retrogamerbirthday.git
cd retrogamerbirthday
```

2. **Apri il file**:
   - Doppio click su `index.html` OPPURE
   - Usa un server locale:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

3. **Naviga a** `http://localhost:8000`

## 🛠️ Tecnologie Utilizzate

### Core
- **Three.js r128** - Motore 3D WebGL
- **HTML5** - Struttura
- **CSS3** - UI/HUD styling
- **JavaScript ES6+** - Game logic

### Rendering
- **WebGL 2.0** - Accelerazione GPU
- **Shadow Mapping** - Ombre dinamiche
- **PBR Materials** - Physically Based Rendering
- **Fog System** - Atmosfera

### Physics
- **Custom Physics Engine**:
  - Gravity simulation
  - Jump mechanics
  - Collision detection
  - Boundary checking

### AI
- **State Machine** per nemici
- **Pathfinding** semplificato
- **Detection range** system
- **Attack range** system

## 📊 Statistiche Tecniche

- **Mondo**: 500x500 unità
- **Edifici**: 10+ strutture uniche
- **Alberi**: 100+ generati proceduralmente
- **Stelle**: 3000+ particelle
- **Vampiri**: 15+ simultanei (respawn infinito)
- **NPCs**: 3 personaggi principali
- **Luci**: 20+ point lights dinamiche
- **Poligoni**: ~50.000+ totali
- **FPS Target**: 60 FPS
- **Shadow Resolution**: 2048x2048

## 🎯 Obiettivi di Gioco

1. **Esplora Sunnydale** - Visita tutti i luoghi iconici
2. **Caccia Vampiri** - Elimina le creature della notte
3. **Level Up** - Raggiungi il livello 10
4. **Parla con NPCs** - Scopri missioni e dialoghi
5. **Trova il Bronze** - Completa la prima quest
6. **Sopravvivi** - Evita di essere sconfitto

## 🌟 Features Future Planned

- [ ] **Vero multiplayer** con WebRTC/WebSocket
- [ ] **Più armi** (balestra, spada, magia)
- [ ] **Sistema crafting**
- [ ] **Dungeon istanziati**
- [ ] **Boss battles** epici (Il Maestro, Glory, ecc.)
- [ ] **Sistema fazioni** (Watchers, Initiative)
- [ ] **Pet system** (porta un amico alla caccia)
- [ ] **Mount system** (veicoli?)
- [ ] **Housing system**
- [ ] **Guild/Clan system**
- [ ] **PvP arenas**
- [ ] **Seasonal events**
- [ ] **Achievements system**
- [ ] **Leaderboards**
- [ ] **Voice chat**
- [ ] **Music & SFX** completi
- [ ] **Mobile controls** touch
- [ ] **VR support**

## 🔧 Requisiti Sistema

### Minimi
- **Browser**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **GPU**: WebGL 2.0 compatible
- **RAM**: 4GB
- **CPU**: Dual-core 2GHz

### Consigliati
- **Browser**: Chrome/Edge latest
- **GPU**: Dedicated graphics (GTX 1050 o equivalente)
- **RAM**: 8GB+
- **CPU**: Quad-core 3GHz+

## 🎨 Assets & Credits

### Modelli 3D
- Tutti i modelli sono generati proceduralmente con Three.js primitives
- Nessun asset esterno richiesto

### Ispirazioni
- **Buffy the Vampire Slayer** (serie TV, 1997-2003)
- **World of Warcraft** (gameplay MMORPG)
- **The Sims** (controlli terza persona)
- **Vampire: The Masquerade** (ambientazione dark)

## 🐛 Known Issues

- [ ] Collision detection con edifici da migliorare
- [ ] Camera può attraversare oggetti in certi angoli
- [ ] Performance su mobile limitata
- [ ] Vampiri occasionalmente si bloccano in pathfinding

## 📝 Changelog

### v1.0.0 (Current)
- ✅ Mondo 3D completo di Sunnydale
- ✅ Sistema combattimento funzionante
- ✅ AI vampiri con states
- ✅ NPCs interattivi
- ✅ Sistema chat
- ✅ Quest system base
- ✅ Minimap real-time
- ✅ Effetti grafici avanzati
- ✅ HUD completo
- ✅ Sistema livellamento

## 🤝 Contributing

Contributi benvenuti! Per contribuire:

1. Fork il repository
2. Crea un branch (`git checkout -b feature/AmazingFeature`)
3. Commit le modifiche (`git commit -m 'Add AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📄 Licenza

MIT License - Vedi `LICENSE` file per dettagli

## 🙏 Acknowledgments

- **Joss Whedon** - Creatore di Buffy the Vampire Slayer
- **Three.js Community** - Motore 3D incredibile
- **WebGL Contributors** - Standard grafico web

## 📞 Support & Community

- **Issues**: [GitHub Issues](https://github.com/sarkangelus/retrogamerbirthday/issues)
- **Discussions**: [GitHub Discussions](https://github.com/sarkangelus/retrogamerbirthday/discussions)

## ⭐ Star History

Se ti piace il progetto, lascia una stella! ⭐

---

**🧛 Into every generation a slayer is born... Are you ready to take on the night? 🧛**

---

Made with ❤️ and ☕ for retrogamers everywhere!
