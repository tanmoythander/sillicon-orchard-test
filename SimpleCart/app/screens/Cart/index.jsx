import React from 'react';
import {
	View, Image,
	SafeAreaView
} from 'react-native';
import {
	List, Card,
	Text, Button, Icon
} from '@ui-kitten/components';
import { connect } from 'react-redux';

import { removeItem, addQuantity, subtractQuantity, removeAll } from '../../redux/actions/cartActions';

import styles from './styles';

const MinusIcon = (style = {}) => <Icon {...style} name='minus' />;
const PlusIcon = (style = {}) => <Icon {...style} name='plus' />;
const CloseIcon = (style) => <Icon {...style} name='close' />;

const Cart = ({
	items, total,
	removeItem, addQuantity,
	subtractQuantity, removeAll,
	navigation
}) => {

	const renderItemFooter = (item) => {
		return (
			<View style={styles.itemFooter}>
				<View style={styles.footerFirstCol}>
					<Text category='s1'>Total Price: ৳ {item.price * item.quantity}</Text>
				</View>
				<View style={styles.footerSecondCol}>
					<Button
						style={styles.iconButton}
						size='small'
						status='danger'
						accessoryRight={CloseIcon}
						onPress={() => { removeItem(item.id) }}
					/>
					<Button
						style={styles.iconButton}
						size='small'
						accessoryRight={MinusIcon}
						onPress={() => { subtractQuantity(item.id) }}
					/>
					<Text appearance='hint' category='c1'>{item.quantity}</Text>
					<Button
						style={styles.iconButton}
						size='small'
						accessoryLeft={PlusIcon}
						onPress={() => { addQuantity(item.id) }}
					/>
				</View>
			</View>
		);
	};

	const renderProductItem = ({ item }) => (
		<Card
			style={styles.productItem}
			footer={() => renderItemFooter(item)}
		>
			<View style={styles.itemBody}>
				<View style={styles.itemImage}>
					<Image source={item.img} style={styles.itemImageBox} />
				</View>
				<View style={styles.itemName}>
					<Text category='s1'>{item.title}</Text>
					<Text appearance='hint' category='c1'>Unit Price: ৳ {item.price}</Text>
				</View>
			</View>
		</Card>
	);

	return (
		<React.Fragment>
			<SafeAreaView style={{ flex: 1 }}>
				{items.length ? <List
					contentContainerStyle={styles.productList}
					data={items}
					numColumns={1}
					renderItem={renderProductItem}
				/> : <Text>Your cart is empty</Text>}
				{items.length ? <Button
					style={styles.floatingButton}
					onPress={() => {
						removeAll();
						navigation.navigate('Products')
					}}
				>
					<Text appearance='hint' category='c1'>Check Out (৳ {total})</Text>
				</Button> : null}
			</SafeAreaView>
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		items: state.addedItems,
		total: state.total
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		removeItem: (id) => { dispatch(removeItem(id)) },
		addQuantity: (id) => { dispatch(addQuantity(id)) },
		subtractQuantity: (id) => { dispatch(subtractQuantity(id)) },
		removeAll: () => { dispatch(removeAll()) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
