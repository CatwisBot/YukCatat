import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { BarChart3, ShoppingCart, Wallet, CheckSquare, ChevronRight, Check } from "lucide-react-native";

export default function LaporanScreen() {
  return (
    <ScrollView className="flex-1 px-6 pt-6 mb-6">
      {/* Ringkasan Total */}
      <View className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 mb-6">
        <Text className="text-white text-sm mb-2">Total Pengeluaran Bulan Ini</Text>
        <Text className="text-white font-bold text-4xl mb-4">Rp 1.750.000</Text>
        <View className="flex-row justify-between">
          <View>
            <Text className="text-purple-200 text-xs">Pemasukan</Text>
            <Text className="text-white font-bold">Rp 5.000.000</Text>
          </View>
          <View className="items-end">
            <Text className="text-purple-200 text-xs">Sisa</Text>
            <Text className="text-white font-bold">Rp 3.250.000</Text>
          </View>
        </View>
      </View>

      {/* Tab Filter */}
      <View className="flex-row gap-2 mb-6">
        <TouchableOpacity className="flex-1 bg-purple-600 rounded-xl py-3">
          <Text className="text-white font-semibold text-center">Semua</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 bg-slate-800 rounded-xl py-3">
          <Text className="text-slate-400 font-semibold text-center">Belanja</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 bg-slate-800 rounded-xl py-3">
          <Text className="text-slate-400 font-semibold text-center">Hutang</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 bg-slate-800 rounded-xl py-3">
          <Text className="text-slate-400 font-semibold text-center">Tugas</Text>
        </TouchableOpacity>
      </View>

      {/* Laporan Detail */}
      <View className="flex-row items-center mb-4">
        <BarChart3 color="#ffffff" size={20} strokeWidth={2} />
        <Text className="text-white font-bold text-lg ml-2">Laporan Detail</Text>
      </View>

      {/* Belanja Section */}
      <View className="bg-slate-900 rounded-2xl p-6 mb-4 border-2 border-emerald-500/30">
        <View className="flex-row items-center justify-between mb-4">
          <View className="flex-row items-center">
            <View className="bg-emerald-500/20 p-3 rounded-xl mr-3">
              <ShoppingCart color="#10b981" size={24} strokeWidth={2} />
            </View>
            <View>
              <Text className="text-white font-bold text-lg">Belanja</Text>
              <Text className="text-slate-400 text-xs">12 transaksi bulan ini</Text>
            </View>
          </View>
          <TouchableOpacity className="flex-row items-center">
            <Text className="text-emerald-400 font-semibold mr-1">Lihat</Text>
            <ChevronRight color="#10b981" size={20} strokeWidth={2} />
          </TouchableOpacity>
        </View>

        {/* Top 3 Belanja */}
        <View className="space-y-2">
          <View className="bg-slate-800/50 rounded-xl p-3 flex-row justify-between items-center">
            <View className="flex-1">
              <Text className="text-white font-semibold">Beras 5kg</Text>
              <Text className="text-slate-400 text-xs">20 Okt 2025 • 2 item</Text>
            </View>
            <Text className="text-emerald-400 font-bold">Rp 100.000</Text>
          </View>
          <View className="bg-slate-800/50 rounded-xl p-3 flex-row justify-between items-center mt-2">
            <View className="flex-1">
              <Text className="text-white font-semibold">Minyak Goreng</Text>
              <Text className="text-slate-400 text-xs">19 Okt 2025 • 3 item</Text>
            </View>
            <Text className="text-emerald-400 font-bold">Rp 150.000</Text>
          </View>
          <View className="bg-slate-800/50 rounded-xl p-3 flex-row justify-between items-center mt-2">
            <View className="flex-1">
              <Text className="text-white font-semibold">Gula Pasir 1kg</Text>
              <Text className="text-slate-400 text-xs">18 Okt 2025 • 1 item</Text>
            </View>
            <Text className="text-emerald-400 font-bold">Rp 15.000</Text>
          </View>
        </View>

        <View className="bg-slate-800/30 rounded-xl p-3 mt-3">
          <View className="flex-row justify-between">
            <Text className="text-slate-300 text-sm">Total Belanja</Text>
            <Text className="text-emerald-400 font-bold text-lg">Rp 1.250.000</Text>
          </View>
        </View>
      </View>

      {/* Hutang Section */}
      <View className="bg-slate-900 rounded-2xl p-6 mb-4 border-2 border-red-500/30">
        <View className="flex-row items-center justify-between mb-4">
          <View className="flex-row items-center">
            <View className="bg-red-500/20 p-3 rounded-xl mr-3">
              <Wallet color="#ef4444" size={24} strokeWidth={2} />
            </View>
            <View>
              <Text className="text-white font-bold text-lg">Hutang</Text>
              <Text className="text-slate-400 text-xs">5 hutang aktif</Text>
            </View>
          </View>
          <TouchableOpacity className="flex-row items-center">
            <Text className="text-red-400 font-semibold mr-1">Lihat</Text>
            <ChevronRight color="#ef4444" size={20} strokeWidth={2} />
          </TouchableOpacity>
        </View>

        {/* Hutang List */}
        <View className="space-y-2">
          <View className="bg-slate-800/50 rounded-xl p-3">
            <View className="flex-row justify-between items-start mb-2">
              <View className="flex-1">
                <Text className="text-white font-semibold">Budi</Text>
                <Text className="text-slate-400 text-xs">Jatuh tempo: 25 Okt 2025</Text>
              </View>
              <View className="bg-red-500/20 px-2 py-1 rounded">
                <Text className="text-red-400 text-xs font-semibold">Saya berhutang</Text>
              </View>
            </View>
            <View className="flex-row justify-between items-center">
              <Text className="text-red-400 font-bold text-lg">Rp 200.000</Text>
              <TouchableOpacity className="bg-emerald-500 px-3 py-2 rounded-lg flex-row items-center">
                <Check color="#ffffff" size={16} strokeWidth={3} />
                <Text className="text-white font-semibold text-xs ml-1">Bayar</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="bg-slate-800/50 rounded-xl p-3 mt-2">
            <View className="flex-row justify-between items-start mb-2">
              <View className="flex-1">
                <Text className="text-white font-semibold">Ani</Text>
                <Text className="text-slate-400 text-xs">Jatuh tempo: 30 Okt 2025</Text>
              </View>
              <View className="bg-emerald-500/20 px-2 py-1 rounded">
                <Text className="text-emerald-400 text-xs font-semibold">Orang berhutang</Text>
              </View>
            </View>
            <View className="flex-row justify-between items-center">
              <Text className="text-emerald-400 font-bold text-lg">Rp 150.000</Text>
              <TouchableOpacity className="bg-blue-500 px-3 py-2 rounded-lg flex-row items-center">
                <Check color="#ffffff" size={16} strokeWidth={3} />
                <Text className="text-white font-semibold text-xs ml-1">Lunas</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="bg-slate-800/50 rounded-xl p-3 mt-2">
            <View className="flex-row justify-between items-start mb-2">
              <View className="flex-1">
                <Text className="text-white font-semibold">Toko Makmur</Text>
                <Text className="text-slate-400 text-xs">Jatuh tempo: 28 Okt 2025</Text>
              </View>
              <View className="bg-red-500/20 px-2 py-1 rounded">
                <Text className="text-red-400 text-xs font-semibold">Saya berhutang</Text>
              </View>
            </View>
            <View className="flex-row justify-between items-center">
              <Text className="text-red-400 font-bold text-lg">Rp 150.000</Text>
              <TouchableOpacity className="bg-emerald-500 px-3 py-2 rounded-lg flex-row items-center">
                <Check color="#ffffff" size={16} strokeWidth={3} />
                <Text className="text-white font-semibold text-xs ml-1">Bayar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="bg-slate-800/30 rounded-xl p-3 mt-3">
          <View className="flex-row justify-between mb-2">
            <Text className="text-slate-300 text-sm">Total Hutang Aktif</Text>
            <Text className="text-red-400 font-bold text-lg">Rp 500.000</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-slate-300 text-sm">Total Piutang</Text>
            <Text className="text-emerald-400 font-bold">Rp 150.000</Text>
          </View>
        </View>
      </View>

      {/* Tugas Section */}
      <View className="bg-slate-900 rounded-2xl p-6 mb-6 border-2 border-blue-500/30">
        <View className="flex-row items-center justify-between mb-4">
          <View className="flex-row items-center">
            <View className="bg-blue-500/20 p-3 rounded-xl mr-3">
              <CheckSquare color="#3b82f6" size={24} strokeWidth={2} />
            </View>
            <View>
              <Text className="text-white font-bold text-lg">Tugas</Text>
              <Text className="text-slate-400 text-xs">8 tugas bulan ini</Text>
            </View>
          </View>
          <TouchableOpacity className="flex-row items-center">
            <Text className="text-blue-400 font-semibold mr-1">Lihat</Text>
            <ChevronRight color="#3b82f6" size={20} strokeWidth={2} />
          </TouchableOpacity>
        </View>

        {/* Tugas List */}
        <View className="space-y-2">
          <View className="bg-slate-800/50 rounded-xl p-3">
            <View className="flex-row justify-between items-start mb-2">
              <View className="flex-1">
                <Text className="text-white font-semibold">Presentasi Project</Text>
                <Text className="text-slate-400 text-xs">Deadline: 23 Okt 2025</Text>
              </View>
              <View className="bg-red-500/20 px-2 py-1 rounded">
                <Text className="text-red-400 text-xs font-semibold">🔴 Mendesak</Text>
              </View>
            </View>
            <TouchableOpacity className="bg-blue-500 py-2 rounded-lg mt-2 flex-row items-center justify-center">
              <Check color="#ffffff" size={16} strokeWidth={3} />
              <Text className="text-white font-semibold text-xs ml-1">Tandai Selesai</Text>
            </TouchableOpacity>
          </View>

          <View className="bg-slate-800/50 rounded-xl p-3 mt-2">
            <View className="flex-row justify-between items-start mb-2">
              <View className="flex-1">
                <Text className="text-white font-semibold">Laporan Keuangan</Text>
                <Text className="text-slate-400 text-xs">Deadline: 25 Okt 2025</Text>
              </View>
              <View className="bg-yellow-500/20 px-2 py-1 rounded">
                <Text className="text-yellow-400 text-xs font-semibold">🟡 Sedang</Text>
              </View>
            </View>
            <TouchableOpacity className="bg-blue-500 py-2 rounded-lg mt-2 flex-row items-center justify-center">
              <Check color="#ffffff" size={16} strokeWidth={3} />
              <Text className="text-white font-semibold text-xs ml-1">Tandai Selesai</Text>
            </TouchableOpacity>
          </View>

          <View className="bg-slate-800/50 rounded-xl p-3 mt-2">
            <View className="flex-row justify-between items-start mb-2">
              <View className="flex-1">
                <Text className="text-white font-semibold">Meeting Team</Text>
                <Text className="text-slate-400 text-xs">Deadline: 27 Okt 2025</Text>
              </View>
              <View className="bg-green-500/20 px-2 py-1 rounded">
                <Text className="text-green-400 text-xs font-semibold">🟢 Rendah</Text>
              </View>
            </View>
            <TouchableOpacity className="bg-blue-500 py-2 rounded-lg mt-2 flex-row items-center justify-center">
              <Check color="#ffffff" size={16} strokeWidth={3} />
              <Text className="text-white font-semibold text-xs ml-1">Tandai Selesai</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="bg-slate-800/30 rounded-xl p-3 mt-3">
          <View className="flex-row justify-between mb-2">
            <Text className="text-slate-300 text-sm">Tugas Selesai</Text>
            <Text className="text-emerald-400 font-bold">15 / 23</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-slate-300 text-sm">Produktivitas</Text>
            <Text className="text-blue-400 font-bold">87%</Text>
          </View>
        </View>
      </View>

      {/* Chart/Graph Placeholder */}
      <View className="bg-slate-900 rounded-2xl p-6 mb-6 border-2 border-slate-700/30">
        <Text className="text-white font-bold text-lg mb-4">📈 Grafik Pengeluaran</Text>
        <View className="bg-slate-800/50 rounded-xl p-8 items-center justify-center">
          <Text className="text-slate-400 text-center mb-2">📊</Text>
          <Text className="text-slate-400 text-center text-sm">
            Grafik akan ditampilkan di sini
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
