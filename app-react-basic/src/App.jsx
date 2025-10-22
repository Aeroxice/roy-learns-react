import { useState, useRef } from 'react'
import './App.css'

function App() {
    //Switch Apps
    const apps = ["Counter", "Temperature Converter", "Timer", "No More Apps"]
    const [currentApp, setCurrentApp] = useState(0)

    //Counter
    const [count, setCount] = useState(0)

    //Temperature Converter
    const celsiusRef = useRef(null)
    const fahrenheitRef = useRef(null)

    //Switch Apps
    function handleApp(){
        setCurrentApp(currentApp + 1)
        if(currentApp + 1 >= apps.length){
            setCurrentApp(0)
            setCount(0)
        }
    }

    //Temperature Converter
    function updateFahrenheit(){
        const celsiusTemp = parseFloat(celsiusRef.current.value)
        fahrenheitRef.current.value = parseFloat(celsiusTemp * (9/5) + 32)
    }

    function updateCelcius(){
        const fahrenheitTemp = parseFloat(fahrenheitRef.current.value)
        celsiusRef.current.value = parseFloat((fahrenheitTemp - 32) * (5/9))
    }


    //Switch Apps
    if (currentApp === 0){
        //Counter
        return (
            <>
                <h1>Roy Learns React</h1>
                <h2>{apps[currentApp]}</h2>
                <ul className={`list`}>
                    <li>
                        <button className={'button'} onClick={() => setCount(count + 1)}>
                            count is {count}
                        </button>
                    </li>
                    <li>
                        <button className={'button'} onClick={() => handleApp()}>
                            Next app
                        </button>
                    </li>
                </ul>
            </>
        )
    } else if (currentApp === 1){
        //Temperature Converter
        return (
            <>
                <h1>Roy Learns React</h1>
                <h2>{apps[currentApp]}</h2>
                <ul className={'list'}>
                    <li>
                        <input type="number" ref={celsiusRef} name="Celsius" onInput={updateFahrenheit}/> Celsius = <input type="number" ref={fahrenheitRef} name="Fahrenheit" onInput={updateCelcius}/> Fahrenheit
                    </li>
                    <li>
                        <button className={'button'} onClick={() => handleApp()}>
                            Next app
                        </button>
                    </li>
                </ul>
            </>
        )
    }else if(currentApp === 2){
        return (
            <>
                <h1>Roy Learns React</h1>
                <h2>{apps[currentApp]}</h2>
                <ul className={`list`}>
                    <li>
                        <button className={'button'} onClick={() => setCount(count + 1)}>
                            count is {count}
                        </button>
                    </li>
                    <li>
                        <button className={'button'} onClick={() => handleApp()}>
                            Next app
                        </button>
                    </li>
                </ul>
            </>
        )
    }else if(currentApp === 3){
    return (
        <>
            <h1>Roy Learns React</h1>
            <h2>{apps[currentApp]}</h2>
            <ul className={`list`}>
                <li>
                    <button className={'button'} onClick={() => handleApp()}>
                        First app
                    </button>
                </li>
            </ul>
        </>
    )
}

}

export default App
