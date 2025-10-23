import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { ShoppingCart, Save } from "lucide-react-native";

export default function BelanjaForm() {
  return (
    <View className="bg-slate-900 rounded-2xl p-6 mb-4 border-2 border-emerald-500/30">
      <View className="flex-row items-center mb-4">
        <View className="bg-emerald-500/20 p-3 rounded-xl mr-3">
          <ShoppingCart color="#10b981" size={24} strokeWidth={2} />
        </View>
        <Text className="text-white font-bold text-xl">Form Belanja</Text>
      </View>

      <View className="mb-4">
        <Text className="text-slate-300 font-semibold mb-2">Nama Barang</Text>
        <TextInput
          className="bg-slate-800 text-white rounded-xl px-4 py-3 border-2 border-slate-700"
          placeholder="Contoh: Beras 5kg"
          placeholderTextColor="#64748b"
        />
      </View>

      <View className="mb-4">
        <Text className="text-slate-300 font-semibold mb-2">Harga (Rp)</Text>
        <TextInput
          className="bg-slate-800 text-white rounded-xl px-4 py-3 border-2 border-slate-700"
          placeholder="Contoh: 50000"
          placeholderTextColor="#64748b"
          keyboardType="numeric"
        />
      </View>

      <View className="mb-4">
        <Text className="text-slate-300 font-semibold mb-2">Jumlah</Text>
        <TextInput
          className="bg-slate-800 text-white rounded-xl px-4 py-3 border-2 border-slate-700"
          placeholder="Contoh: 1"
          placeholderTextColor="#64748b"
          keyboardType="numeric"
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

      <TouchableOpacity className="bg-emerald-500 rounded-xl py-4 mt-2">
        <View className="flex-row items-center justify-center">
          <Save color="#ffffff" size={20} strokeWidth={2} />
          <Text className="text-white font-bold text-center text-lg ml-2">Simpan Belanja</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
