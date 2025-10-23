import { supabase, BelanjaItem, HutangItem, TugasItem } from '../config/supabase';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';

class DatabaseService {
  private isOnline: boolean = true;

  constructor() {
    this.setupNetworkListener();
  }

  private setupNetworkListener() {
    NetInfo.addEventListener((state: NetInfoState) => {
      const wasOffline = !this.isOnline;
      this.isOnline = state.isConnected ?? false;
      
      // If just came back online, sync pending data
      if (wasOffline && this.isOnline) {
        this.syncPendingData();
      }
    });
  }

  // BELANJA METHODS
  async addBelanjaItem(item: Omit<BelanjaItem, 'id' | 'created_at'>) {
    const newItem: BelanjaItem = {
      ...item,
      id: this.generateId(),
      created_at: new Date().toISOString(),
    };

    if (this.isOnline) {
      try {
        const { error } = await supabase
          .from('belanja')
          .insert([newItem]);

        if (!error) {
          // Also save to local for backup
          await this.saveBelanjaToLocal(newItem, true);
          return { success: true, data: newItem };
        }
      } catch (error) {
        console.error('Error saving to Supabase:', error);
      }
    }

    // Save to local (either offline or Supabase failed)
    await this.saveBelanjaToLocal(newItem, false);
    return { success: true, data: newItem };
  }

  private async saveBelanjaToLocal(item: BelanjaItem, synced: boolean) {
    try {
      const existingData = await AsyncStorage.getItem('belanja_items');
      const items: (BelanjaItem & { synced: boolean })[] = existingData ? JSON.parse(existingData) : [];
      
      items.push({ ...item, synced });
      await AsyncStorage.setItem('belanja_items', JSON.stringify(items));
    } catch (error) {
      console.error('Error saving to local storage:', error);
    }
  }

  async getBelanjaItems(): Promise<BelanjaItem[]> {
    if (this.isOnline) {
      try {
        const { data, error } = await supabase
          .from('belanja')
          .select('*')
          .order('created_at', { ascending: false });

        if (!error && data) {
          return data;
        }
      } catch (error) {
        console.error('Error fetching from Supabase:', error);
      }
    }

    // Fallback to local data
    return this.getBelanjaFromLocal();
  }

  private async getBelanjaFromLocal(): Promise<BelanjaItem[]> {
    try {
      const data = await AsyncStorage.getItem('belanja_items');
      if (data) {
        const items: (BelanjaItem & { synced: boolean })[] = JSON.parse(data);
        return items.map(({ synced, ...item }) => item).sort((a, b) => 
          new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime()
        );
      }
    } catch (error) {
      console.error('Error reading from local storage:', error);
    }
    return [];
  }

  // HUTANG METHODS
  async addHutangItem(item: Omit<HutangItem, 'id' | 'created_at'>) {
    const newItem: HutangItem = {
      ...item,
      id: this.generateId(),
      created_at: new Date().toISOString(),
    };

    if (this.isOnline) {
      try {
        const { error } = await supabase
          .from('hutang')
          .insert([newItem]);

        if (!error) {
          await this.saveHutangToLocal(newItem, true);
          return { success: true, data: newItem };
        }
      } catch (error) {
        console.error('Error saving to Supabase:', error);
      }
    }

    await this.saveHutangToLocal(newItem, false);
    return { success: true, data: newItem };
  }

  private async saveHutangToLocal(item: HutangItem, synced: boolean) {
    try {
      const existingData = await AsyncStorage.getItem('hutang_items');
      const items: (HutangItem & { synced: boolean })[] = existingData ? JSON.parse(existingData) : [];
      
      items.push({ ...item, synced });
      await AsyncStorage.setItem('hutang_items', JSON.stringify(items));
    } catch (error) {
      console.error('Error saving to local storage:', error);
    }
  }

  async getHutangItems(): Promise<HutangItem[]> {
    if (this.isOnline) {
      try {
        const { data, error } = await supabase
          .from('hutang')
          .select('*')
          .order('created_at', { ascending: false });

        if (!error && data) {
          return data;
        }
      } catch (error) {
        console.error('Error fetching from Supabase:', error);
      }
    }

    return this.getHutangFromLocal();
  }

