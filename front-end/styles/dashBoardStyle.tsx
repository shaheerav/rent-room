import { StyleSheet } from "react-native";
export const dashBoardStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  header: {
    marginTop: 20,
  },
  greeting: {
    fontSize: 18,
    color: '#888',
  },
  ownerName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#aaa',
    marginTop: 8,
  },
  cardContainer: {
    padding: 20,
    borderRadius: 12,
    marginTop: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardText: {
    color: '#888',
    fontSize: 14,
  },
  logoutButton: {
    backgroundColor: '#ff4444',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});