
import { Label, Btn, Input, FormEl } from "./Form.styled";
import { useState } from "react";


const Form = ({addContact}) => {
   
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')


    const reset = () => {
        setName('')
        setNumber('')
    }

    const handleChange = ({ target: { value, name } }) => {
       
        if (name === "name") {
          setName(value)
        }
        if (name === "number") {
            setNumber(value)
        }
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        addContact(name, number)
        reset();
    }

    return (
            <FormEl onSubmit={onSubmitForm}>
                <Label>  {"Name"}
                    <Input
                        onChange={handleChange}
                        type="text"
                        name="name"
                        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        value={name}
                        required>
                    </Input>
                </Label>
                <Label> {"Number"}
                    <Input
                        onChange={handleChange}
                        type="tel"
                        name="number"
                        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        value={number}
                        required>
                    </Input>
                </Label>
                <Btn type="submit" name="submit">Add contact</Btn>
            </FormEl>
        )
}


export default Form;
