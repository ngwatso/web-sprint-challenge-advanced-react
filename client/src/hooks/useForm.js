import { useState, Component } from "react";

// TODO write your custom hook here to control your checkout form

// ! Create localStorage hook

const useLocalStorage = (key, initialValue) => {
	const [storedValue, setStoredValue] = useState(() => {
		if (localStorage.getItem(key)) {
			return JSON.parse(localStorage.getItem(key));
		}
		localStorage.setItem(key, JSON.stringify(initialValue));
		return initialValue;
	});

	const setValue = (value) => {
		setStoredValue(value);
		localStorage.setItem(key, JSON.stringify(value));
	};
	return [storedValue, setValue];
};

// ! Compose useForm hook

const useForm = (initialValue) => {
	const [values, setValues] = useLocalStorage("form", initialValue);

	const handleChanges = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	return [values, handleChanges];
};

export default useForm;
