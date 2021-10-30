import React from 'react';
import { BiCheckCircle } from 'react-icons/bi'
import { FaRegTimesCircle } from 'react-icons/fa'
import './Information.css';

const Information = () => {
    return (
        <div className="information-container">
            <div className="mb-5">
                <h1 className="mb-3">Overview</h1>
                <p>
                    Included in National Geographic Canada’s 50 Places of a Lifetime, the Discovery Islands are a sea kayaking paradise, and as you will discover, one of the West Coast’s best kept secrets. You’ll find no better sea kayaking vacation throughout remote islands on BC’s central coast. <br />
                    Comprised of a dozen islands in the Discovery Passage between Vancouver Island and the mainland in British Columbia, we will take you kayaking throughout this sparsely inhabited remote group of islands on this kayaking tour. <br />
                    Paddling around the islands provides the ideal way to get close to nature and be completely enveloped in the beauty of towering trees, remote beaches, and mountains. Discover the wildlife that inhabit this region and the secrets of British Columbia’s rich and plentiful inter-tidal life while exploring magical waterways.‍
                </p>
            </div>
            <div className="mb-5">
                <h1 className="mb-3">TOUR HIGHLIGHTS</h1>
                <ul>
                    <li>Be enveloped in the beauty of towering trees, remote beaches, and mountains of the Canadian wilderness</li>
                    <li>Have close encounters with BC’s coastal wildlife; sea lions, seals, pacific white sided dolphins, otters, birds and some of the largest starfish in the world</li>
                    <li>Be on the lookout for Humpback whales that have made a strong resurgence in the Discovery Islands</li>
                    <li>Coastal cuisine designed by a local gourmet chef</li>
                    <li>Quality expedition tents & warm sleeping bags all included in the price of the trip</li>
                </ul>
            </div>
            <div className="mb-5">
                <h1 className="mb-3">Included/Excluded</h1>
                <div className="d-flex justify-content-between me-5 pe-5">
                    <div>
                        <p><BiCheckCircle color="green" /> Specialized bilingual guide</p>
                        <p><BiCheckCircle color="green" /> Private Transport</p>
                        <p><BiCheckCircle color="green" /> Entrance fees (Cable and car and Moon Valley)</p>
                        <p><BiCheckCircle color="green" /> Box lunch water, banana apple and chocolate</p>
                    </div>
                    <div>
                        <p><FaRegTimesCircle color="red" /> Departure Taxes</p>
                        <p><FaRegTimesCircle color="red" /> Entry Fees</p>
                        <p><FaRegTimesCircle color="red" /> 5 Star Accommodation</p>
                        <p><FaRegTimesCircle color="red" /> Airport Transfers</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;