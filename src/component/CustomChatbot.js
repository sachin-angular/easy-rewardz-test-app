import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from "react-simple-chatbot";


function CustomChatbot(props) {
    const steps = [
        {
         id: "Greet",
         message: "Hello, Welcome to our shop",
         trigger: "Done"
        },
        {
         id: "Done",
         message: "Have a great day !!",
         end: true
        }
      ];
  

    render() {
        return (
            <div>
                <ChatBot steps={steps} />
            </div>
        );
    }
}

export default CustomChatbot;