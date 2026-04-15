import { supabase } from "../app/lib/supabaseClient"
import { Vendor } from "../types/vendor.types"

export const vendorAPI = {

  async getVendors(): Promise<Vendor[]> {
    const { data, error } = await supabase
      .from("vendors")
      .select("*")
      .order("created_at", { ascending: false })
    if (error) throw error
    return data
  },

  async createVendor(vendor: Omit<Vendor, "id">) {
    const { data, error } = await supabase
      .from("vendors")
      .insert([vendor])
      .select()
    if (error) throw error
    return data
  },

  async updateVendor(id: string, vendor: Partial<Vendor>) {
    const { data, error } = await supabase
      .from("vendors")
      .update(vendor)
      .eq("vendor_id", id)
      .select()

    if (error) throw error
    return data
  },

  async deleteVendor(id: string) {
    const { error } = await supabase
      .from("vendors")
      .delete()
      .eq("vendor_id", id)

    if (error) throw error
  }

}