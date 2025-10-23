import { Text, View } from "react-native";
import { ClipboardList, Plus, BarChart3 } from "lucide-react-native";

interface HeaderProps {
  currentPage: 'home' | 'tambah' | 'laporan';
}

export default function Header({ currentPage }: HeaderProps) {
  const getTitleIcon = () => {
    switch (currentPage) {
      case 'home':
        return <ClipboardList color="#ffffff" size={28} strokeWidth={2.5} />;
      case 'tambah':
        return <Plus color="#ffffff" size={28} strokeWidth={2.5} />;
      case 'laporan':
        return <BarChart3 color="#ffffff" size={28} strokeWidth={2.5} />;
      default:
        return <ClipboardList color="#ffffff" size={28} strokeWidth={2.5} />;
    }
  };

  const getTitle = () => {
    switch (currentPage) {
      case 'home':
        return 'YukCatat!';
      case 'tambah':
        return 'Tambah Data';
      case 'laporan':
        return 'Laporan';
      default:
        return 'YukCatat!';
    }
  };

  const getSubtitle = () => {
    switch (currentPage) {
      case 'home':
        return 'Catat semua aktivitas kamu dengan mudah';
      case 'tambah':
        return 'Pilih kategori yang ingin kamu catat';
      case 'laporan':
        return 'Lihat semua statistik dan laporan';
      default:
        return 'Catat semua aktivitas kamu dengan mudah';
    }
  };

  return (
    <View className="bg-gradient-to-r from-purple-600 to-blue-600 pt-12 pb-6 px-6">
      <View className="flex-row items-center mb-2">
        {getTitleIcon()}
        <Text className="text-3xl font-bold text-white ml-3">
          {getTitle()}
        </Text>
      </View>
      <Text className="text-slate-200 text-sm">
        {getSubtitle()}
      </Text>
    </View>
  );
}
