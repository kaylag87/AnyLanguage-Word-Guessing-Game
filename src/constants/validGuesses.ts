import { CONFIG } from './config'

export const VALIDGUESSES = [
  'aapta',
  'niizh',
  'ziibi',
  'damna',
  'nakii',
  'maage',
  'waabi',  
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
