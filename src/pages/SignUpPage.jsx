import React from 'react'
import logo from '../assets/images/signup-img.jpg'

const SignUpPage = () => {
    return (
        <>
            <div className="signup">
                <div className="signup-container">
                    <div className="signup-left">
                        <div className="signup-left_container">
                            <img className="signup-left_img" src={logo} alt="signup image" />
                        </div>
                    </div>
                    <div className="signup-right">
                        <div className="signup-right_container">
                            <h1 className="signup-right_title">
                                Please Sign Up
                            </h1>

                            <div className="signup-right_form">
                                <form className="signup-form">
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUpPage