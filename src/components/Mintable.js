/* eslint-disable */
import { Fade, Reveal } from "react-awesome-reveal";
import { fadeInDownShorter, fadeInLeft, fadeInUp } from "./animation";
import { header_data } from "../prime";

import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";


const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input; 

import Web3 from "web3";



import { Panel, PanelGroup } from "rsuite";
import { Carousel } from "rsuite";
import { Notification, toaster } from "rsuite";
import { Loader } from "rsuite";
import { Badge } from "rsuite";

import { ethers } from "ethers";

function Mintable() {

  const connect = () => {
    return async dispatch => {
      dispatch(connectRequest());
      const abiResponse = await fetch("/assets/abi.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const abi = await abiResponse.json();
      const configResponse = await fetch("/assets/config.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const CONFIG = await configResponse.json();
      const { ethereum } = window;
      const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
      if (metamaskIsInstalled) {
        Web3EthContract.setProvider(ethereum);
        let web3 = new Web3(ethereum);
        try {
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
          const networkId = await ethereum.request({
            method: "net_version",
          });
          if (networkId == CONFIG.NETWORK.ID) {
            const SmartContractObj = new Web3EthContract(
              abi,
              CONFIG.CONTRACT_ADDRESS
            );
            dispatch(
              connectSuccess({
                account: accounts[0],
                smartContract: SmartContractObj,
                web3: web3,
              })
            );
            // Add listeners start
            ethereum.on("accountsChanged", accounts => {
              dispatch(updateAccount(accounts[0]));
            });
            ethereum.on("chainChanged", () => {
              window.location.reload();
            });
            // Add listeners end
          } else {
            dispatch(
              connectFailed(`Change network to ${CONFIG.NETWORK.NAME}.`)
            );
          }
        } catch (err) {
          dispatch(connectFailed("Something went wrong."));
        }
      } else {
        dispatch(connectFailed("Install Metamask."));
      }
    };
  };

  const fetchData = () => {
    return async dispatch => {
      dispatch(fetchDataRequest());
      try {
        let totalSupply = await store
          .getState()
          .blockchain.smartContract.methods.totalSupply()
          .call();
        // let cost = await store
        //   .getState()
        //   .blockchain.smartContract.methods.cost()
        //   .call();

        dispatch(
          fetchDataSuccess({
            totalSupply,
            // cost,
          })
        );
      } catch (err) {
        console.log(err);
        dispatch(fetchDataFailed("Could not load data from contract."));
      }
    };
  };

  const dispatch = useDispatch();
  const blockchain = useSelector(state => state.blockchain);
  const data = useSelector(state => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);

  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "Georle",
      SYMBOL: "ETH",
      ID: 5,
    },
    NFT_NAME: "TEST",
    SYMBOL: "TEST",
    MAX_SUPPLY: 5000,
    WEI_COST: 500000000000000,
    DISPLAY_COST: 0.0005,
    GAS_LIMIT: 30000000,
    MARKETPLACE: "Opensea",
    MARKETPLACE_LINK: "https://opensea.io",
    SHOW_BACKGROUND: false,
  });


  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", err => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then(receipt => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);




  return (
    <div>
      <div>
        <div className="relative md:mt-1 mt-12 px-8 lg:px-1">
          <div className="mx-auto max-w-3xl pt-32 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div>
                <Reveal
                  keyframes={fadeInDownShorter}
                  duration={700}
                  delay={300}>
                  <h1 className="text-3xl lg:text-6xl font-extrabold tracking-normal  text-center lg:text-center py-8">
                    {header_data.intro}
                  </h1>
                </Reveal>
                <Reveal
                  keyframes={fadeInDownShorter}
                  duration={700}
                  delay={500}>
                  <p className="my-10 text-lg lg:text-xl leading-8 px-3 lg:px-5 text-gray-300  text-center lg:text-center">
                    {header_data.headerText}
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-row bg-[#ffffff10] rounded-t-3xl justify-center">
          <div className="w-[50%] py-16 ">
            <div className="flex flex-col py-5 px-5">
              <div className="flex items-center justify-center px-2.5 ">
                <div className="flex items-center justify-center">
                  <Reveal
                    keyframes={fadeInDownShorter}
                    duration={1000}
                    delay={700}>
                    <div className="cursor-pointer text-xl font-semibold items-center px-12 py-6 lg:text-5xl text-medium text-center text-white bg-gradient-to-r from-purple-500 to-pink-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Mint Information
                    </div>
                  </Reveal>
                </div>
              </div>
              <div className="pl-12 py-10 opacity-80">
                <Reveal keyframes={fadeInLeft} duration={1000} delay={700}>
                  <div className="px-5 py-5 my-10  ">
                    <p id="wallet-address" className="text-xl font-bold  ">
                      Wallet Address :
                    </p>
                  </div>

                  <div className="space-y-7 px-5 py-5 my-3">
                    <p className="text-xl font-bold">
                      Mint Price Per Sale : 0.05 ETH
                    </p>
                    <p className="text-xl font-bold">
                      Mint Limit Per Wallet : 100 NFTs
                    </p>
                    <p className="text-xl font-bold">
                      Total Minting Amount : 2880 NFTs
                    </p>
                    <p className="text-xl font-bold">
                      Schedule : 25.01.2025, 02:00 (UTC)
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

          <div className="flex-1 items-center justify-center">
            <div className="flex flex-col lg:flex-row justify-center space-x lg:space-x-10 items-center mb-5 py-16  ">
              <Reveal keyframes={fadeInDownShorter} duration={1000} delay={700}>
                <div className="max-w-md bg-[#ffffff1a] hover:bg-[#ffffff29] transition duration-300 m-3 lg:m-0 ease-in-out space-y-7 w-100 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex items-center justify-center ">
                    <img
                      className=" p-2 w-100 h-48 lg:h-72 cover-fit rounded-2xl "
                      src="https://absatzwirtschaft-1cf93.kxcdn.com/wp-content/uploads/2022/05/how-to-nft-c-Adidas-1-1024x676.jpg"
                    />
                  </div>

                  <div className="pb-5 tracking-wide">
                    <div className="flex items-center justify-center">
                      <h5
                        onClick={e => {
                          e.preventDefault();
                          dispatch(connect());
                          getData();
                        }}
                        className="text-center border cursor-pointer border-gray-400 rounded-xl mb-6 px-32 py-3 text-xl lg:text-xl font-bold tracking-tight text-white dark:text-white">
                        Connect Wallet
                      </h5>
                    </div>

                    <div className="flex flex-row items-center justify-center mt-5">
                      <div className="px-3">
                        <p className="border border-white px-5 py-2 text-2xl cursor-pointer rounded-2xl font-bold hover:bg-[#ffffff36] ">
                          +
                        </p>
                      </div>

                      <div className="px-3">
                        <p className="border border-white px-16 py-2 text-2xl rounded-2xl font-bold hover:bg-[#ffffff36] ">
                          1
                        </p>
                      </div>

                      <div className="px-3">
                        <p className="border border-white px-5 py-2 text-2xl rounded-2xl cursor-pointer font-bold hover:bg-[#ffffff36] ">
                          -
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-center mt-5">
                      <button
                        onClick={e => {
                          e.preventDefault();
                          claimNFTs();
                          getData();
                        }}
                        className="inline-flex cursor-pointer items-center ml-2 my-5 px-12 py-3 text-sm lg:text-xl text-medium font-medium text-center text-white bg-purple-700 rounded-2xl hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Mint Now
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mintable;
