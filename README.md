# Basketball Pick-Up Game Manager

A React Native mobile application for managing basketball pick-up games with multiple teams. Track game results, manage team rotations, and determine which team plays next based on game outcomes.

## 📱 Platform Support

- **iOS**: App Store (Apple OS)
- **Android**: Google Play Store

## 🎯 Project Purpose

This application streamlines the management of basketball pick-up games by:
- Organizing multiple teams (4-6 teams per group)
- Supporting different game formats
- Recording game results and statistics
- Automatically determining team rotation for next games

## ✨ Features

### 1. Team Configuration
- Support for 3 - 8 teams per game group
- Easy team setup and management
- Team roster tracking

### 2. Game Type Selection
- **Type 1**: [Game format to be defined]
- **Type 2**: [Game format to be defined]

### 3. Game Result Recording
Track comprehensive game statistics:
- **Game Duration**: Record the time used for each game
- **Team Scores**: Input points scored by each team
- **Game History**: View past game results and statistics

### 4. Team Rotation Logic
- Automatic determination of which team plays next
- Fair rotation system based on game results
- ⚠️ **Note**: Rotation algorithm implementation is planned for future development

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- React Native development environment
- For iOS development:
  - macOS
  - Xcode
  - CocoaPods
- For Android development:
  - Android Studio
  - Android SDK

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd competition-management

# Install dependencies
npm install
# or
yarn install

# iOS specific setup
cd ios
pod install
cd ..
```

### Running the App

#### iOS
```bash
# Run on iOS simulator
npm run ios
# or
yarn ios

# Run on specific iOS device
npm run ios -- --device "Device Name"
```

#### Android
```bash
# Run on Android emulator
npm run android
# or
yarn android

# Run on connected Android device
npm run android -- --deviceId=<device-id>
```

## 🏗️ Project Structure

```
competition-management/
├── src/
│   ├── components/       # Reusable UI components
│   ├── screens/          # App screens
│   ├── navigation/       # Navigation configuration
│   ├── services/         # Business logic and API services
│   ├── utils/            # Utility functions
│   ├── types/            # TypeScript type definitions
│   └── assets/           # Images, fonts, and other assets
├── ios/                  # iOS native code
├── android/              # Android native code
└── README.md
```

## 📋 Planned Features

### Team Rotation Algorithm
The core logic for determining which team plays next will be implemented based on:
- Game results and win/loss records
- Team rest time (teams that haven't played recently)
- Fair play principles ensuring all teams get equal playing time
- Configurable rotation strategies

### Additional Features (Future)
- Player statistics tracking
- Tournament mode
- Multi-court management
- Push notifications for game schedules
- Social features (team chat, game invitations)
- Historical analytics and insights

## 🛠️ Technology Stack

- **Framework**: React Native
- **Language**: JavaScript/TypeScript
- **State Management**: [To be determined - Redux, Context API, MobX, etc.]
- **Navigation**: [To be determined - React Navigation, etc.]
- **Storage**: [To be determined - AsyncStorage, SQLite, Realm, etc.]
- **UI Components**: [To be determined - React Native Paper, Native Base, etc.]

## 📱 App Screens

1. **Home Screen**: Overview and quick access to features
2. **Team Setup Screen**: Configure number of teams and team details
3. **Game Type Selection Screen**: Choose game format
4. **Game Recording Screen**: Input game results (time, scores)
5. **Team Rotation Screen**: Display which team plays next
6. **History Screen**: View past games and statistics

## 🔄 Workflow

```
1. Configure Teams (4-6 teams)
   ↓
2. Select Game Type (Type 1 or Type 2)
   ↓
3. Play Game
   ↓
4. Record Results (Duration + Scores)
   ↓
5. System Determines Next Teams
   ↓
6. Repeat from Step 3
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

[Specify your license here - MIT, Apache 2.0, etc.]

## 👥 Authors

[Your name/team name]

## 📞 Contact

[Your contact information or project links]

## 🙏 Acknowledgments

- React Native community
- [Any other acknowledgments]

---

**Status**: 🚧 In Development

**Version**: 0.1.0 (Pre-release)
