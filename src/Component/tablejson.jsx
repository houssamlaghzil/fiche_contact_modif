import React from 'react'
import JsonData from './data/csvjson (2).json'
function JsonDataDisplay(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.Project}</td>
                    <td>{info.Phone}</td>
                    <td>{info.Email}</td>
                </tr>
            )
        }
    )

    return(
        <div>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>Sr.NO</th>
                    <th>Name</th>
                    <th>City</th>
                </tr>
                </thead>
                <tbody>


                {DisplayData}

                </tbody>
            </table>

        </div>
    )
}

export default JsonDataDisplay;
