'use client'
import { useCallback, useEffect, useRef } from 'react'

type SoundType = 'hover' | 'click' | 'success'

export default function useSound() {
    const audioContext = useRef<AudioContext | null>(null)

    useEffect(() => {
        // Initialize AudioContext on client side only
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext
        if (AudioContextClass) {
            audioContext.current = new AudioContextClass()
        }
    }, [])

    const play = useCallback((type: SoundType = 'hover') => {
        if (!audioContext.current) return

        // Resume context if suspended (browser policy)
        if (audioContext.current.state === 'suspended') {
            audioContext.current.resume()
        }

        const ctx = audioContext.current
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        const filter = ctx.createBiquadFilter()

        osc.connect(filter)
        filter.connect(gain)
        gain.connect(ctx.destination)

        const now = ctx.currentTime

        if (type === 'hover') {
            // High-pitched short chirp
            osc.type = 'sine'
            osc.frequency.setValueAtTime(800, now)
            osc.frequency.exponentialRampToValueAtTime(1200, now + 0.05)

            gain.gain.setValueAtTime(0.05, now)
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05)

            osc.start(now)
            osc.stop(now + 0.05)
        } else if (type === 'click') {
            // Deeper, more percussive blip
            osc.type = 'triangle'
            osc.frequency.setValueAtTime(300, now)
            osc.frequency.exponentialRampToValueAtTime(50, now + 0.1)

            filter.type = 'lowpass'
            filter.frequency.setValueAtTime(1000, now)
            filter.frequency.linearRampToValueAtTime(100, now + 0.1)

            gain.gain.setValueAtTime(0.2, now)
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1)

            osc.start(now)
            osc.stop(now + 0.1)
        } else if (type === 'success') {
            // Upward chime
            osc.type = 'sine'
            osc.frequency.setValueAtTime(400, now)
            osc.frequency.exponentialRampToValueAtTime(800, now + 0.3)

            gain.gain.setValueAtTime(0.1, now)
            gain.gain.linearRampToValueAtTime(0, now + 0.5)

            osc.start(now)
            osc.stop(now + 0.5)
        }
    }, [])

    return { play }
}
