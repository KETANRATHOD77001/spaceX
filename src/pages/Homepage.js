import "../styles/Homepage.css";
import React, { useState, useEffect } from 'react';
import Layout from "../components/Layout";

const HomePage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches?limit=100')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);

    const filter2006 = async () => {
        fetch('https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2006')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    };
    const filter2007 = async () => {
        fetch('https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2007')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    };
    const filter2008 = async () => {
        fetch('https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2008')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    };
    const filter2009 = async () => {
        fetch('https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2009')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    };

    const filter2010 = async () => {
        fetch('https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2010')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    };
    const filter2011 = async () => {
        fetch('https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2011')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    };
    const filter2012 = async () => {
        fetch('https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2012')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    };
    const filter2013 = async () => {
        fetch('https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2013')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    };
    const filter2014 = async () => {
        fetch('https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    };
    const filter2015 = async () => {
        fetch('https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2015')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    };
    const filter2016 = async () => {
        fetch('https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2016')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    };
    const filter2017 = async () => {
        fetch('https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2017')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    };
    const filter2018 = async () => {
        fetch('https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2018')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    };
    const filter2019 = async () => {
        fetch('https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2019')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    };
    const filter2020 = async () => {
        fetch('https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2020')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    };



    const filterlaunch1 = async () => {
        fetch('https://api.spacexdata.com/v3/launches?limit=100&launch_success=true')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    };
    const filterlaunch2 = async () => {
        fetch('https://api.spacexdata.com/v3/launches?limit=100&launch_success=false')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    };
    const filterland1 = async () => {
        fetch('https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    };
    const filterland2 = async () => {
        fetch('https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=false')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    };

    return (
        <Layout>
            <div class="row">
                <div class="side">
                    <div className="left-a">
                        <h2 className="fil-title">Filters</h2>
                        <div className="filters left-b">
                            <h4 className="text-center filter-title">  Launch Year  </h4>
                            <div className="btns">
                                <button onClick={filter2006}>2006</button>
                                <button onClick={filter2007}>2007</button>
                                <button onClick={filter2008}>2008</button>
                                <button onClick={filter2009}>2009</button>
                                <button onClick={filter2010}>2010</button>
                                <button onClick={filter2011}>2011</button>
                                <button onClick={filter2012}>2012</button>
                                <button onClick={filter2013}>2013</button>
                                <button onClick={filter2014}>2014</button>
                                <button onClick={filter2015}>2015</button>
                                <button onClick={filter2016}>2016</button>
                                <button onClick={filter2017}>2017</button>
                                <button onClick={filter2018}>2018</button>
                                <button onClick={filter2019}>2019</button>
                                <button onClick={filter2020}>2020</button>

                            </div>

                            <h4 className="text-center mt-4 filter-title">  Successful Launch  </h4>
                            <div className="btns">
                                <button onClick={filterlaunch1}>True</button>
                                <button onClick={filterlaunch2}>False</button>
                            </div>

                            <h4 className="text-center mt-4 filter-title"> Successful Landing </h4>
                            <div className="btns">
                                <button onClick={filterland1}>True</button>
                                <button onClick={filterland2}>False</button>
                            </div>

                        </div>

                    </div>
                </div>
                <div class="main">
                    <div className="home-page flex-container">
                        {data.map((post) => {
                            return (
                                <div className="box">
                                    <img
                                        src={post.links.mission_patch}
                                    /> <br /><br />
                                    <span className="data-value ms-name">{post.mission_name} #{post.flight_number}</span> <br /><br />
                                    <span className="data-value">Mission Ids:</span>
                                    <ul className="data-ul">
                                        {post.mission_id.map((a) => {
                                            return (
                                                <li>{a}</li>
                                            )
                                        })}
                                    </ul>

                                    <span className="data-value">Launch Year:</span> {post.launch_year} <br />
                                    <span className="data-value">Successful Launch:</span>
                                    {post.launch_success ? ' true' : ' false'} <br />

                                    <span className="data-value">Successful Landing:</span>
                                    {
                                        post.rocket.first_stage.cores[0].land_success === null ? (
                                            <span> null</span>
                                        ) : (
                                            post.rocket.first_stage.cores[0].land_success ? ' true' : ' false'
                                        )
                                    }

                                </div>
                            );
                        })}
                    </div>
                </div>
            </div >
        </Layout>


    );
};

export default HomePage;