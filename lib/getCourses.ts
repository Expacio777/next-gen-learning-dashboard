import { supabase } from "./supabase";

export async function getCourses() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Supabase Error:", error);
    return [];
  }

  return data ?? [];
}