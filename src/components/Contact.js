import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,
            fNgay: "thu7"
        }
    }
    
    submitForm = (event) => {
        event.preventDefault();
        this.setState({
            isRedirect: true
        });
    }
    isChange = (event) => {
        const ten = event.target.name;
        const giatri = event.target.value;
        // console.log(ten);
        // console.log(giatri);
        this.setState({
            [ten]: giatri
        });
    }

    isFileChange = (event) => {
        //const fAnh = event.target.files[0];
        const tenanh = event.target.files[0].name;
        // console.log(tenanh);
        this.setState({
            fAnh: tenanh
        });
    }

    getGiaTri = () => {
        var noiDung = "";
        noiDung += "Tên nhận được là: " + this.state.fName;
        noiDung += " / Email nhận được là: " + this.state.fEmail;
        noiDung += " / Phone nhận được là: " + this.state.fPhone;
        noiDung += " / Message nhận được là: " + this.state.fMess;
        noiDung += " / Ngày nhận được là: " + this.state.fNgay;
        noiDung += " / Tên ảnh nhận được là: " + this.state.fAnh;
        return noiDung;
    }

    render() {
        if (this.state.isRedirect) {
            console.log(this.getGiaTri());
            return <Redirect to="/" />;
        }
        return (
            <div>
                <div>
                <header className="masthead tintuc">
                    <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-lg-12 my-auto">
                        <div className="header-content mx-auto ">
                            <h1 className="mb-1 text-center">Trang Liên hệ </h1>
                        </div>
                        </div>
                    </div>
                    </div>
                </header>
                {/* begin lienhe */}
                <section className="page-section" id="contact">
                    <div className="container">
                    {/* Contact Section Heading*/}
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Liên hệ với chúng tôi</h2>
                    <hr />
                    {/* Contact Section Form*/}
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                        {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.*/}
                        <form id="contactForm" name="sentMessage" noValidate="novalidate">
                            <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Name</label>
                                <input onChange={(event) => this.isChange(event)} name="fName" className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                                <p className="help-block text-danger" />
                            </div>
                            </div>
                            <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Email Address</label>
                                <input onChange={(event) => this.isChange(event)} name="fEmail" className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                <p className="help-block text-danger" />
                            </div>
                            </div>
                            <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Phone Number</label>
                                <input onChange={(event) => this.isChange(event)} name="fPhone" className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                                <p className="help-block text-danger" />
                            </div>
                            </div>
                            <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Message</label>
                                <textarea onChange={(event) => this.isChange(event)} name="fMess" className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                                <p className="help-block text-danger" />
                            </div>
                            </div>
                            <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Chọn ngày</label>
                                <select value={this.state.fNgay} onChange={(event) => this.isChange(event)} className="form-control" name="fNgay">
                                    <option value="thu3">Ngày thứ 3</option>
                                    <option value="thu5">Ngày thứ 5</option>
                                    <option value="thu7">Ngày thứ 7</option>
                                    <option value="chunhat">Ngày chủ nhật</option>
                                </select>
                            </div>
                            </div>
                            <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Chọn file</label>
                                <input onChange={(event) => this.isFileChange(event)} type="file" className="form-control-file" name="fAnh"/>
                            </div>
                            </div>
                            <br />
                            <div id="success" />
                            <div className="form-group"><button className="btn btn-primary btn-xl" id="sendMessageButton" type="submit" onClick={(event) => this.submitForm(event)}>Send</button></div>
                        </form>
                        </div>
                    </div>
                    </div>
                </section>
                {/* end lienhe */}
                </div>

            </div>
        );
    }
}

export default Contact;