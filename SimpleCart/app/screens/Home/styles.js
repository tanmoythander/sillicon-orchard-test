import {Dimensions} from 'react-native';

const styles = {
	productList: {
		paddingHorizontal: 8,
		paddingVertical: 16,
	},
	productItem: {
		flex: 1,
		margin: 8,
		maxWidth: Dimensions.get("window").width / 2 - 24,
		backgroundColor: "background-basic-color-1",
	},
	itemHeader: {
		height: 140,
	},
	itemFooter: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
	},
	iconButton: {
		paddingHorizontal: 0,
	},
	floatingButton: {
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: '#ccc',
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		bottom: 15,
		right: 15,
	},
	popoverContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
		backgroundColor: '#ccc',
  },
};

export default styles;