import './App.css';
import React, { useState, useEffect } from 'react';
import getData from './components/Api';
import TransactionTable from './components/TransactionTable';
import Sanitize from './components/Sanitize';
import Deposit from './components/deposit';
import Withdraw from './components/withdraw';
import Modal from 'react-modal';

function App() {
  const [data, setData] = useState([]);
  const [showModalDep, setShowModalDep] = useState(false);
  const [modalDataWid, setModalDataWid] = useState(false);

  // Unedited Data Comes from API
  // Sanitize.js Corrects the transaction data and returns a simple list of transactions.
  useEffect(() => {
    async function fetchData() {
      const apiData = await getData();
      const sanitizedData = Sanitize(apiData);
      setData(sanitizedData);
    }
    fetchData();
  }, []);

  const customStyles = {
    content: {
      marginTop: '75px',
    },
  };

  const openModal = () => { setShowModalDep(true); }
  const closeModal = () => { setShowModalDep(false); }
  const openModalWid = () => { setModalDataWid(true); }
  const closeModalWid = () => { setModalDataWid(false); }

  return (
    <div className="App">
      <div className="card mb-3 d-flex" >
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src="https://icon-library.com/images/generic-profile-icon/generic-profile-icon-10.jpg" className="card-img photo" alt="..."></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">Welcome, John Doe</h3>
              <p className="card-text">Your Past transactions are listed Below</p>
              <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              <div className="mb-2 mt-auto">
                <button onClick={openModal} type="button" class="btn btn-primary mr-2">Deposit</button>
                <button onClick={openModalWid} type="button" class="btn btn-primary">Withdraw</button>
                <div />
                <h4 className="mt-3"> Balance: {data && data[data.length - 1] && data[data.length - 1].balance} </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {data && <TransactionTable transactionData={data} />}
      <Modal
        isOpen={showModalDep}
        contentLabel="Deposit"
        style={customStyles}
      >
        <button className="btn btn-warning float-right" onClick={closeModal}>close</button>
        <Deposit />
      </Modal>

      <Modal
        isOpen={modalDataWid}
        contentLabel="Withdraw"
        style={customStyles}
      >
        <button className="btn btn-warning float-right" onClick={closeModalWid}>close</button>
        <Withdraw />
      </Modal>
    </div>
  );
}

export default App;
