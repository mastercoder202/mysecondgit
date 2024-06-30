import React from "react"; // Capitalized "React"
import "./form.css";

const Form = () => {
    return (
        <div>
            <h1>Sign up</h1>
            <form> {/* Changed to lowercase 'form' */}
                Name:
                <input type="text" placeholder="name" /><br />
                Email:
                <input type="email" placeholder="email" /><br />
                Password:
                <input type="password" placeholder="password" /><br />
                Number:
                <input type="number" placeholder="number" /><br />
                <button>Submit</button> {/* Capitalized 'Submit' */}
            </form>
        </div>
    );
};

export default Form;