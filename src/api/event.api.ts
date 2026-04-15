import { supabase } from "../app/lib/supabaseClient";
import { Event } from "../types/event.types";

export const eventAPI = {

  async getEvents(): Promise<Event[]> {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("created_at", { ascending: false })
    if (error) throw error
    return data
  },

  async createEvent(event: Omit<Event, "id">) {
    const { data, error } = await supabase
      .from("events")
      .insert([event])
      .select()
    if (error) throw error
    return data
  },

  async updateEvent(id: string, event: Partial<Event>) {
    const { data, error } = await supabase
      .from("events")
      .update(event)
      .eq("event_id", id)
      .select()

    if (error) throw error
    return data
  },

  async deleteEvent(id: string) {
    const { error } = await supabase
      .from("events")
      .delete()
      .eq("event_id", id)

    if (error) throw error
  }

}