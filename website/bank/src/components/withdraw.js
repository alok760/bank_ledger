import React, { useState, useEffect } from 'react';

function Withdraw() {
    const [selectedField, setSelectedField] = useState('');

    return (
        <div className="container py-5">
            <div className="row mb-4">
                <div className="col-lg-8 mx-auto text-center">
                    <h1 className="display-6">Deposit Money Into Bank Account</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <div className="card ">
                        <div className="card-header">
                            <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">

                                <ul role="tablist" className="nav bg-light nav-pills rounded nav-fill mb-3">
                                    <li className="nav-item"> <a data-toggle="pill" href="#net-banking" className="nav-link active"> <i className="fas fa-university"></i> To a Bank Account </a> </li>
                                    <li className="nav-item"> <a data-toggle="pill" href="#cash" className="nav-link "> <i className="fas fa-mobile-alt"></i> Cash Withdraw </a> </li>
                                </ul>
                            </div>

                            <div className="tab-content">

                                <div id="cash" className="tab-pane fade pt-3">
                                    <h6 className="pb-2">Select Bank Appointment Time for Cash Withdraw</h6>
                                    <div className="form-group "> <label for="Select Your Bank">
                                        <h6>Select your Branch</h6>
                                    </label> <select className="form-control" id="ccmonth">
                                            <option value="" selected disabled>--Please select your Branch-</option>
                                            <option>Branch 1</option>
                                            <option>Branch 2</option>
                                            <option>Branch 3</option>
                                            <option>Branch 4</option>
                                            <option>Branch 5</option>
                                        </select> </div>
                                    <div className="form-group "> <label className="radio-inline"> <input type="radio" name="optradio" checked /> Domestic </label> <label className="radio-inline"> <input type="radio" name="optradio" className="ml-5" />International </label></div>
                                    <p> <button type="button" className="btn btn-primary "><i className="fab fa-paypal mr-2"></i> Book Appointment </button> </p>
                                    <p className="text-muted"> Note: Successfull acknowledgement of cash transfer is upto Branch Manager's Approval </p>
                                </div>


                                <div id="net-banking" className="tab-pane fade show active pt-3">
                                    <div className="form-group "> <label for="Select Your Bank">
                                        <h6>Select your Bank</h6>
                                    </label> <select className="form-control" id="ccmonth">
                                            <option value="" selected disabled>--Please select your Bank--</option>
                                            <option>Bank 1</option>
                                            <option>Bank 2</option>
                                            <option>Bank 3</option>
                                            <option>Bank 4</option>
                                            <option>Bank 5</option>
                                            <option>Bank 6</option>
                                            <option>Bank 7</option>
                                            <option>Bank 8</option>
                                            <option>Bank 9</option>
                                            <option>Bank 10</option>
                                        </select> </div>

                                    <form>
                                        <div class="form-group row">
                                            <label for="text" class="col-4 col-form-label">Account Number</label>
                                            <div class="col-8">
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text">
                                                            <i class="fa fa-address-card"></i>
                                                        </div>
                                                    </div>
                                                    <input id="text" name="text" type="text" class="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="text1" class="col-4 col-form-label">Account Holder's Name</label>
                                            <div class="col-8">
                                                <input id="text1" name="text1" placeholder="John Doe" type="text" class="form-control"/>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="text2" class="col-4 col-form-label">IFSC Code</label>
                                            <div class="col-8">
                                                <input id="text2" name="text2" placeholder="BANK010101" type="text" class="form-control"/>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="offset-4 col-8">
                                                <button name="submit" type="submit" class="btn btn-primary">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="form-group">

                                        <p> <button type="button" className="btn btn-primary "><i className="fas fa-mobile-alt mr-2"></i> Proceed Payment</button> </p>
                                    </div>
                                    <p className="text-muted">Note: After clicking on the button, you will be directed to a secure gateway for payment. After completing the payment process, you will be redirected back to the website to view details of your order. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div />
        </div>
    );
}

export default Withdraw;


