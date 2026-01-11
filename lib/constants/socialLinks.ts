export const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/yourusername',
  LINKEDIN: 'https://linkedin.com/in/yourusername',
  TWITTER: 'https://twitter.com/yourusername',
} as const;

export type SocialPlatform = keyof typeof SOCIAL_LINKS;