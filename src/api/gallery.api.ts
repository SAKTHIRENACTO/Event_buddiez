import { supabase } from "../app/lib/supabaseClient"

export const galleryAPI = {

  async getImages() {
    const { data, error } = await supabase
      .from("gallery_images")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) throw error

    return data
  },

  async addImage(payload: {
    url: string
    caption: string
    category: string
  }) {

    const { data, error } = await supabase
      .from("gallery_images")
      .insert(payload)
      .select()

    if (error) throw error

    return data
  },

  async deleteImage(id: string) {

    const { error } = await supabase
      .from("gallery_images")
      .delete()
      .eq("id", id)

    if (error) throw error
  }
}