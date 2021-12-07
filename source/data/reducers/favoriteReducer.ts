export const reducer = (state = { favorites: [] }, action: any) => {
	switch (action.type) {
		case 'ADD_FAVORİTE':
			return { favorites: [...state.favorites, action.payload] };
		case 'DELETE_FAVORİTE':
			return {
				...state,
				favorites: state.favorites.filter((item) => item !== action.payload),
			};

		default:
			return state;
	}
};
