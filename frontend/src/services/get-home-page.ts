import { HomePage } from "@/types/home-page.types"

export async function getHomePage(): Promise<HomePage> {
    const path = "/api/home-page"
    const url = new URL(path, process.env.NEXT_PUBLIC_STRAPI_URL)
  
    const response = await fetch(url.href)
    const data: HomePage = await response.json()
  
    return data
  }