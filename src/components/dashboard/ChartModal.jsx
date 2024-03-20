
'use client';

import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import Link from "next/link";
import ReRadarChart from "@/components/dashboard/ReradarChart";
import Barchart from "@/components/dashboard/Barchart";
import Piechart from "@/components/dashboard/Piechart";


function Modals({data}) {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <button className="bg-purple-600 text-white py-2 px-5 rounded-md text-sm w-20" onClick={() => setOpenModal(true)}>View</button>
            <Modal className="w-full flex justify-center px-32 bg-black bg-opacity-35" show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Your Progress</Modal.Header>
                <Modal.Body className="flex justify-center">
                    <div className="">
                        {/*<ReRadarChart std_baro_data = {data} />*/}
                        <Barchart std_baro_data = {data?.test_data?.mark_array} />
                        <Piechart data={data.percentages} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {/*<Button onClick={() => setOpenModal(false)}>I accept</Button>*/}
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Modals;
