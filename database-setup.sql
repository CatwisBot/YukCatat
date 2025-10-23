-- Supabase SQL untuk setup tables

-- Table: belanja
CREATE TABLE belanja (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  item_name TEXT NOT NULL,
  price DECIMAL NOT NULL,
  category TEXT NOT NULL,
  date DATE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_id UUID REFERENCES auth.users(id)
);

-- Table: hutang
CREATE TABLE hutang (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  creditor_name TEXT NOT NULL,
  amount DECIMAL NOT NULL,
  due_date DATE NOT NULL,
  description TEXT,
  is_paid BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_id UUID REFERENCES auth.users(id)
);

-- Table: tugas
CREATE TABLE tugas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  task_name TEXT NOT NULL,
  description TEXT,
  due_date DATE NOT NULL,
  priority TEXT CHECK (priority IN ('low', 'medium', 'high')) NOT NULL,
  is_completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_id UUID REFERENCES auth.users(id)
);

-- Enable Row Level Security (RLS)
ALTER TABLE belanja ENABLE ROW LEVEL SECURITY;
ALTER TABLE hutang ENABLE ROW LEVEL SECURITY;
ALTER TABLE tugas ENABLE ROW LEVEL SECURITY;

-- RLS Policies (users can only see their own data)
CREATE POLICY "Users can view own belanja" ON belanja
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own belanja" ON belanja
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own belanja" ON belanja
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own belanja" ON belanja
  FOR DELETE USING (auth.uid() = user_id);

-- Similar policies for hutang
CREATE POLICY "Users can view own hutang" ON hutang
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own hutang" ON hutang
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own hutang" ON hutang
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own hutang" ON hutang
  FOR DELETE USING (auth.uid() = user_id);

-- Similar policies for tugas
CREATE POLICY "Users can view own tugas" ON tugas
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own tugas" ON tugas
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own tugas" ON tugas
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own tugas" ON tugas
  FOR DELETE USING (auth.uid() = user_id);