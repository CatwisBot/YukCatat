import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { ShoppingCart, Wallet, CheckSquare, ChevronRight, ChevronLeft } from "lucide-react-native";
import BelanjaForm from "../components/forms/BelanjaForm";
import HutangForm from "../components/forms/HutangForm";
import TugasForm from "../components/forms/TugasForm";

interface TambahScreenProps {
  selectedCategory: 'belanja' | 'hutang' | 'tugas' | null;
  onSelectCategory: (category: 'belanja' | 'hutang' | 'tugas') => void;
  onBackPress: () => void;
}

export default function TambahScreen({ selectedCategory, onSelectCategory, onBackPress }: TambahScreenProps) {
  if (selectedCategory === null) {
    // Category Selection
    return (
      <ScrollView className="flex-1 px-6 pt-8">
        <Text className="text-white font-bold text-lg mb-4">Pilih Kategori:</Text>
        
        {/* Belanja Card */}
        <TouchableOpacity 
          className="bg-slate-900 rounded-2xl p-6 mb-4 border-2 border-emerald-500/50"
          activeOpacity={0.7}
          onPress={() => onSelectCategory('belanja')}
        >
          <View className="flex-row items-center">
            <View className="bg-emerald-500/20 p-4 rounded-xl mr-4">
              <ShoppingCart color="#10b981" size={32} strokeWidth={2} />
            </View>
            <View className="flex-1">
              <Text className="text-white font-bold text-xl mb-1">Belanja</Text>
              <Text className="text-slate-400 text-sm">Catat pembelian barang dan harganya</Text>
            </View>
            <ChevronRight color="#10b981" size={28} strokeWidth={2} />
          </View>
        </TouchableOpacity>

        {/* Hutang Card */}
        <TouchableOpacity 
          className="bg-slate-900 rounded-2xl p-6 mb-4 border-2 border-red-500/50"
          activeOpacity={0.7}
          onPress={() => onSelectCategory('hutang')}
        >
          <View className="flex-row items-center">
            <View className="bg-red-500/20 p-4 rounded-xl mr-4">
              <Wallet color="#ef4444" size={32} strokeWidth={2} />
            </View>
            <View className="flex-1">
              <Text className="text-white font-bold text-xl mb-1">Hutang</Text>
              <Text className="text-slate-400 text-sm">Catat hutang dan siapa yang berhutang</Text>
            </View>
            <ChevronRight color="#ef4444" size={28} strokeWidth={2} />
          </View>
        </TouchableOpacity>

        {/* Tugas Card */}
        <TouchableOpacity 
          className="bg-slate-900 rounded-2xl p-6 mb-4 border-2 border-blue-500/50"
          activeOpacity={0.7}
          onPress={() => onSelectCategory('tugas')}
        >
          <View className="flex-row items-center">
            <View className="bg-blue-500/20 p-4 rounded-xl mr-4">
              <CheckSquare color="#3b82f6" size={32} strokeWidth={2} />
            </View>
            <View className="flex-1">
              <Text className="text-white font-bold text-xl mb-1">Tugas</Text>
              <Text className="text-slate-400 text-sm">Catat tugas dengan deadline</Text>
            </View>
            <ChevronRight color="#3b82f6" size={28} strokeWidth={2} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  // Form Input
  return (
    <ScrollView className="flex-1 px-6 pt-6">
      {/* Back Button */}
      <TouchableOpacity 
        className="flex-row items-center mb-6"
        onPress={onBackPress}
      >
        <ChevronLeft color="#a855f7" size={24} strokeWidth={2} />
        <Text className="text-purple-400 font-semibold ml-1">Kembali</Text>
      </TouchableOpacity>

      {/* Render appropriate form */}
      {selectedCategory === 'belanja' && <BelanjaForm />}
      {selectedCategory === 'hutang' && <HutangForm />}
      {selectedCategory === 'tugas' && <TugasForm />}
    </ScrollView>
  );
}
