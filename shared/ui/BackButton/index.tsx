import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { styles } from "./styles";

interface BackButtonProps {
  backNavigation: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ backNavigation }) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.navigate(backNavigation)}
    >
      <FontAwesomeIcon style={styles.iconButton} icon={faChevronLeft} />
      <Text style={styles.buttonText}>Назад</Text>
    </TouchableOpacity>
  );
};
