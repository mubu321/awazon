import { GoogleGenAI, Type } from "@google/genai";
import type { GeneratedProductData } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateProduct(): Promise<GeneratedProductData> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Generate one unique and imaginative product that could be sold on an e-commerce website. The product should be interesting and sound desirable. Provide: 1. A short, catchy 'name'. 2. A 'description' of 1-2 sentences. 3. A 'price' as an integer between 1000 and 90000.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: {
              type: Type.STRING,
              description: 'The short, catchy name of the product.',
            },
            description: {
              type: Type.STRING,
              description: 'A 1-2 sentence compelling description of the product.',
            },
            price: {
              type: Type.INTEGER,
              description: 'The price of the product, as an integer.',
            },
          },
          required: ["name", "description", "price"],
        },
      },
    });

    const jsonText = response.text.trim();
    const product = JSON.parse(jsonText);
    return product as GeneratedProductData;
  } catch (error) {
    console.error("Error generating product data:", error);
    throw new Error("Failed to generate product data from Gemini API.");
  }
}


export async function generateProductImage(productName: string): Promise<string> {
    try {
        const response = await ai.models.generateImages({
            model: 'imagen-4.0-generate-001',
            prompt: `Photorealistic e-commerce product photography of a "${productName}". The product is on a clean, pure white background. Studio lighting. Centered.`,
            config: {
              numberOfImages: 1,
              outputMimeType: 'image/jpeg',
              aspectRatio: '1:1',
            },
        });
        
        if (response.generatedImages && response.generatedImages.length > 0) {
            const base64ImageBytes = response.generatedImages[0].image.imageBytes;
            return `data:image/jpeg;base64,${base64ImageBytes}`;
        }
        throw new Error("No image was generated.");

    } catch (error) {
        console.error(`Error generating image for "${productName}":`, error);
        // Return a placeholder image on failure
        return `https://picsum.photos/seed/${encodeURIComponent(productName)}/500/500`;
    }
}