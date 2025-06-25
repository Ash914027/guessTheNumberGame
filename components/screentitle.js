
import { View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

function Screentitle() {
return (
    <View
        style={{
            backgroundColor: 'linear-gradient(90deg, #a1c4fd 0%, #c2e9fb 100%)',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 28,
            borderRadius: 16,
            elevation: 8,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.25,
            shadowRadius: 8,
            marginHorizontal: 24,
            marginTop: 32,
            marginBottom: 16,
            borderWidth: 1,
            borderColor: '#b3b3b3',
        }}
    >
        <Text
            style={{
                fontSize: 34,
                fontWeight: 'bold',
                color: '#6a11cb',
                textAlign: 'center',
                letterSpacing: 1,
                textShadowColor: '#fff',
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 2,
                marginBottom: 4,
            }}
        >
            Guess the Number
        </Text>
       
    </View>
)
}

export default Screentitle