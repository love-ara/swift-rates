import "./index.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import Dropdown from "react-dropdown";
import { HiSwitchVertical } from "react-icons/hi";
import "react-dropdown/style.css";
import GoToPrevious from "../../components/GoToPrevious";

const SingleConverter = () => {
    const [info, setInfo] = useState([]);
    const [from, setFrom] = useState("ngn");
    const [to, setTo] = useState("usd");
    const [options, setOptions] = useState([]);
    const [output, setOutput] = useState("");
    const [input, setInput] = useState("");

    // function convert() {
        // const rate = info[to];
        // if (!isNaN(input)) {
        //     setOutput((parseFloat(input) * rate).toFixed(4));
        // } else {
        //     setOutput("");
        // }

    // }

    function convert(currentInput = input) {
        const rate = info[to];
        setOutput((currentInput * rate).toFixed(2));
    }


    function flip() {
        const temp = from;
        setFrom(to);
        setTo(temp);
    }

    useEffect(() => {
        Axios.get(
            `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`
        ).then((result) => {
            setInfo(result.data[from]);
        });
    }, [from]);

    useEffect(() => {
        setOptions(Object.keys(info));
        convert();
    }, [info, input]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        const numericValue = value.replace(/\D/g, '');

        if (!isNaN(value)) {
            setInput(value);
        } else {
            setInput(numericValue);
            setOutput("0.00");
        }

        // const value = e.target.value;
        // setInput(value);
        // convert(value);
    };

    return (
        <>
            < GoToPrevious/>
        <div className="single_conversation">
            <div className="title-section">
                <h1 className="title">Currency Converter</h1>
                <p className="sub-title">
                    Check live rates, set rate alerts, receive notifications and more.
                </p>
            </div>

            <div className="conversion-container">
                <div className="conversion-box">
                    <p className="label">Amount</p>
                    <div className="input-group">
                        <Dropdown
                            options={options}
                            onChange={(e) => setFrom(e.value)}
                            value={from}
                            className="dropdown"
                        />
                        <input
                            type="text"
                            className="input"
                            value={input}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                {/*<hr className="separator"/>*/}

                {/*<div className="switch-box" onClick={flip}>*/}

                {/*    <HiSwitchVertical size="30px" className="switch-icon"/>*/}
                {/*</div>*/}


                {/*<hr className="separator"/>*/}
                <div className="switch-box">
                    <hr className="separator"/>
                    <HiSwitchVertical size="30px" className="swap-icon" onClick={flip}/>
                    <hr className="separator"/>
                </div>


                <div className="conversion-box">
                    <p className="label">Converted Amount</p>
                    <div className="input-group">
                        <Dropdown
                            options={options}
                            onChange={(e) => setTo(e.value)}
                            value={to}
                            className="dropdown"
                            controlClassName="dropdown-control"
                            placeholderClassName="dropdown-placeholder"
                            menuClassName="dropdown-menu"
                            style={{
                                border: "none",
                                backgroundColor: "transparent",
                            }}
                        />
                        <input
                            type="text"
                            className="input"
                            value={output}
                            // readOnly
                            placeholder={to}
                        />
                    </div>
                </div>
            </div>

            {/* Exchange Rate Section */}
            <div className="exchange-rate">
                <p className="label">Indicative Exchange Rate</p>
                <p className="rate">
                    1 {from} = {info[to]?.toFixed(4)} {to}
                </p>
            </div>
        </div>
            </>
    );
};

export default SingleConverter;
