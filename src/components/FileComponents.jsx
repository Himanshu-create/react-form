import { useState } from "react";


function FileComponents() {

	const [formData, setForm] = useState({ name: "", email: "", graduation: "2023", areYouDisabled: false })

	const handleChange = (event) => {
		const { name, value } = event.target;
		setForm((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

	const handlChangeChecked = (event) => {
		setForm((prevFormData) => ({ ...prevFormData, areYouDisabled : event.target.checked }));
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(`Name: ${formData.name}, Email: ${formData.email}, graduation: ${formData.graduation}, disabled : ${formData.areYouDisabled}`);
	}

	return (
		<center>
			<h1>FORM</h1>
			<br></br>
		
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">Name : </label>
			<input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
				<br />
			<br></br>

			<label htmlFor="email">Email : </label>
			<input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
				<br />
				<br></br>

			<label>
				Select an option:
				<select name= "graduation" value={formData.graduation} onChange={handleChange}>
					<option value="2023">2023</option>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
				</select>
			</label>
				<br />
				<br></br>

			<label htmlFor="areYouDisabled">
				<input type="checkbox" name="areYouDisabled" checked={formData.areYouDisabled} onChange={handlChangeChecked} />
				Are You Disabled
			</label>
				<br />
				<br></br>

			<button type="submit" onSubmit={handleSubmit}>Submit</button>


			</form>
		</center>
	)
}

export default FileComponents;