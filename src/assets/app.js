import { StyleSheet } from "react-native";

const appstyles = StyleSheet.create({
    gradient: {
      flex: 1,
    },
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
      paddingVertical: 40,
    },
    logoHeader: {
      alignItems: 'center',
      marginBottom: 0,
    },
    logo: {
      width: 200,
      height: 200,
      borderRadius: 10,
      marginBottom: 0,
      resizeMode:'contain'
    },
    appName: {
      fontSize: 20,
      fontWeight: '700',
      color: '#222',
    },
    appSubtitle: {
      fontSize: 14,
      color: '#666',
    },
  
    card: {
      backgroundColor: 'rgba(255,255,255,0.9)',
      borderRadius: 20,
      padding: 20,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 3,
    },
    welcome: {
      fontSize: 20,
      color: '#4caf50',
      marginBottom: 4,
    },
    brand: {
      fontSize: 26,
      fontWeight: '700',
      color: '#b74177',
      marginBottom: 20,
    },
  
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 25,
      paddingVertical: 12,
      paddingHorizontal: 16,
      fontSize: 16,
      backgroundColor: '#fff',
      marginBottom: 16,
    },
    passwordRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    eyeButton: {
      position: 'absolute',
      right: 16,
    },
    eyeIcon: { fontSize: 18 },
  
    rowBetween: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    remember: { fontSize: 14, color: '#555' },
    link: { fontSize: 14, color: '#4caf50', fontWeight: '600' },
  
    loginBtn: {
      backgroundColor: '#6da96b',
      borderRadius: 25,
      paddingVertical: 14,
      alignItems: 'center',
      marginBottom: 20,
    },
    loginBtnText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '700',
    },
  
    signupText: {
      fontSize: 14,
      color: '#444',
      textAlign: 'center',
      marginBottom: 20,
    },
  
    dividerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    divider: {
      flex: 1,
      height: 1,
      backgroundColor: '#ccc',
    },
    dividerText: {
      marginHorizontal: 8,
      fontSize: 12,
      color: '#777',
    },
  
    socialRow: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    socialBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f3f3f3',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 30,
    },
    socialIcon: {
      width: 20,
      height: 20,
      marginRight: 8,
      resizeMode: 'contain',
    },
    socialText: { fontSize: 16, color: '#333' },
  });
  

export default appstyles;