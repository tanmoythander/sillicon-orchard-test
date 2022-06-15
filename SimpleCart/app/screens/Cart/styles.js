import { Dimensions } from 'react-native' 

const styles = {
	productList: {
		paddingHorizontal: 8,
		paddingVertical: 16,
		marginBottom: 70
	},
	itemBody: {
		flexDirection: 'row',
		flex: 1
	},
	itemImage: {
		flex: 1
	},
	itemImageBox: {
		width: 60,
		height: 60
	},
	itemName: {
		flex: 3,
		justifyContent: "center",
		alignItems: "center",
	},
	itemFooter: {
		flexDirection: "row",
	},
	footerFirstCol: {
		flex: 1,
		padding: 10,
	},
	footerSecondCol: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: "space-between",
		alignItems: "center",
		padding: 5,
	},
	iconButton: {
		paddingHorizontal: 0,
		margin: 0,
	},
	productItem: {
		flex: 1,
		margin: 8,
		maxWidth: Dimensions.get("window").width - 20,
		backgroundColor: "background-basic-color-1",
	},
	floatingButton: {
		width: '100%',
		height: 65,
		backgroundColor: '#ccc',
		alignItems: 'center',
		justifyContent: 'center',
		border: 'none',
	},
};

export default styles;