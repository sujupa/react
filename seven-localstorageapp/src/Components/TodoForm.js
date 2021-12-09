import React, {useState} from "react";
import {
    FormGroup,
    Input,
    InputGroup,
    Button,
    Form,
    Container
} from "reactstrap";
import {v4} from "uuid";

const TodoForm = ({addTodos}) => {

    const [todoString, setTodoString] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        if(todoString === ""){
            return alert("Please fill some value!");
        }

        const todo = {
            todoString,
            id: v4()
        }

        //TODO:
        addTodos(todo);

        setTodoString("");

    }

    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input type="text" name="todo" id="todo" placeholder="Enter a todo string" value={todoString} onChange={e => setTodoString(e.target.value)}/>
                    <InputGroup addontype="prepend">
                        <Button color="success">Add Todo</Button>
                    </InputGroup>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm;