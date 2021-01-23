import { useState } from "react";

// TODO write your custom hook here to control your checkout form

// ! Create localStorage hook

const useLocalStorage = (key, initialValue) => {
	const [storedValue, setStoredValue] = useState(() => {
		// if (localStorage.getItem(key)) {
		const item = window.localStorage.getItem(key);
		// return JSON.parse(loacalStorage.getItem(key));
		return item ? JSON.parse(item) : initialValue;

		// localStorage.setItem(key, initialValue);
		// return initialValue;
	});

	const setValue = (value) => {
		setStoredValue(value);
		localStorage.setItem(key, value);
	};
	return [storedValue, setValue];
};

// ! Compose useForm hook

const useForm = (initialValue) => {
	const [values, setValues] = useLocalStorage("form", initialValue);

	const handleChanges = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	setShowSuccessMessage(true);
	// };
};

export default useForm;
