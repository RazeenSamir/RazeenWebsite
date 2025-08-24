// App.js
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Button } from "react-native";

const Stack = createNativeStackNavigator();

function Home({ navigation }) {
  return (
    <View style={{ flex:1, alignItems:"center", justifyContent:"center" }}>
      <Text>Home</Text>
      <Button title="Go to About" onPress={() => navigation.navigate("About")} />
    </View>
  );
}

function About() {
  return (
    <View style={{ flex:1, alignItems:"center", justifyContent:"center" }}>
      <Text>About</Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Welcome to Razeen's Website, Summer 2026 Google Intern InshaAllah</Text>
      </View>
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
}
