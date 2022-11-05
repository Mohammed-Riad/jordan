import { margin } from '@mui/system';
import React from 'react';
import * as data from './data2'
// import Tours from './Tours';

export default function Tours() {
    // test();
    // 👇️ filter with 1 condition
    // const filtered = newSeries.filter(Series => {
    //     return Series.rating === 5.0;
    // });
    return (
        <div style={{ display: "flex", marginTop: "20px" }}>
            {data.City.map(Series => {
                return (
                    <>
                        <div class="card" style={{ width: "300px", margin: "5px" }}>
                            <img src={Series.image} class="card-img-top" alt="Fissure in Sandstone" />
                            <div class="card-body">
                                <h5 class="card-title">Title :{Series.name}</h5>
                                <button>View</button>
                            </div>
                        </div>
                    </>
                );
            })}
        </div>
    );
}