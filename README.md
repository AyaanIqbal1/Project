# The Secure Electronic Health Records

This project represents a groundbreaking approach to healthcare data management, leveraging blockchain technology to revolutionize how medical information is stored, shared, and controlled. Built on the Ethereum blockchain and integrated with MetaMask for secure transactions, the system creates a robust, decentralized framework for electronic health records (SEHR).

At its core, the platform empowers patients with unprecedented control over their medical data. Through an intuitive interface, patients can securely upload health records, grant or revoke access permissions to healthcare providers, and maintain a comprehensive view of their medical history. This patient-centric approach ensures transparency while maintaining strict data privacy standards.

Healthcare providers benefit from streamlined access to patient information through a sophisticated permission system. Doctors can efficiently manage their patient roster, access authorized medical records, generate detailed consultation reports, and participate in a seamless medical information exchange. The system's integration with diagnostic centers enables the direct creation and sharing of EHR reports, fostering better coordination between all stakeholders in the healthcare journey.

The project's implementation of IPFS (InterPlanetary File System) ensures reliable, distributed storage of medical data, while Ganache provides a secure testing environment for blockchain transactions. This architectural approach not only enhances data security but also promotes interoperability between different healthcare systems and providers.

By combining blockchain's immutability with granular access controls, the platform creates a trustworthy ecosystem for health information exchange. This innovative solution addresses critical challenges in healthcare data management, ultimately leading to improved patient care, reduced administrative overhead, and better health outcomes through informed decision-making.




1. First you will need to access your windows powershell
 <img width="1023" alt="image" src="https://github.com/user-attachments/assets/8c7f33e5-9a3d-4b58-bb2e-4ee0b96cd156" />

2. Now you will need to follow these steps to download IPFS Kubo
   <img width="1829" alt="image" src="https://github.com/user-attachments/assets/0c7a34de-8686-4260-99c9-109c544d2d08" />

3. Now you will need to check the steps and see if you have downloaded it correctly
   <img width="1517" alt="image" src="https://github.com/user-attachments/assets/567ebba3-bbf7-4d75-8e7b-284d2ecc74e9" />

4. Now check if IPFS Daemon is working and should recieve an output "daemon is ready"
   <img width="1753" alt="image" src="https://github.com/user-attachments/assets/f7e28acd-9e18-4315-bac5-538648fa476a" />

5. Now we will need to download node.js
   <img width="1872" alt="image" src="https://github.com/user-attachments/assets/58e24c5d-fdf2-40b7-96e5-9f0707f8e1d1" />

6. Verify that node.js is downloaded correctly with the code " node -v"
   <img width="1908" alt="image" src="https://github.com/user-attachments/assets/384fee95-1881-4ec4-86ad-20d052889f12" />

7. Now we will need to download Ganache
   <img width="1842" alt="image" src="https://github.com/user-attachments/assets/16e62338-2f83-4be8-8428-2e65180f6f10" />

8. Open up Ganache and create an new workspace name it EHR and add your JSON FIle
   ![image](https://github.com/user-attachments/assets/edfa22de-b2c0-4804-a8af-b1d515c435d5)

9. Download Metamask as an extension on chrome
 <img width="1822" alt="image" src="https://github.com/user-attachments/assets/447e458d-18e3-423f-804a-7ce7558fd0a1" />

 10. Create an account and log into Metamask
   <img width="350" alt="image" src="https://github.com/user-attachments/assets/c4834b87-5952-4294-8e90-66e6b8bb4313" />

11.  Create an custom server on Metamask
    1. Name of the server I called SHR
     2. RPC Server is how ganache and Metamask will communicate its the server code on Ganache.
     3. Chain ID which will come up as soon as you enter some numbers
     4. Any currency symbol I used ETH

     <img width="308" alt="image" src="https://github.com/user-attachments/assets/783a848f-5447-445e-a64e-c42772b11c35" />


12. Go back to your VS Code and type in the terminal :
    truffle compile
    truffle migrate

13. Have all the files loaded up and type in the terminal
    npm start

14. Now the react script will start and the landing page will load up
    <img width="1772" alt="image" src="https://github.com/user-attachments/assets/5c5f50bb-0cf1-4e9d-8f9c-1b2993130338" />


15. First you will need register three accounts doctor,patient and diagnostic
    <img width="815" alt="image" src="https://github.com/user-attachments/assets/09cdc258-faa6-4eb6-ae7d-919d9d36b0e2" />

16. Fill in these details and it will need to use metamask for the crypto wallet address and tp be able to register the account
    <img width="731" alt="image" src="https://github.com/user-attachments/assets/adcc5b89-3a4d-4d82-8963-bad648a59232" />

17. Once you are loged in as a doctor you can see who your patients are and give them a prescription consultancy and afterwards you can be able to remove them using metamask to confirm the transaction
    <img width="1868" alt="image" src="https://github.com/user-attachments/assets/1629bba8-a8da-490b-a555-f80151c9445e" />

18. Diagnostic will be able to do something similar by completing a diagnostic report
    <img width="899" alt="image" src="https://github.com/user-attachments/assets/27c35360-007c-471d-9e52-d79974e69fea" />


19. The patient will be able to see what the report has in it to see what the next steps are
    <img width="599" alt="image" src="https://github.com/user-attachments/assets/7f9c3739-a72b-4075-b1e3-b97dfb75f08c" />

    












   

   




