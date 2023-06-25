import React from "react";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import {Modal, Button} from "react-bootstrap";

const Pagination = () => {
    const[players,setPlayers]= useState([]);
    const getPlayerData = asysnc () => {
        try {
            const data = await axios.get("")
        } catch (e) {
            console.log(e)
            
        }
    }
    return(
        <div className="App">
            <h1>Pagination</h1>
        </div>
    );
};
export default Pagination;
