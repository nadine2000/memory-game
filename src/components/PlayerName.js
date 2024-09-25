/**
 * represent the input field in the home page
 * @param name player name
 * @param setName player name setter function
 * @param result valid name or not
 * @param setResult player name valid name setter function
 * @returns {JSX.Element}
 * @constructor
 */
export default function PlayerName({name, setName, result, setResult}) {
    /**
     * handle the change in the name input field.
     * set the result to true if the name is alphanumeric.
     * false if not.
     * @param event
     */
    const handleChange = (event) => {
        const updatedName = event.target.value.trim().toLowerCase();
        setName(updatedName);
        setResult(/^[a-zA-Z0-9]+$/.test(event.target.value) || event.target.value === '');
    }

    return (
        <>
            <br></br>
            <form>
                <label className="form-label h4">Your Name:</label>
                <input
                    type="text" name="username" value={name || ""}
                    onChange={handleChange}
                    className={`form-control ${!result && 'is-invalid'}`}
                    placeholder="your name including letters and digits only"
                    maxLength="12" required
                />

                {
                    !result && (<div className="invalid-feedback">
                        Your name cannot contain non-alphanumeric characters.</div>)
                }

            </form>
            <br></br>
        </>
    );
}