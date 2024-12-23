import { create } from 'zustand'

interface GenerateStore {
  story: string
  setStory: (story: string) => void
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  style: string
  setStyle: (style: string) => void
  caption: boolean
  setCaption: (caption: boolean) => void
  bubbles: boolean
  setBubbles: (bubbles: boolean) => void
  selectedGrid: number
  setSelectedGrid: (grid: number) => void
  // You can add more state here as needed
}

export const useStore = create<GenerateStore>((set) => ({
  story: '',
  setStory: (story) => set({ story }),
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
  style: 'modern',
  setStyle: (style) => set({ style }),
  caption: false,
  setCaption: (caption) => set({ caption }),
  bubbles: false,
  setBubbles: (bubbles) => set({ bubbles }),
  selectedGrid: 0,
  setSelectedGrid: (selectedGrid) => set({ selectedGrid }),
})) 