import { StyleSheet } from 'react-native';

// Dark Knight Minimal Theme Colors
export const colors = {
  // Dark theme
  bg: '#0b0e13',
  panel: '#11161d',
  panel2: '#0f141a',
  text: '#e6e9ef',
  muted: '#98a2b3',
  accent: '#f0c419', // bat-signal gold
  accent2: '#ffd54f',
  ring: 'rgba(240,196,25,0.35)',
  
  // Light theme (for future use)
  bgLight: '#f7f8fa',
  panelLight: '#ffffff',
  panel2Light: '#f3f5f7',
  textLight: '#121418',
  mutedLight: '#4b5563',
  accentLight: '#1f2937',
  accent2Light: '#334155',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  xxxxl: 40,
};

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 18,
  xl: 24,
};

export default StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  
  contentContainer: {
    flex: 1,
    paddingHorizontal: spacing.xxl,
    paddingVertical: spacing.xl,
  },
  
  // Card styles
  card: {
    backgroundColor: colors.panel,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    marginVertical: spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.45,
    shadowRadius: 30,
    elevation: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.04)',
  },
  
  cardPad: {
    padding: spacing.xl,
  },
  
  // Card image and inner padding
  cardImage: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: borderRadius.lg,
    borderTopRightRadius: borderRadius.lg,
  },
  cardInnerPad: {
    padding: spacing.xl,
  },
  
  // Text styles
  text: {
    color: colors.text,
    fontSize: 16,
    lineHeight: 24,
  },
  
  textMuted: {
    color: colors.muted,
    fontSize: 14,
  },
  
  textAccent: {
    color: colors.accent,
    fontSize: 14,
    fontWeight: '600',
  },
  
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.text,
    lineHeight: 36,
    marginVertical: spacing.sm,
  },
  
  h2: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.text,
    marginVertical: spacing.sm,
  },
  
  h3: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginVertical: spacing.sm,
  },
  
  // Button styles
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.ring,
    backgroundColor: 'transparent',
  },
  
  buttonPrimary: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
  },
  
  buttonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '500',
  },
  
  buttonTextPrimary: {
    color: '#111',
    fontWeight: '600',
  },
  
  buttonGhost: {
    backgroundColor: 'transparent',
    borderColor: colors.ring,
  },
  
  // Badge styles
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.ring,
    backgroundColor: 'rgba(240,196,25,0.06)',
  },
  
  badgeText: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0.3,
  },
  
  // Navigation styles
  navContainer: {
    backgroundColor: 'rgba(10,13,18,0.75)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.06)',
    paddingHorizontal: spacing.xxl,
    paddingVertical: spacing.lg,
  },
  
  navContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  
  brandText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    letterSpacing: 0.6,
  },
  
  // Hero section styles
  hero: {
    backgroundColor: colors.panel,
    borderRadius: borderRadius.lg + 6,
    padding: spacing.xxxl,
    marginVertical: spacing.xl,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.45,
    shadowRadius: 30,
    elevation: 8,
  },
  
  kicker: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.3,
  },
  
  lead: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 24,
    marginTop: spacing.md,
  },
  
  // Grid/Column styles
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.lg,
  },
  
  col: {
    flex: 1,
    minWidth: 200,
  },
  
  // Timeline styles
  timeline: {
    marginLeft: spacing.xs,
    paddingLeft: spacing.xl,
  },
  
  timelineItem: {
    marginVertical: spacing.md,
    paddingLeft: spacing.sm,
  },
  
  timelineDate: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: '500',
  },
  
  timelineRole: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
    marginTop: spacing.xs,
  },
  
  // Form styles
  input: {
    backgroundColor: colors.panel2,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    color: colors.text,
    fontSize: 16,
    marginVertical: spacing.sm,
  },
  
  textarea: {
    backgroundColor: colors.panel2,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    color: colors.text,
    fontSize: 16,
    minHeight: 140,
    textAlignVertical: 'top',
    marginVertical: spacing.sm,
  },
  
  // Utility styles
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  flex1: {
    flex: 1,
  },
  
  gap: {
    gap: spacing.md,
  },
  
  gapLg: {
    gap: spacing.lg,
  },
  
  marginTop: {
    marginTop: spacing.lg,
  },
  
  marginBottom: {
    marginBottom: spacing.lg,
  },
  
  // Section styles
  section: {
    paddingVertical: spacing.xxxxl,
  },
  
  // Meta text styles
  meta: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginTop: spacing.sm,
  },
  
  metaText: {
    color: colors.muted,
    fontSize: 13,
  },
  
  // Bullet list styles
  bulletList: {
    marginTop: spacing.sm,
  },
  
  bulletItem: {
    color: colors.text,
    fontSize: 14,
    lineHeight: 20,
    marginVertical: spacing.xs,
  },
  
  // Bold text style
  textBold: {
    fontWeight: '600',
  },
});
