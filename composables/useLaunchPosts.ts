// Shared plumbing for the launch pages: which content collection belongs to the
// current language, and how dates from frontmatter are rendered.
export type LaunchCollection = 'launch_no' | 'launch_en'

export function useLaunchPosts() {
  const { locale, localeProperties } = useI18n()

  const collection = computed<LaunchCollection>(() =>
    locale.value === 'en' ? 'launch_en' : 'launch_no',
  )

  // "17. mai 2026" / "17 May 2026". Frontmatter dates are quoted ISO strings;
  // anything unparseable is shown as-is rather than as "Invalid Date".
  const formatDate = (value?: string) => {
    if (!value) return ''
    const parsed = new Date(value)
    if (Number.isNaN(parsed.getTime())) return value
    return new Intl.DateTimeFormat(localeProperties.value.language ?? 'nb-NO', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(parsed)
  }

  return { collection, formatDate }
}
