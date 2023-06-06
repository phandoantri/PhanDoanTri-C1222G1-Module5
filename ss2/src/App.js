import logo from './logo.svg';
import './App.css';
import "./index.css"
import students from "./data/index"

function App() {
    return (

        <>
            <h1>Student</h1>
            <table>
                <thead>
                <tr>
                    <th>Company</th>
                    <th>ConTact</th>
                    <th>Country</th>
                </tr>

                {students.map((student, index) => (
                    <tr key={index}>
                        <td>{student.company}</td>
                        <td>{student.contact}</td>
                        <td>{student.country}</td>
                    </tr>
                ))}
                </thead>
            </table>
        </>
    );
}

export default App;
