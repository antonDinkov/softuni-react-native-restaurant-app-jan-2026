import { Text } from "react-native";

export default function DetailsScreen({ route }) {
    const { itemId } = route.params;

    return (
        <Text>Details Screen for item ID: {itemId}</Text>
    );
}
