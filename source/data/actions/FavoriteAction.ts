import { store } from '../../store';

export const FavoriteAction = {
	addFavorite: (payload: any) => store.dispatch({ type: 'ADD_FAVORİTE', payload }),
	deleteFavorite: (payload: any) => store.dispatch({ type: 'DELETE_FAVORİTE', payload }),
};
