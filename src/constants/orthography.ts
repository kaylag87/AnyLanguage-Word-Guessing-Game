import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'i',
  'o',
  'e',
  'b',
  'd',
  'g',
  'h',
  'j',
  'k',
  'm',
  'n',
  'p',
  's',
  't',
  'w',
  'y',
  'z',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
