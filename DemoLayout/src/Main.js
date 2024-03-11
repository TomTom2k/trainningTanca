import {
	StyleSheet,
	View,
	Text,
	Image,
	FlatList,
	Button,
	TextInput,
} from 'react-native';
import React, { useEffect, useState } from 'react';

const DATA = [
	{
		id: '1',
		item: 2,
	},
	{
		id: '2',
		item: 5,
	},
	{
		id: '3',
		item: 7,
	},
	{
		id: '4',
		item: 3,
	},
	{
		id: '5',
		item: 1,
	},
];

const Main = () => {
	const [value, setValue] = useState(0);
	const [total, setTotal] = useState(0);
	const [data, setData] = useState(DATA);

	const handlerInput = (text) => {
		setValue(text);
	};
	const handlerBtnGreen = (item) => {
		setValue(parseInt(item) + parseInt(value));
	};
	const handlerBtnBlue = (id) => {
		const dataIndex = data.findIndex((item) => item.id === id);
		if (dataIndex !== -1) {
			const newData = [...data];
			const currentItem = newData[dataIndex];
			const newItem = { id: Math.random, item: value };
			newData.splice(dataIndex + 1, 0, newItem);
			setData(newData);
		}
	};
	const handlerBtnRed = (id) => {
		const updatedData = data.filter((d) => d.id !== id);
		setData(updatedData);
	};

	useEffect(() => {
		const sum = data.reduce((acc, cur) => acc + parseInt(cur.item), 0);
		setTotal(sum);
	}, [data]);

	return (
		<View style={{ padding: 20 }}>
			<View
				style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}
			>
				<Image
					source={require('./assets/OIP.jpeg')}
					style={{ width: 100, height: 100 }}
				/>
				<View>
					<Text>Họ và tên: Nguyễn Thành Tín</Text>
					<Text>MSSV: 21092081</Text>
				</View>
			</View>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					marginTop: 20,
				}}
			>
				<TextInput
					editable
					value={value + ''}
					maxLength={40}
					onChangeText={(text) => handlerInput(text)}
					style={{ borderWidth: 1, borderColor: 'black', width: 200 }}
					keyboardType="numeric"
				/>
				<Text style={{ fontSize: 24, fontWeight: '500' }}>
					Total: {parseInt(total) + parseInt(value)}
				</Text>
			</View>
			<FlatList
				style={{
					borderWidth: 1,
					borderColor: 'black',
					paddingHorizontal: 10,
					borderRadius: 2,
				}}
				data={data}
				renderItem={({ item }) => (
					<View
						style={{
							marginBottom: 10,
							marginTop: 10,
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							backgroundColor: '#F0F8FF',
							borderRadius: 5,
							padding: 5,
						}}
					>
						<Text>{item.item}</Text>
						<View style={{ flexDirection: 'row', gap: 10 }}>
							<Button
								title="GREEN"
								color="green"
								onPress={() => handlerBtnGreen(item.item)}
							/>
							<Button
								title="BLUE"
								color="blue"
								onPress={() => handlerBtnBlue(item.id)}
							/>
							<Button
								title="RED"
								color="red"
								onPress={() => handlerBtnRed(item.id)}
							/>
						</View>
					</View>
				)}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

export default Main;
