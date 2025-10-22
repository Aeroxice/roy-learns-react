import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
const apps = ["Counter", "Temperature Converter", "No More Apps"]
    const [currentApp, setCurrentApp] = useState(0)

    function handleApp(){
        setCurrentApp(currentApp + 1)
        if(currentApp + 1 >= apps.length){
            setCurrentApp(0)
            setCount(0)
        }
    }

    if (currentApp === 0){
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
        return (
            <>
                <h1>Roy Learns React</h1>
                <h2>{apps[currentApp]}</h2>
                <ul className={'list'}>
                    <li>
                        <input type="number" id="Celsius" name="Celsius"/> Celsius = <input type="number" id="Fahrenheit" name="Fahrenheit"/> Fahrenheit
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
    }

}

export default App
