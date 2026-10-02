import { StyleSheet } from "react-native";
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.four,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.two,
    marginBottom:Spacing.two,
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden', // Forces a clean circular layout for the image
    marginBottom: Spacing.two,
    elevation: 3,       // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: Spacing.three,
    },
  formContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.five,
    borderRadius: Spacing.four,
    backgroundColor: '#f9f9f9', // Clean canvas background card
    borderWidth: 1,
    borderColor: '#eee',
  },
  inputBox: {
    height: 54,
    borderColor: '#e0e0e0',
    borderWidth: 1,
     borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#fff',
  },
  loginButton: {
    height: 54,
    backgroundColor: '#007AFF', // Solid premium primary action color
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Spacing.two,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }], // Subtle micro-interaction on tap
  },
});