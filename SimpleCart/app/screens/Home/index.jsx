import React from 'react';
import {
	View,
	SafeAreaView,
	ImageBackground
} from 'react-native';
import {
	List, Card,
	Text, Button,
	Icon, Popover, Layout,
	TopNavigationAction
} from '@ui-kitten/components';
import { connect } from 'react-redux';

import { addToCart } from '../../redux/actions/cartActions';

import styles from './styles';

const CartIcon = (style = {}) => (
	<Icon {...style} name='shopping-cart-outline' />
);

const Home = ({ items, addToCart, navigation }) => {

	const [popoverVisible, setPopoverVisible] = React.useState(false);

	const onItemCartPress = (index) => {
		addToCart(index)
		setPopoverVisible(true)
		setTimeout(() => {
			setPopoverVisible(false)
		}, 1000)
	};

	const renderItemFooter = (item) => {
		return (
			<View style={styles.itemFooter}>
				<Text category='s1'>৳ {item.price}</Text>
				<Button
					style={styles.iconButton}
					size='small'
					accessoryRight={CartIcon}
					onPress={() => onItemCartPress(item.id)}
				/>
			</View>
		);
	};

	const renderItemHeader = (item) => (
		<ImageBackground style={styles.itemHeader} source={item.img} />
	);

	const renderProductItem = ({ item }) => (
		<Card
			style={styles.productItem}
			header={() => renderItemHeader(item)}
			footer={() => renderItemFooter(item)}
		>
			<Text category='s1'>{item.title}</Text>
			<Text appearance='hint' category='c1'>
				{item.desc}
			</Text>
		</Card>
	);

	const CartAction = () => {
		return (
			<TopNavigationAction icon={CartIcon} onPress={() => {
				navigation.navigate('Cart');
			}} />
		);
	}

	return (
		<React.Fragment>
			<SafeAreaView style={{ flex: 1 }}>
				<List
					contentContainerStyle={styles.productList}
					data={items}
					numColumns={2}
					renderItem={renderProductItem}
				/>
				<Popover
					visible={popoverVisible}
					anchor={() => <View></View>}
					onBackdropPress={() => setPopoverVisible(false)}>
					<Layout style={styles.popoverContent}>
						<Text>Item added to cart</Text>
					</Layout>
				</Popover>
				<View style={styles.floatingButton}>
					<CartAction />
				</View>
			</SafeAreaView>
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		items: state.items,
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (id) => { dispatch(addToCart(id)) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
