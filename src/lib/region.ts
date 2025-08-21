export type Region = "us" | "ca"

export const calendlyByRegion: Record<Region, string> = {
  us: "https://calendly.com/<<CLAIRE_US_LINK>>/15min",
  ca: "https://calendly.com/<<IVAN_CA_LINK>>/15min"
}

export const getCalendlyUrl = (region: Region): string => {
  return calendlyByRegion[region]
} 