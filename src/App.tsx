import { FormEvent, useState } from 'react';
import './App.css';
import Result from './Result';

interface FormElements extends HTMLFormControlsCollection {
  emailLength: HTMLInputElement;
}

function App() {
  const [length, setLength] = useState(0);

  return (
    <div className="app">
      <main style={{ maxWidth: '800px', margin: 'auto' }}>
        <h2>Lengthy Email generator </h2>
        <p>
          <a href="https://www.rfc-editor.org/rfc/rfc3696#page-5" target="_blank">
            From RFC documentation -
          </a>
          In addition to restrictions on syntax, there is a length limit on email
          addresses. That limit is a maximum of 64 characters (octets) in the "local part"
          (before the "@") and a maximum of 255 characters (octets) in the domain part
          (after the "@") for a total length of 320 characters. Systems that handle email
          should be prepared to process addresses which are that long, even though they
          are rarely encountered.
        </p>
        <form
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const elements = e.currentTarget.elements as FormElements;
            setLength(parseInt(elements.emailLength.value));
          }}
        >
          <label>
            Enter email length
            <input type="number" name="emailLength" id="emailLength" />
          </label>
          <button>Generate</button>
        </form>
        <Result length={length} />
      </main>
    </div>
  );
}

export default App;
