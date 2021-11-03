/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react"
// import Image from "next/image"
import logo from "../../assets/images/logo.svg"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { incremented, amountAdded } from "../../features/counter2/counter-slice"
import { useFetchBreedsQuery } from "../../features/dogs/dogs-api-slice"
import styles from "../../styles/Home.module.css"

const App = () => {
  /* useEffect(() => {
    return () => {
      console.log("--- RETURN ---")
    }
  }) */
  const count = useAppSelector(state => state.counter2.value)
  const dispatch = useAppDispatch()

  const [numDogs, setNumDogs] = useState(10)
  const { data } = useFetchBreedsQuery(numDogs)

  const handleClick = () => {
    dispatch(amountAdded(100))
    dispatch(incremented())
  }

  return (
    <div className="App">
      <div>
        <img src={logo.src} className={styles.logo} alt="logo" />
        <p>Dogs to fetch</p>
        <select value={numDogs} onChange={e => setNumDogs(Number(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>

      <div>
        <p>Number of dogs fetched: { data?.length }</p>
        <table>
          <tbody>
            {data?.map(dog => (
              <tr key={dog.id}>
                <td>
                  <img src={dog.image.url} alt={dog.name} height={250} />
                  <p>{dog.name}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={handleClick}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
