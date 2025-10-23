import { Text, View, TouchableOpacity } from "react-native";
import { Home, Plus, BarChart3 } from "lucide-react-native";

interface BottomNavigationProps {
  currentPage: 'home' | 'tambah' | 'laporan';
  onPageChange: (page: 'home' | 'tambah' | 'laporan') => void;
  onTambahPress: () => void;
}

export default function BottomNavigation({ currentPage, onPageChange, onTambahPress }: BottomNavigationProps) {
  return (
    <View className="bg-slate-900 border-t-2 border-slate-800 px-6 py-4">
      <View className="flex-row justify-around">
        <TouchableOpacity 
          className="items-center"
          onPress={() => onPageChange('home')}
        >
          <View className={`rounded-full px-6 py-2 ${currentPage === 'home' ? 'bg-purple-600' : 'bg-slate-800'}`}>
            <View className="flex-row items-center">
              <Home color={currentPage === 'home' ? '#ffffff' : '#94a3b8'} size={20} strokeWidth={2} />
              <Text className={`font-semibold ml-2 ${currentPage === 'home' ? 'text-white' : 'text-slate-400'}`}>
                Home
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
          className="items-center"
          onPress={onTambahPress}
        >
          <View className={`rounded-full px-6 py-2 ${currentPage === 'tambah' ? 'bg-purple-600' : 'bg-slate-800'}`}>
            <View className="flex-row items-center">
              <Plus color={currentPage === 'tambah' ? '#ffffff' : '#94a3b8'} size={20} strokeWidth={2} />
              <Text className={`font-semibold ml-2 ${currentPage === 'tambah' ? 'text-white' : 'text-slate-400'}`}>
                Tambah
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
          className="items-center"
          onPress={() => onPageChange('laporan')}
        >
          <View className={`rounded-full px-6 py-2 ${currentPage === 'laporan' ? 'bg-purple-600' : 'bg-slate-800'}`}>
            <View className="flex-row items-center">
              <BarChart3 color={currentPage === 'laporan' ? '#ffffff' : '#94a3b8'} size={20} strokeWidth={2} />
              <Text className={`font-semibold ml-2 ${currentPage === 'laporan' ? 'text-white' : 'text-slate-400'}`}>
                Laporan
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
