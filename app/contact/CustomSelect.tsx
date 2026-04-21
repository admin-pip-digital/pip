'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, ChevronDown } from 'lucide-react'

type Props = {
  id: string
  name: string
  options: string[]
  placeholder?: string
  required?: boolean
  onValueChange?: (value: string) => void
}

export default function CustomSelect({
  id,
  name,
  options,
  placeholder = 'Choose one',
  required = false,
  onValueChange,
}: Props) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const [highlight, setHighlight] = useState(0)
  const rootRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const typedRef = useRef('')
  const typedTimerRef = useRef<number | null>(null)

  useEffect(() => {
    if (!open) return
    function onDocMouse(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDocMouse)
    return () => document.removeEventListener('mousedown', onDocMouse)
  }, [open])

  useEffect(() => {
    if (open) {
      const idx = value ? options.indexOf(value) : 0
      setHighlight(idx >= 0 ? idx : 0)
    }
  }, [open, value, options])

  function commit(option: string) {
    setValue(option)
    onValueChange?.(option)
    setOpen(false)
    buttonRef.current?.focus()
  }

  function handleTypeahead(key: string): boolean {
    if (key.length !== 1) return false
    if (typedTimerRef.current) window.clearTimeout(typedTimerRef.current)
    typedRef.current = (typedRef.current + key).toLowerCase()
    typedTimerRef.current = window.setTimeout(() => {
      typedRef.current = ''
    }, 500)
    const match = options.findIndex((o) =>
      o.toLowerCase().startsWith(typedRef.current),
    )
    if (match >= 0) {
      setHighlight(match)
      return true
    }
    return false
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (!open) {
      if (['Enter', ' ', 'ArrowDown', 'ArrowUp'].includes(e.key)) {
        e.preventDefault()
        setOpen(true)
      }
      return
    }
    switch (e.key) {
      case 'Escape':
        e.preventDefault()
        setOpen(false)
        buttonRef.current?.focus()
        break
      case 'Enter':
      case ' ':
        e.preventDefault()
        if (highlight >= 0) commit(options[highlight])
        break
      case 'ArrowDown':
        e.preventDefault()
        setHighlight((h) => (h + 1) % options.length)
        break
      case 'ArrowUp':
        e.preventDefault()
        setHighlight((h) => (h - 1 + options.length) % options.length)
        break
      case 'Home':
        e.preventDefault()
        setHighlight(0)
        break
      case 'End':
        e.preventDefault()
        setHighlight(options.length - 1)
        break
      case 'Tab':
        setOpen(false)
        break
      default:
        if (handleTypeahead(e.key)) e.preventDefault()
    }
  }

  const listboxId = `${id}-listbox`
  const activeOptionId =
    open && highlight >= 0 ? `${id}-option-${highlight}` : undefined

  return (
    <div ref={rootRef} className="relative">
      <select
        name={name}
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        tabIndex={-1}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
      >
        <option value=""></option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>

      <button
        ref={buttonRef}
        id={id}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-activedescendant={activeOptionId}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onKeyDown}
        className="relative z-10 w-full flex items-center justify-between border border-neutral-300 rounded-xl pl-4 pr-4 py-3 text-base bg-white focus:outline-none focus:border-neutral-700 transition-colors text-left cursor-pointer"
      >
        <span className={value ? 'text-neutral-900' : 'text-neutral-500'}>
          {value || placeholder}
        </span>
        <ChevronDown
          className={`w-3 h-3 text-neutral-500 shrink-0 ml-3 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
          strokeWidth={1.75}
        />
      </button>

      {open && (
        <ul
          id={listboxId}
          role="listbox"
          aria-labelledby={id}
          className="absolute left-0 right-0 top-full mt-2 z-30 rounded-xl border border-neutral-300 bg-white shadow-lg overflow-hidden max-h-72 overflow-y-auto"
        >
          {options.map((o, i) => {
            const selected = o === value
            const highlighted = i === highlight
            return (
              <li
                key={o}
                id={`${id}-option-${i}`}
                role="option"
                aria-selected={selected}
                onMouseEnter={() => setHighlight(i)}
                onMouseDown={(e) => {
                  e.preventDefault()
                  commit(o)
                }}
                className={`px-4 py-3 text-base flex items-center justify-between cursor-pointer transition-colors ${
                  highlighted ? 'bg-neutral-100' : 'bg-white'
                }`}
              >
                <span>{o}</span>
                {selected && (
                  <Check
                    className="w-4 h-4 text-neutral-700 shrink-0 ml-3"
                    strokeWidth={1.75}
                  />
                )}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
