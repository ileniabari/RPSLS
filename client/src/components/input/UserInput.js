import './UserInput.css'

function userInput() {

    return (
        <form>
            <label for="name" className="inputLabel">Insert your name</ label>
            <input type="text" name="name" />
            <button>Send</button>
        </form>

    )
}



export { userInput }