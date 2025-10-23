import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { ClipboardList, ShoppingCart, Wallet, CheckSquare, ClipboardPen, Heart } from "lucide-react-native";

interface SplashScreenProps {
  onStart: () => void;
}

export default function SplashScreen({ onStart }: SplashScreenProps) {
  return (
    <View style={styles.container}>
      {/* Logo/Icon */}
      <View style={styles.logoContainer}>
        <ClipboardList color="#ffffff" size={64} strokeWidth={2} />
      </View>

      {/* App Name */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>YukCatat!</Text>
        <View style={styles.titleUnderline} />
      </View>

      {/* Tagline */}
      <Text style={styles.tagline}>
        Catat Belanja, Hutang & Tugas dengan Mudah
      </Text>

      {/* Features */}
      <View style={styles.featuresContainer}>
        <View style={styles.featureCard}>
          <View style={[styles.featureIcon, { backgroundColor: '#10b981' }]}>
            <ShoppingCart color="#ffffff" size={24} strokeWidth={2} />
          </View>
          <Text style={styles.featureText}>Kelola belanja & pengeluaran</Text>
        </View>
        
        <View style={styles.featureCard}>
          <View style={[styles.featureIcon, { backgroundColor: '#ef4444' }]}>
            <Wallet color="#ffffff" size={24} strokeWidth={2} />
          </View>
          <Text style={styles.featureText}>Catat hutang piutang</Text>
        </View>
        
        <View style={styles.featureCard}>
          <View style={[styles.featureIcon, { backgroundColor: '#3b82f6' }]}>
            <CheckSquare color="#ffffff" size={24} strokeWidth={2} />
          </View>
          <Text style={styles.featureText}>Atur tugas & deadline</Text>
        </View>
      </View>

      {/* Start Button */}
      <TouchableOpacity 
        style={styles.startButton}
        activeOpacity={0.8}
        onPress={onStart}
      >
        <View style={styles.buttonContent}>
          <Text style={styles.startButtonText}>Catat Sekarang</Text>
          <ClipboardPen color="#581c87" size={20} strokeWidth={2} />
        </View>
      </TouchableOpacity>

      {/* Version & Author */}
      <View style={styles.footer}>
        <Text style={styles.version}>Version 1.0.0</Text>
        <View style={styles.authorContainer}>
          <Text style={styles.authorText}>Dibuat dengan </Text>
          <Heart color="#f87171" size={12} fill="#f87171" strokeWidth={2} />
          <Text style={styles.authorText}> oleh </Text>
          <Text style={styles.authorName}>Catwis</Text>
        </View>
        <Text style={styles.copyright}>© 2025 YukCatat. All rights reserved.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#581c87', // purple-900
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  logoContainer: {
    backgroundColor: '#6b21a8', // purple-800
    borderRadius: 100,
    padding: 32,
    marginBottom: 24,
    borderWidth: 4,
    borderColor: '#7e22ce', // purple-700
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  titleUnderline: {
    height: 4,
    width: 128,
    backgroundColor: '#a855f7', // purple-500
    borderRadius: 2,
  },
  tagline: {
    color: '#e9d5ff', // purple-200
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 40,
    paddingHorizontal: 16,
  },
  featuresContainer: {
    width: '100%',
    marginBottom: 40,
  },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6b21a8', // purple-800
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  featureIcon: {
    padding: 8,
    borderRadius: 8,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureText: {
    color: '#ffffff',
    fontSize: 14,
    flex: 1,
  },
  startButton: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    paddingHorizontal: 40,
    paddingVertical: 16,
    marginBottom: 48,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  startButtonText: {
    color: '#581c87', // purple-900
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    alignItems: 'center',
  },
  version: {
    color: '#d8b4fe', // purple-300
    fontSize: 14,
    marginBottom: 4,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  authorText: {
    color: '#d8b4fe', // purple-300
    fontSize: 12,
  },
  authorName: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 12,
  },
  copyright: {
    color: '#c084fc', // purple-400
    fontSize: 10,
  },
});
