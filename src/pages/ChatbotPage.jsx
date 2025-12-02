import React, { useState } from "react";
import { VortexContainer } from "../components/ui/vortex";
import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";
import { FileUpload } from "../components/ui/file-upload";
// NOTE: Import useModal here!
import { Modal, ModalBody, ModalContent, useModal } from "../components/ui/animated-modal"; 

// --- START: Component for the Modal Content (The Two-Step Upload) ---
const DocumentUploadContent = ({ onFileUpload }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    // Access the setOpen function from the context
    const { setOpen } = useModal(); 

    const handleFileSelect = (newFiles) => {
        setSelectedFile(newFiles.length > 0 ? newFiles[0] : null);
    };
    
    const handleFinalUpload = () => {
        if (selectedFile) {
            console.log("Finalizing upload for:", selectedFile.name);
            onFileUpload(selectedFile); 
            setSelectedFile(null);
            setOpen(false); // Close the modal
        }
    };

    return (
        <ModalContent className="p-8">
            <h3 className="text-xl text-white mb-4">Upload Document 📁</h3>
            <p className="text-gray-400 mb-6">Select or drag a file to upload for context:</p>
            
            <FileUpload onChange={handleFileSelect} />

            <button
                onClick={handleFinalUpload}
                disabled={!selectedFile}
                className={`mt-6 w-full py-2 text-white rounded-md transition ${
                    selectedFile ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-700 cursor-not-allowed'
                }`}
            >
                {selectedFile ? `Okay (Upload ${selectedFile.name})` : 'Select File First'}
            </button>
        
            <button
                onClick={() => setOpen(false)}
                className="mt-2 w-full py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition"
            >
                Close
            </button>
        </ModalContent>
    );
};
// --- END: Component for the Modal Content (The Two-Step Upload) ---

// --- START: New component to wrap the trigger button and use the hook ---
const UploadButton = () => {
    const { setOpen } = useModal(); 
    
    const handleUploadClick = () => {
        setOpen(true); // Manually open the modal
    };

    return (
        <button
            onClick={handleUploadClick}
            className="p-3 h-12 w-12 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition duration-200 flex items-center justify-center shadow-[0_4px_14px_0_rgb(109,40,217,39%)]"
            title="Upload Document"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                <path d="M12 11l0 6" />
                <path d="M9 14l3 3l3 -3" />
            </svg>
        </button>
    );
};
// --- END: New component to wrap the trigger button and use the hook ---


const ChatbotPage = () => {
    const placeholders = [
        "What's the weather like?",
        "Tell me a joke.",
        "What is the meaning of life?",
        "Can you help me with a task?",
        "What is your name?",
    ];

    const [messages, setMessages] = useState([
        { text: "Hi there! How can I help you?", sender: "bot" },
    ]);
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const onSubmit = (value) => {
        if (value.trim() === "") return;

        const userMessage = { text: value, sender: "user" };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInputValue("");

        // Simulate bot response
        setTimeout(() => {
            const botResponse = { text: "This is a simulated response.", sender: "bot" };
            setMessages((prevMessages) => [...prevMessages, botResponse]);
        }, 1000);
    };

    const handleFileUpload = (file) => {
        const fileMessage = { text: `File uploaded: ${file.name}. Processing...`, sender: "user" };
        setMessages((prevMessages) => [...prevMessages, fileMessage]);
    }

    return (
        <div className="w-full h-screen bg-black">
            <Modal> 
                <ModalBody className="max-w-lg bg-zinc-900 border border-purple-600 rounded-lg"> 
                    {/* The modal content remains the same */}
                    <DocumentUploadContent onFileUpload={handleFileUpload} />
                </ModalBody> 
                
                <VortexContainer
                    backgroundColor="black"
                    range={12}
                    speed={1}
                    hue={270}
                    className="flex items-center flex-col justify-end px-4 py-10 h-full"
                >
                    <div className="flex-grow w-full max-w-4xl mx-auto flex flex-col justify-end">
                        <div className="flex-grow w-full rounded-lg bg-black bg-opacity-50 backdrop-blur-md p-4 overflow-y-auto">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`flex ${
                                        message.sender === "user" ? "justify-end" : "justify-start"
                                    } mb-4`}
                                >
                                    <div
                                        className={`${
                                            message.sender === "user"
                                                ? "bg-purple-800"
                                                : "bg-gray-700"
                                        } text-white rounded-lg py-2 px-4 max-w-xs`}
                                    >
                                        {message.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="w-full mt-4 flex items-center space-x-3 justify-center">
                            {/* Use the new component instead of ModalTrigger */}
                            <UploadButton />
                            
                            <div className="flex-grow max-w-xl">
                                <PlaceholdersAndVanishInput
                                    placeholders={placeholders}
                                    onChange={handleChange}
                                    onSubmit={onSubmit}
                                />
                            </div>
                        </div>
                    </div>
                </VortexContainer>
            </Modal>
        </div>
    );
};

export default ChatbotPage;