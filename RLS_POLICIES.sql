-- ============================================
-- Row Level Security (RLS) Policies Setup
-- Event Buddiez - Supabase Direct API
-- ============================================

-- This file contains all the RLS policies needed for the application to work
-- Apply these policies in your Supabase SQL Editor

-- ============================================
-- 1. KV STORE TABLE POLICIES
-- ============================================

-- Enable RLS on the KV store table
ALTER TABLE kv_store_6894a369 ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read data (for public gallery and services display)
CREATE POLICY "Allow public read access" ON kv_store_6894a369
  FOR SELECT 
  USING (true);

-- Allow authenticated users to insert data
CREATE POLICY "Allow authenticated insert" ON kv_store_6894a369
  FOR INSERT 
  WITH CHECK (auth.uid() IS NOT NULL);

-- Allow authenticated users to update data
CREATE POLICY "Allow authenticated update" ON kv_store_6894a369
  FOR UPDATE 
  USING (auth.uid() IS NOT NULL);

-- Allow authenticated users to delete data
CREATE POLICY "Allow authenticated delete" ON kv_store_6894a369
  FOR DELETE 
  USING (auth.uid() IS NOT NULL);

-- ============================================
-- 2. STORAGE BUCKET POLICIES
-- ============================================

-- These policies apply to the 'make-6894a369-gallery' storage bucket

-- Allow authenticated users to upload files
CREATE POLICY "Allow authenticated uploads" ON storage.objects
  FOR INSERT 
  WITH CHECK (
    bucket_id = 'make-6894a369-gallery' AND
    auth.uid() IS NOT NULL
  );

-- Allow authenticated users to update their files
CREATE POLICY "Allow authenticated updates" ON storage.objects
  FOR UPDATE 
  USING (
    bucket_id = 'make-6894a369-gallery' AND
    auth.uid() IS NOT NULL
  );

-- Allow authenticated users to delete files
CREATE POLICY "Allow authenticated deletes" ON storage.objects
  FOR DELETE 
  USING (
    bucket_id = 'make-6894a369-gallery' AND
    auth.uid() IS NOT NULL
  );

-- Allow public read access (through signed URLs)
CREATE POLICY "Allow public read access" ON storage.objects
  FOR SELECT 
  USING (bucket_id = 'make-6894a369-gallery');

-- ============================================
-- 3. VERIFY POLICIES
-- ============================================

-- Run these queries to verify your policies are active:

-- Check KV Store policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies
WHERE tablename = 'kv_store_6894a369';

-- Check Storage policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies
WHERE schemaname = 'storage' AND tablename = 'objects';

-- ============================================
-- 4. TROUBLESHOOTING
-- ============================================

-- If you need to remove all policies and start fresh:

-- Drop KV Store policies
DROP POLICY IF EXISTS "Allow public read access" ON kv_store_6894a369;
DROP POLICY IF EXISTS "Allow authenticated insert" ON kv_store_6894a369;
DROP POLICY IF EXISTS "Allow authenticated update" ON kv_store_6894a369;
DROP POLICY IF EXISTS "Allow authenticated delete" ON kv_store_6894a369;

-- Drop Storage policies
DROP POLICY IF EXISTS "Allow authenticated uploads" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated updates" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated deletes" ON storage.objects;
DROP POLICY IF EXISTS "Allow public read access" ON storage.objects;

-- Disable RLS (not recommended for production)
-- ALTER TABLE kv_store_6894a369 DISABLE ROW LEVEL SECURITY;

-- ============================================
-- 5. ALTERNATIVE: SIMPLIFIED POLICIES FOR TESTING
-- ============================================

-- For development/testing only - allows all operations
-- WARNING: Do not use in production!

-- ALTER TABLE kv_store_6894a369 ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "Allow all operations" ON kv_store_6894a369
--   FOR ALL 
--   USING (true)
--   WITH CHECK (true);

-- ============================================
-- 6. CREATE STORAGE BUCKET (if not exists)
-- ============================================

-- The application auto-creates the bucket, but you can manually create it:
-- Go to: Supabase Dashboard → Storage → New Bucket
-- Name: make-6894a369-gallery
-- Public: OFF (Private bucket)
-- File size limit: 10MB

-- Or use SQL (requires admin privileges):
-- INSERT INTO storage.buckets (id, name, public, file_size_limit)
-- VALUES ('make-6894a369-gallery', 'make-6894a369-gallery', false, 10485760)
-- ON CONFLICT (id) DO NOTHING;
