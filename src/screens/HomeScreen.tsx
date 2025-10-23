import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { ShoppingCart, Wallet, CheckSquare, TrendingUp, DollarSign, ListChecks, Target } from "lucide-react-native";

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 px-6 pt-6 mb-6">
      {/* Card Belanja */}
      <TouchableOpacity 
        className="bg-slate-900 rounded-2xl p-6 mb-4 border-2 border-emerald-500/30"
        activeOpacity={0.7}
      >
        <View className="flex-row items-center justify-between mb-3">
          <View className="flex-row items-center">
            <View className="bg-emerald-500/20 p-3 rounded-xl mr-3">
              <ShoppingCart color="#10b981" size={24} strokeWidth={2} />
            </View>
            <View>
              <Text className="text-white font-bold text-lg">Belanja</Text>
              <Text className="text-slate-400 text-xs">Catat pembelianmu</Text>
            </View>
          </View>
          <View className="bg-emerald-500/20 px-3 py-1 rounded-full">
            <Text className="text-emerald-400 font-semibold">12 item</Text>
          </View>
        </View>
        
        <View className="bg-slate-800/50 rounded-xl p-4 mt-2">
          <Text className="text-slate-300 text-xs mb-1">Total Pengeluaran</Text>
          <Text className="text-emerald-400 font-bold text-2xl">Rp 1.250.000</Text>
        </View>
      </TouchableOpacity>

      {/* Card Hutang */}
      <TouchableOpacity 
        className="bg-slate-900 rounded-2xl p-6 mb-4 border-2 border-red-500/30"
        activeOpacity={0.7}
      >
        <View className="flex-row items-center justify-between mb-3">
          <View className="flex-row items-center">
            <View className="bg-red-500/20 p-3 rounded-xl mr-3">
              <Wallet color="#ef4444" size={24} strokeWidth={2} />
            </View>
            <View>
              <Text className="text-white font-bold text-lg">Hutang</Text>
              <Text className="text-slate-400 text-xs">Kelola hutangmu</Text>
            </View>
          </View>
          <View className="bg-red-500/20 px-3 py-1 rounded-full">
            <Text className="text-red-400 font-semibold">5 aktif</Text>
          </View>
        </View>
        
        <View className="bg-slate-800/50 rounded-xl p-4 mt-2">
          <Text className="text-slate-300 text-xs mb-1">Total Hutang</Text>
          <Text className="text-red-400 font-bold text-2xl">Rp 500.000</Text>
        </View>
      </TouchableOpacity>

      {/* Card Tugas */}
      <TouchableOpacity 
        className="bg-slate-900 rounded-2xl p-6 mb-4 border-2 border-blue-500/30"
        activeOpacity={0.7}
      >
        <View className="flex-row items-center justify-between mb-3">
          <View className="flex-row items-center">
            <View className="bg-blue-500/20 p-3 rounded-xl mr-3">
              <CheckSquare color="#3b82f6" size={24} strokeWidth={2} />
            </View>
            <View>
              <Text className="text-white font-bold text-lg">Tugas</Text>
              <Text className="text-slate-400 text-xs">Atur deadline-mu</Text>
            </View>
          </View>
          <View className="bg-blue-500/20 px-3 py-1 rounded-full">
            <Text className="text-blue-400 font-semibold">8 tugas</Text>
          </View>
        </View>
        
        <View className="bg-slate-800/50 rounded-xl p-4 mt-2">
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-slate-300 text-xs mb-1">Deadline Terdekat</Text>
              <Text className="text-blue-400 font-semibold text-sm">23 Oktober 2025</Text>
            </View>
            <View className="bg-orange-500/20 px-3 py-1 rounded-full">
              <Text className="text-orange-400 text-xs font-semibold">3 mendesak</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* Quick Stats */}
      <View className="bg-slate-900 rounded-2xl p-6 mb-6 border-2 border-slate-700/30">
        <View className="flex-row items-center mb-4">
          <TrendingUp color="#a855f7" size={20} strokeWidth={2} />
          <Text className="text-white font-bold text-lg ml-2">Statistik Bulan Ini</Text>
        </View>
        
        <View className="flex-row justify-between mb-3">
          <View className="flex-1 bg-slate-800/50 rounded-xl p-3 mr-2">
            <Text className="text-slate-400 text-xs mb-1">Pengeluaran</Text>
            <Text className="text-white font-bold">Rp 1.2 Jt</Text>
          </View>
          <View className="flex-1 bg-slate-800/50 rounded-xl p-3 ml-2">
            <Text className="text-slate-400 text-xs mb-1">Hutang Lunas</Text>
            <Text className="text-white font-bold">7 item</Text>
          </View>
        </View>
        
        <View className="flex-row justify-between">
          <View className="flex-1 bg-slate-800/50 rounded-xl p-3 mr-2">
            <Text className="text-slate-400 text-xs mb-1">Tugas Selesai</Text>
            <Text className="text-white font-bold">15 tugas</Text>
          </View>
          <View className="flex-1 bg-slate-800/50 rounded-xl p-3 ml-2">
            <Text className="text-slate-400 text-xs mb-1">Produktivitas</Text>
            <Text className="text-white font-bold">87%</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
