import React from "react";
import axios from "axios";
import {getCovidList} from "./app/mock-data/data";


export default function CovidList() {
    return(
        <table>
            <thead>
            <tr>
                <th>Date</th>
                <th>Deaths</th>
                <th>Treating</th>
                <th>cases</th>
                <th>recovered</th>
            </tr>
            </thead>
            <tbody>
            {
                getCovidList().map((covid,index)=>(
                    <tr key={index}>
                        <td>{covid.date}</td>
                        <td>{covid.death}</td>
                        <td>{covid.treating}</td>
                        <td>{covid.cases}</td>
                        <td>{covid.recovered}</td>
                    </tr>
                ))
            }

            </tbody>

        </table>
    )

}
// export const getStaticProps=async ()=>{
//     const respone=await axios.get('https://api.apify.com/v2/key-value-stores/EaCBL1JNntjR3EakU/records/LATEST?disableRedirect=true/overview')
//     return {
//         props:{
//             covidList:respone.data
//         }
//     }
// }