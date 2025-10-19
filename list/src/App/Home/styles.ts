import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9fb',
    alignItems: 'center',
    paddingTop: 60,
    gap: 30
  },
  logo: {
    height: 124,
    width: 134
  },
  form: {
    width: "100%",
    paddingHorizontal: 16,
    marginTop: 30,
    gap: 10
  },
  content: {
    flex: 1,
    width: "100%",
    backgroundColor: "#c4c2",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    marginTop: 24,
     paddingTop: 32
  },
  header: {
    flexDirection: 'row',
    width: "100%",
    gap: 12,
    borderBottomWidth: 1,
    borderBlockColor: "",
    paddingBottom: 12,
  },
  clearButton: {
    marginLeft: 'auto'
  },
  clearText: {
    fontSize: 12,
    fontWeight: 600,
    color: "#828282",
  }
});
