import { supabase } from "../lib/supabaseClient"

export const uploadImage = async (file: File) => {

  const fileName = `${Date.now()}-${file.name}`

  const { error } = await supabase.storage
    .from("gallery-images")
    .upload(fileName, file)

  if (error) throw error

  const { data } = supabase.storage
    .from("gallery-images")
    .getPublicUrl(fileName)

  return data.publicUrl
}