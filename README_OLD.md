# 🚫 YukCatat - PROJECT DISCONTINUED

> **⚠️ IMPORTANT NOTICE**: This project is no longer maintained or developed. The development has been stopped and will not continue in the future.

---

# 📱 YukCatat - Personal Finance & Task Manager

YukCatat adalah aplikasi React Native CLI untuk mengelola keuangan pribadi dan tugas harian. Aplikasi ini dilengkapi dengan database Supabase untuk penyimpanan data yang scalable dan real-time.

## ✨ Features

- **💰 Belanja Tracker**: Catat pengeluaran harian
- **💳 Hutang Manager**: Kelola hutang piutang
- **📋 Task Manager**: Manajemen tugas dengan prioritas
- **🌐 Database Integration**: Supabase PostgreSQL untuk production
- **📱 Offline Support**: AsyncStorage untuk backup lokal
- **🎨 Modern UI**: TailwindCSS dengan NativeWind
- **🔒 Type Safety**: Full TypeScript support

## 🛠️ Tech Stack

- **Frontend**: React Native CLI 0.82.1
- **Styling**: TailwindCSS + NativeWind
- **Database**: Supabase (PostgreSQL)
- **Local Storage**: AsyncStorage
- **Icons**: Lucide React Native
- **Animation**: React Native Reanimated
- **Language**: TypeScript

## 📦 Project Structure

```
YukCatat/
├── src/
│   ├── components/
│   │   ├── BottomNavigation.tsx
│   │   ├── Header.tsx
│   │   └── forms/
│   │       ├── BelanjaForm.tsx
│   │       ├── HutangForm.tsx
│   │       └── TugasForm.tsx
│   ├── screens/
│   │   ├── HomeScreen.tsx
│   │   ├── TambahScreen.tsx
│   │   ├── LaporanScreen.tsx
│   │   ├── DatabaseTestScreen.tsx
│   │   └── SimpleTestScreen.tsx
│   ├── config/
│   │   ├── supabase.ts
│   │   └── environment.ts
│   └── lib/
│       ├── databaseService.ts
│       └── testDatabase.ts
├── android/
├── ios/
└── database-setup.sql
```

## 🚀 Getting Started

### Prerequisites

- Node.js (>= 20)
- React Native CLI
- Android Studio / Xcode
- Java Development Kit (JDK)

### Installation

1. **Clone repository**
```bash
git clone https://github.com/CatwisBot/YukCatat.git
cd YukCatat
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup Supabase Database**
   - Buat project di [supabase.com](https://supabase.com)
   - Copy URL dan Anon Key
   - Update `src/config/environment.ts`:
   ```typescript
   export const ENV = {
     PROD: {
       SUPABASE_URL: 'https://your-project.supabase.co',
       SUPABASE_ANON_KEY: 'your-anon-key-here',
     }
   };
   ```

4. **Create database tables**
   - Buka Supabase Dashboard > SQL Editor
   - Jalankan script dari `database-setup.sql`

### Running the App

#### Android
```bash
npm run android
```

#### iOS (macOS only)
```bash
cd ios && bundle install && bundle exec pod install && cd ..
npm run ios
```

#### Development Server
```bash
npm start
```

## 🗄️ Database Schema

### Tables

#### Belanja
- `id`: UUID (Primary Key)
- `item_name`: String (Item yang dibeli)
- `price`: Decimal (Harga)
- `category`: String (Kategori)
- `date`: Date (Tanggal pembelian)
- `created_at`: Timestamp
- `user_id`: UUID (Foreign Key)

#### Hutang
- `id`: UUID (Primary Key)
- `creditor_name`: String (Nama pemberi hutang)
- `amount`: Decimal (Jumlah hutang)
- `due_date`: Date (Tanggal jatuh tempo)
- `description`: String (Deskripsi)
- `is_paid`: Boolean (Status pembayaran)
- `created_at`: Timestamp
- `user_id`: UUID (Foreign Key)

#### Tugas
- `id`: UUID (Primary Key)
- `task_name`: String (Nama tugas)
- `description`: String (Deskripsi)
- `due_date`: Date (Deadline)
- `priority`: Enum ('low', 'medium', 'high')
- `is_completed`: Boolean (Status selesai)
- `created_at`: Timestamp
- `user_id`: UUID (Foreign Key)

## 🧪 Testing Database

Aplikasi dilengkapi dengan halaman test database:

1. Buka aplikasi
2. Klik tombol **"DB Test"** di pojok kanan atas
3. Test fitur:
   - **Test Connection**: Cek koneksi ke Supabase
   - **Test Insert Data**: Tambah data test
   - **Test Select Data**: Ambil data dari database

## 🔧 Configuration

### Environment Variables

File: `src/config/environment.ts`

```typescript
export const ENV = {
  DEV: {
    SUPABASE_URL: 'your-dev-supabase-url',
    SUPABASE_ANON_KEY: 'your-dev-anon-key',
  },
  PROD: {
    SUPABASE_URL: 'your-prod-supabase-url',
    SUPABASE_ANON_KEY: 'your-prod-anon-key',
  }
};
```

### Database Service

File: `src/lib/databaseService.ts`

Service layer yang mengelola:
- Online/offline detection
- Auto-sync ke Supabase
- Local backup dengan AsyncStorage
- Error handling

## 📱 Features Detail

### 💰 Belanja Tracker
- Catat pengeluaran dengan kategori
- Filter berdasarkan tanggal
- Total pengeluaran otomatis

### 💳 Hutang Manager
- Kelola hutang dan piutang
- Notifikasi jatuh tempo
- Status pembayaran

### 📋 Task Manager
- Prioritas tugas (low, medium, high)
- Deadline tracking
- Status completion

## 🛡️ Security

- **Row Level Security (RLS)**: User hanya akses data sendiri
- **Type Safety**: TypeScript untuk mencegah error
- **Input Validation**: Validasi data input
- **Error Handling**: Proper error management

## 🤝 Contributing

Project ini sudah **DISCONTINUED**. Tidak menerima contribution atau development lebih lanjut.

## 📄 License

Project ini dibuat untuk pembelajaran dan tidak memiliki lisensi khusus.

## 📞 Contact

- GitHub: [@CatwisBot](https://github.com/CatwisBot)
- Repository: [YukCatat](https://github.com/CatwisBot/YukCatat)

---

**⚠️ Disclaimer**: Project ini sudah dihentikan pengembangannya dan tidak akan dilanjutkan. Gunakan dengan risiko sendiri.

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
