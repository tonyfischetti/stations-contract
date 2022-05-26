const { expect } = require("chai");
const { ethers } = require("hardhat");

import { Stations__factory } from '../typechain-types';

describe("Stations", function () {
  it("CHANGE ME", async function () {

    const cAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

    const signers = await ethers.getSigners();
    const me = signers[0];
    
    // just making sure
    expect(me.address).to.equal("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
    // const station = await new Stations__factory(signers[0]).deploy();

    const station = await new Stations__factory(me).deploy(me.address,
      "Den of understanding",
      "den-of-understanding",
      "an investigation into pulling the curtain back and seeing how the machinery works",
      "0x0000", "0x1E00", "");

    await station.deployed();

    const [ name, frequency, description, major, minor, creator, createdOn,
      stype, sflags, smetadata, currUser, currBID ] = await station.station_info();

    expect(name).to.equal("Den of understanding");
    expect(frequency).to.equal("den-of-understanding");
    expect(description).to.equal("an investigation into pulling the curtain back and seeing how the machinery works");
    // TODO: the other ones
    expect(creator).to.equal(me.address);
    // TODO: the other ones

    // TODO: check for righteous errors. .e.g.
    //  'error: need to be the station creator to inaugurate station'

    await station.inaugurate_station("icelip");

    // station.get_all_broadcasts().then(console.log).then(() => {
    //   console.log(me.address);
    // });
    
  });

  it("only creator can inaugurate", async function () {

    const cAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

    const signers = await ethers.getSigners();
    const me = signers[0];
    
    // just making sure
    expect(me.address).to.equal("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
    // const station = await new Stations__factory(signers[0]).deploy();

    const station = await new Stations__factory(me).deploy("0xC867eE69B6952047F73cD60D10bD5F5F90aF1CE8",
      "Den of understanding",
      "den-of-understanding",
      "an investigation into pulling the curtain back and seeing how the machinery works",
      "0x0000", "0x1E00", "");

    await station.deployed();

    await expect(station.inaugurate_station("icelip")).to.be.reverted;
      
  });


});


// describe("Stations 2", function () {
//   it("CHANGE ME 2", async function () {

//     const cAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

//     const signers = await ethers.getSigners();
//     const me = signers[0];
    
//     // just making sure
//     expect(me.address).to.equal("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
//     // const station = await new Stations__factory(signers[0]).deploy();

//     const station = await new Stations__factory(me).deploy(me.address,
//       "Den of understanding",
//       "den-of-understanding",
//       "an investigation into pulling the curtain back and seeing how the machinery works",
//       "0x0000", "0x1E00", "");

//     await station.deployed();

//     const [ name, frequency, description, major, minor, creator, createdOn,
//       stype, sflags, smetadata, currUser, currBID ] = await station.station_info();

//     expect(name).to.equal("Den of understanding");
//     expect(frequency).to.equal("den-of-understanding");
//     expect(description).to.equal("an investigation into pulling the curtain back and seeing how the machinery works");
//     // TODO: the other ones
//     expect(creator).to.equal(me.address);
//     // TODO: the other ones

//     // TODO: check for righteous errors. .e.g.
//     //  'error: need to be the station creator to inaugurate station'

//     await station.inaugurate_station("icelip");

//     station.get_all_broadcasts().then(console.log).then(() => {
//       console.log(me.address);
//     });
    

//   });
// });
