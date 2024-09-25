/**
 * represent the settings: choose row, colum, and delay of the game (Form) in the home page.
 * @param inputs the rows, column, and the delay inputs
 * @param setInputs the function setter of the inputs
 * @param result result if the inputted settings are valid or not
 * @param setResult result setter function
 * @returns {JSX.Element}
 * @constructor
 */

export default function Settings({inputs, setInputs, result, setResult}) {

    const error = (
        <div className="invalid-feedback">
            Number of cards (rows X columns) must be even, please correct your choice.
        </div>
    );

    /**
     * handle the change in the inputs fields.
     * update the fields according to the input.
     * if the multiplication of the columns and
     * the rows input is odd number. show error message.
     * by setting the result to the last field input change.
     * @param event the change in the inputs
     */
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));

        const { row, col } = inputs;
        if (name !== "delay")
            if ((parseInt(name === "row" ? value : row) *
                parseInt(name === "col" ? value : col)) % 2 !== 0)
                setResult(name);
            else
                setResult('');
    };

    return (
        <div>
            <br></br>
            <form className="row g-3">
                <div className="col-md-6">
                    <label className="form-label"> Number Of Rows: </label>
                    <select name="row"
                        className={`form-select form-control ${result === "row" ? 'is-invalid' : ''}`}
                        value={inputs.row}
                        onChange={handleChange}>

                        {[...Array(4)].map((_, i) => (
                            <option key={i + 2} value={i + 2}>{i + 2}</option>
                        ))}

                    </select>

                    {result === 'row' && error}

                </div>

                <div className="col-md-6">
                    <label className="form-label"> Number Of Columns: </label>
                    <select name="col"
                        className={`form-select form-control ${result === "col" ? 'is-invalid' : ''}`}
                        value={inputs.col}
                        onChange={handleChange}>

                        {[...Array(4)].map((_, i) => (
                            <option key={i + 2} value={i + 2}>{i + 2}</option>
                        ))}

                    </select>

                    {result === 'col' && error}

                </div>

                <div className="col-md-3">
                    <label className="form-label"> Delay (in seconds): </label>
                    <select name="delay" className="form-select"
                            value={inputs.delay} onChange={handleChange}>

                        {[0.5, 1, 1.5, 2].map((num) => (
                            <option key={num} value={num}>{num}</option>
                        ))}

                    </select>
                </div>
            </form>
        </div>
    );
};