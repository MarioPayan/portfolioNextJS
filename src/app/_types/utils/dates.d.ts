interface DateDiff {
  (dateA: string, dateB: string, onlyYears?: boolean): string
}

interface ChangeDateFormat {
  (date: string, language?: string): string
}