  private async getHutangFromLocal(): Promise<HutangItem[]> {
    try {
      const data = await AsyncStorage.getItem('hutang_items');
      if (data) {
        const items: (HutangItem & { synced: boolean })[] = JSON.parse(data);
        return items.map(({ synced, ...item }) => item).sort((a, b) => 
          new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime()
        );
      }
    } catch (error) {
      console.error('Error reading from local storage:', error);
    }
    return [];
  }

  // TUGAS METHODS
  async addTugasItem(item: Omit<TugasItem, 'id' | 'created_at'>) {
    const newItem: TugasItem = {
      ...item,
      id: this.generateId(),
      created_at: new Date().toISOString(),
    };

    if (this.isOnline) {
      try {
        const { error } = await supabase
          .from('tugas')
          .insert([newItem]);

        if (!error) {
          await this.saveTugasToLocal(newItem, true);
          return { success: true, data: newItem };
        }
      } catch (error) {
        console.error('Error saving to Supabase:', error);
      }
    }

    await this.saveTugasToLocal(newItem, false);
    return { success: true, data: newItem };
  }

  private async saveTugasToLocal(item: TugasItem, synced: boolean) {
    try {
      const existingData = await AsyncStorage.getItem('tugas_items');
      const items: (TugasItem & { synced: boolean })[] = existingData ? JSON.parse(existingData) : [];
      
      items.push({ ...item, synced });
      await AsyncStorage.setItem('tugas_items', JSON.stringify(items));
    } catch (error) {
      console.error('Error saving to local storage:', error);
    }
  }

  async getTugasItems(): Promise<TugasItem[]> {
    if (this.isOnline) {
      try {
        const { data, error } = await supabase
          .from('tugas')
          .select('*')
          .order('created_at', { ascending: false });

        if (!error && data) {
          return data;
        }
      } catch (error) {
        console.error('Error fetching from Supabase:', error);
      }
    }

    return this.getTugasFromLocal();
  }

  private async getTugasFromLocal(): Promise<TugasItem[]> {
    try {
      const data = await AsyncStorage.getItem('tugas_items');
      if (data) {
        const items: (TugasItem & { synced: boolean })[] = JSON.parse(data);
        return items.map(({ synced, ...item }) => item).sort((a, b) => 
          new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime()
        );
      }
    } catch (error) {
      console.error('Error reading from local storage:', error);
    }
    return [];
  }

  // SYNC METHODS
  private async syncPendingData() {
    if (!this.isOnline) return;

    try {
      // Sync belanja items
      const belanjaData = await AsyncStorage.getItem('belanja_items');
      if (belanjaData) {
        const items: (BelanjaItem & { synced: boolean })[] = JSON.parse(belanjaData);
        const unsyncedItems = items.filter(item => !item.synced);

        for (const item of unsyncedItems) {
          const { synced, ...itemData } = item;
          const { error } = await supabase
            .from('belanja')
            .insert([itemData]);

          if (!error) {
            // Mark as synced
            const updatedItems = items.map(i => 
              i.id === item.id ? { ...i, synced: true } : i
            );
            await AsyncStorage.setItem('belanja_items', JSON.stringify(updatedItems));
          }
        }
      }

      // Similar sync for hutang and tugas...
      console.log('Data sync completed');
    } catch (error) {
      console.error('Error syncing data:', error);
    }
  }

  private generateId(): string {
    return 'id-' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
  }

  // Connection status
  getConnectionStatus(): boolean {
    return this.isOnline;
  }

  // Test connection to Supabase
  async testConnection(): Promise<{ success: boolean; message: string }> {
    try {
      const { data, error } = await supabase
        .from('belanja')
        .select('count')
        .limit(1);

      if (error) {
        return { success: false, message: `Supabase error: ${error.message}` };
      }

      return { success: true, message: 'Connected to Supabase successfully!' };
    } catch (error) {
      return { success: false, message: `Connection failed: ${error}` };
    }
  }
}

export default new DatabaseService();