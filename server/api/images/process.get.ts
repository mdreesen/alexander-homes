// server/api/images.ts
import fs from 'node:fs'
import path from 'node:path'

export default defineEventHandler((event) => {
  // Define the path to your images folder relative to the project root
  const imagesDir = path.resolve(process.cwd(), 'public/images/projects/process')
  
  try {
    // Read files and filter for common image extensions
    const files = fs.readdirSync(imagesDir)
    return files.filter(file => 
      /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file)
    ).map(file => `/images/projects/process/${file}`) // Map to the public URL path
  } catch (e) {
    return [] // Return empty array if directory doesn't exist
  }
})