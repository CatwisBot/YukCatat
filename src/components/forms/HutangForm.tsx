import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Wallet, Save } from "lucide-react-native";

export default function HutangForm() {
  return (
    <View className="bg-slate-900 rounded-2xl p-6 mb-4 border-2 border-red-500/30">
      <View className="flex-row items-center mb-4">
        <View className="bg-red-500/20 p-3 rounded-xl mr-3">
          <Wallet color="#ef4444" size={24} strokeWidth={2} />
        </View>
        <Text className="text-white font-bold text-xl">Form Hutang</Text>
      </View>

      <View className="mb-4">
        <Text className="text-slate-300 font-semibold mb-2">Nama Orang</Text>
        <TextInput
          className="bg-slate-800 text-white rounded-xl px-4 py-3 border-2 border-slate-700"
          placeholder="Contoh: Budi"
          placeholderTextColor="#64748b"
        />
      </View>

      <View className="mb-4">
        <Text className="text-slate-300 font-semibold mb-2">Jumlah Hutang (Rp)</Text>
        <TextInput
          className="bg-slate-800 text-white rounded-xl px-4 py-3 border-2 border-slate-700"
          placeholder="Contoh: 100000"
          placeholderTextColor="#64748b"
          keyboardType="numeric"
        />
      </View>

      <View className="mb-4">
        <Text className="text-slate-300 font-semibold mb-2">Tipe</Text>
        <View className="flex-row gap-3">
          <TouchableOpacity className="flex-1 bg-slate-800 rounded-xl py-3 border-2 border-red-500">
            <Text className="text-red-400 font-semibold text-center">Saya Berhutang</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 bg-slate-800 rounded-xl py-3 border-2 border-slate-700">
            <Text className="text-slate-400 font-semibold text-center">Orang Berhutang</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="mb-4">
        <Text className="text-slate-300 font-semibold mb-2">Jatuh Tempo</Text>
        <TextInput
          className="bg-slate-800 text-white rounded-xl px-4 py-3 border-2 border-slate-700"
          placeholder="DD/MM/YYYY"
          placeholderTextColor="#64748b"
        />
      </View>

      <View className="mb-4">
        <Text className="text-slate-300 font-semibold mb-2">Catatan (Opsional)</Text>
        <TextInput
          className="bg-slate-800 text-white rounded-xl px-4 py-3 border-2 border-slate-700"
          placeholder="Tambahkan catatan..."
          placeholderTextColor="#64748b"
          multiline
          numberOfLines={3}
        />
      </View>

      <TouchableOpacity className="bg-red-500 rounded-xl py-4 mt-2">
        <View className="flex-row items-center justify-center">
          <Save color="#ffffff" size={20} strokeWidth={2} />
          <Text className="text-white font-bold text-center text-lg ml-2">Simpan Hutang</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
