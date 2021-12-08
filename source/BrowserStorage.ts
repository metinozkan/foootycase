export const BrowserStorage = {
	getItem<T>(itemName: string): T | null {
		if (typeof window !== 'undefined') {
			const item: string | null = window.localStorage.getItem(itemName) || null;
			return item == null ? null : JSON.parse(item);
		} else return null;
	},
	setItem: (itemName: string, value: any): void => {
		if (typeof window !== 'undefined') {
			window.localStorage.setItem(itemName, JSON.stringify(value));
		}
	},
	removeItem: (itemName: string): void => {
		if (typeof window !== 'undefined') {
			window.localStorage.removeItem(itemName);
		}
	},
};
