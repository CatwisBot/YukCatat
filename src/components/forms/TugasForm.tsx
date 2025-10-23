import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { CheckSquare, Save } from "lucide-react-native";

export default function TugasForm() {
  return (
    <View className="bg-slate-900 rounded-2xl p-6 mb-4 border-2 border-blue-500/30">
      <View className="flex-row items-center mb-4">
        <View className="bg-blue-500/20 p-3 rounded-xl mr-3">
          <CheckSquare color="#3b82f6" size={24} strokeWidth={2} />
        </View>
        <Text className="text-white font-bold text-xl">Form Tugas</Text>
      </View>

      <View className="mb-4">
        <Text className="text-slate-300 font-semibold mb-2">Nama Tugas</Text>
        <TextInput
          className="bg-slate-800 text-white rounded-xl px-4 py-3 border-2 border-slate-700"
          placeholder="Contoh: Presentasi Project"
          placeholderTextColor="#64748b"
        />
      </View>

      <View className="mb-4">
        <Text className="text-slate-300 font-semibold mb-2">Deadline</Text>
        <TextInput
          className="bg-slate-800 text-white rounded-xl px-4 py-3 border-2 border-slate-700"
          placeholder="DD/MM/YYYY"
          placeholderTextColor="#64748b"
        />
      </View>

      <View className="mb-4">
        <Text className="text-slate-300 font-semibold mb-2">Prioritas</Text>
        <View className="flex-row gap-2">
          <TouchableOpacity className="flex-1 bg-slate-800 rounded-xl py-3 border-2 border-red-500">
            <Text className="text-red-400 font-semibold text-center text-xs">🔴 Mendesak</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 bg-slate-800 rounded-xl py-3 border-2 border-slate-700">
            <Text className="text-slate-400 font-semibold text-center text-xs">🟡 Sedang</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 bg-slate-800 rounded-xl py-3 border-2 border-slate-700">
            <Text className="text-slate-400 font-semibold text-center text-xs">🟢 Rendah</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="mb-4">
        <Text className="text-slate-300 font-semibold mb-2">Deskripsi</Text>
        <TextInput
          className="bg-slate-800 text-white rounded-xl px-4 py-3 border-2 border-slate-700"
          placeholder="Detail tugas..."
          placeholderTextColor="#64748b"
          multiline
          numberOfLines={4}
        />
      </View>

      <TouchableOpacity className="bg-blue-500 rounded-xl py-4 mt-2">
        <View className="flex-row items-center justify-center">
          <Save color="#ffffff" size={20} strokeWidth={2} />
          <Text className="text-white font-bold text-center text-lg ml-2">Simpan Tugas</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
